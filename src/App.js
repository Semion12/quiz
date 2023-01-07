
import { Box } from '@mui/material';
import { useState } from 'react';
import './App.css';
import { ModalBlock } from './component/modal';
import { Result } from './component/result';
import { questions } from './db';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 5,
  boxShadow: 14,
  p: 4,
  
};

function App() {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)
  const question = questions[step]
  const changeStep =(i)=>{
    if (i === question.correct){
      setCorrect(correct+1)
    }
    setStep(step+1)
    
  }

  
  
  const percent = Math.round(step/questions.length*100)
  

  
  
  
  return (
    <div style={{ height: '100vh', backgroundColor: '#6A5ACD' }}>
      
      <Box sx={style}>
        {percent <100 && <ModalBlock percent = {percent} question = {questions[step]} step = {step} changeStep = {changeStep} />}
        
        {percent == 100 && <Result correct = {correct} percent = {percent} step = {step} setStep = {setStep} setCorrect = {setCorrect} />}
      </Box>

    </div>
  );
}

export default App;
