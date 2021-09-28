import { ChangeEvent, FormEvent } from 'react';
import { ReactElement } from 'react';
import { useRecoilState, useRecoilCallback } from 'recoil';
import { draft, send } from '../state/chatroom';


const Draft = (): ReactElement => {
  const [ value, setValue ] = useRecoilState(draft);
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

export default Draft;
