import { useCallback, useRef } from "react";


export const useDebounce = (delay: number = 300, notDelayInFirstTime = true) => {

    const isFirsttime = useRef(notDelayInFirstTime);
    const debouncing = useRef<NodeJS.Timeout>();

    const debounce = useCallback((func: () => void) => {

        if (isFirsttime.current) {
            isFirsttime.current = false;
            func();
        } else {
            if (debouncing.current) {
                clearTimeout(debouncing.current);
            }

            debouncing.current = setTimeout(() => { func() }, delay);
        }
    }, [delay])

    return { debounce };
}