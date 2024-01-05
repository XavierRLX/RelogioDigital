//relogio do fundo dois, pequeno
function relogio (){
    // pegando o hoario do sistema atraves dessas variaveis.
let data = new Date();
let hr = data.getHours();
let min = data.getMinutes();
let s = data.getSeconds();

let cumprimento = document.getElementById("cumprimentoTexto") 
       //Juntando todas a variaveis em uma
let tempo_real = 
hr.pad(2) + ":" + min.pad(2) + ":" + s.pad(2);
let tempo = document.getElementById('relogio');
tempo.innerHTML = tempo_real;

// para sempre ficar em dois algaritimos
Number.prototype.pad = function(digito){
for(var n = this.toString(); n.length < digito; n = 0 + n);
return n;
}
// Cumprimento automático
if (hr >= 6 && hr < 12 ) {
    cumprimento.innerHTML = "Bom dia !" 
    cumprimento.style.letterSpacing = "0"
} else if ( hr >= 12 && hr < 18 ) {
    cumprimento.innerHTML = "Boa tarde !"
    cumprimento.style.letterSpacing = "0"
} else {
    cumprimento.innerHTML = "Boa noite !"
    cumprimento.style.letterSpacing = "0"
}

}
setInterval(relogio,1000) //1000 > 1 segundo

//
function DataeHora(){
let data = new Date();
let dia = data.getDay(),
mes = data.getMonth(),
dianumero = data.getDate(),
ano = data.getFullYear(),
hr = data.getHours(),
min = data.getMinutes(),
s = data.getSeconds();      

Number.prototype.pad = function(digito){
for(var n = this.toString(); n.length < digito; n = 0 + n);
return n;
}

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let semanas = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sextou", "Sábado"];
let ids = ["diaSemanaId", "diaNumeroId", "mesId", "anoId", "horaId", "minutosId", "segundosId"];
let valores = [semanas[dia], dianumero.pad(2), meses[mes], ano, hr.pad(2), min.pad(2), s.pad(2), ];
for(var i = 0; i < ids.length; i++)
document.getElementById(ids[i]).firstChild.nodeValue = valores[i];
}

function HoraData(){
DataeHora();
setInterval("DataeHora()", 1000);
}

