document.getElementById('add-book-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var subject = document.getElementById('subject').value;
    var publishDate = document.getElementById('publish-date').value;
    
    // Create book object
    var book = {
      title: title,
      author: author,
      subject: subject,
      publishDate: publishDate
    };
    
    // Add book to the book list
    addBookToList(book);
    
    // Reset the form
    document.getElementById('add-book-form').reset();
  });
  
  function addBookToList(book) {
    var bookList = document.getElementById('book-list');
    
    var bookItem = document.createElement('div');
    bookItem.classList.add('book');
    
    var bookTitle = document.createElement('h3');
    bookTitle.textContent = book.title;
    
    var bookAuthor = document.createElement('p');
    bookAuthor.textContent = 'Author: ' + book.author;
    
    var bookSubject = document.createElement('p');
    bookSubject.textContent = 'Subject: ' + book.subject;
    
    var bookPublishDate = document.createElement('p');
    bookPublishDate.textContent = 'Publish Date: ' + book.publishDate;
    
    bookItem.appendChild(bookTitle);
    bookItem.appendChild(bookAuthor);
    bookItem.appendChild(bookSubject);
    bookItem.appendChild(bookPublishDate);
    
    bookList.appendChild(bookItem);
  }