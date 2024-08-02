import debounce from 'lodash.debounce';
import { useEffect, useMemo, useRef } from 'react';

export const useDebounce = (callback, timer = 1000) => {
    const debouncedCallbackRef = useRef();

    const debouncedCallback = useMemo(() => {
        const debouncedFunction = (...args) => {
            debouncedCallbackRef.current?.(...args);
        };

        return debounce(debouncedFunction, timer);
    }, [timer]);

    useEffect(() => {
        debouncedCallbackRef.current = callback;
    }, [callback, debouncedCallback]);

    useEffect(() => {
        return () => {
            debouncedCallback.cancel(); // Clean up the debounce timer
        };
    }, [debouncedCallback]);

    return debouncedCallback;
};

//! Example

// const Input = () => {
//     const [value, setValue] = useState();

//     const debouncedRequest = useDebounce(() => {
//         //! send request to the backend
//         //! access to latest state here
//*         console.log(value);
//     });

//     const onChange = (e) => {
//         const value = e.target.value;
//         setValue(value);

//         debouncedRequest();
//     };

//     return <input onChange={onChange} value={value} />;
// };
