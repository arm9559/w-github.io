function myFunction(x) {
    if (x.matches) { // If media query matches
      let get = document.querySelector('.questions-block-child');
      get.classList.add('col-12');
      get.classList.remove('col-9')
    } else {
    //  document.body.style.backgroundColor = "pink";
      let get = document.querySelector('.questions-block-child');
      get.classList.remove('col-12');
      get.classList.add('col-9')
    }
  }
  
  var x = window.matchMedia("(max-width: 476px)");
  myFunction(x);
  x.addListener(myFunction);
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
      // let get = document.querySelector('.navbar');
          // get.classList.add('fixed-top');
  	}
  else{
    // let get = document.querySelector('.navbar');
          // get.classList.remove('fixed-top');
  }
});