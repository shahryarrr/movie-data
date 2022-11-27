let movies = {
    "The Shawshank Redemption": {
        genre: "Drama",
        cast: ["Tim Robbins", " Morgan Freeman", " Bob Gunton"],
        runtime: 142,
        rating: 9.3,
        year: 1994,
    },

    "The Dark Knight": {
        plot: "Action",
        cast: ["Christian Bale", " Heath Ledger", " Aaron Eckhart"],
        runtime: 152,
        rating: 8.8,
        year: 2008,
    },

    "Inception": {
        genre: "Adventure",
        cast: ["Leonardo DiCapro", " Joseph Gordon-Levitt", " Elliot Page"],
        runtime: 148,
        rating: 8.8,
        year: 2010,
    },

    "Interstellar": {
        genre: "Sci-Fi",
        cast: ["Matthew McConaughey", " Anne Hathaway", " Jessica Chastain"],
        runtime: 169,
        rating: 8.6,
        year: 2014,
    },

    "Ghostbusters": {
        genre: "Comedy",
        cast: ["Bill Murray", " Dan Aykroyd", " Sigourney Weaver"],
        runtime: 180,
        rating: 7.8,
        year: 1984,
    },
}

function generateTableHead(table) {
    let thead = table.createTHead();
    let row = thead.insertRow();

    let th = document.createElement("th");
    let text = document.createTextNode("Movie Name");
    th.appendChild(text);
    row.appendChild(th);

    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let i = 0; i < data.length; i++) {
        let row = table.insertRow();

        let cell = row.insertCell();
        let text = document.createTextNode(movieNames[i]);
        cell.appendChild(text);

        for (key in data[i]) {
            let cell = row.insertCell();
            let text = document.createTextNode(data[i][key]);
            cell.appendChild(text);
        }
    }
}


let table = document.querySelector("#movies"), data, dataValues, movieNames;

function initTable() {
    dataValues = Object.values(movies);
    data = Object.keys(dataValues[0]);
    movieNames = Object.keys(movies);
    generateTable(table, dataValues);
    generateTableHead(table);
}


window.addEventListener('load', function () {
    initTable();
})


const form = document.getElementById("add-movie");
form.addEventListener('submit', addData);

function addData(event) {
    event.preventDefault();
    table.innerHTML = "";

    const movieName = document.getElementById("movie-name").value;
    const plot = document.getElementById("plot").value;
    const cast = document.getElementById("cast").value;
    const castArray = cast.split(",")
    const runtime = document.getElementById("runtime").value;
    const rating = document.getElementById("rating").value;
    const year = document.getElementById("year").value;

    let newElement = {
        plot: plot,
        cast: castArray,
        runtime: parseInt(runtime),
        rating: parseFloat(rating),
        year: parseInt(year)
    };

    movies[`${movieName}`] = newElement;

    initTable();
}


const changeStyle = document.querySelector(".change-style");

changeStyle.addEventListener('click', function () {
    table.classList.toggle("change");
    document.body.classList.toggle("night");
});
