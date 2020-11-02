import React from 'react';
import {Typography,
        Paper,
        AppBar,
        Toolbar,
        Grid
    } from '@material-ui/core';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import UseTodoState from './hooks/UseTodoState';
import { TodosProvider } from './context/todosContext';

export default function ToDoApp() {
    const {todos} = UseTodoState([]);

    return (
        <Paper
            style={{
                padding: '0',
                margin: '0',
                height: '100vh',
                backgroundColor: '#fafafa',
            }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{height: '64px'}}>
                <Toolbar>
                    <Typography color='inherit'>To Do App</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{marginTop: '1rem'}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodosProvider>
                        <ToDoForm />
                        {todos.length > 0 &&
                            <ToDoList />
                        }
                    </TodosProvider>
                </Grid>
            </Grid>
        </Paper>
        )
}
