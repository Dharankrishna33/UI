let bars=document.getElementById('bar')
bars.addEventListener('click',toggleNav)

let centre=document.querySelector('.centre')
let navi=document.querySelector('.navi')
let togg=document.getElementById('toggle')

function toggleNav(){
    console.log('activated')
   
    togg.classList.toggle('toggleNavi3')
    centre.classList.toggle('toggleNavi2')
    navi.classList.toggle('toggleNavi1')
}