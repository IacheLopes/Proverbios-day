import { useEffect } from 'react';

const Ads = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.innerHTML = `
      atOptions = {
        'key': 'fb8532d3c718f6663cd8d4889e3d6478',
        'format': 'iframe',
        'height': 90,
        'width': 728,
        'params': {}
      };
    `;
    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.src = '//www.topcpmcreativeformat.com/fb8532d3c718f6663cd8d4889e3d6478/invoke.js';

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return <div id="ad-banner" />;
};

export default Ads;
