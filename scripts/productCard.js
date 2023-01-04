const PRODUCT_PATH = './pages/products/iphone-13.html';

export const createProductCardHTML = (
  { title, price, thumbnail },
  path = PRODUCT_PATH,
) => `
	<article class="product-card">
		<a
			href="${path}"
			class="product-card__img-wrapper"
		>
			<img src="${thumbnail}" alt="${title}" />
		</a>
		<div class="product-card__content">
			<a href="${path}" class="product-card__title">${title}</a>
			<span class="product-card__price">${price}$</span>
		</div>
	</article>
`;
