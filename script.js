const outer_container = document.createElement('div');
outer_container.classList.add('outer_container');
document.body.appendChild(outer_container);


for (let j = 0; j < 15; j++) {
    const container = document.createElement('div');
    container.classList.add('container');

    for (let i = 0; i < 15; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        container.appendChild(div);
    }
    outer_container.appendChild(container);
}


// --------hover over the pixel------------

let pixels = document.querySelectorAll('.pixel');

pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', () => {
        pixel.style.backgroundColor = 'black';
    });
    // pixel.addEventListener('mouseout', () => {
    //     pixel.style.backgroundColor = '';
    // })
})

