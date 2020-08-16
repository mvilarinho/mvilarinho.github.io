
let rows=null;
let digits,searchBox;
let indexP;
let numDecs;
function preload() {

	var file='pi106.txt';
	numDecs='primeiro millón'
	rows=loadStrings(file);

}
function busca() {

	valor=searchBox.value();

	let index=digits.substring(1,digits.lenght).indexOf(valor)
	if(index>0){
		output="Esta secuencia aparece na posición <span style='color:#40ff00'> "+index+"</span> despois do punto decimal."
		//Recupera a cadea anterior e posterior
		secuencia.html(getSecuencia(index,index+valor.length))	
		//secuencia.elt.style(opacity,1)
	}
	else {
		output="Esta secuencia non aparece no <span style='color:#40ff00'> "+numDecs+"</span> de decimais de π."
		secuencia.html(getSecuencia(0,25))
	}
	indexP.html(output);

	

}
function setup() {

	noCanvas();
 
	parrafo=select("#cosas")
	digits=rows[0];

	searchBox=createInput("");
	searchBox.size(400)
	searchBox.parent("game");
	searchBox.input(busca);
	
	indexP=createP("");
	indexP.parent("game");
	searchBox.elt.focus();

	secuencia=createElement('h2')
	secuencia.parent("game");
	secuencia.html(getSecuencia(0,25))
}

function getSecuencia(inicio,fin) {

	let cadea=""
	let N=10; //díxitos que imprime antes/despois
	let n0,n1; 
	if (inicio>0){
		cadea=digits.substring(inicio+1,fin+1);
		n0=max(0,inicio-N);
		n1=min(fin+N,digits.length)
		let precadea=digits.substring(n0,inicio+1);
		let postcadea=digits.substring(fin+1,n1);
		let retorno="";
		if (n0>0) {
			retorno="..."
		}
		retorno=retorno+precadea+ "<span style='color:#40ff00; opacity:1;'>"+cadea+"</span>"+
					postcadea+"..."
		return retorno;
	}
	else {
		cadea=digits.substring(inicio,fin);
		return cadea+"...";
	}
}

function draw() {
}