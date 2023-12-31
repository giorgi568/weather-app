function getMoonPhaseIcon(phase){
  // console.log(phase.toLowerCase)
  const moonSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  moonSvg.setAttribute('fill', 'white');
  moonSvg.setAttribute('viewBox', '0 0 20 16');
  moonSvg.setAttribute('width', '60');
  moonSvg.setAttribute('height', '60');
 
  if(phase.toLowerCase() === 'new moon'){
    iconPath.setAttribute(
      'd',
      'M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Z'
    );
    moonSvg.appendChild(iconPath);
    return moonSvg;
  }
  
  if(phase.toLowerCase() === 'waxing crescent'){
    iconPath.setAttribute(
      'd',
      'M9 0c-.265 0-.53.013-.795.04a7.985 7.985 0 0 0-.631.094c-.043.008-.087.011-.13.02a7.998 7.998 0 0 0 0 15.692c.043.009.087.012.13.02.208.037.417.073.631.094A8 8 0 1 0 9 0Zm0 15.5a7.46 7.46 0 0 1-1.668-.188 8.497 8.497 0 0 0 0-14.623A7.5 7.5 0 1 1 9 15.5Z'
    );
    moonSvg.appendChild(iconPath);
    return moonSvg;
  }
  
  if(phase.toLowerCase() === 'first quarter'){
    iconPath.setAttribute(
      'd',
      'M8 0c-.356.003-.712.03-1.065.079a7.992 7.992 0 0 0-.354 15.788h.001c.468.087.942.131 1.418.133A8 8 0 0 0 8 0Zm0 15.5a6.76 6.76 0 0 1-.725-.04A24.01 24.01 0 0 0 8.5 7.5 25.67 25.67 0 0 0 7.593.514C7.734.504 7.868.5 8 .5a7.5 7.5 0 1 1 0 15Z'
    );
    moonSvg.appendChild(iconPath);
    return moonSvg;
  }
  
  if(phase.toLowerCase() === 'waxing gibbous'){
    iconPath.setAttribute(
      'd',
      'M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm0 15a6.73 6.73 0 0 1-.948-.072.486.486 0 0 1-.24-.106A8.838 8.838 0 0 1 3.962 8 8.868 8.868 0 0 1 6.76 1.22a.702.702 0 0 1 .359-.157c.292-.04.586-.062.881-.063a7 7 0 0 1 0 14Z'
    );
    moonSvg.appendChild(iconPath);
    return moonSvg;
  }

  if(phase.toLowerCase() === 'full moon'){
    iconPath.setAttribute(
      'd',
      'M8 1a7 7 0 1 1-7 7 7.008 7.008 0 0 1 7-7m0-1a8 8 0 1 0 0 16A8 8 0 0 0 8 0Z'
    );
    moonSvg.appendChild(iconPath);
    return moonSvg;
  }

  if(phase.toLowerCase() === 'waning gibbous'){
    iconPath.setAttribute(
      'd',
      'M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8Zm1 0a7.008 7.008 0 0 1 7-7c.295.001.59.022.881.063a.702.702 0 0 1 .36.157A8.868 8.868 0 0 1 12.036 8a8.838 8.838 0 0 1-2.849 6.822.486.486 0 0 1-.24.106A6.73 6.73 0 0 1 8 15a7.008 7.008 0 0 1-7-7Z'
    );
    moonSvg.appendChild(iconPath);
    return moonSvg;
  }

  if(phase.toLowerCase() === 'last quarter'){
    iconPath.setAttribute(
      'd',
      'M8 0a8.03 8.03 0 0 0-1.065.079 7.992 7.992 0 0 0-.354 15.788h.001c.468.087.942.131 1.418.133A8 8 0 0 0 8 0ZM1 8a7.008 7.008 0 0 1 6.204-6.951A25.25 25.25 0 0 1 8 7.5c.032 2.51-.328 5.01-1.067 7.41A7.005 7.005 0 0 1 1 8Z'
    );
    moonSvg.appendChild(iconPath);
    return moonSvg;
  }

  if(phase.toLowerCase() === 'waning crescent'){
    iconPath.setAttribute(
      'd',
      'M10.555.154c-.042-.009-.085-.012-.129-.02A7.981 7.981 0 0 0 9.795.04a8 8 0 1 0 0 15.92 8.12 8.12 0 0 0 .631-.094c.043-.008.087-.011.13-.02a7.998 7.998 0 0 0 0-15.692h-.001Zm.113 15.158a7.499 7.499 0 1 1 0-14.623 8.497 8.497 0 0 0 0 14.623Z'
    );
    moonSvg.appendChild(iconPath);
    return moonSvg;
  }
  return false
}
export {getMoonPhaseIcon}