import './less/index.less'

// Your code goes here!
// load
window.onload = function(evt){
    console.log(`event ${evt.type} fired.Ready to go!`)
    const heading = document.querySelector('h1')
    heading.textContent = "ready to go"

  //2-copy 
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
        .then(text =>{
            console.log(text)
        })
       
    })

    // click
    document.body.addEventListener('click', evt => {
        evt.target.classList.toggle('mirror')
    })

    //double click
    document.body.addEventListener('dblclick', evt => {
        evt.target.innerHTML = ''
    })
    // keydown
    window.addEventListener('keydown', evt =>{
        if(evt.key == 6){
            document.body.innerHTML = ''
        }
    })
    // mousemove
    document.body.addEventListener('mousemove', evt =>{
        const { clientX, clientY} = evt
    // console.log(`mouse is at ${clientX},${clientY}!)
    })

    // mouseenter
    // mouseleave
    const destinations = document.querySelectorAll('.destination')
    for(let destination of destinations){
        destination.addEventListener('mouseenter', () =>{
            destination.style.fontWeight = 'bold'

        })
        destination.addEventListener('mouseleave', () =>{
            destination.style.fontWeight = 'initial'
        })

    }



}

