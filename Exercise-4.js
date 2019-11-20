const monthDescription = numberOfMonth => {
	let bulanKata = "";
	switch(numberOfMonth){
		case "01":
			bulanKata = "Januari";
			break;
		case "02":
			bulanKata = "Februari";
			break;
		case "03":
			bulanKata = "Maret";
			break;
		case "04":
			bulanKata = "April";
			break;
		case "05":
			bulanKata = "Mei";
			break;
		case "06":
			bulanKata = "Juni";
			break;
		case "07":
			bulanKata = "Juli";
			break;
		case "08":
			bulanKata = "Agustus";
			break;
		case "09":
			bulanKata = "September";
			break;
		case "10":
			bulanKata = "Oktober";
			break;
		case "11":
			bulanKata = "November";
			break;
		case "12":
			bulanKata = "Desember";
			break;
	} 
	return bulanKata;
}

const dataHandling2 = arrData => {
	arrData.splice(1,2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
	arrData.splice(4,1, "Pria", "SMA Internasional Metro");
	console.log(arrData);

	let tanggalSplit 	= arrData[3].split("/");
	let bulanAngka		= tanggalSplit[1];
	let bulanKata = monthDescription(bulanAngka);
	console.log(bulanKata);

	let joinTanggal 	= tanggalSplit.join("-");
	let sortDesc		= tanggalSplit.sort(function(a,b){return b-a});

	console.log(sortDesc)	
	console.log(joinTanggal);

	console.log(arrData[1].slice(0,15));

}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
