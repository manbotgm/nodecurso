
const _ = require("lodash");
// const chalk = require("chalk");
import chalk from "chalk";
// import lodash from "lodash"

const a = [1, 2, 3, 4, 5, 9];
const b = [2, 4, 5, 6, 7, 8];

const diff = _.difference(a, b);

console.log(chalk.bgYellow.black(diff))