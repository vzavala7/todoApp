import React, { useContext } from 'react';
import {List,
    Paper,
    Divider,
} from '@material-ui/core';
import {ToDo} from './ToDoAppState';
import ToDoItem from './ToDoItem';
import { TodosContext } from './context/todosContext';

interface ToDoListProps {
    todos: ToDo[];
    remove: (id: string)=>void;
    toggle: (id: string)=>void;
    edit: (id: string, newTodo: string)=>void;
}

export default function ToDoList() {
    const todos = useContext(TodosContext);
return (
    <Paper>
        <List>
            {todos.map((todo: ToDo, index: number) => {
                return (
                    <div
                        key={todo.id}
                    >
                    <ToDoItem
                        todo={todo}
                    />
                    { index < todos.length - 1  && <Divider />}
                    </div>
            )})}
        </List>
    </Paper>)
}
