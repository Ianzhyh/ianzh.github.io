console.log('Happy developing ✨');

const mImg = document.getElementsByClassName('Cpicture');
const prevBtn = document.getElementsByClassName('carousel-prev');
const nextBtn = document.getElementsByClassName('carousel-next');
const navbar = document.getElementsByClassName('navbar');

let i = 0;

// 初始化：所有图片透明，第一张淡入
for (let j = 0; j < mImg.length; j++) {
    mImg[j].style.opacity = '0';
    mImg[j].style.zIndex = '0';
}

if (mImg.length > 0) {
    mImg[0].style.opacity = '1';
    mImg[0].style.zIndex = '1';
}

// 绑定按钮事件（如果按钮存在）
if (prevBtn.length > 0) prevBtn[0].onclick = prevkick;
if (nextBtn.length > 0) nextBtn[0].onclick = nextkick;

function showImage(index) {
    for (let j = 0; j < mImg.length; j++) {
        mImg[j].style.zIndex = '0';
        mImg[j].style.opacity = '0';
    }
    mImg[index].style.zIndex = '1';
    mImg[index].style.opacity = '1';
}

function check() {
    if (i >= mImg.length) i = 0;
    if (i < 0) i = mImg.length - 1;
    showImage(i);
}

function prevkick() {
    i--;
    check();
}

function nextkick() {
    i++;
    check();
}

// 自动轮播（每7秒）
setInterval(nextkick, 7000);

//导航栏
if (navbar.length > 0) {
    const nav = navbar[0];


    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}