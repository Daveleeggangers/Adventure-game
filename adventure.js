var title = document.getElementById("title");
var description = document.getElementById("description");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var body = document.getElementsByTagName("BODY")[0];
var item = document.getElementById("inventoryItem");
  item.setAttribute("src", "https://vignette.wikia.nocookie.net/seaofthieves/images/1/1d/Coffre_du_marin.png/revision/latest?cb=20180617113421&path-prefix=fr");
  item.setAttribute("width", "20");
  item.setAttribute("height", "16");
var itemclick = 0;

start();

function start(){
	body.style.backgroundImage = "url('https://i.pinimg.com/originals/2f/88/5b/2f885b40be32fb4025bc0c6901dc3909.jpg')"
	title.innerHTML = "Sea Adventure";
	description.innerHTML = "Adventure gebaseerd op de game: Sea Of Thieves";
	button1.innerHTML = "start";
	button1.onclick = function(){
		keuze1();
	}
	button1.style.marginLeft = "600px";
	button2.style.display = "none";
	button3.style.display = "none";
	button1.style.marginTop = "425px";
	description.style.display = "block";
	button1.style.display = "inline";
	item.style.display = "none";
	title.style.backgroundColor = "#000";
}

function keuze1(){
	body.style.backgroundImage = "url('https://i.pinimg.com/originals/2f/88/5b/2f885b40be32fb4025bc0c6901dc3909.jpg')"
	title.innerHTML = "Sea Adventure";
	button1.innerHTML = "Cannon Cove";
	button3.innerHTML = "Shipwreck Bay";
	description.style.display = "none";
	button2.innerHTML = "Back";
	button2.onclick = function(){
		start();
	}
	button2.style.display = "inline";
	button3.style.display = "inline";
	button1.style.marginLeft = "0";
	button1.style.marginTop = "450px";
	description.style.display = "block";
	description.innerHTML = "Waar wil je heen varen? Cannon Cove of Shipwreck Bay";
	button1.onclick = function (){
		cannoncove1();
	}
	button3.onclick = function (){
		shipwrechbay();
	}
	item.style.display = "none";
}

function cannoncove1(){
	body.style.backgroundImage = "url('https://i.redd.it/mggifxlvnor21.jpg')"
	title.innerHTML = "Sea Adventure";
	button1.innerHTML = "Vechten";
	button3.innerHTML = "Terug keren";
	button3.onclick = function(){
		keuze1();
	}
	button1.onclick = function(){
		dead();
	}
	button2.style.display = "none";
	button3.style.display = "inline";
	button1.style.marginLeft = "0";
	button1.style.marginTop = "450px";
	description.style.display = "block";
	description.innerHTML = "Je komt een Kraken tegen wat doe je? Vechten of Terug Keren";
	item.style.display = "none";
}

function dead(){
	body.style.backgroundImage = "url('https://d1lss44hh2trtw.cloudfront.net/assets/article/2018/03/20/ghost-ship-sea-of-thieves_feature.jpg')"
	title.innerHTML = "Sea Adventure";
	description.style.display = "block";
	description.innerHTML = "Je bent gezonken en overleden";
	button2.style.display = "inline";
	button2.onclick = function() {
		start();
	}
	button1.style.display = "none";
	button3.style.display = "none";
	button2.innerHTML = "Opnieuw beginnen";
	item.style.display = "none";
}

function shipwrechbay(){
	body.style.backgroundImage = "url('https://cdnb.artstation.com/p/assets/images/images/009/864/415/large/joachim-coppens-wld-shipwreck-bay-wreck-backside.jpg?1521295063')"
	title.innerHTML = "Sea Adventure";
	description.style.display = "block";
	description.innerHTML = "Je bent aangekomen bij Shipwreck Bay je ziet een Skeleton King wil je het Aanvallen of Door Varen?";
	button1.style.display = "inline";
	button3.style.display = "inline";
	button2.style.display = "none";
	button1.innerHTML = "Aanvallen";
	button1.onclick = function(){
		skaanvallen();
	}
	button3.innerHTML = "Dagger Tooth Outpost"
	item.style.display = "none";
	button3.onclick = function(){
		daggertoothoutpost();
	}
}

function daggertoothoutpost(){
	body.style.backgroundImage = "url('https://vignette.wikia.nocookie.net/seaofthieves5135/images/d/dc/The-Hungering-Deep_Megalodon.jpg/revision/latest?cb=20180530181232')"
	title.innerHTML = "Sea Adventure";
	description.style.display = "block";
	description.innerHTML = "Onderweg naar Dagger Tooth Outpost valt een Megalodon je aan wat doe je? Aanvallen of Terug keren";
	button1.style.display = "inline";
	button3.style.display = "inline";
	button2.style.display = "none";
	button1.innerHTML = "Aanvallen";
	button1.onclick = function(){
		if (itemclick == "1") {
			uitgeput();
		}
		else {
			dead();
		}
	}
	button3.innerHTML = "Terug Keren"
	button3.onclick = function(){
		shipwrechbay();
	}
	item.style.display = "none";
}

function skaanvallen(){
	body.style.backgroundImage = "url('https://static.trueachievements.com/customimages/055257.jpg')"
	title.innerHTML = "Sea Adventure";
	description.style.display = "none";
	button1.style.display = "none";
	button2.style.display = "inline";
	button2.innerHTML = "back";
	button2.onclick = function(){
		shipwrechbay();
	}
	item.style.display = "inline";
	item.style.backgroundImage = "url('https://vignette.wikia.nocookie.net/seaofthieves/images/1/1d/Coffre_du_marin.png/revision/latest?cb=20180617113421&path-prefix=fr')";
	item.onclick = function(){
		itemclick = 1;
		button3.style.display = "inline";
		button3.innerHTML = "Cannon-Balls 1/1";
	}
	button3.style.display = "none";
}

function einde(){
	body.style.backgroundImage = "url('https://d1lss44hh2trtw.cloudfront.net/assets/article/2018/03/26/how-to-customize-ship-sea-of-thieves-slim_1200x500.jpg')"
	title.innerHTML = "Victory";
	title.style.backgroundColor = "green";
	button1.style.display = "none";
	button2.style.display = "inline";
	button2.innerHTML = "Restart Game";
	button2.onclick = function(){
		start();
		location.reload();
	}
	button3.style.display = "none";
	description.style.display = "none";
	inventoryItem.style.display = "none";
}

function uitgeput(){
	body.style.backgroundImage = "url('https://miro.medium.com/max/2160/1*pcc3Xbf4eHX5XEMmEcXWGQ.jpeg')"
	title.innerHTML = "Sea Adventure";
	button1.style.display = "inline";
	button1.innerHTML = "Overnachten";
	button3.style.display = "inline";
	button3.innerHTML = "Doorgaan";
	button1.onclick = function(){
		overnachten();
	}
	button3.onclick = function(){
		doorgaan();
	}
	button2.style.display = "none";
	description.style.display = "block";
	description.innerHTML = "Je hebt de aanval van de megalodon overleeft maar bent erg uitgeput wat is je volgende stap? Overnachten of Doorgaan"
	inventoryItem.style.display = "none";	
}

function overnachten(){
	body.style.backgroundImage = "url('https://i.redd.it/l1q9qo3gg7n01.png')"
	title.innerHTML = "Sea Adventure";
	button1.style.display = "inline";
	button1.innerHTML = "Wegvaren"
	button3.style.display = "inline";
	button3.innerHTML = "Onderzoeken";
	button3.onclick = function(){
		onderzoeken();
	}
	button1.onclick = function(){
		einde();
	}
	button2.style.display = "none";
	description.style.display = "block";
	description.innerHTML = "Een tijdje later word je wakker door het geluid van een aangemeerd schip maak je keuze: Wegvaren of Onderzoeken"
	inventoryItem.style.display = "none";		
}

function doorgaan(){
	body.style.backgroundImage = "url('https://www.gamepur.com/files/images/tldr/2018/03/Sea-of-Thieves-Closed-Beta-3_2_2018-10_19_41-PM.jpg')"
	title.innerHTML = "Sea Adventure";
	button1.style.display = "none";
	button2.style.display = "inline";
	button2.innerHTML = "Restart Game"
	button2.onclick =function(){
		start();
	}
	button3.style.display = "none";
	description.style.display = "block";
	description.innerHTML = "Je bent door de moeheid in slaap gevallen en je bent verdonken.. het schip is langzaam aan het zinken doordat er een groot gat in de bodem zat"
	inventoryItem.style.display = "none";	
}

function onderzoeken(){
	body.style.backgroundImage = "url('https://cdnb.artstation.com/p/assets/images/images/013/124/399/large/david-milligan-highresscreenshot00009.jpg?1538156023')"
	title.innerHTML = "Sea Adventure";
	button1.style.display = "none";
	button2.style.display = "inline";
	button2.innerHTML = "Restart Game"
	button2.onclick =function(){
		start();
	}
	button3.style.display = "none";
	description.style.display = "block";
	description.innerHTML = "Je word in je onderzoeking aangevallen door 4 piraten en overleefd de strijd niet!"
	inventoryItem.style.display = "none";		
}
