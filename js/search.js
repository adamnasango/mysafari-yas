const destinations = [
    { code: "ARS", name: "Arusha" },
    { code: "DSM", name: "Dar es Salaam" },
    { code: "MBY", name: "Mbeya" },
    { code: "MSH", name: "Moshi" }
];

const input = document.getElementById("destinationInput");
const results = document.getElementById("destinationResults");
const clearBtn = document.getElementById("clearDestination");
const destinationField = document.getElementById("destinationField");
const destinationSelected = document.getElementById("destinationSelected");
const toCode = document.getElementById("toCode");
const toCity = document.getElementById("toCity");

let selectedDestination = null;

function showInput() {
    destinationField.classList.remove("d-none");
    destinationSelected.classList.add("d-none");
    input.value = "";
    selectedDestination = null;
    results.innerHTML = "";
    clearBtn.classList.remove("visible");
    input.focus();
}

function selectDestination(item) {
    selectedDestination = item;
    toCode.textContent = item.code;
    toCity.textContent = item.name;
    destinationField.classList.add("d-none");
    destinationSelected.classList.remove("d-none");
    results.innerHTML = "";
    clearBtn.classList.remove("visible");
}

input.addEventListener("input", () => {
    const value = input.value.toLowerCase();
    results.innerHTML = "";

    clearBtn.classList.toggle("visible", value.length > 0);

    if (value.length === 0) return;

    const filtered = destinations.filter(item =>
        item.name.toLowerCase().includes(value) ||
        item.code.toLowerCase().includes(value)
    );

    filtered.forEach(item => {
        const el = document.createElement("div");
        el.className = "destination-item";
        el.innerHTML = `
            <span class="material-symbols-outlined">location_on</span>
            <div>
                <h5>${item.code}</h5>
                <p>${item.name}</p>
            </div>
        `;
        el.addEventListener("click", () => selectDestination(item));
        results.appendChild(el);
    });
});

clearBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    showInput();
});

destinationSelected.addEventListener("click", () => {
    showInput();
});
