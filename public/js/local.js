
const shopsArr = [
    { name: "Pantaloons", description: "Jeans, T-shirts and pants", src: "/img/0.png" },
    { name: "Galaxy Dresses", description: "Everything u need to wear", src: "/img/1.png" },
    { name: "1st Choice", description: "Fashion on Top", src: "/img/2.png" },
    { name: "Arvind Stores", description: "Fashioning Possibilities", src: "/img/3.png" },
    { name: "Rangoli", description: "Colours of Fashion", src: "/img/4.png" },
    { name: "Novelty", description: "Casual Wear", src: "/img/5.png" },
    { name: "Kashmir Vastralaya", description: "All Cotton Dresses available", src: "/img/6.png" },
    { name: "Manyavar", description: "Shop Ethnic", src: "/img/7.png" },

  ];
//   let strshopsarr = JSON.stringify(shopsArr);
//         sessionStorage.setItem("shops", strshopsarr);


//load_shops();
var result = document.getElementById("location");
const Http = new XMLHttpRequest();


function getApi(bdcApi) {
    Http.open("GET", bdcApi);
    Http.send();
    Http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const data = JSON.parse(this.responseText);
        console.log(data);
        console.log(data.locality);
        const address = `${data.locality}, ${data.principalSubdivision}, ${data.countryName}`;
        result.innerHTML = address;

        for(let i=0;i<shopsArr.length;i++)
        {
            shopsArr[i].description = address;
        }
        let strshopsarr = JSON.stringify(shopsArr);
        sessionStorage.setItem("shops", strshopsarr);

      }
      
    };
  }
 function getLocation() {
  console.log("getLocation Called");
  var bdcApi = "https://api.bigdatacloud.net/data/reverse-geocode-client";

  navigator.geolocation.getCurrentPosition(
    (position) => {
      bdcApi =
        bdcApi +
        "?latitude=" +
        position.coords.latitude +
        "&longitude=" +
        position.coords.longitude +
        "&localityLanguage=en";
       getApi(bdcApi);
    },
    (err) => {
      getApi(bdcApi);
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );
}


function load_shops() {
    
  
    let strshopsarr = JSON.stringify(shopsArr);
    sessionStorage.setItem("shops", strshopsarr);
  
    let arr = [];
    while (arr.length < 8) {
      let r = Math.floor(Math.random() * 10) % 8;
      if (arr.indexOf(r) === -1) arr.push(r);
    }
  
    let body = document.getElementById("contain");
    let n = (Math.floor(Math.random() * 10) % arr.length) + 1;
    
    let addressInPage = document.getElementById("location").innerText;
    for (let i = 0; i < n; i++) {
      let shop_name = shopsArr[arr[i]].name;
      let description = shopsArr[arr[i]].description;
      let imgSrc = shopsArr[arr[i]].src;
      if (addressInPage) add_name = addressInPage;
  
      body.innerHTML += `<div class="card" style="width: 18rem;">
      <img class="card-img-top" src=${imgSrc} alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${shop_name}</h5>
        <p class="card-text">${description}</p>
        <a href="/local/shops/shopx" id=${arr[i]} class="btn btn-primary">Explore Shop</a>
      </div>
    </div>`;
    }
  
    let placards = document.querySelectorAll(".card-body");
    console.log(placards);
    Array.from(placards).forEach((ele) => {
      ele.addEventListener("click", (e) => {
        sessionStorage.setItem("next_shop", e.target.id);
        //console.log(e.target);
      });
    });
  }
  
  function remove_shops() {
    let body = document.getElementById("contain");
    body.innerHTML = ``;
  }