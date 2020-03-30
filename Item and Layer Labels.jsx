var mainWindow = new Window("palette", "Random Labels", undefined);
mainWindow.orientation = "column";

var groupOne = mainWindow.add("group", undefined, "groupOne");
groupOne.orientation = "row";
var itemsCheckbox = groupOne.add("checkbox", undefined, "Items");
itemsCheckbox.value = true;
var layersCheckbox = groupOne.add("checkbox", undefined, "Layers");
layersCheckbox.value = true;

var groupTwo = mainWindow.add("group", undefined, "groupTwo");
var button = groupTwo.add("button", undefined, "Randomise");

mainWindow.center();
mainWindow.show();

button.onClick = function() {
    app.beginUndoGroup("Label Randomisation");
        
        
        if(layersCheckbox.value == true) {
            if(app.project.activeItem == null || !(app.project.activeItem instanceof CompItem)) {
                alert("Please select a comp to randomise the layers of");
                return false;
                } else {
                        randomiseLayerLabels(app.project.activeItem);
                    }
            }
        
        if(itemsCheckbox.value == true) {
            randomiseItemLabels();
            }
        app.endUndoGroup();
    }

function randomiseItemLabels() {
    for(var i = 1; i <= app.project.numItems; i++) {
        app.project.item(i).label = Math.floor((Math.random() * 17) + 1);
        }
    }

function randomiseLayerLabels(comp) {
    for(var i = 1; i <= comp.numLayers; i++) {
        comp.layer(i).label = Math.floor((Math.random() * 17) + 1);
        }
    }