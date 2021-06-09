# gsap 語法說明

### gsap範例寫法

* 基礎寫法
  ```js
  //指定物件,在1秒期間位移到x:100px的位置
  gsap.to(' .el ', { duration:1 , repeat:-1 , x:100 } ) 
* 進階寫法
  ```js
   //如有相同的參數，可以設定預設值
    const tl = gsap.timeline({
    defaults:{
      duration: 1,
      ease: 'elastic'
    }})
    t.to('.box1', { x: 100 })
     .to('.box2', { y: 100 });

### 常用語法

| 語法      | 用途 |
| --------- | ---- |
| .to ( '物件' , { 參數 } )| A到B點 |
| .from ( '物件' , { 參數 } )| B點到A點 |
| .fromTo( '物件' , { 起始點參數 } , {結束點參數} ) | 起始點到結束點 |
| .set ( '物件' , { 參數 } ) | 物件直接放到該設定點 |

### 常用參數 [gsap3參數網址](https://greensock.com/cheatsheet/)

| 參數      | 用途 |
| --------- | ---- |
| duration | 動態執行時間 |
| repeat | 動態重複次數，-1為無線循環 |
| ease | 為速率變化，'none'為平滑曲線|
| yoyo | 動態是否來回，預設為false |
| x | x軸位置 |
| y | y軸位置 |
| opacity | 透明度 |
| rotation | 旋轉角度 |
| CSS語法 | 支援CSS語法，需轉成駝峰式命名 |
| paused | 是否一開始就執行動態 (預設false) |
| stagger | 設置動態錯開時間 |
| ease | 速度變化率 ， 'none' 為平滑度， [參考網站](https://greensock.com/docs/v3/Eases)| 


   
  
