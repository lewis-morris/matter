import { useCallback, useMemo, useState } from "react";
import { STARTING_MONEY, WEAPON_COSTS } from "../game/constants.js";

export function useInventory(initialMoney = STARTING_MONEY) {
    const [money, setMoney] = useState(initialMoney);
    const [inventory, setInventory] = useState([]);

    const inventoryCounts = useMemo(() => {
        return inventory.reduce((acc, key) => {
            acc[key] = (acc[key] ?? 0) + 1;
            return acc;
        }, {});
    }, [inventory]);

    const purchaseWeapon = useCallback((weaponKey) => {
        const cost = WEAPON_COSTS[weaponKey] ?? 0;
        if (money < cost) {
            return false;
        }
        setMoney((prev) => prev - cost);
        setInventory((prev) => [...prev, weaponKey]);
        return true;
    }, [money]);

    const sellWeapon = useCallback((weaponKey) => {
        const index = inventory.findIndex((item) => item === weaponKey);
        if (index === -1) {
            return false;
        }
        const cost = WEAPON_COSTS[weaponKey] ?? 0;
        setMoney((prev) => prev + cost);
        setInventory((prev) => {
            const copy = [...prev];
            copy.splice(index, 1);
            return copy;
        });
        return true;
    }, [inventory]);

    const resetInventory = useCallback(() => {
        setInventory([]);
        setMoney(initialMoney);
    }, [initialMoney]);

    return {
        money,
        inventory,
        inventoryCounts,
        purchaseWeapon,
        sellWeapon,
        resetInventory,
        setMoney,
        setInventory
    };
}
