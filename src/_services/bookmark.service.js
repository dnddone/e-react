// TODO: Make it all as Promises

const getBookmarks = () => {
  const ls = localStorage.getItem('bookmarks');

  if (ls) {
    return ls.split(' ').map(id => parseInt(id, 10));
  }

  return [];
};

const updateBookmarks = (array) => {
  localStorage.setItem('bookmarks', array.join(' '));
};

export default {
  getBookmarks,
  updateBookmarks,
};
