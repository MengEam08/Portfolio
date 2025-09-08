const typed = new Typed('.typed', {
    strings: document.querySelector('.typed').dataset.typedItems.split(','),
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });