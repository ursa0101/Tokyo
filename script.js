function switchPage(pageId) {
  // 1. 先把所有帶有 'page' class 的區塊都隱藏
  const allPages = document.querySelectorAll('.page');
  allPages.forEach(page => {
    page.style.display = 'none';
  });

  // 2. 只把我們點擊的那個區塊顯示出來
  document.getElementById(pageId).style.display = 'block';
}