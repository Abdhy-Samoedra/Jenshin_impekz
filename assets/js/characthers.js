const tabs = document.querySelectorAll(".map-btn");
const contents = document.querySelectorAll(".content-char");

tabs.forEach((tab,index) => {
    tab.addEventListener("click", () => {

        // to remove axtive class from previous tab
        tabs.forEach((tab) => tab.classList.remove("active"));

        tab.classList.add("active");

        // to show content according tab selected

        // to hide previous content selected
        contents.forEach((c) => c.classList.remove("active"))

        contents[index].classList.add("active");
    })
});

// to run animation initially when page loads
tabs[0].click();

