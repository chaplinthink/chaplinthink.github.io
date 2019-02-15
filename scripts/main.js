let myImage = document.querySelector('img');  
myImage.onclick = function() {
   let mySrc = myImage.getAttribute('src');
   if (mySrc === 'images/chengdu1.jpg') {
        myImage.setAttribute('src' , 'images/chengdu2.jpg');
   }else{
    myImage.setAttribute('src' , 'images/chengdu1.jpg');
   }
}

function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'Mozilla 酷毙了，' + name + '！';
}

function setUserName() {
    let myName = prompt('请输入你的名字');
    //使用Web Storge API
    localStorage.setItem('name', myName);
    setHeading(myName);
}
//初始化代码块
let stortedName = localStorage.getItem('name');
if(!stortedName) {
    setUserName();
}else{
    setHeading(stortedName);
}

let myButton = document.querySelector('button'); 
myButton.onclick = setUserName;
