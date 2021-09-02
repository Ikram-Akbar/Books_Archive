const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    // clear search field data 
    searchField.value = "";

    if (searchText == 0) {
        // please write something to display

    } else {
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.docs));
    }
};

const displaySearchResult = (docs) => {

    // console.log(docs);
    const searchResult = document.getElementById('search-result');

    // clear search Result 
    searchResult.textContent = '';

    docs.forEach(doc => {
        console.log(doc);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
          <div class="card h-100 shadow  m-2">
             <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="...">
             <div class="card-body">
                <h2 class="card-title">Title: ${doc.title}</h2>
                <h4>Author: ${doc.author_name}</h4>
                <p class="card-text">
                Publish Place: ${doc.publish_place} 
                first_publish_year: ${ doc.first_publish_year}
                Publish date: ${doc.publish_date}
                Publisher: ${doc.publisher}
                </p>
             </div>
          </div>
        `;

        // append the div into the search result
        searchResult.appendChild(div);

    })
}