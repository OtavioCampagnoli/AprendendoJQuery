$( function ()
{
    $( "#container" ).delegate( "a", "click", function ()
    {
        console.log( $( this ).text() );
        $( "<a href='#'>Novo link</a><br/>" ).appendTo( "#container" );
    } );
} );
