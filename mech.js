const books = [
  { title: "Engineering Drawing", author: "N.D.Bhatt", cover: "https://images-eu.ssl-images-amazon.com/images/I/91pcwzxkGYL._AC_UL600_SR600,600_.jpg", link: "https://drive.google.com/file/d/1JZhNed8pljGbP4wjKJ0h3-4ma3Anecu1/view?usp=sharing" },
 
   { title: "Adaptive Control Systems", author: "Karl J.Astrom", cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1173807971i/330998._UX160_.jpg", link: "https://drive.google.com/file/d/1ZEncmPPe_1F1Qpc61azS82F2s3SwdHFf/view?usp=sharing" },
 
{ title: "Automotive Engineering Power Train", author: "Dravid A.Crolla", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51tTjuP3nCL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1etIOCqepPcwe3_Pdx74m9dU64X-KjEKW/view?usp=sharing" },
 { title: "Computational Fluid Dyanamics", author: "M.C.Graw Hill", cover: "https://0.academia-photos.com/attachment_thumbnails/53996524/mini_magick20190118-13665-18mz319.png?1547858428", link: "https://drive.google.com/file/d/10ftniUreQqdsIM2War8jnRJyI_XiTG-r/view?usp=sharing" },
 

 { title: "Computer Aided Engineering Design", author: "Birendra Sahay", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/614cnpe3lEL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1wPF2UprfdS5SeKosWDAuUsAVfZT4fGvp/view?usp=sharing "},
  {title:"Engineering Thermodyanamics", author: "R.K.Rajput", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61m6kWVLGoL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/10lHMuw8QEml2hn5JpJlkQzoIttk_6PVO/view?usp=sharing" },
  
  
 { title: "Engineering Metrology", author: "Frank M.White", cover: "https://easyengineering.net/wp-content/uploads/2017/10/FLUID-MECHANICS-BY-FRANK-M.-WHITE-7th-EDITION.jpg", link: "https://drive.google.com/file/d/1C2u0EwOGE22IreE5hJC824jZ9PIz9Nu4/view?usp=sharing" },
 { title: "Fluid Mechanics", author: "Frank M.White", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81P0jSLleNL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/19hY73P_pkAGR_5-U12SpXx-0w48hrcxB/view?usp=sharing" },
 
 { title: "Modern Manufacturing", author: ",Mikell P Groover", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81lJbRB4O0L._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1_CQjPzqOh6smrlE2CMEz8RxGcBUYHm36/view?usp=sharing" },
  { title: "Gas Dyanamics", author: "Ravindran", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61WNPpi1DNL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1F9qPc0Q5bmYQOpCI7InZiAKYQoR-ABV4/view?usp=sharing" },
  
 { title: "Heat Transfer", author: "John H. Lienhard ", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71T9vrCMtsL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1msT9J97y7QC1cuqEAygelvJIC3Jho7c0/view?usp=sharing" },
 { title: "Hypermesh Analysis", author: "Altair", cover: "https://www.yumpu.com/en/image/facebook/28199974.jpg", link: "https://drive.google.com/file/d/1jZEPWiUmkwChiuM83T5MwPnowHqgBnXR/view?usp=sharing" },
 
   { title: "Kinematics", author: "Sunil Kumar Singh", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/613FAgUYEmL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/18ba-cNS0nUOaeNtbrkXhGFM3-kiYzPf6/view?usp=sharing" },
 { title: "Machine Drawing", author: "K.L.Narayana", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61veTL16I6L._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1J3JhdDYwoirQT4qVMg3KGfmzXE2vS3Vt/view?usp=sharing" },
 
   { title: "Mechanics of Solids", author: "S.S.Bhavikatti", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/314WxIxqlLL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1w0eJDCyezQpWUFkS_alwIXueAvagp236/view?usp=sharing" },
   { title: "Mechatronics", author: "Robert H.Bishop", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61AtiRc6wXL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1k6QV_XZi1sl6Lt5G2HzrpfxEadm_IFJS/view?usp=sharing" },
 
   { title: "Metal Cutting", author: "Marcel Decker", cover: "https://media.springernature.com/full/springer-static/cover-hires/book/978-1-84800-213-5", link: "https://drive.google.com/file/d/1q8le2zKpReDGB6So-trzJjLu4sktlXs2/view?usp=sharing" },
   { title: "Modern Robotics", author: "Frank C. Park", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41+0twPskWL.jpg", link: "https://drive.google.com/file/d/1ucsRrlBW77ZQOzvs9HUGbfRilbu7gc4E/view?usp=sharing" },
 
   { title: "Robotics", author: "John Lovine", cover: "https://img.thriftbooks.com/api/images/m/54d88f947ece1fd4fd13f7d8df16e4d59f03fe66.jpg", link: "https://drive.google.com/file/d/1rllO2jMmPBAQBvOiFrWb1mBBebtyFVFz/view?usp=sharing" },
   { title: "Production Technology", author: "S.Chand", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61ZE4CUKHdL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/19LnABWC9iPhas-36GCaEvQzAxIHSDG_4/view?usp=sharing" },
 
   { title: "Theory of Machines", author: "John J Uicker", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81aLV9QHuML._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1v1ZExDobRtTRaky8W--0QUNqVi0LoLp4/view?usp=sharing" },
   { title: "Thermal Engineering", author: "R.K.Rajput", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/912oa1I7PBL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1gJobO2vgCK6Hy4Ql6F7F--Uppm_DS_7x/view?usp=sharing" },
   { title: "Thermodyanamics", author: "B.B.Ghosh", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51VvYLn874L._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1Gf5n1vxj2QS7DwIGKsdH_ItToeHAOQi5/view?usp=sharing" },
   { title: "Turbo Machinery", author: "S.L.Dixon", cover: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51jriO054PL._AC_UF1000,1000_QL80_.jpg", link: "https://drive.google.com/file/d/1ylEMUoIbBSbg3tDuQMrsTEvwTb6suzg3/view?usp=sharing" },
   { title: "Power Transmission System", author: "Turon Gonen", cover: "https://m.media-amazon.com/images/I/51phw3oCIYL.jpg", link: "https://drive.google.com/file/d/1zy9GMZ-o6Yzf9hsn48vzyxz2J1YekEge/view?usp=sharing" },
   
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
