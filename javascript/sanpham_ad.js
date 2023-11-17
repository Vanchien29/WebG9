function loadItem() {
    let beginIndex = limit * (thisPage - 1);
    let endIndex = limit * thisPage - 1;
    for (let i = 0; i < list.length; i++) {
      if (i >= beginIndex && i <= endIndex) list[i].style.display = "block";
      else list[i].style.display = "none";
    }
    listPage();
  }

function listPage() {
    let count = Math.ceil(list.length / limit);
    document.querySelector(".list-page").innerHTML = "";
    if (thisPage != 1) {
      let prev = document.createElement("li");
      prev.innerText = "Trước";
      prev.setAttribute("onclick", "changePage(" + (thisPage - 1) + ")");
      document.querySelector(".list-page").appendChild(prev);
    }
    for (let i = 1; i <= count; i++) {
      let newPage = document.createElement("li");
      newPage.innerText = i;
      if (i == thisPage) {
        newPage.classList.add("page-current");
      }
      newPage.setAttribute("onclick", "changePage(" + i + ")");
      document.querySelector(".list-page").appendChild(newPage);
    }
    if (thisPage != count) {
      let next = document.createElement("li");
      next.innerText = "Sau";
      next.setAttribute("onclick", "changePage(" + (thisPage + 1) + ")");
      document.querySelector(".list-page").appendChild(next);
    }
  }
  function changePage(i) {
    thisPage = i;
    loadItem();
  }
  function price_format(price) {
    if (price == "") return "";
    let price_str = "";
    let tmp = price;
    for (i = price.length; i > 3; i -= 3) {
      price_str = "." + tmp.slice(-3) + price_str;
      tmp = tmp.substr(0, i - 3);
    }
    tmp = tmp.slice(0);
    return tmp + price_str + "₫";
  }
