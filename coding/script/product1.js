let url = "http://localhost:3000/reels";
fetchData();
let btn = document.getElementById("pagination");
let detail = document.getElementById("detail");
let noOfpage;
let totalCount;
function fetchData(n) {
  fetch(`${url}?_limit=8&_page=${n}`)
    .then((res) => {
      // console.log
      totalCount = res.headers.get("X-Total-Count");

      let noOfpage = Math.ceil(totalCount / 8);
     
      btn.innerHTML = null;
      for (let i = 1; i <= noOfpage; i++) {
        btn.append(getButton(i));
      }
      return res.json();
    })
    .then((data) => {
      appendData(data);
      detail.innerText =`Products:- (${data[0].id}) - (${data[data.length-1].id}) of ${totalCount}`;
      console.log(detail);
    })
    .catch((err) => {
      console.log(err);
    });
}

let product = document.getElementById("product");

function appendData(data) {
  product.innerHTML = null;

  data.forEach((element) => {
    let card = document.createElement("div");
    card.classList.add("card");
    let image = document.createElement("img");
    image.src = element.image;
    let name = document.createElement("h2");
    name.innerText = element.name;
    let price = document.createElement("h2");
    price.innerText = "$" + element.price;
    let btn1 = document.createElement("button");
    btn1.innerText = "Buy";
    btn1.setAttribute("id", "buy");
    let btn2 = document.createElement("button");
    btn2.innerText = "Add to Cart";
    btn2.setAttribute("id", "cart");
    // console.log(btn1)
    card.append(image, name, price, btn1, btn2);
    product.append(card);
  });
  // let x=``
  // data.map(element => {
  //     x+=`
  //     <div class="card">
  //         <img src="${element.image}" alt="">
  //         <h2>${element.name}</h2>
  //         <h2>$${element.price}</h2>
  //         <button id="buy">Buy</button>
  //         <button id="cart">Add to Cart</button>
  //      </div>
  //     `

  // });
}

function getButton(n) {
  let btn = document.createElement("button");
  btn.innerText = n;
  btn.classList.add("page");
  btn.setAttribute("data-id", n);

  btn.addEventListener("click", (e) => {
    let pagenumber = e.target.dataset.id;
    fetchData(pagenumber);
  });
  return btn;
}


// let details = document.getElementById("details");
// let clickToReveal = document.getElementById("show");

// $(document).ready(function() {
//     $("button").click(function() {
//       $("#details").toggle();
//     });
//   });
  