var area = $( ".area" );

function isOnScreen(element)
{
    var win = $(window);
    var screenTop = win.scrollTop();
    var screenBottom = screenTop + win.height();

    var elementTop = element.offset().top;
    var elementBottom = elementTop + element.height();

    return elementBottom > screenTop && elementTop < screenBottom;
}


$( document ).ready( function ()
{
    var loading = false;
    $( document ).on( "scroll", function ()
    {

        $( document ).on( "scroll", function ()
        {
            if ( loading == false )
            {
                if ( isOnScreen( $( area ) ) )
                {
                    $.ajax(
                    {
                        url: "conteudo.html",
                        method: "GET"
                    } ).done( function ( resposta )
                        {
                            $( area ).append( resposta );
                        } );
                }
            }
        } );
    } );
} );