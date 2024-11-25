<<<<<<< HEAD
=======

>>>>>>> 6527521dd450e07c7cb693b275b608890a15c1e2
class ProductCard extends HTMLElement {
  constructor() {
    super();

    // Attach Shadow DOM for encapsulation
    const shadow = this.attachShadow({ mode: 'open' });

    // Create the product card structure
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('product-card');

    const productImage = document.createElement('img');
    const productTitle = document.createElement('h3');
    const productPrice = document.createElement('p');

    // Fetch data from attributes
    productImage.src = this.getAttribute('data-image');
    productTitle.textContent = this.getAttribute('data-title');
    productPrice.textContent = this.getAttribute('data-price');

    // Append elements to the wrapper
    cardWrapper.appendChild(productImage);
    cardWrapper.appendChild(productTitle);
    cardWrapper.appendChild(productPrice);

    // Append wrapper to shadow root
    shadow.appendChild(cardWrapper);
  }
}

// Define the custom element
customElements.define('product-card', ProductCard);

// Initialize Slick Slider after the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  // Apply Slick Slider to the product cards container
  const productSlider = document.querySelector('.product-slider');
  
  if (productSlider) {
    $(productSlider).slick({
      slidesToShow: 4, // Display 4 product cards at once
      slidesToScroll: 1,
      arrows: true, // Show navigation arrows
      dots: true, // Show pagination dots
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  }
});
