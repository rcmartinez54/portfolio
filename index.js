// function fadeInHeroHeading() {
//     (function () {
// 		$('.introduction h1').fadeIn(500, function () {
// 			$('.introduction h2').delay(1000).fadeIn(500);
// 		});
// 	})();
// }

// $(fadeInHeroHeading);

// $(

//     (function () {
// 		$('.introduction h1').fadeIn(500, function () {
// 			$('.introduction h2').delay(1000).fadeIn(500);
// 		});
// 	})();

// );

function fadeInIntro () {
    $('.hero-container h1').fadeIn(500, function () {
        $('.hero-container h2').delay(1000).fadeIn(500);
    });
    console.log('hello');
}

$(fadeInIntro);