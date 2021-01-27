var character = document.getElementById('character');
var block = document.getElementById('block');
function jump() {
    character.classList.add('animate');
    setTimeout(function () {
        character.classList.remove('animate');
    }, 500);
}
var crash = setInterval(function () {
    // parseInt pt vreau doar valaorea fara px
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    console.log(characterTop);
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = 'none';
        block.style.display = 'none';
        alert('you lost');
    }
}, 10);
window.addEventListener('click', function () {
    jump();
});
