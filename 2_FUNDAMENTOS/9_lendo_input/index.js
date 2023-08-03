const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual sua lingaguem preferia? ', (language) => {
    if (language === 'python'){
        console.log('Isso nem é linguagem!')
    } else {
        console.log(`A minha linguagem preferia é: ${language}`)
    }
    readline.close()
})