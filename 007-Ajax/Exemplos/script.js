// Obs: O ajax sempre irá nos permitir enviar e tratar o resultado de requisições assíncronas (função callback);
$.ajax
    (
        {
            method: "POST",
            url: "cadastrar.php",
            data: { nome: "Otavio", email: "otaviocampagnoli@hotmail.com" }
        }
    );

// Além dos parâmetros method, url, data podemos acrescentar mais informações úteis à requisição e configurar seu funcionamento. Exemplo:


$.ajax( {
    url: "cadastrar.php",
    type: 'post',
    data: {
        nome: "Maria Fernanda",
        salario: '3500'
    },
    beforeSend: function () {
        $( "#resultado" ).html( "ENVIANDO..." );
    }
} )
    .done( function ( msg ) {
        $( "#resultado" ).html( msg );
    } )
    .fail( function ( jqXHR, textStatus, msg ) {
        alert( msg );
    } );                