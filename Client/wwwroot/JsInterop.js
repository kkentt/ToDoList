var componentObject = null;

window.UIJsLibraryFunctions =
{
    //This helps to order different height grids showing in good order
    activateMagicGrid: function () {
        let magicGrid = new MagicGrid({
            container: "#items-wrapper", // Required. Can be a class, id, or an HTMLElement.
            static: true, // Required for static content.
            animate: true, // Optional.
            gutter: 25,
            useTransform: true,
        });
        magicGrid.listen();
    },
    // Change backgroud color of the card
    initializeColorPickerEvent: () => {
        colorWell = document.querySelectorAll(".color-picker");
        colorWell.forEach((colorInput) => {
            var card = colorInput.closest('div.item');

            colorInput.addEventListener("input", (event) => {
                card.style.background = event.target.value;
                var textColor = getContrastYIQ(event.target.value);
                //container.style.color = result;
                card.style.setProperty("color", textColor, "important");
                //call Blazor function
            }, false);

            colorInput.addEventListener("change", (event) => {
                console.log("Change event is called" + event.target.value);
                //DotNet.invokeMethodAsync('ToDoList.Client', 'SetBackgroundColor', card.style.background, componentObject);
                componentObject.invokeMethodAsync('SetBackgroundColor', event.target.value);
            }, false);
        });

        //Get text color black or white based on background color
        function getContrastYIQ(hexcolor) {
            hexcolor = hexcolor.replace("#", "");
            var r = parseInt(hexcolor.substr(0, 2), 16);
            var g = parseInt(hexcolor.substr(2, 2), 16);
            var b = parseInt(hexcolor.substr(4, 2), 16);
            var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
            return (yiq >= 128) ? 'black' : 'white';
        }
    },

    openColorPicker: function (colorPickerId, obj) {
        componentObject = obj;
        var id = "#" + colorPickerId;
        $(id).click();
    },
}