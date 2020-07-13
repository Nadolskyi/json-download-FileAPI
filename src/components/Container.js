import React, { useState } from 'react'
import Form from './Form';

const Container = () => {
  const [questionAnswerPare, setQuestionAnswerPare] = useState([{ question: '', answer: '', field: 1 }])

  const setQuestionText = (question, field) => {
    const updatedQuestionAnswerPare = questionAnswerPare.find((questionAnswer) => questionAnswer.field === field)
    updatedQuestionAnswerPare.question = question;
    setQuestionAnswerPare[field] = updatedQuestionAnswerPare;
  }

  const setAnswerText = (answer, field) => {
    const updatedQuestionAnswerPare = questionAnswerPare.find((questionAnswer) => questionAnswer.field === field)
    updatedQuestionAnswerPare.answer = answer;
    setQuestionAnswerPare[field] = updatedQuestionAnswerPare;
  }

  const generateAllData = () => {
    const JSONFile = JSON.stringify(questionAnswerPare);

    fetch(new Promise((resolve) => resolve(new Blob([JSONFile], { type: "application/json" })))
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'questions.json';
        a.click();
      })
    )
  }

  const AddNewField = () => {
    const newQuestionAnswerPare = [...questionAnswerPare];
    newQuestionAnswerPare.push({ question: '', answer: '', field: newQuestionAnswerPare.length + 1 });
    return <button onClick={() => setQuestionAnswerPare(newQuestionAnswerPare)}> Add field</button >
  }

  const renderForms = () => questionAnswerPare.map((questionAnswer) => (
    <Form
      key={questionAnswer.field}
      setQuestionText={setQuestionText}
      setAnswerText={setAnswerText}
      questionAnswer={questionAnswer}
    />
  ))

  const Generate = () => (
    <button onClick={generateAllData}>Generate</button>
  )

  return <>
    <AddNewField />
    {renderForms()}
    <Generate />
  </>
}

export default Container;