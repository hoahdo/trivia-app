// Fisher-Yates Shuffle
// https://bost.ocks.org/mike/shuffle/
function shuffle (array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = 
        [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// Generate random string of numbers
function randID () {
    return Math.random().toFixed(9);
}

// Decodes API encoding
function decode(apiData) {
    let text = document.createElement("textarea");
    text.innerHTML = apiData;
    return text.value;
}

export {shuffle, randID, decode};