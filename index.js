// Code your solutions in this file
function writeCards(array, str){
  let thanks = [];
  for (let i = 0; i < array.length; i++) {
    thanks.push(`Thank you, ${array[i]}, for the wonderful ${str} gift!`);
}
return thanks;
}