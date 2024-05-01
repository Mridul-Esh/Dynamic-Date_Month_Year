

const fullDate = document.getElementById("date-month");

let monthName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December' 
];


const tarikh = setInterval(function () {
    let today = new Date ();

    let d = today.getDate();
    let m = today.getMonth();
    let y = today.getFullYear();

    fullDate.innerHTML = `${d} ${monthName[m]} ${y}`
});

