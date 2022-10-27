/*
Apesar de o bind() ser bastante flexível e permitir, inclusive, tratar vários eventos na mesma chamada, o fato de essa alternativa anexar a função de tratamento a cada um dos elementos selecionados tem algumas implicações negativas:

O event handler não é anexado a elementos criados dinamicamente, mas apenas a aqueles que já existiam e foram selecionados no momento da chamada ao bind();
Quanto maior o número de elementos cujos eventos são tratados, mais funções são geradas e, consequentemente, o desempenho da aplicação pode ser prejudicado.

OBS:

Importante: como o método bind() está marcado como deprecated na versão 3.0 da jQuery, ele provavelmente será removido em versões futuras. Para substituí-lo, a documentação oficial indica o uso do método on(), que veremos mais adiante.

*/
$( function ()
{
    $( "#container a" ).bind( "click", function ()
    {
        console.log( $( this ).text() );
    } );
} );