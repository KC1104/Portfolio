var typed= new Typed(".text",{
    strings:["FrontEnd Development","BackEnd Development","Designing"],
    typeSpeed:50,
    backSpeed:50,
    backDelay:1000,
    loop:true
});

// Highlight active section in navbar
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.classList.remove("active");
                        if (link.getAttribute("href").substring(1) === entry.target.id) {
                            link.classList.add("active");
                        }
                    });
                }
            });
        },
        { threshold: 0.6 } // Trigger when 60% of section is visible
    );

    sections.forEach(section => observer.observe(section));
});


document.addEventListener("DOMContentLoaded", () => {
    const options = { root: null, threshold: 0.5 };

    // Technical skill bars
    const barObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const span = entry.target;
            if (entry.isIntersecting) {
                span.style.transform = "scaleX(1)";
            } else {
                span.style.transform = "scaleX(0)";
            }
        });
    }, options);

    document.querySelectorAll(".progress-line span").forEach(span => {
        span.style.transformOrigin = "left";
        span.style.transform = "scaleX(0)";
        span.style.transition = "transform 1s cubic-bezier(1, 0, 0.5, 1)";
        barObserver.observe(span);
    });

    // Radial bars
    const radialObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const path = entry.target;
            if (entry.isIntersecting) {
                path.style.strokeDashoffset = path.dataset.offset;
            } else {
                path.style.strokeDashoffset = path.dataset.total;
            }
        });
    }, options);

    document.querySelectorAll(".radial-bars .path").forEach(path => {
        const totalLength = path.getTotalLength();
        path.dataset.total = totalLength;
        path.dataset.offset = totalLength * 0.3; // Example: 70% filled
        path.style.strokeDasharray = totalLength;
        path.style.strokeDashoffset = totalLength;
        path.style.transition = "stroke-dashoffset 1s ease";
        radialObserver.observe(path);
    });
});



