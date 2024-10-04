let currentIndex = 0; 

     function changeTestimonial(index) {
        const testimonials = document.querySelectorAll(".testimonial-box");

        testimonials[currentIndex].classList.remove("active");

        currentIndex = index;

        testimonials[currentIndex].classList.add("active");
        }

    setInterval(() => {
        const testimonials = document.querySelectorAll(".testimonial-box");
        const nextIndex = (currentIndex + 1) % testimonials.length; 

        changeTestimonial(nextIndex);
    }, 5000);