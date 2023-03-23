console.log(location.href);
function clb() {
    // 必須URL
    const mus = "https://www.google.com/search?tbm=isch&q=";

    // 各要素内の値を取得
    var maiN = document.getElementById("main").value;
    var urL = document.getElementById("url").value;
    var img_w = document.getElementById("width").value;
    var img_h = document.getElementById("height").value;
    var img_Px = document.getElementById("Impixel").value;
    // 最終的に mus に結合するURL
    var url;


    // 画像の横と縦の長さを指定。
    function img(iw, ih) {
        if (iw.length > 0 && ih.length > 0) {
            var ImgSz = " imagesize:" + iw + "x" + ih;
        }
        else {
            // pass
        }
        return ImgSz;
    }


    // 画像の画素数を指定
    function Ipx(iP) {
        var px;
        if (iP > 0 && ((iP % 1) == 0)) {
            if (iP <= 20) {
                iP = iP;
            }else {
                iP = "20";
            }
            px = "&tbs=isz:lt,islt:" + iP;
        } else {
            px = "";
        }
        return px;
    }


    // 画像のキーワード設定
    if (maiN.length > 0 && urL.length > 0 && urL != "k" && urL != "d" && urL != "gimg") {
        console.log("キーワード：TRUE\nURL設定：TRUE");
        url = mus + maiN + " site:" + urL + img(img_w, img_h) + Ipx(img_Px);
        open(url, "_blank");
    }

    else if (maiN.length > 0 && urL.length == 0) {
        console.log("キーワード：TRUE\nURL設定：FALSE");
        url = mus + maiN + " site:http://moeimg.net" + " \"微エロ\"" + img(img_w, img_h) + Ipx(img_Px);
        open(url, "_blank");
    }

    else if (maiN.length > 0 && urL == "d") {
        url = mus + maiN + " site:http://moeimg.net" + img(img_w, img_h) + Ipx(img_Px);
        open(url, "_blank");
    }

    else if (maiN.length > 0 && urL == "k") {
        url = mus + maiN + " site:http://moeimg.net" + " \"エロ\" -微エロ -非エロ" + img(img_w, img_h) + Ipx(img_Px);
        open(url, "_blank");
    }

    else if (maiN.length > 0 && urL == "g") {
        url = mus + maiN + img(img_w, img_h) + Ipx(img_Px);
        open(url, "_blank");
    }

    // 無効な入力
    else if (maiN.length == 0 && urL.length == 0) {
        console.log("無効な値");
        alert("無効な値です\nKeywordsを入力してください");
    }

    else {
        console.log("無効なプログラム");
    }
    
}