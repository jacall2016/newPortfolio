document.addEventListener('DOMContentLoaded', function() {
    var titlesArray = [
        "software engineer",
        "javascript junky",
        "Decision Maker",
        "disciple of Jesus Christ",
        "Python Enthusiast",
        "Design daredevil",
        "mad science nerd",
        "Data analysis fan",
        "Friend",
        "Go-getter",
        "Life-long learner",
        "family history devotee",
        "team player",
        "3D Modeling Enthusiast",
        "Ballroom Dancer",
        "poetry writer",
        "Backend Engineer"
    ];

    var colors = ['red', 'blue', 'violet']; // Start with red
    var titlesElement = document.getElementById('titles');
    var currentIndex = 0;

    // Set the initial color to red
    titlesElement.style.color = colors[0];

    setInterval(function() {
        // Fade out
        titlesElement.style.opacity = 0;

        setTimeout(function() {
            // Change text and apply color
            titlesElement.textContent = titlesArray[currentIndex];
            titlesElement.style.color = colors[currentIndex % colors.length];

            // Increment index or reset
            currentIndex = (currentIndex + 1) % titlesArray.length;

            // Fade back in
            titlesElement.style.opacity = 1;
        }, 1000); // Adjust the timing as needed
    }, 4000); // Adjust the timing as needed
});


