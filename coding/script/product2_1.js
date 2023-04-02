let data1;
fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data1 = data;
  })
  .catch((err) => {
    console.log(err);
  });

let array = [];

// Brand filter part

let a = document.getElementById("a");
let Shimano = document.getElementById("Shimano");
Shimano.addEventListener("click", () => {
  ShowData(data1);
  function ShowData(data) {
    let hi = data.filter((e) => {
      return a.innerText == e.brand;
    });
    for (let i = 0; i < hi.length; i++) {
      array.push(hi[i]);
    }
    // console.log(array)
    total.innerText = array.length + " Result";
    appendData(array);
  }
});
let b = document.getElementById("b");
let Bass_Pro_Shop = document.getElementById("Bass Pro Shop");
Bass_Pro_Shop.addEventListener("click", () => {
  ShowData(data1);
  function ShowData(data) {
    let hi = data.filter((e) => {
      return b.innerText == e.brand;
    });
    for (let i = 0; i < hi.length; i++) {
      array.push(hi[i]);
    }
    // console.log(array)
    total.innerText = array.length + " Result";
    appendData(array);
  }
});
let c = document.getElementById("c");
let Fishing = document.getElementById("13 Fishing");
Fishing.addEventListener("click", () => {
  ShowData(data1);
  function ShowData(data) {
    let hi = data.filter((e) => {
      return c.innerText == e.brand;
    });
    for (let i = 0; i < hi.length; i++) {
      array.push(hi[i]);
    }
    // console.log(array)
    total.innerText = array.length + " Result";
    appendData(array);
  }
});
let d = document.getElementById("d");
let Abu_Garcia = document.getElementById("Abu Garcia");
Abu_Garcia.addEventListener("click", () => {
  ShowData(data1);
  function ShowData(data) {
    let hi = data.filter((e) => {
      return d.innerText == e.brand;
    });
    for (let i = 0; i < hi.length; i++) {
      array.push(hi[i]);
    }
    // console.log(array)
    total.innerText = array.length + " Result";
    appendData(array);
  }
});
let e = document.getElementById("e");
let Daiwa = document.getElementById("Daiwa");
Daiwa.addEventListener("click", () => {
  ShowData(data1);
  function ShowData(data) {
    let hi = data.filter((a) => {
      return e.innerText == a.brand;
    });
    for (let i = 0; i < hi.length; i++) {
      array.push(hi[i]);
    }
    // console.log(array)
    total.innerText = array.length + " Result";
    appendData(array);
  }
});

let f = document.getElementById("f");
let Ardent = document.getElementById("Ardent");
Ardent.addEventListener("click", () => {
  ShowData(data1);
  function ShowData(data) {
    let hi = data.filter((e) => {
      return f.innerText == e.brand;
    });
    for (let i = 0; i < hi.length; i++) {
      array.push(hi[i]);
    }
    // console.log(array);
    total.innerText = array.length + " Result";
    appendData(array);
  }
});

// Gear filter part;

let g = document.getElementById("g");
let one = document.getElementById("one");
one.addEventListener("click", () => {
  ShowData(data1);
  function ShowData(data) {
    let hi = data.filter((e) => {
      return g.innerText == e.gear;
    });
    for (let i = 0; i < hi.length; i++) {
      array.push(hi[i]);
    }
    // console.log(array);
    total.innerText = array.length + " Result";
    appendData(array);
  }
});

let h = document.getElementById("h");
let two = document.getElementById("two");
two.addEventListener("click", () => {
  ShowData(data1);
  function ShowData(data) {
    let hi = data.filter((e) => {
      return h.innerText == e.gear;
    });
    for (let i = 0; i < hi.length; i++) {
      array.push(hi[i]);
    }
    // console.log(array);
    total.innerText = array.length + " Result";
    appendData(array);
  }
});
let z = document.getElementById("i");
let three = document.getElementById("three");
three.addEventListener("click", () => {
  ShowData(data1);
  function ShowData(data) {
    let hi = data.filter((e) => {
      return z.innerText == e.gear;
    });
    for (let j = 0; j < hi.length; j++) {
      array.push(hi[j]);
    }
    // console.log(array);
    total.innerText = array.length + " Result";
    appendData(array);
  }
});
let j = document.getElementById("j");
let four = document.getElementById("four");
four.addEventListener("click", () => {
  ShowData(data1);
  function ShowData(data) {
    let hi = data.filter((e) => {
      return j.innerText == e.gear;
    });
    for (let i = 0; i < hi.length; i++) {
      array.push(hi[i]);
    }
    // console.log(array);
    total.innerText = array.length + " Result";
    appendData(array);
  }
});
let k = document.getElementById("k");
let five = document.getElementById("five");
five.addEventListener("click", () => {
  ShowData(data1);
  function ShowData(data) {
    let hi = data.filter((e) => {
      return k.innerText == e.gear;
    });
    for (let i = 0; i < hi.length; i++) {
      array.push(hi[i]);
    }
    // console.log(array);
    total.innerText = array.length + " Result";
    appendData(array);
  }
});
let l = document.getElementById("l");
let six = document.getElementById("six");
six.addEventListener("click", () => {
  ShowData(data1);
  function ShowData(data) {
    let hi = data.filter((e) => {
      return l.innerText == e.gear;
    });
    for (let i = 0; i < hi.length; i++) {
      array.push(hi[i]);
    }
    // console.log(array);
    total.innerText = array.length + " Result";
    appendData(array);
  }
});
let m = document.getElementById("m");
let seven = document.getElementById("seven");
seven.addEventListener("click", () => {
  ShowData(data1);
  function ShowData(data) {
    let hi = data.filter((e) => {
      return m.innerText == e.gear;
    });
    for (let i = 0; i < hi.length; i++) {
      array.push(hi[i]);
    }
    // console.log(array);
    total.innerText = array.length + " Result";
    appendData(array);
  }
});
let n = document.getElementById("n");
let eight = document.getElementById("eight");
eight.addEventListener("click", () => {
  ShowData(data1);
  function ShowData(data) {
    let hi = data.filter((e) => {
      return n.innerText == e.gear;
    });
    for (let i = 0; i < hi.length; i++) {
      array.push(hi[i]);
    }
    // console.log(array);
    total.innerText = array.length + " Result";
    appendData(array);
  }
});
let o = document.getElementById("f");
let nine = document.getElementById("nine");
nine.addEventListener("click", () => {
  ShowData(data1);
  function ShowData(data) {
    let hi = data.filter((e) => {
      return o.innerText == e.gear;
    });
    for (let i = 0; i < hi.length; i++) {
      array.push(hi[i]);
    }
    // console.log(array);
    total.innerText = array.length + " Result";
    appendData(array);
  }
});
let p = document.getElementById("p");
let ten = document.getElementById("ten");
ten.addEventListener("click", () => {
  ShowData(data1);
  function ShowData(data) {
    let hi = data.filter((e) => {
      return p.innerText == e.gear;
    });
    for (let i = 0; i < hi.length; i++) {
      array.push(hi[i]);
    }
    // console.log(array);
    total.innerText = array.length + " Result";
    appendData(array);
  }
});

// Classification filter;

let q = document.getElementById("q");
let eleven = document.getElementById("eleven");
eleven.addEventListener("click", () => {
  ShowData(data1);
  function ShowData(data) {
    let hi = data.filter((e) => {
      return q.innerText == e.classification;
    });
    for (let i = 0; i < hi.length; i++) {
      array.push(hi[i]);
    }
    // console.log(array);
    total.innerText = array.length + " Result";
    appendData(array);
  }
});
let r = document.getElementById("r");
let twelve = document.getElementById("twelve");
twelve.addEventListener("click", () => {
  ShowData(data1);
  function ShowData(data) {
    let hi = data.filter((e) => {
      return r.innerText == e.classification;
    });
    for (let i = 0; i < hi.length; i++) {
      array.push(hi[i]);
    }
    // console.log(array);
    total.innerText = array.length + " Result";
    appendData(array);
  }
});

// filter for price;

let t = document.getElementById("t");
let fourteen = document.getElementById("fourteen");
fourteen.addEventListener("click", () => {
  ShowData(data1);
  function ShowData(data) {
    let hi;
    if (t.innerText == "Between $100 and $200") {
      hi = data.filter((e) => {
        return e.price < 200 && e.price > 100;
      });
    }
    for (let i = 0; i < hi.length; i++) {
      array.push(hi[i]);
    }
    // console.log(array);
    total.innerText = array.length + " Result";
    appendData(array);
  }
});
let u = document.getElementById("u");
let fifteen = document.getElementById("fifteen");
fifteen.addEventListener("click", () => {
  ShowData(data1);
  function ShowData(data) {
    let hi;
    if (u.innerText == "Between $200 and $300") {
      hi = data.filter((e) => {
        return e.price < 300 && e.price > 200;
      });
    }
    for (let i = 0; i < hi.length; i++) {
      array.push(hi[i]);
    }
    // console.log(array);
    total.innerText = array.length + " Result";
    appendData(array);
  }
});
let v = document.getElementById("v");
let sixten = document.getElementById("sixten");
sixten.addEventListener("click", () => {
  ShowData(data1);
  function ShowData(data) {
    let hi;
    if (v.innerText == "Between $300 and $400") {
      hi = data.filter((e) => {
        return e.price < 400 && e.price > 300;
      });
    }
    for (let i = 0; i < hi.length; i++) {
      array.push(hi[i]);
    }
    console.log(array);
    total.innerText = array.length + " Result";
    appendData(array);
  }
});
let w = document.getElementById("w");
let seventeen = document.getElementById("seventeen");
seventeen.addEventListener("click", () => {
  ShowData(data1);
  function ShowData(data) {
    let hi;
    if (w.innerText == "Between $400 and $500") {
      hi = data.filter((e) => {
        return e.price < 500 && e.price > 400;
      });
    }
    for (let i = 0; i < hi.length; i++) {
      array.push(hi[i]);
    }
    // console.log(array);
    total.innerText = array.length + " Result";
    appendData(array);
  }
});
