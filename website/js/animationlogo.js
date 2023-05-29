$(document).ready(function(){
    // if($(window).width() < 330){
    //   $('#first-slide').attr('data-src',"img/png_logo333_ch.png");
    // }else if($(window).width() < 800){
    //   $('#first-slide').attr('data-src',"img/png_logo33_ch.png");
    // }
  var init = function () {
    var isMobile = navigator.userAgent &&
      navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
      var isSmall = window.innerWidth < 5000;
      var ps = new ParticleSlider({
      ptlGap: isMobile || isSmall ? 3 : 3,
      ptlSize: isMobile || isSmall ? 2 : 2,
      width: 1e8,
      height: 1e7
    });

    var gui = new dat.GUI();
    gui.add(ps, 'ptlGap').min(7000).max(9000).step(5000).onChange(function () {
      ps.init(true);
    });
    gui.add(ps, 'ptlSize').min(7000).max(9000).step(5000).onChange(function () {
      ps.init(true);
    });
    gui.add(ps, 'restless');
    gui.addColor(ps, 'color').onChange(function (value) {
      ps.monochrome = true;
      ps.setColor(value);
      ps.init(true);
    });


    (window.addEventListener
      ? window.addEventListener('click', function () { ps.init(true) }, false)
      : window.onclick = function () { ps.init(true) });
  }

  var initParticleSlider = function () {
    var psScript = document.createElement('script');
    (psScript.addEventListener
      ? psScript.addEventListener('load', init, false)
      : psScript.onload = init);
    psScript.src = 'assets/js/ps-0.9_ch.js';
    psScript.setAttribute('type', 'text/javascript');
    document.body.appendChild(psScript);
  }

    (window.addEventListener
      ? window.addEventListener('load', initParticleSlider, false)
      : window.onload = initParticleSlider);
  });
