import { Button } from 'antd';
import OptionProps from './optionProps';

interface IQuestionProps {
    question: any
    handleNextQuestion: any
    index: any
    selectedOption: any
    handleOptionSelect: any
    setQuizPage:any
    setTimeLeft:any
}

const QuestionProps = (props: IQuestionProps) => {
    const { question, handleNextQuestion, index, selectedOption, handleOptionSelect,setQuizPage,setTimeLeft } = props;
    const onClickCancelQuizz = () => {
        setQuizPage(false)
        setTimeLeft(100)
    }
    return (
        <div key={question.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1 className='quiz-competion-text'>Q-{index + 1} {question.question}</h1>
            {question.options.map((option: any, ind: any) => (
                <OptionProps option={option} ind={ind} handleOptionSelect={handleOptionSelect} selectedOption={selectedOption} />
            ))}
            <div style={{ textAlign: "center" }}>
                 <Button style={{ marginTop: "25px", marginRight: "15px" }} onClick={onClickCancelQuizz} type="primary" danger size="large">
                    Cancel
                </Button>
                <Button style={{ marginTop: "25px", marginRight: "" }} onClick={handleNextQuestion} type="primary" size="large">
                    Next
                </Button>
            </div>
        </div>
    )
}

export default QuestionProps
