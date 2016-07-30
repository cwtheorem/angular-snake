angular.module('snake', [])
	.directive('snake', function() {
		// Runs during compile
		return {
			name: 'snake',
			scope: {},
			restrict: 'A',
			template: '<canvas style="border: 1px solid #000000;"></canvas>',
			replace: true,
			link: function($scope, iElm, iAttrs, controller) {
				var width = iElm[0].width;
				var height = iElm[0].height;
				var x = width/2, y = height/2;
				var ctx = iElm[0].getContext('2d');
				var snakeLength = 12;
				var snakeArray = [];
				for( i=0; i<snakeLength; i++ ) {
					snakeArray[i] = [width/2, height/2];
				}
				function move() {
					ctx.fillStyle = "white";
					for( i=0; i<snakeLength; i++ ) {
						ctx.fillRect(snakeArray[i][0], snakeArray[i][1], 10, 10);
					}
					var head = snakeArray[0];
					snakeArray.pop();
					do {
						var direction = Math.floor(Math.random() * 4);
						if( direction === 0 ) { x = head[0] + 10; y = head[1]; }
						if( direction === 1 ) { y = head[1] + 10; x = head[0]; }
						if( direction === 2 ) { x = head[0] - 10; y = head[1]; }
						if( direction === 3 ) { y = head[1] - 10; x = head[0]; }
					} while( ((x === snakeArray[1][0]) && (y === snakeArray[1][1])) ||
						(x < 0) || (y < 0) || (x > width - 10) || (y > height - 10) );
					snakeArray.unshift([x,y]);
					ctx.fillStyle = "blue";
					for( i=1; i<snakeLength; i++ ) {
						ctx.fillRect(snakeArray[i][0], snakeArray[i][1], 10, 10);
					}
					ctx.fillStyle = "red";
					ctx.fillRect(snakeArray[0][0], snakeArray[0][1], 10, 10);
					setTimeout(move, 100);
				}
				setTimeout(move, 100);
			}
		};
	});