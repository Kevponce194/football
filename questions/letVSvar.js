let offTeamComparisonPts = 0;
let defTeamComparisonPts = 0;

let offenseStr = process.argv[2];
//console.log(String(process.argv[2]));
console.log(process.argv[2]);

if (offenseStr == "Eagles") {
    let defenseStr = "Giants";
} else {
    offenseStr = "Giants";
    defenseStr = "Eagles";
};

// line 9 - when 'let' is changed to 'var' the error goes away
// once i did this the if statement worked