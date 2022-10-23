console.log(location.href);
function clb() {
    const mus = "https://www.google.com/search?q=";
    var maiN = document.getElementById("main").value;
    var urL = document.getElementById("url").value;
    var img_w = document.getElementById("width").value;
    var img_h = document.getElementById("height").value;
    var url;

    function img(iw, ih) {
        if (iw.length > 0 && ih.length > 0) {
            url = url + " imagesize:" + iw + "x" + ih + "&tbm=isch";
        }
        else {
            url = url + "&tbm=isch";
        }
    }


    if (maiN.length > 0 && urL.length > 0 && urL != "k" && urL != "d" && urL != "gimg") {
        console.log("キーワード：TRUE\nURL設定：TRUE");
        url = mus + maiN + " site:" + urL;
        img(img_w, img_h);
        open(url, "_blank");
    }

    else if (maiN.length > 0 && urL.length == 0) {
        console.log("キーワード：TRUE\nURL設定：FALSE");
        url = mus + maiN + " site:http://moeimg.net" + " \"微エロ\"";
        img(img_w, img_h);
        open(url, "_blank");
    }

    else if (maiN.length > 0 && urL == "d") {
        url = mus + maiN + " site:http://moeimg.net";
        img(img_w, img_h);
        open(url, "_blank");
    }

    else if (maiN.length > 0 && urL == "k") {
        url = mus + maiN + " site:http://moeimg.net" + " \"エロ\" -微エロ -非エロ";
        img(img_w, img_h);
        open(url, "_blank");
    }

    else if (maiN.length > 0 && urL == "gimg") {
        url = mus + maiN;
        img(img_w, img_h);
        open(url, "_blank");
    }

    else if (maiN.length == 0 && urL.length == 0) {
        console.log("無効な値");
        alert("無効な値です\nKeywordsを入力してください");
    }

    else {
        console.log("無効なプログラム");
    }
    
}