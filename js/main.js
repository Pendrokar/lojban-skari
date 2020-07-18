// var colors = [];
// var minJColor;
// var maxJColor;
angular.module('colorMixer', [])
	.controller('ColorMixerController', function() {
		var colorMix = this;
		colorMix.colors = {
			red: {
				color: 'red',
				colorHex: '#ff0000',
				title: 'x1 is red/crimson/ruddy [color adjective].',
				lojbanText: 'xunre'
			},
			brown: {
				color: 'brown',
				colorHex: '#805400',
				title: 'x1 is brown/tan [color adjective].',
				lojbanText: 'bunre'
			},
			orange: {
				color: 'orange',
				colorHex: '#ff8000',
				title: 'x1 is orange [color adjective].',
				lojbanText: 'narju'
			},
			yellow: {
				color: 'yellow',
				colorHex: '#ffff00',
				title: 'x1 is yellow/golden [color adjective].',
				lojbanText: 'pelxu'
			},
			green: {
				color: 'green',
				colorHex: '#00ff00',
				title: 'x1 is green/verdant [color adjective].',
				lojbanText: 'crino'
			},
			cyan: {
				color: 'cyan',
				colorHex: '#00ffff',
				title: 'x1 is cyan/turquoise/greenish-blue [color adjective].',
				lojbanText: 'cicna'
			},
			blue: {
				color: 'blue',
				colorHex: '#0000ff',
				title: 'x1 is blue [color adjective].',
				lojbanText: 'blanu'
			},
			magenta: {
				color: 'magenta',
				colorHex: '#ff00ff',
				title: 'x1 is magenta/fuchsia/purplish-red [color adjective].',
				lojbanText: 'nukni'
			},
			purple: {
				color: 'purple',
				colorHex: '#800080',
				title: 'x1 is purple/violet [color adjective].',
				lojbanText: 'zirpu'
			},
			white: {
				color: 'white',
				colorHex: '#ffffff',
				title: 'x1 is white/very-light colored [color adjective].',
				lojbanText: 'blabi'
			},
			gray: {
				color: 'gray',
				colorHex: '#808080',
				title: 'x1 is gray [color adjective].',
				lojbanText: 'grusi'
			},
			black: {
				color: 'black',
				colorHex: '#000000',
				title: 'x1 is black/extremely dark-colored [color adjective].',
				lojbanText: 'xekri'
			}
		};

		colorMix.tanru = [
		];

		colorMix.append = function(e) {
			// console.log(e);
			colorMix.tanru.push(e.color);

			// if ($('.tanru .color').length > 0)
			// {
			// 	$('.tanru').append('<span> => </span>');
			// }
			// // appendTo
			// var newLabel = $(this).clone().appendTo($('.tanru'));
			// // colors.push($(this).data('color'));
			// recalculateColor();

			// newLabel.on('click', function(e){
			// 	e.preventDefault();

			// 	if ($(this).index() == 0)
			// 	{
			// 		$(this).next('span').detach();
			// 	}
			// 	else
			// 	{
			// 		$(this).prev('span').detach();
			// 	}

			// 	$(this).detach();
			// 	recalculateColor();

			// 	$(this).off('click');
			// });
		};

		colorMix.remove = function(e) {
			delete colorMix.tanru[e.$index];
		}

		// colorMix.remaining = function() {
		// 	var count = 0;
		// 	angular.forEach(colorMix.colors, function(todo) {
		// 		count += todo.done ? 0 : 1;
		// 	});
		// 	return count;
		// };

		// colorMix.archive = function() {
		// 	var oldTodos = colorMix.colors;
		// 	colorMix.colors = [];
		// 	angular.forEach(oldTodos, function(todo) {
		// 		if (!todo.done) colorMix.colors.push(todo);
		// 	});
		// };
	})
;

// $('.label.color').on('click', function(e){
// 	e.preventDefault();


// 	return false;
// });

// recalculateColor = function() {
// 	var jColors = [];
// 	var colorLabels = $('.tanru .color');
// 	var rgbStr;

// 	if(colorLabels.length === 0)
// 	{
// 		return;
// 	}
// 	else
// 	{

// 	}

// 	$('.leftmost-color').css('background-color', $(colorLabels[0]).css('background-color'));
// 	$('.rightmost-color').css('background-color', $(colorLabels[colorLabels.length - 1]).css('background-color'));
// 	$('.result-vague-color')
// 		.css('animation-name', $(colorLabels[colorLabels.length - 1]).data('color'));

// 	colorLabels.each(function() {
// 		jColors.push($.Color($(this).data('color-hex')));

// 		// if this is the last color, have it animate the background toward it
// 		if(colorLabels.length === jColors.length)
// 		{
// 			$('.rightmost-rgb-color')
// 				.text(jColors[jColors.length - 1].toRgbaString());

// 			var n_match = ntc.name(jColors[jColors.length - 1].toHexString());
// 			$('.rightmost-eng-color')
// 				.text(n_match[1]);
// 		}
// 	});

// 	jColors.reverse();
// 	var jColor = null;
// 	for (var i = jColors.length - 1; i >= 0; i--) {
// 		// Ignore duplicates
// 		if(jColor === jColors[i])
// 		{
// 			continue;
// 		}

// 		if (jColor == null)
// 		{
// 			jColor = jColors[i];
// 		}
// 		else
// 		{
// 			// minJColor = jColor.transition(jColors[i], 0.1);
// 			// maxJColor = jColor.transition(jColors[i], 0.5);

// 			// >0.5 as the final color is the most important due to left-to-right notation
// 			jColor = jColor.transition(jColors[i], 0.66);
// 		}
// 	}

// 	rgbStr = jColor.toRgbaString();

// 	$('.result-rgb-color').html(rgbStr);
// 	$('.result-color, .result-vague-color')
// 		.css('background-color', rgbStr)
// 		.css('color', jColor.lightness() > 0.5 ? 'black' : 'white');

// 	var n_match = ntc.name(jColor.toHexString());
// 	$('.result-eng-color').text(n_match[1]);
// };