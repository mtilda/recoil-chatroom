import { ChangeEvent, FormEvent } from 'react';
import { ReactElement } from 'react';
import { useRecoilState, useRecoilCallback } from 'recoil';
import { textInput, send } from '../state/message';


const TextInput = (): ReactElement => {
  const [ value, setValue ] = useRecoilState(textInput);
  const sendMessage = useRecoilCallback(send);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      {value.length}/16
      <input type='text' value={value} onChange={onChange} />
      <input type='submit' />
    </form>
  );
};

export default TextInput;
