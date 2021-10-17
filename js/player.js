
const video = document.querySelector("#video");
const buttons = document.querySelectorAll(".player__button");
const player = document.querySelector(".player ");


buttons.forEach(item =>{
  item.addEventListener("click", (e)=>{
  e.preventDefault();
  

  if(video.paused){
    video.play();
   player.classList.add("actives");
    

  }else{
    video.pause();
   player.classList.remove("actives");
    
  }
})
})




