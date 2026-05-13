import { useCallback, useRef, useState } from "react";

export function usePowerups() {
    const [queuedPowerup, setQueuedPowerup] = useState(null);
    const [activePowerup, setActivePowerup] = useState(null);

    const queuedPowerupRef = useRef(null);
    const activePowerupRef = useRef(null);

    const queuePowerup = useCallback((value) => {
        queuedPowerupRef.current = value;
        setQueuedPowerup(value);
    }, []);

    const clearQueuedPowerup = useCallback(() => {
        queuedPowerupRef.current = null;
        setQueuedPowerup(null);
    }, []);

    const setActivePowerupState = useCallback((value) => {
        activePowerupRef.current = value;
        setActivePowerup(value);
    }, []);

    const clearActivePowerup = useCallback(() => {
        activePowerupRef.current = null;
        setActivePowerup(null);
    }, []);

    return {
        queuedPowerup,
        activePowerup,
        queuePowerup,
        clearQueuedPowerup,
        setActivePowerupState,
        clearActivePowerup,
        queuedPowerupRef,
        activePowerupRef
    };
}
