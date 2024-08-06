// contact counter
const messageArea = document.querySelector('textarea[name="message"]');
const counterSpan = document.querySelector(".counter");
messageArea.addEventListener("input", function () {
  let counter = messageArea.value.length;
  if (counter >= 10) {
    counterSpan.style.color = "red";
  } else {
    counterSpan.style.color = "#2196f3";
  }
  counterSpan.textContent = counter;
});

// header progress
const pageProgress = document.querySelector("body > .progress");
window.onscroll = () => {
  let fullHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let topScroll = document.documentElement.scrollTop;
  let scrollPercent = (topScroll / fullHeight) * 100;

  pageProgress.style.width = `${scrollPercent}%`;
};

// open article cards
const articleBtns = document.querySelectorAll(
  ".article-cards .items-footer button"
);

articleBtns.forEach((btn) => btn.addEventListener("click", function () {}));
