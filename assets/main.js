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

// Create and append link for compiled stylesheet (CSS)
const linkElem = document.createElement('link');
linkElem.setAttribute('rel', 'stylesheet');
linkElem.setAttribute('href', '/cdn/shop/t/6/assets/main.js'); // Use compiled CSS file
shadow.appendChild(linkElem);


    // Append wrapper to shadow root
    shadow.appendChild(cardWrapper);
  }
}

// Define the custom element
customElements.define('product-card', ProductCard);

// Initialize Slick Slider after the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  const productSlider = document.querySelector('.product-slider');
  
  if (productSlider) {
    $(productSlider).slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
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
