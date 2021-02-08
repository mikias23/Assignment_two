let wrappers = document.querySelectorAll('.wrappers .each img' )
let header = document.querySelector('.headerachn')
let headerText = document.querySelector('.header')
let body = document.querySelector('.body')
let first = wrappers[0].src, second= wrappers[1].src, third = wrappers[2].src, fourth = wrappers[3].src;
let slider = setInterval(sliderFunc, 2000);
let tracker = 100
let i = 0, j=1;
let themeChanger = document.querySelectorAll('.choose .upper .each li')

function sliderFunc(){


    wrappers.forEach((wrapFools,index) => {
wrapFools.parentElement.classList.add('trial')
    })
    switch(i){
        case 0:
            wrappers[1].src = fourth;
        wrappers[2].src = first;
       
        wrappers[3].src = third;
    
        break;
        case 1:
            wrappers[1].src = third;
            wrappers[2].src = second;
            wrappers[3].src = first;
            break;
            case 2:
                wrappers[1].src = first;
                wrappers[2].src = third;
                wrappers[3].src = second;
                break;
                case 3:
                    wrappers[1].src = second;
                    wrappers[2].src = fourth;
                    wrappers[3].src = third;
                    break;
    }


   i++
   if(i === 4){
       i = 0
   }
   setTimeout( 
    wrappers.forEach((wrapFools) => {
        wrapFools.parentElement.classList.remove('trial')
            })
    
    
    , 10000)

        }
themeChanger.forEach(function(list){
    list.addEventListener('click', (e) => {
     let classList = e.target.className
     switch(classList){
         case 'default': 
         headerText.style.color='white'
         body.style.background = 'rgb(2, 44, 68)'
             header.style.background = 'rgb(2, 44, 68)'
             break;
         
         case 'light': 
            header.style.background = '#cccccc'
            headerText.style.color='#222222'
            body.style.background = '#bbbbbb'

            break;
        
        case 'dark': 
        header.style.background = '#222222'
        headerText.style.color='white'
        body.style.background = '#111111'


            break;
        
     }
    })
})