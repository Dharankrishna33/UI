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

let imglist=['york','dubai','miami']
let address=[`Old Town,Creek,Souks and street
      food guided tour.`,
             `Anteiope Canyon,Horseshore 
      flend tour with Picut`,
             `Key-west full day Trio with
      snorkling and transfer`]

let buttons=document.querySelectorAll('.arrow')  
let index=0; 
let image=document.querySelector('#image')
let pre=document.querySelector('.changer pre')


buttons.forEach(button => {
    button.addEventListener('click',()=>{
    if(button.classList.contains('btn1')){
        if(index<imglist.length-1)
            index++
        else
            index=0
    }
    else{
        if(index==0){
            index=imglist.length-1
        }
        else{
            index--
        }
    }
    image.src=`${imglist[index]}.jpg`
    pre.innerHTML=`      <b>${imglist[index]}:</b>${address[index]}                    
      <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
      From LISS 18.75 per person`
    })
})



