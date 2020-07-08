window.UIJsLibraryFunctions =
{
    //activateFreeWall: function (id) {
    //    //var usableId = "#" + id;
    //    var wall = new Freewall("#container");
    //    wall.fitWidth();
    //    //alert("test");
    //}
    activateMagicGrid: function ()
    {
        let magicGrid = new MagicGrid({
            container: "#container", // Required. Can be a class, id, or an HTMLElement.
            static: true, // Required for static content.
            animate: true, // Optional.
        });

        magicGrid.listen();
    }
}