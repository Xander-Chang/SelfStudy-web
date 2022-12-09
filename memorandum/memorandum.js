var title = document.getElementById("title");
var date = document.getElementById("date");
var content = document.getElementById("content");
var addBtn = document.getElementById("addBtn");         //新增按鈕
var removeBtn = document.getElementById("removeBtn");   //刪除按鈕
var list = document.getElementById("list");       //新增div



// 優化
function improve(){
    let htmlStr = ''
    
    listContent.forEach(function (article) {
        htmlStr = htmlStr + `
        <div class="article">
            <div id="list">
                <hr/>
                <h2>標題: ${article.title}</h2>
                <p>日期: ${article.date}</p>
                <p>內容: ${article.content}</p>
            </div>
        </div>
        `;
        list.innerHTML = htmlStr;
    })

    title.value = "";
    date.value = "";
    content.value = "";
};



// 新增按鈕設定
const listContent = [];                                 // 先弄一個空列表

addBtn.addEventListener("click",function(){
    
    listContent.unshift({                                  //push是在列表後面新增新的, pop 是從後面拿掉
        title: title.value,                                 //unshift 從前面
        date: date.value,
        content: content.value
    });

    improve()

});




//刪除按鈕設定
removeBtn.addEventListener("click", function(){
    listContent.shift()                                      //push是在列表後面新增新的, pop 是從後面拿掉);
                                                             //shift 從前面
    improve()
});