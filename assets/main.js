// frontend/web/product-card/scripts/main.js

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
  