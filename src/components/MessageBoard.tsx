import { ReactElement } from 'react';
import { useRecoilValue } from 'recoil';
import { history } from '../state/message';


const MessageBoard = (): ReactElement => {
  const messages = useRecoilValue(history);

  return (
    messages.length ? (
      <ul>
        {messages.map((message: string, index: number) => (
          <li key={index}>
            {message}
          </li>
        ))}
      </ul>
    ) : (
      <h3>No messages</h3>
    )
  );
};

export default MessageBoard;
