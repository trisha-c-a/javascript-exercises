const palindromes = function (phrase) {
    //Remove punctuation
    //lower case phrase
    const punctuation = new Set([
                                '.', ',', '!', '?', ':', ';', '-', '—',
                                '(', ')', '[', ']', '{', '}', '"', "'", '…', " "
                                ]);
    let newPhrase = "";
    for (i=0;i<phrase.length;i++){
        if (!punctuation.has(phrase[i])){
            newPhrase+=phrase[i].toLowerCase();
        }
    }
    
    const newPhraseLength = newPhrase.length;

    for(i=0;i<newPhraseLength/2;i++){
        if(newPhrase[i]!=newPhrase[newPhraseLength-i-1]){
            return false;
        }
    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;
