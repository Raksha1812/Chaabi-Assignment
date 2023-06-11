import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import TypingBox from './components/TypingBox';

function App() {
  return (
    <Provider store={store}>
      <TypingBox />
    </Provider>
  );
}



export default App;
