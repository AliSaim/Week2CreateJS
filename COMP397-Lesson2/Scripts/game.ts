/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
 

// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;


//Game Variables
var helloLabel: createjs.Text; //create a reference   //to make a new object use "new"


function init()
{
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); //Framerate for the game
    createjs.Ticker.on("tick", gameLoop);


    main();
}


// our main game loop - refreshed 60 fps
function gameLoop()
{
    stage.update();
}


//out Main Game Function
function main()
{
    console.log("Game is running");
    helloLabel = new createjs.Text(" Hello world", "40px Consolas", "#000000");
    helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
    helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;

    helloLabel.x = 160;
    helloLabel.y = 240;



    stage.addChild(helloLabel);
}