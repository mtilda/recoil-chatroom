import { ReactElement } from 'react';
import { useRecoilState } from 'recoil';
import { textInputSelector } from '../state/textInput';


const TextInput = (): ReactElement => {
  const [ value, setValue ] = useRecoilState(textInputSelector);

  return (
    <form>
      <input type='text' value={value} onChange={e => setValue(e.target.value)} />
      {value.length}
    </form>
  );
};

export default TextInput;
