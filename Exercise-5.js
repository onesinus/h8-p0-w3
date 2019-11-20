function palindrome(kata) {
	// you can only write your code here!
	let kataDibalik = "";
	for(let i = kata.length -1; i >= 0 ; i--){
		kataDibalik += kata[i];
	} 
	return kata === kataDibalik;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false 
