import { useEffect, useRef } from 'react';

const AdBanner = () => {
  const adRef = useRef(null);

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

    if (adRef.current) {
      adRef.current.appendChild(script1);
      adRef.current.appendChild(script2);
    }

    return () => {
      if (adRef.current) {
        adRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div style={{display: 'flex', justifyContent: 'center'
  }} ref={adRef} />;
};

export default AdBanner;
