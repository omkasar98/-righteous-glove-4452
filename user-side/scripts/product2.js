let url = "https://boaitandbaits-backend.onrender.com/baits";
fetchData();
let btn = document.getElementById("pagination");
let detail = document.getElementById("detail");
let total = document.getElementById("total");
let noOfpage;
let totalCount;
function fetchData(n) {
	fetch(`${url}?_limit=8&_page=${n}`)
		.then((res) => {
			// console.log
			totalCount = res.headers.get("X-Total-Count");
			total.innerText = totalCount + " Result";
			let noOfpage = Math.ceil(totalCount / 8);

			btn.innerHTML = null;
			for (let i = 1; i <= noOfpage; i++) {
				btn.append(getButton(i));
			}
			return res.json();
		})
		.then((data) => {
			appendData(data);
			detail.innerText = `Products:- (${data[0].id}) - (${
				data[data.length - 1].id
			}) of ${totalCount}`;
			// console.log(detail);
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
		let price = document.createElement("h3");
		price.innerText = "Price:- $" + element.price;
		let classification = document.createElement("p");
		let brand = document.createElement("p");
		let gear = document.createElement("p");
		classification.innerText = "Classification:-" + element.classification;
		brand.innerText = "Brand:-" + element.brand;
		gear.innerText = "Gear:-" + element.gear;

		let btn1 = document.createElement("button");
		btn1.innerText = "Buy";
		btn1.classList.add("buy");
		let btn2 = document.createElement("button");
		btn2.innerText = "Add to Cart";
		btn2.classList.add("cart");

		btn2.addEventListener("click", (e) => {
			alert("Product added to Cart Successfully");
			e.preventDefault();
			let obj = {
				name: element.name,
				rating: element.rating,
				price: element.price,
				gear: element.gear,
				brand: element.brand,
				classification: element.classification,
				image: element.image,
				id: element.id,
			};
			fetch("https://boaitandbaits-backend.onrender.com/cart", {
				method: "POST",
				headers: { "content-Type": "application/json" },
				body: JSON.stringify(obj),
			})
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					console.log(data);
				});
		});
		btn1.addEventListener("click", (e) => {
			e.preventDefault();

			let obj = {
				name: element.name,
				rating: element.rating,
				price: element.price,
				gear: element.gear,
				brand: element.brand,
				classification: element.classification,
				image: element.image,
				id: element.id,
			};
			fetch("https://boaitandbaits-backend.onrender.com/buy", {
				method: "POST",
				headers: { "content-Type": "application/json" },
				body: JSON.stringify(obj),
			})
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					console.log(data);
				});
			window.location.href = "/user-side/html/payment.html";
		});
		// console.log(btn1)
		card.append(image, name, price, classification, brand, gear, btn1, btn2);
		product.append(card);
	});
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

var conti = document.getElementsByClassName("but"); //here, getting the main div that is containing the all details and particular button

for (var i = 0; i < conti.length; i++) {
	//here in this loop toddling the class while clicking on any button
	conti[i].addEventListener("click", function () {
		this.classList.toggle("active");
		// console.log(this)
	});
}
