document.querySelector("#list-btn").addEventListener("click", async function () {
  let url = "main";
//    "http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev";
  console.log("GOOD");
  let gugunSel = document.querySelector("#gugun");
  let regCode = gugunSel[gugunSel.selectedIndex].value.substr(0, 5);
  let yearSel = document.querySelector("#year");
  let year = yearSel[yearSel.selectedIndex].value;
  let monthSel = document.querySelector("#month");
  let month = monthSel[monthSel.selectedIndex].value;
  let dealYM = year + month;
  let queryParams = 
    encodeURIComponent("sign") +"="+encodeURIComponent("findList");
//    "=" +
//    "ksVcyIBkEidF8Y5BbRC7LF84zpKP3VJ2FQ0C1RQWaPoGb85yPyMOEWS92c36mDQtwYyATPIT622lpCQJpblxKg%3D%3D"; /*Service Key*/
  queryParams +=
    "&" + encodeURIComponent("LAWD_CD") + "=" + encodeURIComponent(regCode); /*아파트소재 구군*/
  queryParams +=
    "&" + encodeURIComponent("DEAL_YMD") + "=" + encodeURIComponent(dealYM); /*조회년월*/
  queryParams += "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /*페이지번호*/
  queryParams +=
    "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("100"); /*페이지당건수*/

  let data = JSON.stringify({sign:"findList"});
	console.log(data);
	data = await fetch("main",{method:"POST",body:data});
	data = await data.text();
	data = JSON.parse(data);
	console.log(data);
});









function makeList(data) {
  document.querySelector("table").setAttribute("style", "display: ;");
  let tbody = document.querySelector("#aptlist");
  let parser = new DOMParser();
  let dongSel = document.querySelector("#dong");
  let donginfo = dongSel[dongSel.selectedIndex].innerText;
  const xml = parser.parseFromString(data, "application/xml");
  console.log(xml);
  initTable();
  apts = xml.querySelectorAll("item");
  console.log(apts);
  apts.forEach((apt) => {
    if (apt.querySelector("법정동").textContent.trim() == donginfo) {
      let tr = document.createElement("tr");
      tr.setAttribute("class", "aptInfo;");
      let nameTd = document.createElement("td");
      nameTd.appendChild(document.createTextNode(apt.querySelector("아파트").textContent));
      tr.appendChild(nameTd);

      let floorTd = document.createElement("td");
      floorTd.appendChild(document.createTextNode(apt.querySelector("층").textContent));
      tr.appendChild(floorTd);

      let areaTd = document.createElement("td");
      areaTd.appendChild(document.createTextNode(apt.querySelector("전용면적").textContent));
      tr.appendChild(areaTd);

      let dongTd = document.createElement("td");
      dongTd.appendChild(document.createTextNode(apt.querySelector("법정동").textContent));
      tr.appendChild(dongTd);

      let priceTd = document.createElement("td");
      priceTd.appendChild(
        document.createTextNode(apt.querySelector("거래금액").textContent + "만원")
      );
      priceTd.classList.add("text-end");
      tr.appendChild(priceTd);

      tr.addEventListener("click", () => {
        let load = apt.querySelector("도로명").textContent;
        let buildingCode = apt.querySelector("도로명건물본번호코드").textContent;
        let queryString = load + " " + buildingCode;

        geocoder.addressSearch(queryString, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new kakao.maps.Marker({
              map: map,
              position: coords,
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            var infowindow = new kakao.maps.InfoWindow({
              content: `<div style="width:150px;text-align:center;padding:6px 0;">${aptName}</div>`,
            });
            infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
            map.setLevel(2);
          }
        });
        console.log(apt);
      });

      let load = apt.querySelector("도로명").textContent;
      let buildingCode = apt.querySelector("도로명건물본번호코드").textContent;
      let aptCost = apt.querySelector("거래금액").textContent;
      let queryString = load + " " + buildingCode;
      let aptName = apt.querySelector("아파트").textContent;
      let year = apt.querySelector("년").textContent;
      let month = apt.querySelector("월").textContent;
      let day = apt.querySelector("일").textContent;
      let point = [];
      // var customOverlay ;

      geocoder.addressSearch(queryString, function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          // 결과값으로 받은 위치를 마커로 표시합니다
          var marker = new kakao.maps.Marker({
            map: map,
            position: coords,
            clickable: true,
          });

          // 인포윈도우로 장소에 대한 설명을 표시합니다
          var infowindow = new kakao.maps.InfoWindow({
            content: `<div style="width:150px;text-align:center;padding:6px 0;">${aptName}</div>`,
          });
          infowindow.open(map, marker);

          kakao.maps.event.addListener(marker, "mouseover", function () {
            var content = `<div class="overlaybox"> 



    <div class="boxtitle">아파트 상세정보 <div class="close" onclick="closeOverlay()" title="닫기"></div> </div> 
    
    <div class="first"> 
        <div class="triangle text"></div> 
        <div class="movietitle text">${aptName}</div> 
    </div> 
    <ul> 
        <li class="up"> 
            <span class="number">거래금액</span> 
            <span class="title d-flex justify-content-end">${aptCost}</span> 
        </li> 
        <li> 
            <span class="number">도로명</span> 
            <span class="title d-flex justify-content-end">${load}</span> 
        </li> 
        <li> 
            <span class="number">거래 일</span> 
            <span class="title d-flex justify-content-end">${year}년 ${month}월 ${day}일</span> 
        </li> 
    </ul> 
</div>
  `;
            var customOverlay = new kakao.maps.CustomOverlay({
              map: map,
              position: coords,
              content: content,
              yAnchor: 1,
            });

            // function closeOverlay() {
            //   customOverlay.setMap(null);
            // }
          });

          kakao.maps.event.addListener(marker, "mouseout", function () {
            console.log("벗어남!");
            customOverlay.setMap(null);
          });
          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords);
          map.setLevel(3);
        }
      });

      tbody.appendChild(tr);
    }
  });
}

function initTable() {
  let tbody = document.querySelector("#aptlist");
  let len = tbody.rows.length;
  for (let i = len - 1; i >= 0; i--) {
    tbody.deleteRow(i);
  }
}
