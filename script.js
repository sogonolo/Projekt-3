document.addEventListener('DOMContentLoaded', function() {
    // Get the checkbox element
    var checkbox = document.getElementById('check');

    // Get all the anchor tags inside the ".nav-list" element
    var navLinks = document.querySelectorAll('.nav-list li a');

    // Add a click event listener to each anchor tag
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // Hide the list items by setting their display to none
            document.querySelectorAll('.nav-list li').forEach(function(item) {
                item.style.display = 'none';
            });

            // Optionally, hide the ".nav-list" itself by setting its height to 0
            document.querySelector('.nav-list').style.height = '0';

            // Uncheck the checkbox to toggle its state
            checkbox.checked = false;
        });
    });

    // Add a click event listener to the hamburger button
    document.querySelector('.hamburger-btn').addEventListener('click', function() {
        // Toggle the visibility of the ".nav-list" and list items based on the checkbox state
        var navList = document.querySelector('.nav-list');
        if (checkbox.checked) {
            navList.style.height = '0';
        } else {
            navList.style.height = '370px';
            // Show the list items
            document.querySelectorAll('.nav-list li').forEach(function(item) {
                item.style.display = 'block';
            });
        }
    });
});