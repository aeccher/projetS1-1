function carrousel() {

    var images155 = document.querySelectorAll('.image');
    let d = 2000;
    let delta = 1000;

    images.forEach(function(img,indice) {
        img.style.zIndex = images.length - indice;
    });

    let anime = anime.timeline({
        loop: true,
        delay: 0
    });

    anime.add({
        targets: images,
        translateX: [{value: '500', duration: d},
                     {value: '-500', duration: 0, delay: function(img,ind) {
                         if (ind == 0) return (4*delta)+(3*d);
                         if (ind == 1) return (3*delta)+(2*d);
                         if (ind == 2) return (2*delta)+d;
                         if (ind == 3) return delta;
                         return 0;
                     }},
                     {value: '0', duration: function(img,ind) {
                         if (ind == 4) return 0;
                         return d;
                     }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2*delta)+d;
            if (ind == 2) return (3*delta)+(2*d);
            if (ind == 3) return (4*delta)+(3*d);
            return (5*delta)+(4*d);
        }
    });
	
}

function monterLegende() {
	let texte13 = document.querySelector('.texte13');
	return anime({
		targets: texte13, 
		translateY: '-5em', 
		autoplay: false,
		easing: 'linear',
		duration: 200,
		update: function() {
			texte13.style.display = "block";
		}
	}).play;
}

function descendreLegende() {
	return anime({
		targets: '.texte13', 
		translateY: '5em',
		autoplay:false,
		easing: 'linear',
		duration: 200
	}).play;
}