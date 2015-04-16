﻿// This is the Instruction State
/*Source  file  name: instruction.ts, Author's  name: Zhe Yan (300706310),  Last  Modified  by: Zhe Yan,  
Date  last  Modified: 2015_3_18,  Program description： This file is the instruction state file, it controls and create the instruction state and scene,
Revision  History : Version 2.0*/
//This is the instruction state
module states {
    //update the instruction state game background
    export function instructionState() {
        sea.update();
        player.update();
    }

    //scene variables
    export var backBtn: objects.Button;

    //event listerner for back button clicked in instruction page
    export function goBackBtnClicked(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        //change state to menu state
        currentState = constants.MENU_STATE;
        changeState(currentState);
    }

    //instruction scene
    export function instructionScene( state ) {
        //array used to display instructions
        var actualInstructionsLine = [];
        var instructionsStringArray = [];

        //game container
        game = new createjs.Container();

        //set the game background
        sea = new objects.Sea(stage, game);

        // Show Cursor
        stage.cursor = "default";

        //define instruction string
        instructionsStringArray = [
            "This is the Dtzz game, ",
            "you can use the key D to move forward,",
            "key A to move backward and key W to jump. ",
            "There are three levels in the game.",
            "If you collect one crystal, you win points",
            "Win as much points as possible!",
            "",
            "If you collide with any obstacles, you lose one life,  ",
            "you have five lives in total, Have Fun!"
        ];

        // Display the actual Instruction
        for (var line = 0; line < instructionsStringArray.length; line++) {
            actualInstructionsLine[line] = new createjs.Text(instructionsStringArray[line], "32px Dock51", "#A8EA1F");
            actualInstructionsLine[line].x = stage.canvas.width * 0.05;
            actualInstructionsLine[line].y = 20 + (40 * line);

            //add instruction to game container
            game.addChild(actualInstructionsLine[line]);
        }

        // Display Play game Button
        playButton = new objects.Button(stage.canvas.width * 3 / 4, 420, "btnPlay");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        // Display Go Back Button
        goBackBtn = new objects.Button(stage.canvas.width / 4, 420, "btnBack");
        game.addChild(goBackBtn);
        goBackBtn.addEventListener("click", goBackBtnClicked);

        player = new objects.Player(state);
        game.addChild(player);

        //add game container to stage
        stage.addChild(game);
    }

}