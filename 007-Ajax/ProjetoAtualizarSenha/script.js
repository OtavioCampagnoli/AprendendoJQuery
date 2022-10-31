var botaoSalvar = $("#botaoSalvar");
var resultadoSpan = $("#resultado");
var inputSenha = $("#senha");
$(document).ready(function ()
{
   $( botaoSalvar ).click( function ()
   {    
        botaoSalvar.html("Aguarde...");
        botaoSalvar.prop('disabled', true);

       $.post( "senha.php", 
        {   senha: $( "#senha" ).val() } ).done(function (resultado)
            {
                $(resultadoSpan).html(resultado);
                botaoSalvar.html('Alterar Senha');
                botaoSalvar.prop('disabled', false);
                inputSenha.val('');
            });

    });
});