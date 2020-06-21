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
var FIREBALLS = ["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"];

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

var onPopupEscPress = function(evt) {
    if (evt.key === "Escape") {
        evt.preventDefault();
        closePopup();
    }
};
var openPopup = function() {
    setup.classList.remove("hidden");
    document.addEventListener("keydown", onPopupEscPress);
};
var closePopup = function() {
    setup.classList.add("hidden");
    document.removeEventListener("keydown", onPopupEscPress);
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
var setupOpen = document.querySelector(".setup-open");
var setup = document.querySelector(".setup");
var setupClose = setup.querySelector(".setup-close");
var wizardCoat = document.querySelector(".wizard-coat");
var wizardEyes = document.querySelector(".wizard-eyes");
var wizardFireball = document.querySelector(".setup-fireball-wrap");
var coatValue = document.querySelector(".coat-value");
var eyesValue = document.querySelector(".eyes-value");
var fireballValue = document.querySelector(".fireball-value");

// вызов функции и другой поточный код
userDialog.classList.remove("hidden");
addElement(renderWizard, wizards);
userDialog.querySelector(".setup-similar").classList.remove("hidden");

setupOpen.addEventListener("click", function() {
    openPopup();
});
setupOpen.addEventListener("keydown", function(evt) {
    if (evt.key === "Enter") {
        openPopup();
    }
});
setupClose.addEventListener("click", function() {
    closePopup();
});
setupClose.addEventListener("keydown", function(evt) {
    if (evt.key === "Enter") {
        closePopup();
    }
});

wizardCoat.addEventListener("click", function() {
    wizardCoat.style.fill = WIZARD_COLORS[renderInteger(0, WIZARD_COLORS.length)];
    coatValue.value = wizardCoat.style.fill;
    return coatValue.value;
});
wizardEyes.addEventListener("click", function() {
    wizardEyes.style.fill = WIZARD_EYES[renderInteger(0, WIZARD_EYES.length)];
    eyesValue.value = wizardEyes.style.fill;
    return eyesValue.value;
});
wizardFireball.addEventListener("click", function() {
    var color = FIREBALLS[renderInteger(0, FIREBALLS.length)];
    wizardFireball.style.background = color;
    fireballValue.value = color;
    return color;
});
