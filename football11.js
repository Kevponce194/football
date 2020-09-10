let getRandNum = function (start, range) {
    let getRand = Math.floor((Math.random() * range) + start);
    while (getRand > range) {
        getRand = Math.floor((Math.random() * range) + start);
    };
    return getRand;
}

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
    position: "DT",
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

let offense = Eagles;

let TeamComparisonPts = 0;

let offenseStr = offense[1].team;

for (let x = 0; x < offense.length; x++) {

    let pow = offense[x].power;

    function AdjPlayerPts(rand) {
        return Math.round(pow / (rand * (getRandNum(1, 10))));
    };

    let PlayersPts = (AdjPlayerPts(offense[x].random));

    if (offense[x].position === "QB" || offense[x].position === "WR") {
        console.log("------------------");
        console.log((offense[x].name) + " is active on this play and has");
        console.log((PlayersPts) + " pts");
        TeamComparisonPts += PlayersPts;
    };
};

console.log("------------------");
console.log(offenseStr + " have " + TeamComparisonPts + " Team Comparison Points on this play");
console.log("------------------");


