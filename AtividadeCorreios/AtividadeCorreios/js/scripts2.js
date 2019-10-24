$(document).ready(function () {

    var url = window.location;
    var prazo = url.search.split('&')[0].split('=')[1];
    var valor = url.search.split('&')[1].split('=')[1];
    var entregaPessoalmente = url.search.split('&')[2].split('=')[1];
    if (entregaPessoalmente === 'S')
        entregaPessoalmente = 'Sim';
    else
        entregaPessoalmente = 'Não';

    var cepDestino = url.search.split('&')[3].split('=')[1];

    $.getJSON("https://viacep.com.br/ws/" + cepDestino + "/json/", function (data, status) {
        console.log(data);

        $('input[name="cidade"]').val(data.localidade);
        $('input[name="bairro"]').val(data.bairro);
        $('input[name="logradouro"]').val(data.logradouro);
        //$('span[name="cidade"]').text(data.localidade);
        //$('span[name="bairro"]').text(data.bairro);
        //$('span[name="logradouro"]').text(data.logradouro);

    });


    $('input[name="prazo"]').val(prazo + ' dias');
    $('input[name="valor"]').val('R$' + valor);
    //$('input[name="cidade"]').val('a');
    //$('input[name="bairro"]').val('b');
    //$('input[name="logradouro"]').val('c');
    $('input[name="entregaPessoalmente"]').val(entregaPessoalmente);


    $("#bt2").on('click', function () {
    window.history.back();
    });

});
