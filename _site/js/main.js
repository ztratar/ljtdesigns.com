$(function() {
	var sections,
		sectionPositions;

	function calculateSections() {
		sections = [
			'home',
			'whyus',
			'homes-designs',
			'plans-pricing',
			'contact'
		];
		sectionPositions = [];
		for (var section in sections) {
			sectionPositions[sections[section]] = $('#' + sections[section]).offset().top;
		}
	}

	$('.img-carousel').slick({
		onAfterChange: function(carousel) {
			var $active = carousel.$list.find('.slick-active') || carousel.find('.img:eq(0)'),
				$next = $active.next(),
				$prev = $active.prev();

			$.each([$active, $next, $prev], function(i, $wrap) {
				if ($wrap) {
					console.log($($wrap));
					$($wrap).find('img').trigger('load-img');
				}
			});
		}
	});
	$('.img-carousel img').lazyload({
		event: 'load-img',
		effect: 'fadeIn'
	});
	$('.slick-active img').trigger('load-img');
	$('.slick-active + div').find('img').trigger('load-img');

	calculateSections();
	$(window).on('resize', calculateSections);

	$(window).on('scroll', function() {
		var curScroll = $(window).scrollTop();

		for (var pos in sectionPositions) {
			if (sectionPositions[pos] - 101 <= curScroll) {
				$('ul.nav li').removeClass('active');
				$('ul.nav li.' + pos).addClass('active');
			}
		}
	});

	$('ul.nav a').on('click', function() {
		var that = this,
			target = $(this).attr('href'),
			targetElem = $(target),
			pos = targetElem.offset();

		$('body, html').animate({
			scrollTop: pos.top - 100
		}, 600);

		setTimeout(function() {
			$('ul.nav li').removeClass('active');
			$(that).parent().addClass('active');
		}, 600);

		return false;
	});

	$('.plan-contact-card .btn').on('click', function() {
		var $contact = $('#contact'),
			pos = $contact.offset();

		$('body, html').animate({
			scrollTop: pos.top
		}, 600);

		$('input[name="email"]').focus();

		return false;
	});

	$('div.share').each(function(elem) {
		var href = $(this).attr('data-href'),
			design = $(this).attr('data-design'),
			name = $(this).attr('data-name');

		new Share('.share-' + design, {
			url: href,
			title: name + ' - ' + document.title,
			text: name + ' - ' + document.title,
			description: name + ' - ' + document.title
		});
	});
});
