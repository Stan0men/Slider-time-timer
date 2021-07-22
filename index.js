function showTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let session = "AM";
  const timeBlock = document.getElementById('time');
  const hoursBlock = document.getElementById('hours');
  const minutesBlock = document.getElementById('minutes');
  const secondsBlock = document.getElementById('seconds');
  if(hours === 0){
    hours = 12;
  }

  if(hours > 12){
    hours = hours - 12;
    session = "PM";
  }

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  // let time = `${hours}: ${minutes}: ${seconds}: ${session}`;
  //
  // timeBlock.innerHTML = time;
  hoursBlock.innerHTML = hours;
  minutesBlock.innerHTML = minutes;
  secondsBlock.innerHTML = seconds;
  setTimeout(showTime, 1000);
}

showTime();

// slider 
  let slideIndex = 1;
  let slides = document.querySelectorAll('.container-item');
  let prev = document.querySelector('.prev');
  let next = document.querySelector('.next');

  showSlides(slideIndex);
  function showSlides(n) {
    if(n > slides.length){
      slideIndex = 1;
    }
    if (n < 1){
      slideIndex = slides.length;
    }
    slides.forEach((slide)=>{
      slide.style.display = 'none';
    });
    slides[slideIndex - 1].style.display = 'block'
  }

  function plusSlides (n) {
    showSlides(slideIndex+=n);
  }

  prev.addEventListener('click', function() {
    plusSlides(-1);
  });
  next.addEventListener('click', function() {
  plusSlides(1);
});


