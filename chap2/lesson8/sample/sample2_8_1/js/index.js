/*
これから学んでいくコードを記述して行きましょう
*/
var tax = 1.10;
var price = prompt("商品の値段はいくらですか？");
var result = Math.round(price * tax);
alert("お買いあげの合計は、消費税込みで" + result + "円です。");