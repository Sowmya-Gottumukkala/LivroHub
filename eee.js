const books = [
  {
    title: "BEEE",
    author: "V.Hima Bindu",
    cover: "https://cdn.img.gen.in/assets/business/2596/portfolio/29145/2596_637559514559494590.jpg?rendered=true&width=500",
    link: "https://www.griet.ac.in/nodes/BEEE.pdf"
  },
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
     cover: "https://5.imimg.com/data5/SELLER/Default/2021/5/AS/VN/UU/59907886/whatsapp-image-2021-04-27-at-5-15-22-pm-500x500.jpeg",
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
  {
    title: "Advanced-Optimization-for-Motion-Control-Systems",
    author: "Unknown",
    cover: "https://m.media-amazon.com/images/I/41Zs3KEenkL.jpg",
    link: "https://drive.google.com/file/d/1rLnYTqbFrA7GonAAsEn_s901lM8BDhGr/view?usp=sharing"
  },
  {
    title: "Big-Data-Analytics-Methods",
    author: "Peter Ghavami",
    cover: "https://books.google.com/books/content?id=RL3_wgEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73Cg_b4MHac-8Fp9eh4CSvU06m-XagmzUWpAjMbhUked4toXBPkO94-pvRga7EYqNtxDaYEUoWZ76J0J-zIs2v_y8oxmJ3RTPUUhYYfSLgGMx7ctcRtso6xLwOP-ihNSLtR-Q1M",
    link: "https://drive.google.com/file/d/1cjX8jc0N6WPPwN0_Aa3ZiuO5TsU6uTkk/view?usp=sharing"
  },
  {
    title: "Computer-Organization-and-Architecture",
    author: "Peter Ghavami",
    cover: "https://www.coursehero.com/thumb/2c/d9/2cd9a69fec0a0a349ba95cde5ed1342653380126_180.jpg ",
    link: "https://drive.google.com/file/d/1TT65mBu3i8auRcCIubmITTjtZysJnMIn/view?usp=share_link"
  },
  {
    title: "Digital-Electronics",
    author: "Betty Lincoln",
    cover: "https://m.media-amazon.com/images/I/51xtc6AcK0L._AC_UF1000,1000_QL80_.jpg",
    link: "https://drive.google.com/file/d/1x280svgDQ_I5QDJgrvJZ_ZAxKnDmtEUI/view?usp=sharing"
  },
  {
    title: "Domestic Microgeneration renewable and Distributed Energy",
    author: "Unknown",
    cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/9124oWhUFdL._AC_UF1000,1000_QL80_.jpg",
    link: "https://drive.google.com/file/d/1GE8eAXEXaWry0S3Sbcyv3ERsVkd_nxGw/view?usp=sharing"
  },
  {
    title: "Electric-drives-and-electromechanical-systems-applications-and-control",
    author: "Unknown",
    cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71If0O8zggL._AC_UF1000,1000_QL80_.jpg",
    link: "https://drive.google.com/file/d/12c1XUj87TYm67oOLvy6uqQpmV2MqxyXR/view?usp=share_link"
  }
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
