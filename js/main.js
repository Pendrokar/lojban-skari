angular.module('colorMixer', [])
	.controller('ColorMixerController', function() {
		var colorMix = this;
		colorMix.colors = {
			red: {
				colorCss: 'red',
				colorHex: '#ff0000',
				title: 'x1 is red/crimson/ruddy [color adjective].',
				lojbanText: 'xunre'
			},
			brown: {
				colorCss: 'brown',
				colorHex: '#805400',
				title: 'x1 is brown/tan [color adjective].',
				lojbanText: 'bunre'
			},
			orange: {
				colorCss: 'orange',
				colorHex: '#ff8000',
				title: 'x1 is orange [color adjective].',
				lojbanText: 'narju'
			},
			yellow: {
				colorCss: 'yellow',
				colorHex: '#ffff00',
				title: 'x1 is yellow/golden [color adjective].',
				lojbanText: 'pelxu'
			},
			green: {
				colorCss: 'green',
				colorHex: '#00ff00',
				title: 'x1 is green/verdant [color adjective].',
				lojbanText: 'crino'
			},
			cyan: {
				colorCss: 'cyan',
				colorHex: '#00ffff',
				title: 'x1 is cyan/turquoise/greenish-blue [color adjective].',
				lojbanText: 'cicna'
			},
			blue: {
				colorCss: 'blue',
				colorHex: '#0000ff',
				title: 'x1 is blue [color adjective].',
				lojbanText: 'blanu'
			},
			magenta: {
				colorCss: 'magenta',
				colorHex: '#ff00ff',
				title: 'x1 is magenta/fuchsia/purplish-red [color adjective].',
				lojbanText: 'nukni'
			},
			purple: {
				colorCss: 'purple',
				colorHex: '#800080',
				title: 'x1 is purple/violet [color adjective].',
				lojbanText: 'zirpu'
			},
			white: {
				colorCss: 'white',
				colorHex: '#ffffff',
				title: 'x1 is white/very-light colored [color adjective].',
				lojbanText: 'blabi',
				newline: true
			},
			gray: {
				colorCss: 'gray',
				colorHex: '#808080',
				title: 'x1 is gray [color adjective].',
				lojbanText: 'grusi'
			},
			black: {
				colorCss: 'black',
				colorHex: '#000000',
				title: 'x1 is black/extremely dark-colored [color adjective].',
				lojbanText: 'xekri'
			}
		};

		colorMix.tanru = [
		];

		colorMix.result = {
			leftmost: {
				title: 'White',
				colorCss: ''
			},
			direct: {
				title: 'White',
				colorCss: 'black',
				hexColor: '#FFF',
				rgbColor: ''
			},
			vague: {
				title: 'White',
				hexColor: '#FFF',
				colorCss: ''
			},
			rightmost: {
				title: 'White',
				colorCss: '',
				rgbColor: ''
			}
		}

		colorMix.append = function(e) {
			colorMix.tanru.push(e.color);

			recalculateColor();
		};

		colorMix.remove = function(e) {
			colorMix.tanru.splice(e.$index, 1);

			recalculateColor();
		}

		recalculateColor = function() {
			// jQuery colors
			var jColors = [];
			var rgbStr;
			if(colorMix.tanru.length === 0)
			{
				return;
			}

			let tanruKeys = Object.keys(colorMix.tanru);

			// Set leftmost color
			colorMix.result.leftmost.colorCss = colorMix.tanru[tanruKeys[0]].colorCss;
			// Set rightmost color
			colorMix.result.rightmost.colorCss = colorMix.tanru[tanruKeys.pop()].colorCss;
			// Set vague color animation the same as the rightmost color
			colorMix.result.vague.colorCss = colorMix.result.rightmost.colorCss;


			// Iterate
			for (let i in colorMix.tanru) {
				let jColor = $.Color(colorMix.tanru[i].colorHex);
				jColors.push(jColor);

				colorMix.result.rightmost.rgbColor = jColor.toRgbaString();
				colorMix.result.rightmost.title = ntc.name(jColor.toHexString())[1];
			}

			jColors.reverse();
			let jColor = null;
			for (var i = jColors.length - 1; i >= 0; i--) {
				// Ignore duplicates
				if(jColor === jColors[i])
				{
					continue;
				}

				if (jColor == null)
				{
					jColor = jColors[i];
				}
				else
				{
					// minJColor = jColor.transition(jColors[i], 0.1);
					// maxJColor = jColor.transition(jColors[i], 0.5);

					// >0.5 as the final color is the most important due to left-to-right notation
					jColor = jColor.transition(jColors[i], 0.66);
				}
			}

			rgbStr = jColor.toRgbaString();

			colorMix.result.direct.rgbColor = rgbStr;
			colorMix.result.direct.colorCss = (jColor.lightness() > 0.5) ? 'black' : 'white';
			colorMix.result.direct.title = ntc.name(jColor.toHexString())[1];
		};
	})
;