document.querySelector('.cross').style.display = 'none';
document.querySelector('.controller').addEventListener('click', () => {
    document.querySelector('.bar').classList.toggle('barGo');
    if (document.querySelector('.bar').classList.contains('barGo')) {
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    }
    else {

        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline';
        }, 300)
        document.querySelector('.ham').style.display = 'none';
    }
})

// function move() {
//     var elem = document.getElementById("dynbar");
//     var width = 20;
//     var id = setInterval(frame, 15);
//     function frame() {
//         if (width >= 90) {
//             clearInterval(id);
//         } else {
//             width = width + 0.1;
//             elem.style.width = width + '%';
//             elem.innerHTML = abs(width * 1 + '%');
//         }
//     }
// }