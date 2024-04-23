import Lenis from '@studio-freight/lenis'

export function smooth(){
    const lenis = new Lenis({
        duration:1
    })
    function raf(time){
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    lenis.on('scroll',(e)=>{
        console.log(e)
    })
}