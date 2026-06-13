document.querySelectorAll(".passenger-card").forEach(card => {
    const typePills = card.querySelectorAll(".type-pill");
    typePills.forEach(pill => {
        pill.addEventListener("click", () => {
            typePills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
        });
    });

    const pickupToggle = card.querySelector(".pickup-toggle");
    const pickupOptions = card.querySelector(".pickup-options");
    if (pickupToggle && pickupOptions) {
        pickupToggle.addEventListener("change", () => {
            pickupOptions.classList.toggle("d-none", !pickupToggle.checked);
        });
    }

    const dropToggle = card.querySelector(".drop-toggle");
    const dropOptions = card.querySelector(".drop-options");
    if (dropToggle && dropOptions) {
        dropToggle.addEventListener("change", () => {
            dropOptions.classList.toggle("d-none", !dropToggle.checked);
        });
    }
});
