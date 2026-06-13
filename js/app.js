const dateCard = document.getElementById("dateCard");
const dateText = document.getElementById("dateText");
const calendarCard = document.getElementById("calendarCard");
const calendarGrid = document.getElementById("calendarGrid");
const closeDate = document.getElementById("closeDate");

const monthDays = [
    { day: 29, other: true },
    { day: 30, other: true },
    { day: 31, other: true },
    { day: 1, other: false },
    { day: 2, other: false },
    { day: 3, other: false },
    { day: 4, other: false },
    { day: 5, other: false },
    { day: 6, other: false },
    { day: 7, other: false },
    { day: 8, other: false },
    { day: 9, other: false },
    { day: 10, other: false },
    { day: 11, other: false },
    { day: 12, other: false },
    { day: 13, other: false },
    { day: 14, other: false },
    { day: 15, other: false },
    { day: 16, other: false },
    { day: 17, other: false },
    { day: 18, other: false },
    { day: 19, other: false },
    { day: 20, other: false },
    { day: 21, other: false },
    { day: 22, other: false },
    { day: 23, other: false },
    { day: 24, other: false },
    { day: 25, other: false },
    { day: 26, other: false },
    { day: 27, other: false },
    { day: 28, other: false },
    { day: 29, other: false },
    { day: 30, other: false },
    { day: 1, other: true },
    { day: 2, other: true }
];

let selectedDate = null;

monthDays.forEach(({ day, other }) => {
    const el = document.createElement("div");
    el.classList.add("day");
    if (other) el.classList.add("other-month");
    el.textContent = day;

    if (!other) {
        el.addEventListener("click", () => {
            document.querySelectorAll(".day").forEach(d => d.classList.remove("active"));
            el.classList.add("active");
            selectedDate = day;
            dateText.textContent = `${day} Jun 2026`;
            dateCard.classList.add("has-date");
            calendarCard.classList.add("d-none");
        });
    }

    calendarGrid.appendChild(el);
});

dateCard.addEventListener("click", (e) => {
    if (e.target.closest("#closeDate")) return;
    calendarCard.classList.toggle("d-none");
});

closeDate.addEventListener("click", (e) => {
    e.stopPropagation();
    selectedDate = null;
    dateText.textContent = "Travel date";
    dateCard.classList.remove("has-date");
    document.querySelectorAll(".day").forEach(d => d.classList.remove("active"));
    calendarCard.classList.add("d-none");
});
