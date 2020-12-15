function findAccountById(accounts, id) {
  let result = accounts.find((account) => account.id===id)
  console.log(result)
}

function sortAccountsByLastName(accounts) {}

function numberOfBorrows(account, books) {}

function booksInPossession(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  booksInPossession,
};
