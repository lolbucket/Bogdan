import products from '../assets/products.json' assert { type: 'json' };

// export const getPopularProducts = () => {
//   return products.slice(0, 3);
// };

const createProductCardHTML = ({ title, price, thumbnail }) => `
	<article class="product-card">
		<a
			href="#"
			class="product-card__img-wrapper"
		>
			<img src="${thumbnail}" alt="${title}" />
		</a>
		<div class="product-card__content">
			<a href="#" class="product-card__title">${title}</a>
			<span class="product-card__price">${price}$</span>
		</div>
	</article>
`;

/* 
<article class="product-card">
	<a
		href="#"
		class="product-card__img-wrapper"
	></a>
	<div class="product-card__content">
		<p class="product-card__title">Title</p>
		<p class="product-card__price">0.00</p>
	</div>
</article>
*/

export const displayPopularProducts = () => {
  const popularProducts = products.slice(0, 6);

  const productsList = document.querySelector('.popular-products__list');

  const popularProductCards = popularProducts.map((product) =>
    createProductCardHTML(product),
  );

  productsList.innerHTML = popularProductCards.join('');

  console.log(popularProductCards);
};
