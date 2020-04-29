let btn = document.querySelector("button"),
  priceDisp = document.querySelector("#price"),
  radios = document.getElementsByName("currency"),
  hide = document.getElementsByClassName("hide");

btn.addEventListener("click", function () {
  let XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function () {
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        if (radios[i].value === "USD") {
          url = JSON.parse(XHR.responseText).bpi.USD.rate;
          price.innerText = "$" + url + " USD";
        }
        if (radios[i].value === "GBP") {
          url = JSON.parse(XHR.responseText).bpi.GBP.rate;
          price.innerText = "£" + url + " GBP";
        }
        if (radios[i].value === "EUR") {
          url = JSON.parse(XHR.responseText).bpi.EUR.rate;
          price.innerText = "€" + url + " EUR";
        }
        break;
      }
    }
  };

  let url = "https://api.coindesk.com/v1/bpi/currentprice.json";
  XHR.open("GET", url);
  XHR.send();
});
