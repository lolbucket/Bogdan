export const createProductCardHTML = ({ title, price, thumbnail }) => `
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
