function RandomNumberGen(l) {
    var arrayOfRandomNum = [];
    for (var i = 0; i <= l; i++) {
        var hold = Math.floor((Math.random() * 100) + 1);
        arrayOfRandomNum.push(hold);
    }

    return arrayOfRandomNum;
}

function stringArray(array) {
    let alertString = array.toString();
    alert(alertString);
    console.log(alertString);
}
var randomArray = RandomNumberGen(3);
stringArray(randomArray);