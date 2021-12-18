let fs = require("fs");

let BigNumber = require("big-number")

let method = require('./method.js');
let contract = require('./contract.js');

// this sets up my .env file
require('dotenv').config()

//loads our environment variables
infuraToken = process.env.INFURA_TOKEN
contractAddress = process.env.CONTRACT_ADDRESS
ownerAddress = process.env.OWNER_ADDRESS
privateKey = Buffer.from(process.env.PRIVATE_KEY, 'hex')

const distribute = async() => {
    // read the account.txt file
    let distributionAddresses = fs.readFileSync('./accounts.txt', 'utf8').split('\r\n');

    console.log(`distro addresses are: ${ distributionAddresses}`);

    // get the balance of the token owner
    let ownerBalance = await contract.getBalanceOfAccount(ownerAddress);
    let ob = new BigNumber(ownerBalance);
    console.log(`owner balance is ${ob}`);


    // get the symbol of the token
    let tokenSymbol = await contract.getSymbol();
    console.log(`symbol is ${tokenSymbol}`);

    // get five percent of this balance
    let fivePerCent = ob.div(20);
    console.log(`five per cent of owner balance is ${fivePerCent}`);

    // work out how many addresses in file (N)
    let numberOfAddresses = distributionAddresses.length;
    console.log(`number of addresses in file is ${numberOfAddresses}`);

    // divide the 5% by N to get distroAmount
    let distributionAmount = fivePerCent.div(numberOfAddresses)
    console.log(`distribution amount per address is ${distributionAmount}`);

    for (looper = 0; looper < numberOfAddresses; looper++) {
        console.log(`about to distribute ${tokenSymbol}, ${distributionAmount} tokens to ${distributionAddresses[looper]}`)
        let retval = await method.transferToken(distributionAddresses[looper], distributionAmount)
    }
}
distribute()
