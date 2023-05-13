import React, { useState, useEffect } from 'react'
import QuestionProps from '../subComponents/questionProps';
import clock from "../assests/clock.jpeg"
import { Button } from 'antd';

interface IQuizPage {
    setIsTimeout: any;
    isTimeout: any;
    timeLeft: any;
    setTimeLeft: any
    setQuizPage: any
}

const QuizPage = (props: IQuizPage) => {
    const { setIsTimeout, isTimeout, timeLeft, setTimeLeft, setQuizPage } = props;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);



    const questions = [
        {
            "id": 1,
            "question": "What is the Currency of USA?",
            "options": ["Dollar", "Rupees", "Pound", "Euro"],
            "answer": "Dollar"
        },
        {
            "id": 2,
            "question": "Who was the winner of 2009 Indian Premier League?",
            "options": ["Chennai Super Kings", "Rajasthan Royals", "Deccan Chargers", "Sun Risers Hyderabad"],
            "answer": "Deccan Chargers"
        },
        {
            "id": 3,
            "question": "In which South State does the Radha Krihsna Beach is Located?",
            "options": ["Tamil Nadu", "Andhra Pradesh", "Goa", "Banglore"],
            "answer": "Andhra Pradesh"
        },
        {
            "id": 4,
            "question": "Which is the third area of economic development?",
            "options": ["Service Sector", "Science Field", "Educational Sector", "Agriculture Sector"],
            "answer": "Service Sector"
        },
        {
            "id": 5,
            "question": "Whose Arthashastra was composed?",
            "options": ["Chandragupta", "Maurya Alexander", "Chanakya", " None of these"],
            "answer": "Chanakya"
        },
        {
            "id": 6,
            "question": "In India, which one among the following formulates the fiscal policy?",
            "options": ["Planning Commission", "Ministry of Finance", "Finance Commission", "The Reserve Bank of India"],
            "answer": "Ministry of Finance"
        },
        {
            "id": 7,
            "question": "Select the number-pair that is analogous to the given pair?",
            "options": ["60:28", "521:52", "27:3", "612:36"],
            "answer": "521:52"
        },
        {
            "id": 8,
            "question": "Who is the ICC Best Cricketer of the year 2019",
            "options": ["David Warner", "Virat Kohli", "Kane Willamson", "Ben Stokes"],
            "answer": "Ben Stokes"
        },
        {
            "id": 9,
            "question": "What is the Chemical formula of H2O",
            "options": ["Water", "Fire", "Air", "Nitrogen"],
            "answer": "Water"
        },
        {
            "id": 10,
            "question": "Permanent Secretariat to coordinate the implementation of SAARC programme is located at?",
            "options": ["Dhaka", "New Delhi", "Colombo", "Kathmandu"],
            "answer": "Kathmandu"
        }
    ]

    const handleOptionSelect = (option: string) => {
        console.log(option, "option")
        setSelectedOption(option);
    };

    const handleNextQuestion = (index: any) => {
        if (selectedOption === questions[currentQuestion].answer) {
            setCorrectAnswers(correctAnswers + 1);
        } else {
            setIncorrectAnswers(incorrectAnswers + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
        setCurrentQuestionIndex(index + 1)
        setSelectedOption("");
    };
    const onClickHome = () => {
        setQuizPage(false)
    }

    useEffect(() => {
        if (timeLeft > 0) {
            setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        } else {
            setIsTimeout(true);
        }
    }, [timeLeft]);

    return (
        <div style={{ margin: "10px" }}>
            {isTimeout || currentQuestion === questions.length ? (
                <div>
                    <h1>Time's up!</h1>
                    <p >
                        You answered {correctAnswers} out of {questions.length} questions
                        correctly, and {incorrectAnswers} questions incorrectly.
                    </p>
                    <Button onClick={onClickHome} type='primary'> Back to Home </Button>
                </div>
            ) : (
                <>

                    <div style={{ textAlign: "end", margin: "20px" }}>
                        <div className='timer-container'>
                            <img className="clock-image" src={clock} alt="clock" />
                            <span style={{ fontWeight: "bold" }}> Your Time Left: {timeLeft}</span>
                        </div>
                    </div>
                    <div style={{ margin: "15px", }}>
                        <h1 className='quiz-competion-text' style={{ textAlign: "center", marginBottom: "15px" }}>Quiz Competition</h1>
                        {questions.map((question, index) => {

                            if (index === currentQuestion) {
                                return (
                                    <QuestionProps setTimeLeft={setTimeLeft} setQuizPage={setQuizPage} handleOptionSelect={handleOptionSelect} question={question} handleNextQuestion={() => handleNextQuestion(index + 1)} index={index} selectedOption={selectedOption} />
                                );
                            }
                            return null;
                        })}
                    </div>
                </>
            )}
        </div>
    );

}

export default QuizPage
