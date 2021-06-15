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

#### gsap 連續動圖語法
* [SteppedEase](https://greensock.com/docs/v2/Easing/SteppedEase)  
* 基礎寫法
    - 需引入 { gsap , SteppedEase } from 'gsap'
```JS
 gsap.to( '.box1' , { x:100 , ease:SteppedEase.config(5)});
 //config(5)為一張連續圖有5各圖檔
```

### React渲染
 * React中需引入 useRef , useEffect 
 ```js
 import React, { useRef, useEffect } from 'react'
 import { gsap } from 'gsap'
 
 const box1Ref = useRef(null)

 useEffect(()=>{
   gsap.to(box1Ref.current,{x:100})
 })

 <div className="box1" ref={box1Ref}>...</div>
```

# Framer Motion 語法說明
 * 基本寫法
   - 1.需 import { motion } from 'framer-motion'
   - 2.需使用 framerMotion 的元件都需加入 motion.
  ```js
    // 動畫展示要移動到y:100的位置,動畫過場為 1 秒,無限循環,動畫速率曲線為 easeInOut
      <motion.div
        className="Sphere"
        animate={{ y:100 }}             
        transition={{
          duration: 1,
          ease: 'easeInOut',         
          repeat: Infinity        
        }}
      />    
  ```
### 常用animate參數 
#### [animate參數網址](https://www.framer.com/api/motion/animation/)
| 指令 | 用途 |
| ---- | ---- |
| x: |  x 軸位置 |
| y: |  y 軸位置 |
| rotate: | 旋轉 |
| scale: | 大小 |
| opacity: | 透明度 |
| CSS語法: | 支援CSS語法，需轉成駝峰式命名 |
#### [Transition參數網址](https://www.framer.com/api/motion/types/#transition)
| 指令 | 用途 |
| ---- | ---- |
| duration: | 動態執行時間 |
| delay: | 延遲 |
| repeat: | 循環次數，Infinity為無限循環 |
| ease: | 速度變化率，較常用的2種 "linear"，"easeInOut" |
| from: | 動畫的當前狀態 |
| time: | times都是0到1之間，動畫關鍵幀|
| staggerChildren: | 子元件錯開時間 |

### SVG路徑  
| 指令 | 用途 |
| ---- | ---- |
| pathLength: | 改變路徑長度，設置為0和之間的值1 |
| pathSpacing: | 改變路徑間距，設置為0和之間的值1 |
| pathOffset: | 改變路徑位移，設置為0和之間的值1 |

### 常用事件語法
| 指令 | 用途 |
| ---- | ---- |
| whileHover: | Hover時動態 |
| whileTap: | 點擊時動態 |
| whileFocus: | Focuus時動態 |

### 常用指令
| 指令 | 用途 |
| ---- | ---- |
| `npm run lint` | 檢查是否有錯誤或多於語法 |
| `npm run format` | 自動排版 |
| `npm run start` | 執行測試的 Server , URL : http://localhost:3000 |
| `npm run build` | 將程式碼壓縮打包 |



   
  
