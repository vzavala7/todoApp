import React, { createContext } from 'react'
import todoReducer from './../reducers/todoReducer';
import useLocalStorage from './../hooks/UseLocalStorage';

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
    const [todos, dispatch] = useLocalStorage('todos', [], todoReducer);
    return(
        <TodosContext.Provider value={todos}>
        <DispatchContext.Provider value={dispatch}>
            {props.children}
        </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}