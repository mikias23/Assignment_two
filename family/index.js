let tabs = document.querySelectorAll('.container .tabs p ')
let contents = document.querySelectorAll('.content .each')
let imgInterval;
let i = 100;
let grabIndex = 0;

imgInterval = setInterval(imgFunc, 2500)

tabs.forEach(function(tab,index) {
    tab.addEventListener('click', function(e){

 

        i = 100;
        grabIndex = index
        clearInterval(imgInterval)
        imgInterval = setInterval(imgFunc, 2500)

        contents.forEach(function(content){
            content.classList.remove('tabContent')
        })
        contents[index].classList.add('tabContent')
        tabs.forEach(function(tab){
            tab.classList.remove('tabClass')
        })
        tab.classList.add('tabClass')


    })
})

function imgFunc() {
 
        contents[grabIndex].style.left = `-${i}%`;

        i = i + 100;
        if(i === 400){
            i = 0;
        }
    
 
}
