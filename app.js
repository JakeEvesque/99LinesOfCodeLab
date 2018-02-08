let friends = ["Britain", "Ryan", "Keith", "Doug", "Jason"];

for(let friend of friends){
    console.log(friend.toUpperCase() + ":");
    for(let i = 99; i>0; i--){
        console.log(i + " lines of code in the file, " + i + " lines of code; " + friend + " strikes one out, clears it all out, " + (i - 1) + " lines of code in the file");

    }
}