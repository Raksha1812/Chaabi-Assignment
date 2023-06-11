import './TypingBox.css';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { inputKey, resetKeys } from '../actions';



const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    currentKey: state.currentKey,
    correctKeys: state.correctKeys,
    totalKeys: state.totalKeys,
    accuracy: state.accuracy,
    timer: state.timer,
  };
};

const mapDispatchToProps = {
  inputKey,
  resetKeys,
};

// export default connect(mapStateToProps, mapDispatchToProps)(TypingBox);

const TypingBox = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [currentKey, setCurrentKey] = useState('');
  const [correctKeys, setCorrectKeys] = useState(0);
  const [totalKeys, setTotalKeys] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [timer, setTimer] = useState(300); // 5 minutes in seconds

  const targetKeys = 'asdfjkl;'; // keys the user is supposed to type

  const handleInputChange = (e) => {
    const typedKey = e.target.value;
    // setInputValue(typedKey);
    props.inputKey(typedKey)

    if (typedKey === currentKey) {
      setCorrectKeys(correctKeys + 1);
    }
    setTotalKeys(totalKeys + 1);
  };

  useEffect(() => {
    // Timer countdown
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    // Calculate accuracy
    if (totalKeys > 0) {
      const newAccuracy = (correctKeys / totalKeys) * 100;
      setAccuracy(newAccuracy.toFixed(2));
    }

    // Reset values after 5 minutes
    if (timer === 0) {
      setInputValue('');
      setCorrectKeys(0);
      setTotalKeys(0);
      setAccuracy(100);
      setTimer(300);
    }

    return () => clearInterval(interval);
  }, [currentKey, correctKeys, totalKeys, timer]);

  useEffect(() => {
    setCurrentKey(targetKeys.charAt(totalKeys));
  }, [totalKeys]);

  return (
    <div className="header">
      <div>Time Remaining: {timer} seconds</div>
      <div>
        Keys: {correctKeys}/{totalKeys} (Accuracy: {accuracy}%)
      </div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <div>Next key: {currentKey}</div>
    </div>
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(TypingBox);
