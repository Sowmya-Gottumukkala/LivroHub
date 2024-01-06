const books = [
 
 { title: " Engineering Mechanics", author: "Irving H. Shames", cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKqx_rY63y0vJKJJ6eT3Z2Na61H1c9gnGqPqgGXdhFVqPiLHC-HXihNXRlsS99cpmyslo&usqp=CAU", link: "https://drive.google.com/file/d/1J91nzPs_NBT9qR4kcQcd7DfkwdMjcHby/view?usp=sharing" },
  { title: "Geotechnical Engineering", author: "C.Venkata Ramayya", cover:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71bhKFUPJpL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1HAh8WaUrUxjplE2UgSUuBtZT-0ZqXBxL/view?usp=sharing" },
  {title: " Engineering Geology", author: "F. G. Bell", cover:"https://m.media-amazon.com/images/I/71UsY1D697L._SL1500_.jpg", link: "https://drive.google.com/file/d/13DTL0sbhxSx1s3Hfjgr7bQcJOq4DmvX0/view?usp=sharing" },
{title: " Engineering Geology", author: "Subinoy Gangopadhay", cover:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51A6uXsbCqL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_PIStarRatingFOUR%2CBottomLeft%2C360%2C-6_SR600%2C315_ZA29%2C445%2C290%2C400%2C400%2CAmazonEmberBold%2C12%2C4%2C0%2C0%2C5_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg", link: "https://drive.google.com/file/d/1wqGAqd1WFCYBOC7YgibriptkxHKO1huI/view?usp=sharing" },
{title: "Basic Civil Engineering", author:"S.S.Bhavikatti", cover:"https://4.bp.blogspot.com/-R5416QrVVOI/WEvshSMZf9I/AAAAAAAAG18/KvgZxnc-UGEtZdbjIwlOtc3-mm0vh4kOQCLcB/s640/%2528engineersdaily.com%2529basic_civil_engg.png", link: "https://drive.google.com/file/d/1KUo12JF4XJskwDNeB_RgoChP-uddpO-T/view?usp=sharing" },
{title: "Strength of materials", author: "R.K.Bansal", cover:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/719n9rqGE9L._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1BnCrGRQ0BCKrVQ4qV_j38eolaW4S3CEo/view?usp=sharing" },
	{title: "Highway Engineering", author: "S.K.Khanna", cover: "https://rukminim2.flixcart.com/image/850/1000/xif0q/regionalbooks/l/v/d/highway-engineering-original-imagzxtfuz6wagp7.jpeg?q=90", link: "https://drive.google.com/file/d/1zl6cPY2w5lQEUDoe3SR3ff-1a5bRBZpR/view?usp=sharing" },
  // Add more book objects as needed
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