const getString = (str) => {
    let changeStr = str.toLowerCase();
    changeStr = changeStr[0].toUpperCase() + changeStr.slice(1);
    return changeStr;
}

let string = getString('привет Мир'); 
console.log('string: ', string);



