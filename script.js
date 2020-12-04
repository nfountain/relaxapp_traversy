const container = document.querySelector('.container');
const text = document.querySelector('#text');

// re-work JS to box breathing with 3 seconds per part
const totalTime = 12000;
const breathInterval = (totalTime / 4); 

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
      
      setTimeout(() => {
        text.innerText = "Hold"
      }, breathInterval)
    }, breathInterval)
  }, breathInterval)
}

setInterval(breatheAnimation, totalTime)