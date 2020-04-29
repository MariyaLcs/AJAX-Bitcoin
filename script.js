let btn = document.querySelector("button"),
  priceDisp = document.querySelector("#price");

btn.addEventListener("click", function () {
  let XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function () {
    if (XHR.readyState == 4 && XHR.status == 200) {
      let data = JSON.parse(XHR.responseText);
      let price = data.bpi.GBP.rate;
      priceDisp.innerText = price + "GBP";
    }
  };

  let url = "https://api.coindesk.com/v1/bpi/currentprice.json";
  XHR.open("GET", url);
  XHR.send();
});
