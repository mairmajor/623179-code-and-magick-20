"use strict";

var NAMES_ARRAY = [
    "Иван",
    "Хуан Себастьян",
    "Мария",
    "Кристоф",
    "Виктор",
    "Юлия",
    "Люпита",
    "Вашингтон",
];
var SIRNAMES_ARRAY = [
    "да Марья",
    "Верон",
    "Мирабелла",
    "Вальц",
    "Онопко",
    "Топольницкая",
    "Нионго",
    "Ирвинг",
];

var userDialog = document.querySelector(".setup");
userDialog.classList.remove("hidden");

var similarListElement = userDialog.querySelector(".setup-similar-list");

var similarWizardTemplate = document
    .querySelector("#similar-wizard-template")
    .content.querySelector(".setup-similar-item");

var renderInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

var renderWizardNames = function(NAMES_ARRAY, SIRNAMES_ARRAY) {
    var wizardNames = [];
    for (var i = 0; i < NAMES_ARRAY.length; i++) {
        var wizardName =
            NAMES_ARRAY[renderInteger(0, NAMES_ARRAY.length)] +
            SIRNAMES_ARRAY[renderInteger(0, SIRNAMES_ARRAY.length)];
        wizardNames.push(wizardName);
    }
    return wizardNames;
};

var WIZARD_COLORS = [
    rgb(101, 137, 164),
    rgb(241, 43, 107),
    rgb(146, 100, 161),
    rgb(56, 159, 117),
    rgb(215, 210, 55),
    rgb(0, 0, 0),
];

var WIZARD_EYES = [black, red, blue, yellow, green];

var wizards = [{
        name: wizardNames[renderInteger(0, wizardNames.length)],
        coatColor: WIZARD_COLORS[renderInteger(0, WIZARD_COLORS.length)],
        eyesColor: WIZARD_EYES[renderInteger(0, WIZARD_EYES.length)],
    },
    {
        name: wizardNames[renderInteger(0, wizardNames.length)],
        coatColor: WIZARD_COLORS[renderInteger(0, WIZARD_COLORS.length)],
        eyesColor: WIZARD_EYES[renderInteger(0, WIZARD_EYES.length)],
    },
    {
        name: wizardNames[renderInteger(0, wizardNames.length)],
        coatColor: WIZARD_COLORS[renderInteger(0, WIZARD_COLORS.length)],
        eyesColor: WIZARD_EYES[renderInteger(0, WIZARD_EYES.length)],
    },
    {
        name: wizardNames[renderInteger(0, wizardNames.length)],
        coatColor: WIZARD_COLORS[renderInteger(0, WIZARD_COLORS.length)],
        eyesColor: WIZARD_EYES[renderInteger(0, WIZARD_EYES.length)],
    },
];

var renderWizard = function(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector(".setup-similar-label").textContent = wizard.name;
    wizardElement.querySelector(".wizard-coat").style.fill = wizard.coatColor;
    wizardElement.querySelector(".wizard-eyes").style.fill = wizard.eyesColor;

    return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector(".setup-similar").classList.remove("hidden");