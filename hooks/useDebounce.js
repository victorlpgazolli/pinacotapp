import React, { useCallback, useRef } from 'react'

const useDebounce = (
    callback,
    timeout
) => {
    const callBackref = useRef(null);

    const memoisedCallback = useCallback((...values) => {
        callBackref.current && clearTimeout(callBackref.current)
        callBackref.current = setTimeout(() => callback(...values), timeout);
    }, [callback, timeout]);

    return memoisedCallback;
}

export default useDebounce