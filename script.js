function calculateLove() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if (!name1 || !name2) {
        document.getElementById("result").innerText = "Please enter both names!";
        return;
    }

    // Clean and process names
    const cleanName1 = name1.replace(/\s+/g, '').toLowerCase();
    const cleanName2 = name2.replace(/\s+/g, '').toLowerCase();
    const combinedNames = cleanName1 + cleanName2;

    let total = 0;
    for (let i = 0; i < combinedNames.length; i++) {
        total += combinedNames.charCodeAt(i);
    }

    // Calculate percentage and determine message
    const percentage = total % 101;
    let message = "";

    if (percentage > 80) {
        message = "You both are made for each other! ❤️";
    } else if (percentage > 50) {
        message = "You have a strong connection! 💕";
    } else if (percentage > 30) {
        message = "There might be some challenges, but love conquers all! 🌹";
    } else {
        message = "It might take some effort to build your relationship. 💔";
    }

    // Display result with highlighted names
    document.getElementById("result").innerHTML = `
        <span class="highlight">${name1}</span> and <span class="highlight">${name2}</span> have a love percentage of <span class="highlight">${percentage}%</span> ❤️<br>${message}
    `;
}