'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 120;
var BAR_GAP = 90;
var BAR_MAX_HEIGHT = 150;
var barWidth = 40;
var TEXT_Y = 250;
var TEXT_X = 140;

var renderCloud = function(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function(ctx, TEXT, x, y) {
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText(TEXT, x, y);
};

var renderColumn = function(ctx, x, y, BAR_HEIGHT) {
    ctx.fillRect(x, y, barWidth, BAR_HEIGHT);
};

var getMaxElement = function(arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }

    return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
    renderText(ctx, 'Ура вы победили!', FONT_GAP, GAP * 3);
    renderText(ctx, 'Список результатов:', FONT_GAP, GAP * 5);


    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
        renderText(ctx, players[i], TEXT_X + BAR_GAP * i, TEXT_Y);
        renderText(ctx, Math.round(times[i]), TEXT_X + BAR_GAP * i,
            CLOUD_Y + GAP * 6 + (BAR_MAX_HEIGHT - BAR_MAX_HEIGHT * (times[i] / maxTime)));
        if (players[i] === 'Вы') {
            ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        } else {
            ctx.fillStyle = 'hsl(240, ' + i * 25 + '%, 30%)';
        }
        renderColumn(ctx, CLOUD_X + barWidth + BAR_GAP * i,
            CLOUD_Y + GAP * 8 + (BAR_MAX_HEIGHT - BAR_MAX_HEIGHT * (times[i] / maxTime)), BAR_MAX_HEIGHT * (times[i] / maxTime));
    }
};
