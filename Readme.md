## Pre-Requisites
1. Docker

## Installation

1. Git Clone 
`git clone https://github.com/agrawallalit/NCI_Blockchain.git` <br>

2. Create .env file with following content. 
INFURA_TOKEN= < Infura Project Token >
CONTRACT_ADDRESS= < Address of Contract deployed>
OWNER_ADDRESS= < Metamask Account ID >
PRIVATE_KEY= < Private from Metamask Account >

Note:- Kindly replace the above values correctly.

3. Creating Docker Image
` docker build -t lablockchain:1.0 .` <br>

4. Run Docker image
`docker run lablockchain:1.0`<br>

## Trouble Shooting

1. Invalid address error.
- Kindly make following chnages in distribute.js file.
    change `.split('\r\n');` to `.split('\n');` on line number 19