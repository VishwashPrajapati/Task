const cancel = document.getElementsByClassName("cancelBtn")[0];
const menu = document.getElementsByClassName("menu")[0];
const nav = document.getElementsByClassName("main__nav")[0];
const dropdown = document.getElementsByClassName("list_items");

const hidePrevBtn = document.querySelector(".prev_btn");
const hideNextBtn = document.querySelector(".next_btn");

window.onresize = () => {
  location.reload();
};

menu.addEventListener("click", () => {
  nav.classList.add("toggle");
  cancel.classList.add("show");
});
cancel.addEventListener("click", () => {
  nav.classList.remove("toggle");
  cancel.classList.remove("show");
});

$(".slider").slick({
  arrows: true,
  dots: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: $(".prev_btn"),
  nextArrow: $(".next_btn"),
  responsive: [
    {
      breakpoint: 600,
      settings: "unslick",
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
});

for (let classes of hidePrevBtn.classList) {
  if (classes === "slick-disabled") {
    hidePrevBtn.classList.add("hideBtn");
  }
}

function click(btnClick, otherBtn) {
  $(btnClick).click(() => {
    otherBtn.classList.forEach((element) => {
      if (element === "slick-disabled") {
        otherBtn.classList.add("hideBtn");
      } else {
        otherBtn.classList.remove("hideBtn");
      }
    });
    btnClick.classList.forEach((element) => {
      if (element === "slick-disabled") {
        btnClick.classList.add("hideBtn");
      } else {
        btnClick.classList.remove("hideBtn");
      }
    });
  });
}

click(hidePrevBtn, hideNextBtn);
click(hideNextBtn, hidePrevBtn);
