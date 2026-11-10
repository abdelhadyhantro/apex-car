const products = [
  // =========================================================================
  // 1. MERCEDES-BENZ (8 Models)
  // =========================================================================
  {
    id: 1,
    brand: "Mercedes-Benz",
    name: "Mercedes-AMG C43 Coupe",
    type: "Rent",
    price: 250,
    hp: "385 HP",
    topSpeed: "155 mph",
    acceleration: "4.5s (0-60)",
    transmission: "AMG SPEEDSHIFT TCT 9G",
    description: "3.0L V6 Biturbo with AMG Performance 4MATIC all-wheel drive.",
    image: "/img/c43.JPG",
    video: "/img/c43.MP4",
    images: [
      { label: "Front View", url: "/img/c43.JPG" },
      { label: "Interior", url: "/img/c43i.JPG" },
      { label: "Rear View", url: "/img/c43s.JPG" }
    ]
  },
  {
    id: 2,
    brand: "Mercedes-Benz",
    name: "Mercedes-AMG S63s E-Performance",
    type: "Buy",
    price: 188000,
    hp: "791 HP",
    topSpeed: "180 mph",
    acceleration: "3.2s (0-60)",
    transmission: "AMG SPEEDSHIFT MCT 9G",
    description: "Handcrafted 4.0L V8 Biturbo Hybrid with 1,055 lb-ft of relentless torque.",
    image: "/img/S63.JPG",
    video: "",
    images: [
      { label: "Front View", url: "/img/S63.JPG" },
      { label: "Interior", url: "/img/s63i.JPG" },
      { label: "Rear View", url: "/img/s63s.JPG" }
    ]
  },
  {
    id: 3,
    brand: "Mercedes-Benz",
    name: "Mercedes-AMG E63s AMG Sedan",
    type: "Buy",
    price: 118000,
    hp: "603 HP",
    topSpeed: "186 mph",
    acceleration: "3.3s (0-60)",
    transmission: "9-Speed AMG MCT",
    description: "4.0L V8 Biturbo with Drift Mode capability and carbon ceramic brakes.",
    image: "/img/e63.JPG",
    video: "/img/e63.MP4",
    images: [
      { label: "Front View", url: "/img/e63.JPG" },
      { label: "Interior", url: "/img/e63i.JPG" },
      { label: "Rear View", url: "/img/e63s.JPG" }
    ]
  },
  {
    id: 4,
    brand: "Mercedes-Benz",
    name: "Mercedes-AMG GT63s 4-Door Coupe",
    type: "Rent",
    price: 650,
    hp: "630 HP",
    topSpeed: "196 mph",
    acceleration: "3.1s (0-60)",
    transmission: "AMG Speedshift 9-Speed",
    description: "4-Door super coupe engineered from the ground up by AMG in Affalterbach.",
    image: "/img/GT63.JPG",
    video: "/img/GT63.MP4",
    images: [
      { label: "Front View", url: "/img/GT63.JPG" },
      { label: "Interior", url: "/img/GT63I.JPG" },
      { label: "Rear View", url: "/img/GT63S.JPG" }
    ]
  },
  {
    id: 5,
    brand: "Mercedes-Benz",
    name: "Mercedes-Maybach S680 V12",
    type: "Buy",
    price: 245000,
    hp: "621 HP",
    topSpeed: "155 mph",
    acceleration: "4.4s (0-60)",
    transmission: "9G-TRONIC Automatic",
    description: "6.0L V12 Biturbo with two-tone bespoke paint and first-class reclining cabin.",
    image: "/img/S680.JPG",
    video: "",
    images: [
      { label: "Front View", url: "/img/S680.JPG" },
      { label: "Interior", url: "/img/S680I.JPG" },
      { label: "Rear View", url: "/img/S680M.JPG" }
    ]
  },
  {
    id: 6,
    brand: "Mercedes-Benz",
    name: "Mercedes-AMG G63 Brabus Widestar",
    type: "Rent",
    price: 1200,
    hp: "800 HP",
    topSpeed: "150 mph",
    acceleration: "4.1s (0-60)",
    transmission: "Brabus 9-Speed",
    description: "Brabus tuned 4.0L V8 with carbon widebody kit and valve-controlled side pipes.",
    image: "/img/G63.JPG",
    video: "/img/G63.MP4",
    images: [
      { label: "Front View", url: "/img/G63.JPG" },
      { label: "Interior", url: "/img/G63I.JPG" },
      { label: "Rear View", url: "/img/G63W.JPG" }
    ]
  },
  {
    id: 7,
    brand: "Mercedes-Benz",
    name: "Mercedes-Maybach GLS 600",
    type: "Rent",
    price: 850,
    hp: "550 HP",
    topSpeed: "155 mph",
    acceleration: "4.8s (0-60)",
    transmission: "9G-TRONIC AWD",
    description: "Flagship luxury SUV with dedicated rear champagne cooler and executive lounge.",
    image: "/img/GLS600.JPG",
    video: "/img/GLS600.MP4",
    images: [
      { label: "Front View", url: "/img/GLS600.JPG" },
      { label: "Interior", url: "/img/GLS600I.JPG" },
      { label: "Rear View", url: "/img/GLS600M.JPG" }
    ]
  },
  {
    id: 8,
    brand: "Mercedes-Benz",
    name: "Mercedes-AMG CLS 63 S",
    type: "Buy",
    price: 75000,
    hp: "577 HP",
    topSpeed: "186 mph",
    acceleration: "3.5s (0-60)",
    transmission: "7-Speed AMG MCT",
    description: "The legend that invented the four-door coupe genre, powered by the M157 5.5L V8 Biturbo.",
    image: "/img/CLS63.JPG",
    video: "/img/CLS63.MP4",
    images: [
      { label: "Front View", url: "/img/CLS63.JPG" },
      { label: "Interior", url: "/img/CLS63I.JPG" },
      { label: "Rear View", url: "/img/CLS63S.JPG" }
    ]
  },

  // =========================================================================
  // 2. BMW (8 Models)
  // =========================================================================
  {
    id: 9,
    brand: "BMW",
    name: "BMW M4 Competition (G82)",
    type: "Rent",
    price: 350,
    hp: "503 HP",
    topSpeed: "180 mph",
    acceleration: "3.4s (0-60)",
    transmission: "8-Speed M Steptronic",
    description: "S58 3.0L Twin-Turbo with M Carbon ceramic brakes and carbon bucket seats.",
    image: "/img/M4.JPG",
    video: "/img/M4.MP4",
    images: [
      { label: "Front View", url: "/img/M4.JPG" },
      { label: "Interior", url: "/img/M4I.JPG" },
      { label: "Rear View", url: "/img/M4C.JPG" }
    ]
  },
  {
    id: 10,
    brand: "BMW",
    name: "BMW M3 Competition (G80)",
    type: "Buy",
    price: 89000,
    hp: "503 HP",
    topSpeed: "180 mph",
    acceleration: "3.4s (0-60)",
    transmission: "8-Speed M Steptronic AWD",
    description: "High-revving S58 twin-turbo inline-six with switchable rear-wheel drive mode.",
    image: "/img/M3.JPG",
    video: "/img/M3.MP4",
    images: [
      { label: "Front View", url: "/img/M3.JPG" },
      { label: "Interior", url: "/img/M3I.JPG" },
      { label: "Rear View", url: "/img/M3C.JPG" }
    ]
  },
  {
    id: 11,
    brand: "BMW",
    name: "BMW M5 Competition (F90)",
    type: "Rent",
    price: 450,
    hp: "617 HP",
    topSpeed: "190 mph",
    acceleration: "3.1s (0-60)",
    transmission: "8-Speed M Steptronic",
    description: "4.4L TwinPower V8 monster providing sports car agility with full executive comfort.",
    image: "/img/M5.JPG",
    video: "/img/M5.MP4",
    images: [
      { label: "Front View", url: "/img/M5.JPG" },
      { label: "Interior", url: "/img/M5I.JPG" },
      { label: "Rear View", url: "/img/M5C.JPG" }
    ]
  },
  {
    id: 12,
    brand: "BMW",
    name: "BMW M8 Competition Gran Coupe",
    type: "Buy",
    price: 142000,
    hp: "617 HP",
    topSpeed: "190 mph",
    acceleration: "3.0s (0-60)",
    transmission: "8-Speed M xDrive AWD",
    description: "The peak of BMW luxury performance. 4-door coupe with carbon core chassis.",
    image: "/img/M8.JPG",
    video: "/img/M8.MP4",
    images: [
      { label: "Front View", url: "/img/M8.JPG" },
      { label: "Interior", url: "/img/M8I.JPG" },
      { label: "Rear View", url: "/img/M8C.JPG" }
    ]
  },
  {
    id: 13,
    brand: "BMW",
    name: "BMW M2 Competition (G87)",
    type: "Rent",
    price: 240,
    hp: "453 HP",
    topSpeed: "177 mph",
    acceleration: "3.9s (0-60)",
    transmission: "6-Speed Manual / 8-Speed Auto",
    description: "Compact rear-wheel drive muscle machine with a pure, unfiltered driving feel.",
    image: "/img/M2.JPG",
    video: "/img/M2.MP4",
    images: [
      { label: "Front View", url: "/img/M2.JPG" },
      { label: "Interior", url: "/img/M2I.JPG" },
      { label: "Rear View", url: "/img/M2C.JPG" }
    ]
  },
  {
    id: 14,
    brand: "BMW",
    name: "BMW M4 CSL Lightweight",
    type: "Buy",
    price: 175000,
    hp: "543 HP",
    topSpeed: "191 mph",
    acceleration: "3.6s (0-60)",
    transmission: "8-Speed M Steptronic",
    description: "Strictly limited edition track car. Rear seat deleted for maximum weight saving.",
    image: "/img/CSL.JPG",
    video: "/img/CSL.MP4",
    images: [
      { label: "Front View", url: "/img/CSL.JPG" },
      { label: "Interior", url: "/img/CSLI.JPG" },
      { label: "Rear View", url: "/img/CSL4.JPG" }
    ]
  },
  {
    id: 15,
    brand: "BMW",
    name: "BMW X5 M Competition",
    type: "Rent",
    price: 420,
    hp: "617 HP",
    topSpeed: "177 mph",
    acceleration: "3.7s (0-60)",
    transmission: "8-Speed M Steptronic",
    description: "Twin-turbo V8 high-performance luxury SUV equipped with M sport quad exhaust.",
    image: "/img/X5.JPG",
    video: "/img/X5.MP4",
    images: [
      { label: "Front View", url: "/img/X5.JPG" },
      { label: "Interior", url: "/img/X5I.JPG" },
      { label: "Rear View", url: "/img/X5M.JPG" }
    ]
  },
  {
    id: 16,
    brand: "BMW",
    name: "BMW X6 M Competition",
    type: "Buy",
    price: 132000,
    hp: "617 HP",
    topSpeed: "177 mph",
    acceleration: "3.7s (0-60)",
    transmission: "8-Speed M Steptronic",
    description: "Aggressive Sports Activity Coupe silhouette powered by a 4.4L TwinPower V8 engine.",
    image: "/img/X6.JPG",
    video: "/img/X6.MP4",
    images: [
      { label: "Front View", url: "/img/X6.JPG" },
      { label: "Interior", url: "/img/X6I.JPG" },
      { label: "Rear View", url: "/img/X6M.JPG" }
    ]
  },

  // =========================================================================
  // 3. PORSCHE (8 Models)
  // =========================================================================
  {
    id: 17,
    brand: "Porsche",
    name: "Porsche 911 GT3 RS (992)",
    type: "Buy",
    price: 285000,
    hp: "518 HP",
    topSpeed: "184 mph",
    acceleration: "3.0s (0-60)",
    transmission: "7-Speed Dual-Clutch PDK",
    description: "4.0L Naturally Aspirated Flat-6 with hydraulic DRS wing producing 860kg of downforce.",
    image: "/img/RS.JPG",
    video: "/img/RS.MP4",
    images: [
      { label: "Front View", url: "/img/RS.JPG" },
      { label: "Interior", url: "/img/RSI.JPG" },
      { label: "Rear View", url: "/img/RS1.JPG" }
    ]
  },
  {
    id: 18,
    brand: "Porsche",
    name: "Porsche 911 Turbo S (992)",
    type: "Rent",
    price: 800,
    hp: "640 HP",
    topSpeed: "205 mph",
    acceleration: "2.2s (0-60)",
    transmission: "8-Speed Porsche PDK AWD",
    description: "Twin-turbo flat-six rocket that accelerates from 0 to 60 mph in just 2.2 seconds.",
    image: "/img/TURBO.JPG",
    video: "/img/TURBOS.MP4",
    images: [
      { label: "Front View", url: "/img/TURBO.JPG" },
      { label: "Interior", url: "/img/TURBOI.JPG" },
      { label: "Rear View", url: "/img/TURBOS.JPG" }
    ]
  },
  {
    id: 19,
    brand: "Porsche",
    name: "Porsche 911 Dakar Offroad",
    type: "Buy",
    price: 240000,
    hp: "473 HP",
    topSpeed: "149 mph",
    acceleration: "3.2s (0-60)",
    transmission: "8-Speed PDK AWD",
    description: "50mm lifted offroad 911 equipped with all-terrain tires and Rallye launch control.",
    image: "/img/DAKAR.JPG",
    video: "/img/DAKAR.MP4",
    images: [
      { label: "Front View", url: "/img/DAKAR.JPG" },
      { label: "Interior", url: "/img/DAKARI.JPG" },
      { label: "Rear View", url: "/img/DAKAR1.JPG" }
    ]
  },
  {
    id: 20,
    brand: "Porsche",
    name: "Porsche 911 Carrera GTS",
    type: "Rent",
    price: 450,
    hp: "473 HP",
    topSpeed: "193 mph",
    acceleration: "3.1s (0-60)",
    transmission: "8-Speed PDK",
    description: "The sweet spot of the 911 lineup with sport suspension and central-lock alloy wheels.",
    image: "/img/GTS.JPG",
    video: "/img/gt.MP4",
    images: [
      { label: "Front View", url: "/img/GTS.JPG" },
      { label: "Interior", url: "/img/GTSI.JPG" },
      { label: "Rear View", url: "/img/CARRERA.JPG" }
    ]
  },
  {
    id: 21,
    brand: "Porsche",
    name: "Porsche 911 GT3 Touring",
    type: "Buy",
    price: 210000,
    hp: "502 HP",
    topSpeed: "199 mph",
    acceleration: "3.2s (0-60)",
    transmission: "6-Speed GT Sport Manual",
    description: "Track motor without the giant wing. Elegant understated lines for purists.",
    image: "/img/TOURING.JPG?v=1",
    video: "/img/TOURING.MP4",
    images: [
      { label: "Front View", url: "/img/TOURING.JPG?v=1" },
      { label: "Interior", url: "/img/TOURINGI.JPG?v=1" },
      { label: "Rear View", url: "/img/TOURING1.JPG?v=1" }
    ]
  },
  {
    id: 22,
    brand: "Porsche",
    name: "Porsche 911 Targa 4S",
    type: "Rent",
    price: 490,
    hp: "443 HP",
    topSpeed: "189 mph",
    acceleration: "3.4s (0-60)",
    transmission: "8-Speed PDK AWD",
    description: "Iconic targa roll bar with automated folding glass roof and all-wheel drive stability.",
    image: "/img/TARGA.JPG",
    video: "/img/TARGA.MP4",
    images: [
      { label: "Front View", url: "/img/TARGA.JPG" },
      { label: "Interior", url: "/img/TARGAI.JPG" },
      { label: "Rear View", url: "/img/TARGA1.JPG" }
    ]
  },
  {
    id: 23,
    brand: "Porsche",
    name: "Porsche 911 Sport Classic",
    type: "Buy",
    price: 330000,
    hp: "543 HP",
    topSpeed: "196 mph",
    acceleration: "3.9s (0-60)",
    transmission: "7-Speed Manual Only",
    description: "Wide Turbo body with rear-wheel drive, manual gearbox, and ducktail spoiler.",
    image: "/img/CLASSIC.JPG",
    video: "/img/CLASSIC.MP4",
    images: [
      { label: "Front View", url: "/img/CLASSIC.JPG" },
      { label: "Interior", url: "/img/CLASSICI.JPG" },
      { label: "Rear View", url: "/img/CLASSIC1.JPG" }
    ]
  },
  {
    id: 24,
    brand: "Porsche",
    name: "Porsche 911 Speedster",
    type: "Buy",
    price: 360000,
    hp: "502 HP",
    topSpeed: "192 mph",
    acceleration: "3.8s (0-60)",
    transmission: "6-Speed GT Sports Manual",
    description: "Low-cut windscreen, double-bubble carbon rear cover, and a 9,000 RPM GT3 engine.",
    image: "/img/STER.JPG",
    video: "/img/STER.MP4",
    images: [
      { label: "Front View", url: "/img/STER.JPG" },
      { label: "Interior", url: "/img/STERI.JPG" },
      { label: "Rear View", url: "/img/STER1.JPG" }
    ]
  },

  // =========================================================================
  // 4. RANGE ROVER (8 Models)
  // =========================================================================
  {
    id: 25,
    brand: "Range Rover",
    name: "Range Rover SV Autobiography LWB",
    type: "Rent",
    price: 950,
    hp: "606 HP",
    topSpeed: "162 mph",
    acceleration: "4.3s (0-60)",
    transmission: "8-Speed Automatic AWD",
    description: "Long wheelbase executive luxury with hot-stone massage rear seats.",
    image: "/img/AUT.JPG",
    video: "/img/AUT.MP4",
    images: [
      { label: "Front View", url: "/img/AUT.JPG" },
      { label: "Interior", url: "/img/AUTI.JPG" },
      { label: "Rear View", url: "/img/AUTO.JPG" }
    ]
  },
  {
    id: 26,
    brand: "Range Rover",
    name: "Range Rover Sport SV Edition One",
    type: "Buy",
    price: 185000,
    hp: "626 HP",
    topSpeed: "180 mph",
    acceleration: "3.6s (0-60)",
    transmission: "8-Speed Sport Shift AWD",
    description: "4.4L Twin-Turbo V8 with 23-inch carbon wheels and 6D Dynamics air suspension.",
    image: "/img/SVR.JPG",
    video: "/img/SVR.MP4",
    images: [
      { label: "Front View", url: "/img/SVR.JPG" },
      { label: "Interior", url: "/img/SVRI.JPG" },
      { label: "Rear View", url: "/img/SVR1.JPG" }
    ]
  },
  {
    id: 27,
    brand: "Range Rover",
    name: "Defender 110 V8 Carpathian",
    type: "Rent",
    price: 450,
    hp: "518 HP",
    topSpeed: "149 mph",
    acceleration: "4.9s (0-60)",
    transmission: "8-Speed Automatic",
    description: "5.0L Supercharged V8 wrapped in Carpathian Grey satin finish.",
    image: "/img/Defender.JPG",
    video: "/img/Defender.MP4",
    images: [
      { label: "Front View", url: "/img/Defender.JPG" },
      { label: "Interior", url: "/img/DefenderI.JPG" },
      { label: "Rear View", url: "/img/Defender1.JPG" }
    ]
  },
  {
    id: 28,
    brand: "Range Rover",
    name: "Range Rover Velar SVAutobiography",
    type: "Buy",
    price: 98000,
    hp: "550 HP",
    topSpeed: "170 mph",
    acceleration: "4.3s (0-60)",
    transmission: "8-Speed Electronic Shift",
    description: "Supercharged V8 dynamics in a sleek, minimalist luxury crossover body.",
    image: "/img/Velar.JPG ",
    video: "/img/Velar.MP4",
    images: [
      { label: "Front View", url: "/img/Velar.JPG" },
      { label: "Interior", url: "/img/VelarI.JPG" },
      { label: "Rear View", url: "/img/VelarS.JPG" }
    ]
  },
  {
    id: 29,
    brand: "Range Rover",
    name: "Range Rover Sport SVR Carbon",
    type: "Rent",
    price: 520,
    hp: "575 HP",
    topSpeed: "176 mph",
    acceleration: "4.3s (0-60)",
    transmission: "8-Speed Quickshift",
    description: "Exposed carbon fiber hood with loud active switchable quad exhausts.",
    image: "/img/SVRC.JPG",
    video: "",
    images: [
      { label: "Front View", url: "/img/SVRC.JPG" },
      { label: "Interior", url: "/img/SVRCI.JPG" },
      { label: "Rear View", url: "/img/SVRC1.JPG" }
    ]
  },
  {
    id: 30,
    brand: "Range Rover",
    name: "Defender 90 V8 Short Wheelbase",
    type: "Buy",
    price: 108000,
    hp: "518 HP",
    topSpeed: "149 mph",
    acceleration: "4.9s (0-60)",
    transmission: "8-Speed AWD",
    description: "Compact two-door off-road icon packing a thunderous supercharged V8 engine.",
    image: "/img/Defender90.JPG",
    video: "",
    images: [
      { label: "Front View", url: "/img/Defender90.JPG" },
      { label: "Interior", url: "/img/Defender90I.JPG" },
      { label: "Rear View", url: "/img/Defender90M.JPG" }
    ]
  },
  {
    id: 31,
    brand: "Range Rover",
    name: "Range Rover Vogue SE V8",
    type: "Rent",
    price: 700,
    hp: "523 HP",
    topSpeed: "155 mph",
    acceleration: "4.4s (0-60)",
    transmission: "8-Speed Automatic",
    description: "Smooth BMW-sourced 4.4L twin-turbo V8 offering pure serene luxury.",
    image: "/img/VaugueSE.JPG",
    video: "",
    images: [
      { label: "Front View", url: "/img/VaugueSE.JPG" },
      { label: "Interior", url: "/img/VogueSEI.JPG" },
      { label: "Rear View", url: "/img/VogueSEM.JPG" }
    ]
  },
  {
    id: 32,
    brand: "Range Rover",
    name: "Defender 130 V8 Outbound",
    type: "Buy",
    price: 122000,
    hp: "493 HP",
    topSpeed: "140 mph",
    acceleration: "5.4s (0-60)",
    transmission: "8-Speed Automatic AWD",
    description: "The 8-seater flagship adventure vehicle engineered for extreme expeditions.",
    image: "",
    video: "",
    images: [
      { label: "Front View", url: "/Defender130.JPG" },
      { label: "Interior", url: "/Defender130I.JPG" },
      { label: "Rear View", url: "/Defender130M.JPG" }
    ]
  },
];

export default products;