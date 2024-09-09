function dropDownMenu() {
    document.getElementById("profileDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches(".user-button")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
}

/* Add different text color based on whether the text is "Delayed" or "Cancelled" in the aside div. */
document.addEventListener("DOMContentLoaded", function() {
    const statusElements = document.querySelectorAll(".status-p");

    statusElements.forEach(element => {
        if (element.textContent.includes("Cancelled")) {
            element.style.color = "red";
        } else if (element.textContent.includes("Delayed")) {
            element.style.color = "orange";
            let mins = Math.floor(Math.random()*10+1);
            var msg = element.textContent.concat(` +${mins} minute`);
            if (mins != 1) {
                msg = msg.concat('s.');
            } else {
                msg = msg.concat('.');
            }
            element.textContent = msg;
        }
    })
});