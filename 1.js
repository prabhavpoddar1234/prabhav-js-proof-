let nftCollection = [];

function mintNFT(name, hairColor, pantsType, accessory) {
    const nft = {
        name: name,
        hairColor: hairColor,
        pantsType: pantsType,
        accessory: accessory,
    };
    nftCollection.push(nft);
}

function listNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log("ID: " + (i + 1));
        console.log("Name: " + nftCollection[i].name);
        console.log("Hair Color: " + nftCollection[i].hairColor);
        console.log("Pants Type: " + nftCollection[i].pantsType);
        console.log("Accessory: " + nftCollection[i].accessory);
    }
}

function getTotalSupply() {
    return nftCollection.length;
}

mintNFT("Pankaj", "Black", "jeans", "hat");
mintNFT("Vishnu", "Blonde", "shorts", "watch");
mintNFT("Gitesh", "Brown", "trousers", "bracelet");

listNFTs();

console.log("Total number of nfts are : " + getTotalSupply());