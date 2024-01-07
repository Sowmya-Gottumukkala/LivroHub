const books = [
  { title: "Python", author: "Mark Lutz", cover: "https://www.oreilly.com/api/v2/epubs/9781430206347/files/images/Cover.jpg", link: "https://cfm.ehu.es/ricardo/docs/python/Learning_Python.pdf" },
  { title: "DBMS", author: "Raghu Ram Krishna", cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: "https://drive.google.com/file/d/0B_UNhB7shKrMa2RTUFFaNkdjQWM/view?resourcekey=0-HCtaA5nXhmBHIpXkVMCU4g" },
  { title: "Advanced programming in the unix environment", author: "W.Richard Stevens & Stephen A Rago", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51u0iZwOF6L.jpg", link: "https://drive.google.com/file/d/1--3btlSerNmN7RZujFvIIny_BHQb18V9/view?usp=sharing" },
  { title: "Architecture of Computer Hardware and System Software", author: "Unknown", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51qmj3cT26L._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1bCkTugErg3fXrl2GO0mbxGKOPsDa5mpl/view?usp=sharing" },
  { title: "Beginning-AngularJS", author: "Andrew Grant", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61XABRd-DiL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1BpzZYOOhxQ_7qbNfke5WZjZUS3XmyEly/view?usp=sharing" },
  { title: "Blockchain basic-1", author: "Daniel Drescher", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/718bo4F0KPL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1caaDvaQ8aPMkofPJbi749GbIqN4Y6Na5/view?usp=sharing" },
  { title: "C Programming Language -1", author: "Dennis M.Ritchie & Brian W. Kernighan", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41vUdzcR8cL.jpg", link: "https://drive.google.com/file/d/1o9Eu3UbXEX3pBtY0TDQi68FtdypC97jr/view?usp=sharing" },
  { title: "Clean Code-A Handbook of Agile Software Craftsmanship -1", author: "Unknown", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41SH-SvWPxL.jpg", link: "https://drive.google.com/file/d/1oTG9LD_TsP0YNcrforUdyPKK7H7q0SNG/view?usp=sharing" },
  { title: "compilerDesignInC-1", author: "Unknown", cover: "https://www.orientblackswan.com/bigcovers/9789386235640.jpg", link: "https://drive.google.com/file/d/1Ba02TQ8NbwUQ2GabRqHGbrGKMBilsKN_/view?usp=sharing" },
  { title: "Compilers- Principles, Techniques, and Tools -1", author: "Unknown", cover: "https://www.pearson.com/store//pmccommercewebservices/v2/medias/size-W370-A1017-03-57-91-A101703579198-A101703579198-Lrg.jpg?context=bWFzdGVyfGltYWdlc3wyNDg2ODd8aW1hZ2UvanBlZ3xzeXMtbWFzdGVyL2ltYWdlcy9oMzMvaDA2LzEyMjg4MTc4OTQ2MDc4L3NpemVfVzM3MF8vQTEwMTcvMDMvNTcvOTEvQTEwMTcwMzU3OTE5OC9BMTAxNzAzNTc5MTk4X0xyZy5qcGd8MmM4ODkzNzRkNjU1OWJlY2Q2ZmU1YjRlNTA1MmZiZWY1M2Y3YjU2MDk4MzdiNDM5MmY3ZmNiYjYxN2IwOTQwZQ", link: "https://drive.google.com/file/d/1fvk_OGMCA_orYdIsGRsAQig1-EL1ogLD/view?usp=sharing" },
  { title: "Computer networks", author: "Unknown", cover: "https://marketplace.canva.com/EAFG2v9Lu0M/1/0/1024w/canva-black-and-blue-modern-computer-network-technology-ebook-cover-OJuxUtyd070.jpg", link: "https://drive.google.com/file/d/1pmcWNlSVFiILSOS6C976F6Bc6B0UDDTf/view?usp=sharing" },
  { title: "Data Structures and Algorithms -1", author: "Unknown", cover: "https://www.thinknexttraining.com/images/data-structues-and-algorithms-mob.jpg", link: "https://drive.google.com/file/d/13KpVicPsP3nb9PM2-bPRbCM0zPiewZeb/view?usp=sharing" },
  { title: "Essential-Math-for-Data-Science-by-Thomas-Nield_bibis.ir", author: "Thomas-Nield", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81RiDmmmEBL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1yEh10j6rHb0bgdH6dZbMwR0AA6wQtf8S/view?usp=sharing" },
  { title: "Flat-1", author: "Peter Linz", cover: "https://media.springernature.com/full/springer-static/cover-hires/book/978-3-031-11965-1", link: "https://drive.google.com/file/d/1Fa8NfYPEoqYKeeKFLVTli0_0e4gBhyv4/view?usp=sharing" },
  { title: "Internet of things", author: "Leon Strous & Vinson G. Cerf", cover: "https://www.technology-innovators.com/wp-content/uploads/2020/09/IoT-Giving-a-new-dimension-to-the-world-of-internet-389x389.jpg", link: "https://drive.google.com/file/d/1uSUNoE8rG-HNsecn5rfdqlHKwXloR9bg/view?usp=sharing" },
  { title: "Introduction to Algorithms-1", author: "Unknown", cover: "https://mit-press-us.imgix.net/covers/9780262530910.jpg?auto=format&w=298", link: "https://drive.google.com/file/d/195UjQ9d4ojnobFpsD2LURT_b9TDcIaZ7/view?usp=sharing" },
  { title: "Introduction to C and software design", author: "Tim Bailey", cover: "https://m.media-amazon.com/images/I/41vzT7i2NTL.jpg", link: "https://drive.google.com/file/d/1plVmP4JPWyAkZXaNPMYACoyOh8gClCRH/view?usp=sharing" },
  { title: "Introduction to soft computing", author: "Unknown", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51nN9BiWsLL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1plVmP4JPWyAkZXaNPMYACoyOh8gClCRH/view?usp=sharing" },
  { title: "Introduction to Computer Science using python-1", author: "Unknown", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61oTStKLLJL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1fggTjw0ohoqvCBgYSqMBLgIbTSgqNG3c/view?usp=sharing" },
  { title: "Javascript for impatient programmers-1", author: "Dr.Axel Rauschmayer", cover: "https://www.dbooks.org/img/books/1091210098.jpg", link: "https://drive.google.com/file/d/1xn2XQSc24grvrSGzEttyRJdIe9JCxwJO/view?usp=sharing" },
  { title: "Machine Learning", author: "Unknown", cover: "https://www.oreilly.com/api/v2/epubs/9781118889497/files/images/cover_fmt.jpg", link: "https://drive.google.com/file/d/16iLYFTbtydLlBAM2S7n4DxEhDbnKtjtW/view?usp=sharing" },
  { title: "Machine Learning For Absolute Beginners-1", author: "Oliver Theobald", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41zhNG7q--L.jpg", link: "https://drive.google.com/file/d/1Y0_QDXqCcW5Z_ArI4zss8Bmko_f7Bjq4/view?usp=sharing" },
  { title: "Natural Language Processing with Python", author: "Steven Bird & Ewan Klein & Edward Loper", cover: "https://www.oreilly.com/api/v2/epubs/9781098122652/files/images/9781718500532.jpg", link: "https://drive.google.com/file/d/1Y0_QDXqCcW5Z_ArI4zss8Bmko_f7Bjq4/view?usp=sharing" },
  { title: "Nlp workbook-1", author: "Joseph O Connor", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51tlsvCd16L.jpg", link: "https://drive.google.com/file/d/1w9iAddvrs3CeTEAXs6f0aWjxueXXl0TX/view?usp=sharing" },
  { title: "Operating System Concepts -1", author: "Unknown", cover: "https://pbgalvin.files.wordpress.com/2007/03/scan0001.jpg", link: "https://drive.google.com/file/d/18WXbXOEXAgvZlQPAbcX-PNbEoTchlqjv/view?usp=sharing" },
  { title: "Penetration Testing - A hands-on introduction to Hacking", author: "Georgia Weidman", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81SmVR3lp7L._AC_UF350,350_QL50_.jpg", link: "https://drive.google.com/file/d/1xPFzoSapw8MAn5V3bulIe53-CjWXATJ8/view?usp=sharing" },
  { title: "Professional NoSql", author: "Shashank Tiwari", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/5158D4V9thL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1Ii7XSq4Bfs256WyFJlAk6l2fXfDFcBGt/view?usp=sharing" },
  { title: "Programming Massively Parallel Processors -1", author: "David B.Krik & Wen-mei W.Hwu", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51bR3x-XAJL.jpg", link: "https://drive.google.com/file/d/11o0f3v3buoFP7fhjAbsz4Z965sT-TKol/view?usp=sharing" },
  { title: "Software engineering for internet applications-1", author: "Eve Andersson & Philip Greenspun & Andrew Grumet", cover: "https://mit-press-us.imgix.net/covers/9780262511919.jpg?auto=format&w=298", link: "https://drive.google.com/file/d/18kXN3cFPRyzrSM9Uyr35hLw4h3H8vVjr/view?usp=sharing" },
  { title: "Programming Massively Parallel Processors", author: "Unknown", cover: "https://cdn.kobo.com/book-images/7b766e70-aade-45e8-8fa1-f21a6ff6cf35/353/569/90/False/programming-massively-parallel-processors-4.jpg", link: "https://drive.google.com/file/d/11o0f3v3buoFP7fhjAbsz4Z965sT-TKol/view?usp=sharing" },
  { title: "Structure and Interpretation of Computer program-1-1", author: "Unknown", cover: "https://upload.wikimedia.org/wikipedia/commons/9/9d/SICP_cover.jpg", link: "https://drive.google.com/file/d/1bGggnE3aF04tWrPjpSJVUBm8p3BM8fMY/view?usp=sharing" },
  { title: "The Hidden Language of Computer Hardware and Software -1-1", author: "Charles Petzold", cover: "https://www.microsoftpressstore.com/ShowCover.aspx?isbn=9780137909339", link: "https://drive.google.com/file/d/1bK0p9gcUqzIRMq13M44jCLpUWgV7tVks/view?usp=sharing" },
  { title: "Transaction Processing -1-1", author: "Unknown", cover: "https://sp-uploads.s3.amazonaws.com/uploads/services/2345703/20211021161034_617190fab0edd_transaction_processing_systempage0.png", link: "https://drive.google.com/file/d/1bJJDcC8VjV9A6j7byE39fSrB2qtxDVwU/view?usp=sharing" },
  { title: "Write Modern Web Apps with the MEAN Stack-1", author: "Jeff Dickey", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71dpmfiP5zL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1bP2Fk_mHnVI0RwZm5NOdrLhgx_MCOaww/view?usp=sharing" },
  { title: "Writing Secure Code-1", author: "Michael Howard and David LeBlanc", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1396836770i/44916.jpg", link: "https://drive.google.com/file/d/1bTdbXniav1spdY1_uzyIpxGDZ7zaSDOo/view?usp=sharing" },
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
  
  
