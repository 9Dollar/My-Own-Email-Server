module.exports = {
    HTML:function(mails){
      if(mails == undefined) return;
      var html = ""
      if(mails.length === 0){
        html = `
        
        <div id="enter-email" style="margin:0 4rem 0 4rem ">
        <div style="padding-left: 3rem; padding-right: 3rem;">
            <h3 style="text-align: left; padding-top: 4rem;">메일함이 비었습니다</h3>
        </div>
    </div>
    `
      }else {
        for(var i = mails.length - 1; i >= 0; i--){
          html += `
          <div id="enter-email" style="margin:0 4rem 0 4rem ">
          <div style="padding-left: 3rem; padding-right: 3rem;">
              <h2 style="text-align: left; padding-top: 4rem;">${mails[i]["subject"]}</h2>
              <div style="text-align:justify">
                  <span style="margin-left: 0;">from: ${mails[i]["from"]}</span>
                  <span style="color: rgb(58, 58, 58); float: right;">${mails[i]["date"]}</span>
              </div>
              <h4 style="text-align: left; padding-top: 2rem; ">${mails[i]["text"]}</h4>
          </div>
      </div>
          `
          console.log(i)
        }
      }

      return `
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    
</head>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
  body {
    margin: 0px;
    border: 0px;
    background-color: #F4F4F4;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    height: 100%;
  }
  #header-bar {
    margin-left: 1rem;
    top: 0;
    left: 0;
    right: 0;
    font-size: smaller;
    height: 55px;
    padding: 1rem;
    font-weight: bold;
    align-items: center;
    display: flex;
  }
  .KKUBUL-MAIL {
    margin-left: 1rem;
  }
  #enter-email {
    margin: 20px;
    background-color: #FFFFFF;
    border-radius: 12px;
    padding-bottom: 40px;
  }
  input {
    -webkit-appearance: none; /* 네이티브 외형 감추기 */
    -moz-appearance: none;
    appearance: none;
    background: rgba(0, 0, 0, 0); /* 네이티브 화살표 대체 */  
    filter: grayscale(100%);
    border: 1px solid black; 
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    border-radius: 7px;
    padding: .8em .8em; /* 여백으로 높이 설정 */
  }

  button {
    -webkit-appearance: none; /* 네이티브 외형 감추기 */
    -moz-appearance: none;
    appearance: none;
    background: rgba(0, 0, 0, 1); /* 네이티브 화살표 대체 */  
    filter: grayscale(100%);
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    color: white;
    border-radius: 7px;
    padding: .8em .8em; /* 여백으로 높이 설정 */
  }

  * {
    word-break:break-all;
  }

  
</style>
<body>
    <div id="header-bar">
        <h1 class="KKUBUL-MAIL">KKUBUL MAIL</h1>
    </div>

    ${html}
    

        
</body>
</html>
      `;
    }


  }
  