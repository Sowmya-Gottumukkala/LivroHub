  const books = [
  { title: "NMOD", author: "B S Grewal", cover: "https://www.booksb2bportal.com/covers/31/9781683921288_L.jpg", link: "https://drive.google.com/file/d/1827srEtOR1ciLqdSLTGqUnn4AM2gYcOY/view?usp=sharing"},
  {title: " Higher Engneering ", author: "B. S. Grewal", cover:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/617pWj4VBvL._AC_UF1000,1000_QL80_.jpg",link:"https://drive.google.com/drive/folders/1UMXlZ_0VyO6t3p-fcWd1oOCEBJ2l25Bf"},
  {title: "Engineering Physics ", author: "Ajay Kumar Singh", cover:"https://library.iitd.ac.in/sites/default/files/2022-06/Engineering%20physics-Hitendra%20K%20Malik%20and%20Ajay%20Kumar%20Singh-2010.jpg ",link:"https://drive.google.com/drive/folders/1UMXlZ_0VyO6t3p-fcWd1oOCEBJ2l25Bf"},
  {title: " Engineering Drawing ", author: "N.D.Bhatt", cover:"https://cphbooks.in/wp-data/bookimg/Engineering_Drawing/02.jpg",link: "https://drive.google.com/drive/folders/1UMXlZ_0VyO6t3p-fcWd1oOCEBJ2l25Bf"},
  {title: " Engineering Chemistry ", author: "Jain", cover:"https://5.imimg.com/data5/SELLER/Default/2021/3/GK/DW/GA/59907886/81pqyakvkgl-500x500.jpg ",link:"https://drive.google.com/drive/folders/1UMXlZ_0VyO6t3p-fcWd1oOCEBJ2l25Bf"},
  {title: " BEEE ", author: "R.K.Rajput", cover:"https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/798/9780071329798.jpg",link: "https://drive.google.com/drive/folders/1UMXlZ_0VyO6t3p-fcWd1oOCEBJ2l25Bf"},
  {title: " Advanced Mathematics ", author: "Muhammad Safi", cover:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91ujM3A8gqL._AC_UF1000,1000_QL80_.jpg",link: "https://drive.google.com/drive/folders/1UMXlZ_0VyO6t3p-fcWd1oOCEBJ2l25Bf"},
  ];

// Function to display the search results
function displayResults(results) {
  const catalogSection = document.getElementById('catalog');
  catalogSection.innerHTML = ''; // Clear previous results

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

// Function to handle the search
function handleSearch(event) {
  event.preventDefault(); // Prevent form submission to avoid page reload

  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput.value.toLowerCase();

  const results = books.filter(book => {
    return book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm);
  });

  displayResults(results);
}

// Attach the handleSearch function to the form's submit event
const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', handleSearch);