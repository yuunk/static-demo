使い方
1. CSSとJSを読み込みます。
```html
<html>
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.1/css/swiper.min.css">
  </head>
  <body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.1/js/swiper.min.js"></script>
  </body>
</html>
```
2. htmlの記述  
.swiper-container以下に.swiper-wrapper、.swiper-slideを記述し、スクリプトを記述することで簡単にスライド表示することが可能です。
```html
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="./assets/images/IMG_3335.JPG" alt="Swiper01">
      </div>
      <div class="swiper-slide"><img src="./assets/images/IMG_3341.JPG" alt="Swiper02">
      </div>
      <div class="swiper-slide"><img src="./assets/images/IMG_3448.JPG" alt="Swiper03">
      </div>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
```

3. js
```js
(function () {
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 2,
        spaceBetween: 50
    });
})();
```

# オプション
```
slidesPerView: 3 //何枚表示させるか
spaceBetween: 0 //スライド間の余白 px