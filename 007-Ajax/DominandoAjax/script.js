const obterNotas = ( id ) => {
    $( '#loading' ).show()
    jQuery.ajax
        ( {
            type: "GET",
            url: "http://www.deveup.com.br/notas/api/notes/" + id,
            dataType: "json",
            success: function ( response ) {
                $( "#retorno" ).html( `ID: ${ response.id } <br> Título: ${ response.title } <br> Conteúdo: ${ response.body }` );
                $( "#retorno" ).css( "padding", "5px" );
                $( "#retorno" ).css( "border", "1.9px solid #010101" );
                $( '#loading' ).hide()
            },
            error: function (response) {  
                alert('Erro: registro não encontrado!' + response);
                $( '#loading' ).hide()
            }            
        } );
}



$( document ).ready( function () {
    $( "#enviar" ).on( "click", function () {
        let id = $( ".input" ).val();
        obterNotas( id );
    } );
} );