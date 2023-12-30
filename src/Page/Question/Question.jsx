import React from 'react'
import './Question.css';

const Question = () => {
  return (
    <div className='ques-content'>
        <div className="ques-card">
            <span>Quiz 1</span>
            <div className="ques-question">How are they?</div>
            <div className="ques-options">
                <input type="radio" name="option" id="" />1
                <input type="radio" name="option" id="" />2
                <input type="radio" name="option" id="" />3
                <input type="radio" name="option" id="" />4
            </div>
        </div>
    </div>
  )
}

export default Question