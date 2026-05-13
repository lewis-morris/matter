import { WEAPON_DEFINITIONS } from "./constants.js";
import { create_element } from "../matter_base.js";

const DEFAULT_POSITION = { x: 100, y: 200 };

function withDefaults(options) {
    if (!options) {
        return {};
    }
    const clone = { ...options };
    if (clone.data) {
        clone.data = { ...clone.data };
    }
    return clone;
}

export function spawnWeapon(key, x = DEFAULT_POSITION.x, y = DEFAULT_POSITION.y) {
    const definition = WEAPON_DEFINITIONS[key];
    if (!definition) {
        return null;
    }
    const { bodyType, width, height, options } = definition;
    return create_element(
        "img",
        x,
        y,
        width,
        height,
        withDefaults(options),
        bodyType === "block" ? "block" : "circle"
    );
}

export function spawnRandomWeapon(x = DEFAULT_POSITION.x, y = DEFAULT_POSITION.y) {
    const keys = Object.keys(WEAPON_DEFINITIONS);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return spawnWeapon(randomKey, x, y);
}
