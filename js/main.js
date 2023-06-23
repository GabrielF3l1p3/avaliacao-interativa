const noteResult = document.querySelector('span');
const sections = document.querySelectorAll('section');
const numeros = document.querySelectorAll('.num');
const btnSubmit = document.querySelector('.submit');

function styleSelect(btn) {
    btn.classList.toggle('button-active');
}

document.addEventListener('click', function(ev) {
    const el = ev.target
    if(el.classList.contains('num')) {
        for(let numero of numeros) {
            if(numero.classList.contains('button-active')) {
                numero.classList.remove('button-active');
            }
        }
        styleSelect(el);
    }
});

function submit() {
    for(let section of sections) {
        section.classList.toggle('display-none');
    }
}

function isValid() {
    const numValid = [];
    for(let numero of numeros) {
        numValid.push(numero);
    }
    numValid.forEach(function(e) {
        if(e.classList.contains('button-active')) {
            submit();
        } 
    })

    for(let errorText of document.querySelectorAll('.error-text')) {
        errorText.remove();
    }

    createError();
}

function createError() {
    const div = document.createElement('div');
    div.textContent = 'Você precisa adicionar uma nota!';
    div.setAttribute('class', 'error-text');
    btnSubmit.insertAdjacentElement('afterend', div);
}

function addNote() {
    for(let numero of numeros) {
        if(numero.classList.contains('button-active')) {
            noteResult.innerText = numero.value;
        }
    }
}


btnSubmit.addEventListener('click', function() {
    isValid();
    addNote();
});


