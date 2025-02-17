import { IUser } from "../Interfaces/User/user.interface";
import { IFilterOptions } from "../Interfaces/filter-option.interface";
import { isWithinInterval } from 'date-fns';

const filterUsersList = (filterOptions: IFilterOptions, usersList: IUser[]): IUser[] => {
    let filteredList: IUser[] = [];

    filteredList = filterUsersListByName(filterOptions.name, usersList);

    filteredList = filterUsersListByStatus(filterOptions.status, filteredList);

    filteredList = filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

    return filteredList;
}

const filterUsersListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
    const NAME_NOT_TYPPED = name === undefined;

    if (NAME_NOT_TYPPED) {
        return usersList;
    }

    const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()));

    return filteredList;
}

const filterUsersListByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
    const STATUS_NOT_SELECTED = status === undefined;

    if (STATUS_NOT_SELECTED) {
        return usersList;
    }

    const filteredList = usersList.filter((user) => user.ativo === status);

    return filteredList;
}

const filterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] => {
    const DATES_NOT_SELECTED =
        startDate === undefined ||
        startDate === null ||
        endDate === undefined ||
        endDate === null;

    if (DATES_NOT_SELECTED) {
        return usersList;
    }

    const filteredList = usersList.filter((user) => isWithinInterval(new Date(user.dataCadastro), {
        start: startDate,
        end: endDate,
    }));

    return filteredList;
}

export { filterUsersList }