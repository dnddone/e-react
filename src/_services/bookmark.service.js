// TODO: Make it all as Promises

const getBookmarks = () => {
  const ls = localStorage.getItem('bookmarks');

  if (ls) {
    return ls.split(' ').map(id => parseInt(id, 10));
  }

  return [];
};

const updateBookmarks = (bookmarks) => {
  localStorage.setItem('bookmarks', bookmarks.join(' '));
};

export default {
  getBookmarks,
  updateBookmarks,
};
