import inquirer from "inquirer";
import chalk from "chalk";

// const inquirer = require('inquirer')

inquirer
  .prompt([
    { name: 'p1', message: 'Qual seu nome? ' },
    { name: 'p2', message: 'Qual a idade? ' },
  ])
  .then((answers) => {
    console.log(answers)
    const nome = answers.p1
    const idade = parseInt(answers.p2)

    console.log(`O nome do aluno é ${nome}`)
    console.log(`A idade do aluno é ${idade}`)

    const response = `O nome do usuário é ${answers.p1} e ele tem ${answers.p2} anos`
    console.log(chalk.bgYellow.black(response))

  })
  .catch((err) => {
    console.log(err)
  })