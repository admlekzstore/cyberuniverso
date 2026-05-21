// header.js — Navbar global do CyberUniverso
// Adicione em cada página: <script src="./header.js"></script>
// (antes do </body>)

(function() {
  // Google Analytics
  var gaScript = document.createElement('script')
  gaScript.async = true
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-4TCG0DDRCZ'
  document.head.appendChild(gaScript)
  // Favicon
  var favicon = document.createElement('link')
  favicon.rel = 'icon'
  favicon.type = 'image/webp'
  favicon.href = '/favicon.webp'
  document.head.appendChild(favicon)

  window.dataLayer = window.dataLayer || []
  window.gtag = function(){window.dataLayer.push(arguments)}
  window.gtag('js', new Date())
  window.gtag('config', 'G-4TCG0DDRCZ')
  var style = document.createElement('style')
  style.textContent = `
    #cy-nav {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0px 16px 0px 0px;
      height: 80px;
      background: #05080f;
      border-bottom: 1px solid #1a3a6e;
    }
    #cy-nav.scrolled {
      background: #05080f;
      border-bottom-color: #1a6ef5;
    }
    #cy-nav .cy-logo {
      display: flex;
      align-items: flex-end;
      text-decoration: none;
    }
    #cy-nav .cy-logo img {
      height: 70px;
      width: auto;
      object-fit: contain;
      transition: opacity 0.3s;
      background: transparent;
      transform: translateZ(0);
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }
    #cy-nav .cy-logo img:hover {
      opacity: 0.85;
    }
    #cy-menu-btn {
      background: rgba(0,234,255,0.05);
      border: 1.5px solid rgba(0,234,255,0.4);
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
      box-shadow: 0 0 8px rgba(0,234,255,0.2), inset 0 0 8px rgba(0,234,255,0.05);
    }
    #cy-menu-btn:hover {
      border-color: #00eaff;
      background: rgba(0,234,255,0.1);
      box-shadow: 0 0 14px rgba(0,234,255,0.4), inset 0 0 10px rgba(0,234,255,0.08);
    }
    #cy-menu-btn span {
      display: block;
      width: 20px; height: 2px;
      background: #00eaff;
      border-radius: 2px;
      box-shadow: 0 0 6px rgba(0,234,255,0.8);
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
      color: #00eaff;
      text-decoration: none;
      font-family: 'Bangers', cursive;
      font-size: 20px;
      letter-spacing: 1.5px;
      padding: 12px 16px;
      border-radius: 12px;
      transition: all 0.2s;
      border: 1px solid transparent;
      text-shadow: 0 0 6px rgba(0,234,255,0.5);
    }
    #cy-sidemenu a:hover {
      background: rgba(0,234,255,0.08);
      border-color: rgba(0,234,255,0.25);
      color: #fff;
      text-shadow: 0 0 8px rgba(0,234,255,0.7);
      padding-left: 20px;
    }
    #cy-sidemenu a.ativo {
      background: rgba(245,232,0,0.06);
      border-color: rgba(245,232,0,0.2);
      color: #f5e800;
      text-shadow: 0 0 6px rgba(245,232,0,0.5);
    }
    #cy-nav-links {
      display: flex;
      align-items: center;
      gap: 4px;
      flex: 1;
      justify-content: flex-end;
    }
    #cy-nav-links a {
      font-family: 'Bangers', cursive;
      font-size: 17px;
      letter-spacing: 1.5px;
      color: #00eaff;
      text-decoration: none;
      padding: 6px 10px;
      border-radius: 8px;
      transition: all 0.2s;
      text-shadow: 0 0 8px #00eaff, 0 0 16px rgba(0,234,255,0.4);
      white-space: nowrap;
    }
    #cy-nav-links a:hover {
      color: #fff;
      text-shadow: 0 0 10px #00eaff, 0 0 24px #00eaff, 0 0 40px rgba(0,234,255,0.6);
      background: rgba(0,234,255,0.08);
    }
    #cy-nav-links a.ativo {
      color: #f5e800;
      text-shadow: 0 0 10px #f5e800, 0 0 24px rgba(245,232,0,0.5);
    }
    @media(max-width:768px) {
      #cy-nav-links { display: none; }
      #cy-menu-btn { display: flex; }
    }
    @media(min-width:769px) {
      #cy-menu-btn { display: none; }
    }
  `
  document.head.appendChild(style)

  var nav = document.createElement('nav')
  nav.id = 'cy-nav'
  nav.innerHTML = `
    <a href="/index.html" class="cy-logo">
      <img src="/logo.png" alt="CyberUniverso" width="200" height="70">
    </a>
    <div id="cy-nav-links">
      <a href="/index.html">Início</a>
      <a href="/todas.html">Todas</a>
      <a href="/categorias.html">Categorias</a>
      <a href="/enviar.html">Enviar</a>
      <a href="/em-construcao.html">Rimas</a>
      <a href="/em-construcao.html">Tarot</a>
      <a href="/cadastro.html">Entrar</a>
    </div>
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
  document.querySelectorAll('#cy-nav-links a').forEach(function(link) {
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
