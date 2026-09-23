# Memória do projeto — ATLAS / Linguagem em movimento

Este arquivo existe para que outra IA ou outra pessoa consiga continuar o projeto sem precisar reconstruir todo o contexto da conversa.

## Ideia central

O site é um ensaio visual sobre Linguagens. A ideia não é apresentar uma página escolar cheia de texto, mas criar uma experiência artística em que o visitante percebe que comunicação também acontece através de imagens, corpo, cor, gesto, silêncio, movimento e composição.

Frase-guia atual:

> Toda forma é uma fala.

O conteúdo real — autores, obras, conceitos e referências da matéria — pode ser inserido depois. A estrutura atual é um modelo visual preparado para receber esse conteúdo.

## Direção visual

- Estética de colagem editorial, papel recortado, pintura, carvão e marcas de processo.
- Tema claro padrão: papel bege, tinta coral/laranja, azul e dourado.
- Tema escuro opcional: azul-marinho profundo, carvão, coral vibrante, azul elétrico, dourado e fragmentos claros.
- Layout denso, com pouco espaço vazio e predominância de imagens.
- Tipografia principal: Space Grotesk.
- Tipografia técnica/legendas: DM Mono.
- Tom geral: artístico, experimental, contemporâneo e tátil.

## Estrutura atual

### `index.html`

1. Header fixo com navegação e alternância claro/escuro.
2. Hero com frase rotativa e composição de gesto.
3. Galeria com três cards: palavra, imagem e corpo.
4. Marquee de palavras.
5. Estúdio interativo para misturar camadas.
6. Imagem final e chamada para inserir o conteúdo real depois.

### `caderno.html`

1. Capa visual do caderno.
2. Cards de notas soltas.
3. Laboratório para montar pequenas frases clicando nas palavras.
4. Colagem final com corpo e movimento.

## Sistema de imagens em camadas

As imagens artísticas não devem voltar a ser usadas como uma única imagem chapada. O efeito principal do site depende de duas camadas:

- `*-bg.png` — placa de fundo opaca, com papel, tinta e recortes.
- `*-fg.png` — conteúdo principal em PNG transparente, colocado acima do fundo.

Durante o movimento do cursor, a camada de frente se desloca mais que o fundo, criando uma sensação de profundidade 3D.

As imagens de fundo do tema escuro seguem o padrão:

- `hero-gesto-bg-dark.png`
- `card-palavra-bg-dark.png`
- `card-corpo-bg-dark.png`

O JavaScript troca automaticamente os fundos das imagens grandes quando `body[data-theme]` muda. Nos cards, o CSS troca `--card-bg-image` por `--card-bg-dark-image`.

## Interações já implementadas

- Header sticky, sempre visível durante a rolagem.
- Toggle de tema claro/escuro.
- Fundo claro padrão após recarregar.
- Hero com frases rotativas.
- Parallax de camadas pelo cursor.
- Tilt 3D nos cards.
- Revelação de elementos conforme entram na tela.
- Scroll suave via Lenis.
- Animações de rolagem via GSAP/ScrollTrigger.
- Campo de partículas e símbolos em canvas.
- Cards selecionáveis que alteram a camada atual do estúdio.
- Laboratório de frases na página `caderno.html`.

## Cursores

Os cursores usam recortes da imagem de referência fornecida pelo usuário:

- `cursor-orange-reference-black.png` — seta preta com contorno laranja para o tema claro.
- `cursor-hand-reference-black.png` — mão preta de clique para links e botões no tema claro.
- `cursor-text-reference-black.png` — barra preta de escrita para campos de texto no tema claro.
- `cursor-orange-reference.png` — versões claras usadas no tema escuro.
- `cursor-hand-reference.png` — mão clara usada no tema escuro.
- `cursor-text-reference.png` — barra clara usada no tema escuro.

O cursor não deve voltar a ser um círculo grande ou um halo. A intenção atual é manter uma seta reconhecível, pequena e próxima da referência visual.

## Arquivos importantes

- `styles.css` — sistema visual geral, temas, responsividade, cursor e camadas.
- `caderno.css` — estilos específicos da segunda página.
- `script.js` — tema, scroll, parallax, cards, partículas e navegação.
- `caderno.js` — laboratório de frases.
- `assets/` — artes, fundos, foregrounds, cursores e favicon.
- `vendor/` — cópias locais de Lenis, GSAP e ScrollTrigger.

## Regras para continuar

1. Preservar o tema claro como padrão, a menos que o usuário peça o contrário.
2. Não remover o sistema de duas camadas das artes.
3. Ao adicionar uma imagem nova, preferir os arquivos `background` e `foreground` separados.
4. Se houver tema escuro, criar ou apontar para um fundo escuro próprio; não depender apenas de um filtro genérico.
5. Manter o site estático e compatível com GitHub Pages.
6. Evitar bibliotecas externas novas sem necessidade; já existem GSAP, ScrollTrigger e Lenis locais.
7. Priorizar interação visual e imagens; textos devem ser curtos e editáveis.
8. Após alterações, verificar `index.html` e `caderno.html` no servidor local.

## Próximas possibilidades

- Substituir os textos-modelo por conteúdo real da disciplina.
- Adicionar uma terceira página para referências/autores.
- Criar uma galeria com modal para ampliar as colagens.
- Adicionar áudio ambiente opcional com controle explícito.
- Melhorar navegação mobile sem perder a densidade visual.
- Criar uma seção de créditos das imagens e referências usadas no trabalho.
