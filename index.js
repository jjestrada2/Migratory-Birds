'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Write your code here
    arr.sort();
    let conteo={};
    var lowestMostFrequentlyNumber=0;
    var frequency=0;
for(const dato of arr){
    if(conteo[dato]){
        conteo[dato]+=1;
    }else{
        conteo[dato]=1;
    }

    if(conteo[dato]>frequency){
        frequency=conteo[dato];
        lowestMostFrequentlyNumber=dato;
       
    }
   
}

return lowestMostFrequentlyNumber;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
