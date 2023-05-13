import React, { useState } from "react";
import Layout from "../components/Layout";
import { Button, Drawer, Space } from "antd";

interface IQuizIntroPage {
  setQuizPage :any
  setTimeLeft: any
}

const QuizIntroPage = (props: IQuizIntroPage) => {
  const {setQuizPage,setTimeLeft} = props
  const [open, setOpen] = useState(false);
  setTimeLeft(50)

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onClickStartQuizz = () => {
    setQuizPage(true)
  }


  return (
    <Layout>
      <div
        style={{
          maxWidth: "800px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <div style={{ padding: "0" }}>
          <h1 style={{ fontSize: "52px", lineHeight: "0.2" }}>
            Quizzinga
          </h1>
          <p
            style={{
              fontSize: "18px",
              fontFamily:"sans-serif",
              paddingTop:"20px"

            }}
          >
            With a variety of multiple-choice questions, you can
            test your knowledge and learn new information at the
            same time. Our app is suitable for all ages and levels,
            from beginners to experts
          </p>
        </div>
        <img
          style={{
            width: "90%",
            // maxWidth: "800px",
            // height: "",
            // backgroundSize:"cover",
            margin:"5px"
          }}
          className="imageFix"
          src="https://assets.ccbp.in/frontend/responsive-website/features-2-img.png"
          alt=''
        />
        <Button
          style={{
            fontWeight: "600",
            fontSize: "32px",
            width: "300px",
            height: "70px",
            marginTop:"20px"
          }}
          onClick={showDrawer}
        >
          Take The Quiz
        </Button>
        <Drawer
          title='Rules of the Quiz'
          placement='bottom'
          closable={false}
          onClose={onClose}
          open={open}
          style={{
            margin: "0 auto",
          }}
        >
          <Space direction='vertical'>
            <ol>
              <li>
                Each quiz session consists of a set number of
                multiple-choice questions. Read the questions
                carefully before answering.
              </li>
              <li>
                You have a limited amount of time to answer each
                question, so try to answer as quickly as
                possible.
              </li>
              <li>
                Once you select an answer, you cannot change it,
                so be sure to choose wisely.
              </li>
              {/* <li>
                Your score will be based on the number of
                correct answers you provide within the given
                time limit.
              </li> */}
              {/* <li>
                You can earn bonus points by answering questions
                quickly and accurately.
              </li>
              <li>
                You can track your progress and compare your
                scores with other users.
              </li>
              <li>
                The app may have different levels of difficulty,
                so be prepared to face more challenging
                questions as you progress.
              </li>
              <li>
                Have fun and learn something new! Remember, the
                goal of this app is to challenge your knowledge
                and help you expand your understanding of
                various topics.
              </li> */}
            </ol>
            <Space>
              <Button danger onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={onClickStartQuizz} type='primary'>Take the Quizz</Button>
            </Space>
          </Space>
        </Drawer>
      </div>
    </Layout>
  );
};

export default QuizIntroPage;

