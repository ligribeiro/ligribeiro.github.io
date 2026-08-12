/* Peles do design system: estúdio (produto, primary laranja) e estúdio+violeta (dev).
   Troca via hover/foco nas portas e via botões da seção do design system.
   A leitura de tokens exibe o valor computado de cada custom property. */
(function(){
  const raiz=document.documentElement;
  const MODOS={
    estudio:{theme:'estudio',primary:null},
    dev:{theme:'estudio',primary:'violeta'}
  };
  const portas=document.querySelectorAll('.porta[data-tema]');
  const botoes=document.querySelectorAll('.botao-tema');
  const tokens=document.querySelectorAll('[data-token]');
  const mq=window.matchMedia('(hover:hover)');
  let modoFixo='estudio';

  function lerTokens(){
    const cs=getComputedStyle(raiz);
    tokens.forEach(el=>{
      el.textContent=cs.getPropertyValue('--'+el.dataset.token).trim();
    });
  }

  function aplicar(m){
    const cfg=MODOS[m]||MODOS.estudio;
    raiz.setAttribute('data-theme',cfg.theme);
    if(cfg.primary){raiz.setAttribute('data-primary',cfg.primary)}
    else{raiz.removeAttribute('data-primary')}
    botoes.forEach(b=>b.setAttribute('aria-pressed', b.dataset.set===m ? 'true':'false'));
    lerTokens();
  }

  portas.forEach(p=>{
    if(mq.matches){
      p.addEventListener('mouseenter',()=>aplicar(p.dataset.tema));
      p.addEventListener('mouseleave',()=>aplicar(modoFixo));
    }
    p.addEventListener('focus',()=>aplicar(p.dataset.tema));
    p.addEventListener('blur',()=>aplicar(modoFixo));
  });

  botoes.forEach(b=>b.addEventListener('click',()=>{
    modoFixo=b.dataset.set;
    aplicar(modoFixo);
  }));

  lerTokens();
})();
