import React, { useState, useEffect } from 'react';
import CodeBlock from '@theme/CodeBlock';

function GoRealTime({ initialHtml, initialCss }) {
  const [htmlCode, setHtmlCode] = useState(initialHtml || '');
  const [cssCode, setCssCode] = useState(initialCss || '');
  const [output, setOutput] = useState('');

  useEffect(() => {
    const updateOutput = () => {
      const iframe = document.getElementById('output-frame');
      const iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(`
        <html>
          <head>
            <style>${cssCode}</style>
          </head>
          <body>${htmlCode}</body>
        </html>
      `);
      iframeDocument.close();
    };

    updateOutput();
  }, [htmlCode, cssCode]);

  return ( 
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ flex: 1 }}>
        <h3>HTML</h3>
        <textarea
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
          style={{ width: '100%', height: '200px', padding: '20px', borderRadius: '15px' }}
          placeholder="Enter HTML code here..."
        />
      </div>
      <div style={{ flex: 1 }}>
        <h3>CSS</h3>
        <textarea
          value={cssCode}
          onChange={(e) => setCssCode(e.target.value)}
          style={{ width: '100%', height: '200px', padding: '20px', borderRadius: '15px' }}
          placeholder="Enter CSS code here..."
        />
      </div>
      <div style={{ flex: 2 }}>
        <h3>Output</h3>
        <iframe
          id="output-frame"
          title="output"
          style={{ width: '100%', height: '100%', border: 'none' }}
        ></iframe>
      </div>
    </div> 
  );
}

export default GoRealTime;
