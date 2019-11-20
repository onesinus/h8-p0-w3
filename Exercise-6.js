function angkaPalindrome(num) {
	// you can only write your code here!
	let isPalindrome 	= false;
	let nextPalindrome;

	for(let i = num+1; !isPalindrome; i++){
		/* Proses pengecekan apakah angka berikutnya adalah palindrome */
		let numberToString = i.toString();
		let angkaDibalik = "";
		for(let j = numberToString.length; j > 0; j--){
			angkaDibalik += numberToString[j-1];
		}

		/* Jika ya stop loop dan set nilai next palindrome, Jika belum lanjutkan sampai dapat :) */
		if(i === parseInt(angkaDibalik)){
			isPalindrome = true;
			nextPalindrome = i;
		}
	}
	
	return nextPalindrome;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
