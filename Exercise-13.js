function targetTerdekat(arr) {
	// you can only write your code here!
	let lokasiX;
	let lokasiO;
	
	let selisih = arr.length;
	let tempSelisih;

	for(let i = 0; i < arr.length; i++){
		if(arr[i] === "x"){
			lokasiX = i;
		}else if(arr[i] === "o"){
			lokasiO = i;			
		}

		if(lokasiX >= 0  && lokasiO >= 0){
			tempSelisih 	= lokasiX - lokasiO; // Mendapatkan selisih dengan jarak antar index
			tempSelisih 	= tempSelisih > 0 ? tempSelisih : tempSelisih * -1; // Mendapatkan selisih tetapi dengan nilai absolute

			selisih 	= tempSelisih < selisih ? tempSelisih: selisih;
		}
	}	

	return lokasiX?selisih:0;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
