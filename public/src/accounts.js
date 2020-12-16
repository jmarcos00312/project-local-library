function findAccountById(accounts, id) {
  let result = accounts.find((account) => account.id===id)
  return result
}

function sortAccountsByLastName(accounts) {
    return accounts.sort((a,b)=> a.name.last>b.name.last? 1:-1)
}

function numberOfBorrows(account, books) {
    let total = 0;
    for(let key in books){
        const borrowed = books[key].borrows
    .filter(book=> book.id === account.id).length; total+= borrowed; } 
        return total; }



function getBooksPossessedByAccount(account, books, authors) {
    let array = []
     for (let index in books){
        let booksOut = books[index].borrows.some
        (book=> book.id === account.id && book.returned === false);
        if (booksOut){ let bookIndex = books[index]; bookIndex.author = authors.find(authorFound=>
     authorFound.id === bookIndex.authorId); array.push(bookIndex); } } 
    return array; 
}
// let evilBooks = [];
// for(let i = 0;i<books.length;i++){
//   let book = books[i];
//   const {id,title,genre,borrows} = book;
//   for(let j=0;j<borrows.length; j++){
//     if (borrows[j].id === account.id && borrows[j].returned ===false){
//       for(let k = 0;k<authors.length;k++){
//         let author = authors[k];
//         if(author.id==book.author.id){
//           let tempBook = {id,title,genre,author, borrows};
//           evilBooks.push(tempBook)
//         }
//       }
//     }
//   }
// }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
