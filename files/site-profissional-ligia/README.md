# Portfólio profissional · Ligia Ribeiro

Site com duas frentes (Produto & UX e Dev & Automação) construído como um
design system de duas peles sobre o tema **estúdio**: acento laranja (produto)
e acento violeta (dev). HTML, CSS e JS puros, sem build e sem dependências.
Feito para GitHub Pages.

O portfólio de **ilustração** é um projeto separado, com endereço e estética
próprios (marca Margarida Negra). Este repositório não o contém.

## Estrutura

```
.
├── index.html            # home hub (troca de tema nas portas)
├── produto.html          # cases de Produto & UX
├── dev.html              # cases de Dev & Automação
├── assets/
│   ├── css/base.css      # tokens dos dois temas + todos os componentes
│   ├── js/tema.js        # lógica de troca de tema da home
│   └── img/              # suba as imagens aqui
└── .nojekyll
```

## Como preencher um case (produto/dev)

Cada case é um `<a class="case-card">`. Troque o `div.case-img--vazia` por
`<img class="case-img" src="assets/img/…" alt="…">`, complete os comentários
`<!-- SUBSTITUA -->` e coloque a métrica real no `case-resultado`.

## Publicar no GitHub Pages com domínio próprio

1. Crie o repositório `ligribeiro.github.io` e envie estes arquivos para a raiz.
2. Settings → Pages → Build from branch → `main` / root.
3. Settings → Pages → Custom domain: `liribeiro.com.br` (o arquivo `CNAME` já está neste repositório).
4. No DNS do registrador:
   - 4 registros `A` no domínio raiz → IPs do GitHub Pages
     (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 —
     confira na documentação oficial antes de salvar).
   - `CNAME` de `www` → `ligribeiro.github.io.`
   No Registro.br isso é feito em DNS → "Editar zona" (modo avançado).
5. Após propagar, marque **Enforce HTTPS**.

## Como adicionar um vídeo do YouTube a um case

Nas páginas de case há um bloco `video-wrap--vazio` com um iframe comentado
logo abaixo. Apague o bloco vazio, descomente o iframe e troque `VIDEO_ID`
pelo trecho após `watch?v=` na URL do vídeo. O embed usa `youtube-nocookie.com`
e `loading="lazy"`.

## Regras do sistema (para futuras edições)

- Cores, superfícies e texturas vivem nos tokens em `:root` e nos blocos
  `[data-theme]` do `base.css`. Nunca use cor solta no HTML.
- Ênfase em títulos é **peso + cor**, nunca itálico: use `<em>` dentro de um
  elemento `.disp` (o CSS o renderiza em peso 720 na cor primária da área).
- Cor primária por área: laranja é o padrão; a página de dev usa
  `data-primary="violeta"` no `<html>`. Para novas áreas, crie a variante em
  `base.css` em vez de trocar cores no HTML.
- Títulos usam a classe `.disp` (Fraunces, SOFT 25). Texto corrido é Hanken
  Grotesk. Rótulos técnicos usam JetBrains Mono.
