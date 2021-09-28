import { ReactElement } from 'react';
import TextInput from './components/TextInput';
import './App.css';

const App = (): ReactElement => {
  return (
    <div className='App'>
      Get hacking!
      <TextInput />
    </div>
  );
};

export default App;
