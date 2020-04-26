
var Childrens;
var valores;
function InsertHardware(row)
{
        var confrow = $(row).clone();
        confrow.append("<td> X </td>");
        $("#configurationTable").append("<tr onclick=\"deleteConf(this)\">" + confrow.html() + "</tr>");
        recaulculate();
}

function deleteConf(row)
{
    $(row).remove();
}

function recaulculate()
{
    Childrens = $("#configurationTable").find(".speedVal");
    valores = [];
    suma = 0;
    for (a=0;a<Childrens.length;a++)
    {
        var valorTemporal = parseFloat($(Childrens[a]).text());
        valores.push(valorTemporal);
        suma+=valorTemporal;
    }

    var MAX = Math.max.apply(null,valores);
    var MIN = Math.min.apply(null,valores);
    $("#VT").text(suma.toFixed(2));
    var promedioMINMAX = (MAX + MIN) / 2;
    var BN = (promedioMINMAX) / (suma/valores.length);
    $("#VB").text(BN.toFixed(2));
    var klandactum = suma - suma*BN;
    $("#VK").text(klandactum.toFixed(2));
    var velocidadfinal = suma * (1-Math.pow(Math.E,-(klandactum)));
    $("#VF").text(velocidadfinal.toFixed(2));
}