import { Environment } from "../../environments";
import { Api } from "../api/axios-config"

interface IListagemPessoa {
    id: number,
    nomeCompleto: string,
    email: string,
    cidadeId: number
}

interface IDetalhePessoas {
    id: number,
    nomeCompleto: string,
    email: string,
    cidadeId: number
}

type TPessoaComTotalCount = {
    data: IListagemPessoa[],
    totalCount: number
}

const getAll = async (page = 1, filter = ''): Promise<TPessoaComTotalCount | Error> => {
    try {
        const urlRelativa = `/pessoas?_page=${page}&_per_page=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;
        const { data, headers } = await Api.get(urlRelativa);

        if (data) {
            return { data, totalCount: headers['x-total-count'] || Environment.LIMITE_DE_LINHAS };
        }

        return new Error('Erro ao listar registros!');

    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao listar registros!');
    }
}


const getById = async (id: number): Promise<IDetalhePessoas | Error> => {
    try {
        const urlRelativa = `/pessoas/${id}`;
        const { data } = await Api.get(urlRelativa);

        if (data) {
            return data;
        }

        return new Error('Usuário inexistente.');
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Falha ao encontrar usuário.');
    }
}

const create = async (dadosPessoa: Omit<IDetalhePessoas, 'id'>): Promise<number | Error> => {
    try {
        const { data } = await Api.post<IDetalhePessoas>('/pessoas', dadosPessoa);

        if (data) {
            return data.id;
        }

        return new Error("Falha ao criar registro.");
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Falha ao criar registro.');
    }
}

const updateById = async (id: number, pessoaAtualizada: IDetalhePessoas): Promise<void | Error> => {

    try {
        await Api.put<IDetalhePessoas>(`/pessoas/${id}`, pessoaAtualizada);
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Falha ao atualizar registro.');
    }
}

const deleteById = async (id: number): Promise<void | Error> => {
    try {
        await Api.delete(`/pessoas/${id}`);
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || "Falha ao apagar registro.");
    }
}

export const PessoasService = { getAll, getById, create, updateById, deleteById };