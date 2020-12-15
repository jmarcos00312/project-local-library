function findAuthorById(authors, id) {
  let result = {}
  
}

function findBookById(books, id) {}

function partitionBooksByBorrowedStatus(books) {}

function getBorrowersForBook(book, accounts) {
  let borrowedBooks = books.filter(book =>{
    console.log(book.borrows[0].returned)
  })
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
