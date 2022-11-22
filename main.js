$(document).ready(function() {

    $('form').on('submit', function() {
        alert("Cadastro concluído com sucesso")
    })
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');    
})