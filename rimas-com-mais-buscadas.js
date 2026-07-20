/* ============================================================
   rimas-com-mais-buscadas.js
   Widget "Rimas Mais Buscadas" — compartilhado por todas as páginas.

   COMO USAR: quando criar uma nova página "rimas-com-X.html", troque
   "pronta:false" pra "pronta:true" na palavra correspondente aqui embaixo.
   Isso já ativa o link em TODAS as páginas do site de uma vez, sem
   precisar editar cada rimas-com-X.html individualmente.
   ============================================================ */
(function () {
  var LISTA = [
    { termo: 'casa',     href: 'rimas-com-casa.html',     pronta: true  },
    { termo: 'eu',       href: 'rimas-com-eu.html',       pronta: true  },
    { termo: 'vida',     href: 'rimas-com-vida.html',     pronta: true  },
    { termo: 'mais',     href: 'rimas-com-mais.html',     pronta: true  },
    { termo: 'amor',     href: 'rimas-com-amor.html',     pronta: false },
    { termo: 'mundo',    href: 'rimas-com-mundo.html',    pronta: true  },
    { termo: 'você',     href: 'rimas-com-voce.html',     pronta: false },
    { termo: 'dia',      href: 'rimas-com-dia.html',      pronta: false },
    { termo: 'coração',  href: 'rimas-com-coracao.html',  pronta: false },
    { termo: 'sol',      href: 'rimas-com-sol.html',      pronta: false },
    { termo: 'feliz',    href: 'rimas-com-feliz.html',    pronta: false }
  ];

  function paginaAtual() {
    var path = window.location.pathname;
    return path.substring(path.lastIndexOf('/') + 1);
  }

  function render() {
    var container = document.getElementById('mais-buscadas');
    if (!container) return;

    var atual = paginaAtual();
    var html = '';

    LISTA.forEach(function (item) {
      var ehAtual = item.href === atual;
      if (ehAtual) {
        html += '<span class="chip chip-atual" title="Você está aqui">' + item.termo + ' 📍</span>';
      } else if (item.pronta) {
        html += '<a href="' + item.href + '" class="chip link">' + item.termo + '</a>';
      } else {
        html += '<span class="chip chip-pendente" title="Em breve">' + item.termo + '</span>';
      }
    });

    container.innerHTML = html;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
