const products = [
  {
    name: "پودر فلفل سیاه ",
    image: "./images/felfel-siah.webp",
    available: true,
    variants: [
      { weight: "100 گرم", price: "140,000 تومان" }
    ],
    description: "پودر فلفل سیاه سرشار از آنتی‌اکسیدان و ترکیبات ضدالتهابی مثل پیپِرین است که می‌تواند به هضم غذا کمک کرده، جذب مواد مغذی را افزایش دهد و سیستم ایمنی را تقویت کند  . این ادویه از قدیم برای تسکین درد و بهبود عملکرد مغز کاربرد داشته  ."
  },
  {
    name: "پودر فلفل قرمز ",
    image: "./images/felfel-ghermez.webp",
    available: true,
    variants: [
      { weight: "100 گرم", price: "110,000 تومان" }
    ],
    description: "پودر فلفل قرمز دارای کیپسایسین است که متابولیسم بدن را تسریع کرده و اثرات ضدالتهابی دارد. همچنین می‌تواند به افزایش سلامت قلب، کنترل فشار خون و بهبود هضم کمک کند  . در عین حال دقت کنید مصرف زیاد ممکن است باعث سوزش دستگاه گوارش شود  ."
  },
  {
    name: "پودر زردچوبه ",
    image: "./images/zardchoobe.webp",
    available: true,
    variants: [
      { weight: "100 گرم", price: "70,000 تومان" }
    ],
    description: "زردچوبه سرشار از کورکومین است؛ ترکیبی قدرتمند با خاصیت ضدالتهابی و آنتی‌اکسیدانی که می‌تواند در کاهش درد مفاصل، محافظت از قلب و عملکرد مغز مؤثر باشد  . برای جذب بهتر، مصرف همراه با فلفل سیاه توصیه می‌شود  . از مصرف بیش از حد پودر یا مکمل بدون مشورت با پزشک خودداری کنید  ."
  },
  {
    name: "پودر دارچین ",
    image: "./images/drchin.webp",
    available: true,
    variants: [
      { weight: "100 گرم", price: "70,000 تومان" }
    ],
    description: "دارچین یک منبع عالی آنتی‌اکسیدان و ضدالتهاب است. مصرف روزانه آن می‌تواند به کنترل قند خون، کاهش کلسترول و سلامت قلب کمک کند  . همچنین خواص ضدباکتریایی دارد و در برخی موارد با تسکین دردهای ماهانه همراه بوده  ."
  },
  {
    name: "پودر زنجبیل ",
    image: "./images/zanjebil.webp",
    available: true,
    variants: [
      { weight: "100 گرم", price: "110,000 تومان" }
    ],
    description: "زنجبیل با ترکیبات فعال مانند جینجرول و شوگاول‌ها معروف است. این ادویه به‌ویژه برای کاهش تهوع، بهبود هضم، ضدالتهاب و تقویت سیستم ایمنی مؤثره  . همچنین برای تسکین درد عضلانی و سلامت قلب توصیه می‌شه  ."
  },
  {
    name: "هل  سبز درشت",
    image: "./images/hel.webp",
    available: true,
    variants: [
      { weight: "20 گرم", price: "150,000 تومان" }
    ],
    description: "هل سبز منبع خوبی از آنتی‌اکسیدان‌هاست و خواص دیورتیک و کاهش فشار خون داره  . مطالعات نشون می‌ده می‌تونه در مبارزه با سلول‌های سرطانی مؤثر باشه و حتی در درمان افسردگی و سلامت روان نقش داشته باشه  ."
  },
  {
    name: "کنجد",
    image: "./images/konjed.webp",
    available: false,
    variants: [
      { weight: "250 گرم", price: "100,000 تومان" }
    ],
    description: "دانه کنجد حاوی پروتئین، فیبر، چربی‌های سالم و مینرال‌هایی مثل کلسیم و منیزیمه  . می‌تونه کلسترول و فشار خون رو کاهش بده و به سلامت استخوان‌ها و قلب کمک کنه. همچنین به پوست و ضدریزش مو کمک می‌کنه  ."
  },
  {
    name: "سیاهدانه",
    image: "",
    available: false,
    variants: [
      { weight: "100 گرم", price: "100,000 تومان" }
    ],
    description: "سیاهدانه (کلنجی) منبع آنتی‌اکسیدان، آنتی‌التهاب و ضدباکتریه  . مواردی مانند کاهش کلسترول، تنظیم قند خون، تقویت حافظه، و تقویت سیستم ایمنی برای آن گزارش شده‌اند."
  },
  {
    name: "دانه فلفل سیاه",
    image: "./images/felfel-siah-doone.webp",
    available: true,
    variants: [
      { weight: "100 گرم", price: "150,000 تومان" }
    ],
    description: "مشابه پودر فلفل سیاه، دانه آن نیز منبع غنی از پیپِرینه. کمک به هضم، کاهش التهاب و افزایش جذب مواد مغذی از جمله خواص اون هست  ."
  },
  {
    name: "سماق آسیاب شده",
    image: "./images/somagh.webp",
    available: true,
    variants: [
      { weight: "100 گرم", price: "120,000 تومان" }
    ],
    description: "سماق سرشار از آنتی‌اکسیدانه و از نظر طعم، اسیدی‌تر از ادویه‌های دیگره. مطالعات نشون داده سماق می‌تواند در کنترل قند خون و کاهش التهاب مؤثر باشه "
  },
  {
    name: "چوب دارچین لوله ای",
    image: "./images/chhob-drchin.webp",
    available: true,
    variants: [
      { weight: "50 گرم", price: "70,000 تومان" }
    ],
    description: "چوب دارچین مشابه پودر دارچین خواص مشابه دارد: آنتی‌اکسیدان‌، ضدالتهاب، بهبود قند و کلسترول خون  . مخصوصاً برای دم‌کردن چای یا شربت بسیار کاربردی‌ست."
  },
  {
    name: "اسفند (اسپند)",
    image: "./images/esfand.webp",
    available: true,
    variants: [
      { weight: "200 گرم", price: "80,000 تومان" }
    ],
    description: "اسفند در طب سنتی ایران به‌عنوان ضدباکتری، ضدانگل و برای دفع چشم بد مصرف می‌شه. تحقیقات رسمی کمی در منابع غربی داره، ولی در طب سنتی خواص آن مورد توجه بوده است."
  },
  {
    name: "خاکشیر ",
    image: "./images/khakshir.webp",
    available: false,
    variants: [
      { weight: "300 گرم", price: "100,000 تومان" }
    ],
    description: "خاکشیر به عنوان یک داروی گیاهی برای کنترل عطش، کاهش تب و کمک به هضم کاربرد دارد. تحقیقات علمی رسمی کمتر در منابع غربی دارد ولی در فرهنگ ایرانی شناخته‌شده‌است."
  },
  {
    name: "تخم شربتی بالنگو ",
    image: "./images/tokhm-sharbati.webp",
    available: false,
    variants: [
      { weight: "300 گرم", price: "100,000 تومان" }
    ],
    description: "تخم شربتی (باسیل سیید) برای بهبود گوارش، کنترل قند خون و کاهش التهاب کاربرد داره. مطالعات نشان می‌ده این تخم‌ها همراه با آب، دارای خواص ضدالتهاب و تنظیم‌کننده قند هستند "
  }
];
// برای انیمیشن لود شدن کارتها
const observer = new
  IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
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

  const variantSelect = document.createElement("select");
  variantSelect.className = "variant-select";

  const priceDisplay = document.createElement("h4");
  priceDisplay.className = "price-display";


  const descButton = document.createElement("button");
  descButton.className = "desc-button";
  descButton.textContent = "توضیحات"

  // توضیحات
  const description = document.createElement("p");
  description.className = "description";
  description.textContent = product.description;
  description.style.display = "none"


  if (product.variants && product.variants.length > 0) {
    product.variants.forEach(variant => {
      const option = document.createElement("option");
      option.value = variant.price;
      option.textContent = variant.weight;
      variantSelect.appendChild(option);
    });

    // قیمت پیش‌فرض
    priceDisplay.textContent = ` قیمت: ${product.variants[0].price}`;

    // وقتی وزن تغییر کرد
    variantSelect.addEventListener("change", (e) => {
      priceDisplay.textContent = ` قیمت: ${e.target.value}`;
    });
  }

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(variantSelect);
  card.appendChild(priceDisplay);
  card.appendChild(descButton);



  descButton.onclick = () => {
    if (description.style.display == "none") {
      card.appendChild(description).style.display = "block"
      descButton.textContent = "بستن"
    } else {
      description.style.display = "none"
      descButton.textContent = "توضیحات"
    }
  }
  if (product.available) {
    const btn = document.createElement("button");
    btn.className = "order-btn";
    btn.textContent = "سفارش";
    btn.onclick = () => {
      const selectedWeight = variantSelect.options[variantSelect.selectedIndex].text;
      orderProduct(product.name, selectedWeight);
    };
    card.appendChild(btn);
  } else {
    const soon = document.createElement("p");
    soon.className = "coming-soon";
    soon.textContent = "درحال تأمین";
    card.appendChild(soon);
  }
  // اضافه کردن کارت به کانتینر
  container.appendChild(card);
});


// اضافه شدن کارتها
document.querySelectorAll('.card').forEach(card => {
  observer.observe(card);
})

function orderProduct(productName) {
  const phone = "09197148201";
  const message = encodeURIComponent(`سلام وقت بخیر من محصول ${productName} میخواستم`);
  window.location.href = `https://wa.me/${phone}?&text=${message}`;
}
