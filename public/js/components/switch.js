const button = document.querySelector('.switch');
const sun = document.querySelector('.switch__container')

let isSunRotated = true;

const handleButtonHover = (isHover) => {
    sun.style.transform = isHover ? 'rotate(180deg)' : 'rotate(0deg)';
    sun.style.translate = isHover ? '20px' : '0px';
    button.style.backgroundColor = isHover ? '#4B6BFB' : '#E8E8EA';
  };
  
button.addEventListener('click', () => {
  handleButtonHover(isSunRotated);
  isSunRotated = !isSunRotated;
});