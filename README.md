# Lava Jato Efrain

Site institucional do Lava Jato Efrain (Manacapuru - AM). HTML/CSS/JS estático, sem build. Tema claro em
azul e ciano, com ilustração de carro e bolhas de espuma em CSS/SVG. Base derivada do site da Refritec Air;
as regras próprias ficam no fim do `styles.css`.

```bash
npx --yes serve . -l 6540
```

## Fontes do conteúdo

- **Panfletos do cliente** (carros e motos): serviços, tabela de preços, Pacote Completo, produtos Vonixx,
  "Atendimento Manacapuru - AM", "Seg a Sáb 08h às 18h" e os slogans ("Cuidado, qualidade e brilho para seu
  veículo!", "Efrain - Qualidade e confiança").
- **Fotos e vídeos do WhatsApp** (16/10/2026): 6 fotos e 21 vídeos na galeria de mídias.

| Campo | Valor |
|---|---|
| WhatsApp / telefone | (92) 99492-5953 (`wa.me/559294925953`) |
| Atendimento | Manacapuru - AM (sem endereço exato) |
| Horário | Segunda a sábado, 8h às 18h |

## Tabela de preços (seção `#servicos`)

- **Rotativa - lavagem:** carro pequeno R$ 60; Saveiro, Montana e Fiat Toro R$ 70; S10, Hilux, Mitsubishi e
  Amarok R$ 80.
- **Limpeza & detalhamento:** teto R$ 150; estofado R$ 250; banco de couro (limpeza + revitalização) R$ 180;
  plástico interno (descontaminação + revitalização) R$ 150; vidros R$ 100; canto de portas + borrachas
  R$ 120; caixa de rodas + verniz de motor R$ 80.
- **Pacote completo** (todos os serviços): R$ 1.200.
- **Motos:** simples R$ 20; encerada + revitalização de plástico R$ 25; detalhada R$ 30; detalhada + remoção
  de ferrugem + renovação de plástico + restauração de escapamento R$ 70.

Para mudar um valor, edite o `<li>` correspondente em `index.html` (e o FAQ, que cita alguns preços).

## Galeria de mídias (seção `#galeria`)

- Fotos em `assets/img/galeria/` (redimensionadas para 1200 px no lado maior).
- Vídeos em `assets/video/efrain-01.mp4` a `efrain-21.mp4`, com capas em `assets/video/capas/` (quadros
  extraídos de cada vídeo). Os vídeos só carregam quando o visitante toca na capa (abre no lightbox).
- Filtros: Todos, Carros, Motos, Vídeos e Fotos. Mostra 12 itens e o botão "Ver mais mídias" exibe o resto.
- Para adicionar uma mídia, copie um `<button class="gal-item">` e ajuste `data-cat`, `data-src`, a imagem e a
  legenda.
- Os vídeos somam cerca de 150 MB. Se o repositório ou a hospedagem pesarem, comprimir os vídeos (ex.: 720p
  com ffmpeg) ou manter só os melhores.

## Confirmar com o cliente

- **Nome e grafia:** "Efrain" (como no panfleto e na camisa da equipe).
- **Endereço:** com o endereço dá para incluir mapa e "Como chegar".
- **Logo:** a camisa nos vídeos mostra uma logo "Lava Jato Efrain"; com o arquivo dela dá para trocar a marca
  em texto + gota.

## Depoimentos

Não foram incluídos, para não publicar avaliações inventadas.

Fontes: Sora e Nunito Sans (Google Fonts, OFL).
