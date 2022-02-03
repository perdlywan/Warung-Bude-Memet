let typed = new Typed('.type', {
            strings: ['Sarapan ?', 'Makan Siang ?',
                'Makan Malam ?', 'Di Warung Bude Memet Aja'
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            });
   
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const ToggleMenu = document.querySelector('.menu-toggle');
    ToggleMenu.classList.toggle("sticky", window.scrollY > 100);
    header.classList.toggle("sticky", window.scrollY > 100);
});

window.addEventListener('click', function() {
    const menuToggle = document.querySelector('.menu-toggle input');
    const nav = document.querySelector('nav .navigation');
    nav.classList.toggle('slide');
});




