import { LinearProgress, Stack } from "@mui/material";

export default function LinearColor({percent}) {
    return (
        
        <Stack sx={{ marginBottom:2 }} spacing={2}>
            <LinearProgress value={percent} variant="determinate" color="primary" />
            
        </Stack>
    );
}