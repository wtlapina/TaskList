import axios, { AxiosResponse } from 'axios'
import { ITodo } from '../models/todo';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = (response: AxiosResponse) => response.data;

const sleep = (ms: number) => (response: AxiosResponse) => 
    new Promise<AxiosResponse>(resolve => setTimeout(() => resolve(response), ms));

const requests = {
    get: (url: string) => axios.get(url).then(sleep(1)).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(sleep(1)).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(sleep(1)).then(responseBody),
    del: (url: string) => axios.delete(url).then(sleep(1)).then(responseBody) 
};

const ToDos = {
    list: (): Promise<ITodo[]> => requests.get('/todos'),
    create: (toDo: ITodo) => requests.post('/todos', toDo),
    complete: (toDo: ITodo) => requests.put(`/todos/status/${toDo.id}`, toDo),
    delete: (id: string) => requests.del(`/todos/${id}`)
};

export default {
    ToDos
}