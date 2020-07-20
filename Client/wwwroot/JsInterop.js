window.UIJsLibraryFunctions =
{
    activateMagicGrid: function () {
        let magicGrid = new MagicGrid({
            container: "#container", // Required. Can be a class, id, or an HTMLElement.
            static: true, // Required for static content.
            animate: true, // Optional.
        });
        magicGrid.listen();
    },
    openColorPicker: function (colorPickerId) {
        var id = "#" + colorPickerId;
        $(id).click();
    }
}