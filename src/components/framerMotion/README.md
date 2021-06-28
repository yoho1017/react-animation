# Framer Motion 語法說明
 * 基本寫法
   - 1.需 import { motion } from 'framer-motion'
   - 2.需使用 framerMotion 的元件都需加入 motion.
  ```js
      <motion.div
        className="Sphere"
        animate={{ y:100 }} //動態移動到 y:100 的位置           
        transition={{
          duration: 1,  //動畫過場為 1 秒
          ease: 'easeInOut',  //動畫速率曲線       
          repeat: Infinity   //無限循環     
        }}
      />    
  ```
  - 3.使用 variants 可製作(多)子組件動態設定
  ```js
  //先設定一個 variants
    import { motion } from 'framer-motion'
    const variants = {
    visible: { opacity: 1 }, //visble 為最終呈現的樣式
    hidden: { opacity: 0 },  // hidden 為初始樣式
    }

    <motion.div
        initial="hidden" //初始值設定hidden
        animate="visible" //最後呈現設定visible 
        variants={variants} //引入設定好的variants
     />
  ```
  - 4.也可使用 variants 操作父組件去編排子組件動態
   ```js
    const list = {
      visible: {
        opacity: 1,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.3,
        },
      },
      hidden: {
        opacity: 0,
        transition: {
          when: "afterChildren",
        },
      },
    }
    return (
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={list}
        >
        <motion.li/>
        <motion.li/>
        <motion.li/>
      </motion.ul>
    ) 
   ```
  - 5.exit 為退出動畫，須使用 AnimatePresence 模組
  - 6.API
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
| type | 動態型態有 過渡／彈簧/慣性 三種 "tween" / "spring" / "inertia" |

### SVG路徑  
| 指令 | 用途 |
| ---- | ---- |
| pathLength: | 改變路徑長度，設置為0和之間的值1 |
| pathSpacing: | 改變路徑間距，設置為0和之間的值1 |
| pathOffset: | 改變路徑位移，設置為0和之間的值1 |

### 觸發事件語法
| 指令 | 用途 |
| ---- | ---- |
| whileHover: | Hover時動態 |
| whileTap: | 點擊時動態 |
| whileFocus: | Focuus時動態 |
| whileDrag : | 拖曳 |