# ATLAS — Linguagem em movimento

Site estático artístico para um trabalho escolar de Linguagens. A proposta é explorar como palavra, imagem, corpo, cor, ritmo e gesto também podem funcionar como formas de comunicação.

O projeto foi pensado para ter pouco texto, muitas imagens, movimento e interação. Ele funciona diretamente no GitHub Pages, sem backend e sem etapa de build.

## Páginas

- `index.html` — página principal do Atlas, com hero, camadas de expressão, cards interativos e estúdio visual.
- `caderno.html` — segunda página, com notas visuais, laboratório de frases e novas colagens.

## Rodar localmente

Dentro desta pasta, execute:

```powershell
python -m http.server 4173
```

Depois abra `http://127.0.0.1:4173/`.

Também é possível abrir os HTML diretamente, mas o servidor local é recomendado para testar todos os assets corretamente.

## Publicar no GitHub Pages

O repositório é:

`https://github.com/MrdiegL2824/Site_Linguagens`

No GitHub, abra `Settings > Pages`, selecione `Deploy from a branch`, escolha a branch `main` e a pasta `/ (root)`. O endereço esperado será:

`https://mrdiegl2824.github.io/Site_Linguagens/`

## Tecnologias

- HTML semântico
- CSS puro com layout responsivo, temas e animações
- JavaScript puro para interações
- GSAP + ScrollTrigger para animações de rolagem
- Lenis para rolagem suave
- Canvas para partículas e símbolos
- PNGs e SVGs locais para manter o projeto compatível com GitHub Pages

Para entender as decisões do projeto e continuar o desenvolvimento, leia [MEMORIA_PROJETO.md](MEMORIA_PROJETO.md).
