window.UIJsLibraryFunctions =
{
    activateMagicGrid: function () {
        let magicGrid = new MagicGrid({
            container: "#items-wrapper", // Required. Can be a class, id, or an HTMLElement.
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
                var result = getContrastYIQ(event.target.value);
                //container.style.color = result;
                container.style.setProperty("color", result , "important");
            }, false);
        });

        function getContrastYIQ(hexcolor) {
            hexcolor = hexcolor.replace("#", "");
            var r = parseInt(hexcolor.substr(0, 2), 16);
            var g = parseInt(hexcolor.substr(2, 2), 16);
            var b = parseInt(hexcolor.substr(4, 2), 16);
            var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
            return (yiq >= 128) ? 'black' : 'white';
        }
    },
    openColorPicker: function (colorPickerId) {
        var id = "#" + colorPickerId;
        $(id).click();
    },
}