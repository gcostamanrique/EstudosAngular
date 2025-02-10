
export interface Dados {
    nome: string;
    numero: number;
    aceite: boolean;
}

export class DadosTeste {
    listaDados: Dados[] = [
        {nome: 'nome 01', numero: 1, aceite: true},
        {nome: 'nome 02', numero: 2, aceite: false},
        {nome: 'nome 03', numero: 3, aceite: false},
        {nome: 'nome 04', numero: 4, aceite: true},
        {nome: 'nome 05', numero: 5, aceite: true},
    ];
}
