// header.js — Navbar global do CyberUniverso
// Adicione em cada página: <script src="./header.js"></script>
// (antes do </body>)

// Páginas em construção — redirecionar automaticamente
var _emConstrucao = ['/rimas.html', '/tarot.html']
if (_emConstrucao.indexOf(window.location.pathname) !== -1) {
  window.location.replace('/em-construcao.html')
}

(function() {
  var style = document.createElement('style')
  style.textContent = `
    #cy-nav {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6px 24px;
      background: #05080f;
      border-bottom: 1px solid #1a3a6e;
    }
    #cy-nav.scrolled {
      background: #05080f;
      border-bottom-color: #1a6ef5;
    }
    #cy-nav .cy-logo {
      display: flex;
      align-items: center;
      text-decoration: none;
    }
    #cy-nav .cy-logo img {
      height: 120px;
      width: auto;
      object-fit: contain;
      margin: -20px 0;
      transition: opacity 0.3s;
    }
    #cy-nav .cy-logo img:hover {
      opacity: 0.85;
    }
    #cy-menu-btn {
      background: rgba(255,255,255,0.08);
      border: 1.5px solid rgba(255,255,255,0.2);
      border-radius: 10px;
      width: 44px; height: 44px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5px;
      cursor: pointer;
      transition: all 0.2s;
      padding: 0;
      flex-shrink: 0;
    }
    #cy-menu-btn:hover { border-color: #00eaff; background: rgba(0,234,255,0.1); }
    #cy-menu-btn span {
      display: block;
      width: 20px; height: 2px;
      background: #d0e4ff;
      border-radius: 2px;
    }
    #cy-overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.6);
      z-index: 998;
      backdrop-filter: blur(2px);
    }
    #cy-overlay.ativo { display: block; }
    #cy-sidemenu {
      position: fixed;
      top: 0; right: -300px;
      width: 280px; height: 100vh;
      background: #05080f;
      border-left: 1px solid #1a3a6e;
      z-index: 999;
      padding: 24px 20px;
      display: flex;
      flex-direction: column;
      gap: 6px;
      transition: right 0.3s cubic-bezier(0.4,0,0.2,1);
      overflow-y: auto;
    }
    #cy-sidemenu.aberto { right: 0; }
    #cy-close-menu {
      align-self: flex-end;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.15);
      color: #d0e4ff;
      border-radius: 8px;
      width: 36px; height: 36px;
      font-size: 16px;
      cursor: pointer;
      margin-bottom: 12px;
    }
    #cy-sidemenu a {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #d0e4ff;
      text-decoration: none;
      font-family: 'Nunito', sans-serif;
      font-size: 16px;
      font-weight: 800;
      padding: 12px 16px;
      border-radius: 12px;
      transition: all 0.2s;
      border: 1px solid transparent;
    }
    #cy-sidemenu a:hover {
      background: rgba(26,110,245,0.15);
      border-color: rgba(26,110,245,0.3);
      color: #00eaff;
      padding-left: 20px;
    }
    #cy-sidemenu a.ativo {
      background: rgba(26,110,245,0.2);
      border-color: rgba(26,110,245,0.4);
      color: #00eaff;
    }
  `
  document.head.appendChild(style)

  var nav = document.createElement('nav')
  nav.id = 'cy-nav'
  nav.innerHTML = `
    <a href="/index.html" class="cy-logo">
      <img src="/logo.png" alt="CyberUniverso">
    </a>
    <button id="cy-menu-btn" onclick="cyToggleMenu()" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  `

  var overlay = document.createElement('div')
  overlay.id = 'cy-overlay'
  overlay.onclick = function() { cyToggleMenu() }

  var sidemenu = document.createElement('nav')
  sidemenu.id = 'cy-sidemenu'
  sidemenu.innerHTML = `
    <button id="cy-close-menu" onclick="cyToggleMenu()">✕</button>
    <a href="/index.html">🏠 Início</a>
    <a href="/todas.html">📖 Todas as Palavras</a>
    <a href="/categorias.html">🗂️ Categorias</a>
    <a href="/em-construcao.html">🎵 Rimas</a>
    <a href="/em-construcao.html">🃏 Tarot de Gírias</a>
    <a href="/enviar.html">➕ Enviar Palavra</a>
    <a href="/cadastro.html">👤 Entrar / Cadastrar</a>
  `

  document.body.insertBefore(overlay, document.body.firstChild)
  document.body.insertBefore(sidemenu, document.body.firstChild)
  document.body.insertBefore(nav, document.body.firstChild)

  var atual = window.location.pathname.split('/').pop() || 'index.html'
  sidemenu.querySelectorAll('a').forEach(function(link) {
    var href = link.getAttribute('href').replace('/', '')
    if (href === atual) link.classList.add('ativo')
  })

  window.addEventListener('scroll', function() {
    nav.classList.toggle('scrolled', window.scrollY > 20)
  })

  window.cyToggleMenu = function() {
    sidemenu.classList.toggle('aberto')
    overlay.classList.toggle('ativo')
  }
})()
