import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import LinearColor from './progress';
export const ModalBlock = ({ question, changeStep, percent }) => {
    
    return (
        <>
            <LinearColor percent = {percent} />
            <Typography id="modal-modal-title" variant="h5" component="h2">
                {question.title}
            </Typography>
            <List >
                {question.variants.map((e, i) => {
                    
                    return <ListItem disablePadding sx={{ border: '1px solid #eee', borderRadius: 3, marginBottom: 1 }}>

                         <ListItemButton onClick={()=>changeStep(i)}>
                            <ListItemText primary={e} />
                        </ListItemButton>

                    </ListItem>
                })}

            </List>
        </>
    )
}

