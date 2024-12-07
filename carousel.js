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

// Function to populate carousel
function populateCarousel() {
    const carousel = document.getElementById('vendorCarousel');
    vendors.forEach(vendor => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.innerHTML = `
            <img src="assets/vendors/${vendor.image}" alt="${vendor.title}">
            <h3>${vendor.title}</h3>
            <p>${vendor.description}</p>
        `;
        carousel.appendChild(item);
    });
}

// Carousel scroll buttons
document.getElementById('scrollLeft').addEventListener('click', () => {
    document.getElementById('vendorCarousel').scrollBy({ left: -300, behavior: 'smooth' });
});

document.getElementById('scrollRight').addEventListener('click', () => {
    document.getElementById('vendorCarousel').scrollBy({ left: 300, behavior: 'smooth' });
});

// Initialize carousel
populateCarousel();
