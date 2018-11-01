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
		var valorInput=document.getElement("operando1").value;
		if (valorInput=="0") {
			document.getElementById("operando1").value="";
		}

		document.getElementById("operando1").valuet=valor;
	}else { // operando1
		if (operador=="") {
		var valorInput=document.getElement("operando2").value;
		if (valorInput=="0") {
			document.getElementById("operando2").value="";
		}
		document.getElementById("operando2").valuet=valor;
	}

	var uno=document.getElementById("uno")
	uno.addEventListener("click",numeros)
	var dos=document.getElementById("dos")
	uno.addEventListener("click",numeros)
	var tres=document.getElementById("tres")
	uno.addEventListener("click",numeros)
	var cuatro=document.getElementById("cuatro")
	uno.addEventListener("click",numeros)
	var cinco=document.getElementById("cinco")
	uno.addEventListener("click",numeros)
	var seis=document.getElementById("seis")
	uno.addEventListener("click",numeros)
	var siete=document.getElementById("siete")
	uno.addEventListener("click",numeros)
	var ocho=document.getElementById("ocho")
	uno.addEventListener("click",numeros)
	var nueve=document.getElementById("nueve")
	uno.addEventListener("click",numeros)
	

}
