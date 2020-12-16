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

const getMostCommonGenres = (books) => {
  const genre = books.map((book)=> book.genre)
  let array = [];
  let count = {};
  genre.forEach(function(i) { count[i] = (count[i]||0) + 1;});
  for (let key in count) { array.push({ name: key, count: count[key] });
                         } array.sort((a, b) => a.count > b.count ? -1 : 1) 
  return array.slice(0, 5);
}

function getMostPopularBooks(books) {
let arr = [] 
for (let i=0;i<books.length; i++){
  let novels = {}
  novels.name = books[i].title
  novels.count = books[i].borrows.length
  arr.push(novels) }
  const final = arr.sort((book1, book2)=> book1.count<book2.count?1:-1)
  return final.slice(0,5)

}

function getMostPopularAuthors(books, authors) {
let arr = []
//let author = {}
for (let i=0;i<authors.length;i++){
  let author = {}
  author.name = `${authors[i].name.first} ${authors[i].name.last}`
  author.count = 0
  for (let j=0; j<books.length; j++){
    //let bookArr=[]
    if (books[j].authorId===authors[i].id){
      //bookArr.push(...books[j].borrows)
      author.count += books[j].borrows.length
    }
  }
  arr.push(author)
}
const final = arr.sort((auth1, auth2)=> auth1.count < auth2.count ? 1:-1)
return final.slice(0,5)
}

module.exports = {
totalBooksCount,
totalAccountsCount,
booksBorrowedCount,
getMostCommonGenres,
getMostPopularBooks,
getMostPopularAuthors,
};
