// Array of artwork data (replace with your actual artwork data)
const artworks = [
    {
        title: "Celestial Harvest",
        image: "images/1.jfif",
        description: ""
    },
    {
        title: "Lunar Oath",
        image: "images/2.jfif",
        description: ""
    },
    {
        title: "Ethereal Bloom",
        image: "images/3.jfif",
        description: ""
    },
    {
        title: "Divine Flame",
        image: "images/4.jfif",
        description: ""
    },
    {
        title: "Regal Embrace",
        image: "images/5.jfif",
        description: ""
    },
    {
        title: "Whimsical Harmony",
        image: "images/6.jfif",
        description: ""
    },
    {
        title: "Celestial Elegance",
        image: "images/7.jfif",
        description: ""
    },
    {
        title: "Mystic Reverie",
        image: "images/8.jfif",
        description: ""
    },
    {
        title: "Opulent serenity",
        image: "images/9.jfif",
        description: ""
    },
    {
        title: "celestial Reverie",
        image: "images/10.jfif",
        description: ""
    },
    {
        title: "The Crumbling Kingdom",    
        image: "images/11.jfif",
        description: ""
    },
    {
        title: "The Crimson Queen",
        image: "images/12.jfif",
        description: ""
    },
    {
        title: "The Flame of Wisdom",
        image: "images/13.jfif",
        description: ""
    },
    {
        title: "Ink and Whispers",
        image: "images/14.jfif",
        description: ""
    },
    {
        title: "The Angel’s Prophecy",
        image: "images/15.jfif",
        description: ""
    },
    {
        title: "The Spiral of Enlightenment",
        image: "images/16.jfif",
        description: ""
    },
    {
        title: "Moonlit Summoning",
        image: "images/17.jfif",
        description: ""
    },
    {
        title: "The Ancient Sovereign",
        image: "images/18.jfif",
        description: ""
    },
    {
        title: "The Queen’s Oath",
        image: "images/19.jfif",
        description: ""
    },
    {
        title: "The Celestial Empress",
        image: "images/20.jfif",
        description: ""
    },
    {
        title: "The Keeper of Light",
        image: "images/21.jfif",
        description: ""
    },
    {
        title: "The Sun Weaver",
        image: "images/22.jfif",
        description: ""
    },
    {
        title: "The Cosmic Descent",
        image: "images/23.jfif",   
        description: ""
    },
    {
        title: "The Sacred Peaks",
        image: "images/24.jfif",
        description: ""
    },
    {
        title: "The Pilgrim’s Ascent",
        image: "images/25.jfif",
        description: ""
    },
    {
        title: "The Book of Ages",
        image: "images/26.jfif",
        description: ""
    },
    {
        title: "The Summit of Dreams",
        image: "images/27.jfif",
        description: ""
    },
    {
        title: "The Moonlit Reverie",
        image: "images/28.jfif",
        description: ""
    },
    {
        title: "The Floral Monarch",
        image: "images/29.jfif",
        description: ""    
    },
    {
        title: "The Prayer of the Red Queen",
        image: "images/30.jfif",
        description: ""
    },
    {
        title: "The Sacred Manuscript",
        image: "images/31.jfif",
        description: ""
    },
    {
        title: "The Devotion of the Moon",
        image: "images/32.jfif",
        description: ""
    },
    {
        title: "The Lunar Guidance",
        image: "images/33.jfif",
        description: ""
    },
    {
        title: "The Winged Oracle",
        image: "images/34.jfif",
        description: ""
    },
    {
        title: "The Eclipse of Fate",
        image: "images/35.jfif",
        description: ""
    },
    {
        title: "The Seraph of Tides",
        image: "images/36.jfif",
        description: ""
    },
    {
        title: "The Cosmic Queen",
        image: "images/37.jfif",
        description: ""    
    },
    {
        title: "The Silent Monarch",
        image: "images/38.jfif",
        description: ""
    },
    {
        title: "The Astral Navigator",
        image: "images/39.jfif",
        description: ""
    },
    {
        title: "The Enchanted Peaks",
        image: "images/40.jfif",
        description: ""
    }
];

// Function to create gallery items
function createGallery() {
    const galleryContainer = document.querySelector('.grid-container');

    artworks.forEach(art => {
        const artItem = document.createElement('div');
        artItem.classList.add('grid-item');

        const img = document.createElement('img');
        img.src = art.image;
        img.alt = art.title;

        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.innerHTML = `<h3>${art.title}</h3><p>${art.description}</p>`;

        artItem.appendChild(img);
        artItem.appendChild(overlay);
        galleryContainer.appendChild(artItem);

        // Add click event to show modal
        artItem.addEventListener('click', () => showModal(art));
    });
}

// Function to show modal with artwork details
function showModal(art) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalContent = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <img src="${art.image}" alt="${art.title}">
            <h2>${art.title}</h2>
            <p>${art.description}</p>
        </div>
    `;

    modal.innerHTML = modalContent;
    document.body.appendChild(modal);

    // Close modal when clicking the close button
    modal.querySelector('.close').addEventListener('click', () => {
        modal.remove();
    });

    // Close modal when clicking outside the modal
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}
const yearElement = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', createGallery);
