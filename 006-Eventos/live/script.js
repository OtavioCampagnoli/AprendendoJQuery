/*Utilizando o live

    Obs:
*/
$( function ()
{
    $( "#container a" ).live( "click", function ()
    {
        console.log($(this).text());
        $("<a href='#'>Novo link</a><br>").appendTo("#container");
    } );
} );