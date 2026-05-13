export function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function formatSecondsToClock(seconds) {
    const clamped = Math.max(0, seconds);
    const wholeSeconds = Math.floor(clamped);
    return `00:${String(wholeSeconds).padStart(2, "0")}`;
}

export function getScoreStatus(score) {
    if (score < 500) {
        return "STATUS: You're shit at this";
    }
    if (score < 1000) {
        return "STATUS: You're worse than Rob";
    }
    if (score < 2500) {
        return "STATUS: Go home crying to mummy";
    }
    if (score < 5000) {
        return "STATUS: Getting better, but below average";
    }
    if (score < 10000) {
        return "STATUS: Now we're getting somewhere";
    }
    if (score < 20000) {
        return "STATUS: That was a belter.";
    }
    if (score < 30000) {
        return "STATUS: High score territory.";
    }
    if (score < 40000) {
        return "STATUS: Are you cheating?";
    }
    if (score < 50000) {
        return "STATUS: Hax0r";
    }
    if (score < 100000) {
        return "STATUS: God Mode Activated";
    }
    return "STATUS: Beyond comprehension";
}

function legacyUuid() {
    let d = Date.now();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (char === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
}

export function ensureUuid() {
    if (typeof window === "undefined") {
        return null;
    }
    const existing = window.localStorage.getItem("uuid");
    if (existing) {
        return existing;
    }
    const generator = (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function")
        ? () => crypto.randomUUID()
        : legacyUuid;
    const generated = generator();
    window.localStorage.setItem("uuid", generated);
    return generated;
}

export function pickPowerupDuration(powerup, rangeMap) {
    if (!powerup) {
        return 0;
    }
    if (Array.isArray(powerup.countRange)) {
        const [min, max] = powerup.countRange;
        return randomIntFromInterval(min, max);
    }
    if (Array.isArray(powerup.durationRange)) {
        const [min, max] = powerup.durationRange;
        return randomIntFromInterval(min, max);
    }
    const type = powerup.type;
    const [min, max] = rangeMap[type] ?? [1, 1];
    return randomIntFromInterval(min, max);
}
