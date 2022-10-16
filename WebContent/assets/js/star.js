// 관심지역 체크버튼
document.querySelector("#star-btn").addEventListener("click", async function () {
	console.log("HI");
	let dongSel = document.querySelector("#dong");
	let regCode = dongSel[dongSel.selectedIndex].value;
	
	let data = JSON.stringify({sign:"toggleFavorite",dongCode:regCode});
	data = await fetch("main",{method:"POST",body:data});
	data = await data.text();
	data = JSON.parse(data);
	alert(data.msg);
	if(data.msg == "add favorite loc success"){
		document.getElementById("star-img").src = "assets/img/full_star.png";
		makeInterestList();
	}else if(data.msg =="delete favorite loc success"){
		document.getElementById("star-img").src = "assets/img/bin_star.png";
		makeInterestList();
	}
	
});

// 동이 바뀌면 관심지역으로 체크했는 지 확인.
document.querySelector("#dong").addEventListener("change", async function () {
  if (this[this.selectedIndex].value) {
    let regcode = this[this.selectedIndex].value;
    console.log("REG",regcode)
    
    let data = JSON.stringify({sign:"checkFavorite",regCode:regcode});
	data = await fetch("main",{method:"POST",body:data});
	data = await data.text();
	data = JSON.parse(data);
	let isRegister = data["check"];
	if(isRegister==true){
		document.getElementById("star-img").src = "assets/img/full_star.png";
	}else{
		document.getElementById("star-img").src = "assets/img/bin_star.png";
	}
		
  } 
});


// 사용자의 관심목록
async function makeInterestList(){
	let data = JSON.stringify({sign:"getFavorites"});
	data = await fetch("main",{method:"POST",body:data});
	data = await data.text();
	data = JSON.parse(data);
	let opti = ``;
	opti += `<option value="">관심 목록</option>`;
    data.favorites.forEach(function (interest) {
    	opti += `
        <option value="${interest.dongCode}">${interest.sidoName} ${interest.gugunName} ${interest.dongName}</option>
        `;
    });
    document.querySelector("#interest").innerHTML = opti;
}


document.querySelector("#interest").addEventListener("change", function () {
    if (this[this.selectedIndex].value) {
      let regcode = this[this.selectedIndex].value;
    }
  });



makeInterestList();

