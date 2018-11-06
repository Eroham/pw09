window.onload=function(){

	var colorAmarillo = function (){
	this.style.background = "yellow";
}
var colorBlanco = function (){
	this.style.background = "white";
}

var operando1 = document.getElementById('operando1')
operando1.addEventListener("focus", colorAmarillo)
operando1.addEventListener("focusout", colorBlanco)

var	operador = ""
var numeros = function () {
	var valor= this.value;
	if (operador=="") { //operando1
		var valorInput=document.getElementById("operando1").value;
		if (valorInput=="0") {
			document.getElementById("operando1").value="";
		}

		document.getElementById("operando1").valuet=valor;
	}else { // operando1
		var valorInput=document.getElementById("operando2").value;
		if (valorInput=="0") {
			document.getElementById("operando2").value="";
		}
		document.getElementById("operando2").valuet=valor;
	}
}
	var operadores = function(){
		operador = this.value
	}

	var resultadoigual = function(){
		oper1=document.getElementById('operando1').value;
		oper2=document.getElementById('operando2').value;
		document.getElementById('resultado').value=eval(oper1+operador+oper2)

	}

	var reinicio = function(){
		document.getElementById('operando1').value="0"
		document.getElementById('operando2').value="0"
		document.getElementById('resultado').value="0"
		operador=""

	}

	var uno=document.getElementById("uno")
	uno.addEventListener("click",numeros)
	var dos=document.getElementById("dos")
	dos.addEventListener("click",numeros)
	var tres=document.getElementById("tres")
	tres.addEventListener("click",numeros)
	var cuatro=document.getElementById("cuatro")
	cuatro.addEventListener("click",numeros)
	var cinco=document.getElementById("cinco")
	cinco.addEventListener("click",numeros)
	var seis=document.getElementById("seis")
	seis.addEventListener("click",numeros)
	var siete=document.getElementById("siete")
	siete.addEventListener("click",numeros)
	var ocho=document.getElementById("ocho")
	ocho.addEventListener("click",numeros)
	var nueve=document.getElementById("nueve")
	nueve.addEventListener("click",numeros)
	var cero=document.getElementById("cero")
	cero.addEventListener("click",numeros)
	var suma=document.getElementById("suma")
	suma.addEventListener("click",suma)
	var resta=document.getElementById("resta")
	resta.addEventListener("click",resta)
	var multiplicacion=document.getElementById("multiplicacion")
	multiplicacion.addEventListener("click",multiplicacion)
	var division=document.getElementById("division")
	division.addEventListener("click",division)
	var igual=document.getElementById("igual")
	igual.addEventListener("click",igual)


	operando1.addEventListener('focus' colorAmarillo);
	operando1.addEventListener('focusout' colorBlanco);
	operando2.addEventListener('focus' colorAmarillo);
	operando2.addEventListener('focusout' colorBlanco);
	resultado.addEventListener('focus' colorAmarillo);
	resultado.addEventListener('focusout' colorBlanco);

	cero.addEventListener('click',numeros);
	uno.addEventListener('click',numeros);
	dos.addEventListener('click',numeros);
	tres.addEventListener('click',numeros);
	cuatro.addEventListener('click',numeros);
	cinco.addEventListener('click',numeros);
	seis.addEventListener('click',numeros);
	siete.addEventListener('click',numeros);
	ocho.addEventListener('click',numeros);
	nueve.addEventListener('click',numeros);


	suma.addEventListener('click',operadores);
	resta.addEventListener('click',operadores);
	multiplicacion.addEventListener('click',operadores);
	division.addEventListener('click',operadores);

	igual.addEventListener('click',resultadoigual);
	reiniciar.addEventListener('click',reinicio);




	

}
