$( "#container" ).on( "click", "a", function ()
{
    console.log( $( this ).text() );
    $( "<a href='#'>Novo link</a><br/>" ).appendTo( "#container" );
} );

$( "#container a" ).on( "click", function ()
{
    console.log( $( this ).text() );
    $( "<a href='#'>Novo link</a><br/>" ).appendTo( "#container" );
} );