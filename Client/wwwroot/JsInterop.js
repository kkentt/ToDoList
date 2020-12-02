var componentObject = null;
var isCard = false;

window.UIJsLibraryFunctions =
{
    //This helps to order different height grids showing in good order
    activateMagicGrid: function () {
        let magicGrid = new MagicGrid({
            container: "#items-wrapper", // Required. Can be a class, id, or an HTMLElement.
            static: true, // Required for static content.
            animate: true, // Optional.
            gutter: 25,
            useMin: true,
            useTransform: true,
        });
        magicGrid.listen();
    },
    // Change backgroud color of the card
    initializeColorPickerEvent: function (card) {
        var textColor = "";
        var colorInput = card.querySelector(".color-picker");
        console.log("test initialized success or not;");
        colorInput.addEventListener("input", (event) => {
            console.log("Trigger color picker drag");
            debugger
            console.log(componentObject);
            if (this.isCard) {
                card.style.background = event.target.value;
                textColor = this.GetTextColor(event.target.value);
                card.style.setProperty("color", textColor, "important");

                var textAreas = card.querySelectorAll(".item-txt-area");
                for (i = 0; i < textAreas.length; i++) {
                    textAreas[i].style.background = event.target.value;
                    textAreas[i].style.setProperty("color", textColor, "important");
                }
            }
        }, false);

        colorInput.addEventListener("change", (event) => {
            console.log("Trigger color picker change");
            componentObject.invokeMethodAsync('SetBackgroundColor', event.target.value, textColor);
        }, false);
    },
    //Get text color black or white based on background color in hex value
    GetTextColor: function (backgroundColor) {
        backgroundColor = backgroundColor.replace("#", "");
        var r = parseInt(backgroundColor.substr(0, 2), 16);
        var g = parseInt(backgroundColor.substr(2, 2), 16);
        var b = parseInt(backgroundColor.substr(4, 2), 16);
        var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        return (yiq >= 128) ? 'black' : 'white';
    },
    AutoResizeTextArea: function (card) {
        var items = card.querySelectorAll(".item-txt-area")
        if (items.length > 0) {
            for (i = 0; i < items.length; i++) {
                items[i].style.height = "auto";
                items[i].style.height = (items[i].scrollHeight) + "px";
            }
        }
    },
    openColorPicker: function (colorPickerId, obj) {
        componentObject = obj;
        this.isCard = true;
        var id = "#" + colorPickerId;
        $(id).click();
    },
    SetColorPickerObject: function (obj) {
        console.log("set component object");
        componentObject = obj;
        this.isCard = false;
    },
    blur: function (card) {
        var textAreas = card.querySelectorAll(".item-txt-area")
        for (i = 0; i < textAreas.length; i++) {
            textAreas[i].blur();
        }
    },
}