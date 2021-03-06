// Generator Functions //
const  resultEl = document.getElementById('result');
const  lengthEl = document.getElementById('length');
const  uppercaseEl = document.getElementById('uppercase');
const  lowercaseEl = document.getElementById('lowercase');
const  numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const  clipboardEl = document.getElementById('clipboard');
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

generateEl.addEventListener("click", ()=> {
    const length = lengthEl.value;
    console.log(length)
});

generateEl.addEventListener("click", ()=> {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

resultEl.innerHTML =  generatePassword
    (   hasLower, 
        hasNumber, 
        hasSymbol, 
        hasUpper,
        length)
})

function generatePassword(lower,number,symbol,upper,length){
    let generatePassword = "";
    
    const typesCount =  lower + upper + number + symbol;
    console.log('typescount:',typesCount)
    const typesArr = [{lower},{upper},{number},{symbol}].filter
    (
        item => Object.values(item)[0]
    )
    
    console.log('typesArr:', typesArr);
    
    if(typesCount === 0) {
        return '';
    }
    
    for(let i= 0; i < length; i += typesCount){
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            
            // console.log('funcName: ', funcName);
    
            const finalPassword = generatePassword += randomFunc[funcName]();
        });
    }

    const finalPassword = generatePassword.slice(0, length);

    return finalPassword;
    }

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

function getRandomSymbol() {
    const symbols = '!@#$%^*+-='
    return symbols[Math.floor(Math.random() * symbols.length)];
};







