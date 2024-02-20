import React from 'react';

function Codepen({ dataSlugHash }) {
  return (
    <iframe
      height="300"
      style={{ width: '100%', backgroundColor: 'white' }}
      scrolling="no"
      title="Untitled"
      src={`https://codepen.io/alhifnywahid/embed/${dataSlugHash}?default-tab=html%2Cresult&editable=true&theme-id=dark`}
      frameBorder="no"
      loading="lazy"
      allowTransparency="true"
      allowFullScreen="true"
    >
    See the Pen
    <a href={`https://codepen.io/alhifnywahid/pen/${dataSlugHash}`}> display - blcok</a> by
    Alhifny Wahid (<a href="https://codepen.io/alhifnywahid">@alhifnywahid</a>) on
    <a href="https://codepen.io">CodePen</a>.
  </iframe>
  );
}

export default Codepen;
