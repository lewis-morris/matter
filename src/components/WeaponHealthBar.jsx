import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export function WeaponHealthBar({ weaponKey, weaponHealth, disabled = false }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    if (isMobile || !weaponKey) {
        return null;
    }

    const total = weaponHealth?.max ?? 0;
    const current = weaponHealth?.current ?? 0;
    const fillPercent = weaponHealth ? Math.max(0, Math.min(weaponHealth.percent ?? 0, 100)) : 100;
    const basePercent = weaponHealth ? Math.max(0, Math.min(weaponHealth.basePercent ?? 0, 100)) : fillPercent;
    const bonusPercent = weaponHealth ? Math.max(0, Math.min(weaponHealth.bonusPercent ?? 0, 100)) : 0;
    const valueLabel = total > 0 ? `${Math.round(current)} / ${Math.round(total)}` : "--";

    return (
        <Paper
            elevation={6}
            className={`weapon-health-meter${disabled ? " weapon-health-meter--disabled" : ""}`}
            sx={{
                opacity: disabled ? 0.6 : 1,
                pointerEvents: "none"
            }}
        >
            <Stack spacing={1} alignItems="center" sx={{ width: "100%" }}>
                <Typography variant="caption" color="text.secondary" sx={{ textTransform: "uppercase", letterSpacing: 0.5 }}>
                    Health
                </Typography>
                <Typography variant="subtitle2" sx={{ textTransform: "capitalize", fontWeight: 600 }}>
                    {weaponKey}
                </Typography>
                <Box className="weapon-health-meter__track">
                    <Box className="weapon-health-meter__fill" sx={{ height: `${fillPercent}%` }} />
                    {bonusPercent > 0 ? (
                        <Box
                            className="weapon-health-meter__bonus"
                            sx={{
                                height: `${bonusPercent}%`,
                                bottom: `${basePercent}%`
                            }}
                        />
                    ) : null}
                </Box>
                <Typography variant="caption" color="text.secondary">
                    {valueLabel}
                </Typography>
            </Stack>
        </Paper>
    );
}
