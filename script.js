const products = [
  {
    name: "پودر فلفل سیاه ",
    weight: "100 گرم",
    image: "./images/black_pepper.jpg",
    price: "110,000 تومان",
    available: true
  },
  {
    name: "پودر فلفل قرمز ",
    weight: "100 گرم",
    image: "./images/red_chilli.jpg",
    price: "80,000 تومان",
    available: true
  },
  {
    name: "پودر زردچوبه ",
    weight: "100 گرم",
    image: "./images/turmeric.jpg",
    price: "50,000 تومان",
    available: true
  },
  {
    name: "پودر دارچین ",
    weight: "100 گرم",
    image: "./images/cinnamon.jpg",
    price: "50,000 تومان",
    available: true
  },
  {
    name: "پودر زنجبیل ",
    weight: "100 گرم",
    image: "./images/ginger.jpg",
    price: "80,000 تومان",
    available: true
  },
  {
    name: "هل  سبز درشت",
    weight: "20 گرم",
    image: "./images/hell.jpg",
    price: "120,000 تومان",
    available: true
  },
  {
    name: "کنجد",
    weight: "",
    image: "",
    price: "",
    available: false
  },
  {
    name: "سیاهدانه",
    weight: "",
    image: "",
    price: "",
    available: false
  },
  {
    name: "دانه فلفل سیاه",
    weight: "",
    image: "",
    price: "",
    available: false
  },
  {
    name: "سماق آسیاب شده",
    weight: "",
    image: "",
    price: "",
    available: false
  }
];
// برای انیمیشن لود شدن کارتها
const observer = new 
IntersectionObserver((entries) => {
  entries.forEach(entry =>  {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  })
});


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

  const status = document.createElement("h3")
  status.textContent = `به زودی ${product.status}`
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

  if (product.available) {
    const btn = document.createElement("button");
    btn.className = "order-btn";
    btn.textContent = "سفارش";
    btn.onclick = () => orderProduct(product.name);
    card.appendChild(btn);
  } else {
    const soon = document.createElement("p");
    soon.className = "coming-soon";
    soon.textContent = "به‌زودی موجود می‌شود";
    card.appendChild(soon);
  }

// اضافه کردن کارت به کانتینر
container.appendChild(card);
});

// اضافه شدن کاردتها
document.querySelectorAll('.card').forEach(card => {
  observer.observe(card);
})

function orderProduct(productName) {
  const message = encodeURIComponent(`سلام وقت به خیر من محصول ${productName} رو میخواستم`);
  window.open(`https://wa.me/989197148201?text=${message}`, "_blank");
}
