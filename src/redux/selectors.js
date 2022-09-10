const filterSelector = state => state.contacts.filter;

const contactsSelector = state => state.contacts.items;

export { filterSelector, contactsSelector };
