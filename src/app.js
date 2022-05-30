let obj = null;
let num = null;
//ANCHOR Data for the level objects
let mundane = {
    weapon: ["+1 Dagger ", "Masterwork Kama "]
}
//ANCHOR Functions
// Fucntion to get a random number in a range of min and max
function getRandInRange(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//ANCHOR Data for random treasure generator stored in objects representing party character levels.
// level 1 treasure table
let level1 = {
    coins: ["No coin", getRandInRange(1,6) * 1000 + " Copper Pieces ", getRandInRange(1,8) * 100 + " Silver Pieces ", getRandInRange(1,4) * 10 + " Gold Pieces "],
    goods: ["nothing ", "Extravagant painting ", "ornate statue "],
    items: ["Boots of speed ", mundane.weapon[getRandInRange(0, mundane.weapon.length-1)], "Potion of fire breathing "],
}
// level 2 treasure table (draft unfinished)
let level2 = {
    coins: 20,
    goods: "Big painting",
    items: "+1 longsword",
}
//ANCHOR get values from clicking
function setValue(){
    var select = document.getElementById('getObj');
    console.log(obj = select.options[select.selectedIndex].value);
    console.log(num = document.getElementById('getNum').value);
    buildHorde(obj,num);
}
//ANCHOR treasure generator, obj refers to the party character levels objects.
function buildHorde(obj,num){
    // "zero out" arrays for a new treasure roll
    let coinArr = [];
    let itemArr = [];
    let goodsArr = [];
    // for every num add a random coin roll
    for (i = 0; i < num; i ++){
        coinArr.push(obj.coins[getRandInRange(0, obj[coins].length-1)]);
        console.log(obj[coins])
    }
    // for every num add a random item roll
    for (i = 0; i < num; i++){
        itemArr.push(obj.items[getRandInRange(0, obj[items].length-1)]);
    }
    // for every num add a random goods roll
    for (i = 0; i < num; i ++){
        goodsArr.push(obj.goods[getRandInRange(0, obj[goods].length-1)]);
    }
    // following lines add the new arrays into the html document.
    document.getElementById("coins").innerHTML = coinArr;
    document.getElementById("items").innerHTML = itemArr;
    document.getElementById("goods").innerHTML = goodsArr;
    return;
}