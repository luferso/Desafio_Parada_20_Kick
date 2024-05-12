var div = document.getElementById("result");
var resp = document.getElementById("valor_media");
function calcula_media(){
    let nota1 = parseInt(document.getElementById("nota1").value);
    let nota2 = parseInt(document.getElementById("nota2").value);
    let nota3 = parseInt(document.getElementById("nota3").value);
    let text = "";

    let media = parseInt(((nota1 + nota2 + nota3)/3));

    if (media >= 6){
        text = "APROVADO";
        hex = "#0f7e18";
    }else{
        text = "REPROVADO";
        hex = "#aa0909"
    }
    resp.innerHTML = `MÉDIA: ${media}`
    div.innerHTML = text;
    div.style.color = hex;
}