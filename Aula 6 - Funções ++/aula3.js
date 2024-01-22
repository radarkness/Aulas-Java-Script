var nun1 = 7.5;
var nun2 = 5;
var nun3 = 0;
var total = ((nun1+nun2+nun3)/3);

if (total >= 7){
    console.log('parabéns você passou');

}   else if (total >= 4 && total <= 6){
    console.log('está de recumeração !');

}   else if (total >= 3){
    console.log('ta reprovado, vai estudar vagabundo');
}

console.log(total.toFixed(2));