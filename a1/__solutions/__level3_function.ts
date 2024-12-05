const library = (books: Book[]) => {
  const findABookByID = (id: number) => {
    const book = books.find((book) => book.id === id);
    if (!book) return null;
    return book.title;
  };

  const findBooksByAuthor = (author: string) => {
    return books
      .filter((book) => book.author === author)
      .map((book) => book.title);
  };

  return {
    findABookByID,
    findBooksByAuthor,
  };
};
