let tabs = document.querySelectorAll('.tabs .tab')
let tabsContent = document.querySelectorAll('.tabContent')
let movieTab = document.querySelectorAll('.para')
, movieContent = document.querySelectorAll('.slideImg .each'),
wrapper = document.querySelectorAll('.each .wrapper')
tabsContent[0].style.display = 'flex';
let k = 0;

tabs[0].style.background = '#dac402'
movieTab[0].parentElement.style.background = '#cccccc'
movieContent[0].style.display = 'flex'

tabs.forEach(function(tab, index){
   tab.addEventListener('click', function(){
     console.log(index)
tabsContent.forEach(function(tabContent){
    
    tabs.forEach(function(tab) {
        tab.style.background = '#cccccc'
        tab.style.color = '#222222'

    })
    tabs[index].style.background = '#dac402'
    tabs[index].style.color = 'white'

    tabContent.style.display = 'none';
    tabsContent[index].style.display = 'flex';

})
   })
})

movieTab.forEach(function(tab, index){
    tab.addEventListener('click', function() {
      

movieContent.forEach(function(movie) {
    movie.style.display = 'none';
})
movieTab.forEach(function(tab){
    tab.parentElement.style.background = 'rgb(5, 75, 51)'
})
movieTab[index].parentElement.style.background = '#cccccc'
movieContent[index].style.display = 'flex';
k = index


    })
})

let slider = setInterval(slideTimer, 2000)

let tracker = 100

function slideTimer(){

    
    let imgStore = wrapper[k].children
    

        wrapper[k].style.left = `-${tracker}%`;

        switch(tracker){
            case 100:{
                classRemover(1)
                break;

            }
            case 200: {
                classRemover(2)

                break;
            }
            case 300: {
                classRemover(3)

                break;
            }
            case 400: {
                classRemover(0)

            }
        }
      function classRemover(e){
          for(let i = 0 ; i< imgStore.length; i++){
              imgStore[i].classList.remove('added')
          }
          imgStore[e].classList.add('added');

          
      }
      
        
    
        
    
       
        if(tracker === 300){
            tracker= 0;
            return;
        }
        tracker = tracker + 100;
    
    

}