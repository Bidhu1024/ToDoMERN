import API from "../axios";

export const createTodo = async (todo) => {
    const response = await API.post('/todos', todo);
    return response.data;
};