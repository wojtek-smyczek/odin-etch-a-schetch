let outer_container;

function drawTheCanvas(size) {
    if (outer_container) {
        outer_container.remove();
    }

    outer_container = document.createElement('div');
    outer_container.classList.add('outer_container');
    document.body.appendChild(outer_container);

    for (let j = 0; j < size; j++) {
        const container = document.createElement('div');
        container.classList.add('container');

        for (let i = 0; i < size; i++) {
            const div = document.createElement('div');
            div.classList.add('pixel');
            container.appendChild(div);
        }
        outer_container.appendChild(container);
    }
    addPixelHoverEffect();
}

// --------hover over the pixel------------
function addPixelHoverEffect() {

    let pixels = document.querySelectorAll('.pixel');

    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = 'black';
        });
    })
}

// ----------button enter number of boxes---------------

let button = document.querySelector('.button1');
button.addEventListener('click', () => {

    let personInput = prompt("Enter the number of desired squares!");

    if (personInput == null || personInput == "" || personInput > 100 || personInput < 0) {
        alert("Invalid");
    } else {
        drawTheCanvas(Number(personInput));
    }
})

