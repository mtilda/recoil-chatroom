import {
  atom,
  CallbackInterface,
  DefaultValue,
  selector,
} from 'recoil';


interface chatroom {
  draft: string,
  history: string[],
}

/**
 * Store the state of the chatroom.
 * 
 * @private
 */
const chatroom = atom<chatroom>({
  key: 'chatroom',
  default: {
    draft: '',
    history: [],
  },
});

/**
 * Access the current draft.
 * 
 * @example
 *  const [inputValue, setInputValue] = useRecoilState(draft)
 */
const draft = selector<string>({
  key: 'chatroom/draft',
  get: ({ get }) => get(chatroom).draft,
  set: ({ get, set }, newValue) => {
    // Checks that this method is not being envoked by `useResetRecoilState()`
    if(!(newValue instanceof DefaultValue) &&
      newValue.length <= 16)
      set<chatroom>(chatroom, { ...get(chatroom), draft: newValue });
  },
});

/**
 * Read the chatroom history.
 * 
 * @example
 *  const messages = useRecoilValue(history)
 * 
 * @readonly
 */
const history = selector<string[]>({
  key: 'chatroom/history',
  get: ({ get }) => get(chatroom).history,
});

/**
 * Send the draft as a message in the chatroom, and reset the draft.
 * 
 * @example
 *  const sendMessage = useRecoilCallback(send);
 */
const send = ({ set, snapshot }: CallbackInterface) => async (): Promise<void> => {
  // Store a snapshot of the chatroom
  const { draft: draftSnapshot, history: historySnapshot } = await snapshot.getPromise(chatroom);

  if (draftSnapshot.length > 0) {
    set<chatroom>(chatroom, {
      // Reset the draft
      draft: '',
      // Prepend the draft to history
      history: [ draftSnapshot, ...historySnapshot ],
    });
  }
};

export { draft, history, send };
