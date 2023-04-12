const btnNext = document.querySelectorAll('.btn-next');
const prevBtns = document.querySelectorAll(".btn-prev");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;
const parientesArray = [];
const sintomasArray = [];
const internamientosArray = [];
let pacienteFormInfo = {
    "Paciente": [],
    "Pariente": [],
    "Sintoma": [],
    "Internamiento": []
};
let infoTitle = {
    "Paciente": ["Nombre", "Apellido", "Nacimiento", "Cedula", "Nacionalidad", "Tipo de sangre", "Telefono", "Genero"],
    "Pariente": ["Nombre", "Apellido", "Parentezco", "Edad", "Telefono principal"],
    "Sintoma": ["Sintoma", "Tiempo padeciendolo", "Detalles"],
    "Internamiento": ["Fecha", "Hospital", "Diagnostico"]
};

btnNext.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        const formStepActiveStep = document.querySelector('.form-step-active');
        const inputs = formStepActiveStep.querySelectorAll('input, textarea, select');
        let canAdvance = true;

        inputs.forEach(input => {
            if (!input.value) {
                canAdvance = false;
                showError(input, 'Este campo es obligatorio');
            } else {
                hideError(input);
            }
        });

        if (canAdvance == true) {
            const formSteps = document.querySelectorAll('.form-step');
            saveInfo(formStepsNum, inputs);
            formStepsNum++;
            formSteps.forEach((formStep) => {
                formStep.classList.contains("form-step-active") && formStep.classList.remove("form-step-active");
            });
            formSteps[formStepsNum].classList.add("form-step-active");
            updateProgressbar();
            if(formStepsNum == 4){
                generarFormulario();
            }
        }

        e.preventDefault();
    });

    function showError(input, message) {
        const formGroup = input.closest('.input-group');
        let error = formGroup.querySelector('.error-message');

        if (!error) {
            error = document.createElement('span');
            error.classList.add('error-message');
            formGroup.appendChild(error);
        }

        error.textContent = message;
        formGroup.classList.add('error');
    }

    function hideError(input) {
        const formGroup = input.closest('.input-group');
        const error = formGroup.querySelector('.error-message');
        if (error) {
            error.remove();
        }
        formGroup.classList.remove('error');
    }
    const formSteps = document.querySelectorAll('.form-step');
    formSteps.forEach(formStep => {
        const inputs = formStep.querySelectorAll(' input,  textarea,  select');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                if (this.value) {
                    hideError(this);
                } else {
                    const formGroup = this.closest('.input-group');
                    const error = formGroup.querySelector('.error-message');
                    showError(this, 'Este campo es obligatorio');
                }
            });
        });
    });

    function saveInfo(formStepsNum, inputs){
        let table;
        switch (formStepsNum) {
            case 0:
                table = "Paciente";
                break;
            case 1:
                table = "Pariente";
                if(pacienteFormInfo[table].length > 0){
                    pacienteFormInfo[table] = [];
                }
                parientesArray.forEach((pariente) => {
                    pacienteFormInfo[table].push({
                        pacienteID: pacienteFormInfo['Paciente'][3],
                        nombre: pariente.querySelector("input[name = 'nombre']").value,
                        apellido: pariente.querySelector("input[name = 'apellido']").value,
                        parentezco: pariente.querySelector("input[name = 'parentezco']").value,
                        edad: pariente.querySelector("input[name = 'edad']").value,
                        telefonoP: pariente.querySelector("input[name = 'telefono-principal']").value,
                        
                    })
                });
                return;
            case 2:
                table = "Sintoma";
                if(pacienteFormInfo[table].length > 0){
                    pacienteFormInfo[table] = [];
                }
                sintomasArray.forEach((sintoma) => {
                    pacienteFormInfo[table].push({
                        pacienteID: pacienteFormInfo['Paciente'][3],
                        sintoma: sintoma.querySelector("input[name = 'sintoma']").value,
                        tiempo: sintoma.querySelector("input[name = 'tiempo']").value,
                        detalle: sintoma.querySelector("textarea[name = 'detalles']").value
                    })
                });
                return;
            case 3:
                table = "Internamiento";
                if(pacienteFormInfo[table].length > 0){
                    pacienteFormInfo[table] = [];
                }
                internamientosArray.forEach((internamiento) => {
                    pacienteFormInfo[table].push({
                        pacienteID: pacienteFormInfo['Paciente'][3],
                        fecha: internamiento.querySelector("input[name = 'fecha']").value,
                        hospital: internamiento.querySelector("input[name = 'hospital']").value,
                        diagnostico: internamiento.querySelector("textarea[name = 'diagnostico']").value
                    })
                });
                return;
            default:
                break;
        }
        if(pacienteFormInfo[table].length > 0){
            pacienteFormInfo[table] = [];
        }
        inputs.forEach(input => {
            pacienteFormInfo[table].push(input.value);
        });
    }

});
prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepsNum--;
        formSteps.forEach((formStep) => {
            formStep.classList.contains("form-step-active") && formStep.classList.remove("form-step-active");
        });
    
        formSteps[formStepsNum].classList.add("form-step-active");
        updateProgressbar();
    });
});
const parienteForm = document.querySelector('.parientes');
const parienteBase = document.querySelector('.pariente');
const addParienteCont = parienteForm.querySelector('.add-pariente-cont');
const addParienteBtn = addParienteCont.querySelector('#add-pariente-btn');
const parienteContainerdata = parienteBase.querySelector('.container-twin');
const parienteBtnsGroup = parienteBase.querySelector('.btns-group');
if(parientesArray.length === 0){
    parientesArray.push(parienteBase);
}
addParienteBtn.addEventListener('click', () => {
    const hr = document.createElement('hr');
    const pariente = parienteBase.cloneNode(true);
    pariente.classList.add('new');
    pariente.querySelectorAll('input, selector, textarea').forEach((input) => {
        input.id = input.id + "-" + parientesArray.length;
        input.value = "";
    });
    parientesArray.push(pariente);
    if (parientesArray.length > 0) {
        const removeParienteBtn = document.createElement('a');
        const removeParienteBtnCnt = document.createElement('div');
        removeParienteBtn.setAttribute('class', 'removeParienteBtn');
        removeParienteBtn.innerText = 'Nuevo Pariente';
        removeParienteBtnCnt.setAttribute('class', 'removeParienteBtnCtn');
        removeParienteBtnCnt.appendChild(removeParienteBtn);
        if (parienteContainerdata.childElementCount == 2) { 
            pariente.insertBefore(removeParienteBtn, pariente.firstChild);
        }
        removeParienteBtn.addEventListener('click', () => {
            parientesArray.splice(parientesArray.indexOf(pariente), 1);
            pariente.classList.add('exit');
            pariente.addEventListener('animationend', () => {
                pariente.remove();
                if (parientesArray.length === 0) {
                    parienteBtnsGroup.insertBefore(addParienteBtn, parienteBtnsGroup.firstChild);
                }
                parienteContainerdata.style.maxHeight = parienteContainerdata.scrollHeight + "px";
            });
            if (parientesArray.length === 0) {
                parienteBtnsGroup.insertBefore(addParienteBtn, parienteBtnsGroup.firstChild);
            }
        });
    }
    addParienteCont.parentNode.insertBefore(pariente, addParienteCont); 
    pariente.insertBefore(hr, pariente.firstChild);
    pariente.addEventListener('animationend', () => {
        pariente.classList.remove('new');
    });
});
const sintomaForm = document.querySelector('.sintomas');
const sintomaBase = document.querySelector('.sintoma');
const addSintomaCont = sintomaForm.querySelector('.add-sintoma-cont');
const addSintomaBtn = addSintomaCont.querySelector('#add-sintoma-btn');
const sintomaContainerdata = sintomaBase.querySelector('.container-twin');
const sintomaBtnsGroup = sintomaBase.querySelector('.btns-group');
if(sintomasArray.length === 0){
    sintomasArray.push(sintomaBase);
}
addSintomaBtn.addEventListener('click', () => {
    const hr = document.createElement('hr');
    const sintoma = sintomaBase.cloneNode(true);
    sintoma.classList.add('new');
    sintoma.querySelectorAll('input, selector, textarea').forEach((input) => {
        input.id = input.id + "-" + sintomasArray.length;
        input.value = "";
    });
    sintomasArray.push(sintoma);
    if (sintomasArray.length > 0) {
        const removeSintomaBtn = document.createElement('a');
        const removeSintomaBtnCnt = document.createElement('div');
        removeSintomaBtn.setAttribute('class', 'removeSintomaBtn');
        removeSintomaBtn.innerText = 'Otra dificultad';
        removeSintomaBtnCnt.setAttribute('class', 'removeSintomaBtnCtn');
        removeSintomaBtnCnt.appendChild(removeSintomaBtn);
        if (sintomaContainerdata.childElementCount == 2) { 
            sintoma.insertBefore(removeSintomaBtn, sintoma.firstChild);
        }
        removeSintomaBtn.addEventListener('click', () => {
            sintomasArray.splice(sintomasArray.indexOf(sintoma), 1);
            sintoma.classList.add('exit');
            sintoma.addEventListener('animationend', () => {
                sintoma.remove();
                if (sintomasArray.length === 0) {
                    sintomaBtnsGroup.insertBefore(addSintomaBtn, sintomaBtnsGroup.firstChild);
                }
                sintomaContainerdata.style.maxHeight = sintomaContainerdata.scrollHeight + "px";
            });

            if (sintomasArray.length === 0) {
                sintomaBtnsGroup.insertBefore(addSintomaBtn, sintomaBtnsGroup.firstChild);
            }
        });
    }
    addSintomaCont.parentNode.insertBefore(sintoma, addSintomaCont); 
    sintoma.insertBefore(hr, sintoma.firstChild);
    sintoma.addEventListener('animationend', () => {
        sintoma.classList.remove('new');
    });
});
const internamientoForm = document.querySelector('.internamientos');
const internamientoBase = document.querySelector('.internamiento');
const addInternamientoCont = internamientoForm.querySelector('.add-internamiento-cont');
const addInternamientoBtn = addInternamientoCont.querySelector('#add-internamiento-btn');
const internamientoContainerdata = internamientoBase.querySelector('.container-twin');
const internamientoBtnsGroup = internamientoBase.querySelector('.btns-group');
if(internamientosArray.length === 0){
    internamientosArray.push(internamientoBase);
}
addInternamientoBtn.addEventListener('click', () => {
    const hr = document.createElement('hr');
    const internamiento = internamientoBase.cloneNode(true);
    internamiento.classList.add('new');
    internamiento.querySelectorAll('input, selector, textarea').forEach((input) => {
        input.id = input.id + "-" + internamientosArray.length;
        input.value = "";
    });
    internamientosArray.push(internamiento);
    if (internamientosArray.length > 0) {
        const removeInternamientoBtn = document.createElement('a');
        const removeInternamientoBtnCnt = document.createElement('div');
        removeInternamientoBtn.setAttribute('class', 'removeInternamientoBtn');
        removeInternamientoBtn.innerText = 'Otraveces interno';
        removeInternamientoBtnCnt.setAttribute('class', 'removeInternamientoBtnCtn');
        removeInternamientoBtnCnt.appendChild(removeInternamientoBtn);
        if (internamientoContainerdata.childElementCount == 2) { 
            internamiento.insertBefore(removeInternamientoBtn, internamiento.firstChild);
        }
        removeInternamientoBtn.addEventListener('click', () => {
            internamientosArray.splice(internamientosArray.indexOf(internamiento), 1);
            internamiento.classList.add('exit');
            internamiento.addEventListener('animationend', () => {
                internamiento.remove();
                if (internamientosArray.length === 0) {
                    internamientoBtnsGroup.insertBefore(addInternamientoBtn, internamientoBtnsGroup.firstChild);
                }
                internamientoContainerdata.style.maxHeight = internamientoContainerdata.scrollHeight + "px";
            });

            if (internamientosArray.length === 0) {
                internamientoBtnsGroup.insertBefore(addInternamientoBtn, internamientoBtnsGroup.firstChild);
            }
        });
    }
    addInternamientoCont.parentNode.insertBefore(internamiento, addInternamientoCont); 
    internamiento.insertBefore(hr, internamiento.firstChild);
    internamiento.addEventListener('animationend', () => {
        internamiento.classList.remove('new');
    });
});

function updateProgressbar() {
    let porcent;
    progressSteps.forEach((progressStep, idx) => {
        if (idx < formStepsNum + 1) {
            progressStep.classList.add("progress-step-active");
        } else {
            progressStep.classList.remove("progress-step-active");
        }
    });
    if(formStepsNum == 1){
        porcent = 110;
    }else if(formStepsNum == 2){
        porcent = 102;
    }else{
        porcent = 100;
    }
    const progressActive = document.querySelectorAll(".progress-step-active");
    progress.style.width = ((progressActive.length - 1) / (progressSteps.length - 1)) * porcent + "%";
}
function generarFormulario(){
    const page = document.querySelector(".last-step");
    const children = page.querySelectorAll('.info-section')
    if(children){
        children.forEach((child) => {
            child.remove();
        })
    }
    const btnsGroup = document.querySelector('.review-btns');
    
    for(let key in pacienteFormInfo){
        const title = document.createElement('h2');
        let txt = document.createTextNode(`Informacion ${key}`);
        const father = document.createElement('div');
        title.appendChild(txt);
        father.setAttribute('class', 'info-section');
        father.appendChild(title);
        for(let i = 0; i < pacienteFormInfo[key].length; i++){
            const container = document.createElement('div');
            container.id = "container-" + i;
            if(key === 'Sintoma' || key === 'Pariente' || key === 'Internamiento'){
                let multiples = pacienteFormInfo[key][i];
                let numPropiedades = Object.keys(multiples).length;

                for(let j = 1; j < numPropiedades; j++){
                    j = generarCansilla(container, key, i, j);
                }
            }else{
                i = generarCansilla(container, key, i);
            }
            father.appendChild(container);
        }
        page.insertBefore(father, btnsGroup);
    }
}
function generarCansilla(container, key, i, j){
    const infoRow = document.createElement('div');
    const twin1 = document.createElement('div');
    const twin2 = document.createElement('div');
    const label1 = document.createElement('label');
    const p1 = document.createElement('p');
    const label2 = document.createElement('label');
    const p2 = document.createElement('p');
    const hr = document.createElement('hr');
    hr.setAttribute('class', 'division');
    let paciente;
    let title;
    let large;
    if(j>=0) {
        paciente = Object.values(pacienteFormInfo[key][i]);
        title = j;
        large = Object.keys(pacienteFormInfo[key][i]).length
    }else{
        paciente = pacienteFormInfo[key];
        title = i;
        large = pacienteFormInfo[key].length;
    }

    infoRow.setAttribute('class', 'container-twin last-container');
    twin1.setAttribute('class', 'input-group last');
    label1.appendChild(document.createTextNode(j>=0?infoTitle[key][title-1]:infoTitle[key][title]));
    p1.appendChild(document.createTextNode(j>=0?paciente[title]:paciente[title]));
    twin1.appendChild(label1);
    twin1.appendChild(p1);
    infoRow.appendChild(twin1);
    if(title < large-1){
        title++;
        twin2.setAttribute('class', 'input-group last');
        label2.appendChild(document.createTextNode(j>=0?infoTitle[key][title-1]:infoTitle[key][title]));
        p2.appendChild(document.createTextNode(j>=0?paciente[title]:paciente[title]));
        twin2.appendChild(label2);
        twin2.appendChild(p2);
        infoRow.appendChild(twin2);
    }else{
        twin1.setAttribute('class', 'input-group solo');
    }
    container.appendChild(infoRow);
    if((twin1.classList.contains('solo') || infoTitle[key][title-1] == '') 
    && (key === "Sintoma" || key == 'Pariente' || key === 'Internamiento') && i < pacienteFormInfo[key].length-1)
    {
        container.appendChild(hr);
    }
    return title;
}