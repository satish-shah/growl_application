import { useEffect, useState } from "react";

const useGrowl = (timeout = 3) => {
    const [isGrowlActive, setIsGrowlActive] = useState(false);
    const displayTime = timeout * 1000;

    useEffect(() => {
        let timeoutHandler;
        if (isGrowlActive) {
            timeoutHandler = setTimeout(() => {
                setIsGrowlActive(false);
            }, displayTime);
        }
        return () => {
            if (timeoutHandler) {
                clearTimeout(timeoutHandler);
            }
        };
    }, [isGrowlActive, displayTime]);

    return [

        isGrowlActive,

        (active) => {
            setIsGrowlActive(active);
        },
    ];
};

export default useGrowl;