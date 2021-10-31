// Change link of poll
polls = [
    "https://forms.gle/ZoyBiYgdXYMDjx3Z7",
    "https://forms.gle/D9NPdqZQ73p3YGVF9",
    "https://forms.gle/CdUigPtZSgsfGtt29",
    "https://forms.gle/wEWXKsWUTCsH7tLW9",
    "https://forms.gle/Njpbbw3vdWJ7akDaA",
    "https://forms.gle/w8GJe5PgR8xVKhn97"
]

var pollLink = document.querySelector('#poll-link');

pollLink.onclick = function() {
    pollLink.innerText = '📝Take another poll'

    let randomPoll = Math.floor(Math.random() * polls.length)
    window.open(polls[randomPoll], '_blank');
    polls.splice(randomPoll, 1);

    if(polls.length == 0){
        pollLink.innerText = 'Congratulations! You have taken every poll!'
        pollLink.classList.add("fixed")
        pollLink.disabled = true;
    }

    document.getElementById("thank-you").style.display = 'block';
    focusOnResults();
}


function focusOnResults(){
    document.getElementById("results").style.display = 'block';
    document.getElementById("poll-link").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
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


    