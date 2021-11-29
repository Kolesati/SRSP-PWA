function readJson(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readJson("assets/json/song_data_app.json", function(text){
    const data = JSON.parse(text);
    const config = data["configs"][0];
    const songs = data["songs"];
    console.log(data);
    console.log(config);
    console.log(songs); 
});

let chkbox = document.getElementsByClassName("checkSelect");
// console.log(chkbox);

let cnt = 0;
let selectedLevel = Array();
let selectedArr = Array();
let selectedIndex = 0;
let selectedElement = "";
let selectedSong = "";
let selectedIllust = "";

function RecommendSong() {
    cnt = 0;
	selectedLevel = Array();
	selectedArr = Array();
	selectedIndex = 0;

	selectedElement = "";
	selectedSong = "";
	selectedIllust = "";
	for(var i=0;i<chkbox.length; i++) {
		if(chkbox[i].checked == true) {
			// console.log(chkbox[i].value);
			selectedLevel[cnt] = chkbox[i].value;
			cnt++;
		}
	}
    
    if(cnt == 0) {
        return window.alert("레벨을 선택해주세요!");
    }
    selectedIndex = selectedLevel[Math.floor(Math.random()*cnt)];
    console.log("선택된 level :" + selectedIndex);

    // TODO : 선택된 레벨들을 이용해 array에 후보 곡 목록 넣고 뽑아서 return하는 알고리즘 만들기
    return selectedIndex;
}