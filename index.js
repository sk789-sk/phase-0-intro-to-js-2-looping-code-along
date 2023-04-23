// Code your solutions in this file

//for (let age = 30; age <40 ;age++){
//    console.log(`I'm ${age} years old. Happy birthday to me!`);
//}

const gifts = ["teddy bear", "drone","doll"];

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length;i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`)

    }
    return gifts;
}

wrapGifts(gifts)

function writeCards(array,name){
    const outArray = []
    for (let i =0; i< array.length;i++){
        outArray.push(`Thank you, ${array[i]}, for the wonderful ${name} gift!`)
        debugger
    }
    return outArray
}

x = writeCards(['tom','bob','sally'], 'birthday')

function countDown(posint){
    while (posint >=0){
        console.log(posint)
        posint--
    }
}