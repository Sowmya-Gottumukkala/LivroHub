
  const books = [
  { title: "NMOD", author: "B S Grewal", cover: "https://www.booksb2bportal.com/covers/31/9781683921288_L.jpg", link: "https://drive.google.com/file/d/1827srEtOR1ciLqdSLTGqUnn4AM2gYcOY/view?usp=sharing"},
  {title: " Higher Engneering ", author: "B. S. Grewal", cover:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/617pWj4VBvL._AC_UF1000,1000_QL80_.jpg",link:"https://drive.google.com/drive/folders/1UMXlZ_0VyO6t3p-fcWd1oOCEBJ2l25Bf"},
  {title: "Engineering Physics ", author: "Ajay Kumar Singh", cover:"https://library.iitd.ac.in/sites/default/files/2022-06/Engineering%20physics-Hitendra%20K%20Malik%20and%20Ajay%20Kumar%20Singh-2010.jpg ",link:"https://drive.google.com/drive/folders/1UMXlZ_0VyO6t3p-fcWd1oOCEBJ2l25Bf"},
  {title: " Engineering Drawing ", author: "N.D.Bhatt", cover:"https://cphbooks.in/wp-data/bookimg/Engineering_Drawing/02.jpg",link: "https://drive.google.com/drive/folders/1UMXlZ_0VyO6t3p-fcWd1oOCEBJ2l25Bf"},
  {title: " Chemistry ", author: "Jain", cover:"https://5.imimg.com/data5/SELLER/Default/2021/3/GK/DW/GA/59907886/81pqyakvkgl-500x500.jpg ",link:"https://drive.google.com/drive/folders/1UMXlZ_0VyO6t3p-fcWd1oOCEBJ2l25Bf"},
  {title: " BEEE ", author: "R.K.Rajput", cover:"https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/798/9780071329798.jpg",link: "https://drive.google.com/drive/folders/1UMXlZ_0VyO6t3p-fcWd1oOCEBJ2l25Bf"},
  {title: " Advanced 	Mathematics ", author: "Muhammad Safi", cover:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91ujM3A8gqL._AC_UF1000,1000_QL80_.jpg",link: "https://drive.google.com/drive/folders/1UMXlZ_0VyO6t3p-fcWd1oOCEBJ2l25Bf"},
  
  ];


function displayResults(results) {
  const catalogSection = document.getElementById('catalog');
  catalogSection.innerHTML = '';

  if (results.length === 0) {
    const noResultsMessage = document.createElement('p');
    noResultsMessage.textContent = 'No matching books found.';
    catalogSection.appendChild(noResultsMessage);
  } else {
    results.forEach(book => {
      const bookCard = document.createElement('div');
      bookCard.classList.add('book-card');

      const coverImage = document.createElement('img');
      coverImage.src = book.cover;
      coverImage.classList.add('book-cover');
      bookCard.appendChild(coverImage);

      const titleElement = document.createElement('h3');
      titleElement.textContent = book.title;
      titleElement.classList.add('book-title');
      bookCard.appendChild(titleElement);

      const authorElement = document.createElement('p');
      authorElement.textContent = `Author: ${book.author}`;
      authorElement.classList.add('book-author');
      bookCard.appendChild(authorElement);

      const bookLink = document.createElement('a');
      bookLink.href = book.link;
      bookLink.textContent = 'View Book';
      bookCard.appendChild(bookLink);

      catalogSection.appendChild(bookCard);
    });
  }
}

function handleSearch(event) {
  event.preventDefault();

  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput.value.toLowerCase();

  const results = books.filter(book => {
    return book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm);
  });

  displayResults(results);
}

const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', handleSearch);

const feedbackIcons = document.querySelectorAll('.feedback-icon');
feedbackIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const rating = icon.getAttribute('data-rating');
    handleFeedback(rating);

    feedbackIcons.forEach(otherIcon => otherIcon.classList.remove('selected'));
    icon.classList.add('selected');
  });
});

function handleFeedback(rating) {
  const feedbackText = document.querySelector('.feedback-text');
  const contactMessage = " Please contact us and give your feedback!";

  switch (rating) {
    case 'happy':
      feedbackText.textContent = `Thank You for your happy feedback. It makes us feel better and happy to give a good experience.${contactMessage}`;
      break;
    case 'neutral':
      feedbackText.textContent = `Thanks for the average feedback. We will surely try to give a good experience.${contactMessage}`;
      break;
    case 'sad':
      feedbackText.textContent = `Thank You for the sad feedback. We are so sorry for the inconvenience. We make sure that your next visit makes you happy.${contactMessage}`;
      break;
    default:
      break;
  }
}