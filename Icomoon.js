/**
 * Icomoon icon set component.
 * Usage: <Icomoon name="icon-name" size={20} color="#4F8EF7" />
 */

import createIconSet from './lib/create-icon-set';
const glyphMap = {
  "shuffle": 59678,
  "playlist": 59685,
  "thunder": 59688,
  "mic": 59687,
  "movistar": 59686,
  "fullHeart": 59689,
  "album": 59684,
  "video": 59683,
  "pause": 59682,
  "repeat": 59681,
  "prev": 59680,
  "next": 59679,
  "play": 59677,
  "ticket": 59649,
  "search": 59650,
  "calendar": 59651,
  "lastEvents": 59652,
  "headphones": 59653,
  "band": 59654,
  "inbox": 59655,
  "track": 59656,
  "home": 59657,
  "heart": 59658,
  "share": 59659,
  "ticketsAvailable": 59691,
  "ticketsSoldOut": 59692,
  "ticketPurchased": 59693,
  "metal": 59666,
  "indie": 59661,
  "acustico": 59663,
  "pop": 59664,
  "rock": 59648,
  "experimental": 59671,
  "jazz": 59672,
  "blues": 59675,
  "rb_soul": 59676,
  "ambient": 59690,
  "electronica": 59660,
  "punk": 59662,
  "funk": 59665,
  "hiphop_rap": 59667,
  "reggae": 59668,
  "latino": 59669,
  "alternativo": 59670,
  "tango": 59694,
  "cumbiaFusion": 59697,
  "radio": 59696,
  "thumbDown": 59695,
  "thumbUp": 59698,
  "Icono-CAR": 59699
};

let Icomoon = createIconSet(glyphMap, 'icomoon', 'Icomoon.ttf');

module.exports = Icomoon;
module.exports.glyphMap = glyphMap;
