
/*-----------EaglesVsGiants10.js------------

This program loops through an array of objects and returns
the total number of Comparison pts based on two active players based and their position.value.
The 2 position.value('s) that are active is based on wheter a Run or Pass is selected.  
https://nodejs.org/docs/latest/api/process.html
process.argv

*/


let EaglesComparisonPts = 0;
let GiantsComparisonPts = 0;

let Eagles_Score = 0;
let Giants_Score = 0;

console.log(process.argv)
/* --- This determines who has the Ball ---*/

let whoHasBall = process.argv[2]

/* --- This determines if the play 
is a Run or a Pass ---*/
let play = process.argv[3]
/*
if (Math.floor((Math.random() * 2) + 1) == 2) {
    play = "Pass";
};
*/

/* --- This simply prints to the screen 
who has the Ball and what type of play it is. ---*/
console.log("------------------");
console.log(whoHasBall + " have the ball");
console.log("The play is a " + play);

/* --- This is a function to determine a random number.
It is called twice. Once inside the array as the players random:value,  
and then again as the overall plays random number.  ---*/
let getRandNum = function (start, range) {
    let getRand = Math.floor((Math.random() * range) + start);
    while (getRand > range) {
        getRand = Math.floor((Math.random() * range) + start);
    };
    return getRand;
};

let Eagles = [{
        name: "Wentz",
        power: 99,
        position: "QB",
        random: getRandNum(1, 10)
    },
    {
        name: "Jackson",
        power: 85,
        position: "WR",
        random: getRandNum(1, 10)
    },
    {
        name: "Shady",
        power: 88,
        position: "RB",
        random: getRandNum(1, 10)
    },
    {
        name: "Cox",
        power: 99,
        position: "DT",
        random: getRandNum(1, 10)
    },
    {
        name: "Jenkins",
        power: 80,
        position: "DB",
        random: getRandNum(1, 10)
    },
];

let Giants = [{
        name: "Manning",
        power: 99,
        position: "QB",
        random: getRandNum(1, 10)
    },
    {
        name: "Toomer",
        power: 85,
        position: "WR",
        random: getRandNum(1, 10)
    },
    {
        name: "Barber",
        power: 88,
        position: "RB",
        random: getRandNum(1, 10)
    },
    {
        name: "Strahan",
        power: 99,
        position: "DT",
        random: getRandNum(1, 10)
    },
    {
        name: "Apple",
        power: 80,
        position: "DB",
        random: getRandNum(1, 10)
    },
];
/*---- This section returns the Teams Comparison Points ----*/

switch (whoHasBall) {

    case "Eagles":

        /* ---- This runs Eagles offense ----------------------------------------------------------->*/

        for (let x = 0; x < Eagles.length; x++) {

            /*----  the below function divides the power by the players random number
            Really not sure if I am interpreting Justin's requests properly ----*/

            let pow = (Eagles[x].power);

            function AdjPlayerPts(rand) {
                return Math.round(pow / (rand * (getRandNum(1, 10))));
            };

            let PlayersPts = (AdjPlayerPts(Eagles[x].random));

            /*---  The below 2 declarations and "if" statement decide which
            2 players on the offense are active on the play ----*/

            let player1 = "QB";
            let player2 = "";

            if (play == "Run") {
                player2 = "RB";
            } else {
                player2 = "WR";
            };

            /*---  The below "if" statement takes the variables offn1 and offn2 from the above "if" statement
            and returns the number of Comparison Pts for the 2 active players. ----*/
            if ((Eagles[x].position) === player1 || (Eagles[x].position) === player2) {
                console.log("------------------");
                console.log((Eagles[x].name) + " is active on this play and has");
                console.log((PlayersPts) + " pts");
                EaglesComparisonPts += PlayersPts;
            };
        };

        console.log("------------------");
        console.log("Eagles offense has " + EaglesComparisonPts + " Team Comparison Points on this play");
        console.log("------------------");


        /* ---- This runs Giants defense --------------------------------------------------------->*/

        for (let x = 0; x < Giants.length; x++) {

            /*----  the below function divides the power by the players random number
            Really not sure if I am interpreting Justin's requests properly ----*/

            let pow = (Giants[x].power);

            function AdjPlayerPts(rand) {
                return Math.round(pow / (rand * (getRandNum(1, 10))));
            };

            let PlayersPts = (AdjPlayerPts(Giants[x].random))

            /*---  The below "if" statement takes the variables offn1 and offn2 from the above "if" statement
            and returns the number of Comparison Pts for the 2 active players. ----*/
            if ((Giants[x].position) === "DB" || (Giants[x].position) === "DT") {
                console.log("------------------");
                console.log((Giants[x].name) + " is active on this play and has");
                console.log((PlayersPts) + " pts");
                GiantsComparisonPts += PlayersPts;
            };
        };

        console.log("------------------");
        console.log("Giants defense has " + GiantsComparisonPts + " Team Comparison Points on this play");
        console.log("------------------");

        /* ----------   Score equations if Eagles have ball ----------*/

        console.log("------------------");

        let EOcomparisonPtsDiff = EaglesComparisonPts - GiantsComparisonPts;
        console.log(EOcomparisonPtsDiff);

        if (EOcomparisonPtsDiff > 7) {
            Eagles_Score = Eagles_Score + 6;
            console.log("Eagles get a Touchdown!");
        } else if (EOcomparisonPtsDiff >= 3) {
            Eagles_Score = Eagles_Score + 3;
            console.log("Eagles get a Field Goal!");
        } else if (EOcomparisonPtsDiff < -6) {
            Giants_Score = Giants_Score + 6;
            console.log("Giants get a Pick Six!");
        } else {
            console.log("No scoring on this play");
        };

        break;

    case "Giants":

        /* ---- This runs Giants offense ----------------------------------------------------------->*/

        for (let x = 0; x < Giants.length; x++) {

            /*----  the below function divides the power by the players random number
            Really not sure if I am interpreting Justin's requests properly ----*/

            let pow = (Giants[x].power);

            function AdjPlayerPts(rand) {
                return Math.round(pow / (rand * (getRandNum(1, 10))));
            };

            let PlayersPts = (AdjPlayerPts(Giants[x].random));

            /*---  The below 2 declarations and "if" statement decide which
            2 players on the offense are active on the play ----*/

            let player1 = "QB";
            let player2 = "";

            if (play == "Run") {
                player2 = "RB";
            } else {
                player2 = "WR";
            };

            /*---  The below "if" statement takes the variables offn1 and offn2 from the above "if" statement
            and returns the number of Comparison Pts for the 2 active players. ----*/
            if ((Giants[x].position) === player1 || (Giants[x].position) === player2) {
                console.log("------------------");
                console.log((Giants[x].name) + " is active on this play and has");
                console.log((PlayersPts) + " pts");
                GiantsComparisonPts += PlayersPts;
            };
        };

        console.log("------------------");
        console.log("Giants offense has " + GiantsComparisonPts + " Team Comparison Points on this play");
        console.log("------------------");

        /* ---- This runs Eagles defense --------------------------------------------------------->*/

        for (let x = 0; x < Eagles.length; x++) {

            /*----  the below function divides the power by the players random number
            Really not sure if I am interpreting Justin's requests properly ----*/

            let pow = (Eagles[x].power);

            function AdjPlayerPts(rand) {
                return Math.round(pow / (rand * (getRandNum(1, 10))));
            };

            let PlayersPts = (AdjPlayerPts(Eagles[x].random));

            /*---  The below "if" statement takes the variables offn1 and offn2 from the above "if" statement
            and returns the number of Comparison Pts for the 2 active players. ----*/
            if ((Eagles[x].position) === "DB" || (Eagles[x].position) === "DT") {
                console.log("------------------");
                console.log((Eagles[x].name) + " is active on this play and has");
                console.log((PlayersPts) + " pts");
                EaglesComparisonPts += PlayersPts;
            };
        };

        console.log("------------------");
        console.log("Eagles defense has " + EaglesComparisonPts + " Team Comparison Points on this play");
        console.log("------------------");

        /* ----------   Score equations if Giants have ball ----------*/

        console.log("------------------");

        let GOcomparisonPtsDiff = GiantsComparisonPts - EaglesComparisonPts;
        console.log("Comparison is " + GOcomparisonPtsDiff + " pts");


        if (GOcomparisonPtsDiff > 7) {
            Giants_Score = Giants_Score + 6;
            console.log("Giants get a Touchdown!");
        } else if (GOcomparisonPtsDiff >= 3) {
            Giants_Score = Giants_Score + 3;
            console.log("Giants get a Field Goal!");
        } else if (GOcomparisonPtsDiff < -6) {
            Eagles_Score = Eagles_Score + 6;
            console.log("Eagles get a Pick Six!");
        } else {
            console.log("No scoring on this play");
        };

        break;
};

console.log("------------------");
console.log("Eagles " + Eagles_Score);
console.log("Giants " + Giants_Score);