import { ReactElement } from 'react';
import Draft from './components/Draft';
import History from './components/History';
import './App.css';

const App = (): ReactElement => {
  return (
    <div className='App'>
      <Draft />
      <History />
    </div>
  );
};

export default App;
