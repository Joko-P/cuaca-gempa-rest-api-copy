const cardCode = {
  N: 'Utara',
  NNE: 'Utara-Timur Laut',
  NE: 'Timur Laut',
  ENE: 'Timur-Timur Laut',
  E: 'Timur',
  ESE: 'Timur-Tenggara',
  SE: 'Tenggara',
  SSE: 'Selatan-Tenggara',
  S: 'Selatan',
  SSW: 'Selatan-Barat Daya',
  SW: 'Barat Daya',
  WSW: 'Barat-Barat Daya',
  W: 'Barat',
  WNW: 'Barat-Barat Laut',
  NW: 'Barat Laut',
  NNW: 'Utara-Barat Laut',
  VARIABLE; 'Berubah-ubah'
};

const cardCodeToText = (code) => {
  return cardCode[code] || '';
};

module.exports = cardCodeToText;
