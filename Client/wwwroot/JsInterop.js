window.UIJsLibraryFunctions =
{
    activateFreeWall: function (id) {
        //var usableId = "#" + id;
        var wall = new Freewall("#container");
        wall.fitWidth();
        console.log("freewall");
        //alert("test");
    }
}