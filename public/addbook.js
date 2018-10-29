
document.querySelector('#submitBook').addEventListener('click', event =>{
  event.preventDefault()
  fetch('/books', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      id: document.querySelector('#bookName').value,
      title: document.querySelector('#bookName').value,
      author: document.querySelector('#bookAuthor').value,
      pages: document.querySelector('#bookPages').value,
      currentPage: document.querySelector('#bookCurPage').value,
      isRead: document.querySelector('#bookIsRead').checked
    })
  })
  .then(r => {
    console.log(document.querySelector('#bookName').value)
    window.location='/list'

  })
  .catch(e => console.error(e))
})