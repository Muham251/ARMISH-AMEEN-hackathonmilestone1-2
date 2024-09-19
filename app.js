var buttonvname = document.getElementById('toggle-button');
var experience = document.getElementById('experience');
buttonvname.addEventListener('click', function () {
    if (experience.style.display === 'none') {
        experience.style.display = 'block';
    }
    else {
        experience.style.display = 'none';
    }
});
