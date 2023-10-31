import React, { useEffect } from 'react';
import { useColorMode } from "@docusaurus/theme-common";
const GiscusComments = () => {
  const { colorMode } = useColorMode();
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.defer = true;
    script.setAttribute('data-repo', 'alhifnywahid/diskusi-my-notes');
    script.setAttribute('data-repo-id', 'R_kgDOKmYCJg');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDOKmYCJs4CahRs');
    script.setAttribute('data-mapping', 'title');
    // script.setAttribute('data-strict', '1');
    script.setAttribute('data-reactions-enabled', '0');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', colorMode);
    script.setAttribute('data-lang', 'id');
    // script.setAttribute('data-loading', 'eager');
    // script.setAttribute('crossorigin', 'anonymous');

    document.getElementById('giscus-container').appendChild(script);
  }, []);

  return <div id="giscus-container" />;
};

export default GiscusComments;
