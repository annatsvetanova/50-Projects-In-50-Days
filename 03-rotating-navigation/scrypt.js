let open = document.getElementById('open');
let close = document.getElementById('close');
let comntainer = document.querySelector('.container');


open.addEventListener(('click'), () => comntainer.classList.add('show-nav'));

close.addEventListener(('click'), () => comntainer.classList.remove('show-nav'));