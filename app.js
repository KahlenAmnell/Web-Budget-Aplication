const customDate = document.querySelector("#customDateInput");
const periodSelected = document.querySelector("#period");

periodSelected.addEventListener('change', function () {
    if (periodSelected.selectedIndex === 3) {
        customDate.style.display = "block";
    } else {
        customDate.style.display = "none";
    }
})
