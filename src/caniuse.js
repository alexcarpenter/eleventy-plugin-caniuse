const caniuse = feature => {
  return `
<script src="https://cdn.jsdelivr.net/gh/ireade/caniuse-embed/public/caniuse-embed.min.js"></script>
<p class="ciu_embed" data-feature="${feature}" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">
  <a href="http://caniuse.com/#feat=${feature}">
  <picture>
    <source type="image/webp" srcset="https://caniuse.bitsofco.de/image/${feature}.webp">
    <img src="https://caniuse.bitsofco.de/image/${feature}.png" alt="${feature}">
  </picture>
</a>
</p>
`;
}

module.exports = caniuse;
