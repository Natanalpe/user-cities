import { responseInterceptor } from './interceptors/ResponseInterceptor';
import { errorInterceptor } from './interceptors';
import { Environment } from '../../../environments';
import axios from 'axios';

const Api = axios.create({
    baseURL: Environment.URL_BASE
});

Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error)
);

export { Api };