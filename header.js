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
    #cy-footer {
      background: #05080f;
      border-top: 1px solid #1a3a6e;
      padding: 32px 20px;
      text-align: center;
      font-family: 'Nunito', sans-serif;
    }
    #cy-footer .cy-footer-logo {
      font-family: 'Bangers', cursive;
      font-size: 26px;
      letter-spacing: 2px;
      color: #00eaff;
      text-shadow: 0 0 10px #00eaff, 0 0 24px rgba(0,234,255,0.4);
      text-decoration: none;
      display: inline-block;
      margin-bottom: 12px;
    }
    #cy-footer .cy-footer-desc {
      font-size: 13px;
      color: #4a6fa5;
      font-weight: 600;
      margin-bottom: 20px;
    }
    #cy-footer .cy-footer-social {
      display: flex;
      justify-content: center;
      gap: 14px;
      margin-bottom: 20px;
      flex-wrap: wrap;
    }
    #cy-footer .cy-footer-social a {
      display: flex;
      align-items: center;
      gap: 7px;
      background: rgba(255,255,255,0.04);
      border: 1px solid #1a3a6e;
      border-radius: 10px;
      padding: 8px 16px;
      color: #d0e4ff;
      text-decoration: none;
      font-size: 13px;
      font-weight: 700;
      transition: all 0.2s;
    }
    #cy-footer .cy-footer-social a:hover {
      border-color: #00eaff;
      color: #00eaff;
      background: rgba(0,234,255,0.06);
      box-shadow: 0 0 10px rgba(0,234,255,0.2);
    }
    #cy-footer .cy-footer-links {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
      margin-bottom: 20px;
    }
    #cy-footer .cy-footer-links a {
      color: #4a6fa5;
      text-decoration: none;
      font-size: 12px;
      font-weight: 700;
      transition: color 0.2s;
    }
    #cy-footer .cy-footer-links a:hover {
      color: #00eaff;
    }
    #cy-footer .cy-footer-copy {
      font-size: 11px;
      color: #2a4a7a;
      font-weight: 600;
    }
  `
  document.head.appendChild(style)

  var nav = document.createElement('nav')
  nav.id = 'cy-nav'
  nav.innerHTML = `
    <a href="/index.html" class="cy-logo">
      <img src="/logo.webp" alt="CyberUniverso" width="200" height="70">
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

  var footer = document.createElement('footer')
  footer.id = 'cy-footer'
  footer.innerHTML = `
    <a href="/index.html" class="cy-footer-logo">🌐 CyberUniverso</a>
    <div class="cy-footer-desc">O dicionário colaborativo de gírias do português brasileiro</div>
    <div class="cy-footer-social">
      <a href="https://www.instagram.com/cyberuniversobr" target="_blank" rel="noopener">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        Instagram
      </a>
      <a href="https://x.com/cyberuniversobr" target="_blank" rel="noopener">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        Twitter / X
      </a>
    </div>
    <div class="cy-footer-links">
      <a href="/index.html">Início</a>
      <a href="/todas.html">Todas as palavras</a>
      <a href="/categorias.html">Categorias</a>
      <a href="/enviar.html">Enviar palavra</a>
      <a href="/privacidade.html">Termos de Uso e Privacidade</a>
    </div>
    <div class="cy-footer-copy">© \${new Date().getFullYear()} CyberUniverso · Todos os direitos reservados</div>
  `
  document.body.appendChild(footer)

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
