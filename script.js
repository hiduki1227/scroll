console.log(location.href);
function onclick_btn() {
    const mus = "https://www.google.com/search?q=";
    var maiN = document.getElementById("main").value;
    var urL = document.getElementById("url").value;
    var url


    if (urL.length >= 0 & maiN > ) {
        console.log("TRUE");
        url = mus + maiN + " site:" + urL + "&tbm=isch";
        open(url, "_blank");
    }

    else if (urL.length === 0 & maiN >= 0) {
        console.log("FALSE");
        url = mus + maiN + " site:http://moeimg.net" + " \"微エロ\"" + "&tbm=isch";
        open(url, "_blank");
    }

    else if (urL === "指定なし" | urL === "n") {
        url = mus + maiN + " site:http://moeimg.net" + "&tbm=isch";
        open(url, "_blank");
    }

    else if (urL === "過激" | urL === "k") {
        url = mus + maiN + " site:http://moeimg.net" + " \"エロ\" -微エロ -非エロ" + "&tbm=isch";
        open(url, "_blank");
    }
    
    else {
        console.log("該当なし");
    }
}