console.log(location.href);
function clb() {
    const mus = "https://www.google.com/search?q=";
    var maiN = document.getElementById("main").value;
    var urL = document.getElementById("url").value;
    var url;


    if (maiN.length > 0 & urL.length > 0 & urL != "過激" & urL != "k" & urL != "デフォルト" & urL != "d") {
        console.log("キーワード：TRUE\nURL設定：TRUE");
        url = mus + maiN + " site:" + urL + "&tbm=isch";
        open(url, "_blank");
    }

    else if (maiN.length > 0 & urL.length == 0) {
        console.log("キーワード：TRUE\nURL設定：FALSE");
        url = mus + maiN + " site:http://moeimg.net" + " \"微エロ\"" + "&tbm=isch";
        open(url, "_blank");
    }

    else if (maiN.length > 0 & urL == "d") {
        url = mus + maiN + " site:http://moeimg.net" + "&tbm=isch";
        open(url, "_blank");
    }

    else if (maiN.length > 0 & urL == "k") {
        url = mus + maiN + " site:http://moeimg.net" + " \"エロ\" -微エロ -非エロ" + "&tbm=isch";
        open(url, "_blank");
    }

    else if (maiN.length == 0 & urL.length == 0) {
        console.log("無効な値");
    }

    else {
        console.log("無効なプログラム");
    }
    
}