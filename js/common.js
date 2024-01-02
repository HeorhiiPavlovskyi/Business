$(function(){

     $('#map').vectorMap({
    map: 'us_lcc',
    backgroundColor: 'transparent',
    regionStyle: {
      initial: {
        fill: '#0e2241',
        stroke: '#fff',
        "stroke-width": 1,
      },
      hover: {
        fill: '#b92631',
        "fill-opacity": 1,
      },
    },
  });
   
    });

