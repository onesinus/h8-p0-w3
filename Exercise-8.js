function pasanganTerbesar(num) {
	// you can only write your code here!
	let stringAngka 	= num.toString();
	let panjangAngka 	= stringAngka.length;
	let terbesar 		= 0;

	for(let i = 0; i < panjangAngka-1; i++){
		let gabunganAngka = `${stringAngka[i]}${stringAngka[i+1]}`;
		gabunganAngka = parseInt(gabunganAngka);
		if(gabunganAngka > terbesar){
			terbesar = gabunganAngka;
		}
	}
	return terbesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99 
