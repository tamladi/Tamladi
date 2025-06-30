const products = [
    {
      name: "پودر فلفل سیاه عزت",
      weight: "100 گرم",
      image: "./images/black_pepper.jpg",
      price: "110,000 تومان"
    },
    {
      name: "پودر فلفل قرمز کیمیا",
      weight: "100 گرم",
      image: "./images/red_chilli.jpg",
      price: "80,000 تومان"
    },
    {
      name: "پودر زردچوبه عزت",
      weight: "100 گرم",
      image: "./images/turmeric.jpg",
      price: "50,000 تومان"
    },
    {
      name: "پودر دارچین عزت",
      weight: "100 گرم",
      image: "./images/cinnamon.jpg",
      price: "50,000 تومان"
    },
    {
      name: "پودر زنجبیل عزت",
      weight: "100 گرم",
      image: "./images/ginger.jpg",
      price: "80,000 تومان"
    },
    {
      name: "هل اکبر بنفش",
      weight: "20 گرم",
      image: "./images/hell.jpg",
      price: "120,000 تومان"
    }
  ];
  
  const container = document.getElementById("products");
  
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";
  
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
  
    const title = document.createElement("h3");
    title.textContent = product.name;
  
    const weight = document.createElement("h4");
    weight.textContent = `وزن : ${product.weight}`;

    const price = document.createElement("h4");
    price.textContent = `قیمت : ${product.price}`;
  
    const btn = document.createElement("button");
    btn.className = "order-btn";
    btn.textContent = "سفارش";
    btn.onclick = function () {
      orderProduct(product.name);
    };
  
    // چسباندن عناصر به کارت
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(weight);
    card.appendChild(price);
    card.appendChild(btn);
  
    // اضافه کردن کارت به کانتینر
    container.appendChild(card);
  });
  
  function orderProduct(productName) {
    const phone = 989197148201;
    const message = encodeURIComponent(`سلام وقت به خیر من این محصول رو میخواستم  ${productName}`);
    window.open("https://wa.me/989197148201?text=${message}") ;
  }