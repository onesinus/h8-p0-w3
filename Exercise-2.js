const balikString = (pString) => {
	let hasilDibalik = "";
	for(let i = pString.length - 1; i >= 0; i--){
		hasilDibalik += pString[i]; 			
	}
	return hasilDibalik;
}

console.log(balikString("hello world!"));
