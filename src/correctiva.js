const mForm = document.getElementById('modalForm');
const mTitle = document.getElementById('titleForm');
const esAnonimo = document.getElementById('es_anonimo');
const showDirection = document.getElementById('showDirection');
const formAdoption = document.getElementById('formAdoption');
const formComplaint = document.getElementById('formComplaint');
const btnSend = document.getElementById('send');
const optionalElems = document.getElementsByClassName('optional');
let currentForm;

mForm.addEventListener('show.bs.modal', e => {
    const element = e.relatedTarget;
    const data = element.dataset;
    currentForm = document.getElementById(data.form);

    mTitle.innerText = data.title;
    currentForm.classList.remove('d-none');
    currentForm.reset();
});

mForm.addEventListener('hidden.bs.modal', _ => {
    formAdoption.classList.add('d-none');
    formComplaint.classList.add('d-none');
});

btnSend.addEventListener('click', e => {
    e.preventDefault();
    currentForm.getElementsByTagName('button')[0].click();
});

formAdoption.addEventListener('submit', e => {
    e.preventDefault();
    /*const data = {

    };*/
    btnSend.disabled = true;
    const formData = new FormData(formAdoption);
    const queryString = new URLSearchParams(formData).toString()
    const url = 'http://40.122.237.236:8080/FormularioAdopcion?' + queryString;
    fetch(url, {
        method: 'GET',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            'mode': 'no-cors'
        },
        // body: formData
    }).then(res => {
        console.log(res);
        if(res.ok) {
            return res.json();
        }
        throw new Error('Ocurrió un error al intentar almacenar la información. Por favor, inténtelo nuevamente más tarde.');
    }).then(data => {
        Swal.fire('¡Éxito!', mTitle, 'error');
        btnSend.disabled = false;
    }).catch(e => {
        Swal.fire('Error', 'Ocurrió el siguiente error:\n' + e.message, 'error');
        btnSend.disabled = false;
    });
});

formComplaint.addEventListener('submit', e => {
    e.preventDefault();
    /*const data = {

    };*/
    btnSend.disabled = true;
    const formData = new FormData(formComplaint);
    const queryString = new URLSearchParams(formData).toString()
    const url = 'http://40.122.237.236:8080/FormularioDenuncia?' + queryString;
    fetch(url, {
        method: 'GET',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            'mode': 'no-cors'
        },
        // body: formData
    }).then(res => {
        console.log(res);
        if(res.ok) {
            return res.json();
        }
        throw new Error('Ocurrió un error al intentar almacenar la información. Por favor, inténtelo nuevamente más tarde.');
    }).then(data => {
        console.log(data);
        Swal.fire('¡Éxito!', mTitle, 'error');
        btnSend.disabled = false;
    }).catch(e => {
        Swal.fire('Error', 'Ocurrió el siguiente error:\n' + e.message, 'error');
        btnSend.disabled = false;
    });
});

esAnonimo.addEventListener('click', () => {
    showDirection.classList.toggle('d-none');
    for(let i in optionalElems) {
        optionalElems[i].required = esAnonimo.checked;
    }
});