import prompt from "prompt"
import qr from "qrcode-terminal"
import { qrCodePrompt } from "../../prompts/prompt-qrcode.js"
import chalk from "chalk"

async function createQrCode() {
    prompt.start()
    prompt.get(qrCodePrompt, async (err,result)=>{
        if (err) {
            console.log("Ocorreu um erro")
        } else {
            const isSmall = result.type == 2
            qr.generate(result.link,{small:isSmall}, (qrcode)=>{
                console.log(chalk.green("QR Code gerado com sucesso!\n"))
                console.log(qrcode)
            })
        }
    })
}



export {
    createQrCode
}