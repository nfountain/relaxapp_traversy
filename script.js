const container = document.querySelector('.container');
const text = document.querySelector('#text');

// re-work JS to box breathing with 3 seconds per part
const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2; 
const holdTime = (totalTime / 5);

breatheAnimation();

function breatheAnimation () {
  // Substituting innerText for innerHTML here for better security (XXS attacks). Will see if it breaks anything
  text.innerText = "Breathe in"
  container.className = "container grow"

  setTimeout (() => {
    text.innerText = "Hold"
  
    setTimeout(() => {
      text.innerText = "Breathe out"
      container.className = "container shrink"
    }, holdTime)
    /*
    setTimeout(() => {
      text.innerText = "Hold";
    }, holdTime)
    */
  }, breatheTime)
}

setInterval(breatheAnimation, totalTime)