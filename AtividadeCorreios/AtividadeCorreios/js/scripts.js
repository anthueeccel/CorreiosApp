$(document).ready(function () {
    $("#cepOrigem").mask("99999-999");
    $("#cepDestino").mask("99999-999");
});
function LimparTela() {
    var meusInputs = $('input[type="text"]');
    meusInputs.val("");
}
//$(document).on('keypress', function (e) {
//    if (e.which == 13) {
//        $('input[type="button"]').click();
//    }
//});



$("#bt1").on('click', function () {

    var cepOrigem = $('input[name="cepOrigem"]').val();
    var cepDestino = $('input[name="cepDestino"]').val();
    var peso = $('input[name="peso"]').val();
    var comprimento = $('input[name="comprimento"]').val();
    var altura = $('input[name="altura"]').val();
    var largura = $('input[name="largura"]').val();
    var maoPropria = $('input[name="maopropria"]').val();
    var valordeclarado = $('input[name="valorDeclarado"]').val();
    var avisoRecebimento = $('input[name="avisoRec"]').val();

    var url = "https://usysweb.com.br/api/correiosambev.php";
    var dataSent = `nCdEmpresa=08082650&sDsSenha=564321&` +
        `sCepOrigem=${cepOrigem}&sCepDestino=${cepDestino}&` +
        `nVlPeso=${peso}&nCdFormato=1&nVlComprimento=${comprimento}&nVlAltura=${altura}&nVlLargura=${largura}&` +
        `sCdMaoPropria=${maoPropria}&nVlValorDeclarado=${valordeclarado}&sCdAvisoRecebimento=${avisoRecebimento}&` +
        `nCdServico=04510&nVlDiametro=0&StrRetorno=xml&nIndicaCalculo=3`;

    $.get(url, dataSent, function (data, status, xhr) {
        console.log(data);
        //LimparTela();
        var dataJson = JSON.parse(data);


        $('span[name="prazo"]').text(dataJson.cServico.PrazoEntrega);
        $('span[name="valor"]').text(dataJson.cServico.Valor);
        $('span[name="destino"]').text(cepDestino);
        $('span[name="entregaPessoalmente"]').text(dataJson.cServico.EntregaDomiciliar);
       
    });



});