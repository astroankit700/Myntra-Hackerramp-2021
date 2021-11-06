let shopNo = Number(sessionStorage.getItem('next_shop'));
let shopsarray = JSON.parse(sessionStorage.getItem('shops'));

// populating the shop details from session storage
document.querySelector('.shop-info >h1').innerHTML = shopsarray[shopNo].name;
document.querySelector('.shop-info >h6').innerHTML = shopsarray[shopNo].description;
document.querySelector('.shop-pic').innerHTML = `<img id = 'shop_pic' src = ${shopsarray[shopNo].src}>`

