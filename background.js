// 監聽套件被初始安裝或更新時、瀏覽器更新時
chrome.runtime.onInstalled.addListener(() => {
  console.log('test123');
  })
