import { createContext, useCallback, useContext, useMemo, useRef } from "react";

const GameEngineContext = createContext(null);

export function GameEngineProvider({ children }) {
    const engineRef = useRef(null);
    const goalRef = useRef(null);

    const setEngine = useCallback((engineInstance) => {
        engineRef.current = engineInstance;
    }, []);

    const clearEngine = useCallback(() => {
        engineRef.current = null;
    }, []);

    const setGoal = useCallback((goalSprite) => {
        if (goalRef.current && goalRef.current !== goalSprite) {
            goalRef.current.remove?.();
        }
        goalRef.current = goalSprite;
    }, []);

    const clearGoal = useCallback(() => {
        if (goalRef.current) {
            goalRef.current.remove?.();
        }
        goalRef.current = null;
    }, []);

    const value = useMemo(() => ({
        engineRef,
        goalRef,
        setEngine,
        clearEngine,
        setGoal,
        clearGoal
    }), [setEngine, clearEngine, setGoal, clearGoal]);

    return (
        <GameEngineContext.Provider value={value}>
            {children}
        </GameEngineContext.Provider>
    );
}

export function useGameEngine() {
    const context = useContext(GameEngineContext);
    if (!context) {
        throw new Error("useGameEngine must be used within a GameEngineProvider");
    }
    return context;
}
