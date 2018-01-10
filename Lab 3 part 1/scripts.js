let friends = ["Evan", "Hayley", "Bob", "Joe", "Jill"];
function reiterate() {
    for (i = 0; i != 5; i++)
        for (x = 99; x != 0; x--){
            if (x > 2) {
                console.log(x + " lines of code in the file, " + x + " lines of code;");
                console.log(friends[i] + " strikes one out, clears it all out, ");
                console.log(x-1 + " lines of code in the file!");
            } else if (x == 2) {
                console.log(x + " lines of code in the file, " + x + " lines of code;");
                console.log(friends[i] + " strikes one out, clears it all out, ");
                console.log(x-1 + " line of code in the file!");
            } else {
                console.log(x + " line of code in the file, " + x + " line of code;");
                console.log(friends[i] + " strikes one out, clears it all out, ");
                console.log(x-1 + " lines of code in the file!");
        }
    }
};

reiterate();