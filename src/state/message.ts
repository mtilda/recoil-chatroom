import { atom, CallbackInterface, DefaultValue } from 'recoil';


/**
 * Store the text input
 */
const textInput = atom<string>({
  key: 'message/textInput',
  default: '',
});

/**
 * Store the messsage history
 */
const history = atom<string[]>({
  key: 'message/history',
  default: [],
});

/**
 * Prepend textInput to history and reset textInput.
 * 
 * @example
 *  const sendMessage = useRecoilCallback(send);
 *  sendMessage();
 */
const send = ({ reset, set, snapshot }: CallbackInterface) => async (): Promise<void> => {
  set<string[]>(history, [ (await snapshot.getPromise(textInput)), ...(await snapshot.getPromise(history)) ]);
  reset(textInput);
};

export { textInput, history, send };
