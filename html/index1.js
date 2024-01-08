document.addEventListener('DOMContentLoaded', function () {
    const imageSlider = document.querySelector('.image-slider');
    const images = [
        "image/換圖1.jpg",
        "image/換圖2.jpg",
        "image/dessert1.jpg"
    ];
    let currentIndex = 0;

    function showImage(index) {
        document.getElementById('sliderImage').src = images[index];
    }

    function changeImage(direction) {
        currentIndex = (currentIndex + direction) % images.length;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        showImage(currentIndex);
    }

    document.getElementById('prevBtn').addEventListener('click', function () {
        changeImage(-1);
    });
    document.getElementById('nextBtn').addEventListener('click', function () {
        changeImage(1);
    });
});

const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            const sectionId = this.getAttribute('data-section');
            scrollToSection(sectionId);
        });
    });

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    