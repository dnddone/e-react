export const getBookmarks = () => {
  const ls = localStorage.getItem('bookmarks');

  if (ls) {
    try {
      const bookmarks = JSON.parse(ls);
      // console.log('bookmarks');
      // console.log(bookmarks);
      return bookmarks;
    } catch (error) {
      console.warn('Try to clear localStorage');
      throw new Error(error.message);
    }
  }

  return [];
};

export const updateBookmarks = (bookmarks) => {
  const jsonBookmarks = JSON.stringify(bookmarks);
  localStorage.setItem('bookmarks', jsonBookmarks);
};

export default {
  getBookmarks,
  updateBookmarks,
};
