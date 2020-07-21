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
    initializeColorPickerEvent:()=>
    {
        colorWell = document.querySelectorAll(".color-picker");
        colorWell.forEach( (colorInput) =>  {
            var container = colorInput.closest('div.item'); 
            colorInput.addEventListener("input",  (event) => {
                container.style.background = event.target.value;
            }, false);
        });
    },
    openColorPicker: function (colorPickerId) {
        var id = "#" + colorPickerId;
        $(id).click();
    }
}