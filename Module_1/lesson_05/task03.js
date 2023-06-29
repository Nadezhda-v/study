const getStr = (str) => {
    let changeStr = '';
    for(let i = 0; i < str.length; i++) {
        changeStr += str[str.length - 1 - i];
    }
    return changeStr;
}

let str = getStr('Привет мир'); 
console.log('string: ', str);