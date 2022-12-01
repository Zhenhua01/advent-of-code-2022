"use strict";

const { readData } = require("./readInputs");
const path = process.argv[2];

//

/**
 */
async function calorieCounting1(path) {
  const data = await readData(path);

}

calorieCounting1(path);


//

/**
 */
async function calorieCounting2(path) {
  const data = await readData(path);


  // console.log("calorieCounting2:", count);
  // return count;
}

calorieCounting2(path);


// node 1_calorieCounting.js 1_input.txt