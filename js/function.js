$(document).ready(function () {

	// @prepros-append libs-settings/slick_settings.js
	// @prepros-append libs-settings/fancybox_settings.js

	// Отмена перехода по ссылкам
	$('a[href="#"]').click(function(e) {
		e.preventDefault();
	});

	// Мобильное меню
	// $('.menuBtn').click(function () {
	// 	var menu = $(this).closest('#menu');
	// 	var over = $(this).siblings('.menu_over');
	// 	var btn = $(this);
	// 	menu.toggleClass('open');
	// 	btn.toggleClass('is-active');
	// 	over.click(function() {
	// 		menu.removeClass('open');
	// 		btn.removeClass('is-active');
	// 	});
	// 	menu.find('a').click(function() {
	// 		menu.removeClass('open');
	// 		btn.removeClass('is-active');
	// 	});
	// });
	
	// Блок с высотой окна браузера
	// function screenHeight() {
	//     $('.full__height').css({
	//         minHeight: $(window).height() + 'px'
	//     });
	// };
	// screenHeight();

	// Scroll to ID // Плавный скролл к элементу при нажатии на ссылку. В ссылке указываем ID элемента
	// $('#main__menu a[href^="#"]').click( function(){ 
	// 	var scroll_el = $(this).attr('href'); 
	// 	if ($(scroll_el).length != 0) {
	// 	$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
	// 	}
	// 	return false;
	// });

	// Stiky menu // Липкое меню. При прокрутке к элементу #header добавляется класс .stiky который и стилизуем
	// var HeaderTop = $('#header').offset().top;
	// $(window).scroll(function(){
	// 	if( $(window).scrollTop() > HeaderTop ) {
	// 		$('#header').addClass('stiky');
	// 	} else {
	// 		$('#header').removeClass('stiky');
	// 	}
	// });

	// Inputmask.js // Маска для поля ввода телефона
	// $('[name=tel]').inputmask("+9(999)999 99 99",{ showMaskOnHover: false });

	// Изменяет размер шрифта у тэга html взависимости от размера экрана (для резиновых страниц)(размеры должны быть в rem)
	// function fontResize() {
	// 	var windowWidth = $(window).width();
	// 		if (windowWidth >= 720) {
	// 			var fontSize = windowWidth/19.05;
	// 		} else if (windowWidth < 720) {
	// 			// Без резины на мобилке
	// 			var fontSize = 60;
	// 			// С резиной на мобилке
	// 			var fontSize = windowWidth/4.8;
	// 	}
	// 	$('html').css('fontSize', fontSize + '%');
	// }

	// Табы
	// $('.tabs_trigger').find('li').click(function() {
	// 	var trigger = $(this),
	// 			allTrigger = trigger.siblings();
	// 			content = trigger.parent().siblings('.tabs_content').find('div'),
	// 			index = trigger.index();
	// 	allTrigger.removeClass('active');
	// 	trigger.addClass('active');
	// 	content.addClass('hide');
	// 	content.eq(index).removeClass('hide');
	// });

	// Аккордеон
	// $('.accordeon_trigger').click(function() {
	// 	var trigger = $(this),
	// 			allTrigger = trigger.parent().parent().find('.accordeon_trigger'),
	// 			content = trigger.siblings('.accordeon_content'),
	// 			allContent = trigger.parent().parent().find('.accordeon_content'),
	// 			time = 300;
	// 	if (!content.hasClass('open')) {
	// 		allContent.stop().slideUp(time).removeClass('open');
	// 		content.stop().slideDown(time).addClass('open');
	// 		allTrigger.removeClass('active');
	// 		trigger.addClass('active');
	// 	}
	// 	else {
	// 		content.stop().slideUp(time).removeClass('open');
	// 		trigger.removeClass('active');
	// 	}
	// });

	// Модальное окно
	// $('.modal-trigger').on('click', function() {
	// 	var data = $(this).data('modal'),
	// 			modalOver = $('.modal_over'),
	// 			modal = $('#modal-' + data);
	// 	modal.toggleClass('open')
	// 	.next('.modal_over').toggleClass('open');
	// 	$('.modal_close').on('click', function() {
	// 		modal.removeClass('open'),
	// 		modalOver.removeClass('open');
	// 	});
	// 	modalOver.on('click', function() {
	// 		modal.removeClass('open');
	// 		modalOver.removeClass('open');
	// 	});
	// });

	// Стилизация полосы прокрутки
	// $('#scrollbar1').tinyscrollbar({
	// 	axis: "y", // Направление оси
	// 	// trackSize: 100, // Высота дорожки
	// 	thumbSize: 50, // Высота тамба
	// 	// thumbSizeMin: 100, // Минимальная высота тамба
	// 	wheel: true, // Отключить прокрутку
	// 	wheelSpeed: 10, // Прокручивать пикселей
	// });

	// $('#scrollbar2').tinyscrollbar({
	// 	axis: "y", // Направление оси
	// 	// trackSize: 100, // Высота дорожки
	// 	thumbSize: 50, // Высота тамба
	// 	// thumbSizeMin: 100, // Минимальная высота тамба
	// 	wheel: true, // Отключить прокрутку
	// 	wheelSpeed: 10, // Прокручивать пикселей
	// });

	// matchHeight // Задание елементам одинаковой высоты
	// $('.item').matchHeight();

	// Слежение за изменением размера окна браузера
	// $(window).resize(function() {
	// 	fontResize(); // Резиновый сайт
	// 	screenHeight(); // Блок с высотой окна браузера
	// });
	
});