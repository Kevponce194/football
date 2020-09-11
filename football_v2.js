let getRandNum = function (start, range) {
    let getRand = Math.floor((Math.random() * range) + start);
    while (getRand > range) {
        getRand = Math.floor((Math.random() * range) + start);
    };
    return getRand;
}

var eaglesScore = 0;
var giantsScore = 0;

let Eagles = [{
        team: "Eagles",
        name: "Wentz",
        power: 99,
        position: "QB",
        random: getRandNum(1, 10)
    },
    {
        team: "Eagles",
        name: "Jackson",
        power: 85,
        position: "WR",
        random: getRandNum(1, 10)
    },
    {
        team: "Eagles",
        name: "Shady",
        power: 88,
        position: "RB",
        random: getRandNum(1, 10)
    },
    {
        team: "Eagles",
        name: "Cox",
        power: 99,
        position: "DB",
        random: getRandNum(1, 10)
    },
    {
        team: "Eagles",
        name: "Jenkins",
        power: 80,
        position: "DB",
        random: getRandNum(1, 10)
    },
];

let Giants = [{
        team: "Giants",
        name: "Manning",
        power: 99,
        position: "QB",
        random: getRandNum(1, 10)
    },
    {
        team: "Giants",
        name: "Toomer",
        power: 85,
        position: "WR",
        random: getRandNum(1, 10)
    },
    {
        team: "Giants",
        name: "Barber",
        power: 88,
        position: "RB",
        random: getRandNum(1, 10)
    },
    {
        team: "Giants",
        name: "Strahan",
        power: 99,
        position: "DT",
        random: getRandNum(1, 10)
    },
    {
        team: "Giants",
        name: "Apple",
        power: 80,
        position: "DB",
        random: getRandNum(1, 10)
    },
];

// --- This combines the arrays
var comboArray = [...Eagles, ...Giants];

var offTeamComparisonPts = 0;
var defTeamComparisonPts = 0;

let offenseStr = process.argv[2];
//console.log(process.argv[2]);

if (offenseStr == "Eagles") {
    var defenseStr = "Giants";
} else {
    offenseStr = "Giants";
    defenseStr = "Eagles";
};

let playStr = process.argv[3];

for (let x = 0; x < comboArray.length; x++) {

    let pow = comboArray[x].power;

    function AdjPlayerPts(rand) {
        return Math.round(pow / (rand * (getRandNum(1, 10))));
    };

    let PlayersPts = (AdjPlayerPts(comboArray[x].random));

    let player1 = "QB"; 
    let player2 = "";

            if (playStr == "Run") {
                player2 = "RB";
            } else {
                player2 = "WR";
            };

    if ((comboArray[x].team === offenseStr) && (comboArray[x].position === player1 || comboArray[x].position === player2)) {
        console.log("------------------");
        console.log((comboArray[x].name) + " is active on this play and has");
        console.log((PlayersPts) + " pts");
        offTeamComparisonPts += PlayersPts;
    };
    if ((comboArray[x].team === defenseStr) && (comboArray[x].position === "DB" || comboArray[x].position === "DT")) {
        console.log("------------------");
        console.log((comboArray[x].name) + " is active on this play and has");
        console.log((PlayersPts) + " pts");
        defTeamComparisonPts += PlayersPts;
    };
};

console.log("------------------");
console.log(offenseStr + " have " + offTeamComparisonPts + " Offensive Comparison Points on this play");
console.log(defenseStr + " have " + defTeamComparisonPts + " Defensive Comparison Points on this play");
console.log("------------------");

var ComparisonPtsDiff = offTeamComparisonPts - defTeamComparisonPts;
        console.log("Comparison is " + ComparisonPtsDiff + " pts");

        if (ComparisonPtsDiff > 7) {
            if (offenseStr == "Eagles") {
                eaglesScore = eaglesScore + 6;
            } else {giantsScore = giantsScore + 6;
            };
            console.log(offenseStr + " get a Touchdown!");
        } else if (ComparisonPtsDiff >= 3) {
            if (offenseStr == "Eagles") {
                eaglesScore = eaglesScore + 3;
            } else {giantsScore = giantsScore + 3;
            };
            console.log(offenseStr + " get a Touchdown!");
        } else if (ComparisonPtsDiff < -6) {
            if (defenseStr == "Eagles") {
                eaglesScore = eaglesScore + 6;
            } else {giantsScore = giantsScore + 6;
            };
            console.log(defenseStr + " get a Pick 6!");
        } else {
            console.log("No scoring on this play");
        };

console.log("------------------");
console.log("Eagles " + eaglesScore);
console.log("Giants " + giantsScore);
console.log(" ");
