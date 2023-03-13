document.addEventListener('DOMContentLoaded', function() {
    function validarCedula(cedula) {
        cedula = cedula.replace(/-/g, '');
        if (cedula.length !== 11) {
          	return "Cédula inválida";
        }

        const digitos = cedula.substring(0, 10);
        let suma = 0;
        for (let i = 0; i < digitos.length; i++) {
            // let num = i+1;
			let digito = parseInt(digitos[i], 10);
			if (i % 2 != 0) {
				digito = digito * 2;
				if (digito > 9) {
					digito -= 9;
				}
			}
			suma += digito;
        }
		console.log(suma);
		console.log(suma%10);
		let verificadorCalculado = 0;
        suma%10==0
			? verificadorCalculado = suma % 10
			: verificadorCalculado = (10 - (suma % 10));
		console.log(verificadorCalculado)
        const verificadorCedula = parseInt(cedula[10], 11);
        if (verificadorCalculado === verificadorCedula) {
          	return "Cédula válida";
        } else {
          	return "Cédula inválida";
        }
    }

    const botonValidar = document.getElementById("validar");
    const inputCedula = document.getElementById('cedula');
    const resultado = document.getElementById('resultado');
    const aviso = document.getElementById('aviso');
  
    botonValidar.addEventListener("click", function() {
        const cedula = inputCedula.value;
        const mensaje = validarCedula(cedula);
		console.log(mensaje);
        if(mensaje == "Cédula válida" && cedula != ''){
			resultado.textContent = mensaje;
            resultado.style.display = "block";
            resultado.style.color = "green";
            aviso.style.display = "none";
        }else if(cedula === ""){
			resultado.textContent = "La cédula no puede estar en blanco";
            resultado.style.color = "blue";
            resultado.style.display = "block";
			aviso.style.display = "none";
		}else{
			resultado.textContent = mensaje;
            resultado.style.color = "yellow";
            resultado.style.display = "block";
            aviso.textContent = "Verifique la cédula o ingrese otra";
            aviso.style.color = "yellow";
            aviso.style.display = "block";

        }
    });

	inputCedula.addEventListener("keypress", function(event){
		if (event.key == "Enter") {
			event.preventDefault();
			botonValidar.click();
		}
	});

	inputCedula.addEventListener('keydown', function(event) {
		if (!/[\d]/.test(event.key) && event.key !== 'Enter' && event.key !== 'Backspace' && event.key !== 'Delete' && event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
		  event.preventDefault();
		}
	  });

	inputCedula.addEventListener('input', function(event) {
		let valor = this.value;
		valor = valor.replace(/-/g, '');
		if (valor.length > 3) {
		  valor = valor.slice(0, 3) + '-' + valor.slice(3);
		}
		if (valor.length > 11) {
		  valor = valor.slice(0, 11) + '-' + valor.slice(11);
		}
		this.value = valor;
	  });
});