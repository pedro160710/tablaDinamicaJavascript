var table='';

var cols=2;
var libro="Libro";

function crearTabla(numFilas){
	console.log (document.getElementById("articleTabla").children);
	for(var fila =1;fila <=numFilas; fila++ )
	{
		table+='<tr>';
		for(var col=1; col<=cols; col++)
		{
			if(col==1){
				table += '<td>'+ libro+ '</td>';
			}else if(col==2){
				table += '<td>'+ fila + '</td>';
			}
		}
		table+='</tr>';
		
	}
	document.getElementById("articleTabla").innerHTML='<table>'+ table + '</table>';
}