import React, { useEffect } from 'react';

const GiscusComments = ({categoryId, dataRepo}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.defer = true;
    script.setAttribute('data-repo', 'alhifnywahid/diskusi-my-notes');
    script.setAttribute('data-repo-id', dataRepo);
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', categoryId);
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '1');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '1');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', 'purple_dark');
    script.setAttribute('data-lang', 'id');
    script.setAttribute('data-loading', 'lazy');
    script.setAttribute('crossorigin', 'anonymous');

    document.getElementById('giscus-container').appendChild(script);
  }, [categoryId, dataRepo]);

  return <div id="giscus-container" />;
};

export default GiscusComments;
