import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const goalInputChangeHandler = (event) => {
    const inputValue = event.target.value.trim();
    setEnteredValue(inputValue);
    setIsValid(inputValue.length > 0); // Set validity based on input length
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!isValid) {
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue(''); // Reset input after adding goal
    setIsValid(false); // Reset validity after adding goal
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid && enteredValue.length === 0 ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue} />
      </div>
      <Button style={{ background: !isValid ? '#f5c6cb' : 'red' }} className="btn" type="submit">
        Add Goal
      </Button>
    </form>
  );
};

export default CourseInput;
