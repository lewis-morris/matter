import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function renderDuration(powerup, duration, meta = {}) {
    if (!powerup) {
        return null;
    }
    if (powerup.effect === "money_rain") {
        return `${(duration / 1000).toFixed(1)}s coin shower`;
    }
    if (powerup.effect === "addseconds") {
        return `+${duration}s to the clock`;
    }
    if (powerup.effect === "sticky_items") {
        return `${(duration / 1000).toFixed(1)}s sticky surfaces`;
    }
    if (powerup.effect === "shake") {
        const shakes = meta.count ?? Math.max(Math.round(duration), 1);
        return `${shakes} quake${shakes > 1 ? "s" : ""}`;
    }
    if (powerup.type === "seconds") {
        return `${(duration / 1000).toFixed(1)}s duration`;
    }
    if (powerup.type === "count") {
        const count = meta.count ?? Math.max(Math.round(duration), 1);
        const label = meta.payload ?? powerup.payload;
        const formatted = label ? label.charAt(0).toUpperCase() + label.slice(1) : "Weapon";
        const noun = `${formatted}${count > 1 ? "s" : ""}`;
        return `Drops ${count} ${noun}`;
    }
    return `${Math.max(Math.round(duration), 1)}x trigger`;
}

export function PowerUpStore({
    queuedPowerup,
    activePowerup,
    notices = [],
    onActivate,
    onDismiss,
    variant = "full"
}) {
    const hasQueued = Boolean(queuedPowerup);
    const hasActive = Boolean(activePowerup);
    const hasNotices = notices.length > 0;
    const shouldRender = hasQueued || hasActive || hasNotices;

    if (!shouldRender) {
        return null;
    }

    const queuedLabel = hasQueued ? renderDuration(queuedPowerup.powerup, queuedPowerup.duration, queuedPowerup.meta) : "No power-up queued";
    const activeLabel = hasActive
        ? activePowerup.paused
            ? `Paused: ${(Math.max(activePowerup.remaining ?? activePowerup.duration ?? 0, 0) / 1000).toFixed(1)}s remaining`
            : renderDuration(activePowerup.powerup, activePowerup.duration, activePowerup.meta)
        : "No active power-up";

    if (variant === "compact") {
        const notice = hasNotices ? notices[0] : null;
        const summary = hasActive
            ? {
                heading: "Active",
                title: activePowerup.powerup.name,
                description: activeLabel
            }
            : hasQueued
                ? {
                    heading: "Queued",
                    title: queuedPowerup.powerup.name,
                    description: queuedLabel
                }
                : {
                    heading: "Power-up",
                    title: "None",
                    description: "No power-up ready"
                };

        return (
            <div className="powerup-bar powerup-bar--compact">
                <div className="powerup-bar__compact-info">
                    <Typography variant="caption" color="text.secondary">
                        {summary.heading}
                    </Typography>
                    <Typography variant="body2" fontWeight={600} className="powerup-bar__title">
                        {summary.title}
                    </Typography>
                    {summary.description ? (
                        <Typography variant="caption" color="text.secondary" className="powerup-bar__subtitle">
                            {summary.description}
                        </Typography>
                    ) : null}
                </div>
                {hasQueued ? (
                    <Stack direction="row" spacing={0.75} className="powerup-bar__compact-actions">
                        <Button
                            variant="contained"
                            size="small"
                            onClick={onActivate}
                        >
                            Activate
                        </Button>
                        <Button
                            variant="text"
                            size="small"
                            onClick={onDismiss}
                        >
                            Dismiss
                        </Button>
                    </Stack>
                ) : notice ? (
                    <span className={`powerup-notice powerup-notice--${notice.severity}`}>
                        {notice.message}
                    </span>
                ) : null}
            </div>
        );
    }

    return (
        <div className="powerup-bar">
            <div className="powerup-bar__section">
                <Typography variant="caption" color="text.secondary">
                    Active Power-up
                </Typography>
                <Typography variant="body1" fontWeight={600} className="powerup-bar__title">
                    {hasActive ? activePowerup.powerup.name : "None"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{activeLabel}</Typography>
                {hasActive && activePowerup.paused ? (
                    <Typography variant="caption" color="warning.main">
                        Resume play to continue the effect.
                    </Typography>
                ) : null}
            </div>

            <Divider orientation="vertical" flexItem className="powerup-bar__divider" />

            <div className="powerup-bar__section powerup-bar__section--queued">
                <Typography variant="caption" color="text.secondary">
                    Incoming Power-up
                </Typography>
                <Typography variant="body1" fontWeight={600} className="powerup-bar__title">
                    {hasQueued ? queuedPowerup.powerup.name : "None"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{queuedLabel}</Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                    <Button
                        variant="contained"
                        size="small"
                        disabled={!hasQueued}
                        onClick={onActivate}
                    >
                        Activate
                    </Button>
                    <Button
                        variant="text"
                        size="small"
                        disabled={!hasQueued}
                        onClick={onDismiss}
                    >
                        Dismiss
                    </Button>
                </Stack>
            </div>

            {hasNotices ? (
                <div className="powerup-bar__notices">
                    {notices.map((notice) => (
                        <span key={notice.id} className={`powerup-notice powerup-notice--${notice.severity}`}>
                            {notice.message}
                        </span>
                    ))}
                </div>
            ) : null}
        </div>
    );
}
