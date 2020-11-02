import React, { useContext } from 'react';
import {Paper, TextField} from '@material-ui/core';
import userInputState from './hooks/UseInputState';
import { DispatchContext } from './context/todosContext';

export default function ToDoForm(props: any) {
    const [value, handleChange, reset] = userInputState('');
    const dispatch = useContext(DispatchContext);
    return (
        <Paper
            style={{
                margin: '1rem 0',
                padding: '0 1rem',
            }}
        >
            <form onSubmit={((e)=>{
                e.preventDefault();
                dispatch({ type: 'ADD_TODO', task: value })
                reset();
            })}
            >
            <TextField
                value={value}
                onChange={handleChange}
                margin='normal'
                label='Add new todo'
                fullWidth={true}
            />
            </form>
        </Paper>
    )
}