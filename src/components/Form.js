import React from 'react';

const Form = ({ questionAnswer, setQuestionText, setAnswerText }) => {
  const submitForm = (e) => {
    e.preventDefault();
  }
  return <>
    <form onSubmit={submitForm}>
      <label>Question</label>
      <input
        value={questionAnswer.questionText}
        onChange={(e) => setQuestionText(e.target.value, questionAnswer.field)}
      />
      <label>Answer</label>
      <input
        value={questionAnswer.answerText}
        onChange={(e) => setAnswerText(e.target.value, questionAnswer.field)}
      />
    </form>
  </>;
}

export default Form;
