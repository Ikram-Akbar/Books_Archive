const searchBook = () => {
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;

    // clear search field data
    searchField.value = "";

    if (searchText == 0) {
        // write something to display
        return ("result is 0");
    } else {
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => displaySearchResult(data.docs));
    }
};

const displaySearchResult = (docs) => {
    // console.log(docs);
    const searchResult = document.getElementById("search-result");

    // clear search Result
    searchResult.textContent = "";

    docs.forEach((doc) => {
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
          <div class="card h-100 shadow">
             <img src="https://covers.openlibrary.org/b/id/${doc?.cover_i}-M.jpg" class="card-img-top img-fluid" alt="...">
             <div class="card-body">
                <h2 class="card-title">Name: ${doc?.title}</h2>
                <h4>Author: ${doc?.author_name}</h4>
               
                <h3>Publish Place: ${doc?.publish_place} </h3>
                <h3>first_publish_year: ${doc?.first_publish_year}</h3>
                <h3>Publish date: ${doc?.publish_date}</h3>
                <h3>Publisher: ${doc?.publisher}</h3>
            
             </div>
          </div>
        `;

        // append the div into the search result
        searchResult.appendChild(div);
    });
};
