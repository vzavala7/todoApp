import { useState } from 'react';

export default (initialValue: any) => {
    const [state, setState] = useState(initialValue);
    const toggle = () => {
        setState(!state);
    };
    return [state, toggle];
};