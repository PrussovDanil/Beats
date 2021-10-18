
let  interval;
const video = document.querySelector("#video");
const buttons = document.querySelectorAll(".player__button");
const player = document.querySelector(".player ");
const durationSec =video.duration;
const durationSec2 =video.currentTime;

const VolStat= video.volume= 1;

console.log(video.volume);


// const formaTime = timeSec =>{
//   const roundTime = Math.round(timeSec);
//   const minutes = Math.floor(roundTime/60);
//   const seconds = roundTime - minutes * 60;

//   return `${minutes} : ${seconds}`;
// }





interval = setInterval(()=>{
  const completedSec =video.currentTime;
  const completedPer = (completedSec/durationSec)*100;

  $(".player__playback-button").css({
    left:`${completedPer}%`
  });
  
  
},1000)

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

video.addEventListener("click", (e)=>{
  e.preventDefault();
  
 
  if(video.paused){
    video.play();
   player.classList.add("actives");
    

  }else{
    video.pause();
   player.classList.remove("actives");
    
  }

})


$(".player__playback").click(e=>{
  const bar = $(e.currentTarget);
  const clickPos=e.originalEvent.layerX; 
  const newBtnPos = (clickPos/ bar.width())*100;

  const newPlaybackPos =(durationSec/100)*newBtnPos;

  $(".player__playback-button").css({
    left:`${newBtnPos}%`
  });
  video.currentTime = newPlaybackPos;
  
})


$(".player__sound").click(e=>{
  const block = $(e.currentTarget);
  const clickPosVol=e.originalEvent.layerX; 
  const newSondPos = (clickPosVol/ block.width())*100;
  const x= $(".player__sound-button").position();

  const newSoundkPos =(VolStat/100)*newSondPos;

  $(".player__sound-button").css({
    left:`${newSondPos}%`
  });

  if( x.left === 0){
    video.volume = 0.0;
  }
  video.volume = newSoundkPos;
  console.log(x.left +"%");
})
