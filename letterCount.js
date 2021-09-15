const getLetterCount = (string) => {

    if(typeof string != "string"){
        return new Error;
    }

    let letters = string.split("");
    let letterCount = {};

    letters.forEach(letter => {
        if(!letterCount[letter]){
            letterCount[letter] = 1;
        }
        else{
            letterCount[letter] += 1;
        }
    });

    return letterCount;

}

exports.getLetterCount = getLetterCount;