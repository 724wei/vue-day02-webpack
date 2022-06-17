import { one } from './one.js'
import { two } from './two.js'
one()
two()
import './style/main.css'
import './style/main.less'
import './assets/fonts/iconfont.css'
import app from './app.vue'
import gifSrc from './assets/1.gif'
import pngSrc from './assets/logo_small.png'
app()
const gif = document.createElement('img')
const png = document.createElement('img')

gif.src = gifSrc
png.src = pngSrc

document.body.appendChild(gif)
document.body.appendChild(png)

const fn = () => {
    console.log('hello');
}
console.log(fn);