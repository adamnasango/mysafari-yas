const loadingScreen = document.getElementById("loadingScreen");
const unpaidView = document.getElementById("unpaidView");
const paidView = document.getElementById("paidView");
const payTicketBtn = document.getElementById("payTicketBtn");

setTimeout(() => {
    loadingScreen.classList.add("ticket-view-hidden");
    unpaidView.classList.remove("ticket-view-hidden");
}, 2000);

payTicketBtn.addEventListener("click", () => {
    unpaidView.classList.add("ticket-view-hidden");
    paidView.classList.remove("ticket-view-hidden");
});

const pages = paidView.querySelectorAll(".page");
const indicator = document.getElementById("pageIndicator");
const nextBtn = document.getElementById("nextPage");
const prevBtn = document.getElementById("prevPage");
const doneBtn = document.getElementById("doneBtn");

let currentPage = 0;

function updatePage() {
    pages.forEach((page, i) => {
        page.classList.toggle("active", i === currentPage);
    });
    indicator.textContent = `${currentPage + 1}/2`;
}

nextBtn.addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updatePage();
    }
});

prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        updatePage();
    }
});

doneBtn.addEventListener("click", () => {
    window.location.href = "index.html";
});

updatePage();
