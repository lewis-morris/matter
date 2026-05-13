import { useCallback, useRef, useState } from "react";
import { getScoreStatus } from "../game/utils.js";

export function useScore(initialScore = 0) {
    const [score, setScoreState] = useState(initialScore);
    const [scoreStatus, setScoreStatus] = useState("");
    const scoreRef = useRef(initialScore);

    const applyStatus = useCallback((value) => {
        const rounded = Math.round(value);
        setScoreStatus(rounded > 0 ? getScoreStatus(rounded) : "");
    }, []);

    const setScore = useCallback((updater) => {
        setScoreState((prev) => {
            const next = typeof updater === "function" ? updater(prev) : updater;
            scoreRef.current = next;
            applyStatus(next);
            return next;
        });
    }, [applyStatus]);

    const incrementScore = useCallback((delta) => {
        if (!delta) {
            return;
        }
        setScore((prev) => prev + delta);
    }, [setScore]);

    const resetScore = useCallback(() => {
        scoreRef.current = initialScore;
        setScoreState(initialScore);
        setScoreStatus("");
    }, [initialScore]);

    return {
        score,
        scoreStatus,
        scoreRef,
        setScore,
        incrementScore,
        resetScore
    };
}
