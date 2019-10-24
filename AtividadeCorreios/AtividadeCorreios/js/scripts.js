$(document).ready(function () {
    $("#cepOrigem").mask("99999-999");
    $("#cepDestino").mask("99999-999");

});
$('input[name="bt1"]').on('click', function () {
    var informacoes = $('form[name="formenviar"]').serializeArray();
    var obterAtributo = $('form[name="formenviar"]').attr('send-post');

    $.post("http://usysweb.com.br/api/" + obterAtributo + ".php?giomar=true", informacoes, function (data) {
        data = JSON.parse(data);
        console.log(data);
        $.each(data.cServico, function (key, value) {
            $('p[name="{key}"'.replace("{key}", key)).text(value);
        });
    });
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

//$("#bt1").on('click', function () {

//    var cepOrigem = $('input[name="cepOrigem"]').val();
//    var cepDestino = $('input[name="cepDestino"]').val();
//    var peso = $('input[name="peso"]').val();
//    var comprimento = $('input[name="comprimento"]').val();
//    var altura = $('input[name="altura"]').val();
//    var largura = $('input[name="largura"]').val();
//    var maoPropria = $('input[name="maopropria"]').val();
//    var valordeclarado = $('input[name="valorDeclarado"]').val();
//    var avisoRecebimento = $('input[name="avisoRec"]').val();

//    var url = "https://usysweb.com.br/api/correiosambev.php";
//    var dataSent = `nCdEmpresa=08082650&sDsSenha=564321&` +
//        `sCepOrigem=${cepOrigem}&sCepDestino=${cepDestino}&` +
//        `nVlPeso=${peso}&nCdFormato=1&nVlComprimento=${comprimento}&nVlAltura=${altura}&nVlLargura=${largura}&` +
//        `sCdMaoPropria=${maoPropria}&nVlValorDeclarado=${valordeclarado}&sCdAvisoRecebimento=${avisoRecebimento}&` +
//        `nCdServico=04510&nVlDiametro=0&StrRetorno=xml&nIndicaCalculo=3`;
       

//    $.getJSON("https://viacep.com.br/ws/" + cepDestino + "/json/", function (data, status) {
//        console.log(data);

//        $('input[name="cidade"]').val(data.localidade);
//        $('input[name="bairro"]').val(data.bairro);
//        $('input[name="logradouro"]').val(data.logradouro);
//        $('span[name="cidade"]').text(data.localidade);
//        $('span[name="bairro"]').text(data.bairro);
//        $('span[name="logradouro"]').text(data.logradouro);

//    });

   
//    $.get(url, dataSent, function (data, status, xhr) {
//        console.log(data);
//        //LimparTela();
//        var dataJson = JSON.parse(data);
//        //var hoje = new Date().getDate();

//        $('span[name="prazo"]').text(dataJson.cServico.PrazoEntrega + " dias");
//        $('span[name="valor"]').text(dataJson.cServico.Valor);
//        $('span[name="entregaPessoalmente"]').text(dataJson.cServico.EntregaDomiciliar);

//        var urlResult = `indexResult.html?`;
//        var dataResult = `prazo=${dataJson.cServico.PrazoEntrega}` +
//            `&valor=${dataJson.cServico.Valor}` +
//            `&entregaPessoalmente=${dataJson.cServico.EntregaDomiciliar}` +
//            `&cepDestino=${cepDestino}`;
        //window.location = urlResult + dataResult;

      


//    });

       
//});
