let character = document.getElementById('character')! as HTMLInputElement;
let block = document.getElementById('block')! as HTMLInputElement;

function jump() {
    character.classList.add('animate')
    setTimeout(function () {
        character.classList.remove('animate')
    }, 500)
}

let crash = setInterval(function () {
    // parseInt pt vreau doar valaorea fara px
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    console.log(characterTop)
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = 'none';
        block.style.display = 'none';
        alert('you lost')
    }
}, 10)
window.addEventListener('click', function () {
    jump();
})