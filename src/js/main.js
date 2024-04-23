import {menu} from "./menu.js"
import {intro} from "./intro.js"
import {work} from "./work.js"
import {graphics} from "./graphics.js"
import {link} from "./link.js"
import {smooth} from "./smooth.js"
import {splide} from "./splide.js"

window.addEventListener('load',function(){
  smooth()
  link()
  menu()
  intro()
  work()
  graphics()
  splide()
})