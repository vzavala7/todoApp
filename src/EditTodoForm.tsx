import React, { useContext } from 'react';
import {TextField} from '@material-ui/core';
import userInputState from './hooks/UseInputState';
import { DispatchContext } from './context/todosContext';

export default function EditTodoForm(props: any) {
    const {todo, toggle} = props;
    const dispatch = useContext(DispatchContext);
    const {id, task} = todo;
    const [value, handleChange, reset] = userInputState(task);
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                dispatch({type: 'EDIT_TODO', id: id, task: value});
                reset();
                toggle();
            }}
            style={{
                marginLeft: '1rem',
                width: '50%',
            }}
        >
            <TextField
                margin='normal'
                value={value}
                onChange={handleChange}
                fullWidth={true}
                autoFocus={true}
            />
        </form>
    )
}
