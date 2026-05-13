import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { formatSecondsToClock } from "../game/utils.js";

export function ScorePanel({
    timeLeft,
    score,
    scoreStatus,
    disabled = false,
    multiplier = 1,
    multiplierKey,
    multiplierFlash
}) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const roundedScore = Math.round(score);
    const formattedTime = formatSecondsToClock(timeLeft);
    const flashValue = multiplierFlash && multiplierFlash.value > 1 ? multiplierFlash.value : null;

    if (isMobile) {
        return (
            <Paper
                elevation={6}
                sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 30,
                    borderRadius: "0 0 18px 18px",
                    padding: "calc(env(safe-area-inset-top, 0px) + 10px) 16px 10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.75,
                    backgroundColor: "rgba(18, 18, 18, 0.9)",
                    backdropFilter: "blur(14px)",
                    pointerEvents: "none",
                    opacity: disabled ? 0.7 : 1
                }}
            >
                <Stack direction="row" alignItems="center" justifyContent="space-between" gap={1.5}>
                    <Stack direction="row" spacing={0.75} alignItems="center">
                        <Typography variant="caption" color="text.secondary">Time</Typography>
                        <Typography variant="subtitle1" fontWeight={600}>{formattedTime}</Typography>
                    </Stack>
                    <Box className="score-display score-display--compact">
                        <Stack direction="row" spacing={0.75} alignItems="center">
                            <Typography variant="caption" color="text.secondary">Score</Typography>
                            <Typography variant="subtitle1" fontWeight={600}>{roundedScore}</Typography>
                        </Stack>
                        {flashValue ? (
                            <div key={multiplierFlash.key} className="score-multiplier-flash score-multiplier-flash--compact">
                                x{flashValue}
                            </div>
                        ) : null}
                    </Box>
                    {multiplier > 1 ? (
                        <Chip
                            key={multiplierKey}
                            label={`x${multiplier.toFixed(1).replace(/\.0$/, "")}`}
                            color="warning"
                            size="small"
                            className="score-multiplier score-multiplier--compact"
                        />
                    ) : null}
                </Stack>
                {scoreStatus ? (
                    <Typography variant="caption" color="text.secondary" textAlign="right" noWrap>
                        {scoreStatus}
                    </Typography>
                ) : null}
            </Paper>
        );
    }

    return (
        <Paper
            elevation={8}
            sx={{
                position: "fixed",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "min(960px, calc(100% - 48px))",
                padding: "18px 28px 16px",
                borderRadius: "0 0 28px 28px",
                backgroundColor: "rgba(12, 12, 12, 0.92)",
                borderBottom: "4px solid rgba(255, 152, 0, 0.35)",
                boxShadow: "0 20px 32px rgba(0, 0, 0, 0.45)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 24,
                zIndex: 30,
                pointerEvents: "none",
                opacity: disabled ? 0.75 : 1
            }}
        >
            <Stack spacing={0.5} alignItems="flex-start">
                <Typography variant="overline" color="text.secondary">Time Remaining</Typography>
                <Typography variant="h4" fontWeight={600}>{formattedTime}</Typography>
            </Stack>
            <Box className="score-display">
                <Typography variant="h4" fontWeight={600}>{roundedScore}</Typography>
                {flashValue ? (
                    <div key={multiplierFlash.key} className="score-multiplier-flash">
                        x{flashValue}
                    </div>
                ) : null}
            </Box>
            <Stack spacing={0.75} alignItems="flex-end">
                {multiplier > 1 ? (
                    <Chip
                        key={multiplierKey}
                        label={`x${multiplier.toFixed(1).replace(/\.0$/, "")}`}
                        color="warning"
                        className="score-multiplier"
                        sx={{ pointerEvents: "none" }}
                    />
                ) : null}
                {scoreStatus ? (
                    <Typography variant="body2" color="text.secondary" noWrap>
                        {scoreStatus}
                    </Typography>
                ) : null}
            </Stack>
        </Paper>
    );
}
