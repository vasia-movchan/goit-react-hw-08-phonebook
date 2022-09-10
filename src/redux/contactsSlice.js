import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addItem: (state, action) => {
      const repeatedContact = state.items.find(
        elem => elem.name === action.payload.name
      );
      if (repeatedContact) {
        alert(`${repeatedContact.name} is already in contacts`);
      } else {
        return { ...state, items: [action.payload, ...state.items] };
      }
    },

    removeItem: (state, action) => {
      return {
        ...state,
        items: state.items.filter(contact => contact.id !== action.payload),
      };
    },

    filterChange: (state, action) => {
      console.log(state);
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
});

const contactsReducer = contactsSlice.reducer;

export const { addItem, removeItem, filterChange } = contactsSlice.actions;

export { contactsReducer };
