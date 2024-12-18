const vendors = [
    {
        image: 'Seaside-Stone-LLC.png',
        title: 'Seaside Stone, LLC',
        description: 'Beautiful stones from the beach.',
        url: ''
    },
    {
        image: 'JHF-Stones.jpg',
        title: 'JHF Stones',
        description: '2',
        url: ''
    },
    {
        image: 'Rough-Rock-Lapidary.jpg',
        title: 'Rough Rock & Lapidary',
        description: 'Description for Vendor 3.',
        url: ''
    },
    {
        image: 'DeMaris-Rock-Products.jpg',
        title: 'DeMaris Rock Products',
        description: 'Description for Vendor 4.',
        url: ''
    },
    {
        image: 'Zat-Blune-Stone.jpg',
        title: 'Zat Blune Stone',
        description: 'Description for Vendor 5.',
        url: ''
    },
];

// Populate Swiper slides
const swiperWrapper = document.querySelector('.swiper-wrapper');
vendors.forEach(vendor => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `
        <div class="carousel-item">
            <img src="assets/vendors/${vendor.image}" alt="${vendor.title}">
            <h3>${vendor.title}</h3>
            <p>${vendor.description}</p>
        </div>
    `;
    swiperWrapper.appendChild(slide);
});

// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});