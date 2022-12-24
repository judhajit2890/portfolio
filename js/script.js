//--------------google sheet attchement-----------//
  const scriptURL = 'https://script.google.com/macros/s/AKfycbx3kgmqXlbdEYqJyMorF0GK6L5oyLBJQ86aNTy1eWJ8zu0uuQ7KxdWbo5BSDu8xQSxq/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML= ""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  });



  //-----------active scroll bar-----------//
  var section = document.querySelectorAll('section');
  var navbar = document.querySelectorAll('nav ul a');


  window.onscroll = () =>{
    section.forEach(sec =>{
        var top = window.scrollY;
        var offset= sec.offsetTop;
        var height = sec.offsetHeight;
        var id = sec.getAttribute('id');


        if (top >= offset && top <offset + height){
            navbar.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('nav ul a[href*=' + id + ']').classList.add
                ('active');
            });
        };
     });
  };


  //---------navigation-------------//
  $(".menubar").click(function(){
    $("#navigation").slideToggle();
  });


//   ============scroll reveal======///
    ScrollReveal().reveal('.ht',{ delay: 500, easing: 'ease-in',distance: '30px',origin: 'bottom'});
    ScrollReveal().reveal('.ph',{ delay: 500, easing: 'ease-in',distance: '60px',origin: 'bottom'});
    ScrollReveal().reveal('.boot',{ delay: 500, easing: 'ease-in',distance: '60px',origin: 'top'});
    ScrollReveal().reveal('.css',{ delay: 500, easing: 'ease-in',distance: '60px',origin: 'top'});
    ScrollReveal().reveal('.js',{ delay: 500, easing: 'ease-in',distance: '60px',origin: 'right'});
    ScrollReveal().reveal('.jq',{ delay: 500, easing: 'ease-in',distance: '60px',origin: 'left'});


    ScrollReveal().reveal('.skimg',{ delay: 200, easing: 'ease-in',distance: '60px',origin: 'bottom',interval: 300});
    ScrollReveal().reveal('.projectbox',{ delay: 200, easing: 'ease-in',distance: '60px',origin: 'bottom',interval: 300});







