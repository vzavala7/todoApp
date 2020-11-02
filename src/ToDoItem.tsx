import React, { useContext, memo } from 'react';
import {
    Checkbox,
    ListItem,
    ListItemText,
    IconButton,
    ListItemSecondaryAction
} from '@material-ui/core';
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"
import EditTodoForm from './EditTodoForm';
import useToggleState from './hooks/UseToggleState';
import { DispatchContext } from './context/todosContext';

function ToDoItem(props:any) {
    const dispatch = useContext(DispatchContext);
    const {task, id, completed} = props.todo;
    const [editing, toggleIsEditing] = useToggleState(false); 
    return (
        <>
            <ListItem
                style={{
                    height: '64px',
                }}
            >
                {editing ?
                <EditTodoForm
                    todo={props.todo}
                    toggle={toggleIsEditing}
                /> :
                <>
                    <Checkbox
                        tabIndex={-1}
                        checked={completed}
                        onChange={()=>dispatch({type: 'TOGGLE_CHECKBOX', id: id})}
                    />
                    <ListItemText
                        style={{
                            textDecoration: completed ? 'line-through' : 'none',
                        }}
                    >
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton
                            aria-label='Delete'
                            onClick={() => dispatch({type: 'REMOVE_TODO', id: id})}
                        >
                            <DeleteIcon />
                        </IconButton>
                        <IconButton
                            aria-label='Edit'
                            onClick={toggleIsEditing}
                        >
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            }
            </ListItem>
        </>
    )
}

export default memo(ToDoItem);
