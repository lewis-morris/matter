import Box from "@mui/material/Box";

export function CanvasStage({ boardRef }) {
    return (
        <Box id="game-board" ref={boardRef} className="game-board">
            <div data-nopoints data-floor data-matter="rigid" data-angle="0" className="matter-floor top" />
            <div data-nopoints data-floor data-matter="rigid" data-angle="0" className="matter-floor bottom" />
            <div data-nopoints data-wall data-matter="rigid" data-angle="0" className="matter-wall left" />
            <div data-nopoints data-wall data-matter="rigid" data-angle="0" className="matter-wall right" />
        </Box>
    );
}
