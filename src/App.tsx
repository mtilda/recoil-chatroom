import { ReactElement } from 'react';
import TextInput from './components/TextInput';
import MessageBoard from './components/MessageBoard';
import './App.css';

const App = (): ReactElement => {
  return (
    <div className='App'>
      <TextInput />
      <MessageBoard />
    </div>
  );
};

export default App;
