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

function setupCookies(){
    setCookie("cpuPrice",0);
    setCookie("gpuPrice",0);
    setCookie("ramPrice",0);
    setCookie("ssdPrice",0);
    setCookie("totalPrice",0);
    setCookie("moboPrice",0);
    setCookie("gpuPriceStore",0);
    setCookie("gpuPriceStored",0);
    setCookie("cpuPriceStored",0);
    setCookie("ramPriceStored",0);
    setCookie("ssdPriceStored",0);
    setCookie("moboPriceStored",0);
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

function addCpuPrice(cpuPrice) {
    if (cP!=0) {
        let cP = getCookie("cpuPriceStored");
        let fixedPrice = parseInt(getCookie("totalPrice") || 0) - parseInt(getCookie("cpuPriceStored"));
        setCookie("totalPrice",fixedPrice);
        let finalPrice = parseInt(getCookie("totalPrice") || 0) + parseInt(cpuPrice);
        setCookie("totalPrice",finalPrice);
        setCookie("cpuPriceStored", parseInt(getCookie("cpuPrice")));
        setCookie("cpuPrice", 0);
    } else {
        let finalPrice = parseInt(getCookie("totalPrice") || 0) + parseInt(cpuPrice);
        setCookie("totalPrice",finalPrice);
        setCookie("cpuPriceStored", parseInt(getCookie("cpuPrice")));
        setCookie("cpuPrice", 0);
    }
}

function addGpuPrice(gpuPrice) {
    let gP = getCookie("gpuPriceStored");
    if (gP!=0) {
        setCookie("gpuPrice",gpuPrice)
        let gpuPricing = parseInt(getCookie("gpuPrice"));
        let fixedPrice = parseInt(getCookie("totalPrice") || 0) - parseInt(getCookie("gpuPriceStored"));
        setCookie("totalPrice",fixedPrice);
        let finalPrice = parseInt(getCookie("totalPrice") || 0) + parseInt(gpuPrice);
        setCookie("totalPrice",finalPrice);
        setCookie("gpuPriceStored", gpuPricing);
        setCookie("gpuPrice", 0);
    } else {
        setCookie("gpuPrice",gpuPrice)
        let gpuPricing = parseInt(getCookie("gpuPrice"));
        let finalPrice = parseInt(getCookie("totalPrice") || 0) + parseInt(gpuPrice);
        setCookie("totalPrice", finalPrice);
        setCookie("gpuPriceStored", gpuPricing ); 
    }   
}

function addRamPrice(ramPrice) {
    let rP = getCookie("ramPriceStored");
    if (rP!=0) {
        setCookie("ramPrice",ramPrice)
        let ramPricing = parseInt(getCookie("ramPrice"));
        let fixedPrice = parseInt(getCookie("totalPrice") || 0) - parseInt(getCookie("ramPriceStored"));
        setCookie("totalPrice",fixedPrice);
        let finalPrice = parseInt(getCookie("totalPrice") || 0) + parseInt(ramPrice);
        setCookie("totalPrice",finalPrice);
        setCookie("ramPriceStored", ramPricing);
        setCookie("ramPrice", 0);
    } else {
        setCookie("ramPrice",ramPrice)
        let ramPricing = parseInt(getCookie("ramPrice"));
        let finalPrice = parseInt(getCookie("totalPrice") || 0) + parseInt(ramPrice);
        setCookie("totalPrice", finalPrice);
        setCookie("ramPriceStored", ramPricing ); 
    } 
}

function addSsdPrice(ssdPrice) {
    let sP = getCookie("ssdPriceStored");
    if (sP!=0) {
        setCookie("ssdPrice",ssdPrice)
        let ssdPricing = parseInt(getCookie("ssdPrice"));
        let fixedPrice = parseInt(getCookie("totalPrice") || 0) - parseInt(getCookie("ssdPriceStored"));
        setCookie("totalPrice",fixedPrice);
        let finalPrice = parseInt(getCookie("totalPrice") || 0) + parseInt(ssdPrice);
        setCookie("totalPrice",finalPrice);
        setCookie("ssdPriceStored", ssdPricing);
        setCookie("ssdPrice", 0);
    } else {
        setCookie("ssdPrice",ssdPrice)
        let ssdPricing = parseInt(getCookie("ssdPrice"));
        let finalPrice = parseInt(getCookie("totalPrice") || 0) + parseInt(ssdPrice);
        setCookie("totalPrice", finalPrice);
        setCookie("ssdPriceStored", ssdPricing ); 
    } 
}

function addMoboPrice(moboPrice) {
    let sP = getCookie("moboPriceStored");
    if (sP!=0) {
        setCookie("mobPrice",moboPrice)
        let moboPricing = parseInt(getCookie("moboPrice"));
        let fixedPrice = parseInt(getCookie("totalPrice") || 0) - parseInt(getCookie("moboPriceStored"));
        setCookie("totalPrice",fixedPrice);
        let finalPrice = parseInt(getCookie("totalPrice") || 0) + parseInt(moboPrice);
        setCookie("totalPrice",finalPrice);
        setCookie("moboPriceStored", moboPricing);
        setCookie("moboPrice", 0);
    } else {
        setCookie("moboPrice",moboPrice)
        let moboPricing = parseInt(getCookie("moboPrice"));
        let finalPrice = parseInt(getCookie("totalPrice") || 0) + parseInt(moboPrice);
        setCookie("totalPrice", finalPrice);
        setCookie("moboPriceStored", moboPricing ); 
    } 
}