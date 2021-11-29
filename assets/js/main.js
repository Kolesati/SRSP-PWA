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
readJson("https://raw.githubusercontent.com/Kolesati/SRSP-images/main/level_song_data.json", function(text){
    localStorage.songs = text;
    // let songs = JSON.parse(text);
    // console.log(songs);
});

let songs = JSON.parse(localStorage.getItem('songs'));
// console.log(songs)

let chkbox = document.getElementsByClassName("checkSelect");
let cnt = 0;
let selectedLevel = Array();
let selectedArr = Array();
let level = 0;
let selectedElement = "";
let selectedSong = "";
let selectedIllust = "";
let imgBaseUrl = "https://raw.githubusercontent.com/Kolesati/SRSP-images/main/";

function RecommendSong() {
    cnt = 0;
	selectedLevel = Array();
	selectedArr = Array();
	level = 0;

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

    level = selectedLevel[Math.floor(Math.random()*cnt)];
    console.log("선택된 level :" + level);

    // TODO : 선택된 레벨들을 이용해 array에 후보 곡 목록 넣고 뽑아서 적용시키기
    selectedSongs = songs[level];
    selectedSong = selectedSongs[Math.floor(Math.random()*selectedSongs.length)]
    console.log(selectedSong)
    
    // 자켓, level, 수록일, 곡명 선택
    var jacketLink = imgBaseUrl + selectedSong['jacket_link'];
    // level은 이미 정의됨
    var difficulty = selectedSong['difficulty'];
    var title = selectedSong['title'];
    var composer = selectedSong['composer'];
    var releasedDate = selectedSong['date'];

    console.log(jacketLink)
    console.log(level);
    console.log(difficulty)
    console.log(title)
    console.log(composer)
    console.log(releasedDate)

    document.getElementById('illust').src = jacketLink;
    document.getElementById('level').innerText = level;
    document.getElementById('difficulty').innerText = difficulty;
    document.getElementById('title').innerText = title;
    document.getElementById('composer').innerText = composer;
    document.getElementById('release-date').innerText = releasedDate;
    return level;
}