// Change link of poll
polls = ["https://forms.gle/zLwEhGLg7Sxp3dPx9"]

var pollLink = document.querySelector('#poll-link');

pollLink.onclick = function() {
    pollLink.innerText = '📝Take another poll'
    window.open(polls[Math.floor(Math.random() * polls.length)], '_blank');
    document.getElementById("results").style.display = 'block';
    document.getElementById("results").scrollIntoView();
}

// Scroll and show results


