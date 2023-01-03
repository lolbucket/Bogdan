import products from '../assets/products.json' assert { type: 'json' };
import { createProductCardHTML } from './productCard.js';

export const displayPopularProducts = () => {
  const popularProducts = products.slice(0, 6);

  const productsList = document.querySelector('.popular-products__list');

  const popularProductCards = popularProducts.map(
    (product) => `<li>${createProductCardHTML(product)}</li>`,
  );

  productsList.innerHTML = popularProductCards.join('');
};

export const displayProducts = () => {
  const productsList = document.querySelector('.products__list');

  const productCards = products.map(
    (product) => `<li>${createProductCardHTML(product)}</li>`,
  );

  productsList.innerHTML = productCards.join('');
};
