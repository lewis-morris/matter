export const STARTING_MONEY = 150;

export const CHARACTERS = [
    { name: "George", image: "/images/head_sprite/george.png" },
    { name: "Rob", image: "/images/head_sprite/rob.png" },
    { name: "Rob1", image: "/images/head_sprite/rob1.png" },
    { name: "Detective Cox", image: "/images/head_sprite/luke.png" },
    { name: "Crazy Bird", image: "/images/head_sprite/crazy.png" },
    { name: "Mr Rye", image: "/images/head_sprite/rye.png" },
    { name: "The Big D", image: "/images/head_sprite/don.png" },
    { name: "Tam", image: "/images/head_sprite/tam.png" },
    { name: "Lewis", image: "/images/head_sprite/lewi.png" },
    { name: "Colley", image: "/images/head_sprite/lewis.png" },
    { name: "Bald Guy", image: "/images/head_sprite/bald.png" },
    { name: "Jake", image: "/images/head_sprite/jake.png" },
    { name: "Jake Alt", image: "/images/head_sprite/jakek.png" }
];

export const WEAPON_COSTS = {
    bat: 45,
    knuckle: 18,
    mace: 65,
    brick: 28,
    dildo: 9,
    magnum: 32,
    joint: 6,
    chair: 36,
    stella: 14,
    ball: 12,
    golf: 9,
    money: 8
};

export const WEAPON_DEFINITIONS = {
    bat: {
        bodyType: "block",
        width: "200px",
        height: "35px",
        options: { density: 0.085, restitution: 0.28, friction: 0.38, strength: 0.6, src: "/images/bat.png" },
        stats: { bounce: 65, sticky: 40, strength: 70, density: 60 }
    },
    knuckle: {
        bodyType: "block",
        width: "70px",
        height: "34px",
        options: { density: 0.07, restitution: 0.12, friction: 0.65, strength: 0.55, src: "/images/nuckle.png" },
        stats: { bounce: 22, sticky: 44, strength: 52, density: 58 }
    },
    mace: {
        bodyType: "block",
        width: "110px",
        height: "160px",
        options: { density: 0.14, restitution: 0.18, friction: 0.5, strength: 0.95, src: "/images/mace.png" },
        stats: { bounce: 32, sticky: 36, strength: 92, density: 95 }
    },
    brick: {
        bodyType: "block",
        width: "110px",
        height: "55px",
        options: { density: 0.11, restitution: 0.02, friction: 0.98, strength: 0.8, src: "/images/brick.png" },
        stats: { bounce: 8, sticky: 98, strength: 78, density: 85 }
    },
    dildo: {
        bodyType: "block",
        width: "26px",
        height: "105px",
        options: { density: 0.018, restitution: 0.4, friction: 0.65, strength: 0.12, src: "/images/dildo.png" },
        stats: { bounce: 45, sticky: 50, strength: 12, density: 12 }
    },
    magnum: {
        bodyType: "block",
        width: "30px",
        height: "110px",
        options: { density: 0.09, restitution: 0.04, friction: 0.1, strength: 0.85, src: "/images/magnum.png" },
        stats: { bounce: 10, sticky: 18, strength: 82, density: 68 }
    },
    joint: {
        bodyType: "block",
        width: "96px",
        height: "28px",
        options: { density: 0.02, restitution: 0.44, friction: 0.3, strength: 0.18, src: "/images/joint.png" },
        stats: { bounce: 52, sticky: 22, strength: 18, density: 12 }
    },
    chair: {
        bodyType: "block",
        width: "140px",
        height: "160px",
        options: { density: 0.1, restitution: 0.2, friction: 0.62, strength: 0.74, src: "/images/chair.png" },
        stats: { bounce: 24, sticky: 55, strength: 68, density: 70 }
    },
    stella: {
        bodyType: "block",
        width: "44px",
        height: "120px",
        options: { density: 0.03, restitution: 0.36, friction: 0.25, strength: 0.28, src: "/images/stella.png" },
        stats: { bounce: 48, sticky: 32, strength: 24, density: 25 }
    },
    ball: {
        bodyType: "circle",
        width: "52px",
        height: "52px",
        options: { density: 0.03, restitution: 0.62, friction: 0.02, strength: 0.35, src: "/images/ball.png" },
        stats: { bounce: 88, sticky: 18, strength: 34, density: 30 }
    },
    golf: {
        bodyType: "circle",
        width: "54px",
        height: "54px",
        options: { density: 0.04, restitution: 0.78, friction: 0.03, strength: 0.26, src: "/images/golf.png" },
        stats: { bounce: 90, sticky: 18, strength: 22, density: 28 }
    },
    money: {
        bodyType: "block",
        width: "60px",
        height: "60px",
        options: { density: 0.015, restitution: 0.6, friction: 0.08, strength: 0.12, src: "/images/dollar.png" },
        stats: { bounce: 60, sticky: 12, strength: 10, density: 12 }
    }
};

export const POWER_UPS = [
    {
        id: "sticky-surge",
        name: "Sticky Surge",
        effect: "sticky_items",
        type: "seconds",
        durationRange: [5000, 7000],
        intensity: "high",
        phases: ["early", "late"],
        weight: 3
    },
    {
        id: "make-it-rain",
        name: "Make It Rain",
        effect: "money_rain",
        type: "seconds",
        durationRange: [2400, 3200],
        payload: "golf",
        phases: ["early", "mid"],
        weight: 2
    },
    {
        id: "bat-barrage",
        name: "Bat Barrage",
        effect: "air_drop",
        type: "count",
        countRange: [4, 6],
        payload: "bat",
        phases: ["mid"],
        weight: 2
    },
    {
        id: "golf-shower",
        name: "Golf Shower",
        effect: "air_drop",
        type: "count",
        countRange: [6, 9],
        payload: "golf",
        phases: ["mid"],
        weight: 1
    },
    {
        id: "random-cache",
        name: "Random Cache",
        effect: "air_drop",
        type: "count",
        countRange: [5, 8],
        phases: ["mid", "late"],
        weight: 1
    },
    {
        id: "reverse-gravity",
        name: "Reverse Gravity",
        effect: "reverse_gravity",
        type: "seconds",
        durationRange: [3600, 5600],
        phases: ["mid"],
        weight: 2
    },
    {
        id: "double-gravity",
        name: "Heavy Crush",
        effect: "double_gravity",
        type: "seconds",
        durationRange: [3200, 5200],
        phases: ["late"],
        weight: 1
    },
    {
        id: "zero-g",
        name: "Zero-G Bubble",
        effect: "no_gravity",
        type: "seconds",
        durationRange: [2600, 4200],
        phases: ["late"],
        weight: 1
    },
    {
        id: "screenquake",
        name: "Screen Quake",
        effect: "shake",
        type: "count",
        countRange: [3, 4],
        magnitude: 1.6,
        phases: ["late"],
        weight: 1
    },
    {
        id: "time-gift",
        name: "Time Gift",
        effect: "addseconds",
        type: "addseconds",
        durationRange: [3, 6],
        phases: ["mid", "late"],
        weight: 1
    }
];

export const POWERUP_RANGE_BY_TYPE = {
    seconds: [4000, 7000],
    count: [4, 7],
    addseconds: [3, 6]
};
