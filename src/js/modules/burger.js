import $ from 'jquery';

$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu,.menu__item').toggleClass('active');
		$('body').toggleClass('lock');
	});
})