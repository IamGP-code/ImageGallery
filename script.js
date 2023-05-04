const panels= document.querySelectorAll('.panel')

panels.forEach((panel,index,arr) =>{
   panel.addEventListener('click',()=>{
    removeActiveClass()
panel.classList.add('active')
       console.log("panel",index,"clicked")
   }) 
})

function removeActiveClass(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}