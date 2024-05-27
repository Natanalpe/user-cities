import { AxiosError } from "axios";

export const errorInterceptor = (error: AxiosError) => {
    if(error.message === 'Network error') {
        return Promise.reject(new Error('Erro de conexão.'));
    }

    if(error.response?.status === 401) {
        // Erro de autenticação
    }

    return Promise.reject(error);
};