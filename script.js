// Change link of poll
polls = ["https://forms.gle/zLwEhGLg7Sxp3dPx9"]

var pollLink = document.querySelector('#poll-link');

pollLink.onclick = function() {
    pollLink.innerText = '📝Take another poll'
    window.open(polls[Math.floor(Math.random() * polls.length)], '_blank');
    document.getElementById("results").style.display = 'block';
    document.getElementById("results").scrollIntoView();
}

// Globe
const elem = document.getElementById('globeViz');
const globe = Globe()
    .backgroundColor('white')
    .globeImageUrl("img/terrain.jpg")
    .bumpImageUrl("img/bump2.png")
    .atmosphereColor("green")
    .showGraticules(true)
    .showAtmosphere(true)
    (elem);

 globe.pointOfView({
    lat: 0.5,
    lng: 0.5,
    altitude: 4
})
globe.controls().autoRotate = true;
globe.controls().autoRotateSpeed = -1.8;


    