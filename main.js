const buttons = document.querySelectorAll('.button, .home-button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('You clicked: ' + button.textContent);
    });
});

const textElements = document.querySelectorAll('h1, h2, h3, p, a');

textElements.forEach(element => {

    element.addEventListener('mouseover', () => {
        element.style.color = 'red'; 
    });

    element.addEventListener('mouseout', () => {
        element.style.color = ''; 
    });
});


const header = document.querySelector('header');


window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; 
    header.style.transform = `translateY(${scrollPosition}px)`; 
});


