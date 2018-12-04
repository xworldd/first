function popup() {

	let more					= document.querySelector('.more'),
					descMore = document.getElementsByClassName('.description-btn'),
					parent 		= document.querySelector('.info'),
					overlay 	= document.querySelector('.overlay'),
					close 			= document.querySelector('.popup-close');

		parent.addEventListener('click', function(event) {
			if (event.target && event.target.className == 'description-btn'){
				event.target.classList.add('more-splash');
				overlay.style.display = 'block';
				document.body.style.overflow = 'hidden';

			}

		});

		more.addEventListener('click', function() {
			this.classList.add('more-splash');
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';

		});

		close.addEventListener('click', function() {
			this.classList.remove('more-splash');
			overlay.style.display = 'none';
			document.body.style.overflow = '';

		});
}

module.exports = popup;