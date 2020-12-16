function findAuthorById(authors, id) {
  let result = authors.find((author) => author.id===id)
return result
}

function findBookById(books, id) {
  let result = books.find((book) => book.id===id)
  return result
}

function partitionBooksByBorrowedStatus(books) {
let borrowedBooks = books.filter(book=> {
  return book.borrows[0].returned==false;
})
let returnedBooks = books.filter(book => {
  return book.borrows[0].returned==true
})
return [borrowedBooks, returnedBooks]
}

function getBorrowersForBook(book, accounts) {
  let array = [];
  for (let key in book.borrows){
      const bookBorrowsobj = accounts.find(account => account.id === book.borrows[key].id)
      bookBorrowsobj.returned = book.borrows[key].returned
      array.push(bookBorrowsobj)
  }
  return array.slice(0,10)
}
// let borrowers = []:
//accounts.forEach(account=>{
// book.borrows.forEach(transaction=>{
//       if(transaction.id===account.id){
//         let accountObj = {...account};
//         accountObj.returned = transaction.returned
//         borrowers.push(accountObj)
//       }
// })

// })

module.exports = {
findAuthorById,
findBookById,
partitionBooksByBorrowedStatus,
getBorrowersForBook,
};
