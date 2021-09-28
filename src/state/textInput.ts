import { atom, selector, DefaultValue } from 'recoil';


const textInputAtom = atom<string>({
  key: 'textInputAtom',
  default: '',
});

const textInputSelector = selector<string>({
  key: 'textInputSelector',
  get: ({ get }) => get(textInputAtom),
  set: ({ set }, newValue ) => {
    if(!(newValue instanceof DefaultValue))
      newValue.length <= 16 && set<string>(textInputAtom, newValue);
  },
});

export { textInputSelector };
