let creatModal = () => {

let divModalMain = document.createElement('div')
let divModal = document.createElement('div')
let divHeader = document.createElement('div')
let divPerfil = document.createElement('div')
let img = document.createElement('img')
let spanName = document.createElement('span')
let spanData = document.createElement('span')
let button = document.createElement('button')
let divCard = document.createElement('div')
let h2 = document.createElement('h2')
let p = document.createElement('p')




divModalMain.classList.add('modalMain')
divModal.classList = `modal show-modal`
divHeader.classList.add('modal-header')
divPerfil.classList.add('perfil')
divCard.classList.add('card')
button.classList.add('button-close-modal')

img.src = './../assets/Ellipse2.svg'
button.innerText = 'x'
spanName.innerText = 'Lucas'
spanData.innerText = '22/02/2022'
h2.innerText = 'Lorem asdhaksjdhkjashdkjashdkajsdhkajsdhkasjdhkajdhkajsdh'
p.innerText = 'açskljdlkasjdlkasjieaklsdjkasjdkajsdlkjaslkdj'

divModal.append(divHeader, divPerfil, divCard)
divHeader.append(divPerfil, button)
divPerfil.append(img, spanName, spanData)


divCard.append(h2, p)

divModalMain.append(divModal)

return divModalMain

}



function showModal () {
    const openPost = document.querySelector('.span-acessar')
    const body = document.querySelector('body')

    
    openPost.addEventListener('click', () => {

        const modal = creatModal()

        body.appendChild(modal)
        closeModal()
    }) 
  
   
    
 }


 function closeModal () {
   
    const modalClose = document.querySelector('.button-close-modal')
    const modalMain = document.querySelector('.modalMain')

    modalClose.addEventListener('click', () => {
        
        modalMain.remove()
    })

 }

 showModal ()


//  ****************modalEdicao************


let creatModalEdit = () => {

    let divModalMain = document.createElement('div')
    let divModal = document.createElement('div')
    let divHeader = document.createElement('div')
    let button = document.createElement('button')
    let h2 = document.createElement('h2')
    let pDescricao = document.createElement('p')
    let h2Post = document.createElement('h2')
    let pPost = document.createElement('p')      
    
    
    divModalMain.classList.add('modalMain')
    divModal.classList = `modal show-modal`
    divHeader.classList.add('modal-header')   
    button.classList.add('button-close-modal')   
 
    button.innerText = 'x'   
    h2.innerText = 'Edit'
    pDescricao.innerText = 'açskljdlkasjdlkasjieaklsdjkasjdkajsdlkjaslkdj'
    

    divHeader.append(h2, button)
    divModal.append(divHeader, pDescricao, h2Post, pPost )     
    
    
    divModalMain.append(divModal)
    
    return divModalMain
    
    }
    
    
    
    function showModalEdit () {
        const openPost = document.querySelector('.button-edit')
        const body = document.querySelector('body')
    
        
        openPost.addEventListener('click', () => {
    
            const modal = creatModalEdit()
    
            body.appendChild(modal)
            closeModalEdit()
        }) 
      
       
        
     }
    
    
     function closeModalEdit () {
       
        const modalClose = document.querySelector('.button-close-modal')
        const modalMain = document.querySelector('.modalMain')
    
        modalClose.addEventListener('click', () => {
            
            modalMain.remove()
        })
    
     }
    
     showModalEdit ()