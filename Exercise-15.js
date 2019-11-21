function groupAnimals(animals) {
	// you can only write your code here!
	animalsLetterGroup 	= arrGroupingByFirstLetter(sortArray(animals));

	// Cek semua data dalam array dan kelompokan sesuai groupnya
	for(let j = 0; j < animals.length; j++){
		let animalName		= animals[j]
		let animalFirstLetter 	= animalName[0];
		if(animalsLetterGroup[animalFirstLetter][0] === animalFirstLetter){
			animalsLetterGroup[animalFirstLetter][animalsLetterGroup[animalFirstLetter].length] = animalName;
		}
	}

	// Pakai .sort() sepertinya lebih mudah, tapi ga asik, i try to create it manually using buble sort algoritm :)
	function sortArray(arr){
		for(let arrLoop = 0; arrLoop < arr.length; arrLoop++){
			for(let k = 0,l = 1; k < arr.length, l < arr.length; k++, l++){	
				if(arr[l] < arr[k]){
					let tempArrL = arr[l];
					arr[l] = arr[k];
					arr[k] = tempArrL;	
				} 
			}
		}
		return arr;
	}

	// Looping data dalam array dan kembalikan hanya pengelompokan berdasarkan huruf pertama
	function arrGroupingByFirstLetter(arr){
		let groupingArr = [];
		for(let i = 0; i < animals.length; i++){
			groupingArr[animals[i][0]] = [animals[i][0]];	
		} 		
		return groupingArr
	}

	return animalsLetterGroup;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
