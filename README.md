# gsap 語法說明

### gsap範例寫法

* 基礎寫法
   - 1.需 import { gsap } from 'gsap'
  ```js
  //指定物件,在 1 秒期間位移到 x:100px 的位置
  gsap.to(' .el ', { duration: 1 , repeat: -1 , x:100 } ) 
  //也可寫 x:"100px"
* 進階寫法
  ```js
   //如有相同的參數，可以設定預設值
    const t = gsap.timeline({
    defaults:{
      duration: 1,
      ease: 'elastic'
    }})
    t.to('.box1', { x: 100 })
     .to('.box2', { y: 100 });

### 常用語法

| 語法      | 用途 |
| --- | ---- |
| .to ( '物件' , { 參數 } )| A 到 B 點 |
| .from ( '物件' , { 參數 } )| B 點到 A 點 |
| .fromTo( '物件' , { 起始點參數 } , {結束點參數} ) | 起始點到結束點 |
| .set ( '物件' , { 參數 } ) | 物件直接放到該設定點 |

### 常用參數 
#### [gsap3參數網址](https://greensock.com/cheatsheet/)

| 參數      | 用途 |
| ---- | ---- |
| duration | 動態執行時間 |
| repeat | 動態重複次數，-1 為無線循環 |
| ease | 為速率變化，'none' 為平滑曲線|
| yoyo | 動態是否來回，預設為 false |
| x | x軸位置 |
| y | y軸位置 |
| scale | 大小 |
| opacity | 透明度 |
| rotation | 旋轉角度 |
| CSS語法 | 支援CSS語法，需轉成駝峰式命名 |
| paused | 是否一開始就執行動態 (預設 false ) |
| stagger | 設置動態錯開時間 |
| ease | 速度變化率 ， 'none' 為平滑度， [速率參考網站]( https://greensock.com/docs/v3/Eases )| 

### 常用方法
- 用法
[官網參考](https://greensock.com/docs/v3/GSAP/Timeline)
```js
 const tl=gsap.to()
 tl.play(); //(可放秒數)
```
| 方法      | 用途 |
| ---- | ---- |
| .play() | 播放 |
| .paused() | 暫停播放 |
| .repeat() | 再次播放 |
| .resume() | 繼續波放|
| .resume() | 返回 |
| .restart() | 重新播放 |
#### gsap 連續動圖語法
* [SteppedEase](https://greensock.com/docs/v2/Easing/SteppedEase)  
* 基礎寫法
```JS
 import { gsap , SteppedEase } from 'gsap'
 gsap.to( '.box1' , { x:100 , ease:SteppedEase.config(5)});
 //config(5)為一張連續圖有5各圖檔
```
### 亂數random [官網](https://greensock.com/docs/v3/GSAP/UtilityMethods/random())
- 寫法
  ```JS
   //random(最小值，最大值[，snapIncrement，returnFunction])
   
   var random = gsap.utils.random(-200, 500, 10, true);//會在最小與最大值 以10為增量抓取數值，true 代表隨時回傳數值從初始範圍中，回傳數值會每次都不同

   //random(array[, returnFunction])
   var randomColor = gsap.utils.random([0, 100, 200], true); //隨機回傳陣列中3個數值
  ```

### React渲染
 * React中需引入 useRef , useEffect 
 ```js
 import React, { useRef, useEffect } from 'react'
 import { gsap } from 'gsap'
 
 const box1Ref = useRef(null) 

 useEffect(()=>{
   gsap.to(box1Ref.current,{x:100}) //gsap動態需寫在useEffec中
 })

 <div className="box1" ref={box1Ref}>...</div>
```


### 常用指令
| 指令 | 用途 |
| ---- | ---- |
| `npm run lint` | 檢查是否有錯誤或多於語法 |
| `npm run format` | 自動排版 |
| `npm run start` | 執行測試的 Server , URL : http://localhost:3000 |
| `npm run build` | 將程式碼壓縮打包 |



   
  
