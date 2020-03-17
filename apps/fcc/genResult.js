function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

window.onload = function(){
    let param = this.location.search;
    let dist = this.getParam('dist', param);
    let fuel = this.getParam('fuel', param);
    let result = "入力された値が不正です";

    if (!this.isNaN(dist) && !this.isNaN(fuel)){
        if (dist >= 0 && fuel > 0){
            let cost = dist / fuel;
            this.Math.round(cost * 100) / 100;
            result = "[給油記録]：" + dist + "km走行し、" +  fuel + "L給油しました。燃費" + cost + "km/L\n";
        }
    }

    this.document.getElementById('result').value = result;
    const twLink = this.document.getElementById('tw-link');
    twLink.href = twLink.href + result;
    
}