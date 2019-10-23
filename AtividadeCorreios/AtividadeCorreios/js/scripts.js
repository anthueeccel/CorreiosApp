$(document).ready(function () {
    $("#cepOrigem").mask("99999-999");
    $("#cepDestino").mask("99999-999");
});
function LimparTela() {
    var meusInputs = $('input[type="text"]');
    meusInputs.val("");
}
$(document).on('keypress', function (e) {
    if (e.which == 13) {
        $('input[type="button"]').click();
    }
});