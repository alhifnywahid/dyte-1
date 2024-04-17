import React from 'react';

function ThinkerCad({ dataSlugHash, title }) {
  return (
    <iframe
      width="100%"
      height="400"
      title={`${title}`}
      src={`https://www.tinkercad.com/embed/${dataSlugHash}?editbtn=1{`}
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      scrolling="no"
      className="mb-4"
    ></iframe>
  );
}

export default ThinkerCad;
