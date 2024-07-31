import chalk from "chalk"

async function createPassword() {
    let characters = []
    let password = ""
    let passworLength = process.env.PASSWORD_LENGTH

    if(process.env.UPPERCASE_LETTERS==="true")characters.push(..."ABCDEFGHIJKLMNOPQRSTUVWYXZ")

    if(process.env.LOWER_LETTERS==="true")characters.push(..."abcdefghijklmnopqrstuvwyxz")

    if(process.env.NUMBERS==="true")characters.push(..."0123456789")

    if(process.env.SPECIAL_CHARACTERS==="true")characters.push(..."!@#$%&*")


    for (let i = 0; i < passworLength; i++) {
        const index = Math.floor(Math.random()*characters.length)
        password += characters[index]
    }
    console.log(chalk.green("Senha gerada com sucesso:"))
    console.log(password)
}

export { createPassword }