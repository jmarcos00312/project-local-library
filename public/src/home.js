function totalBooksCount(books) {
  let total = 0;
  for(key in books){
      if(books.hasOwnProperty(key)){
          total++
      }
  }
  return total
}

function totalAccountsCount(accounts) {
  let total =0;
  for(key in accounts){
      if(accounts.hasOwnProperty(key)){
          total++
      }
  }
  return total
}

function booksBorrowedCount(books) {
  let count =0;
  for(let i=0;i<books.length;i++){
      let borrow = books[i].borrows;
  for(let j=0;j<borrow.length;j++){
      let status = borrow[j].returned
      if(status === false){
          count++
      }
  }
  }
  return count
}

const getMostCommonGenres = (books) => {}

function getMostPopularBooks(books) {
  
}

function getMostPopularAuthors(books, authors) {
  // let mostPopular = books.
}

module.exports = {
totalBooksCount,
totalAccountsCount,
booksBorrowedCount,
getMostCommonGenres,
getMostPopularBooks,
getMostPopularAuthors,
};
