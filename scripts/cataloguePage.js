import { displayProducts } from './products.js';

displayProducts();

const getPriceFilterValues = () => {
  const categoryPriceForm = document.querySelector('.categories__price');

  categoryPriceForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const minField = e.currentTarget.children[0];
    const maxField = e.currentTarget.children[2];

    const priceFilterValues = {
      min: minField.value,
      max: maxField.value,
    };

    console.log(priceFilterValues);

    return priceFilterValues;
  });
};

getPriceFilterValues();
