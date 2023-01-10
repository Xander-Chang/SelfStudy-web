
var title = document.getElementById("title");           // 資料內容
var date = document.getElementById("date");
var content = document.getElementById("content");

var addBtn = document.getElementById("addBtn");         //新增按鈕
var removeBtn = document.getElementById("removeBtn");   //刪除按鈕
var delete_allBtn = document.getElementById("delete_all")  //全部刪除鍵

var list = document.getElementById("list");             //新增div



// 優化
function improve(){

    // 第一個動作-- 塞新資料
    let htmlStr = ''
    
    listContent.forEach(function (article) {
        htmlStr = htmlStr + `
            <div class="article">
                <hr/>
                <h2>標題: ${article.Title}</h2>            
                <p>日期: ${article.Date}</p>
                <p>內容: ${article.Content}</p>
            </div>
        `;                                          // title.value 是抓欄位的值, article.Title 才是抓 listContent 裡面字典的值

        list.innerHTML = htmlStr;
    })
    
    console.log(listContent)                          // 可以看到 listContent 是累積全部再貼上
    
    
    // 第二個動作-- 淨空欄位
    title.value = '' ;
    date.value = '' ;
    content.value = '' ;

};



// 新增按鈕 設定
const listContent = [];                                 // 先弄一個空列表

addBtn.addEventListener("click",function(){
    
    listContent.unshift({                                  //push是在列表後面新增新的, pop 是從後面拿掉
        Title: title.value,                                 //unshift 從前面
        Date: date.value,                                  // 空列表 會從前面(unshift) 新增資料
        Content: content.value
    });

    improve()                                           // 空列表新增資料後，跑到 improve函式， 列表跑foreach 迴圈 
                                                        // 開始塞入資料到 html

});




//刪除按鈕 設定
removeBtn.addEventListener("click", function(){
    listContent.pop()                                      //push是在列表後面新增新的, pop 是從後面拿掉);
                                                             //shift 從前面
    improve() 
});






// 問題: listContent確實是淨空變成[]空list ,但是html的字串並不會消失
// 解決: 再 新增 一次 listContent

//問題2: 全部刪除後 會以一個新的空資料集????

//全部刪除 設定     

delete_allBtn.addEventListener("click", function(){
    listContent.splice(0, listContent.length)

    listContent.push({                             // 先設定 listContent 裡面的字典, 讓函式improve 能夠取值                        
        Title: title.value,                                
        Date: date.value,                                  
        Content: content.value
    });
    improve()                                     // 執行函式improve 取到空值, html 資料淨空
    
})

