import { v4 as uuid } from 'uuid';
import {ToDo} from './../ToDoAppState';

const todoReducer = (state: string, action: any) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {id: uuid(), task: action.task, completed: false}];
        case 'REMOVE_TODO':
            return state.filter((el: ToDo) => {
                return el.id !== action.id;
            });
        case 'TOGGLE_CHECKBOX':
            return state.map((todo: ToDo) => {
                return todo.id === action.id ? {...todo, completed: !todo.completed} : {...todo};
            });
        case 'EDIT_TODO':
            return state.map((todo: ToDo) => {
                return todo.id === action.id ? {...todo, task: action.task} : {...todo};
            });
        default:
            return state;
    }
}

export default todoReducer;
