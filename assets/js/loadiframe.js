function loadInIframe(url) {
    // Create a container for both the open iframe
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column'; // Display vertically
    container.style.alignItems = 'center'; // Center align horizontally
    container.style.margin = '0 50px'; // Add margin on both sides

    // Create the open iframe
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.width = '100%'; // Reduce width to leave space on left and right
    iframe.style.height = '500px'; // Adjust the height as needed
    iframe.style.border = 'none';

    function updateCloseButtonPosition() {
        const screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            // Adjust position for smaller screens
            closeButton.style.top = '10px';
            closeButton.style.left = '10px';
        } else {
            // Default position for larger screens
            closeButton.style.top = '280px';
            closeButton.style.left = '70px';
        }
    }

    // Create a close button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'EXIT';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '280px';
    closeButton.style.left = '70px';
    closeButton.style.margin = '10px';
    closeButton.style.paddingTop = '1px';
    closeButton.style.backgroundColor = 'black';
    closeButton.style.color = 'white';
    closeButton.style.border = 'none';
    closeButton.style.cursor = 'pointer';

    // Add a click event listener to the close button
    closeButton.addEventListener('click', function () {
        // Navigate back to the index.html page
        window.location.href = 'index.html';
    });

    // Append the iframe and close button to the container
    container.appendChild(iframe);
    container.appendChild(closeButton);

    updateCloseButtonPosition();
    window.addEventListener('resize', updateCloseButtonPosition);

    // Replace the content of the main element with the container
    const main = document.getElementById('main');
    main.innerHTML = '';
    main.appendChild(container);
}