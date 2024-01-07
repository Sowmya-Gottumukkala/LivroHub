


const books = [
//s and h
{ title: "NMOD", author: "B S Grewal", cover: "https://www.booksb2bportal.com/covers/31/9781683921288_L.jpg", link: "https://drive.google.com/file/d/1827srEtOR1ciLqdSLTGqUnn4AM2gYcOY/view?usp=sharing"},
  {title: " Higher Engneering ", author: "B. S. Grewal", cover:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/617pWj4VBvL._AC_UF1000,1000_QL80_.jpg",link:"https://drive.google.com/drive/folders/1UMXlZ_0VyO6t3p-fcWd1oOCEBJ2l25Bf"},
  {title: "Engineering Physics ", author: "Ajay Kumar Singh", cover:"https://library.iitd.ac.in/sites/default/files/2022-06/Engineering%20physics-Hitendra%20K%20Malik%20and%20Ajay%20Kumar%20Singh-2010.jpg ",link:"https://drive.google.com/drive/folders/1UMXlZ_0VyO6t3p-fcWd1oOCEBJ2l25Bf"},
  {title: " Engineering Drawing ", author: "N.D.Bhatt", cover:"https://cphbooks.in/wp-data/bookimg/Engineering_Drawing/02.jpg",link: "https://drive.google.com/drive/folders/1UMXlZ_0VyO6t3p-fcWd1oOCEBJ2l25Bf"},
  {title: " Engineering Chemistry ", author: "Jain", cover:"https://5.imimg.com/data5/SELLER/Default/2021/3/GK/DW/GA/59907886/81pqyakvkgl-500x500.jpg ",link:"https://drive.google.com/drive/folders/1UMXlZ_0VyO6t3p-fcWd1oOCEBJ2l25Bf"},
  {title: " BEEE ", author: "R.K.Rajput", cover:"https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/798/9780071329798.jpg",link: "https://drive.google.com/drive/folders/1UMXlZ_0VyO6t3p-fcWd1oOCEBJ2l25Bf"},
  {title: " Advanced Mathematics ", author: "Muhammad Safi", cover:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91ujM3A8gqL._AC_UF1000,1000_QL80_.jpg",link: "https://drive.google.com/drive/folders/1UMXlZ_0VyO6t3p-fcWd1oOCEBJ2l25Bf"},
  
  //cse
  
   { title: "Python", author: "Mark Lutz", cover: "https://www.oreilly.com/api/v2/epubs/9781430206347/files/images/Cover.jpg", link: "https://cfm.ehu.es/ricardo/docs/python/Learning_Python.pdf" },
  { title: "DBMS", author: "Raghu Ram Krishna", cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: "https://drive.google.com/file/d/0B_UNhB7shKrMa2RTUFFaNkdjQWM/view?resourcekey=0-HCtaA5nXhmBHIpXkVMCU4g" },
  { title: "Advanced programming in the unix environment", author: "W.Richard Stevens & Stephen A Rago", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51u0iZwOF6L.jpg", link: "https://drive.google.com/file/d/1--3btlSerNmN7RZujFvIIny_BHQb18V9/view?usp=sharing" },
  { title: "Architecture of Computer Hardware and System Software", author: "Unknown", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51qmj3cT26L._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1bCkTugErg3fXrl2GO0mbxGKOPsDa5mpl/view?usp=sharing" },
  { title: "Beginning-AngularJS", author: "Andrew Grant", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61XABRd-DiL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1BpzZYOOhxQ_7qbNfke5WZjZUS3XmyEly/view?usp=sharing" },
  { title: "Blockchain basic-1", author: "Daniel Drescher", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/718bo4F0KPL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1caaDvaQ8aPMkofPJbi749GbIqN4Y6Na5/view?usp=sharing" },
  { title: "C Programming Language -1", author: "Dennis M.Ritchie & Brian W. Kernighan", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41vUdzcR8cL.jpg", link: "https://drive.google.com/file/d/1o9Eu3UbXEX3pBtY0TDQi68FtdypC97jr/view?usp=sharing" },
  
  //ece
  
  { title: "Embedded Systems", author: "Baerkley", cover: "https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/I/61mKuXw-FjL._AC_UL600_SR600,600_.jpg", link: "https://ptolemy.berkeley.edu/books/leeseshia/releases/LeeSeshia_DigitalV2_2.pdf"},
{ title: "8051 Micro Controller", author: "Subhrata Goshal", cover: "https://images-eu.ssl-images-amazon.com/images/I/519mQZy0lbL._AC_UL600_SR600,600_.jpg", link: "https://drive.google.com/file/d/1x0ml0qc7N4tJCFfOVWmZmLSLiJ3jUYTY/view?usp=sharing"},
{ title: "8086 Micro Processor", author: "Baerkley", cover: "https://imgv2-2-f.scribdassets.com/img/document/653697887/original/5baec17dac/1701525985?v=1", link: "https://drive.google.com/file/d/1wWFQDZBdHnpkTECyqMDjq03sdAFmQQO8/view?usp=sharing"},
{ title: "8086-MICROPROCESSOR",  cover: "https://s1.studylib.net/store/data/025879983_1-193c8325068587d137caa3ce8ff17bc2.png", link: "https://drive.google.com/file/d/1ufDikxw8CTUs2rR0QsaShoT1Ezdc6wnU/view?usp=sharing"},
{ title: "Mobile Wireless Networks", author: "Subir Kumar Sarkar", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51f5ACEzTaL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1wzmv0rmR0dUMQscqfgGoBs_7IZWSvA7I/view?usp=sharing"},
{ title: "Routing Protocols",  cover: "https://m.media-amazon.com/images/I/61h3C2N5yeL.jpg", link: "https://drive.google.com/file/d/1wYiLsWV77ymu-2Hkv5ISiTdl6y2rOctx/view?usp=sharing"},
{ title: "Advanced Electrical and Electronics", author: "K.M.Gupta", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81JygOJiaUL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1xJJaFG-Go9fFQu7f5Iz-kLJo-jClV9jB/view?usp=sharing"},


//mech

{ title: "Engineering Drawing", author: "N.D.Bhatt", cover: "https://images-eu.ssl-images-amazon.com/images/I/91pcwzxkGYL._AC_UL600_SR600,600_.jpg", link: "https://drive.google.com/file/d/1JZhNed8pljGbP4wjKJ0h3-4ma3Anecu1/view?usp=sharing" },
  
    { title: "Adaptive Control Systems", author: "Karl J.Astrom", cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1173807971i/330998._UX160_.jpg", link: "https://drive.google.com/file/d/1ZEncmPPe_1F1Qpc61azS82F2s3SwdHFf/view?usp=sharing" },
	
{ title: "Automotive Engineering Power Train", author: "Dravid A.Crolla", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51tTjuP3nCL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1etIOCqepPcwe3_Pdx74m9dU64X-KjEKW/view?usp=sharing" },
	{ title: "Computational Fluid Dyanamics", author: "M.C.Graw Hill", cover: "https://0.academia-photos.com/attachment_thumbnails/53996524/mini_magick20190118-13665-18mz319.png?1547858428", link: "https://drive.google.com/file/d/10ftniUreQqdsIM2War8jnRJyI_XiTG-r/view?usp=sharing" },
	

	{ title: "Computer Aided Engineering Design", author: "Birendra Sahay", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/614cnpe3lEL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1wPF2UprfdS5SeKosWDAuUsAVfZT4fGvp/view?usp=sharing "},
	 {title:"Engineering Thermodyanamics", author: "R.K.Rajput", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61m6kWVLGoL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/10lHMuw8QEml2hn5JpJlkQzoIttk_6PVO/view?usp=sharing" },
	 
	 
	{ title: "Engineering Metrology", author: "Frank M.White", cover: "https://easyengineering.net/wp-content/uploads/2017/10/FLUID-MECHANICS-BY-FRANK-M.-WHITE-7th-EDITION.jpg", link: "https://drive.google.com/file/d/1C2u0EwOGE22IreE5hJC824jZ9PIz9Nu4/view?usp=sharing" },
	
//eee

{
    title: "High-Voltage Engineering",
    author: "M S Naidu and V Kamaraju",
    cover: "https://books.google.com/books/content?id=OeZSAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71XDohmo9hSfkY2qFpi-_jHROyWmKErcHplQ0aYOEOs4T0c5yMDh0jLiYUCDneD3pUaEQzGahzwkABGt6OVdKZZpSFjc63oG_Vo2F_ze35UaqW9gs_eXkggf-7rk-w2OF0esUiE",
    link: "https://drive.google.com/file/d/1H7fav0p0ZYRwAeoc96p3pKQNTPADd7wK/view?usp=sharing"
  },
  {
    title: "Power System Engineering",
    author: "R K Rajput",
    cover: "https://www.madrasshoppe.com/125008-large_default/a-textbook-of-power-system-engineering-er-rk-rajput.jpg",
    link: "https://drive.google.com/file/d/1i8MlnQOrze91UmrsTErcJqwodrnAg6FM/view?usp=sharing"
  },
  {
    title: "Linear Integrated Circuit",
    author: "D. Roy Choudhar",
     cover: "https://pragationline.com/wp-content/uploads/2021/03/LINEAR-INTEGRATED-CIRCUITS-D.-ROY-CHOUDHURY-SHAIL-BALA-JAIN-New-Age-001.jpg",
   link: "https://drive.google.com/file/d/1AzC6Bwl55vFCaBW27dCYiFgXZaseZC9M/view?usp=sharing"
  },
  {
    title: "Utilisation of Electrical Energy",
    author: "R K Rajput",
     cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51RDZK9scnL._AC_SY200_QL15_.jpg",
     link: "https://drive.google.com/file/d/1CcU2Dt1J4iBUm1UxI6rSa73u5zaflp8J/view?usp=sharing"
  },
  {
    title: "Elements of Electromagnetics",
    author: "Sadiku Matthew",
    cover: "https://images-na.ssl-images-amazon.com/images/P/019932140X.01.LZZZZZZZ.jpg",
    link: "https://drive.google.com/file/d/1NlhN8oZAR6nq8l_rCJ--UOVnyOvj28Pw/view?usp=sharing"
  },
  {
    title: "Advanced-Control-for-Vehicle-Active-Suspension-Systems",
    author: "Weichao Sun, Huijun Gao & Peng Shi",
    cover: "https://media.springernature.com/full/springer-static/cover-hires/book/978-3-030-15785-2",
    link: "https://drive.google.com/file/d/1vZVYSiJRKIRhWR9PkDaL0H7NKkSoVu2P/view?usp=sharing"
  },
  {
    title: "Advanced-Control-Systems-Theory-and-Applications",
    author: "Unknown",
    cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81TFVcdVRFL._AC_UF1000,1000_QL80_.jpg",
    link: "https://drive.google.com/file/d/1O7MT6UvlAFYLsxuTBDjM1mABVZ_GrIv-/view?usp=sharing"
  },
  
  
  
  //civil
  { title: " Engineering Mechanics", author: "Irving H. Shames", cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKqx_rY63y0vJKJJ6eT3Z2Na61H1c9gnGqPqgGXdhFVqPiLHC-HXihNXRlsS99cpmyslo&usqp=CAU", link: "https://drive.google.com/file/d/1J91nzPs_NBT9qR4kcQcd7DfkwdMjcHby/view?usp=sharing" },
  { title: "Geotechnical Engineering", author: "C.Venkata Ramayya", cover:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71bhKFUPJpL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1HAh8WaUrUxjplE2UgSUuBtZT-0ZqXBxL/view?usp=sharing" },
  {title: " Engineering Geology", author: "F. G. Bell", cover:"https://m.media-amazon.com/images/I/71UsY1D697L._SL1500_.jpg", link: "https://drive.google.com/file/d/13DTL0sbhxSx1s3Hfjgr7bQcJOq4DmvX0/view?usp=sharing" },
{title: " Engineering Geology", author: "Subinoy Gangopadhay", cover:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51A6uXsbCqL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_PIStarRatingFOUR%2CBottomLeft%2C360%2C-6_SR600%2C315_ZA29%2C445%2C290%2C400%2C400%2CAmazonEmberBold%2C12%2C4%2C0%2C0%2C5_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg", link: "https://drive.google.com/file/d/1wqGAqd1WFCYBOC7YgibriptkxHKO1huI/view?usp=sharing" },
{title: "Basic Civil Engineering", author:"S.S.Bhavikatti", cover:"https://4.bp.blogspot.com/-R5416QrVVOI/WEvshSMZf9I/AAAAAAAAG18/KvgZxnc-UGEtZdbjIwlOtc3-mm0vh4kOQCLcB/s640/%2528engineersdaily.com%2529basic_civil_engg.png", link: "https://drive.google.com/file/d/1KUo12JF4XJskwDNeB_RgoChP-uddpO-T/view?usp=sharing" },
{title: "Strength of materials", author: "R.K.Bansal", cover:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/719n9rqGE9L._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1BnCrGRQ0BCKrVQ4qV_j38eolaW4S3CEo/view?usp=sharing" },
	{title: "Highway Engineering", author: "S.K.Khanna", cover: "https://rukminim2.flixcart.com/image/850/1000/xif0q/regionalbooks/l/v/d/highway-engineering-original-imagzxtfuz6wagp7.jpeg?q=90", link: "https://drive.google.com/file/d/1zl6cPY2w5lQEUDoe3SR3ff-1a5bRBZpR/view?usp=sharing" },
  // Add more book objects as needed
  

  
  
];


const booksPerPage = 100;
let currentPage = 1;

function displayResults(results) {
  const catalogSection = document.getElementById('catalog');
  catalogSection.innerHTML = '';

  if (results.length === 0) {
    const noResultsMessage = document.createElement('p');
    noResultsMessage.textContent = 'No matching books found.';
    catalogSection.appendChild(noResultsMessage);
  } else {
    results.forEach(book => {
      const bookCard = createBookCard(book);
      catalogSection.appendChild(bookCard);
    });
  }
}

function createBookCard(book) {
  const card = document.createElement('div');
  card.classList.add('book-card');

  const coverImage = document.createElement('img');
  coverImage.src = book.cover;
  coverImage.alt = `${book.title} cover`;

  const title = document.createElement('h3');
  title.textContent = book.title;

  const author = document.createElement('p');
  author.textContent = `Author: ${book.author}`;

  const link = document.createElement('a');
  link.href = book.link;
  link.textContent = 'Read Book';

  card.appendChild(coverImage);
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(link);

  return card;
}

function handleSearch(event) {
  event.preventDefault();

  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput.value.trim().toLowerCase();

  if (searchTerm === '') {
    // If search term is empty, display a message
    const catalogSection = document.getElementById('catalog');
    catalogSection.innerHTML = '';

    const noSearchTermMessage = document.createElement('p');
    noSearchTermMessage.textContent = 'Please enter a search term.';
    catalogSection.appendChild(noSearchTermMessage);

    return;
  }

  const results = books.filter(book => {
    return book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm);
  });

  displayResults(results);
}

// Initial display of books
displayResults(books.slice(0, booksPerPage));

// Event listener for the search form
const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', handleSearch);

// Pagination controls
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');

nextButton.addEventListener('click', () => {
  const totalPages = Math.ceil(books.length / booksPerPage);

  if (currentPage < totalPages) {
    currentPage++;
  }

  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const nextPageBooks = books.slice(startIndex, endIndex);
  displayResults(nextPageBooks);
});

prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
  }

  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const prevPageBooks = books.slice(startIndex, endIndex);
  displayResults(prevPageBooks);
});
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
