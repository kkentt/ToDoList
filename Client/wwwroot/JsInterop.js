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
            //useTransform: true,
        });
        magicGrid.listen();
    },
    // Change backgroud color of the card
    initializeColorPickerEvent: function (card) {
        var textColor = "";
        var colorInput = card.querySelector(".color-picker");
        colorInput.addEventListener("input", (event) => {
            card.style.background = event.target.value;
            textColor = getContrastYIQ(event.target.value);
            card.style.setProperty("color", textColor, "important");

            //call Blazor function
            var textAreas = card.querySelectorAll(".item-txt-area");
            for (i = 0; i < textAreas.length; i++) {
                textAreas[i].style.background = event.target.value;
                textAreas[i].style.setProperty("color", textColor, "important");
            }
        }, false);

        colorInput.addEventListener("change", (event) => {
            componentObject.invokeMethodAsync('SetBackgroundColor', event.target.value, textColor);
        }, false);

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

    AutoResizeTextArea: function (card) {
        var items = card.querySelectorAll(".item-txt-area")
        if (items.length > 0) {
            for (i = 0; i < items.length; i++) {
                items[i].style.height = "0px";
                items[i].style.height = (items[i].scrollHeight) + "px";
            }
        }
    },
    openColorPicker: function (colorPickerId, obj) {
        componentObject = obj;
        var id = "#" + colorPickerId;
        $(id).click();
    },

    blur: function (card) {
        var textAreas = card.querySelectorAll(".item-txt-area")
        for (i = 0; i < textAreas.length; i++) {
            textAreas[i].blur();
        }
    },
}