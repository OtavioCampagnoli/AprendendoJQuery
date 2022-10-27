$( document ).ready( function ()
{

    var area = $( ".area" );
    var loading = false;
    $( document ).on( "scroll", function ()
    {
        if ( loading == false )
        {
            if ( isOnScreen( $( area ) ) )
            {
                loading = true;

                $.ajax
                    ( {
                        url: "index.html",
                        method: GET
                    } ).done( function ( resp )
                    {
                            $( area ).append( resp );
                    } );



            }
        }
    }
    } );
} );