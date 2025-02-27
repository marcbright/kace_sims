document.addEventListener("DOMContentLoaded", function () {
    const pagination = document.querySelector(".pagination");
    const prevButton = pagination.querySelector(".prev");
    const nextButton = pagination.querySelector(".next");
    const pageLinks = pagination.querySelectorAll("a[data-page]");

    // Determine current page from URL
    const getCurrentPage = () => {
        const path = window.location.pathname.split('/').pop();
        if (path === "index.html" || path === "") return 1;
        if (path.startsWith("page_")) {
            return parseInt(path.replace("page_", "").replace(".html", ""));
        }
        return 1; // Default to page 1 if no match
    };

    const currentPage = getCurrentPage();

    // Function to update pagination state
    function updatePagination(currentPage) {
        // Remove existing active class
        pageLinks.forEach(link => link.classList.remove("active"));

        // Set active class on current page
        const currentLink = pagination.querySelector(`a[data-page='${currentPage}']`);
        if (currentLink) currentLink.classList.add("active");

        // Update Prev button
        const prevPageLink = pagination.querySelector(`a[data-page='${currentPage - 1}']`);
        if (prevPageLink) {
            prevButton.href = prevPageLink.getAttribute("href");
            prevButton.parentElement.classList.remove("disabled");
        } else {
            prevButton.href = "#";
            prevButton.parentElement.classList.add("disabled");
        }

        // Update Next button
        const nextPageLink = pagination.querySelector(`a[data-page='${currentPage + 1}']`);
        if (nextPageLink) {
            nextButton.href = nextPageLink.getAttribute("href");
            nextButton.parentElement.classList.remove("disabled");
        } else {
            nextButton.href = "#";
            nextButton.parentElement.classList.add("disabled");
        }
    }

    // Add click event listeners to page links
    pageLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = this.getAttribute("href");
        });
    });

    // Add click event listeners to prev/next buttons
    prevButton.addEventListener("click", function (event) {
        if (this.href === "#") event.preventDefault();
    });

    nextButton.addEventListener("click", function (event) {
        if (this.href === "#") event.preventDefault();
    });

    // Initialize pagination
    updatePagination(currentPage);
});