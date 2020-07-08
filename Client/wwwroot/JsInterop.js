window.UIJsLibraryFunctions =
{
    activateFreeWall: function (id) {
        //var usableId = "#" + id;
        var wall = new Freewall("#container");
        wall.fitWidth();
        wall.fitHeight();

        wall.reset({
            selector: '.brick',
            draggable: true,
            animate: true,
        });
        //alert("test");
    }
}