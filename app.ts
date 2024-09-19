const buttonvname = document.getElementById('toggle-button') as HTMLButtonElement
const experience = document.getElementById('experience') as HTMLElement

  buttonvname.addEventListener('click' ,() => {
    if(experience.style.display === 'none' ){
        experience.style.display='block'
    }
    else{
        experience.style.display ='none'

    }
  });