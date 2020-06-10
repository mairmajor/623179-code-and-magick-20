/* eslint-disable quotes */
"use strict";

// константы
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
var WIZARD_COLORS = [
    "rgb(101, 137, 164)",
    "rgb(241, 43, 107)",
    "rgb(146, 100, 161)",
    "rgb(56, 159, 117)",
    "rgb(215, 210, 55)",
    "rgb(0, 0, 0)",
];
var WIZARD_EYES = ["black", "red", "blue", "yellow", "green"];

// функции
var renderInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};
var createWizardNames = function(names, sirnames) {
    var wizardNamesArray = [];
    for (var i = 0; i < names.length; i++) {
        var wizardName =
            names[renderInteger(0, names.length)] +
            " " +
            sirnames[renderInteger(0, sirnames.length)];
        wizardNamesArray.push(wizardName);
    }
    return wizardNamesArray;
};
var createWizards = function(wizardQuantity) {
    var wizardsArray = [];
    for (var i = 0; i < wizardQuantity; i++) {
        var wizard = {
            name: wizardNames[renderInteger(0, wizardNames.length)],
            coatColor: WIZARD_COLORS[renderInteger(0, WIZARD_COLORS.length)],
            eyesColor: WIZARD_EYES[renderInteger(0, WIZARD_EYES.length)],
        };
        wizardsArray.push(wizard);
    }
    return wizardsArray;
};
var renderWizard = function(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector(".setup-similar-label").textContent = wizard.name;
    wizardElement.querySelector(".wizard-coat").style.fill = wizard.coatColor;
    wizardElement.querySelector(".wizard-eyes").style.fill = wizard.eyesColor;

    return wizardElement;
};
var addElement = function(renderWay, elementType) {
    for (var i = 0; i < elementType.length; i++) {
        fragment.appendChild(renderWay(elementType[i]));
    }
    similarListElement.appendChild(fragment);
};

// переменные
var userDialog = document.querySelector(".setup");
var similarListElement = userDialog.querySelector(".setup-similar-list");
var similarWizardTemplate = document
    .querySelector("#similar-wizard-template")
    .content.querySelector(".setup-similar-item");
var wizardNames = createWizardNames(NAMES_ARRAY, SIRNAMES_ARRAY);
var wizards = createWizards(4);
var fragment = document.createDocumentFragment();

// вызов функции и другой поточный код
userDialog.classList.remove("hidden");
addElement(renderWizard, wizards);
userDialog.querySelector(".setup-similar").classList.remove("hidden");
