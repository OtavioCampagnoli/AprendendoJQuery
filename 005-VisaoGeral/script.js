var caixa = $( ".caixaUm" );
var caixa2 = $( ".caixaDois" );
var caixa3 = $( ".caixaTres" );

$( document ).ready( function () {
    $( caixa ).on( "click", function () {
        caixa.addClass( "blue" );
    } );

    $( caixa2 ).on( "click", function () {
        caixa2.removeClass( "blue" );
    } );

    $( caixa3 ).on( "click", function () {
        caixa3.toggleClass( "blue" ); // Deixa como se fosse um botão de ativar e reativar quando clica na caixa3
    } );

} );