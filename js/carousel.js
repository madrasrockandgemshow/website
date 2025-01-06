const vendors = [
    {
        image: 'Seaside-Stone-LLC.png',
        title: 'Seaside Stone, LLC',
        description: 'Beautiful stones from the beach.',
        url: 'https://www.seasidestones.com'
    },
    {
        image: 'JHF-Stones.jpg',
        title: 'JHF Stones',
        description: 'We hand cut and create Gemstones for Jewelery making',
        url: ''
    },
    {
        image: 'Rough-Rock-Lapidary.jpg',
        title: 'Rough Rock & Lapidary',
        description: 'Thundereggs, Agate, Jasper, Petrified Wood & Lapidary Supplies For Sale',
        url: ''
    },
    {
        image: 'DeMaris-Rock-Products.jpg',
        title: 'DeMaris Rock Products',
        description: 'Beautify and protect the energy of your living space or personal space with stunning gems and minerals.',
        url: ''
    },
    {
        image: 'Zat-Blune-Stone.jpg',
        title: 'Zat Blune Stone',
        description: 'Native American Indian Jewelry',
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
            ${vendor.url ? '<span class="link-icon">🔗</span>' : ''}
        </div>
    `;
    slide.addEventListener('click', () => {
        if (vendor.url) {
            window.open(vendor.url, '_blank');
        }
    });
    swiperWrapper.appendChild(slide);
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