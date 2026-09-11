function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm;

    if(hours >= 12) {
        ampm = "PM"
    } else {
        ampm = "AM"
    }

    hours = hours % 12;

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    if(hours == 0) {
        hours = 12
    }

    const string = `${hours}:${minutes}:${seconds} ${ampm}`

    document.getElementById('clock').textContent = string;
}

function updateDate() {
    const now = new Date();

    let day = now.getDay();
    let month = now.getMonth();
    let year = now.getFullYear();

    day = String(day).padStart(2, '0');
    month = String(month).padStart(2, '0');

    const string = `${day}/${month}/${year}`;

    document.getElementById('date').textContent = string;
}

// Google search function
const searchInput = document.getElementById('query');

function performSearch() {
    const queryText = encodeURIComponent(searchInput.value.trim());
        if (queryText !== "") {
            window.location.href = `https://google.com/search?q=${queryText}`;
            }
        }

searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

updateDate();
updateClock();

setInterval(updateClock, 1000);