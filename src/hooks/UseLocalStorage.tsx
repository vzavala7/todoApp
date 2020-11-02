import {useReducer, useEffect} from 'react';

const UselocalStorageState = (key: string, defaultVal: any, reducer: (a: any, b: object) => void) => {
    const [state, dispatch] = useReducer(reducer, defaultVal, () => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
        } catch (e) {
            val = defaultVal;
        }
        return val;
    });      
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);
    return [state, dispatch]
}

export default UselocalStorageState;