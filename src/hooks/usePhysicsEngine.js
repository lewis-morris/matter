import { useCallback, useRef } from "react";
import { engine as MatterEngine, create_element, create_constraint } from "../matter_base.js";
import { GAME_OPTIONS } from "../config/gameOptions.js";
import { useGameEngine } from "../context/GameEngineContext.jsx";

/**
 * Centralizes all interactions with the Matter.js-based engine.
 * Exposes lifecycle helpers so components can spawn the goal, weapons, and manage collisions
 * without dealing with global window state.
 */
export function usePhysicsEngine() {
    const { engineRef, goalRef, setEngine, clearEngine, setGoal, clearGoal } = useGameEngine();
    const activeGoalAnchorRef = useRef(null);

    const createEngine = useCallback((collisionHandler) => {
        const game = new MatterEngine({
            onCollision: collisionHandler,
            goalPhysics: GAME_OPTIONS.goal ?? {}
        });
        setEngine(game);
        return game;
    }, [setEngine]);

    const spawnGoal = useCallback((game, {
        x,
        y,
        anchorY,
        spriteSrc,
        tetherEnabled = true,
        tetherWidth = 2
    }) => {
        if (!game) {
            return null;
        }
        const goal = create_element(
            "img",
            x,
            y,
            "100px",
            "100px",
            {
                density: 0.12,
                src: spriteSrc,
                data: { goal: "true" }
            }
        );
        goal.el.style.zIndex = "3";
        setGoal(goal);
        game.setGoal(goal);
        if (tetherEnabled) {
            activeGoalAnchorRef.current = create_constraint(goal, "div", x, anchorY, tetherWidth);
        } else if (activeGoalAnchorRef.current?.remove) {
            activeGoalAnchorRef.current.remove();
            activeGoalAnchorRef.current = null;
        } else {
            activeGoalAnchorRef.current = null;
        }
        return goal;
    }, [setGoal]);

    const spawnWeapon = useCallback((weaponFactory, weaponKey, x, y) => {
        return weaponFactory(weaponKey, x, y);
    }, []);

    const destroyEngine = useCallback(() => {
        if (activeGoalAnchorRef.current?.remove) {
            activeGoalAnchorRef.current.remove();
        }
        activeGoalAnchorRef.current = null;
        clearGoal();
        clearEngine();
    }, [clearEngine, clearGoal]);

    return {
        engineRef,
        goalRef,
        createEngine,
        spawnGoal,
        spawnWeapon,
        destroyEngine
    };
}
