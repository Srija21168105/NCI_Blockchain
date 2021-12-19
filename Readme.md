## Pre-Requisites
1. Docker

## Installation

1. Git Clone 
`git clone https://github.com/agrawallalit/NCI_Blockchain.git` <br>

2. Create .env file at the root directory with following content. 
`INFURA_TOKEN= < Infura Project Token >`<br>
`CONTRACT_ADDRESS= < Address of Contract deployed>`<br>
`OWNER_ADDRESS= < Metamask Account ID >`<br>
`PRIVATE_KEY= < Private from Metamask Account >`<br>

Note:- Kindly replace the above values correctly.

3. Creating Docker Image
` docker build -t lablockchain:1.0 .` <br>

4. Run Docker image
`docker run lablockchain:1.0`<br>

## Trouble Shooting

1. Invalid address error.
- Kindly make following chnages in distribute.js file.
    change `.split('\r\n');` to `.split('\n');` on line number 19