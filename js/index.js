const container = document.getElementById("globeArea");
const controller = new GIO.Controller(container);

controller.setInitCountry('JP');

const data = [{
    "e": "JP",
    "i": "BD",
    "v": 2000
  },
  {
    "e": "BR",
    "i": "JP",
    "v": 1000
  },
  {
    "e": "IN",
    "i": "US",
    "v": 10000
  }
];

controller.addData(data);
controller.init();
