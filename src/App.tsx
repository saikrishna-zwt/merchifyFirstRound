import { useState } from 'react';
import QuizIntroPage from './Pages/quizIntro'
import QuizPage from './Pages/quizPage';

function App() {
  const [timeLeft, setTimeLeft] = useState(50);
  const [isTimeout, setIsTimeout] = useState(false);
  const [quizPage, setQuizPage] = useState(false)
  return (
    <>
      {
        quizPage ?

          <div>
            <QuizPage setQuizPage={setQuizPage} setIsTimeout={setIsTimeout} isTimeout={isTimeout} timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
          </div>

          :
          <QuizIntroPage setTimeLeft={setTimeLeft}  setQuizPage={setQuizPage} />
      }
    </>
  );
}

export default App;
