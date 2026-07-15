/* ============================================================
   rimas-com-stars.js
   Desenha o campo de estrelas piscando no <canvas id="starfield-canvas">.
   Compartilhado por todas as páginas "rimas-com-X.html".
   ============================================================ */
(function () {
  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function init() {
    var canvas = document.getElementById('starfield-canvas');
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext('2d');

    var STAR_COUNT = 160;
    var COLORS = [
      '255,255,255', '255,255,255', '255,255,255',
      '235,240,255', '245,248,255'
    ];

    var stars = [];
    var w = 0, h = 0;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    function makeStars() {
      stars = [];
      for (var i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.4 + 0.6,
          baseAlpha: Math.random() * 0.5 + 0.4,
          speed: Math.random() * 0.02 + 0.006,
          phase: Math.random() * Math.PI * 2,
          color: COLORS[Math.floor(Math.random() * COLORS.length)]
        });
      }
    }

    function drawStatic() {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < stars.length; i++) {
        var s = stars[i];
        ctx.beginPath();
        ctx.fillStyle = 'rgba(' + s.color + ',' + s.baseAlpha + ')';
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function drawFrame(t) {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < stars.length; i++) {
        var s = stars[i];
        var alpha = s.baseAlpha * (0.55 + 0.45 * Math.sin(t * s.speed + s.phase));
        alpha = Math.max(0, Math.min(1, alpha));
        ctx.beginPath();
        ctx.fillStyle = 'rgba(' + s.color + ',' + alpha + ')';
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      requestAnimationFrame(drawFrame);
    }

    resize();
    makeStars();

    if (prefersReducedMotion()) {
      drawStatic();
    } else {
      requestAnimationFrame(drawFrame);
    }

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        resize();
        makeStars();
        if (prefersReducedMotion()) drawStatic();
      }, 150);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
