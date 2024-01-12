const books = [
  //eee
  { title: "BEEE", author: "V.Hima Bindu", cover: "https://i0.wp.com/easyengineering.net/wp-content/uploads/2020/05/BE8251-Basic-Electrical-and-Electronics-Engineering.jpg?fit=411%2C550&ssl=1", link: "https://www.griet.ac.in/nodes/BEEE.pdf" },
  {
    title: "Power System Engineering",
    author: "R K Rajput",
    cover: "https://www.madrasshoppe.com/125008-large_default/a-textbook-of-power-system-engineering-er-rk-rajput.jpg",
    link: "https://drive.google.com/file/d/1i8MlnQOrze91UmrsTErcJqwodrnAg6FM/view?usp=sharing"
  },
  
  //mech
  { title: "Engineering Drawing", author: "N.D.Bhatt", cover: "https://images-eu.ssl-images-amazon.com/images/I/91pcwzxkGYL._AC_UL600_SR600,600_.jpg", link: "https://drive.google.com/file/d/1JZhNed8pljGbP4wjKJ0h3-4ma3Anecu1/view?usp=sharing" },
 
  { title: "Adaptive Control Systems", author: "Karl J.Astrom", cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1173807971i/330998._UX160_.jpg", link: "https://drive.google.com/file/d/1ZEncmPPe_1F1Qpc61azS82F2s3SwdHFf/view?usp=sharing" },

{ title: "Automotive Engineering Power Train", author: "Dravid A.Crolla", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51tTjuP3nCL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1etIOCqepPcwe3_Pdx74m9dU64X-KjEKW/view?usp=sharing" },
{ title: "Computational Fluid Dyanamics", author: "M.C.Graw Hill", cover: "https://0.academia-photos.com/attachment_thumbnails/53996524/mini_magick20190118-13665-18mz319.png?1547858428", link: "https://drive.google.com/file/d/10ftniUreQqdsIM2War8jnRJyI_XiTG-r/view?usp=sharing" },


{ title: "Computer Aided Engineering Design", author: "Birendra Sahay", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/614cnpe3lEL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1wPF2UprfdS5SeKosWDAuUsAVfZT4fGvp/view?usp=sharing "},
 {title:"Engineering Thermodyanamics", author: "R.K.Rajput", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61m6kWVLGoL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/10lHMuw8QEml2hn5JpJlkQzoIttk_6PVO/view?usp=sharing" },
 
 
{ title: "Engineering Metrology", author: "Frank M.White", cover: "https://easyengineering.net/wp-content/uploads/2017/10/FLUID-MECHANICS-BY-FRANK-M.-WHITE-7th-EDITION.jpg", link: "https://drive.google.com/file/d/1C2u0EwOGE22IreE5hJC824jZ9PIz9Nu4/view?usp=sharing" },
{ title: "Fluid Mechanics", author: "Frank M.White", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81P0jSLleNL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/19hY73P_pkAGR_5-U12SpXx-0w48hrcxB/view?usp=sharing" },

//ece
{ title: "Embedded Systems", author: "Baerkley", cover: "https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/I/61mKuXw-FjL._AC_UL600_SR600,600_.jpg", link: "https://ptolemy.berkeley.edu/books/leeseshia/releases/LeeSeshia_DigitalV2_2.pdf"},
  { title: "8051 Micro Controller", author: "Subhrata Goshal", cover: "https://images-eu.ssl-images-amazon.com/images/I/519mQZy0lbL._AC_UL600_SR600,600_.jpg", link: "https://drive.google.com/file/d/1x0ml0qc7N4tJCFfOVWmZmLSLiJ3jUYTY/view?usp=sharing"},
  { title: "8086 Micro Processor", author: "Baerkley", cover: "https://imgv2-2-f.scribdassets.com/img/document/653697887/original/5baec17dac/1701525985?v=1", link: "https://drive.google.com/file/d/1wWFQDZBdHnpkTECyqMDjq03sdAFmQQO8/view?usp=sharing"},
  { title: "8086-MICROPROCESSOR",  cover: "https://s1.studylib.net/store/data/025879983_1-193c8325068587d137caa3ce8ff17bc2.png", link: "https://drive.google.com/file/d/1ufDikxw8CTUs2rR0QsaShoT1Ezdc6wnU/view?usp=sharing"},
  { title: "Mobile Wireless Networks", author: "Subir Kumar Sarkar", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51f5ACEzTaL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1wzmv0rmR0dUMQscqfgGoBs_7IZWSvA7I/view?usp=sharing"},

//cse 
{ title: "Python", author: "Mark Lutz", cover: "https://www.oreilly.com/api/v2/epubs/9781430206347/files/images/Cover.jpg", link: "https://cfm.ehu.es/ricardo/docs/python/Learning_Python.pdf" },
  { title: "DBMS", author: "Raghu Ram Krishna", cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: "https://drive.google.com/file/d/0B_UNhB7shKrMa2RTUFFaNkdjQWM/view?resourcekey=0-HCtaA5nXhmBHIpXkVMCU4g" },
  { title: "Advanced programming in the unix environment", author: "W.Richard Stevens & Stephen A Rago", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51u0iZwOF6L.jpg", link: "https://drive.google.com/file/d/1--3btlSerNmN7RZujFvIIny_BHQb18V9/view?usp=sharing" },
  { title: "Architecture of Computer Hardware and System Software", author: "Unknown", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51qmj3cT26L._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1bCkTugErg3fXrl2GO0mbxGKOPsDa5mpl/view?usp=sharing" },
  { title: "Beginning-AngularJS", author: "Andrew Grant", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61XABRd-DiL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1BpzZYOOhxQ_7qbNfke5WZjZUS3XmyEly/view?usp=sharing" },
  { title: "Blockchain basic-1", author: "Daniel Drescher", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/718bo4F0KPL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1caaDvaQ8aPMkofPJbi749GbIqN4Y6Na5/view?usp=sharing" },
  { title: "C Programming Language -1", author: "Dennis M.Ritchie & Brian W. Kernighan", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41vUdzcR8cL.jpg", link: "https://drive.google.com/file/d/1o9Eu3UbXEX3pBtY0TDQi68FtdypC97jr/view?usp=sharing" },

//other
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
function handleSearch(event) {
  event.preventDefault(); // Prevent form submission to avoid page reload

  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput.value.trim().toLowerCase(); // Trim whitespace and convert to lowercase

  console.log('Search Term:', searchTerm);

  const results = books.filter(book => {
    const lowerTitle = (book.title || '').toLowerCase(); // Check if title is defined
    const lowerAuthor = (book.author || '').toLowerCase(); // Check if author is defined

    console.log('Lower Title:', lowerTitle);
    console.log('Lower Author:', lowerAuthor);

    return lowerTitle.includes(searchTerm) || lowerAuthor.includes(searchTerm);
  });

  displayResults(results);
}


// Attach the handleSearch function to the form's submit event
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
