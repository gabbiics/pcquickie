const price = document.querySelector("#price");
function setCookie(name, value) {
    var date = new Date();
    date.setTime(date.getTime()+(10*60*1000));
    var expires = "; expires="+date.toGMTString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}
  
function getCookie(name) {
    const cookieName = name + "=";
    const cookiesArray = document.cookie.split(';');

    for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i].trim();

        if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
        }
    }

    return null;
}

function checkSocketIntel(mobo){
    let socket = getCookie("cpuSocket");
    if (socket === "1700"){
        setCookie("mobo",mobo);
        location.replace("checkout.html")
    } else {
        alert("Socket not Compatible! Please choose another Motherboard.")
    }
}

function checkSocketAMD(mobo){
    let socket = getCookie("cpuSocket");
    if (socket === "AM4"){
        setCookie("mobo",mobo);
        location.replace("checkout.html")
    } else {
        alert("Socket not Compatible! Please choose another Motherboard.")
    }
}
