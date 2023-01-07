import { ImageListItem, Typography, Button } from "@mui/material"
import { ModalBlock } from "./modal"


export const Result = ({ percent, step, setStep, correct, setCorrect }) => {
    
    return (
        <div style={{ textAlign: 'center' }}>

            <ImageListItem  >
                <img
                    src='https://img.lovepik.com/element/40065/1545.png_1200.png'

                    alt='lalal'
                    loading="lazy"
                />
            </ImageListItem>


            <Typography align="center" variant="h5" component={'h5'}>вы отгадали {correct}  вариата(ов) из {step}</Typography>
            <Button onClick={() => {
                return (
                    percent = 0,
                    setStep(0),
                    setCorrect(0)
                )


            }} variant="contained">вернуться</Button>
        </div>




    )
}