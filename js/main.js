const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});

const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista de contenedores de productos
const productsList = document.querySelector('.container-items');

// Arreglos Productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e => {

	Swal.fire({
		position: 'bottom-end',
		icon: 'success',
		title: 'Producto agregado al carrito',
		showConfirmButton: false,
		timer: 900,
		allowOutsideClick: true, 
		backdrop: false,
		toast: true, 
	});

	if (e.target.classList.contains('btn-add-cart')) {
		const product = e.target.parentElement;

		const infoProduct = {
			quantity: 1,
			title: product.querySelector('h2').textContent,
			price: product.querySelector('p').textContent,
		};

		const exits = allProducts.some(
			product => product.title === infoProduct.title
		);

		if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}

		showHTML();
	}
});

rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(allProducts);

		showHTML();
	}
});

// Mostrar  HTML
const showHTML = () => {
	if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

	// Limpiar HTML
	rowProduct.innerHTML = '';

	let total = 0;
	let totalOfProducts = 0;

	allProducts.forEach(product => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');

		containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

		rowProduct.append(containerProduct);

		total = total + parseFloat(product.quantity * product.price.slice(1));
    totalOfProducts = totalOfProducts + product.quantity;
	});

	valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;
};


const btnPagar = document.querySelector('.pagar-carrito');

btnPagar.addEventListener('click', () => {
	
	if (allProducts.length === 0) {
		Swal.fire({
		  title: 'El carrito está vacío',
		  icon: 'warning',
		  confirmButtonText: 'OK',
		});
		return;
	  }

	Swal.fire({
	  title: 'Ingresa los datos de tu tarjeta',
	  html:
		'<input type="text" id="numeroTarjeta" class="swal2-input" placeholder="Número de tarjeta" inputmode="numeric" pattern="[0-9]*" minlength="16" maxlength="16">' +
		'<input type="text" id="codigoSeguridad" class="swal2-input" placeholder="Código de seguridad" inputmode="numeric" pattern="[0-9]*" minlength="3" maxlength="4">' +
		'<input type="text" id="fechaVencimiento" class="swal2-input" placeholder="Fecha de vencimiento (MM/AA)" inputmode="numeric" pattern="[0-9/]*" minlength="5" maxlength="5">',
	  confirmButtonText: 'Pagar',
	  showCancelButton: true,
	  cancelButtonText: 'Cancelar',
	  preConfirm: () => {
		const numeroTarjeta = document.getElementById('numeroTarjeta').value;
		const codigoSeguridad = document.getElementById('codigoSeguridad').value;
		const fechaVencimiento = document.getElementById('fechaVencimiento').value;
  
		allProducts = [];

		return fetch('https://jsonplaceholder.typicode.com/posts', {
		  method: 'POST',
		  body: JSON.stringify({
			numeroTarjeta,
			codigoSeguridad,
			fechaVencimiento,
		  }),
		  headers: {
			'Content-Type': 'application/json',
		  },
		})
		.then(response => {
		  if (!response.ok) {
			throw new Error('Error en la operación de pago');
		  }
		  return response.json();
		})
		.catch(error => {
		  Swal.fire({
			title: 'Error en el pago',
			text: error.message,
			icon: 'error',
			confirmButtonText: 'OK',
		  });
		});
	  },
	}).then(() => {
	  Swal.fire({
		title: '¡Gracias por comprar con nosotros!',
		text: 'Disfrute de sus productos',
		icon: 'success',
	  });
	}).finally(() => {
	  console.log('Operación finalizada.');
	});
  });