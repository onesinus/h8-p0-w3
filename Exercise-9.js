function cariMean(arr) {
	// you can only write your code here!
	let jumlahAngka = 0;
	let banyakData 	= arr.length;

	for(let i = 0; i < banyakData; i++){
		jumlahAngka += arr[i];
	}

	// Kalau pakai Math.ceil (pembulatan keatas cariMean([1, 3, 3]); jadinya malah 3 bukan 2, karena pembulatan 2.3333... dilakukan keatas 
	return Math.round(jumlahAngka / banyakData);
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2 
console.log(cariMean([7, 7, 7, 7, 7])); // 7 
