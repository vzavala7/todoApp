import {ToDo} from './../ToDoAppState';
import { v4 as uuid } from 'uuid';
import UseLocalStorageState from './UseLocalStorage';

export default (initialTodos: any) => {
    const [todos, setTodos] = UseLocalStorageState('todos', initialTodos);
    const addToDo = (newTodoText: string) => {
        setTodos([...todos, {id: uuid(), task: newTodoText, completed: false}]);
    };
    const removeToDo = (id: string) => {
        const newArr = todos.filter((el: ToDo) => {
            return el.id !== id;
        })
        setTodos(newArr);
    };
    const toggleCheckbox = (id: string) => {
        const newArr = todos.map((todo: ToDo) => {
            return todo.id === id ? {...todo, completed: !todo.completed} : {...todo};
        });
        setTodos(newArr);
    };
    const editToDo = (id: string, newTask: string) => {
        const newArr = todos.map((todo: ToDo) => {
            return todo.id === id ? {...todo, task: newTask} : {...todo};
        });
        setTodos(newArr);
    };
    return {
        todos,
        addToDo,
        removeToDo,
        toggleCheckbox,
        editToDo,
    };
};
