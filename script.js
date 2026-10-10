// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


// Close menu after clicking a link

document.querySelectorAll("#navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// ================= REGISTRATION FORM =================

const registrationForm =
    document.getElementById("registrationForm");

const formMessage =
    document.getElementById("formMessage");


registrationForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const firstName =
        document.getElementById("firstName").value.trim();

    const lastName =
        document.getElementById("lastName").value.trim();

    const parentName =
        document.getElementById("parentName").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const email =
        document.getElementById("email").value.trim();


    if (
        firstName === "" ||
        lastName === "" ||
        parentName === "" ||
        phone === "" ||
        email === ""
    ) {

        formMessage.textContent =
            "Please complete all required fields.";

        formMessage.style.color = "red";

        return;
    }


    // Simple phone validation

    const phonePattern = /^[0-9+\-\s]{10,15}$/;

    if (!phonePattern.test(phone)) {

        formMessage.textContent =
            "Please enter a valid phone number.";

        formMessage.style.color = "red";

        return;
    }


    // Success

    formMessage.textContent =
        "Registration submitted successfully! The school can now review the application.";

    formMessage.style.color = "green";


    registrationForm.reset();

});


// ================= CURRENT YEAR =================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ================= BACK TO TOP =================

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================= SCROLL ANIMATION =================

const animatedElements =
    document.querySelectorAll(
        ".feature-card, .facility-card, .gallery-item, .info-card"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


animatedElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "0.7s ease";

    observer.observe(element);

});