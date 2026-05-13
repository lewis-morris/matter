import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import StorefrontIcon from "@mui/icons-material/Storefront";
import StopIcon from "@mui/icons-material/Stop";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import HomeIcon from "@mui/icons-material/Home";

import { DEFAULT_GRAVITY } from "./matter_base.js";
import { CHARACTERS, POWER_UPS, POWERUP_RANGE_BY_TYPE, STARTING_MONEY, WEAPON_COSTS, WEAPON_DEFINITIONS } from "./game/constants.js";
import { ensureUuid, pickPowerupDuration, randomIntFromInterval } from "./game/utils.js";
import { spawnWeapon } from "./game/spawn.js";
import { CanvasStage } from "./components/CanvasStage.jsx";
import { ScorePanel } from "./components/ScorePanel.jsx";
import { PowerUpStore } from "./components/PowerUpStore.jsx";
import { WeaponHealthBar } from "./components/WeaponHealthBar.jsx";
import { useInventory } from "./hooks/useInventory.js";
import { useScore } from "./hooks/useScore.js";
import { useIsHydrated } from "./hooks/useIsHydrated.js";
import { usePowerups } from "./hooks/usePowerups.js";
import { usePhysicsEngine } from "./hooks/usePhysicsEngine.js";
import { GAME_OPTIONS } from "./config/gameOptions.js";

const GAME_DURATION = 60; // seconds
const POWERUP_TIMELINE_SECONDS = [8, 22, 36, 50];

function CharacterSelector({
    character,
    onNext,
    onPrev
}) {
    return (
        <Stack direction="row" spacing={3} alignItems="center" justifyContent="center" className="character-carousel">
            <IconButton color="primary" size="large" onClick={onPrev} aria-label="Previous character">
                <ArrowBackIosNewIcon />
            </IconButton>
            <Stack spacing={2} alignItems="center" className="character-card">
                <img className="d-sprite" src={character.image} alt={character.name} />
                <Typography variant="h4" fontWeight={600}>{character.name}</Typography>
            </Stack>
            <IconButton color="primary" size="large" onClick={onNext} aria-label="Next character">
                <ArrowForwardIosIcon />
            </IconButton>
        </Stack>
    );
}

function StartDialog({
    open,
    character,
    onNext,
    onPrev,
    onStart,
    onStore,
    onLeaderboard,
    inventory,
    money,
    disabled
}) {
    const inventoryPreview = useMemo(() => {
        if (!inventory.length) {
            return "Empty";
        }
        const counts = inventory.reduce((acc, key) => {
            acc[key] = (acc[key] ?? 0) + 1;
            return acc;
        }, {});
        return Object.entries(counts)
            .map(([key, count]) => `${key} x${count}`)
            .join(" · ");
    }, [inventory]);

    return (
        <Dialog open={open} maxWidth="md" fullWidth>
            <DialogTitle>Select your fighter</DialogTitle>
            <DialogContent dividers>
                <Stack spacing={4} alignItems="center">
                    <Typography variant="subtitle1" color="text.secondary">
                        Smash and win.
                    </Typography>
                    <CharacterSelector character={character} onNext={onNext} onPrev={onPrev} />
                    <Paper elevation={1} sx={{ p: 2, width: "100%" }}>
                        <Stack spacing={1.5}>
                            <Typography variant="subtitle2">Inventory</Typography>
                            <Typography variant="body2" color="text.secondary">{inventoryPreview}</Typography>
                            <Typography variant="subtitle2" mt={1}>Money left: £{money.toFixed(2)}</Typography>
                        </Stack>
                    </Paper>
                </Stack>
            </DialogContent>
            <DialogActions
                sx={{
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "stretch", sm: "center" },
                    justifyContent: { xs: "flex-start", sm: "space-between" },
                    gap: { xs: 2, sm: 1 },
                    width: "100%"
                }}
            >
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    sx={{ flexGrow: 1, width: "100%", alignItems: { xs: "stretch", sm: "center" } }}
                >
                    <Button
                        startIcon={<StorefrontIcon />}
                        onClick={onStore}
                        color="secondary"
                        variant="outlined"
                        size="large"
                        fullWidth
                    >
                        Open Store
                    </Button>
                    <Button
                        onClick={onStart}
                        variant="contained"
                        disabled={disabled}
                        size="large"
                        fullWidth
                    >
                        Start Game
                    </Button>
                </Stack>
                <Button
                    startIcon={<EmojiEventsIcon />}
                    onClick={onLeaderboard}
                    color="inherit"
                    variant="outlined"
                    size="large"
                    fullWidth
                    sx={{ width: { xs: "100%", sm: "auto" }, minWidth: { sm: 220 } }}
                >
                    Leaderboard
                </Button>
            </DialogActions>
        </Dialog>
    );
}


function WeaponCard({ weaponKey, onAdd, onRemove, ownedCount, money }) {
    const definition = WEAPON_DEFINITIONS[weaponKey];
    const cost = WEAPON_COSTS[weaponKey] ?? 0;
    return (
        <Card variant="outlined">
            <CardContent>
                <Stack spacing={2} alignItems="center">
                    <img className="w-sprite" src={definition.options.src} alt={weaponKey} />
                    <Typography variant="h6" textTransform="capitalize">{weaponKey}</Typography>
                    <Stack spacing={1} sx={{ width: "100%" }}>
                        <Typography variant="caption">Bounce</Typography>
                        <LinearProgress variant="determinate" value={definition.stats.bounce} color="primary" />
                        <Typography variant="caption">Sticky</Typography>
                        <LinearProgress variant="determinate" value={definition.stats.sticky} color="secondary" />
                        <Typography variant="caption">Strength</Typography>
                        <LinearProgress variant="determinate" value={definition.stats.strength} color="primary" />
                        <Typography variant="caption">Density</Typography>
                        <LinearProgress variant="determinate" value={definition.stats.density} color="secondary" />
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Button size="small" variant="outlined" onClick={() => onRemove(weaponKey)} disabled={ownedCount === 0}>
                            Sell
                        </Button>
                        <Button size="small" variant="contained" onClick={() => onAdd(weaponKey)} disabled={money < cost}>
                            Buy (£{cost})
                        </Button>
                    </Stack>
                    <Typography variant="caption" color="text.secondary">
                        Owned: {ownedCount}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
}

function StoreDialog({ open, onClose, inventory, onAdd, onRemove, money }) {
    const inventoryCounts = useMemo(() => {
        return inventory.reduce((acc, key) => {
            acc[key] = (acc[key] ?? 0) + 1;
            return acc;
        }, {});
    }, [inventory]);

    return (
        <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
            <DialogTitle>Weapon Store</DialogTitle>
            <DialogContent dividers>
                <Typography variant="subtitle1" gutterBottom>
                    Money left: £{money.toFixed(2)}
                </Typography>
                <Grid container spacing={2}>
                    {Object.keys(WEAPON_DEFINITIONS).map((weaponKey) => (
                        <Grid key={weaponKey} item xs={12} sm={6} md={4} lg={3}>
                            <WeaponCard
                                weaponKey={weaponKey}
                                ownedCount={inventoryCounts[weaponKey] ?? 0}
                                onAdd={onAdd}
                                onRemove={onRemove}
                                money={money}
                            />
                        </Grid>
                    ))}
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="contained">Close</Button>
            </DialogActions>
        </Dialog>
    );
}

function LeaderboardDialog({ open, onClose, records, totalPlays, loading, error }) {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>Leaderboard</DialogTitle>
            <DialogContent dividers>
                {loading ? (
                    <Stack spacing={1}>
                        {[1, 2, 3, 4, 5].map((key) => (
                            <Skeleton key={key} height={48} />
                        ))}
                    </Stack>
                ) : error ? (
                    <Alert severity="error">{error}</Alert>
                ) : (
                    <Stack spacing={2}>
                        <Typography variant="subtitle2" color="text.secondary">
                            Total plays recorded: {totalPlays ?? "--"}
                        </Typography>
                        <Stack spacing={1} className="leaderboard-list">
                            {records.length === 0 ? (
                                <Typography variant="body2" color="text.secondary">No scores yet. Be the first!</Typography>
                            ) : (
                                records.map((item, index) => (
                                    <Paper key={`${item.name}-${index}`} variant="outlined" sx={{ p: 1.5 }}>
                                        <Stack direction="row" alignItems="center" spacing={2}>
                                            <EmojiEventsIcon color={index === 0 ? "warning" : index === 1 ? "primary" : "disabled"} />
                                            <Typography variant="body1" flexGrow={1}>{item.name}</Typography>
                                            <Typography variant="subtitle1" fontWeight={600}>{Math.round(item.score)}</Typography>
                                        </Stack>
                                    </Paper>
                                ))
                            )}
                        </Stack>
                    </Stack>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

function EndDialog({
    open,
    onClose,
    onRestart,
    score,
    status,
    playerName,
    onPlayerNameChange,
    onSendScore,
    onViewLeaderboard,
    canSend,
    scoreSubmissionState
}) {
    const isSending = scoreSubmissionState === "sending";
    const isSent = scoreSubmissionState === "sent";

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>Game Over</DialogTitle>
            <DialogContent dividers>
                <Stack spacing={3}>
                    <Stack spacing={1} alignItems="center">
                        <Typography variant="h5" textAlign="center">Score: {Math.round(score)}</Typography>
                        {status ? (
                            <Typography variant="body1" textAlign="center">{status}</Typography>
                        ) : null}
                    </Stack>
                    <Stack spacing={1.5}>
                        <TextField
                            label="Your Name"
                            value={playerName}
                            onChange={onPlayerNameChange}
                            size="small"
                            autoComplete="off"
                            disabled={isSent}
                        />
                        <Button
                            variant="contained"
                            onClick={onSendScore}
                            disabled={!canSend || isSending}
                        >
                            {isSending ? "Sending..." : isSent ? "Score Sent" : "Send Score"}
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={onViewLeaderboard}
                        >
                            View Leaderboard
                        </Button>
                        {isSent ? (
                            <Alert severity="success">Your score has been submitted.</Alert>
                        ) : null}
                    </Stack>
                </Stack>
            </DialogContent>
            <DialogActions sx={{ justifyContent: "space-between" }}>
                <Button onClick={onClose} color="inherit">
                    Close
                </Button>
                <Button onClick={onRestart} startIcon={<RestartAltIcon />} variant="contained">
                    Play Again
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default function App() {
    const [selectedCharacter, setSelectedCharacter] = useState(0);
    const {
        money,
        inventory,
        inventoryCounts,
        purchaseWeapon,
        sellWeapon
    } = useInventory(STARTING_MONEY);
    const [running, setRunning] = useState(false);
    const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
    const {
        score,
        scoreStatus,
        scoreRef,
        incrementScore,
        resetScore
    } = useScore(0);
    const isHydrated = useIsHydrated();
    const [storeOpen, setStoreOpen] = useState(false);
    const [leaderboardOpen, setLeaderboardOpen] = useState(false);
    const [leaderboardRecords, setLeaderboardRecords] = useState([]);
    const [totalPlays, setTotalPlays] = useState(null);
    const [leaderboardLoading, setLeaderboardLoading] = useState(false);
    const [leaderboardError, setLeaderboardError] = useState(null);
    const [snackbar, setSnackbar] = useState(null);
    const [startDialogOpen, setStartDialogOpen] = useState(true);
    const [endDialogOpen, setEndDialogOpen] = useState(false);
    const [playerName, setPlayerName] = useState("");
    const [scoreSubmissionState, setScoreSubmissionState] = useState("idle");
    const {
        queuedPowerup,
        activePowerup,
        queuePowerup,
        clearQueuedPowerup,
        setActivePowerupState,
        clearActivePowerup,
        queuedPowerupRef,
        activePowerupRef
    } = usePowerups();
    const [activeCrates, setActiveCrates] = useState([]);
    const cratesRef = useRef([]);
    const crateIdRef = useRef(0);
    const crateWaveIdRef = useRef(0);
    const supplyAnnouncementRef = useRef({ waveId: null, announced: true });
    const [, setCrateTick] = useState(0);
    const spawnedWeaponsRef = useRef([]);
    const [selectedWeaponKey, setSelectedWeaponKey] = useState(null);
    const [selectedWeaponHealth, setSelectedWeaponHealth] = useState(null);
    const [scoreMultiplier, setScoreMultiplier] = useState(1);
    const [multiplierAnimKey, setMultiplierAnimKey] = useState(0);
    const [multiplierFlash, setMultiplierFlash] = useState(null);
    const lastScoreTimeRef = useRef(0);
    const streakStartRef = useRef(0);
    const [cinematicState, setCinematicState] = useState({ mode: "idle", title: null, subtitle: null });
    const [isCinematicVisible, setIsCinematicVisible] = useState(false);
    const cinematicTimeoutRef = useRef(null);
    const [powerupNotices, setPowerupNotices] = useState([]);
    const powerupNoticeDebounceRef = useRef({});
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const pushPowerupNotice = useCallback((message, severity = "info", duration = 3200) => {
        const key = `${severity}:${message}`;
        const now = Date.now();
        const DEBOUNCE_MS = 3000;
        const registry = powerupNoticeDebounceRef.current;
        if (registry[key] && now - registry[key] < DEBOUNCE_MS) {
            return;
        }
        registry[key] = now;

        setPowerupNotices((prev) => {
            const next = prev.filter((notice) => notice.key !== key);
            next.push({ id: `${now}-${Math.random()}`, key, message, severity, expiresAt: now + duration });
            const MAX_NOTICES = 2;
            if (next.length > MAX_NOTICES) {
                next.shift();
            }
            return next;
        });

        if (duration > 0) {
            window.setTimeout(() => {
                setPowerupNotices((prev) => prev.filter((notice) => notice.key !== key));
            }, duration);
        }
    }, []);

    const gameBoardRef = useRef(null);
    const timerRef = useRef(null);
    const startTimeRef = useRef(0);
    const frameSchedulerRef = useRef({ lastTick: 0, powerupAccumulator: 0 });
    const scoreLevelRef = useRef(0);
    const runningRef = useRef(false);
    const {
        engineRef,
        goalRef,
        createEngine,
        spawnGoal,
        destroyEngine
    } = usePhysicsEngine();

    const difficultyRef = useRef({ hazardsReleased: false, gravityRamped: false });

    const resetDifficultyState = useCallback(() => {
        difficultyRef.current = { hazardsReleased: false, gravityRamped: false };
    }, []);

    const activeTimerHandlesRef = useRef([]);
    const activeStartRef = useRef(0);
    const pausedPowerupRef = useRef(null);
    const powerupScheduleRef = useRef({ times: [], index: 0 });
    const elapsedTimeRef = useRef(0);
    const lastPowerupIdRef = useRef(null);

    const currentCharacter = CHARACTERS[selectedCharacter];

    useEffect(() => {
        if (!inventory.length) {
            setSelectedWeaponKey(null);
            setSelectedWeaponHealth(null);
            return;
        }
        setSelectedWeaponKey((prev) => (prev && inventory.includes(prev) ? prev : null));
    }, [inventory]);

    useEffect(() => {
        if (queuedPowerup) {
            pushPowerupNotice(`${queuedPowerup.powerup.name} ready to deploy`, "warning");
        }
    }, [pushPowerupNotice, queuedPowerup]);

    useEffect(() => {
        if (activePowerup) {
            pushPowerupNotice(`${activePowerup.powerup.name} activated`, "success", 3200);
        }
    }, [activePowerup, pushPowerupNotice]);

    const inventoryChips = useMemo(() => {
        const entries = Object.entries(inventoryCounts);
        if (!entries.length) {
            return <Typography variant="body2" color="text.secondary">No weapons purchased yet.</Typography>;
        }
        return (
            <Stack direction="row" spacing={1} flexWrap="wrap">
                {entries.map(([key, count]) => {
                    const isSelected = selectedWeaponKey === key;
                    return (
                        <Chip
                            key={key}
                            label={`${key} × ${count}`}
                            className="inventory-chip"
                            color={isSelected ? "warning" : "primary"}
                            variant={isSelected ? "filled" : "outlined"}
                            onClick={() => setSelectedWeaponKey(key)}
                        />
                    );
                })}
            </Stack>
        );
    }, [inventoryCounts, selectedWeaponKey]);

    const handlePrevCharacter = () => {
        setSelectedCharacter((prev) => (prev - 1 + CHARACTERS.length) % CHARACTERS.length);
    };

    const handleNextCharacter = () => {
        setSelectedCharacter((prev) => (prev + 1) % CHARACTERS.length);
    };

    const handleAddWeapon = (weaponKey) => {
        const success = purchaseWeapon(weaponKey);
        if (!success) {
            setSnackbar({ message: "Not enough money for that weapon", severity: "warning" });
        }
    };

    const handleRemoveWeapon = (weaponKey) => {
        sellWeapon(weaponKey);
    };

    const updateScore = useCallback((delta) => {
        if (!isHydrated || !delta) {
            return;
        }

        const now = performance.now();
        if (!lastScoreTimeRef.current || now - lastScoreTimeRef.current > 1500) {
            streakStartRef.current = now;
            if (scoreMultiplier !== 1) {
                setScoreMultiplier(1);
                setMultiplierAnimKey((key) => key + 1);
            }
        }

        lastScoreTimeRef.current = now;
        if (!streakStartRef.current) {
            streakStartRef.current = now;
        }

        const streakDuration = now - streakStartRef.current;
        const thresholds = [4000, 8000, 12000];
        let multiplier = 1;
        thresholds.forEach((threshold, index) => {
            if (streakDuration >= threshold) {
                multiplier = index + 2;
            }
        });
        if (multiplier !== scoreMultiplier) {
            setScoreMultiplier(multiplier);
            setMultiplierAnimKey((key) => key + 1);
            setMultiplierFlash({ value: multiplier, key: Date.now() });
        }

        const appliedDelta = delta * multiplier;
        const next = scoreRef.current + appliedDelta;
        const rounded = Math.round(next);
        const goal = goalRef.current;
        if (goal?.el) {
            const currentLevel = scoreLevelRef.current;
            if (rounded > 10000 && currentLevel === 0) {
                goal.el.src = goal.el.src.replace(".png", "_1.png");
                scoreLevelRef.current = 1;
            } else if (rounded > 20000 && currentLevel === 1) {
                goal.el.src = goal.el.src.replace("_1.png", "_2.png");
                scoreLevelRef.current = 2;
            }
        }
        incrementScore(appliedDelta);
    }, [goalRef, incrementScore, isHydrated, scoreMultiplier]);

    const showCinematic = useCallback((mode, title, subtitle = null, timeout = 2400) => {
        if (cinematicTimeoutRef.current) {
            window.clearTimeout(cinematicTimeoutRef.current);
        }
        setCinematicState({ mode, title, subtitle });
        setIsCinematicVisible(true);
        cinematicTimeoutRef.current = window.setTimeout(() => {
            setIsCinematicVisible(false);
        }, timeout);
    }, []);

    const hideCinematic = useCallback(() => {
        if (cinematicTimeoutRef.current) {
            window.clearTimeout(cinematicTimeoutRef.current);
            cinematicTimeoutRef.current = null;
        }
        setIsCinematicVisible(false);
        window.setTimeout(() => {
            setCinematicState({ mode: "idle", title: null, subtitle: null });
        }, 500);
    }, []);

    const updateSelectedWeaponHealth = useCallback(() => {
        if (!selectedWeaponKey) {
            setSelectedWeaponHealth(null);
            return;
        }

        const sprite = spawnedWeaponsRef.current.find((weapon) => weapon.weaponKey === selectedWeaponKey);
        if (!sprite) {
            const definition = WEAPON_DEFINITIONS[selectedWeaponKey];
            const strength = definition?.options?.strength ?? 0.5;
            const capacity = Math.round(strength * 20000);
            setSelectedWeaponHealth({
                current: capacity,
                max: capacity,
                baseCapacity: capacity,
                bonusCapacity: 0,
                baseRemaining: capacity,
                bonusRemaining: 0,
                percent: 100,
                basePercent: 100,
                bonusPercent: 0
            });
            return;
        }

        if (typeof sprite.baseHealth !== "number") {
            sprite.baseHealth = sprite.health;
        }
        if (typeof sprite.maxHealth !== "number") {
            sprite.maxHealth = Math.max(sprite.baseHealth ?? 0, sprite.health);
        }

        const baseCapacity = Math.max(sprite.baseHealth ?? 0, 0);
        const maxCapacity = Math.max(sprite.maxHealth ?? baseCapacity, baseCapacity);
        const current = Math.max(Math.min(sprite.health, maxCapacity), 0);
        const baseRemaining = Math.max(Math.min(current, baseCapacity), 0);
        const bonusCapacity = Math.max(maxCapacity - baseCapacity, 0);
        const bonusRemaining = bonusCapacity > 0 ? Math.max(Math.min(current - baseCapacity, bonusCapacity), 0) : 0;
        const totalCapacity = Math.max(baseCapacity + bonusCapacity, maxCapacity, 0);
        const percent = totalCapacity > 0 ? (current / totalCapacity) * 100 : 0;
        const basePercent = totalCapacity > 0 ? (baseRemaining / totalCapacity) * 100 : 0;
        const bonusPercent = totalCapacity > 0 ? (bonusRemaining / totalCapacity) * 100 : 0;

        setSelectedWeaponHealth({
            current,
            max: totalCapacity,
            baseCapacity,
            bonusCapacity,
            baseRemaining,
            bonusRemaining,
            percent,
            basePercent,
            bonusPercent
        });
    }, [selectedWeaponKey]);

    useEffect(() => {
        updateSelectedWeaponHealth();
    }, [selectedWeaponKey, running, updateSelectedWeaponHealth]);

    const handleCollisionEvent = useCallback((event) => {
        if (!runningRef.current) {
            return;
        }

        const processPair = (pair) => {
        if (!pair?.bodyA || !pair?.bodyB) {
            return;
        }
        const bodyA = pair.bodyA;
        const bodyB = pair.bodyB;
        const bodyAGoal = bodyA?.ob?.el?.hasAttribute?.("data-goal");
        const bodyBGoal = bodyB?.ob?.el?.hasAttribute?.("data-goal");
        const isGoalCollision = bodyAGoal || bodyBGoal;
        if (!isGoalCollision) {
            return;
        }
        const attacker = bodyAGoal ? bodyB : bodyA;
        const goal = bodyAGoal ? bodyA : bodyB;
        if (attacker?.ob?.el?.hasAttribute?.("data-nopoints") || goal?.ob?.el?.hasAttribute?.("data-nopoints")) {
            return;
        }
        const depth = pair?.collision?.depth ?? 0;
        let scoreDelta = (depth * (attacker?.mass ?? 0)) / 100;
        let damage = (depth * (goal?.mass ?? 0)) / 100;
        const attackerSprite = attacker?.ob;
        if (attackerSprite?.isElongated) {
            const ratio = Math.min(Math.max(attackerSprite.aspectRatio ?? 1, 1), 6);
            const scorePenalty = Math.max(0.45, 1 - ((ratio - 1) * 0.18));
            const damageBoost = 1 + Math.min((ratio - 1) * 0.3, 0.85);
            scoreDelta *= scorePenalty;
            damage *= damageBoost;
        }
        if (scoreDelta > 0) {
            updateScore(scoreDelta);
            attackerSprite?.deduct_health?.(damage);
        }
    };

    if (Array.isArray(event)) {
        event.forEach(processPair);
        return;
    }

    if (event?.pairs) {
        event.pairs.forEach(processPair);
    }
}, [updateScore]);

    const removeActiveTimer = useCallback((id) => {
        activeTimerHandlesRef.current = activeTimerHandlesRef.current.filter((handle) => handle.id !== id);
    }, []);

    const scheduleTimeout = useCallback((callback, delay) => {
        const id = window.setTimeout(() => {
            removeActiveTimer(id);
            callback();
        }, delay);
        activeTimerHandlesRef.current.push({ type: "timeout", id });
        return id;
    }, [removeActiveTimer]);

    const clearActivePowerupTimers = useCallback(() => {
        activeTimerHandlesRef.current.forEach(({ type, id }) => {
            if (type === "interval") {
                window.clearInterval(id);
            } else {
                window.clearTimeout(id);
            }
        });
        activeTimerHandlesRef.current = [];
        activeStartRef.current = 0;
    }, []);

    const clearActivePowerupState = useCallback(() => {
        clearActivePowerup();
        pausedPowerupRef.current = null;
        clearActivePowerupTimers();
    }, [clearActivePowerup, clearActivePowerupTimers]);

    const applyPowerupEffect = useCallback((powerup, duration, meta = {}) => {
        if (!isHydrated || !engineRef.current) {
            return;
        }

        clearActivePowerupTimers();
        pausedPowerupRef.current = null;

        const cleanup = (delay) => {
            scheduleTimeout(() => {
                clearActivePowerupState();
            }, delay);
        };

        if (powerup.effect === "addseconds") {
            setActivePowerupState({ powerup, duration, meta });
            if (!startTimeRef.current) {
                startTimeRef.current = performance.now();
            }
            startTimeRef.current -= duration * 1000;
            scheduleTimeout(() => {
                clearActivePowerupState();
            }, 2000);
            pushPowerupNotice(`+${duration}s added to the clock`, "success", 2200);
            return;
        }

        setActivePowerupState({ powerup, duration, meta });
        if (powerup.type === "seconds") {
            activeStartRef.current = performance.now();
        } else {
            activeStartRef.current = 0;
        }

        const getSpawnBounds = () => {
            const rect = gameBoardRef.current?.getBoundingClientRect();
            const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 1280;
            const left = rect ? Math.round(rect.left + 60) : 100;
            const right = rect ? Math.round(rect.right - 60) : Math.round(viewportWidth - 100);
            const top = rect ? Math.round(rect.top - 140) : 40;
            const midTop = rect ? Math.round(rect.top + 80) : 180;
            return {
                left,
                right: Math.max(left + 20, right),
                top,
                midTop
            };
        };

        if (powerup.effect === "reverse_gravity") {
            engineRef.current.change_gravity(0, -1.8, duration);
            pushPowerupNotice("Gravity flips upward!", "warning", duration);
            cleanup(duration);
            return;
        }

        if (powerup.effect === "double_gravity") {
            engineRef.current.change_gravity(0, 3.2, duration);
            pushPowerupNotice("Gravity intensifies!", "warning", duration);
            cleanup(duration);
            return;
        }

        if (powerup.effect === "no_gravity") {
            engineRef.current.change_gravity(0, 0, duration);
            pushPowerupNotice("Zero-G bubble active!", "info", duration);
            cleanup(duration);
            return;
        }

        if (powerup.effect === "money_rain") {
            const dropCount = meta.dropCount ?? Math.max(12, Math.round(duration / 120));
            const { left, right, top } = getSpawnBounds();
            const payloadKey = meta.payload ?? powerup.payload ?? "golf";
            for (let i = 0; i < dropCount; i += 1) {
                const delay = Math.round((duration / Math.max(dropCount, 1)) * i);
                scheduleTimeout(() => {
                    const spawnX = randomIntFromInterval(left, right);
                    spawnWeapon(payloadKey, spawnX, top);
                }, delay);
            }
            pushPowerupNotice("It's raining golf balls!", "success", duration);
            scheduleTimeout(() => {
                clearActivePowerupState();
            }, duration + 300);
            return;
        }

        if (powerup.effect === "air_drop") {
            const { left, right, top, midTop } = getSpawnBounds();
            const count = meta.count ?? Math.max(1, Math.round(duration));
            for (let i = 0; i < count; i += 1) {
                const delay = i * 140;
                scheduleTimeout(() => {
                    const spawnX = randomIntFromInterval(left, right);
                    const spawnY = randomIntFromInterval(top, midTop);
                    if (powerup.payload) {
                        spawnWeapon(powerup.payload, spawnX, spawnY);
                    } else {
                        const keys = Object.keys(WEAPON_DEFINITIONS);
                        const randomKey = keys[Math.floor(Math.random() * keys.length)];
                        spawnWeapon(randomKey, spawnX, spawnY);
                    }
                }, delay);
            }
            pushPowerupNotice("Supply drop inbound!", "info", count * 140 + 400);
            scheduleTimeout(() => {
                clearActivePowerupState();
            }, count * 140 + 500);
            return;
        }

        if (powerup.effect === "sticky_items") {
            engineRef.current.make_sticky(duration, { intensity: meta.intensity ?? "high" });
            pushPowerupNotice("Surfaces turned sticky!", "warning", duration);
            cleanup(duration);
            return;
        }

        if (powerup.effect === "shake") {
            const times = meta.count ?? Math.max(2, Math.round(duration));
            engineRef.current.shake({ times, magnitude: meta.magnitude ?? 1.6 });
            pushPowerupNotice("Screen quake engaged!", "warning", times * 500 + 600);
            cleanup(times * 500 + 600);
            return;
        }

        // Fallback cleanup for any instantaneous effects
        cleanup(powerup.type === "seconds" ? duration : 2000);
    }, [
        clearActivePowerupState,
        clearActivePowerupTimers,
        engineRef,
        gameBoardRef,
        isHydrated,
        scheduleTimeout,
        setActivePowerupState,
        spawnWeapon,
        startTimeRef,
        pushPowerupNotice
    ]);

    const resumePausedPowerup = useCallback(() => {
        if (!isHydrated) {
            return;
        }
        const paused = pausedPowerupRef.current;
        if (!paused) {
            return;
        }
        const { powerup, remaining, meta } = paused;
        pausedPowerupRef.current = null;
        applyPowerupEffect(powerup, remaining, meta);
        setSnackbar({ message: `${powerup.name} resumed`, severity: "info" });
    }, [applyPowerupEffect, isHydrated, setSnackbar]);

    const stopEngine = useCallback((options = {}) => {
        const {
            preservePowerups = false,
            resetScoreOnStop = true,
            resetTimeOnStop = true
        } = options;

        if (!isHydrated && !runningRef.current && !engineRef.current) {
            return;
        }

        runningRef.current = false;
        setRunning(false);

        if (timerRef.current) {
            cancelAnimationFrame(timerRef.current);
            timerRef.current = null;
        }
        frameSchedulerRef.current = { lastTick: 0, powerupAccumulator: 0 };
        startTimeRef.current = 0;

        const currentActive = activePowerupRef.current;
        let remainingMs = null;
        if (preservePowerups && currentActive?.powerup?.type === "seconds") {
            const elapsedMs = activeStartRef.current ? performance.now() - activeStartRef.current : 0;
            const remaining = Math.max(currentActive.duration - elapsedMs, 0);
            if (remaining > 100) {
                remainingMs = remaining;
            }
        }

        clearActivePowerupTimers();

        if (engineRef.current?.engine) {
            engineRef.current.engine.gravity.x = DEFAULT_GRAVITY.x;
            engineRef.current.engine.gravity.y = DEFAULT_GRAVITY.y;
        }

        engineRef.current?.stop();
        destroyEngine();
        hideCinematic();

        if (preservePowerups && remainingMs && currentActive) {
            pausedPowerupRef.current = {
                powerup: currentActive.powerup,
                duration: currentActive.duration,
                remaining: remainingMs,
                meta: currentActive.meta
            };
            setActivePowerupState({
                powerup: currentActive.powerup,
                duration: remainingMs,
                meta: currentActive.meta,
                paused: true,
                remaining: remainingMs
            });
        } else {
            pausedPowerupRef.current = null;
            clearActivePowerup();
        }

        if (!preservePowerups) {
            clearQueuedPowerup();
        }

        resetDifficultyState();
        if (resetTimeOnStop) {
            setTimeLeft(GAME_DURATION);
        }
        if (resetScoreOnStop) {
            resetScore();
        }

        powerupScheduleRef.current = { times: [], index: 0 };
        elapsedTimeRef.current = 0;
        lastPowerupIdRef.current = null;
        spawnedWeaponsRef.current = [];
        setSelectedWeaponHealth(null);
        setScoreMultiplier(1);
        setMultiplierAnimKey((key) => key + 1);
        setMultiplierFlash(null);
        setActiveCrates([]);
        cratesRef.current = [];
        lastScoreTimeRef.current = 0;
        streakStartRef.current = 0;
        setPowerupNotices([]);
    }, [
        activePowerupRef,
        clearActivePowerup,
        clearActivePowerupTimers,
        clearQueuedPowerup,
        engineRef,
        hideCinematic,
        isHydrated,
        resetDifficultyState,
        resetScore,
        setActivePowerupState,
        destroyEngine
    ]);

    const finishGame = useCallback(() => {
        if (!runningRef.current) {
            return;
        }
        stopEngine({ resetScoreOnStop: false, resetTimeOnStop: false });
        showCinematic(
            "outro",
            "Match Complete",
            `Final score: ${Math.round(scoreRef.current)}`,
            2600
        );
        setEndDialogOpen(true);
        setScoreSubmissionState("idle");
    }, [showCinematic, stopEngine]);

    const dropWeaponsFromCrate = useCallback((crate, bonusCount = 0) => {
        const keys = Object.keys(WEAPON_DEFINITIONS);
        const baseCount = randomIntFromInterval(1, 2);
        const total = baseCount + bonusCount;
        for (let i = 0; i < total; i += 1) {
            const key = keys[randomIntFromInterval(0, keys.length - 1)];
            const spawnX = crate ? randomIntFromInterval(crate.x - 60, crate.x + 60) : undefined;
            const spawnY = crate ? randomIntFromInterval(crate.y - 40, crate.y + 40) : undefined;
            const sprite = spawnWeapon(key, spawnX, spawnY);
            if (sprite) {
                sprite.weaponKey = key;
                if (typeof sprite.baseHealth !== "number") {
                    sprite.baseHealth = sprite.health;
                }
                sprite.maxHealth = sprite.health;
                spawnedWeaponsRef.current.push(sprite);
            }
        }
        updateSelectedWeaponHealth();
        if (crate) {
            pushPowerupNotice(`Loot acquired from ${crate.kind === "supply" ? "supply" : "weapon"} drop`, "info", 2200);
        }
    }, [pushPowerupNotice, selectedWeaponKey, spawnWeapon, updateSelectedWeaponHealth]);

    const applyFirstAidKit = useCallback(() => {
        if (!selectedWeaponKey) {
            setSnackbar({ message: "Select a weapon to reinforce.", severity: "info" });
            return;
        }
        const sprite = spawnedWeaponsRef.current.find((weapon) => weapon.weaponKey === selectedWeaponKey);
        if (!sprite) {
            setSnackbar({ message: "Selected weapon not currently on the board.", severity: "info" });
            return;
        }
        if (typeof sprite.baseHealth !== "number") {
            sprite.baseHealth = sprite.health;
        }
        const bonus = sprite.baseHealth * 0.4;
        const currentMax = sprite.maxHealth ?? sprite.baseHealth ?? sprite.health;
        sprite.health += bonus;
        sprite.maxHealth = currentMax + bonus;
        showCinematic("support", "First Aid Kit", "Weapon reinforced!");
        updateSelectedWeaponHealth();
        pushPowerupNotice("Weapon reinforced by first aid kit", "success", 3200);
    }, [pushPowerupNotice, selectedWeaponKey, setSnackbar, showCinematic, updateSelectedWeaponHealth]);

    const applyCrateReward = useCallback((crate) => {
        if (crate.kind === "firstAid") {
            applyFirstAidKit();
            return;
        }
        const bonus = crate.kind === "supply" ? 2 : 0;
        dropWeaponsFromCrate(crate, bonus);
        if (crate.kind === "supply") {
            const announcement = supplyAnnouncementRef.current;
            if (!announcement || announcement.waveId !== crate.waveId || !announcement.announced) {
                supplyAnnouncementRef.current = { waveId: crate.waveId, announced: true };
                showCinematic("supply", "Supply Drop", "New weapons inbound!", 1600);
            }
        }
    }, [applyFirstAidKit, dropWeaponsFromCrate, showCinematic, supplyAnnouncementRef]);

    const handleCrateClick = useCallback((id) => {
        const crate = cratesRef.current.find((item) => item.id === id);
        if (!crate || crate.status === "popped") {
            return;
        }
        crate.status = "popped";
        setActiveCrates((prev) => {
            const next = prev.map((item) => (item.id === id ? { ...item, status: "popped" } : item));
            cratesRef.current = next;
            return next;
        });
        window.setTimeout(() => {
            applyCrateReward(crate);
            const next = cratesRef.current.filter((item) => item.id !== id);
            cratesRef.current = next;
            setActiveCrates(next);
        }, 260);
    }, [applyCrateReward]);

    const spawnCrateWave = useCallback((kind) => {
        const boardRect = gameBoardRef.current?.getBoundingClientRect();
        const leftBoundary = boardRect ? boardRect.left + 80 : 120;
        const rightBoundary = boardRect ? boardRect.right - 160 : window.innerWidth - 160;
        const topBoundary = boardRect ? boardRect.top + 100 : 120;
        const bottomBoundary = boardRect ? boardRect.bottom - 220 : window.innerHeight - 220;
        const count = randomIntFromInterval(kind === "firstAid" ? 1 : 2, kind === "supply" ? 4 : 3);
        const lifespan = kind === "firstAid" ? 7000 : 6000;
        const now = Date.now();
        crateWaveIdRef.current += 1;
        const waveId = crateWaveIdRef.current;
        const newCrates = Array.from({ length: count }).map(() => ({
            id: crateIdRef.current += 1,
            x: randomIntFromInterval(leftBoundary, rightBoundary - 96),
            y: randomIntFromInterval(topBoundary, bottomBoundary - 96),
            kind,
            createdAt: now,
            expiresAt: now + lifespan,
            lifespan,
            status: "active",
            waveId
        }));
        setActiveCrates((prev) => {
            const next = [...prev, ...newCrates];
            cratesRef.current = next;
            return next;
        });
        if (kind === "firstAid") {
            showCinematic("support", "First Aid Kit", "Reinforce your weapon!");
            pushPowerupNotice("First aid kit spotted", "info", 4200);
        } else {
            pushPowerupNotice("Weapon crates inbound", "info", 3500);
        }
        if (kind === "supply") {
            supplyAnnouncementRef.current = { waveId, announced: false };
        }
    }, [pushPowerupNotice, showCinematic, supplyAnnouncementRef, crateWaveIdRef]);

    const maybeSpawnCrateWave = useCallback(() => {
        if (!isHydrated || !runningRef.current) {
            return;
        }
        if (cratesRef.current.length > 0) {
            return;
        }
        if (Math.random() > 0.015) {
            return;
        }
        const roll = Math.random();
        const kind = roll < 0.25 ? "firstAid" : roll < 0.6 ? "supply" : "weapon";
        spawnCrateWave(kind);
    }, [isHydrated, spawnCrateWave]);

    useEffect(() => {
        if (!activeCrates.length) {
            return undefined;
        }
        const interval = window.setInterval(() => {
            const now = Date.now();
            const remaining = cratesRef.current.filter((crate) => crate.expiresAt > now && crate.status !== "popped");
            if (remaining.length !== cratesRef.current.length) {
                cratesRef.current = remaining;
                setActiveCrates(remaining);
            } else {
                setCrateTick(now);
            }
        }, 220);
        return () => window.clearInterval(interval);
    }, [activeCrates.length]);

    const maybeQueuePowerup = useCallback(() => {
        if (!isHydrated || !runningRef.current) {
            return;
        }
        if (queuedPowerupRef.current || activePowerupRef.current) {
            return;
        }

        const schedule = powerupScheduleRef.current;
        if (!schedule.times || schedule.index >= schedule.times.length) {
            return;
        }

        const elapsed = elapsedTimeRef.current;
        if (elapsed < schedule.times[schedule.index]) {
            return;
        }

        const phase = elapsed < 14 ? "early" : elapsed < 32 ? "mid" : "late";
        const candidates = POWER_UPS.filter((entry) => {
            const phases = entry.phases ?? (entry.phase ? [entry.phase] : ["any"]);
            return phases.includes("any") || phases.includes(phase);
        });

        if (!candidates.length) {
            schedule.index += 1;
            return;
        }

        let available = candidates;
        if (lastPowerupIdRef.current) {
            const filtered = candidates.filter((item) => item.id !== lastPowerupIdRef.current);
            if (filtered.length) {
                available = filtered;
            }
        }

        const totalWeight = available.reduce((total, item) => total + (item.weight ?? 1), 0);
        let roll = Math.random() * totalWeight;
        let selected = available[available.length - 1];
        for (const candidate of available) {
            roll -= candidate.weight ?? 1;
            if (roll <= 0) {
                selected = candidate;
                break;
            }
        }

        if (!selected) {
            schedule.index += 1;
            return;
        }

        const magnitude = pickPowerupDuration(selected, POWERUP_RANGE_BY_TYPE);
        const meta = {};
        if (selected.effect === "air_drop") {
            meta.count = magnitude;
            if (selected.payload) {
                meta.payload = selected.payload;
            }
        } else if (selected.effect === "money_rain") {
            meta.dropCount = Math.max(12, Math.round(magnitude / 120));
            meta.payload = selected.payload ?? "golf";
        } else if (selected.effect === "sticky_items") {
            meta.intensity = selected.intensity ?? "high";
        } else if (selected.effect === "shake") {
            meta.count = magnitude;
            if (selected.magnitude) {
                meta.magnitude = selected.magnitude;
            }
        }

        queuePowerup({ powerup: selected, duration: magnitude, meta });
        lastPowerupIdRef.current = selected.id ?? selected.name;
        schedule.index += 1;
        setSnackbar({ message: `${selected.name} ready!`, severity: "info" });
    }, [
        isHydrated,
        queuePowerup,
        pickPowerupDuration,
        setSnackbar
    ]);

    const spawnFinaleHazards = useCallback(() => {
        if (!isHydrated) {
            return;
        }
        const hazardChoices = ["mace", "brick", "chair"];
        const boardRect = gameBoardRef.current?.getBoundingClientRect();
        const leftBoundary = boardRect ? Math.round(boardRect.left + 120) : 120;
        const rightBoundary = boardRect ? Math.round(boardRect.right - 120) : Math.round(window.innerWidth - 120);
        const topBoundary = boardRect ? Math.round(boardRect.top + 80) : 80;
        const bottomBoundary = boardRect ? Math.round(boardRect.top + 220) : 220;

        const spawnAtRandom = (weaponKey) => {
            if (rightBoundary <= leftBoundary) {
                spawnWeapon(weaponKey);
                return;
            }
            const spawnX = randomIntFromInterval(leftBoundary, rightBoundary);
            const spawnY = randomIntFromInterval(topBoundary, bottomBoundary);
            spawnWeapon(weaponKey, spawnX, spawnY);
        };

        for (let i = 0; i < 3; i += 1) {
            const hazardKey = hazardChoices[randomIntFromInterval(0, hazardChoices.length - 1)];
            spawnAtRandom(hazardKey);
        }
    }, [isHydrated]);

    const activateQueuedPowerup = useCallback(() => {
        if (!isHydrated) {
            return;
        }
        const queued = queuedPowerupRef.current;
        if (!queued) {
            return;
        }
        const { powerup, duration, meta } = queued;
        clearQueuedPowerup();
        applyPowerupEffect(powerup, duration, meta);
    }, [applyPowerupEffect, clearQueuedPowerup, isHydrated]);

    const startTimer = useCallback(() => {
        if (!isHydrated) {
            return;
        }
        frameSchedulerRef.current = { lastTick: 0, powerupAccumulator: 0 };
        startTimeRef.current = performance.now();

        const tick = (timestamp) => {
            if (!runningRef.current) {
                return;
            }

            const elapsed = (timestamp - startTimeRef.current) / 1000;
            const remaining = GAME_DURATION - elapsed;
            const clampedRemaining = remaining > 0 ? remaining : 0;
            setTimeLeft(clampedRemaining);
            elapsedTimeRef.current = elapsed;

            const schedulerState = frameSchedulerRef.current;
            if (schedulerState.lastTick === 0) {
                schedulerState.lastTick = timestamp;
            }
            const delta = timestamp - schedulerState.lastTick;
            schedulerState.lastTick = timestamp;
            schedulerState.powerupAccumulator += delta;

            while (schedulerState.powerupAccumulator >= 200) {
                schedulerState.powerupAccumulator -= 200;
                maybeQueuePowerup();
                maybeSpawnCrateWave();
            }

            if (clampedRemaining <= 12 && clampedRemaining > 0 && !difficultyRef.current.hazardsReleased) {
                difficultyRef.current.hazardsReleased = true;
                spawnFinaleHazards();
                setSnackbar({ message: "Falling debris inbound!", severity: "warning" });
            }

            if (clampedRemaining <= 8 && clampedRemaining > 0 && !difficultyRef.current.gravityRamped) {
                difficultyRef.current.gravityRamped = true;
                if (engineRef.current) {
                    const durationMs = Math.max(clampedRemaining, 0) * 1000 + 1500;
                    engineRef.current.change_gravity(0, 1.75, durationMs);
                }
                setSnackbar({ message: "Gravity spike! Swings hit harder.", severity: "info" });
            }

            if (remaining <= 0) {
                finishGame();
                return;
            }

            timerRef.current = requestAnimationFrame(tick);
        };

        timerRef.current = requestAnimationFrame(tick);
    }, [engineRef, finishGame, isHydrated, maybeQueuePowerup, maybeSpawnCrateWave, setSnackbar, spawnFinaleHazards]);

    const startGame = useCallback(() => {
        if (!isHydrated || runningRef.current) {
            return;
        }
        if (money > 130) {
            setSnackbar({ message: 'Spend some of that cash before playing! (max £130)', severity: 'info' });
            setStartDialogOpen(true);
            return;
        }
        ensureUuid();
        scoreLevelRef.current = 0;
        resetScore();
        setTimeLeft(GAME_DURATION);
        setEndDialogOpen(false);
        setStartDialogOpen(false);
        setScoreSubmissionState("idle");
        clearQueuedPowerup();
        resetDifficultyState();
        setScoreMultiplier(1);
        setMultiplierAnimKey((key) => key + 1);
        setMultiplierFlash(null);
        lastScoreTimeRef.current = 0;
        streakStartRef.current = 0;
        setPowerupNotices([]);
        const timeline = POWERUP_TIMELINE_SECONDS
            .map((mark) => Math.max(2.5, mark + (Math.random() * 2 - 1)))
            .filter((value) => value < GAME_DURATION - 2)
            .sort((a, b) => a - b);
        if (timeline.length === 0) {
            timeline.push(Math.min(GAME_DURATION / 2, GAME_DURATION - 4));
        }
        powerupScheduleRef.current = { times: timeline, index: 0 };
        elapsedTimeRef.current = 0;
        lastPowerupIdRef.current = null;

        showCinematic(
            "intro",
            "Ready to Rumble",
            `${currentCharacter.name} enters the arena!`
        );

        const game = createEngine(handleCollisionEvent);
        if (typeof game.configureGoalPhysics === "function") {
            game.configureGoalPhysics(GAME_OPTIONS.goal ?? {});
        }
        const itemScale = Math.max(0.6, GAME_OPTIONS.gravity?.itemScale ?? 1);
        const goalScaleValue = GAME_OPTIONS.gravity?.goalScale;
        const goalScale = typeof goalScaleValue === "number" ? goalScaleValue : itemScale;
        if (typeof game.setGravityProfile === "function") {
            game.setGravityProfile({
                itemScale,
                goalScale,
                suspendDuringOverrides: GAME_OPTIONS.gravity?.suspendCompensationDuringOverrides !== false
            });
        } else if (game.engine?.gravity) {
            game.engine.gravity.x = DEFAULT_GRAVITY.x * itemScale;
            game.engine.gravity.y = DEFAULT_GRAVITY.y * itemScale;
        }
        runningRef.current = true;
        setRunning(true);

        const boardRect = gameBoardRef.current?.getBoundingClientRect();
        const centerX = boardRect ? boardRect.left + boardRect.width / 2 : window.innerWidth / 2;
        const goalY = boardRect ? boardRect.top + 200 : 200;
        const anchorY = boardRect ? boardRect.top + 25 : 25;

        spawnedWeaponsRef.current = [];

        const goal = spawnGoal(game, {
            x: centerX,
            y: goalY,
            anchorY,
            spriteSrc: currentCharacter.image,
            tetherEnabled: GAME_OPTIONS.tetherEnabled
        });

        inventory.forEach((weaponKey) => {
            const sprite = spawnWeapon(weaponKey);
            if (sprite) {
                sprite.weaponKey = weaponKey;
                sprite.maxHealth = sprite.health;
                if (typeof sprite.baseHealth !== "number") {
                    sprite.baseHealth = sprite.health;
                }
                spawnedWeaponsRef.current.push(sprite);
            }
        });

        game.start();
        startTimer();
        resumePausedPowerup();
        updateSelectedWeaponHealth();

        fetch("https://thecomputermade.me/plays?uuid=" + window.localStorage.getItem("uuid"), {
            method: "PUT"
        }).catch(() => {
            // ignore network failures in offline scenarios
        });
    }, [
        clearQueuedPowerup,
        currentCharacter.image,
        currentCharacter.name,
        createEngine,
        handleCollisionEvent,
        inventory,
        isHydrated,
        money,
        resetDifficultyState,
        resetScore,
        resumePausedPowerup,
        showCinematic,
        spawnGoal,
        spawnWeapon,
        startTimer,
        updateSelectedWeaponHealth,
        setPowerupNotices,
        setSnackbar,
        setScoreSubmissionState,
        setStartDialogOpen
    ]);

    const handleHome = useCallback(() => {
        stopEngine({ preservePowerups: false });
        setStartDialogOpen(true);
    }, [stopEngine]);

    const handleStop = useCallback(() => {
        if (!isHydrated) {
            return;
        }
        stopEngine({ preservePowerups: true });
        setStartDialogOpen(true);
    }, [isHydrated, stopEngine]);

    const handleRestart = useCallback(() => {
        if (!isHydrated) {
            return;
        }
        stopEngine({ resetScoreOnStop: false, resetTimeOnStop: false });
        startGame();
    }, [isHydrated, startGame, stopEngine]);

    const loadLeaderboard = useCallback(async () => {
        setLeaderboardLoading(true);
        setLeaderboardError(null);
        try {
            const [scoresRes, playsRes] = await Promise.all([
                fetch("https://thecomputermade.me/scores"),
                fetch("https://thecomputermade.me/plays")
            ]);
            const scoresJson = await scoresRes.json();
            const playsJson = await playsRes.json();
            setLeaderboardRecords(scoresJson.scores ?? []);
            setTotalPlays(playsJson.total_plays ?? null);
        } catch (error) {
            setLeaderboardError("Failed to load leaderboard data.");
        } finally {
            setLeaderboardLoading(false);
        }
    }, []);

    useEffect(() => {
        if (leaderboardOpen) {
            loadLeaderboard();
        }
    }, [leaderboardOpen, loadLeaderboard]);

    useEffect(() => {
        return () => {
            stopEngine();
            hideCinematic();
            if (cinematicTimeoutRef.current) {
                window.clearTimeout(cinematicTimeoutRef.current);
                cinematicTimeoutRef.current = null;
            }
        };
    }, [hideCinematic, stopEngine]);

    const handleSendScore = useCallback(async () => {
        if (!isHydrated) {
            return;
        }
        if (!playerName) {
            setSnackbar({ message: "Please enter your name before sending.", severity: "warning" });
            return;
        }
        if (!score || scoreSubmissionState === "sending") {
            return;
        }
        setScoreSubmissionState("sending");
        try {
            const response = await fetch(`https://thecomputermade.me/scores?name=${encodeURIComponent(playerName)}&score=${Math.round(score)}&uuid=${window.localStorage.getItem("uuid")}`, {
                method: "PUT"
            });
            if (!response.ok) {
                throw new Error(`Score submission failed with status ${response.status}`);
            }
            setScoreSubmissionState("sent");
            setSnackbar({ message: "Score submitted!", severity: "success" });
        } catch (error) {
            console.error(error);
            setScoreSubmissionState("idle");
            setSnackbar({ message: "Score submission failed. Check your connection and try again.", severity: "error" });
        }
    }, [isHydrated, playerName, score, scoreSubmissionState, setSnackbar]);

    const canSendScore = useMemo(() => {
        return score > 0 && Boolean(playerName) && scoreSubmissionState !== "sent";
    }, [playerName, score, scoreSubmissionState]);

    return (
        <Box sx={{ height: "100%" }}>
            <CanvasStage boardRef={gameBoardRef} />

            <ScorePanel
                timeLeft={timeLeft}
                score={score}
                scoreStatus={running ? null : scoreStatus}
                disabled={running}
                multiplier={scoreMultiplier}
                multiplierKey={multiplierAnimKey}
                multiplierFlash={multiplierFlash}
            />

            <WeaponHealthBar
                weaponKey={selectedWeaponKey}
                weaponHealth={selectedWeaponHealth}
                disabled={!running}
            />

            <div className="crate-layer">
                {activeCrates.map((crate) => {
                    const progress = crate.lifespan > 0 ? Math.max(crate.expiresAt - Date.now(), 0) / crate.lifespan : 0;
                    return (
                        <button
                            key={crate.id}
                            type="button"
                            className={`supply-crate${crate.status === "popped" ? " supply-crate--popped" : ""}`}
                            style={{ left: crate.x, top: crate.y, '--crate-progress': progress }}
                            onClick={() => handleCrateClick(crate.id)}
                            disabled={crate.status === "popped"}
                        >
                            <div className="supply-crate__timer" />
                        </button>
                    );
                })}
            </div>

            {(cinematicState.title || cinematicState.subtitle) && (
            <div className={`cinematic-overlay cinematic-overlay--${cinematicState.mode}${isCinematicVisible ? " is-active" : ""}`} aria-hidden={!isCinematicVisible}>
                <div key={`${cinematicState.mode}-${cinematicState.title}-${cinematicState.subtitle}`} className="cinematic-overlay__content">
                    <MovieFilterIcon fontSize="large" />
                    <div className="cinematic-banner">{cinematicState.title}</div>
                    {cinematicState.subtitle ? (
                        <div className="cinematic-subtitle">{cinematicState.subtitle}</div>
                    ) : null}
                        <div className="cinematic-swipe" />
                    </div>
                </div>
            )}

            <Paper elevation={6} className={`controls-panel${running ? " controls-panel--running" : ""}`} sx={{ p: 1 }}>
                <Stack spacing={1} alignItems="center">
                    <Tooltip title="Home" placement="right">
                        <IconButton color="default" onClick={handleHome} size="large">
                            <HomeIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Store" placement="right">
                        <IconButton color="primary" onClick={() => setStoreOpen(true)} size="large">
                            <StorefrontIcon />
                        </IconButton>
                    </Tooltip>
                    {running ? (
                        <>
                            <Tooltip title="Clear Board" placement="right">
                                <IconButton color="warning" onClick={handleStop} size="large">
                                    <StopIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Restart" placement="right">
                                <IconButton color="default" onClick={handleRestart} size="large">
                                    <RestartAltIcon />
                                </IconButton>
                            </Tooltip>
                        </>
                    ) : (
                        <Tooltip title="Start" placement="right">
                            <IconButton color="primary" onClick={startGame} size="large">
                                <PlayArrowIcon />
                            </IconButton>
                        </Tooltip>
                    )}
                </Stack>
            </Paper>

            <Paper elevation={6} className={`inventory-panel${running ? " inventory-panel--hidden" : ""}`} sx={{ p: 2, minWidth: 280 }}>
                <Typography variant="subtitle1" gutterBottom>Inventory</Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                    Money left: £{money.toFixed(2)}
                </Typography>
                {inventoryChips}
            </Paper>

            {(!isMobile || !snackbar) ? (
                <PowerUpStore
                    queuedPowerup={queuedPowerup}
                    activePowerup={activePowerup}
                    notices={isMobile ? powerupNotices.slice(0, 1) : powerupNotices}
                    onActivate={activateQueuedPowerup}
                    onDismiss={clearQueuedPowerup}
                    variant={isMobile ? "compact" : "full"}
                />
            ) : null}

            <StartDialog
                open={startDialogOpen}
                character={currentCharacter}
                onNext={handleNextCharacter}
                onPrev={handlePrevCharacter}
                onStart={startGame}
                onStore={() => setStoreOpen(true)}
                onLeaderboard={() => setLeaderboardOpen(true)}
                inventory={inventory}
                money={money}
                disabled={running}
            />

            <StoreDialog
                open={storeOpen}
                onClose={() => setStoreOpen(false)}
                inventory={inventory}
                onAdd={handleAddWeapon}
                onRemove={handleRemoveWeapon}
                money={money}
            />

            <LeaderboardDialog
                open={leaderboardOpen}
                onClose={() => setLeaderboardOpen(false)}
                records={leaderboardRecords}
                totalPlays={totalPlays}
                loading={leaderboardLoading}
                error={leaderboardError}
            />

            <EndDialog
                open={endDialogOpen}
                onClose={() => setEndDialogOpen(false)}
                onRestart={handleRestart}
                score={score}
                status={scoreStatus}
                playerName={playerName}
                onPlayerNameChange={(event) => setPlayerName(event.target.value)}
                onSendScore={handleSendScore}
                onViewLeaderboard={() => setLeaderboardOpen(true)}
                canSend={canSendScore}
                scoreSubmissionState={scoreSubmissionState}
            />

            <Snackbar
                open={Boolean(snackbar)}
                autoHideDuration={4000}
                onClose={() => setSnackbar(null)}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                sx={isMobile ? {
                    width: "100%",
                    maxWidth: "calc(100% - 24px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    bottom: 12,
                    '& .MuiAlert-root': {
                        width: "100%"
                    }
                } : undefined}
            >
                {snackbar ? (
                    <Alert severity={snackbar.severity} onClose={() => setSnackbar(null)} sx={{ width: "100%" }}>
                        {snackbar.message}
                    </Alert>
                ) : null}
            </Snackbar>
        </Box>
    );
}
