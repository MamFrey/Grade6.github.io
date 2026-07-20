// Mobile Menu
const menuToggle =
document.querySelector(".menu-toggle");

const navLinks =
document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// ===========================
// GOOGLE SHEETS ANNOUNCEMENTS
// ===========================

const url = "https://script.google.com/macros/s/AKfycbx2w8N9bjYUgTXAcgf11kXPu9ZJBIEL9ekSeQI8cYMzM26lvWqCYiFKrSEjlGA1FurM7g/exec";

fetch(url)
.then(response => response.json())
.then(data => {

    let html = "";

    data.forEach(item => {

        html += `
            <div class="announcement-card">
                <h3>${item.title}</h3>
                <small>${item.date}</small>
                <p>${item.content}</p>
            </div>
        `;

    });

    document.getElementById("announcement-list").innerHTML = html;

})
.catch(error => {
    console.error(error);
});
