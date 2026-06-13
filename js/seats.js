const takenSeats = new Set(["03", "09", "11", "12", "16", "19", "29", "32"]);

const seatGrid = document.getElementById("seatGrid");
const selectedSeatsText = document.getElementById("selectedSeats");
const bookBtn = document.getElementById("bookNowBtn");

let selectedSeats = [];

function pad(num) {
    return String(num).padStart(2, "0");
}

function createSeat(number) {
    const seat = document.createElement("div");
    seat.classList.add("seat");
    seat.textContent = number;
    seat.dataset.seat = number;

    if (takenSeats.has(number)) {
        seat.classList.add("taken");
        return seat;
    }

    seat.addEventListener("click", () => {
        seat.classList.toggle("selected");
        const idx = selectedSeats.indexOf(number);
        if (idx >= 0) {
            selectedSeats.splice(idx, 1);
        } else {
            selectedSeats.push(number);
        }
        selectedSeats.sort();
        updateFooter();
    });

    return seat;
}

function createAisle() {
    const aisle = document.createElement("div");
    aisle.className = "seat aisle";
    return aisle;
}

function createRow(leftNums, rightNums) {
    const row = document.createElement("div");
    row.className = "seat-row";

    leftNums.forEach(n => row.appendChild(createSeat(pad(n))));
    row.appendChild(createAisle());
    rightNums.forEach(n => row.appendChild(createSeat(pad(n))));

    return row;
}

for (let i = 0; i < 10; i++) {
    const base = i * 2 + 1;
    seatGrid.appendChild(createRow(
        [base, base + 1],
        [base + 20, base + 21]
    ));
}

const backRow = document.createElement("div");
backRow.className = "seat-row back-row";
[19, 20].forEach(n => backRow.appendChild(createSeat(pad(n))));
backRow.appendChild(createAisle());
[39, 40].forEach(n => backRow.appendChild(createSeat(pad(n))));
seatGrid.appendChild(backRow);

function updateFooter() {
    if (selectedSeats.length === 0) {
        selectedSeatsText.textContent = "—";
        bookBtn.classList.add("disabled");
        bookBtn.href = "#";
        return;
    }

    selectedSeatsText.textContent = selectedSeats
        .map(s => parseInt(s, 10))
        .join(" | ");

    bookBtn.classList.remove("disabled");
    bookBtn.href = "passenger-info.html";
}
