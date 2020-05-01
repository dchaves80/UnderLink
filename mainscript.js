
var Childrens;
var valores;
var procesors;
var promedioMINMAX;
function InsertHardware(row)
{
        var confrow = $(row).clone();
        confrow.append("<td id=\"CS\"></td><td id=\"COC\"></td>");
        confrow.append("<td> X </td>");
        $("#configurationTable").append("<tr onclick=\"deleteConf(this)\">" + confrow.html() + "</tr>");
        recaulculate();
}

function deleteConf(row)
{
    $(row).remove();
    recaulculate();
}

function deleteAll()
{
    Childrens = $("#configurationTable").find("tr");
    Childrens.remove();
    recaulculate();
}

function recaulculate()
{
    Childrens = $("#configurationTable").find(".speedVal");
    Childrens2 = $("#configurationTable").find(".OCT");
    valores = [];
    procesors = [];
    suma = 0;
    for (a=0;a<Childrens.length;a++)
    {
        procesors.push(new Procesor(a,"p",parseFloat($(Childrens[a]).text()),parseFloat($(Childrens2[a]).text())));
        var valorTemporal = parseFloat($(Childrens[a]).text());
        valores.push(valorTemporal);
        suma+=valorTemporal;
    }

    

    var MAX = Math.max.apply(null,valores);
    var MIN = Math.min.apply(null,valores);
    
    promedioTodos = suma / procesors.length;
    for (a=0;a<procesors.length;a++)
    {
        procesors[a].calculateValues(promedioTodos);
    }    

    VelTotal = 0;

    Rows = $("#configurationTable").find("tr");
    for (a=0;a<Rows.length;a++)
    {
        VelTotal+=procesors[a].currentSpeed;
        $(Rows[a]).find("#cs").text(procesors[a].currentSpeed.toFixed(2));
    }

    for (a=0;a<Rows.length;a++)
    {
        if (procesors[a].burned==true)
        {
            $(Rows[a]).find("#coc").text("(fail)" + procesors[a].COC.toFixed(2));
            $(Rows[a]).find("#coc").attr("class","fail")
        } else 
        {
            if (procesors[a].overclocked==true)
            {
                $(Rows[a]).find("#coc").text(procesors[a].COC.toFixed(2));
                $(Rows[a]).find("#coc").attr("class","overclocked")
            } else 
            {
                $(Rows[a]).find("#coc").text(procesors[a].COC.toFixed(2));
                $(Rows[a]).find("#coc").attr("class","normal")
                
            }
        }
        
    }

    

    $("#VT").text(VelTotal.toFixed(2));
    
}