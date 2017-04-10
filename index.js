//////////////////////////////////////////
// Hyttekatalog logikk
// Espen Kirkesæther Brun og Anna Nikitina
//////////////////////////////////////////

$(document).ready(function(){
	var txt = "";
	console.log(this);
	$.ajax({
		type:"GET",
		url:"hyttekatalog.xml",
		dataType: "xml",
		success: function(xml) {
			$(xml).find('fjellhytta').each(function(){
				txt += $(this).find("beliggenhet").text() + 
				$(this).find("utleieperioden").text() +
			    $(this).find("kjøkken").text() +
			    $(this).find("strøm").text() +
			    $(this).find("innlagtvann").text() +
			    $(this).find("dusj").text() +
			    $(this).find("antallsenger").text(); 
			});
			$(".main").append(txt);
		}
	});
});