function setCookie(name, value) {
    var date = new Date();
    date.setTime(date.getTime() + (10 * 60 * 1000));
    var expires = "; expires=" + date.toGMTString();
    var stringValue = String(value);
    document.cookie = `${name}=${stringValue}; expires=${expires}; path=/`;
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
    setCookie("totalPrice",0.00);
    setCookie("cpuPrice",0);
    setCookie("gpuPrice",0);
    setCookie("ramPrice",0);
    setCookie("ssdPrice",0);
    setCookie("moboPrice",0);
    setCookie("gpuPriceStore",0);
    setCookie("gpuPriceStored",0);
    setCookie("cpuPriceStored",0);
    setCookie("ramPriceStored",0);
    setCookie("ssdPriceStored",0);
    setCookie("moboPriceStored",0);
}

function checkSocketIntelAndAddMoboPrice(mobo,price){
    let socket = getCookie("cpuSocket");
    let cP = getCookie("cpuPriceStore");
    let mP = getCookie("moboPriceStored");
    let gP = getCookie("gpuPriceStored");
    let rP = getCookie("ramPriceStored");
    let sP = getCookie("ssdPriceStored");
    if (cP == 0 ||gP == 0 ||rP == 0 ||sP == 0){
        alert("You skipped a component, The pc is missing a part!")
        window.location.replace("cpu.html")
    } else if (socket === "1700"){
        setCookie("mobo",mobo);
        addMoboPrice(price);
        location.replace("load.html")
    } else {
        alert("Socket not Compatible! Please choose another Motherboard.")
    }
}

function checkSocketAMDAndAddMoboPrice(mobo,price){
    let cP = getCookie("cpuPriceStore");
    let mP = getCookie("moboPriceStored");
    let gP = getCookie("gpuPriceStored");
    let rP = getCookie("ramPriceStored");
    let sP = getCookie("ssdPriceStored");
    let socket = getCookie("cpuSocket");
    if (cP == 0 ||gP == 0 ||rP == 0 ||sP == 0){
        alert("You skipped a component, The pc is missing a part!")
        window.location.replace("cpu.html")
    } else if (socket === "AM4"){
        setCookie("mobo",mobo);
        addMoboPrice(price);
        location.replace("load.html")
    } else {
        alert("Socket not Compatible! Please choose another Motherboard.")
    }
}

function addCpuPrice(cpuPrice) {
    if (cP!=0) {
        let cP = getCookie("cpuPriceStored");
        let fixedPrice = parseFloat(getCookie("totalPrice") || 0) - parseFloat(getCookie("cpuPriceStored"));
        setCookie("totalPrice",fixedPrice);
        let finalPrice = parseFloat(getCookie("totalPrice") || 0) + parseFloat(cpuPrice);
        setCookie("totalPrice",finalPrice);
        setCookie("cpuPriceStored", parseFloat(getCookie("cpuPrice")));
        setCookie("cpuPrice", 0);
    } else {
        let finalPrice = parseFloat(getCookie("totalPrice") || 0) + parseFloat(cpuPrice);
        setCookie("totalPrice",finalPrice);
        setCookie("cpuPriceStored", parseFloat(getCookie("cpuPrice")));
        setCookie("cpuPrice", 0);
    }
}

function addGpuPrice(gpuPrice) {
    let gP = getCookie("gpuPriceStored");
    if (gP!=0) {
        setCookie("gpuPrice",gpuPrice)
        let gpuPricing = parseFloat(getCookie("gpuPrice"));
        let fixedPrice = parseFloat(getCookie("totalPrice") || 0) - parseFloat(getCookie("gpuPriceStored"));
        setCookie("totalPrice",fixedPrice);
        let finalPrice = parseFloat(getCookie("totalPrice") || 0) + parseFloat(gpuPrice);
        setCookie("totalPrice",finalPrice);
        setCookie("gpuPriceStored", gpuPricing);
        setCookie("gpuPrice", 0);
    } else {
        setCookie("gpuPrice",gpuPrice)
        let gpuPricing = parseFloat(getCookie("gpuPrice"));
        let finalPrice = parseFloat(getCookie("totalPrice") || 0) + parseFloat(gpuPrice);
        setCookie("totalPrice", finalPrice);
        setCookie("gpuPriceStored", gpuPricing ); 
    }   
}

function addRamPrice(ramPrice) {
    let rP = getCookie("ramPriceStored");
    if (rP!=0) {
        setCookie("ramPrice",ramPrice)
        let ramPricing = parseFloat(getCookie("ramPrice"));
        let fixedPrice = parseFloat(getCookie("totalPrice") || 0) - parseFloat(getCookie("ramPriceStored"));
        setCookie("totalPrice",fixedPrice);
        let finalPrice = parseFloat(getCookie("totalPrice") || 0) + parseFloat(ramPrice);
        setCookie("totalPrice",finalPrice);
        setCookie("ramPriceStored", ramPricing);
        setCookie("ramPrice", 0);
    } else {
        setCookie("ramPrice",ramPrice)
        let ramPricing = parseFloat(getCookie("ramPrice"));
        let finalPrice = parseFloat(getCookie("totalPrice") || 0) + parseFloat(ramPrice);
        setCookie("totalPrice", finalPrice);
        setCookie("ramPriceStored", ramPricing ); 
    } 
}

function addSsdPrice(ssdPrice) {
    let sP = getCookie("ssdPriceStored");
    if (sP!=0) {
        setCookie("ssdPrice",ssdPrice)
        let ssdPricing = parseFloat(getCookie("ssdPrice"));
        let fixedPrice = parseFloat(getCookie("totalPrice") || 0) - parseFloat(getCookie("ssdPriceStored"));
        setCookie("totalPrice",fixedPrice);
        let finalPrice = parseFloat(getCookie("totalPrice") || 0) + parseFloat(ssdPrice);
        setCookie("totalPrice",finalPrice);
        setCookie("ssdPriceStored", ssdPricing);
        setCookie("ssdPrice", 0);
    } else {
        setCookie("ssdPrice",ssdPrice)
        let ssdPricing = parseFloat(getCookie("ssdPrice"));
        let finalPrice = parseFloat(getCookie("totalPrice") || 0) + parseFloat(ssdPrice);
        setCookie("totalPrice", finalPrice);
        setCookie("ssdPriceStored", ssdPricing ); 
    } 
}

function addMoboPrice(moboPrice) {
    let mP = getCookie("moboPriceStored");
    if (mP!=0) {
        setCookie("mobPrice",moboPrice)
        let moboPricing = parseFloat(getCookie("moboPrice"));
        let fixedPrice = parseFloat(getCookie("totalPrice") || 0) - parseFloat(getCookie("moboPriceStored"));
        setCookie("totalPrice",fixedPrice);
        let finalPrice = parseFloat(getCookie("totalPrice") || 0) + parseFloat(moboPrice);
        setCookie("totalPrice",finalPrice);
        setCookie("moboPriceStored", moboPricing);
        setCookie("moboPrice", 0);
    } else {
        setCookie("moboPrice",moboPrice)
        let moboPricing = parseFloat(getCookie("moboPrice"));
        let finalPrice = parseFloat(getCookie("totalPrice") || 0) + parseFloat(moboPrice);
        setCookie("totalPrice", finalPrice);
        setCookie("moboPriceStored", moboPricing ); 
    } 
}

