let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

const multipleof3 = someNumbers.some(divideBy3)

function divideBy3(num) {
    if (num % 3 === 0){
        return num
    }
}

const multipleof5 = someNumbers.some(divideBy5)

function divideBy5(num) {
    if (num % 5 === 0){
        return num
    }
}

const multipleof60 = someNumbers.some(divideBy60)

function divideBy60(num) {
    if (num % 60 === 0){
        return num
    }
}

const multipleof90 = someNumbers.some(divideBy90)

function divideBy90(num) {
    if (num % 90 === 0){
        return num
    }
}