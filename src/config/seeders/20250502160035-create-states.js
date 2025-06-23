// src/config/seeders/20250502160035-create-states.js
"use strict";

const { v4: uuidv4 } = require("uuid");

const ALL_COUNTRIES_WITH_STATES_SEEDER = [
  {
    code: "AF",
    name: "Afganistán",
    states: [
      {
        code: "AF-BDS",
        name: "Badakhshān",
      },
      {
        code: "AF-BGL",
        name: "Baghlān",
      },
      {
        code: "AF-BAL",
        name: "Balkh",
      },
      {
        code: "AF-BDG",
        name: "Bādghīs",
      },
      {
        code: "AF-BAM",
        name: "Bāmyān",
      },
      {
        code: "AF-DAY",
        name: "Dāykundī",
      },
      {
        code: "AF-FRA",
        name: "Farāh",
      },
      {
        code: "AF-FYB",
        name: "Fāryāb",
      },
      {
        code: "AF-GHA",
        name: "Ghaznī",
      },
      {
        code: "AF-GHO",
        name: "Ghōr",
      },
      {
        code: "AF-HEL",
        name: "Helmand",
      },
      {
        code: "AF-HER",
        name: "Herāt",
      },
      {
        code: "AF-JOW",
        name: "Jowzjān",
      },
      {
        code: "AF-KAN",
        name: "Kandahār",
      },
      {
        code: "AF-KHO",
        name: "Khōst",
      },
      {
        code: "AF-KNR",
        name: "Kunar",
      },
      {
        code: "AF-KDZ",
        name: "Kunduz",
      },
      {
        code: "AF-KAB",
        name: "Kābul",
      },
      {
        code: "AF-KAP",
        name: "Kāpīsā",
      },
      {
        code: "AF-LAG",
        name: "Laghmān",
      },
      {
        code: "AF-LOG",
        name: "Lōgar",
      },
      {
        code: "AF-NAN",
        name: "Nangarhār",
      },
      {
        code: "AF-NIM",
        name: "Nīmrōz",
      },
      {
        code: "AF-NUR",
        name: "Nūristān",
      },
      {
        code: "AF-PIA",
        name: "Paktiyā",
      },
      {
        code: "AF-PKA",
        name: "Paktīkā",
      },
      {
        code: "AF-PAN",
        name: "Panjshayr",
      },
      {
        code: "AF-PAR",
        name: "Parwān",
      },
      {
        code: "AF-SAM",
        name: "Samangān",
      },
      {
        code: "AF-SAR",
        name: "Sar-e Pul",
      },
      {
        code: "AF-TAK",
        name: "Takhār",
      },
      {
        code: "AF-URU",
        name: "Uruzgān",
      },
      {
        code: "AF-WAR",
        name: "Wardak",
      },
      {
        code: "AF-ZAB",
        name: "Zābul",
      },
    ],
  },
  {
    code: "AL",
    name: "Albania",
    states: [
      {
        code: "AL-01",
        name: "Berat",
      },
      {
        code: "AL-09",
        name: "Dibër",
      },
      {
        code: "AL-02",
        name: "Durrës",
      },
      {
        code: "AL-03",
        name: "Elbasan",
      },
      {
        code: "AL-04",
        name: "Fier",
      },
      {
        code: "AL-05",
        name: "Gjirokastër",
      },
      {
        code: "AL-06",
        name: "Korçë",
      },
      {
        code: "AL-07",
        name: "Kukës",
      },
      {
        code: "AL-08",
        name: "Lezhë",
      },
      {
        code: "AL-10",
        name: "Shkodër",
      },
      {
        code: "AL-11",
        name: "Tiranë",
      },
      {
        code: "AL-12",
        name: "Vlorë",
      },
    ],
  },
  {
    code: "DZ",
    name: "Argelia",
    states: [
      {
        code: "DZ-01",
        name: "Adrar",
      },
      {
        code: "DZ-16",
        name: "Alger",
      },
      {
        code: "DZ-23",
        name: "Annaba",
      },
      {
        code: "DZ-44",
        name: "Aïn Defla",
      },
      {
        code: "DZ-46",
        name: "Aïn Témouchent",
      },
      {
        code: "DZ-05",
        name: "Batna",
      },
      {
        code: "DZ-07",
        name: "Biskra",
      },
      {
        code: "DZ-09",
        name: "Blida",
      },
      {
        code: "DZ-34",
        name: "Bordj Bou Arréridj",
      },
      {
        code: "DZ-10",
        name: "Bouira",
      },
      {
        code: "DZ-35",
        name: "Boumerdès",
      },
      {
        code: "DZ-08",
        name: "Béchar",
      },
      {
        code: "DZ-06",
        name: "Béjaïa",
      },
      {
        code: "DZ-02",
        name: "Chlef",
      },
      {
        code: "DZ-25",
        name: "Constantine",
      },
      {
        code: "DZ-17",
        name: "Djelfa",
      },
      {
        code: "DZ-32",
        name: "El Bayadh",
      },
      {
        code: "DZ-39",
        name: "El Oued",
      },
      {
        code: "DZ-36",
        name: "El Tarf",
      },
      {
        code: "DZ-47",
        name: "Ghardaïa",
      },
      {
        code: "DZ-24",
        name: "Guelma",
      },
      {
        code: "DZ-33",
        name: "Illizi",
      },
      {
        code: "DZ-18",
        name: "Jijel",
      },
      {
        code: "DZ-40",
        name: "Khenchela",
      },
      {
        code: "DZ-03",
        name: "Laghouat",
      },
      {
        code: "DZ-29",
        name: "Mascara",
      },
      {
        code: "DZ-43",
        name: "Mila",
      },
      {
        code: "DZ-27",
        name: "Mostaganem",
      },
      {
        code: "DZ-28",
        name: "Msila",
      },
      {
        code: "DZ-26",
        name: "Médéa",
      },
      {
        code: "DZ-45",
        name: "Naama",
      },
      {
        code: "DZ-31",
        name: "Oran",
      },
      {
        code: "DZ-30",
        name: "Ouargla",
      },
      {
        code: "DZ-04",
        name: "Oum el Bouaghi",
      },
      {
        code: "DZ-48",
        name: "Relizane",
      },
      {
        code: "DZ-20",
        name: "Saïda",
      },
      {
        code: "DZ-22",
        name: "Sidi Bel Abbès",
      },
      {
        code: "DZ-21",
        name: "Skikda",
      },
      {
        code: "DZ-41",
        name: "Souk Ahras",
      },
      {
        code: "DZ-19",
        name: "Sétif",
      },
      {
        code: "DZ-11",
        name: "Tamanghasset",
      },
      {
        code: "DZ-14",
        name: "Tiaret",
      },
      {
        code: "DZ-37",
        name: "Tindouf",
      },
      {
        code: "DZ-42",
        name: "Tipaza",
      },
      {
        code: "DZ-38",
        name: "Tissemsilt",
      },
      {
        code: "DZ-15",
        name: "Tizi Ouzou",
      },
      {
        code: "DZ-13",
        name: "Tlemcen",
      },
      {
        code: "DZ-12",
        name: "Tébessa",
      },
    ],
  },
  {
    code: "AD",
    name: "Andorra",
    states: [
      {
        code: "AD-07",
        name: "Andorra la Vella",
      },
      {
        code: "AD-02",
        name: "Canillo",
      },
      {
        code: "AD-03",
        name: "Encamp",
      },
      {
        code: "AD-08",
        name: "Escaldes-Engordany",
      },
      {
        code: "AD-04",
        name: "La Massana",
      },
      {
        code: "AD-05",
        name: "Ordino",
      },
      {
        code: "AD-06",
        name: "Sant Julià de Lòria",
      },
    ],
  },
  {
    code: "AO",
    name: "Angola",
    states: [
      {
        code: "AO-BGO",
        name: "Bengo",
      },
      {
        code: "AO-BGU",
        name: "Benguela",
      },
      {
        code: "AO-BIE",
        name: "Bié",
      },
      {
        code: "AO-CAB",
        name: "Cabinda",
      },
      {
        code: "AO-CNN",
        name: "Cunene",
      },
      {
        code: "AO-HUA",
        name: "Huambo",
      },
      {
        code: "AO-HUI",
        name: "Huíla",
      },
      {
        code: "AO-CCU",
        name: "Kuando Kubango",
      },
      {
        code: "AO-CNO",
        name: "Kwanza Norte",
      },
      {
        code: "AO-CUS",
        name: "Kwanza Sul",
      },
      {
        code: "AO-LUA",
        name: "Luanda",
      },
      {
        code: "AO-LNO",
        name: "Lunda Norte",
      },
      {
        code: "AO-LSU",
        name: "Lunda Sul",
      },
      {
        code: "AO-MAL",
        name: "Malange",
      },
      {
        code: "AO-MOX",
        name: "Moxico",
      },
      {
        code: "AO-NAM",
        name: "Namibe",
      },
      {
        code: "AO-UIG",
        name: "Uíge",
      },
      {
        code: "AO-ZAI",
        name: "Zaire",
      },
    ],
  },
  {
    code: "AG",
    name: "Antigua y Barbuda",
    states: [
      {
        code: "AG-10",
        name: "Barbuda",
      },
      {
        code: "AG-11",
        name: "Redonda",
      },
      {
        code: "AG-03",
        name: "Saint George",
      },
      {
        code: "AG-04",
        name: "Saint John",
      },
      {
        code: "AG-05",
        name: "Saint Mary",
      },
      {
        code: "AG-06",
        name: "Saint Paul",
      },
      {
        code: "AG-07",
        name: "Saint Peter",
      },
      {
        code: "AG-08",
        name: "Saint Philip",
      },
    ],
  },
  {
    code: "AR",
    name: "Argentina",
    states: [
      {
        code: "AR-B",
        name: "Buenos Aires",
      },
      {
        code: "AR-K",
        name: "Catamarca",
      },
      {
        code: "AR-H",
        name: "Chaco",
      },
      {
        code: "AR-U",
        name: "Chubut",
      },
      {
        code: "AR-C",
        name: "Ciudad Autónoma de Buenos Aires",
      },
      {
        code: "AR-W",
        name: "Corrientes",
      },
      {
        code: "AR-X",
        name: "Córdoba",
      },
      {
        code: "AR-E",
        name: "Entre Ríos",
      },
      {
        code: "AR-P",
        name: "Formosa",
      },
      {
        code: "AR-Y",
        name: "Jujuy",
      },
      {
        code: "AR-L",
        name: "La Pampa",
      },
      {
        code: "AR-F",
        name: "La Rioja",
      },
      {
        code: "AR-M",
        name: "Mendoza",
      },
      {
        code: "AR-N",
        name: "Misiones",
      },
      {
        code: "AR-Q",
        name: "Neuquén",
      },
      {
        code: "AR-R",
        name: "Río Negro",
      },
      {
        code: "AR-A",
        name: "Salta",
      },
      {
        code: "AR-J",
        name: "San Juan",
      },
      {
        code: "AR-D",
        name: "San Luis",
      },
      {
        code: "AR-Z",
        name: "Santa Cruz",
      },
      {
        code: "AR-S",
        name: "Santa Fe",
      },
      {
        code: "AR-G",
        name: "Santiago del Estero",
      },
      {
        code: "AR-V",
        name: "Tierra del Fuego",
      },
      {
        code: "AR-T",
        name: "Tucumán",
      },
    ],
  },
  {
    code: "AM",
    name: "Armenia",
    states: [
      {
        code: "AM-AG",
        name: "Aragac̣otn",
      },
      {
        code: "AM-AR",
        name: "Ararat",
      },
      {
        code: "AM-AV",
        name: "Armavir",
      },
      {
        code: "AM-ER",
        name: "Erevan",
      },
      {
        code: "AM-GR",
        name: "Geġark'unik'",
      },
      {
        code: "AM-KT",
        name: "Kotayk'",
      },
      {
        code: "AM-LO",
        name: "Loṙi",
      },
      {
        code: "AM-SU",
        name: "Syunik'",
      },
      {
        code: "AM-TV",
        name: "Tavuš",
      },
      {
        code: "AM-VD",
        name: "Vayoć Jor",
      },
      {
        code: "AM-SH",
        name: "Širak",
      },
    ],
  },
  {
    code: "AU",
    name: "Australia",
    states: [
      {
        code: "AU-ACT",
        name: "Australian Capital Territory",
      },
      {
        code: "AU-NSW",
        name: "New South Wales",
      },
      {
        code: "AU-NT",
        name: "Northern Territory",
      },
      {
        code: "AU-QLD",
        name: "Queensland",
      },
      {
        code: "AU-SA",
        name: "South Australia",
      },
      {
        code: "AU-TAS",
        name: "Tasmania",
      },
      {
        code: "AU-VIC",
        name: "Victoria",
      },
      {
        code: "AU-WA",
        name: "Western Australia",
      },
    ],
  },
  {
    code: "AT",
    name: "Austria",
    states: [
      {
        code: "AT-1",
        name: "Burgenland",
      },
      {
        code: "AT-2",
        name: "Kärnten",
      },
      {
        code: "AT-3",
        name: "Niederösterreich",
      },
      {
        code: "AT-4",
        name: "Oberösterreich",
      },
      {
        code: "AT-5",
        name: "Salzburg",
      },
      {
        code: "AT-6",
        name: "Steiermark",
      },
      {
        code: "AT-7",
        name: "Tirol",
      },
      {
        code: "AT-8",
        name: "Vorarlberg",
      },
      {
        code: "AT-9",
        name: "Wien",
      },
    ],
  },
  {
    code: "AZ",
    name: "Azerbaiyán",
    states: [
      {
        code: "AZ-NX",
        name: "Naxçıvan",
      },
    ],
  },
  {
    code: "BS",
    name: "Bahamas",
    states: [
      {
        code: "BS-AK",
        name: "Acklins",
      },
      {
        code: "BS-BY",
        name: "Berry Islands",
      },
      {
        code: "BS-BI",
        name: "Bimini",
      },
      {
        code: "BS-BP",
        name: "Black Point",
      },
      {
        code: "BS-CI",
        name: "Cat Island",
      },
      {
        code: "BS-CO",
        name: "Central Abaco",
      },
      {
        code: "BS-CS",
        name: "Central Andros",
      },
      {
        code: "BS-CE",
        name: "Central Eleuthera",
      },
      {
        code: "BS-FP",
        name: "City of Freeport",
      },
      {
        code: "BS-CK",
        name: "Crooked Island and Long Cay",
      },
      {
        code: "BS-EG",
        name: "East Grand Bahama",
      },
      {
        code: "BS-EX",
        name: "Exuma",
      },
      {
        code: "BS-GC",
        name: "Grand Cay",
      },
      {
        code: "BS-HI",
        name: "Harbour Island",
      },
      {
        code: "BS-HT",
        name: "Hope Town",
      },
      {
        code: "BS-IN",
        name: "Inagua",
      },
      {
        code: "BS-LI",
        name: "Long Island",
      },
      {
        code: "BS-MC",
        name: "Mangrove Cay",
      },
      {
        code: "BS-MG",
        name: "Mayaguana",
      },
      {
        code: "BS-MI",
        name: "Moores Island",
      },
      {
        code: "BS-NO",
        name: "North Abaco",
      },
      {
        code: "BS-NS",
        name: "North Andros",
      },
      {
        code: "BS-NE",
        name: "North Eleuthera",
      },
      {
        code: "BS-RI",
        name: "Ragged Island",
      },
      {
        code: "BS-RC",
        name: "Rum Cay",
      },
      {
        code: "BS-SS",
        name: "San Salvador",
      },
      {
        code: "BS-SO",
        name: "South Abaco",
      },
      {
        code: "BS-SA",
        name: "South Andros",
      },
      {
        code: "BS-SE",
        name: "South Eleuthera",
      },
      {
        code: "BS-SW",
        name: "Spanish Wells",
      },
      {
        code: "BS-WG",
        name: "West Grand Bahama",
      },
    ],
  },
  {
    code: "BH",
    name: "Baréin",
    states: [
      {
        code: "BH-14",
        name: "Al Janūbīyah",
      },
      {
        code: "BH-13",
        name: "Al Manāmah",
      },
      {
        code: "BH-15",
        name: "Al Muḩarraq",
      },
      {
        code: "BH-16",
        name: "Al Wusţá",
      },
      {
        code: "BH-17",
        name: "Ash Shamālīyah",
      },
    ],
  },
  {
    code: "BD",
    name: "Bangladesh",
    states: [
      {
        code: "BD-A",
        name: "Barisal",
      },
      {
        code: "BD-B",
        name: "Chittagong",
      },
      {
        code: "BD-C",
        name: "Dhaka",
      },
      {
        code: "BD-D",
        name: "Khulna",
      },
      {
        code: "BD-E",
        name: "Rajshahi",
      },
      {
        code: "BD-F",
        name: "Rangpur",
      },
      {
        code: "BD-G",
        name: "Sylhet",
      },
    ],
  },
  {
    code: "BB",
    name: "Barbados",
    states: [
      {
        code: "BB-01",
        name: "Christ Church",
      },
      {
        code: "BB-02",
        name: "Saint Andrew",
      },
      {
        code: "BB-03",
        name: "Saint George",
      },
      {
        code: "BB-04",
        name: "Saint James",
      },
      {
        code: "BB-05",
        name: "Saint John",
      },
      {
        code: "BB-06",
        name: "Saint Joseph",
      },
      {
        code: "BB-07",
        name: "Saint Lucy",
      },
      {
        code: "BB-08",
        name: "Saint Michael",
      },
      {
        code: "BB-09",
        name: "Saint Peter",
      },
      {
        code: "BB-10",
        name: "Saint Philip",
      },
      {
        code: "BB-11",
        name: "Saint Thomas",
      },
    ],
  },
  {
    code: "BY",
    name: "Bielorrusia",
    states: [
      {
        code: "BY-BR",
        name: "Brestskaya voblasts'",
      },
      {
        code: "BY-HO",
        name: "Homyel'skaya voblasts'",
      },
      {
        code: "BY-HM",
        name: "Horad Minsk",
      },
      {
        code: "BY-HR",
        name: "Hrodzenskaya voblasts'",
      },
      {
        code: "BY-MA",
        name: "Mahilyowskaya voblasts'",
      },
      {
        code: "BY-MI",
        name: "Minskaya voblasts'",
      },
      {
        code: "BY-VI",
        name: "Vitsyebskaya voblasts'",
      },
    ],
  },
  {
    code: "BE",
    name: "Bélgica",
    states: [
      {
        code: "BE-BRU",
        name: "Brussels Hoofdstedelijk Gewest",
      },
      {
        code: "BE-WAL",
        name: "Région Wallonne",
      },
      {
        code: "BE-VLG",
        name: "Vlaams Gewest",
      },
    ],
  },
  {
    code: "BZ",
    name: "Belice",
    states: [
      {
        code: "BZ-BZ",
        name: "Belize",
      },
      {
        code: "BZ-CY",
        name: "Cayo",
      },
      {
        code: "BZ-CZL",
        name: "Corozal",
      },
      {
        code: "BZ-OW",
        name: "Orange Walk",
      },
      {
        code: "BZ-SC",
        name: "Stann Creek",
      },
      {
        code: "BZ-TOL",
        name: "Toledo",
      },
    ],
  },
  {
    code: "BJ",
    name: "Benín",
    states: [
      {
        code: "BJ-AL",
        name: "Alibori",
      },
      {
        code: "BJ-AK",
        name: "Atakora",
      },
      {
        code: "BJ-AQ",
        name: "Atlantique",
      },
      {
        code: "BJ-BO",
        name: "Borgou",
      },
      {
        code: "BJ-CO",
        name: "Collines",
      },
      {
        code: "BJ-DO",
        name: "Donga",
      },
      {
        code: "BJ-KO",
        name: "Kouffo",
      },
      {
        code: "BJ-LI",
        name: "Littoral",
      },
      {
        code: "BJ-MO",
        name: "Mono",
      },
      {
        code: "BJ-OU",
        name: "Ouémé",
      },
      {
        code: "BJ-PL",
        name: "Plateau",
      },
      {
        code: "BJ-ZO",
        name: "Zou",
      },
    ],
  },
  {
    code: "BT",
    name: "Bután",
    states: [
      {
        code: "BT-33",
        name: "Bumthang",
      },
      {
        code: "BT-12",
        name: "Chhukha",
      },
      {
        code: "BT-22",
        name: "Dagana",
      },
      {
        code: "BT-GA",
        name: "Gasa",
      },
      {
        code: "BT-13",
        name: "Ha",
      },
      {
        code: "BT-44",
        name: "Lhuentse",
      },
      {
        code: "BT-42",
        name: "Monggar",
      },
      {
        code: "BT-11",
        name: "Paro",
      },
      {
        code: "BT-43",
        name: "Pemagatshel",
      },
      {
        code: "BT-23",
        name: "Punakha",
      },
      {
        code: "BT-45",
        name: "Samdrup Jongkha",
      },
      {
        code: "BT-14",
        name: "Samtse",
      },
      {
        code: "BT-31",
        name: "Sarpang",
      },
      {
        code: "BT-15",
        name: "Thimphu",
      },
      {
        code: "BT-TY",
        name: "Trashi Yangtse",
      },
      {
        code: "BT-41",
        name: "Trashigang",
      },
      {
        code: "BT-32",
        name: "Trongsa",
      },
      {
        code: "BT-21",
        name: "Tsirang",
      },
      {
        code: "BT-24",
        name: "Wangdue Phodrang",
      },
      {
        code: "BT-34",
        name: "Zhemgang",
      },
    ],
  },
  {
    code: "BO",
    name: "Bolivia",
    states: [
      {
        code: "BO-H",
        name: "Chuquisaca",
      },
      {
        code: "BO-C",
        name: "Cochabamba",
      },
      {
        code: "BO-B",
        name: "El Beni",
      },
      {
        code: "BO-L",
        name: "La Paz",
      },
      {
        code: "BO-O",
        name: "Oruro",
      },
      {
        code: "BO-N",
        name: "Pando",
      },
      {
        code: "BO-P",
        name: "Potosí",
      },
      {
        code: "BO-S",
        name: "Santa Cruz",
      },
      {
        code: "BO-T",
        name: "Tarija",
      },
    ],
  },
  {
    code: "BA",
    name: "Bosnia y Herzegovina",
    states: [
      {
        code: "BA-BRC",
        name: "Brčko distrikt",
      },
      {
        code: "BA-BIH",
        name: "Federacija Bosna i Hercegovina",
      },
      {
        code: "BA-SRP",
        name: "Republika Srpska",
      },
    ],
  },
  {
    code: "BW",
    name: "Botsuana",
    states: [
      {
        code: "BW-CE",
        name: "Central",
      },
      {
        code: "BW-CH",
        name: "Chobe",
      },
      {
        code: "BW-FR",
        name: "Francistown",
      },
      {
        code: "BW-GA",
        name: "Gaborone",
      },
      {
        code: "BW-GH",
        name: "Ghanzi",
      },
      {
        code: "BW-JW",
        name: "Jwaneng",
      },
      {
        code: "BW-KG",
        name: "Kgalagadi",
      },
      {
        code: "BW-KL",
        name: "Kgatleng",
      },
      {
        code: "BW-KW",
        name: "Kweneng",
      },
      {
        code: "BW-LO",
        name: "Lobatse",
      },
      {
        code: "BW-NE",
        name: "North-East",
      },
      {
        code: "BW-NW",
        name: "North-West",
      },
      {
        code: "BW-SP",
        name: "Selibe Phikwe",
      },
      {
        code: "BW-SE",
        name: "South-East",
      },
      {
        code: "BW-SO",
        name: "Southern",
      },
      {
        code: "BW-ST",
        name: "Sowa Town",
      },
    ],
  },
  {
    code: "BR",
    name: "Brasil",
    states: [
      {
        code: "BR-AC",
        name: "Acre",
      },
      {
        code: "BR-AL",
        name: "Alagoas",
      },
      {
        code: "BR-AP",
        name: "Amapá",
      },
      {
        code: "BR-AM",
        name: "Amazonas",
      },
      {
        code: "BR-BA",
        name: "Bahia",
      },
      {
        code: "BR-CE",
        name: "Ceará",
      },
      {
        code: "BR-DF",
        name: "Distrito Federal",
      },
      {
        code: "BR-ES",
        name: "Espírito Santo",
      },
      {
        code: "BR-GO",
        name: "Goiás",
      },
      {
        code: "BR-MA",
        name: "Maranhão",
      },
      {
        code: "BR-MT",
        name: "Mato Grosso",
      },
      {
        code: "BR-MS",
        name: "Mato Grosso do Sul",
      },
      {
        code: "BR-MG",
        name: "Minas Gerais",
      },
      {
        code: "BR-PR",
        name: "Paraná",
      },
      {
        code: "BR-PB",
        name: "Paraíba",
      },
      {
        code: "BR-PA",
        name: "Pará",
      },
      {
        code: "BR-PE",
        name: "Pernambuco",
      },
      {
        code: "BR-PI",
        name: "Piauí",
      },
      {
        code: "BR-RN",
        name: "Rio Grande do Norte",
      },
      {
        code: "BR-RS",
        name: "Rio Grande do Sul",
      },
      {
        code: "BR-RJ",
        name: "Rio de Janeiro",
      },
      {
        code: "BR-RO",
        name: "Rondônia",
      },
      {
        code: "BR-RR",
        name: "Roraima",
      },
      {
        code: "BR-SC",
        name: "Santa Catarina",
      },
      {
        code: "BR-SE",
        name: "Sergipe",
      },
      {
        code: "BR-SP",
        name: "São Paulo",
      },
      {
        code: "BR-TO",
        name: "Tocantins",
      },
    ],
  },
  {
    code: "BN",
    name: "Brunéi",
    states: [
      {
        code: "BN-BE",
        name: "Belait",
      },
      {
        code: "BN-BM",
        name: "Brunei-Muara",
      },
      {
        code: "BN-TE",
        name: "Temburong",
      },
      {
        code: "BN-TU",
        name: "Tutong",
      },
    ],
  },
  {
    code: "BG",
    name: "Bulgaria",
    states: [
      {
        code: "BG-01",
        name: "Blagoevgrad",
      },
      {
        code: "BG-02",
        name: "Burgas",
      },
      {
        code: "BG-08",
        name: "Dobrich",
      },
      {
        code: "BG-07",
        name: "Gabrovo",
      },
      {
        code: "BG-26",
        name: "Haskovo",
      },
      {
        code: "BG-09",
        name: "Kardzhali",
      },
      {
        code: "BG-10",
        name: "Kyustendil",
      },
      {
        code: "BG-11",
        name: "Lovech",
      },
      {
        code: "BG-12",
        name: "Montana",
      },
      {
        code: "BG-13",
        name: "Pazardzhik",
      },
      {
        code: "BG-14",
        name: "Pernik",
      },
      {
        code: "BG-15",
        name: "Pleven",
      },
      {
        code: "BG-16",
        name: "Plovdiv",
      },
      {
        code: "BG-17",
        name: "Razgrad",
      },
      {
        code: "BG-18",
        name: "Ruse",
      },
      {
        code: "BG-27",
        name: "Shumen",
      },
      {
        code: "BG-19",
        name: "Silistra",
      },
      {
        code: "BG-20",
        name: "Sliven",
      },
      {
        code: "BG-21",
        name: "Smolyan",
      },
      {
        code: "BG-23",
        name: "Sofia",
      },
      {
        code: "BG-22",
        name: "Sofia-Grad",
      },
      {
        code: "BG-24",
        name: "Stara Zagora",
      },
      {
        code: "BG-25",
        name: "Targovishte",
      },
      {
        code: "BG-03",
        name: "Varna",
      },
      {
        code: "BG-04",
        name: "Veliko Tarnovo",
      },
      {
        code: "BG-05",
        name: "Vidin",
      },
      {
        code: "BG-06",
        name: "Vratsa",
      },
      {
        code: "BG-28",
        name: "Yambol",
      },
    ],
  },
  {
    code: "BF",
    name: "Burkina Faso",
    states: [
      {
        code: "BF-01",
        name: "Boucle du Mouhoun",
      },
      {
        code: "BF-02",
        name: "Cascades",
      },
      {
        code: "BF-03",
        name: "Centre",
      },
      {
        code: "BF-04",
        name: "Centre-Est",
      },
      {
        code: "BF-05",
        name: "Centre-Nord",
      },
      {
        code: "BF-06",
        name: "Centre-Ouest",
      },
      {
        code: "BF-07",
        name: "Centre-Sud",
      },
      {
        code: "BF-08",
        name: "Est",
      },
      {
        code: "BF-09",
        name: "Hauts-Bassins",
      },
      {
        code: "BF-10",
        name: "Nord",
      },
      {
        code: "BF-11",
        name: "Plateau-Central",
      },
      {
        code: "BF-12",
        name: "Sahel",
      },
      {
        code: "BF-13",
        name: "Sud-Ouest",
      },
    ],
  },
  {
    code: "BI",
    name: "Burundi",
    states: [
      {
        code: "BI-BB",
        name: "Bubanza",
      },
      {
        code: "BI-BM",
        name: "Bujumbura Mairie",
      },
      {
        code: "BI-BL",
        name: "Bujumbura Rural",
      },
      {
        code: "BI-BR",
        name: "Bururi",
      },
      {
        code: "BI-CA",
        name: "Cankuzo",
      },
      {
        code: "BI-CI",
        name: "Cibitoke",
      },
      {
        code: "BI-GI",
        name: "Gitega",
      },
      {
        code: "BI-KR",
        name: "Karuzi",
      },
      {
        code: "BI-KY",
        name: "Kayanza",
      },
      {
        code: "BI-KI",
        name: "Kirundo",
      },
      {
        code: "BI-MA",
        name: "Makamba",
      },
      {
        code: "BI-MU",
        name: "Muramvya",
      },
      {
        code: "BI-MY",
        name: "Muyinga",
      },
      {
        code: "BI-MW",
        name: "Mwaro",
      },
      {
        code: "BI-NG",
        name: "Ngozi",
      },
      {
        code: "BI-RT",
        name: "Rutana",
      },
      {
        code: "BI-RY",
        name: "Ruyigi",
      },
    ],
  },
  {
    code: "KH",
    name: "Camboya",
    states: [
      {
        code: "KH-2",
        name: "Baat Dambang",
      },
      {
        code: "KH-1",
        name: "Banteay Mean Chey",
      },
      {
        code: "KH-3",
        name: "Kampong Chaam",
      },
      {
        code: "KH-4",
        name: "Kampong Chhnang",
      },
      {
        code: "KH-5",
        name: "Kampong Spueu",
      },
      {
        code: "KH-6",
        name: "Kampong Thum",
      },
      {
        code: "KH-7",
        name: "Kampot",
      },
      {
        code: "KH-8",
        name: "Kandaal",
      },
      {
        code: "KH-9",
        name: "Kaoh Kong",
      },
      {
        code: "KH-10",
        name: "Kracheh",
      },
      {
        code: "KH-23",
        name: "Krong Kaeb",
      },
      {
        code: "KH-24",
        name: "Krong Pailin",
      },
      {
        code: "KH-18",
        name: "Krong Preah Sihanouk",
      },
      {
        code: "KH-11",
        name: "Mondol Kiri",
      },
      {
        code: "KH-22",
        name: "Otdar Mean Chey",
      },
      {
        code: "KH-12",
        name: "Phnom Penh",
      },
      {
        code: "KH-15",
        name: "Pousaat",
      },
      {
        code: "KH-13",
        name: "Preah Vihear",
      },
      {
        code: "KH-14",
        name: "Prey Veaeng",
      },
      {
        code: "KH-16",
        name: "Rotanak Kiri",
      },
      {
        code: "KH-17",
        name: "Siem Reab",
      },
      {
        code: "KH-19",
        name: "Stueng Traeng",
      },
      {
        code: "KH-20",
        name: "Svaay Rieng",
      },
      {
        code: "KH-21",
        name: "Taakaev",
      },
    ],
  },
  {
    code: "CM",
    name: "Camerún",
    states: [
      {
        code: "CM-AD",
        name: "Adamaoua",
      },
      {
        code: "CM-CE",
        name: "Centre",
      },
      {
        code: "CM-ES",
        name: "East",
      },
      {
        code: "CM-EN",
        name: "Far North",
      },
      {
        code: "CM-LT",
        name: "Littoral",
      },
      {
        code: "CM-NO",
        name: "North",
      },
      {
        code: "CM-NW",
        name: "North-West",
      },
      {
        code: "CM-SU",
        name: "South",
      },
      {
        code: "CM-SW",
        name: "South-West",
      },
      {
        code: "CM-OU",
        name: "West",
      },
    ],
  },
  {
    code: "CA",
    name: "Canadá",
    states: [
      {
        code: "CA-AB",
        name: "Alberta",
      },
      {
        code: "CA-BC",
        name: "British Columbia",
      },
      {
        code: "CA-MB",
        name: "Manitoba",
      },
      {
        code: "CA-NB",
        name: "New Brunswick",
      },
      {
        code: "CA-NL",
        name: "Newfoundland and Labrador",
      },
      {
        code: "CA-NS",
        name: "Nova Scotia",
      },
      {
        code: "CA-ON",
        name: "Ontario",
      },
      {
        code: "CA-PE",
        name: "Prince Edward Island",
      },
      {
        code: "CA-QC",
        name: "Quebec",
      },
      {
        code: "CA-SK",
        name: "Saskatchewan",
      },
      {
        code: "CA-NT",
        name: "Northwest Territories",
      },
      {
        code: "CA-NU",
        name: "Nunavut",
      },
      {
        code: "CA-YT",
        name: "Yukon",
      },
    ],
  },
  {
    code: "CV",
    name: "Cabo Verde",
    states: [
      {
        code: "CV-B",
        name: "Ilhas de Barlavento",
      },
      {
        code: "CV-S",
        name: "Ilhas de Sotavento",
      },
    ],
  },
  {
    code: "CF",
    name: "República Centroafricana",
    states: [
      {
        code: "CF-BB",
        name: "Bamingui-Bangoran",
      },
      {
        code: "CF-BGF",
        name: "Bangui",
      },
      {
        code: "CF-BK",
        name: "Basse-Kotto",
      },
      {
        code: "CF-KB",
        name: "Gribingui",
      },
      {
        code: "CF-HM",
        name: "Haut-Mbomou",
      },
      {
        code: "CF-HK",
        name: "Haute-Kotto",
      },
      {
        code: "CF-HS",
        name: "Haute-Sangha / Mambéré-Kadéï",
      },
      {
        code: "CF-KG",
        name: "Kémo-Gribingui",
      },
      {
        code: "CF-LB",
        name: "Lobaye",
      },
      {
        code: "CF-MB",
        name: "Mbomou",
      },
      {
        code: "CF-NM",
        name: "Nana-Mambéré",
      },
      {
        code: "CF-MP",
        name: "Ombella-Mpoko",
      },
      {
        code: "CF-UK",
        name: "Ouaka",
      },
      {
        code: "CF-AC",
        name: "Ouham",
      },
      {
        code: "CF-OP",
        name: "Ouham-Pendé",
      },
      {
        code: "CF-SE",
        name: "Sangha",
      },
      {
        code: "CF-VK",
        name: "Vakaga",
      },
    ],
  },
  {
    code: "TD",
    name: "Chad",
    states: [
      {
        code: "TD-BA",
        name: "Al Baṭḩah",
      },
      {
        code: "TD-LC",
        name: "Al Buḩayrah",
      },
      {
        code: "TD-BG",
        name: "Baḩr al Ghazāl",
      },
      {
        code: "TD-BO",
        name: "Būrkū",
      },
      {
        code: "TD-EN",
        name: "Innīdī",
      },
      {
        code: "TD-KA",
        name: "Kānim",
      },
      {
        code: "TD-LO",
        name: "Lūqūn al Gharbī",
      },
      {
        code: "TD-LR",
        name: "Lūqūn ash Sharqī",
      },
      {
        code: "TD-ND",
        name: "Madīnat Injamīnā",
      },
      {
        code: "TD-MA",
        name: "Māndūl",
      },
      {
        code: "TD-MO",
        name: "Māyū Kībbī al Gharbī",
      },
      {
        code: "TD-ME",
        name: "Māyū Kībbī ash Sharqī",
      },
      {
        code: "TD-GR",
        name: "Qīrā",
      },
      {
        code: "TD-SA",
        name: "Salāmāt",
      },
      {
        code: "TD-CB",
        name: "Shārī Bāqirmī",
      },
      {
        code: "TD-MC",
        name: "Shārī al Awsaṭ",
      },
      {
        code: "TD-SI",
        name: "Sīlā",
      },
      {
        code: "TD-TI",
        name: "Tibastī",
      },
      {
        code: "TD-TA",
        name: "Tānjilī",
      },
      {
        code: "TD-OD",
        name: "Waddāy",
      },
      {
        code: "TD-WF",
        name: "Wādī Fīrā",
      },
      {
        code: "TD-HL",
        name: "Ḥajjar Lamīs",
      },
    ],
  },
  {
    code: "CL",
    name: "Chile",
    states: [
      {
        code: "CL-AI",
        name: "Aisén del General Carlos Ibañez del Campo",
      },
      {
        code: "CL-AN",
        name: "Antofagasta",
      },
      {
        code: "CL-AR",
        name: "Araucanía",
      },
      {
        code: "CL-AP",
        name: "Arica y Parinacota",
      },
      {
        code: "CL-AT",
        name: "Atacama",
      },
      {
        code: "CL-BI",
        name: "Bío-Bío",
      },
      {
        code: "CL-CO",
        name: "Coquimbo",
      },
      {
        code: "CL-LI",
        name: "Libertador General Bernardo O'Higgins",
      },
      {
        code: "CL-LL",
        name: "Los Lagos",
      },
      {
        code: "CL-LR",
        name: "Los Ríos",
      },
      {
        code: "CL-MA",
        name: "Magallanes",
      },
      {
        code: "CL-ML",
        name: "Maule",
      },
      {
        code: "CL-RM",
        name: "Región Metropolitana de Santiago",
      },
      {
        code: "CL-TA",
        name: "Tarapacá",
      },
      {
        code: "CL-VS",
        name: "Valparaíso",
      },
    ],
  },
  {
    code: "CN",
    name: "China",
    states: [
      {
        code: "CN-45",
        name: "Guangxi",
      },
      {
        code: "CN-15",
        name: "Nei Mongol",
      },
      {
        code: "CN-64",
        name: "Ningxia",
      },
      {
        code: "CN-65",
        name: "Xinjiang",
      },
      {
        code: "CN-54",
        name: "Xizang",
      },
      {
        code: "CN-11",
        name: "Beijing",
      },
      {
        code: "CN-50",
        name: "Chongqing",
      },
      {
        code: "CN-31",
        name: "Shanghai",
      },
      {
        code: "CN-12",
        name: "Tianjin",
      },
      {
        code: "CN-34",
        name: "Anhui",
      },
      {
        code: "CN-35",
        name: "Fujian",
      },
      {
        code: "CN-62",
        name: "Gansu",
      },
      {
        code: "CN-44",
        name: "Guangdong",
      },
      {
        code: "CN-52",
        name: "Guizhou",
      },
      {
        code: "CN-46",
        name: "Hainan",
      },
      {
        code: "CN-13",
        name: "Hebei",
      },
      {
        code: "CN-23",
        name: "Heilongjiang",
      },
      {
        code: "CN-41",
        name: "Henan",
      },
      {
        code: "CN-42",
        name: "Hubei",
      },
      {
        code: "CN-43",
        name: "Hunan",
      },
      {
        code: "CN-32",
        name: "Jiangsu",
      },
      {
        code: "CN-36",
        name: "Jiangxi",
      },
      {
        code: "CN-22",
        name: "Jilin",
      },
      {
        code: "CN-21",
        name: "Liaoning",
      },
      {
        code: "CN-63",
        name: "Qinghai",
      },
      {
        code: "CN-61",
        name: "Shaanxi",
      },
      {
        code: "CN-37",
        name: "Shandong",
      },
      {
        code: "CN-14",
        name: "Shanxi",
      },
      {
        code: "CN-51",
        name: "Sichuan",
      },
      {
        code: "CN-71",
        name: "Taiwan",
      },
      {
        code: "CN-53",
        name: "Yunnan",
      },
      {
        code: "CN-33",
        name: "Zhejiang",
      },
      {
        code: "CN-91",
        name: "Hong Kong",
      },
      {
        code: "CN-92",
        name: "Macao",
      },
    ],
  },
  {
    code: "CO",
    name: "Colombia",
    states: [
      {
        code: "CO-AMA",
        name: "Amazonas",
      },
      {
        code: "CO-ANT",
        name: "Antioquia",
      },
      {
        code: "CO-ARA",
        name: "Arauca",
      },
      {
        code: "CO-ATL",
        name: "Atlántico",
      },
      {
        code: "CO-BOL",
        name: "Bolívar",
      },
      {
        code: "CO-BOY",
        name: "Boyacá",
      },
      {
        code: "CO-CAL",
        name: "Caldas",
      },
      {
        code: "CO-CAQ",
        name: "Caquetá",
      },
      {
        code: "CO-CAS",
        name: "Casanare",
      },
      {
        code: "CO-CAU",
        name: "Cauca",
      },
      {
        code: "CO-CES",
        name: "Cesar",
      },
      {
        code: "CO-CHO",
        name: "Chocó",
      },
      {
        code: "CO-CUN",
        name: "Cundinamarca",
      },
      {
        code: "CO-COR",
        name: "Córdoba",
      },
      {
        code: "CO-DC",
        name: "Distrito Capital de Bogotá",
      },
      {
        code: "CO-GUA",
        name: "Guainía",
      },
      {
        code: "CO-GUV",
        name: "Guaviare",
      },
      {
        code: "CO-HUI",
        name: "Huila",
      },
      {
        code: "CO-LAG",
        name: "La Guajira",
      },
      {
        code: "CO-MAG",
        name: "Magdalena",
      },
      {
        code: "CO-MET",
        name: "Meta",
      },
      {
        code: "CO-NAR",
        name: "Nariño",
      },
      {
        code: "CO-NSA",
        name: "Norte de Santander",
      },
      {
        code: "CO-PUT",
        name: "Putumayo",
      },
      {
        code: "CO-QUI",
        name: "Quindío",
      },
      {
        code: "CO-RIS",
        name: "Risaralda",
      },
      {
        code: "CO-SAP",
        name: "San Andrés, Providencia y Santa Catalina",
      },
      {
        code: "CO-SAN",
        name: "Santander",
      },
      {
        code: "CO-SUC",
        name: "Sucre",
      },
      {
        code: "CO-TOL",
        name: "Tolima",
      },
      {
        code: "CO-VAC",
        name: "Valle del Cauca",
      },
      {
        code: "CO-VAU",
        name: "Vaupés",
      },
      {
        code: "CO-VID",
        name: "Vichada",
      },
    ],
  },
  {
    code: "KM",
    name: "Comoras",
    states: [
      {
        code: "KM-A",
        name: "Anjouan",
      },
      {
        code: "KM-G",
        name: "Grande Comore",
      },
      {
        code: "KM-M",
        name: "Mohéli",
      },
    ],
  },
  {
    code: "CD",
    name: "República Democrática del Congo",
    states: [
      {
        code: "CD-BN",
        name: "Bandundu",
      },
      {
        code: "CD-BC",
        name: "Bas-Congo",
      },
      {
        code: "CD-KW",
        name: "Kasai-Occidental",
      },
      {
        code: "CD-KE",
        name: "Kasai-Oriental",
      },
      {
        code: "CD-KA",
        name: "Katanga",
      },
      {
        code: "CD-KN",
        name: "Kinshasa",
      },
      {
        code: "CD-MA",
        name: "Maniema",
      },
      {
        code: "CD-NK",
        name: "Nord-Kivu",
      },
      {
        code: "CD-OR",
        name: "Orientale",
      },
      {
        code: "CD-SK",
        name: "Sud-Kivu",
      },
      {
        code: "CD-EQ",
        name: "Équateur",
      },
    ],
  },
  {
    code: "CG",
    name: "Congo",
    states: [
      {
        code: "CG-11",
        name: "Bouenza",
      },
      {
        code: "CG-BZV",
        name: "Brazzaville",
      },
      {
        code: "CG-8",
        name: "Cuvette",
      },
      {
        code: "CG-15",
        name: "Cuvette-Ouest",
      },
      {
        code: "CG-5",
        name: "Kouilou",
      },
      {
        code: "CG-7",
        name: "Likouala",
      },
      {
        code: "CG-2",
        name: "Lékoumou",
      },
      {
        code: "CG-9",
        name: "Niari",
      },
      {
        code: "CG-14",
        name: "Plateaux",
      },
      {
        code: "CG-16",
        name: "Pointe-Noire",
      },
      {
        code: "CG-12",
        name: "Pool",
      },
      {
        code: "CG-13",
        name: "Sangha",
      },
    ],
  },
  {
    code: "CR",
    name: "Costa Rica",
    states: [
      {
        code: "CR-A",
        name: "Alajuela",
      },
      {
        code: "CR-C",
        name: "Cartago",
      },
      {
        code: "CR-G",
        name: "Guanacaste",
      },
      {
        code: "CR-H",
        name: "Heredia",
      },
      {
        code: "CR-L",
        name: "Limón",
      },
      {
        code: "CR-P",
        name: "Puntarenas",
      },
      {
        code: "CR-SJ",
        name: "San José",
      },
    ],
  },
  {
    code: "CI",
    name: "Costa de Marfil",
    states: [
      {
        code: "CI-06",
        name: "18 Montagnes",
      },
      {
        code: "CI-16",
        name: "Agnébi",
      },
      {
        code: "CI-17",
        name: "Bafing",
      },
      {
        code: "CI-09",
        name: "Bas-Sassandra",
      },
      {
        code: "CI-10",
        name: "Denguélé",
      },
      {
        code: "CI-18",
        name: "Fromager",
      },
      {
        code: "CI-02",
        name: "Haut-Sassandra",
      },
      {
        code: "CI-07",
        name: "Lacs",
      },
      {
        code: "CI-01",
        name: "Lagunes",
      },
      {
        code: "CI-12",
        name: "Marahoué",
      },
      {
        code: "CI-19",
        name: "Moyen-Cavally",
      },
      {
        code: "CI-05",
        name: "Moyen-Comoé",
      },
      {
        code: "CI-11",
        name: "Nzi-Comoé",
      },
      {
        code: "CI-03",
        name: "Savanes",
      },
      {
        code: "CI-15",
        name: "Sud-Bandama",
      },
      {
        code: "CI-13",
        name: "Sud-Comoé",
      },
      {
        code: "CI-04",
        name: "Vallée du Bandama",
      },
      {
        code: "CI-14",
        name: "Worodougou",
      },
      {
        code: "CI-08",
        name: "Zanzan",
      },
    ],
  },
  {
    code: "HR",
    name: "Croacia",
    states: [
      {
        code: "HR-07",
        name: "Bjelovarsko-bilogorska županija",
      },
      {
        code: "HR-12",
        name: "Brodsko-posavska županija",
      },
      {
        code: "HR-19",
        name: "Dubrovačko-neretvanska županija",
      },
      {
        code: "HR-21",
        name: "Grad Zagreb",
      },
      {
        code: "HR-18",
        name: "Istarska županija",
      },
      {
        code: "HR-04",
        name: "Karlovačka županija",
      },
      {
        code: "HR-06",
        name: "Koprivničko-križevačka županija",
      },
      {
        code: "HR-02",
        name: "Krapinsko-zagorska županija",
      },
      {
        code: "HR-09",
        name: "Ličko-senjska županija",
      },
      {
        code: "HR-20",
        name: "Međimurska županija",
      },
      {
        code: "HR-14",
        name: "Osječko-baranjska županija",
      },
      {
        code: "HR-11",
        name: "Požeško-slavonska županija",
      },
      {
        code: "HR-08",
        name: "Primorsko-goranska županija",
      },
      {
        code: "HR-03",
        name: "Sisačko-moslavačka županija",
      },
      {
        code: "HR-17",
        name: "Splitsko-dalmatinska županija",
      },
      {
        code: "HR-05",
        name: "Varaždinska županija",
      },
      {
        code: "HR-10",
        name: "Virovitičko-podravska županija",
      },
      {
        code: "HR-16",
        name: "Vukovarsko-srijemska županija",
      },
      {
        code: "HR-13",
        name: "Zadarska županija",
      },
      {
        code: "HR-01",
        name: "Zagrebačka županija",
      },
      {
        code: "HR-15",
        name: "Šibensko-kninska županija",
      },
    ],
  },
  {
    code: "CU",
    name: "Cuba",
    states: [
      {
        code: "CU-15",
        name: "Artemisa",
      },
      {
        code: "CU-09",
        name: "Camagüey",
      },
      {
        code: "CU-08",
        name: "Ciego de Ávila",
      },
      {
        code: "CU-06",
        name: "Cienfuegos",
      },
      {
        code: "CU-12",
        name: "Granma",
      },
      {
        code: "CU-14",
        name: "Guantánamo",
      },
      {
        code: "CU-11",
        name: "Holguín",
      },
      {
        code: "CU-99",
        name: "Isla de la Juventud",
      },
      {
        code: "CU-03",
        name: "La Habana",
      },
      {
        code: "CU-10",
        name: "Las Tunas",
      },
      {
        code: "CU-04",
        name: "Matanzas",
      },
      {
        code: "CU-16",
        name: "Mayabeque",
      },
      {
        code: "CU-01",
        name: "Pinar del Río",
      },
      {
        code: "CU-07",
        name: "Sancti Spíritus",
      },
      {
        code: "CU-13",
        name: "Santiago de Cuba",
      },
      {
        code: "CU-05",
        name: "Villa Clara",
      },
    ],
  },
  {
    code: "CY",
    name: "Chipre",
    states: [
      {
        code: "CY-04",
        name: "Ammochostos",
      },
      {
        code: "CY-06",
        name: "Keryneia",
      },
      {
        code: "CY-03",
        name: "Larnaka",
      },
      {
        code: "CY-01",
        name: "Lefkosia",
      },
      {
        code: "CY-02",
        name: "Lemesos",
      },
      {
        code: "CY-05",
        name: "Pafos",
      },
    ],
  },
  {
    code: "CZ",
    name: "República Checa",
    states: [
      {
        code: "CZ-JM",
        name: "Jihomoravský kraj",
      },
      {
        code: "CZ-JC",
        name: "Jihočeský kraj",
      },
      {
        code: "CZ-KA",
        name: "Karlovarský kraj",
      },
      {
        code: "CZ-KR",
        name: "Královéhradecký kraj",
      },
      {
        code: "CZ-LI",
        name: "Liberecký kraj",
      },
      {
        code: "CZ-MO",
        name: "Moravskoslezský kraj",
      },
      {
        code: "CZ-OL",
        name: "Olomoucký kraj",
      },
      {
        code: "CZ-PA",
        name: "Pardubický kraj",
      },
      {
        code: "CZ-PL",
        name: "Plzeňský kraj",
      },
      {
        code: "CZ-PR",
        name: "Praha, hlavní město",
      },
      {
        code: "CZ-ST",
        name: "Středočeský kraj",
      },
      {
        code: "CZ-VY",
        name: "Vysočina",
      },
      {
        code: "CZ-ZL",
        name: "Zlínský kraj",
      },
      {
        code: "CZ-US",
        name: "Ústecký kraj",
      },
    ],
  },
  {
    code: "DK",
    name: "Dinamarca",
    states: [
      {
        code: "DK-84",
        name: "Hovedstaden",
      },
      {
        code: "DK-82",
        name: "Midtjylland",
      },
      {
        code: "DK-81",
        name: "Nordjylland",
      },
      {
        code: "DK-85",
        name: "Sjælland",
      },
      {
        code: "DK-83",
        name: "Syddanmark",
      },
    ],
  },
  {
    code: "DJ",
    name: "Yibuti",
    states: [
      {
        code: "DJ-AS",
        name: "Ali Sabieh",
      },
      {
        code: "DJ-AR",
        name: "Arta",
      },
      {
        code: "DJ-DI",
        name: "Dikhil",
      },
      {
        code: "DJ-DJ",
        name: "Djibouti",
      },
      {
        code: "DJ-OB",
        name: "Obock",
      },
      {
        code: "DJ-TA",
        name: "Tadjourah",
      },
    ],
  },
  {
    code: "DM",
    name: "Dominica",
    states: [
      {
        code: "DM-02",
        name: "Saint Andrew",
      },
      {
        code: "DM-03",
        name: "Saint David",
      },
      {
        code: "DM-04",
        name: "Saint George",
      },
      {
        code: "DM-05",
        name: "Saint John",
      },
      {
        code: "DM-06",
        name: "Saint Joseph",
      },
      {
        code: "DM-07",
        name: "Saint Luke",
      },
      {
        code: "DM-08",
        name: "Saint Mark",
      },
      {
        code: "DM-09",
        name: "Saint Patrick",
      },
      {
        code: "DM-10",
        name: "Saint Paul",
      },
      {
        code: "DM-11",
        name: "Saint Peter",
      },
    ],
  },
  {
    code: "DO",
    name: "República Dominicana",
    states: [
      {
        code: "DO-33",
        name: "Cibao Nordeste",
      },
      {
        code: "DO-34",
        name: "Cibao Noroeste",
      },
      {
        code: "DO-35",
        name: "Cibao Norte",
      },
      {
        code: "DO-36",
        name: "Cibao Sur",
      },
      {
        code: "DO-37",
        name: "El Valle",
      },
      {
        code: "DO-38",
        name: "Enriquillo",
      },
      {
        code: "DO-39",
        name: "Higuamo",
      },
      {
        code: "DO-40",
        name: "Ozama",
      },
      {
        code: "DO-41",
        name: "Valdesia",
      },
      {
        code: "DO-42",
        name: "Yuma",
      },
    ],
  },
  {
    code: "EC",
    name: "Ecuador",
    states: [
      {
        code: "EC-A",
        name: "Azuay",
      },
      {
        code: "EC-B",
        name: "Bolívar",
      },
      {
        code: "EC-C",
        name: "Carchi",
      },
      {
        code: "EC-F",
        name: "Cañar",
      },
      {
        code: "EC-H",
        name: "Chimborazo",
      },
      {
        code: "EC-X",
        name: "Cotopaxi",
      },
      {
        code: "EC-O",
        name: "El Oro",
      },
      {
        code: "EC-E",
        name: "Esmeraldas",
      },
      {
        code: "EC-W",
        name: "Galápagos",
      },
      {
        code: "EC-G",
        name: "Guayas",
      },
      {
        code: "EC-I",
        name: "Imbabura",
      },
      {
        code: "EC-L",
        name: "Loja",
      },
      {
        code: "EC-R",
        name: "Los Ríos",
      },
      {
        code: "EC-M",
        name: "Manabí",
      },
      {
        code: "EC-S",
        name: "Morona-Santiago",
      },
      {
        code: "EC-N",
        name: "Napo",
      },
      {
        code: "EC-D",
        name: "Orellana",
      },
      {
        code: "EC-Y",
        name: "Pastaza",
      },
      {
        code: "EC-P",
        name: "Pichincha",
      },
      {
        code: "EC-SE",
        name: "Santa Elena",
      },
      {
        code: "EC-SD",
        name: "Santo Domingo de los Tsáchilas",
      },
      {
        code: "EC-U",
        name: "Sucumbíos",
      },
      {
        code: "EC-T",
        name: "Tungurahua",
      },
      {
        code: "EC-Z",
        name: "Zamora-Chinchipe",
      },
    ],
  },
  {
    code: "EG",
    name: "Egipto",
    states: [
      {
        code: "EG-DK",
        name: "Ad Daqahlīyah",
      },
      {
        code: "EG-BA",
        name: "Al Baḩr al Aḩmar",
      },
      {
        code: "EG-BH",
        name: "Al Buḩayrah",
      },
      {
        code: "EG-FYM",
        name: "Al Fayyūm",
      },
      {
        code: "EG-GH",
        name: "Al Gharbīyah",
      },
      {
        code: "EG-ALX",
        name: "Al Iskandarīyah",
      },
      {
        code: "EG-IS",
        name: "Al Ismāٰīlīyah",
      },
      {
        code: "EG-GZ",
        name: "Al Jīzah",
      },
      {
        code: "EG-MN",
        name: "Al Minyā",
      },
      {
        code: "EG-MNF",
        name: "Al Minūfīyah",
      },
      {
        code: "EG-KB",
        name: "Al Qalyūbīyah",
      },
      {
        code: "EG-C",
        name: "Al Qāhirah",
      },
      {
        code: "EG-LX",
        name: "Al Uqşur",
      },
      {
        code: "EG-WAD",
        name: "Al Wādī al Jadīd",
      },
      {
        code: "EG-SUZ",
        name: "As Suways",
      },
      {
        code: "EG-SU",
        name: "As Sādis min Uktūbar",
      },
      {
        code: "EG-SHR",
        name: "Ash Sharqīyah",
      },
      {
        code: "EG-ASN",
        name: "Aswān",
      },
      {
        code: "EG-AST",
        name: "Asyūţ",
      },
      {
        code: "EG-BNS",
        name: "Banī Suwayf",
      },
      {
        code: "EG-PTS",
        name: "Būr Saٰīd",
      },
      {
        code: "EG-DT",
        name: "Dumyāţ",
      },
      {
        code: "EG-JS",
        name: "Janūb Sīnā'",
      },
      {
        code: "EG-KFS",
        name: "Kafr ash Shaykh",
      },
      {
        code: "EG-MT",
        name: "Maţrūḩ",
      },
      {
        code: "EG-KN",
        name: "Qinā",
      },
      {
        code: "EG-SIN",
        name: "Shamāl Sīnā'",
      },
      {
        code: "EG-SHG",
        name: "Sūhāj",
      },
      {
        code: "EG-HU",
        name: "Ḩulwān",
      },
    ],
  },
  {
    code: "SV",
    name: "El Salvador",
    states: [
      {
        code: "SV-AH",
        name: "Ahuachapán",
      },
      {
        code: "SV-CA",
        name: "Cabañas",
      },
      {
        code: "SV-CH",
        name: "Chalatenango",
      },
      {
        code: "SV-CU",
        name: "Cuscatlán",
      },
      {
        code: "SV-LI",
        name: "La Libertad",
      },
      {
        code: "SV-PA",
        name: "La Paz",
      },
      {
        code: "SV-UN",
        name: "La Unión",
      },
      {
        code: "SV-MO",
        name: "Morazán",
      },
      {
        code: "SV-SM",
        name: "San Miguel",
      },
      {
        code: "SV-SS",
        name: "San Salvador",
      },
      {
        code: "SV-SV",
        name: "San Vicente",
      },
      {
        code: "SV-SA",
        name: "Santa Ana",
      },
      {
        code: "SV-SO",
        name: "Sonsonate",
      },
      {
        code: "SV-US",
        name: "Usulután",
      },
    ],
  },
  {
    code: "GQ",
    name: "Guinea Ecuatorial",
    states: [
      {
        code: "GQ-C",
        name: "Región Continental",
      },
      {
        code: "GQ-I",
        name: "Región Insular",
      },
    ],
  },
  {
    code: "ER",
    name: "Eritrea",
    states: [
      {
        code: "ER-MA",
        name: "Al Awsaţ",
      },
      {
        code: "ER-DU",
        name: "Al Janūbĩ",
      },
      {
        code: "ER-AN",
        name: "Ansabā",
      },
      {
        code: "ER-DK",
        name: "Janūbī al Baḩrī al Aḩmar",
      },
      {
        code: "ER-GB",
        name: "Qāsh-Barkah",
      },
      {
        code: "ER-SK",
        name: "Shimālī al Baḩrī al Aḩmar",
      },
    ],
  },
  {
    code: "EE",
    name: "Estonia",
    states: [
      {
        code: "EE-37",
        name: "Harjumaa",
      },
      {
        code: "EE-39",
        name: "Hiiumaa",
      },
      {
        code: "EE-44",
        name: "Ida-Virumaa",
      },
      {
        code: "EE-51",
        name: "Järvamaa",
      },
      {
        code: "EE-49",
        name: "Jõgevamaa",
      },
      {
        code: "EE-59",
        name: "Lääne-Virumaa",
      },
      {
        code: "EE-57",
        name: "Läänemaa",
      },
      {
        code: "EE-67",
        name: "Pärnumaa",
      },
      {
        code: "EE-65",
        name: "Põlvamaa",
      },
      {
        code: "EE-70",
        name: "Raplamaa",
      },
      {
        code: "EE-74",
        name: "Saaremaa",
      },
      {
        code: "EE-78",
        name: "Tartumaa",
      },
      {
        code: "EE-82",
        name: "Valgamaa",
      },
      {
        code: "EE-84",
        name: "Viljandimaa",
      },
      {
        code: "EE-86",
        name: "Võrumaa",
      },
    ],
  },
  {
    code: "ET",
    name: "Etiopía",
    states: [
      {
        code: "ET-BE",
        name: "Bīnshangul Gumuz",
      },
      {
        code: "ET-DD",
        name: "Dirē Dawa",
      },
      {
        code: "ET-GA",
        name: "Gambēla Hizboch",
      },
      {
        code: "ET-HA",
        name: "Hārerī Hizb",
      },
      {
        code: "ET-OR",
        name: "Oromīya",
      },
      {
        code: "ET-SO",
        name: "Sumalē",
      },
      {
        code: "ET-TI",
        name: "Tigray",
      },
      {
        code: "ET-SN",
        name: "YeDebub Bihēroch Bihēreseboch na Hizboch",
      },
      {
        code: "ET-AA",
        name: "Ādīs Ābeba",
      },
      {
        code: "ET-AF",
        name: "Āfar",
      },
      {
        code: "ET-AM",
        name: "Āmara",
      },
    ],
  },
  {
    code: "FJ",
    name: "Fiyi",
    states: [
      {
        code: "FJ-C",
        name: "Central",
      },
      {
        code: "FJ-E",
        name: "Eastern",
      },
      {
        code: "FJ-N",
        name: "Northern",
      },
      {
        code: "FJ-R",
        name: "Rotuma",
      },
      {
        code: "FJ-W",
        name: "Western",
      },
    ],
  },
  {
    code: "FI",
    name: "Finlandia",
    states: [
      {
        code: "FI-01",
        name: "Ahvenanmaan maakunta",
      },
      {
        code: "FI-02",
        name: "Etelä-Karjala",
      },
      {
        code: "FI-03",
        name: "Etelä-Pohjanmaa",
      },
      {
        code: "FI-04",
        name: "Etelä-Savo",
      },
      {
        code: "FI-05",
        name: "Kainuu",
      },
      {
        code: "FI-06",
        name: "Kanta-Häme",
      },
      {
        code: "FI-07",
        name: "Keski-Pohjanmaa",
      },
      {
        code: "FI-08",
        name: "Keski-Suomi",
      },
      {
        code: "FI-09",
        name: "Kymenlaakso",
      },
      {
        code: "FI-10",
        name: "Lappi",
      },
      {
        code: "FI-11",
        name: "Pirkanmaa",
      },
      {
        code: "FI-12",
        name: "Pohjanmaa",
      },
      {
        code: "FI-13",
        name: "Pohjois-Karjala",
      },
      {
        code: "FI-14",
        name: "Pohjois-Pohjanmaa",
      },
      {
        code: "FI-15",
        name: "Pohjois-Savo",
      },
      {
        code: "FI-16",
        name: "Päijät-Häme",
      },
      {
        code: "FI-17",
        name: "Satakunta",
      },
      {
        code: "FI-18",
        name: "Uusimaa",
      },
      {
        code: "FI-19",
        name: "Varsinais-Suomi",
      },
    ],
  },
  {
    code: "FR",
    name: "Francia",
    states: [
      {
        code: "FR-A",
        name: "Alsace",
      },
      {
        code: "FR-B",
        name: "Aquitaine",
      },
      {
        code: "FR-C",
        name: "Auvergne",
      },
      {
        code: "FR-E",
        name: "Brittany",
      },
      {
        code: "FR-D",
        name: "Burgundy",
      },
      {
        code: "FR-F",
        name: "Centre-Val de Loire",
      },
      {
        code: "FR-G",
        name: "Champagne-Ardenne",
      },
      {
        code: "FR-H",
        name: "Corsica",
      },
      {
        code: "FR-I",
        name: "Franche-Comté",
      },
      {
        code: "FR-K",
        name: "Languedoc-Roussillon",
      },
      {
        code: "FR-L",
        name: "Limousin",
      },
      {
        code: "FR-M",
        name: "Lorraine",
      },
      {
        code: "FR-P",
        name: "Lower Normandy",
      },
      {
        code: "FR-N",
        name: "Midi-Pyrénées",
      },
      {
        code: "FR-O",
        name: "Nord-Pas-de-Calais",
      },
      {
        code: "FR-R",
        name: "Pays de la Loire",
      },
      {
        code: "FR-S",
        name: "Picardy",
      },
      {
        code: "FR-T",
        name: "Poitou-Charentes",
      },
      {
        code: "FR-U",
        name: "Provence-Alpes-Côte d'Azur",
      },
      {
        code: "FR-V",
        name: "Rhône-Alpes",
      },
      {
        code: "FR-Q",
        name: "Upper Normandy",
      },
      {
        code: "FR-J",
        name: "Île-de-France",
      },
    ],
  },
  {
    code: "GA",
    name: "Gabón",
    states: [
      {
        code: "GA-1",
        name: "Estuaire",
      },
      {
        code: "GA-2",
        name: "Haut-Ogooué",
      },
      {
        code: "GA-3",
        name: "Moyen-Ogooué",
      },
      {
        code: "GA-4",
        name: "Ngounié",
      },
      {
        code: "GA-5",
        name: "Nyanga",
      },
      {
        code: "GA-6",
        name: "Ogooué-Ivindo",
      },
      {
        code: "GA-7",
        name: "Ogooué-Lolo",
      },
      {
        code: "GA-8",
        name: "Ogooué-Maritime",
      },
      {
        code: "GA-9",
        name: "Woleu-Ntem",
      },
    ],
  },
  {
    code: "GM",
    name: "Gambia",
    states: [
      {
        code: "GM-B",
        name: "Banjul",
      },
      {
        code: "GM-M",
        name: "Central River",
      },
      {
        code: "GM-L",
        name: "Lower River",
      },
      {
        code: "GM-N",
        name: "North Bank",
      },
      {
        code: "GM-U",
        name: "Upper River",
      },
      {
        code: "GM-W",
        name: "Western",
      },
    ],
  },
  {
    code: "GE",
    name: "Georgia",
    states: [
      {
        code: "GE-AB",
        name: "Abkhazia",
      },
      {
        code: "GE-AJ",
        name: "Ajaria",
      },
      {
        code: "GE-GU",
        name: "Guria",
      },
      {
        code: "GE-IM",
        name: "Imereti",
      },
      {
        code: "GE-KA",
        name: "K'akheti",
      },
      {
        code: "GE-KK",
        name: "Kvemo Kartli",
      },
      {
        code: "GE-MM",
        name: "Mtskheta-Mtianeti",
      },
      {
        code: "GE-RL",
        name: "Rach'a-Lechkhumi-Kvemo Svaneti",
      },
      {
        code: "GE-SZ",
        name: "Samegrelo-Zemo Svaneti",
      },
      {
        code: "GE-SJ",
        name: "Samtskhe-Javakheti",
      },
      {
        code: "GE-SK",
        name: "Shida Kartli",
      },
      {
        code: "GE-TB",
        name: "Tbilisi",
      },
    ],
  },
  {
    code: "DE",
    name: "Alemania",
    states: [
      {
        code: "DE-BW",
        name: "Baden-Württemberg",
      },
      {
        code: "DE-BY",
        name: "Bayern",
      },
      {
        code: "DE-BE",
        name: "Berlin",
      },
      {
        code: "DE-BB",
        name: "Brandenburg",
      },
      {
        code: "DE-HB",
        name: "Bremen",
      },
      {
        code: "DE-HH",
        name: "Hamburg",
      },
      {
        code: "DE-HE",
        name: "Hessen",
      },
      {
        code: "DE-MV",
        name: "Mecklenburg-Vorpommern",
      },
      {
        code: "DE-NI",
        name: "Niedersachsen",
      },
      {
        code: "DE-NW",
        name: "Nordrhein-Westfalen",
      },
      {
        code: "DE-RP",
        name: "Rheinland-Pfalz",
      },
      {
        code: "DE-SL",
        name: "Saarland",
      },
      {
        code: "DE-SN",
        name: "Sachsen",
      },
      {
        code: "DE-ST",
        name: "Sachsen-Anhalt",
      },
      {
        code: "DE-SH",
        name: "Schleswig-Holstein",
      },
      {
        code: "DE-TH",
        name: "Thüringen",
      },
    ],
  },
  {
    code: "GH",
    name: "Ghana",
    states: [
      {
        code: "GH-AH",
        name: "Ashanti",
      },
      {
        code: "GH-BA",
        name: "Brong-Ahafo",
      },
      {
        code: "GH-CP",
        name: "Central",
      },
      {
        code: "GH-EP",
        name: "Eastern",
      },
      {
        code: "GH-AA",
        name: "Greater Accra",
      },
      {
        code: "GH-NP",
        name: "Northern",
      },
      {
        code: "GH-UE",
        name: "Upper East",
      },
      {
        code: "GH-UW",
        name: "Upper West",
      },
      {
        code: "GH-TV",
        name: "Volta",
      },
      {
        code: "GH-WP",
        name: "Western",
      },
    ],
  },
  {
    code: "GR",
    name: "Grecia",
    states: [
      {
        code: "GR-A",
        name: "Anatoliki Makedonia kai Thraki",
      },
      {
        code: "GR-I",
        name: "Attiki",
      },
      {
        code: "GR-G",
        name: "Dytiki Ellada",
      },
      {
        code: "GR-C",
        name: "Dytiki Makedonia",
      },
      {
        code: "GR-F",
        name: "Ionia Nisia",
      },
      {
        code: "GR-D",
        name: "Ipeiros",
      },
      {
        code: "GR-B",
        name: "Kentriki Makedonia",
      },
      {
        code: "GR-M",
        name: "Kriti",
      },
      {
        code: "GR-L",
        name: "Notio Aigaio",
      },
      {
        code: "GR-J",
        name: "Peloponnisos",
      },
      {
        code: "GR-H",
        name: "Sterea Ellada",
      },
      {
        code: "GR-E",
        name: "Thessalia",
      },
      {
        code: "GR-K",
        name: "Voreio Aigaio",
      },
    ],
  },
  {
    code: "GL",
    name: "Groenlandia",
    states: [
      {
        code: "GL-KU",
        name: "Kommune Kujalleq",
      },
      {
        code: "GL-SM",
        name: "Kommuneqarfik Sermersooq",
      },
      {
        code: "GL-QA",
        name: "Qaasuitsup Kommunia",
      },
      {
        code: "GL-QE",
        name: "Qeqqata Kommunia",
      },
    ],
  },
  {
    code: "GD",
    name: "Granada",
    states: [
      {
        code: "GD-01",
        name: "Saint Andrew",
      },
      {
        code: "GD-02",
        name: "Saint David",
      },
      {
        code: "GD-03",
        name: "Saint George",
      },
      {
        code: "GD-04",
        name: "Saint John",
      },
      {
        code: "GD-05",
        name: "Saint Mark",
      },
      {
        code: "GD-06",
        name: "Saint Patrick",
      },
      {
        code: "GD-10",
        name: "Southern Grenadine Islands",
      },
    ],
  },
  {
    code: "GT",
    name: "Guatemala",
    states: [
      {
        code: "GT-AV",
        name: "Alta Verapaz",
      },
      {
        code: "GT-BV",
        name: "Baja Verapaz",
      },
      {
        code: "GT-CM",
        name: "Chimaltenango",
      },
      {
        code: "GT-CQ",
        name: "Chiquimula",
      },
      {
        code: "GT-PR",
        name: "El Progreso",
      },
      {
        code: "GT-ES",
        name: "Escuintla",
      },
      {
        code: "GT-GU",
        name: "Guatemala",
      },
      {
        code: "GT-HU",
        name: "Huehuetenango",
      },
      {
        code: "GT-IZ",
        name: "Izabal",
      },
      {
        code: "GT-JA",
        name: "Jalapa",
      },
      {
        code: "GT-JU",
        name: "Jutiapa",
      },
      {
        code: "GT-PE",
        name: "Petén",
      },
      {
        code: "GT-QZ",
        name: "Quetzaltenango",
      },
      {
        code: "GT-QC",
        name: "Quiché",
      },
      {
        code: "GT-RE",
        name: "Retalhuleu",
      },
      {
        code: "GT-SA",
        name: "Sacatepéquez",
      },
      {
        code: "GT-SM",
        name: "San Marcos",
      },
      {
        code: "GT-SR",
        name: "Santa Rosa",
      },
      {
        code: "GT-SO",
        name: "Sololá",
      },
      {
        code: "GT-SU",
        name: "Suchitepéquez",
      },
      {
        code: "GT-TO",
        name: "Totonicapán",
      },
      {
        code: "GT-ZA",
        name: "Zacapa",
      },
    ],
  },
  {
    code: "GW",
    name: "Guinea-Bisáu",
    states: [
      {
        code: "GW-L",
        name: "Leste",
      },
      {
        code: "GW-N",
        name: "Norte",
      },
      {
        code: "GW-S",
        name: "Sul",
      },
    ],
  },
  {
    code: "GN",
    name: "Guinea",
    states: [
      {
        code: "GN-B",
        name: "Boké",
      },
      {
        code: "GN-C",
        name: "Conakry",
      },
      {
        code: "GN-F",
        name: "Faranah",
      },
      {
        code: "GN-K",
        name: "Kankan",
      },
      {
        code: "GN-D",
        name: "Kindia",
      },
      {
        code: "GN-L",
        name: "Labé",
      },
      {
        code: "GN-M",
        name: "Mamou",
      },
      {
        code: "GN-N",
        name: "Nzérékoré",
      },
    ],
  },
  {
    code: "GY",
    name: "Guyana",
    states: [
      {
        code: "GY-BA",
        name: "Barima-Waini",
      },
      {
        code: "GY-CU",
        name: "Cuyuni-Mazaruni",
      },
      {
        code: "GY-DE",
        name: "Demerara-Mahaica",
      },
      {
        code: "GY-EB",
        name: "East Berbice-Corentyne",
      },
      {
        code: "GY-ES",
        name: "Essequibo Islands-West Demerara",
      },
      {
        code: "GY-MA",
        name: "Mahaica-Berbice",
      },
      {
        code: "GY-PM",
        name: "Pomeroon-Supenaam",
      },
      {
        code: "GY-PT",
        name: "Potaro-Siparuni",
      },
      {
        code: "GY-UD",
        name: "Upper Demerara-Berbice",
      },
      {
        code: "GY-UT",
        name: "Upper Takutu-Upper Essequibo",
      },
    ],
  },
  {
    code: "HT",
    name: "Haití",
    states: [
      {
        code: "HT-AR",
        name: "Artibonite",
      },
      {
        code: "HT-CE",
        name: "Centre",
      },
      {
        code: "HT-GA",
        name: "Grande-Anse",
      },
      {
        code: "HT-NI",
        name: "Nippes",
      },
      {
        code: "HT-ND",
        name: "Nord",
      },
      {
        code: "HT-NE",
        name: "Nord-Est",
      },
      {
        code: "HT-NO",
        name: "Nord-Ouest",
      },
      {
        code: "HT-OU",
        name: "Ouest",
      },
      {
        code: "HT-SD",
        name: "Sud",
      },
      {
        code: "HT-SE",
        name: "Sud-Est",
      },
    ],
  },
  {
    code: "HN",
    name: "Honduras",
    states: [
      {
        code: "HN-AT",
        name: "Atlántida",
      },
      {
        code: "HN-CH",
        name: "Choluteca",
      },
      {
        code: "HN-CL",
        name: "Colón",
      },
      {
        code: "HN-CM",
        name: "Comayagua",
      },
      {
        code: "HN-CP",
        name: "Copán",
      },
      {
        code: "HN-CR",
        name: "Cortés",
      },
      {
        code: "HN-EP",
        name: "El Paraíso",
      },
      {
        code: "HN-FM",
        name: "Francisco Morazán",
      },
      {
        code: "HN-GD",
        name: "Gracias a Dios",
      },
      {
        code: "HN-IN",
        name: "Intibucá",
      },
      {
        code: "HN-IB",
        name: "Islas de la Bahía",
      },
      {
        code: "HN-LP",
        name: "La Paz",
      },
      {
        code: "HN-LE",
        name: "Lempira",
      },
      {
        code: "HN-OC",
        name: "Ocotepeque",
      },
      {
        code: "HN-OL",
        name: "Olancho",
      },
      {
        code: "HN-SB",
        name: "Santa Bárbara",
      },
      {
        code: "HN-VA",
        name: "Valle",
      },
      {
        code: "HN-YO",
        name: "Yoro",
      },
    ],
  },
  {
    code: "HK",
    name: "Hong Kong",
    states: [
      {
        code: "HONG KONG",
        name: "Hong Kong Island",
      },
      {
        code: "KOWLOON",
        name: "Kowloon",
      },
      {
        code: "NEW TERRITORIES",
        name: "New Territories",
      },
    ],
  },
  {
    code: "HU",
    name: "Hungría",
    states: [
      {
        code: "HU-BA",
        name: "Baranya",
      },
      {
        code: "HU-BZ",
        name: "Borsod-Abaúj-Zemplén",
      },
      {
        code: "HU-BU",
        name: "Budapest",
      },
      {
        code: "HU-BK",
        name: "Bács-Kiskun",
      },
      {
        code: "HU-BE",
        name: "Békés",
      },
      {
        code: "HU-BC",
        name: "Békéscsaba",
      },
      {
        code: "HU-CS",
        name: "Csongrád",
      },
      {
        code: "HU-DE",
        name: "Debrecen",
      },
      {
        code: "HU-DU",
        name: "Dunaújváros",
      },
      {
        code: "HU-EG",
        name: "Eger",
      },
      {
        code: "HU-FE",
        name: "Fejér",
      },
      {
        code: "HU-GY",
        name: "Győr",
      },
      {
        code: "HU-GS",
        name: "Győr-Moson-Sopron",
      },
      {
        code: "HU-HB",
        name: "Hajdú-Bihar",
      },
      {
        code: "HU-HE",
        name: "Heves",
      },
      {
        code: "HU-HV",
        name: "Hódmezővásárhely",
      },
      {
        code: "HU-JN",
        name: "Jász-Nagykun-Szolnok",
      },
      {
        code: "HU-KV",
        name: "Kaposvár",
      },
      {
        code: "HU-KM",
        name: "Kecskemét",
      },
      {
        code: "HU-KE",
        name: "Komárom-Esztergom",
      },
      {
        code: "HU-MI",
        name: "Miskolc",
      },
      {
        code: "HU-NK",
        name: "Nagykanizsa",
      },
      {
        code: "HU-NY",
        name: "Nyíregyháza",
      },
      {
        code: "HU-NO",
        name: "Nógrád",
      },
      {
        code: "HU-PE",
        name: "Pest",
      },
      {
        code: "HU-PS",
        name: "Pécs",
      },
      {
        code: "HU-ST",
        name: "Salgótarján",
      },
      {
        code: "HU-SO",
        name: "Somogy",
      },
      {
        code: "HU-SN",
        name: "Sopron",
      },
      {
        code: "HU-SZ",
        name: "Szabolcs-Szatmár-Bereg",
      },
      {
        code: "HU-SD",
        name: "Szeged",
      },
      {
        code: "HU-SS",
        name: "Szekszárd",
      },
      {
        code: "HU-SK",
        name: "Szolnok",
      },
      {
        code: "HU-SH",
        name: "Szombathely",
      },
      {
        code: "HU-SF",
        name: "Székesfehérvár",
      },
      {
        code: "HU-TB",
        name: "Tatabánya",
      },
      {
        code: "HU-TO",
        name: "Tolna",
      },
      {
        code: "HU-VA",
        name: "Vas",
      },
      {
        code: "HU-VE",
        name: "Veszprém",
      },
      {
        code: "HU-VM",
        name: "Veszprém",
      },
      {
        code: "HU-ZA",
        name: "Zala",
      },
      {
        code: "HU-ZE",
        name: "Zalaegerszeg",
      },
      {
        code: "HU-ER",
        name: "Érd",
      },
    ],
  },
  {
    code: "IS",
    name: "Islandia",
    states: [
      {
        code: "IS-7",
        name: "Austurland",
      },
      {
        code: "IS-1",
        name: "Höfuðborgarsvæði utan Reykjavíkur",
      },
      {
        code: "IS-6",
        name: "Norðurland eystra",
      },
      {
        code: "IS-5",
        name: "Norðurland vestra",
      },
      {
        code: "IS-0",
        name: "Reykjavík",
      },
      {
        code: "IS-8",
        name: "Suðurland",
      },
      {
        code: "IS-2",
        name: "Suðurnes",
      },
      {
        code: "IS-4",
        name: "Vestfirðir",
      },
      {
        code: "IS-3",
        name: "Vesturland",
      },
    ],
  },
  {
    code: "IN",
    name: "India",
    states: [
      {
        code: "IN-AN",
        name: "Andaman and Nicobar Islands",
      },
      {
        code: "IN-CH",
        name: "Chandigarh",
      },
      {
        code: "IN-DN",
        name: "Dadra and Nagar Haveli",
      },
      {
        code: "IN-DD",
        name: "Daman and Diu",
      },
      {
        code: "IN-DL",
        name: "Delhi",
      },
      {
        code: "IN-LD",
        name: "Lakshadweep",
      },
      {
        code: "IN-PY",
        name: "Puducherry",
      },
      {
        code: "IN-AP",
        name: "Andhra Pradesh",
      },
      {
        code: "IN-AR",
        name: "Arunachal Pradesh",
      },
      {
        code: "IN-AS",
        name: "Assam",
      },
      {
        code: "IN-BR",
        name: "Bihar",
      },
      {
        code: "IN-CT",
        name: "Chhattisgarh",
      },
      {
        code: "IN-GA",
        name: "Goa",
      },
      {
        code: "IN-GJ",
        name: "Gujarat",
      },
      {
        code: "IN-HR",
        name: "Haryana",
      },
      {
        code: "IN-HP",
        name: "Himachal Pradesh",
      },
      {
        code: "IN-JK",
        name: "Jammu and Kashmir",
      },
      {
        code: "IN-JH",
        name: "Jharkhand",
      },
      {
        code: "IN-KA",
        name: "Karnataka",
      },
      {
        code: "IN-KL",
        name: "Kerala",
      },
      {
        code: "IN-MP",
        name: "Madhya Pradesh",
      },
      {
        code: "IN-MH",
        name: "Maharashtra",
      },
      {
        code: "IN-MN",
        name: "Manipur",
      },
      {
        code: "IN-ML",
        name: "Meghalaya",
      },
      {
        code: "IN-MZ",
        name: "Mizoram",
      },
      {
        code: "IN-NL",
        name: "Nagaland",
      },
      {
        code: "IN-OR",
        name: "Odisha",
      },
      {
        code: "IN-PB",
        name: "Punjab",
      },
      {
        code: "IN-RJ",
        name: "Rajasthan",
      },
      {
        code: "IN-SK",
        name: "Sikkim",
      },
      {
        code: "IN-TN",
        name: "Tamil Nadu",
      },
      {
        code: "IN-TG",
        name: "Telangana",
      },
      {
        code: "IN-TR",
        name: "Tripura",
      },
      {
        code: "IN-UP",
        name: "Uttar Pradesh",
      },
      {
        code: "IN-UT",
        name: "Uttarakhand",
      },
      {
        code: "IN-WB",
        name: "West Bengal",
      },
    ],
  },
  {
    code: "ID",
    name: "Indonesia",
    states: [
      {
        code: "ID-JW",
        name: "Jawa",
      },
      {
        code: "ID-KA",
        name: "Kalimantan",
      },
      {
        code: "ID-ML",
        name: "Maluku",
      },
      {
        code: "ID-NU",
        name: "Nusa Tenggara",
      },
      {
        code: "ID-PP",
        name: "Papua",
      },
      {
        code: "ID-SL",
        name: "Sulawesi",
      },
      {
        code: "ID-SM",
        name: "Sumatera",
      },
    ],
  },
  {
    code: "IR",
    name: "Irán",
    states: [
      {
        code: "IR-32",
        name: "Alborz",
      },
      {
        code: "IR-03",
        name: "Ardabīl",
      },
      {
        code: "IR-06",
        name: "Būshehr",
      },
      {
        code: "IR-08",
        name: "Chahār Maḩāll va Bakhtīārī",
      },
      {
        code: "IR-04",
        name: "Eşfahān",
      },
      {
        code: "IR-14",
        name: "Fārs",
      },
      {
        code: "IR-27",
        name: "Golestān",
      },
      {
        code: "IR-19",
        name: "Gīlān",
      },
      {
        code: "IR-24",
        name: "Hamadān",
      },
      {
        code: "IR-23",
        name: "Hormozgān",
      },
      {
        code: "IR-15",
        name: "Kermān",
      },
      {
        code: "IR-17",
        name: "Kermānshāh",
      },
      {
        code: "IR-29",
        name: "Khorāsān-e Janūbī",
      },
      {
        code: "IR-30",
        name: "Khorāsān-e Razavī",
      },
      {
        code: "IR-31",
        name: "Khorāsān-e Shemālī",
      },
      {
        code: "IR-10",
        name: "Khūzestān",
      },
      {
        code: "IR-18",
        name: "Kohgīlūyeh va Būyer Aḩmad",
      },
      {
        code: "IR-16",
        name: "Kordestān",
      },
      {
        code: "IR-20",
        name: "Lorestān",
      },
      {
        code: "IR-22",
        name: "Markazī",
      },
      {
        code: "IR-21",
        name: "Māzandarān",
      },
      {
        code: "IR-28",
        name: "Qazvīn",
      },
      {
        code: "IR-26",
        name: "Qom",
      },
      {
        code: "IR-12",
        name: "Semnān",
      },
      {
        code: "IR-13",
        name: "Sīstān va Balūchestān",
      },
      {
        code: "IR-07",
        name: "Tehrān",
      },
      {
        code: "IR-25",
        name: "Yazd",
      },
      {
        code: "IR-11",
        name: "Zanjān",
      },
      {
        code: "IR-02",
        name: "Āz̄arbāyjān-e Gharbī",
      },
      {
        code: "IR-01",
        name: "Āz̄arbāyjān-e Sharqī",
      },
      {
        code: "IR-05",
        name: "Īlām",
      },
    ],
  },
  {
    code: "IQ",
    name: "Irak",
    states: [
      {
        code: "IQ-AN",
        name: "Al Anbār",
      },
      {
        code: "IQ-BA",
        name: "Al Başrah",
      },
      {
        code: "IQ-MU",
        name: "Al Muthanná",
      },
      {
        code: "IQ-QA",
        name: "Al Qādisīyah",
      },
      {
        code: "IQ-NA",
        name: "An Najaf",
      },
      {
        code: "IQ-AR",
        name: "Arbīl",
      },
      {
        code: "IQ-SU",
        name: "As Sulaymānīyah",
      },
      {
        code: "IQ-TS",
        name: "At Ta'mīm",
      },
      {
        code: "IQ-BG",
        name: "Baghdād",
      },
      {
        code: "IQ-BB",
        name: "Bābil",
      },
      {
        code: "IQ-DA",
        name: "Dahūk",
      },
      {
        code: "IQ-DQ",
        name: "Dhī Qār",
      },
      {
        code: "IQ-DI",
        name: "Diyālá",
      },
      {
        code: "IQ-KA",
        name: "Karbalā'",
      },
      {
        code: "IQ-MA",
        name: "Maysān",
      },
      {
        code: "IQ-NI",
        name: "Nīnawá",
      },
      {
        code: "IQ-WA",
        name: "Wāsiţ",
      },
      {
        code: "IQ-SD",
        name: "Şalāḩ ad Dīn",
      },
    ],
  },
  {
    code: "IE",
    name: "Irlanda",
    states: [
      {
        code: "IE-C",
        name: "Connaught",
      },
      {
        code: "IE-L",
        name: "Leinster",
      },
      {
        code: "IE-M",
        name: "Munster",
      },
      {
        code: "IE-U",
        name: "Ulster",
      },
    ],
  },
  {
    code: "IL",
    name: "Israel",
    states: [
      {
        code: "IL-D",
        name: "HaDarom",
      },
      {
        code: "IL-M",
        name: "HaMerkaz",
      },
      {
        code: "IL-Z",
        name: "HaTsafon",
      },
      {
        code: "IL-HA",
        name: "H̱efa",
      },
      {
        code: "IL-TA",
        name: "Tel-Aviv",
      },
      {
        code: "IL-JM",
        name: "Yerushalayim",
      },
    ],
  },
  {
    code: "IT",
    name: "Italia",
    states: [
      {
        code: "IT-65",
        name: "Abruzzo",
      },
      {
        code: "IT-77",
        name: "Basilicata",
      },
      {
        code: "IT-78",
        name: "Calabria",
      },
      {
        code: "IT-72",
        name: "Campania",
      },
      {
        code: "IT-45",
        name: "Emilia-Romagna",
      },
      {
        code: "IT-36",
        name: "Friuli-Venezia Giulia",
      },
      {
        code: "IT-62",
        name: "Lazio",
      },
      {
        code: "IT-42",
        name: "Liguria",
      },
      {
        code: "IT-25",
        name: "Lombardia",
      },
      {
        code: "IT-57",
        name: "Marche",
      },
      {
        code: "IT-67",
        name: "Molise",
      },
      {
        code: "IT-21",
        name: "Piemonte",
      },
      {
        code: "IT-75",
        name: "Puglia",
      },
      {
        code: "IT-88",
        name: "Sardegna",
      },
      {
        code: "IT-82",
        name: "Sicilia",
      },
      {
        code: "IT-52",
        name: "Toscana",
      },
      {
        code: "IT-32",
        name: "Trentino-Alto Adige",
      },
      {
        code: "IT-55",
        name: "Umbria",
      },
      {
        code: "IT-23",
        name: "Valle d'Aosta",
      },
      {
        code: "IT-34",
        name: "Veneto",
      },
    ],
  },
  {
    code: "JM",
    name: "Jamaica",
    states: [
      {
        code: "JM-13",
        name: "Clarendon",
      },
      {
        code: "JM-09",
        name: "Hanover",
      },
      {
        code: "JM-01",
        name: "Kingston",
      },
      {
        code: "JM-12",
        name: "Manchester",
      },
      {
        code: "JM-04",
        name: "Portland",
      },
      {
        code: "JM-02",
        name: "Saint Andrew",
      },
      {
        code: "JM-06",
        name: "Saint Ann",
      },
      {
        code: "JM-14",
        name: "Saint Catherine",
      },
      {
        code: "JM-11",
        name: "Saint Elizabeth",
      },
      {
        code: "JM-08",
        name: "Saint James",
      },
      {
        code: "JM-05",
        name: "Saint Mary",
      },
      {
        code: "JM-03",
        name: "Saint Thomas",
      },
      {
        code: "JM-07",
        name: "Trelawny",
      },
      {
        code: "JM-10",
        name: "Westmoreland",
      },
    ],
  },
  {
    code: "JP",
    name: "Japón",
    states: [
      {
        code: "JP-23",
        name: "Aiti",
      },
      {
        code: "JP-05",
        name: "Akita",
      },
      {
        code: "JP-02",
        name: "Aomori",
      },
      {
        code: "JP-38",
        name: "Ehime",
      },
      {
        code: "JP-21",
        name: "Gihu",
      },
      {
        code: "JP-10",
        name: "Gunma",
      },
      {
        code: "JP-34",
        name: "Hirosima",
      },
      {
        code: "JP-01",
        name: "Hokkaidô",
      },
      {
        code: "JP-18",
        name: "Hukui",
      },
      {
        code: "JP-40",
        name: "Hukuoka",
      },
      {
        code: "JP-07",
        name: "Hukusima",
      },
      {
        code: "JP-28",
        name: "Hyôgo",
      },
      {
        code: "JP-08",
        name: "Ibaraki",
      },
      {
        code: "JP-17",
        name: "Isikawa",
      },
      {
        code: "JP-03",
        name: "Iwate",
      },
      {
        code: "JP-37",
        name: "Kagawa",
      },
      {
        code: "JP-46",
        name: "Kagosima",
      },
      {
        code: "JP-14",
        name: "Kanagawa",
      },
      {
        code: "JP-43",
        name: "Kumamoto",
      },
      {
        code: "JP-26",
        name: "Kyôto",
      },
      {
        code: "JP-39",
        name: "Kôti",
      },
      {
        code: "JP-24",
        name: "Mie",
      },
      {
        code: "JP-04",
        name: "Miyagi",
      },
      {
        code: "JP-45",
        name: "Miyazaki",
      },
      {
        code: "JP-20",
        name: "Nagano",
      },
      {
        code: "JP-42",
        name: "Nagasaki",
      },
      {
        code: "JP-29",
        name: "Nara",
      },
      {
        code: "JP-15",
        name: "Niigata",
      },
      {
        code: "JP-33",
        name: "Okayama",
      },
      {
        code: "JP-47",
        name: "Okinawa",
      },
      {
        code: "JP-41",
        name: "Saga",
      },
      {
        code: "JP-11",
        name: "Saitama",
      },
      {
        code: "JP-25",
        name: "Siga",
      },
      {
        code: "JP-32",
        name: "Simane",
      },
      {
        code: "JP-22",
        name: "Sizuoka",
      },
      {
        code: "JP-12",
        name: "Tiba",
      },
      {
        code: "JP-36",
        name: "Tokusima",
      },
      {
        code: "JP-09",
        name: "Totigi",
      },
      {
        code: "JP-31",
        name: "Tottori",
      },
      {
        code: "JP-16",
        name: "Toyama",
      },
      {
        code: "JP-13",
        name: "Tôkyô",
      },
      {
        code: "JP-30",
        name: "Wakayama",
      },
      {
        code: "JP-06",
        name: "Yamagata",
      },
      {
        code: "JP-35",
        name: "Yamaguti",
      },
      {
        code: "JP-19",
        name: "Yamanasi",
      },
      {
        code: "JP-44",
        name: "Ôita",
      },
      {
        code: "JP-27",
        name: "Ôsaka",
      },
    ],
  },
  {
    code: "JO",
    name: "Jordania",
    states: [
      {
        code: "JO-BA",
        name: "Al Balqā'",
      },
      {
        code: "JO-AQ",
        name: "Al ʽAqabah",
      },
      {
        code: "JO-AZ",
        name: "Az Zarqā'",
      },
      {
        code: "JO-AT",
        name: "Aţ Ţafīlah",
      },
      {
        code: "JO-IR",
        name: "Irbid",
      },
      {
        code: "JO-JA",
        name: "Jerash",
      },
      {
        code: "JO-KA",
        name: "Karak",
      },
      {
        code: "JO-MN",
        name: "Ma'ān",
      },
      {
        code: "JO-MA",
        name: "Mafraq",
      },
      {
        code: "JO-MD",
        name: "Mādabā",
      },
      {
        code: "JO-AJ",
        name: "ʽAjlūn",
      },
      {
        code: "JO-AM",
        name: "‘Ammān",
      },
    ],
  },
  {
    code: "KZ",
    name: "Kazajstán",
    states: [
      {
        code: "KZ-ALA",
        name: "Almaty",
      },
      {
        code: "KZ-ALM",
        name: "Almaty oblysy",
      },
      {
        code: "KZ-AKM",
        name: "Aqmola oblysy",
      },
      {
        code: "KZ-AKT",
        name: "Aqtöbe oblysy",
      },
      {
        code: "KZ-AST",
        name: "Astana",
      },
      {
        code: "KZ-ATY",
        name: "Atyraū oblysy",
      },
      {
        code: "KZ-ZAP",
        name: "Batys Qazaqstan oblysy",
      },
      {
        code: "KZ-MAN",
        name: "Mangghystaū oblysy",
      },
      {
        code: "KZ-YUZ",
        name: "Ongtüstik Qazaqstan oblysy",
      },
      {
        code: "KZ-PAV",
        name: "Pavlodar oblysy",
      },
      {
        code: "KZ-KAR",
        name: "Qaraghandy oblysy",
      },
      {
        code: "KZ-KUS",
        name: "Qostanay oblysy",
      },
      {
        code: "KZ-KZY",
        name: "Qyzylorda oblysy",
      },
      {
        code: "KZ-VOS",
        name: "Shyghys Qazaqstan oblysy",
      },
      {
        code: "KZ-SEV",
        name: "Soltüstik Qazaqstan oblysy",
      },
      {
        code: "KZ-ZHA",
        name: "Zhambyl oblysy",
      },
    ],
  },
  {
    code: "KE",
    name: "Kenia",
    states: [
      {
        code: "KE-200",
        name: "Central",
      },
      {
        code: "KE-300",
        name: "Coast",
      },
      {
        code: "KE-400",
        name: "Eastern",
      },
      {
        code: "KE-110",
        name: "Nairobi",
      },
      {
        code: "KE-500",
        name: "North-Eastern",
      },
      {
        code: "KE-600",
        name: "Nyanza",
      },
      {
        code: "KE-700",
        name: "Rift Valley",
      },
      {
        code: "KE-800",
        name: "Western",
      },
    ],
  },
  {
    code: "KI",
    name: "Kiribati",
    states: [
      {
        code: "KI-G",
        name: "Gilbert Islands",
      },
      {
        code: "KI-L",
        name: "Line Islands",
      },
      {
        code: "KI-P",
        name: "Phoenix Islands",
      },
    ],
  },
  {
    code: "KP",
    name: "Corea del Norte",
    states: [
      {
        code: "KP-04",
        name: "Chagang",
      },
      {
        code: "KP-07",
        name: "Kangwon",
      },
      {
        code: "KP-09",
        name: "North Hamgyong",
      },
      {
        code: "KP-06",
        name: "North Hwanghae",
      },
      {
        code: "KP-03",
        name: "North Pyongan",
      },
      {
        code: "KP-01",
        name: "Pyongyang",
      },
      {
        code: "KP-13",
        name: "Rason",
      },
      {
        code: "KP-10",
        name: "Ryanggang",
      },
      {
        code: "KP-08",
        name: "South Hamgyong",
      },
      {
        code: "KP-05",
        name: "South Hwanghae",
      },
      {
        code: "KP-02",
        name: "South Pyongan",
      },
    ],
  },
  {
    code: "KR",
    name: "Corea del Sur",
    states: [
      {
        code: "KR-26",
        name: "Busan-gwangyeoksi",
      },
      {
        code: "KR-43",
        name: "Chungcheongbuk-do",
      },
      {
        code: "KR-44",
        name: "Chungcheongnam-do",
      },
      {
        code: "KR-27",
        name: "Daegu-gwangyeoksi",
      },
      {
        code: "KR-30",
        name: "Daejeon-gwangyeoksi",
      },
      {
        code: "KR-42",
        name: "Gangwon-do",
      },
      {
        code: "KR-29",
        name: "Gwangju-gwangyeoksi",
      },
      {
        code: "KR-41",
        name: "Gyeonggi-do",
      },
      {
        code: "KR-47",
        name: "Gyeongsangbuk-do",
      },
      {
        code: "KR-48",
        name: "Gyeongsangnam-do",
      },
      {
        code: "KR-28",
        name: "Incheon-gwangyeoksi",
      },
      {
        code: "KR-49",
        name: "Jeju-teukbyeoljachido",
      },
      {
        code: "KR-45",
        name: "Jeollabuk-do",
      },
      {
        code: "KR-46",
        name: "Jeollanam-do",
      },
      {
        code: "KR-50",
        name: "Sejong",
      },
      {
        code: "KR-11",
        name: "Seoul-teukbyeolsi",
      },
      {
        code: "KR-31",
        name: "Ulsan-gwangyeoksi",
      },
    ],
  },
  {
    code: "KW",
    name: "Kuwait",
    states: [
      {
        code: "KW-AH",
        name: "Al Aḩmadi",
      },
      {
        code: "KW-FA",
        name: "Al Farwānīyah",
      },
      {
        code: "KW-JA",
        name: "Al Jahrā’",
      },
      {
        code: "KW-KU",
        name: "Al Kuwayt",
      },
      {
        code: "KW-MU",
        name: "Mubārak al Kabīr",
      },
      {
        code: "KW-HA",
        name: "Ḩawallī",
      },
    ],
  },
  {
    code: "KG",
    name: "Kirguistán",
    states: [
      {
        code: "KG-B",
        name: "Batken",
      },
      {
        code: "KG-GB",
        name: "Bishkek",
      },
      {
        code: "KG-C",
        name: "Chü",
      },
      {
        code: "KG-J",
        name: "Jalal-Abad",
      },
      {
        code: "KG-N",
        name: "Naryn",
      },
      {
        code: "KG-O",
        name: "Osh",
      },
      {
        code: "KG-T",
        name: "Talas",
      },
      {
        code: "KG-Y",
        name: "Ysyk-Köl",
      },
    ],
  },
  {
    code: "LA",
    name: "Laos",
    states: [
      {
        code: "LA-AT",
        name: "Attapu",
      },
      {
        code: "LA-BK",
        name: "Bokèo",
      },
      {
        code: "LA-BL",
        name: "Bolikhamxai",
      },
      {
        code: "LA-CH",
        name: "Champasak",
      },
      {
        code: "LA-HO",
        name: "Houaphan",
      },
      {
        code: "LA-KH",
        name: "Khammouan",
      },
      {
        code: "LA-LM",
        name: "Louang Namtha",
      },
      {
        code: "LA-LP",
        name: "Louangphabang",
      },
      {
        code: "LA-OU",
        name: "Oudômxai",
      },
      {
        code: "LA-PH",
        name: "Phôngsali",
      },
      {
        code: "LA-SL",
        name: "Salavan",
      },
      {
        code: "LA-SV",
        name: "Savannakhét",
      },
      {
        code: "LA-VT",
        name: "Vientiane",
      },
      {
        code: "LA-VI",
        name: "Vientiane",
      },
      {
        code: "LA-XA",
        name: "Xaignabouli",
      },
      {
        code: "LA-XN",
        name: "Xaisômboun",
      },
      {
        code: "LA-XI",
        name: "Xiangkhoang",
      },
      {
        code: "LA-XE",
        name: "Xékong",
      },
    ],
  },
  {
    code: "LV",
    name: "Letonia",
    states: [
      {
        code: "LV-001",
        name: "Aglonas novads",
      },
      {
        code: "LV-002",
        name: "Aizkraukles novads",
      },
      {
        code: "LV-003",
        name: "Aizputes novads",
      },
      {
        code: "LV-004",
        name: "Aknīstes novads",
      },
      {
        code: "LV-005",
        name: "Alojas novads",
      },
      {
        code: "LV-006",
        name: "Alsungas novads",
      },
      {
        code: "LV-007",
        name: "Alūksnes novads",
      },
      {
        code: "LV-008",
        name: "Amatas novads",
      },
      {
        code: "LV-009",
        name: "Apes novads",
      },
      {
        code: "LV-010",
        name: "Auces novads",
      },
      {
        code: "LV-012",
        name: "Babītes novads",
      },
      {
        code: "LV-013",
        name: "Baldones novads",
      },
      {
        code: "LV-014",
        name: "Baltinavas novads",
      },
      {
        code: "LV-015",
        name: "Balvu novads",
      },
      {
        code: "LV-016",
        name: "Bauskas novads",
      },
      {
        code: "LV-017",
        name: "Beverīnas novads",
      },
      {
        code: "LV-018",
        name: "Brocēnu novads",
      },
      {
        code: "LV-019",
        name: "Burtnieku novads",
      },
      {
        code: "LV-020",
        name: "Carnikavas novads",
      },
      {
        code: "LV-021",
        name: "Cesvaines novads",
      },
      {
        code: "LV-023",
        name: "Ciblas novads",
      },
      {
        code: "LV-022",
        name: "Cēsu novads",
      },
      {
        code: "LV-024",
        name: "Dagdas novads",
      },
      {
        code: "LV-DGV",
        name: "Daugavpils",
      },
      {
        code: "LV-025",
        name: "Daugavpils novads",
      },
      {
        code: "LV-026",
        name: "Dobeles novads",
      },
      {
        code: "LV-027",
        name: "Dundagas novads",
      },
      {
        code: "LV-028",
        name: "Durbes novads",
      },
      {
        code: "LV-029",
        name: "Engures novads",
      },
      {
        code: "LV-031",
        name: "Garkalnes novads",
      },
      {
        code: "LV-032",
        name: "Grobiņas novads",
      },
      {
        code: "LV-033",
        name: "Gulbenes novads",
      },
      {
        code: "LV-034",
        name: "Iecavas novads",
      },
      {
        code: "LV-035",
        name: "Ikšķiles novads",
      },
      {
        code: "LV-036",
        name: "Ilūkstes novads",
      },
      {
        code: "LV-037",
        name: "Inčukalna novads",
      },
      {
        code: "LV-038",
        name: "Jaunjelgavas novads",
      },
      {
        code: "LV-039",
        name: "Jaunpiebalgas novads",
      },
      {
        code: "LV-040",
        name: "Jaunpils novads",
      },
      {
        code: "LV-JEL",
        name: "Jelgava",
      },
      {
        code: "LV-041",
        name: "Jelgavas novads",
      },
      {
        code: "LV-JKB",
        name: "Jēkabpils",
      },
      {
        code: "LV-042",
        name: "Jēkabpils novads",
      },
      {
        code: "LV-JUR",
        name: "Jūrmala",
      },
      {
        code: "LV-043",
        name: "Kandavas novads",
      },
      {
        code: "LV-045",
        name: "Kocēnu novads",
      },
      {
        code: "LV-046",
        name: "Kokneses novads",
      },
      {
        code: "LV-048",
        name: "Krimuldas novads",
      },
      {
        code: "LV-049",
        name: "Krustpils novads",
      },
      {
        code: "LV-047",
        name: "Krāslavas novads",
      },
      {
        code: "LV-050",
        name: "Kuldīgas novads",
      },
      {
        code: "LV-044",
        name: "Kārsavas novads",
      },
      {
        code: "LV-053",
        name: "Lielvārdes novads",
      },
      {
        code: "LV-LPX",
        name: "Liepāja",
      },
      {
        code: "LV-054",
        name: "Limbažu novads",
      },
      {
        code: "LV-057",
        name: "Lubānas novads",
      },
      {
        code: "LV-058",
        name: "Ludzas novads",
      },
      {
        code: "LV-055",
        name: "Līgatnes novads",
      },
      {
        code: "LV-056",
        name: "Līvānu novads",
      },
      {
        code: "LV-059",
        name: "Madonas novads",
      },
      {
        code: "LV-060",
        name: "Mazsalacas novads",
      },
      {
        code: "LV-061",
        name: "Mālpils novads",
      },
      {
        code: "LV-062",
        name: "Mārupes novads",
      },
      {
        code: "LV-063",
        name: "Mērsraga novads",
      },
      {
        code: "LV-064",
        name: "Naukšēnu novads",
      },
      {
        code: "LV-065",
        name: "Neretas novads",
      },
      {
        code: "LV-066",
        name: "Nīcas novads",
      },
      {
        code: "LV-067",
        name: "Ogres novads",
      },
      {
        code: "LV-068",
        name: "Olaines novads",
      },
      {
        code: "LV-069",
        name: "Ozolnieku novads",
      },
      {
        code: "LV-073",
        name: "Preiļu novads",
      },
      {
        code: "LV-074",
        name: "Priekules novads",
      },
      {
        code: "LV-075",
        name: "Priekuļu novads",
      },
      {
        code: "LV-070",
        name: "Pārgaujas novads",
      },
      {
        code: "LV-071",
        name: "Pāvilostas novads",
      },
      {
        code: "LV-072",
        name: "Pļaviņu novads",
      },
      {
        code: "LV-076",
        name: "Raunas novads",
      },
      {
        code: "LV-078",
        name: "Riebiņu novads",
      },
      {
        code: "LV-079",
        name: "Rojas novads",
      },
      {
        code: "LV-080",
        name: "Ropažu novads",
      },
      {
        code: "LV-081",
        name: "Rucavas novads",
      },
      {
        code: "LV-082",
        name: "Rugāju novads",
      },
      {
        code: "LV-083",
        name: "Rundāles novads",
      },
      {
        code: "LV-REZ",
        name: "Rēzekne",
      },
      {
        code: "LV-077",
        name: "Rēzeknes novads",
      },
      {
        code: "LV-RIX",
        name: "Rīga",
      },
      {
        code: "LV-084",
        name: "Rūjienas novads",
      },
      {
        code: "LV-086",
        name: "Salacgrīvas novads",
      },
      {
        code: "LV-085",
        name: "Salas novads",
      },
      {
        code: "LV-087",
        name: "Salaspils novads",
      },
      {
        code: "LV-088",
        name: "Saldus novads",
      },
      {
        code: "LV-089",
        name: "Saulkrastu novads",
      },
      {
        code: "LV-091",
        name: "Siguldas novads",
      },
      {
        code: "LV-093",
        name: "Skrundas novads",
      },
      {
        code: "LV-092",
        name: "Skrīveru novads",
      },
      {
        code: "LV-094",
        name: "Smiltenes novads",
      },
      {
        code: "LV-095",
        name: "Stopiņu novads",
      },
      {
        code: "LV-096",
        name: "Strenču novads",
      },
      {
        code: "LV-090",
        name: "Sējas novads",
      },
      {
        code: "LV-097",
        name: "Talsu novads",
      },
      {
        code: "LV-099",
        name: "Tukuma novads",
      },
      {
        code: "LV-098",
        name: "Tērvetes novads",
      },
      {
        code: "LV-100",
        name: "Vaiņodes novads",
      },
      {
        code: "LV-101",
        name: "Valkas novads",
      },
      {
        code: "LV-VMR",
        name: "Valmiera",
      },
      {
        code: "LV-102",
        name: "Varakļānu novads",
      },
      {
        code: "LV-104",
        name: "Vecpiebalgas novads",
      },
      {
        code: "LV-105",
        name: "Vecumnieku novads",
      },
      {
        code: "LV-VEN",
        name: "Ventspils",
      },
      {
        code: "LV-106",
        name: "Ventspils novads",
      },
      {
        code: "LV-107",
        name: "Viesītes novads",
      },
      {
        code: "LV-108",
        name: "Viļakas novads",
      },
      {
        code: "LV-109",
        name: "Viļānu novads",
      },
      {
        code: "LV-103",
        name: "Vārkavas novads",
      },
      {
        code: "LV-110",
        name: "Zilupes novads",
      },
      {
        code: "LV-011",
        name: "Ādažu novads",
      },
      {
        code: "LV-030",
        name: "Ērgļu novads",
      },
      {
        code: "LV-051",
        name: "Ķeguma novads",
      },
      {
        code: "LV-052",
        name: "Ķekavas novads",
      },
    ],
  },
  {
    code: "LB",
    name: "Líbano",
    states: [
      {
        code: "LB-AK",
        name: "Aakkâr",
      },
      {
        code: "LB-BH",
        name: "Baalbek-Hermel",
      },
      {
        code: "LB-BA",
        name: "Beyrouth",
      },
      {
        code: "LB-BI",
        name: "Béqaa",
      },
      {
        code: "LB-AS",
        name: "Liban-Nord",
      },
      {
        code: "LB-JA",
        name: "Liban-Sud",
      },
      {
        code: "LB-JL",
        name: "Mont-Liban",
      },
      {
        code: "LB-NA",
        name: "Nabatîyé",
      },
    ],
  },
  {
    code: "LS",
    name: "Lesoto",
    states: [
      {
        code: "LS-D",
        name: "Berea",
      },
      {
        code: "LS-B",
        name: "Butha-Buthe",
      },
      {
        code: "LS-C",
        name: "Leribe",
      },
      {
        code: "LS-E",
        name: "Mafeteng",
      },
      {
        code: "LS-A",
        name: "Maseru",
      },
      {
        code: "LS-F",
        name: "Mohale's Hoek",
      },
      {
        code: "LS-J",
        name: "Mokhotlong",
      },
      {
        code: "LS-H",
        name: "Qacha's Nek",
      },
      {
        code: "LS-G",
        name: "Quthing",
      },
      {
        code: "LS-K",
        name: "Thaba-Tseka",
      },
    ],
  },
  {
    code: "LR",
    name: "Liberia",
    states: [
      {
        code: "LR-BM",
        name: "Bomi",
      },
      {
        code: "LR-BG",
        name: "Bong",
      },
      {
        code: "LR-GP",
        name: "Gbarpolu",
      },
      {
        code: "LR-GB",
        name: "Grand Bassa",
      },
      {
        code: "LR-CM",
        name: "Grand Cape Mount",
      },
      {
        code: "LR-GG",
        name: "Grand Gedeh",
      },
      {
        code: "LR-GK",
        name: "Grand Kru",
      },
      {
        code: "LR-LO",
        name: "Lofa",
      },
      {
        code: "LR-MG",
        name: "Margibi",
      },
      {
        code: "LR-MY",
        name: "Maryland",
      },
      {
        code: "LR-MO",
        name: "Montserrado",
      },
      {
        code: "LR-NI",
        name: "Nimba",
      },
      {
        code: "LR-RG",
        name: "River Gee",
      },
      {
        code: "LR-RI",
        name: "Rivercess",
      },
      {
        code: "LR-SI",
        name: "Sinoe",
      },
    ],
  },
  {
    code: "LY",
    name: "Libia",
    states: [
      {
        code: "LY-BU",
        name: "Al Buţnān",
      },
      {
        code: "LY-JA",
        name: "Al Jabal al Akhḑar",
      },
      {
        code: "LY-JG",
        name: "Al Jabal al Gharbī",
      },
      {
        code: "LY-JI",
        name: "Al Jifārah",
      },
      {
        code: "LY-JU",
        name: "Al Jufrah",
      },
      {
        code: "LY-KF",
        name: "Al Kufrah",
      },
      {
        code: "LY-MJ",
        name: "Al Marj",
      },
      {
        code: "LY-MB",
        name: "Al Marqab",
      },
      {
        code: "LY-WA",
        name: "Al Wāḩāt",
      },
      {
        code: "LY-NQ",
        name: "An Nuqaţ al Khams",
      },
      {
        code: "LY-ZA",
        name: "Az Zāwiyah",
      },
      {
        code: "LY-BA",
        name: "Banghāzī",
      },
      {
        code: "LY-DR",
        name: "Darnah",
      },
      {
        code: "LY-GT",
        name: "Ghāt",
      },
      {
        code: "LY-MI",
        name: "Mişrātah",
      },
      {
        code: "LY-MQ",
        name: "Murzuq",
      },
      {
        code: "LY-NL",
        name: "Nālūt",
      },
      {
        code: "LY-SB",
        name: "Sabhā",
      },
      {
        code: "LY-SR",
        name: "Surt",
      },
      {
        code: "LY-WD",
        name: "Wādī al Ḩayāt",
      },
      {
        code: "LY-WS",
        name: "Wādī ash Shāţiʾ",
      },
      {
        code: "LY-TB",
        name: "Ţarābulus",
      },
    ],
  },
  {
    code: "LI",
    name: "Liechtenstein",
    states: [
      {
        code: "LI-01",
        name: "Balzers",
      },
      {
        code: "LI-02",
        name: "Eschen",
      },
      {
        code: "LI-03",
        name: "Gamprin",
      },
      {
        code: "LI-04",
        name: "Mauren",
      },
      {
        code: "LI-05",
        name: "Planken",
      },
      {
        code: "LI-06",
        name: "Ruggell",
      },
      {
        code: "LI-07",
        name: "Schaan",
      },
      {
        code: "LI-08",
        name: "Schellenberg",
      },
      {
        code: "LI-09",
        name: "Triesen",
      },
      {
        code: "LI-10",
        name: "Triesenberg",
      },
      {
        code: "LI-11",
        name: "Vaduz",
      },
    ],
  },
  {
    code: "LT",
    name: "Lituania",
    states: [
      {
        code: "LT-AL",
        name: "Alytaus Apskritis",
      },
      {
        code: "LT-KU",
        name: "Kauno Apskritis",
      },
      {
        code: "LT-KL",
        name: "Klaipėdos Apskritis",
      },
      {
        code: "LT-MR",
        name: "Marijampolės Apskritis",
      },
      {
        code: "LT-PN",
        name: "Panevėžio Apskritis",
      },
      {
        code: "LT-TA",
        name: "Tauragės Apskritis",
      },
      {
        code: "LT-TE",
        name: "Telšių Apskritis",
      },
      {
        code: "LT-UT",
        name: "Utenos Apskritis",
      },
      {
        code: "LT-VL",
        name: "Vilniaus Apskritis",
      },
      {
        code: "LT-SA",
        name: "Šiaulių Apskritis",
      },
    ],
  },
  {
    code: "LU",
    name: "Luxemburgo",
    states: [
      {
        code: "LU-D",
        name: "Diekirch",
      },
      {
        code: "LU-G",
        name: "Grevenmacher",
      },
      {
        code: "LU-L",
        name: "Luxembourg",
      },
    ],
  },
  {
    code: "MK",
    name: "Macedonia del Norte",
    states: [
      {
        code: "MK-01",
        name: "Aerodrom",
      },
      {
        code: "MK-02",
        name: "Aračinovo",
      },
      {
        code: "MK-03",
        name: "Berovo",
      },
      {
        code: "MK-04",
        name: "Bitola",
      },
      {
        code: "MK-05",
        name: "Bogdanci",
      },
      {
        code: "MK-06",
        name: "Bogovinje",
      },
      {
        code: "MK-07",
        name: "Bosilovo",
      },
      {
        code: "MK-08",
        name: "Brvenica",
      },
      {
        code: "MK-09",
        name: "Butel",
      },
      {
        code: "MK-77",
        name: "Centar",
      },
      {
        code: "MK-78",
        name: "Centar Župa",
      },
      {
        code: "MK-21",
        name: "Debar",
      },
      {
        code: "MK-22",
        name: "Debarca",
      },
      {
        code: "MK-23",
        name: "Delčevo",
      },
      {
        code: "MK-25",
        name: "Demir Hisar",
      },
      {
        code: "MK-24",
        name: "Demir Kapija",
      },
      {
        code: "MK-26",
        name: "Dojran",
      },
      {
        code: "MK-27",
        name: "Dolneni",
      },
      {
        code: "MK-28",
        name: "Drugovo",
      },
      {
        code: "MK-17",
        name: "Gazi Baba",
      },
      {
        code: "MK-18",
        name: "Gevgelija",
      },
      {
        code: "MK-29",
        name: "Gjorče Petrov",
      },
      {
        code: "MK-19",
        name: "Gostivar",
      },
      {
        code: "MK-20",
        name: "Gradsko",
      },
      {
        code: "MK-34",
        name: "Ilinden",
      },
      {
        code: "MK-35",
        name: "Jegunovce",
      },
      {
        code: "MK-37",
        name: "Karbinci",
      },
      {
        code: "MK-38",
        name: "Karpoš",
      },
      {
        code: "MK-36",
        name: "Kavadarci",
      },
      {
        code: "MK-39",
        name: "Kisela Voda",
      },
      {
        code: "MK-40",
        name: "Kičevo",
      },
      {
        code: "MK-41",
        name: "Konče",
      },
      {
        code: "MK-42",
        name: "Kočani",
      },
      {
        code: "MK-43",
        name: "Kratovo",
      },
      {
        code: "MK-44",
        name: "Kriva Palanka",
      },
      {
        code: "MK-45",
        name: "Krivogaštani",
      },
      {
        code: "MK-46",
        name: "Kruševo",
      },
      {
        code: "MK-47",
        name: "Kumanovo",
      },
      {
        code: "MK-48",
        name: "Lipkovo",
      },
      {
        code: "MK-49",
        name: "Lozovo",
      },
      {
        code: "MK-51",
        name: "Makedonska Kamenica",
      },
      {
        code: "MK-52",
        name: "Makedonski Brod",
      },
      {
        code: "MK-50",
        name: "Mavrovo i Rostuša",
      },
      {
        code: "MK-53",
        name: "Mogila",
      },
      {
        code: "MK-54",
        name: "Negotino",
      },
      {
        code: "MK-55",
        name: "Novaci",
      },
      {
        code: "MK-56",
        name: "Novo Selo",
      },
      {
        code: "MK-58",
        name: "Ohrid",
      },
      {
        code: "MK-57",
        name: "Oslomej",
      },
      {
        code: "MK-60",
        name: "Pehčevo",
      },
      {
        code: "MK-59",
        name: "Petrovec",
      },
      {
        code: "MK-61",
        name: "Plasnica",
      },
      {
        code: "MK-62",
        name: "Prilep",
      },
      {
        code: "MK-63",
        name: "Probištip",
      },
      {
        code: "MK-64",
        name: "Radoviš",
      },
      {
        code: "MK-65",
        name: "Rankovce",
      },
      {
        code: "MK-66",
        name: "Resen",
      },
      {
        code: "MK-67",
        name: "Rosoman",
      },
      {
        code: "MK-68",
        name: "Saraj",
      },
      {
        code: "MK-70",
        name: "Sopište",
      },
      {
        code: "MK-71",
        name: "Staro Nagoričane",
      },
      {
        code: "MK-72",
        name: "Struga",
      },
      {
        code: "MK-73",
        name: "Strumica",
      },
      {
        code: "MK-74",
        name: "Studeničani",
      },
      {
        code: "MK-69",
        name: "Sveti Nikole",
      },
      {
        code: "MK-75",
        name: "Tearce",
      },
      {
        code: "MK-76",
        name: "Tetovo",
      },
      {
        code: "MK-10",
        name: "Valandovo",
      },
      {
        code: "MK-11",
        name: "Vasilevo",
      },
      {
        code: "MK-13",
        name: "Veles",
      },
      {
        code: "MK-12",
        name: "Vevčani",
      },
      {
        code: "MK-14",
        name: "Vinica",
      },
      {
        code: "MK-15",
        name: "Vraneštica",
      },
      {
        code: "MK-16",
        name: "Vrapčište",
      },
      {
        code: "MK-31",
        name: "Zajas",
      },
      {
        code: "MK-32",
        name: "Zelenikovo",
      },
      {
        code: "MK-33",
        name: "Zrnovci",
      },
      {
        code: "MK-79",
        name: "Čair",
      },
      {
        code: "MK-80",
        name: "Čaška",
      },
      {
        code: "MK-81",
        name: "Češinovo-Obleševo",
      },
      {
        code: "MK-82",
        name: "Čučer Sandevo",
      },
      {
        code: "MK-83",
        name: "Štip",
      },
      {
        code: "MK-84",
        name: "Šuto Orizari",
      },
      {
        code: "MK-30",
        name: "Želino",
      },
    ],
  },
  {
    code: "MG",
    name: "Madagascar",
    states: [
      {
        code: "MG-T",
        name: "Antananarivo",
      },
      {
        code: "MG-D",
        name: "Antsiranana",
      },
      {
        code: "MG-F",
        name: "Fianarantsoa",
      },
      {
        code: "MG-M",
        name: "Mahajanga",
      },
      {
        code: "MG-A",
        name: "Toamasina",
      },
      {
        code: "MG-U",
        name: "Toliara",
      },
    ],
  },
  {
    code: "MW",
    name: "Malaui",
    states: [
      {
        code: "MW-C",
        name: "Central Region",
      },
      {
        code: "MW-N",
        name: "Northern Region",
      },
      {
        code: "MW-S",
        name: "Southern Region",
      },
    ],
  },
  {
    code: "MY",
    name: "Malasia",
    states: [
      {
        code: "MY-14",
        name: "Wilayah Persekutuan Kuala Lumpur",
      },
      {
        code: "MY-15",
        name: "Wilayah Persekutuan Labuan",
      },
      {
        code: "MY-16",
        name: "Wilayah Persekutuan Putrajaya",
      },
      {
        code: "MY-01",
        name: "Johor",
      },
      {
        code: "MY-02",
        name: "Kedah",
      },
      {
        code: "MY-03",
        name: "Kelantan",
      },
      {
        code: "MY-04",
        name: "Melaka",
      },
      {
        code: "MY-05",
        name: "Negeri Sembilan",
      },
      {
        code: "MY-06",
        name: "Pahang",
      },
      {
        code: "MY-08",
        name: "Perak",
      },
      {
        code: "MY-09",
        name: "Perlis",
      },
      {
        code: "MY-07",
        name: "Pulau Pinang",
      },
      {
        code: "MY-12",
        name: "Sabah",
      },
      {
        code: "MY-13",
        name: "Sarawak",
      },
      {
        code: "MY-10",
        name: "Selangor",
      },
      {
        code: "MY-11",
        name: "Terengganu",
      },
    ],
  },
  {
    code: "MV",
    name: "Maldivas",
    states: [
      {
        code: "MV-CE",
        name: "Central",
      },
      {
        code: "MV-MLE",
        name: "Male",
      },
      {
        code: "MV-NO",
        name: "North",
      },
      {
        code: "MV-NC",
        name: "North Central",
      },
      {
        code: "MV-SU",
        name: "South",
      },
      {
        code: "MV-SC",
        name: "South Central",
      },
      {
        code: "MV-UN",
        name: "Upper North",
      },
      {
        code: "MV-US",
        name: "Upper South",
      },
    ],
  },
  {
    code: "ML",
    name: "Mali",
    states: [
      {
        code: "ML-BKO",
        name: "Bamako",
      },
      {
        code: "ML-7",
        name: "Gao",
      },
      {
        code: "ML-1",
        name: "Kayes",
      },
      {
        code: "ML-8",
        name: "Kidal",
      },
      {
        code: "ML-2",
        name: "Koulikoro",
      },
      {
        code: "ML-5",
        name: "Mopti",
      },
      {
        code: "ML-3",
        name: "Sikasso",
      },
      {
        code: "ML-4",
        name: "Ségou",
      },
      {
        code: "ML-6",
        name: "Tombouctou",
      },
    ],
  },
  {
    code: "MT",
    name: "Malta",
    states: [
      {
        code: "MT-01",
        name: "Attard",
      },
      {
        code: "MT-02",
        name: "Balzan",
      },
      {
        code: "MT-03",
        name: "Birgu",
      },
      {
        code: "MT-04",
        name: "Birkirkara",
      },
      {
        code: "MT-05",
        name: "Birżebbuġa",
      },
      {
        code: "MT-06",
        name: "Bormla",
      },
      {
        code: "MT-07",
        name: "Dingli",
      },
      {
        code: "MT-08",
        name: "Fgura",
      },
      {
        code: "MT-09",
        name: "Floriana",
      },
      {
        code: "MT-10",
        name: "Fontana",
      },
      {
        code: "MT-11",
        name: "Gudja",
      },
      {
        code: "MT-13",
        name: "Għajnsielem",
      },
      {
        code: "MT-14",
        name: "Għarb",
      },
      {
        code: "MT-15",
        name: "Għargħur",
      },
      {
        code: "MT-16",
        name: "Għasri",
      },
      {
        code: "MT-17",
        name: "Għaxaq",
      },
      {
        code: "MT-12",
        name: "Gżira",
      },
      {
        code: "MT-19",
        name: "Iklin",
      },
      {
        code: "MT-20",
        name: "Isla",
      },
      {
        code: "MT-21",
        name: "Kalkara",
      },
      {
        code: "MT-22",
        name: "Kerċem",
      },
      {
        code: "MT-23",
        name: "Kirkop",
      },
      {
        code: "MT-24",
        name: "Lija",
      },
      {
        code: "MT-25",
        name: "Luqa",
      },
      {
        code: "MT-26",
        name: "Marsa",
      },
      {
        code: "MT-27",
        name: "Marsaskala",
      },
      {
        code: "MT-28",
        name: "Marsaxlokk",
      },
      {
        code: "MT-29",
        name: "Mdina",
      },
      {
        code: "MT-30",
        name: "Mellieħa",
      },
      {
        code: "MT-32",
        name: "Mosta",
      },
      {
        code: "MT-33",
        name: "Mqabba",
      },
      {
        code: "MT-34",
        name: "Msida",
      },
      {
        code: "MT-35",
        name: "Mtarfa",
      },
      {
        code: "MT-36",
        name: "Munxar",
      },
      {
        code: "MT-31",
        name: "Mġarr",
      },
      {
        code: "MT-37",
        name: "Nadur",
      },
      {
        code: "MT-38",
        name: "Naxxar",
      },
      {
        code: "MT-39",
        name: "Paola",
      },
      {
        code: "MT-40",
        name: "Pembroke",
      },
      {
        code: "MT-41",
        name: "Pietà",
      },
      {
        code: "MT-42",
        name: "Qala",
      },
      {
        code: "MT-43",
        name: "Qormi",
      },
      {
        code: "MT-44",
        name: "Qrendi",
      },
      {
        code: "MT-45",
        name: "Rabat Għawdex",
      },
      {
        code: "MT-46",
        name: "Rabat Malta",
      },
      {
        code: "MT-47",
        name: "Safi",
      },
      {
        code: "MT-50",
        name: "San Lawrenz",
      },
      {
        code: "MT-51",
        name: "San Pawl il-Baħar",
      },
      {
        code: "MT-48",
        name: "San Ġiljan",
      },
      {
        code: "MT-49",
        name: "San Ġwann",
      },
      {
        code: "MT-52",
        name: "Sannat",
      },
      {
        code: "MT-53",
        name: "Santa Luċija",
      },
      {
        code: "MT-54",
        name: "Santa Venera",
      },
      {
        code: "MT-55",
        name: "Siġġiewi",
      },
      {
        code: "MT-56",
        name: "Sliema",
      },
      {
        code: "MT-57",
        name: "Swieqi",
      },
      {
        code: "MT-58",
        name: "Ta' Xbiex",
      },
      {
        code: "MT-59",
        name: "Tarxien",
      },
      {
        code: "MT-60",
        name: "Valletta",
      },
      {
        code: "MT-61",
        name: "Xagħra",
      },
      {
        code: "MT-62",
        name: "Xewkija",
      },
      {
        code: "MT-63",
        name: "Xgħajra",
      },
      {
        code: "MT-18",
        name: "Ħamrun",
      },
      {
        code: "MT-64",
        name: "Żabbar",
      },
      {
        code: "MT-65",
        name: "Żebbuġ Għawdex",
      },
      {
        code: "MT-66",
        name: "Żebbuġ Malta",
      },
      {
        code: "MT-67",
        name: "Żejtun",
      },
      {
        code: "MT-68",
        name: "Żurrieq",
      },
    ],
  },
  {
    code: "MH",
    name: "Islas Marshall",
    states: [
      {
        code: "MH-L",
        name: "Ralik chain",
      },
      {
        code: "MH-T",
        name: "Ratak chain",
      },
    ],
  },
  {
    code: "MR",
    name: "Mauritania",
    states: [
      {
        code: "MR-07",
        name: "Adrar",
      },
      {
        code: "MR-03",
        name: "Assaba",
      },
      {
        code: "MR-05",
        name: "Brakna",
      },
      {
        code: "MR-08",
        name: "Dakhlet Nouâdhibou",
      },
      {
        code: "MR-04",
        name: "Gorgol",
      },
      {
        code: "MR-10",
        name: "Guidimaka",
      },
      {
        code: "MR-01",
        name: "Hodh ech Chargui",
      },
      {
        code: "MR-02",
        name: "Hodh el Gharbi",
      },
      {
        code: "MR-12",
        name: "Inchiri",
      },
      {
        code: "MR-NKC",
        name: "Nouakchott",
      },
      {
        code: "MR-09",
        name: "Tagant",
      },
      {
        code: "MR-11",
        name: "Tiris Zemmour",
      },
      {
        code: "MR-06",
        name: "Trarza",
      },
    ],
  },
  {
    code: "MU",
    name: "Mauricio",
    states: [
      {
        code: "MU-AG",
        name: "Agalega Islands",
      },
      {
        code: "MU-BR",
        name: "Beau Bassin-Rose Hill",
      },
      {
        code: "MU-BL",
        name: "Black River",
      },
      {
        code: "MU-CC",
        name: "Cargados Carajos Shoals",
      },
      {
        code: "MU-CU",
        name: "Curepipe",
      },
      {
        code: "MU-FL",
        name: "Flacq",
      },
      {
        code: "MU-GP",
        name: "Grand Port",
      },
      {
        code: "MU-MO",
        name: "Moka",
      },
      {
        code: "MU-PA",
        name: "Pamplemousses",
      },
      {
        code: "MU-PW",
        name: "Plaines Wilhems",
      },
      {
        code: "MU-PL",
        name: "Port Louis",
      },
      {
        code: "MU-PU",
        name: "Port Louis",
      },
      {
        code: "MU-QB",
        name: "Quatre Bornes",
      },
      {
        code: "MU-RR",
        name: "Rivière du Rempart",
      },
      {
        code: "MU-RO",
        name: "Rodrigues Island",
      },
      {
        code: "MU-SA",
        name: "Savanne",
      },
      {
        code: "MU-VP",
        name: "Vacoas-Phoenix",
      },
    ],
  },
  {
    code: "MX",
    name: "México",
    states: [
      {
        code: "MX-DIF",
        name: "Distrito Federal",
      },
      {
        code: "MX-AGU",
        name: "Aguascalientes",
      },
      {
        code: "MX-BCN",
        name: "Baja California",
      },
      {
        code: "MX-BCS",
        name: "Baja California Sur",
      },
      {
        code: "MX-CAM",
        name: "Campeche",
      },
      {
        code: "MX-CHP",
        name: "Chiapas",
      },
      {
        code: "MX-CHH",
        name: "Chihuahua",
      },
      {
        code: "MX-COA",
        name: "Coahuila",
      },
      {
        code: "MX-COL",
        name: "Colima",
      },
      {
        code: "MX-DUR",
        name: "Durango",
      },
      {
        code: "MX-GUA",
        name: "Guanajuato",
      },
      {
        code: "MX-GRO",
        name: "Guerrero",
      },
      {
        code: "MX-HID",
        name: "Hidalgo",
      },
      {
        code: "MX-JAL",
        name: "Jalisco",
      },
      {
        code: "MX-MIC",
        name: "Michoacán",
      },
      {
        code: "MX-MOR",
        name: "Morelos",
      },
      {
        code: "MX-MEX",
        name: "México",
      },
      {
        code: "MX-NAY",
        name: "Nayarit",
      },
      {
        code: "MX-NLE",
        name: "Nuevo León",
      },
      {
        code: "MX-OAX",
        name: "Oaxaca",
      },
      {
        code: "MX-PUE",
        name: "Puebla",
      },
      {
        code: "MX-QUE",
        name: "Querétaro",
      },
      {
        code: "MX-ROO",
        name: "Quintana Roo",
      },
      {
        code: "MX-SLP",
        name: "San Luis Potosí",
      },
      {
        code: "MX-SIN",
        name: "Sinaloa",
      },
      {
        code: "MX-SON",
        name: "Sonora",
      },
      {
        code: "MX-TAB",
        name: "Tabasco",
      },
      {
        code: "MX-TAM",
        name: "Tamaulipas",
      },
      {
        code: "MX-TLA",
        name: "Tlaxcala",
      },
      {
        code: "MX-VER",
        name: "Veracruz",
      },
      {
        code: "MX-YUC",
        name: "Yucatán",
      },
      {
        code: "MX-ZAC",
        name: "Zacatecas",
      },
    ],
  },
  {
    code: "FM",
    name: "Estados Federados de Micronesia",
    states: [
      {
        code: "FM-TRK",
        name: "Chuuk",
      },
      {
        code: "FM-KSA",
        name: "Kosrae",
      },
      {
        code: "FM-PNI",
        name: "Pohnpei",
      },
      {
        code: "FM-YAP",
        name: "Yap",
      },
    ],
  },
  {
    code: "MD",
    name: "Moldavia",
    states: [
      {
        code: "MD-AN",
        name: "Anenii Noi",
      },
      {
        code: "MD-BS",
        name: "Basarabeasca",
      },
      {
        code: "MD-BR",
        name: "Briceni",
      },
      {
        code: "MD-BA",
        name: "Bălţi",
      },
      {
        code: "MD-CA",
        name: "Cahul",
      },
      {
        code: "MD-CT",
        name: "Cantemir",
      },
      {
        code: "MD-CU",
        name: "Chişinău",
      },
      {
        code: "MD-CM",
        name: "Cimişlia",
      },
      {
        code: "MD-CR",
        name: "Criuleni",
      },
      {
        code: "MD-CL",
        name: "Călăraşi",
      },
      {
        code: "MD-CS",
        name: "Căuşeni",
      },
      {
        code: "MD-DO",
        name: "Donduşeni",
      },
      {
        code: "MD-DR",
        name: "Drochia",
      },
      {
        code: "MD-DU",
        name: "Dubăsari",
      },
      {
        code: "MD-ED",
        name: "Edineţ",
      },
      {
        code: "MD-FL",
        name: "Floreşti",
      },
      {
        code: "MD-FA",
        name: "Făleşti",
      },
      {
        code: "MD-GL",
        name: "Glodeni",
      },
      {
        code: "MD-GA",
        name: "Găgăuzia, Unitatea teritorială autonomă",
      },
      {
        code: "MD-HI",
        name: "Hînceşti",
      },
      {
        code: "MD-IA",
        name: "Ialoveni",
      },
      {
        code: "MD-LE",
        name: "Leova",
      },
      {
        code: "MD-NI",
        name: "Nisporeni",
      },
      {
        code: "MD-OC",
        name: "Ocniţa",
      },
      {
        code: "MD-OR",
        name: "Orhei",
      },
      {
        code: "MD-RE",
        name: "Rezina",
      },
      {
        code: "MD-RI",
        name: "Rîşcani",
      },
      {
        code: "MD-SO",
        name: "Soroca",
      },
      {
        code: "MD-ST",
        name: "Străşeni",
      },
      {
        code: "MD-SN",
        name: "Stînga Nistrului, unitatea teritorială din",
      },
      {
        code: "MD-SI",
        name: "Sîngerei",
      },
      {
        code: "MD-TA",
        name: "Taraclia",
      },
      {
        code: "MD-TE",
        name: "Teleneşti",
      },
      {
        code: "MD-BD",
        name: "Tighina",
      },
      {
        code: "MD-UN",
        name: "Ungheni",
      },
      {
        code: "MD-SD",
        name: "Şoldăneşti",
      },
      {
        code: "MD-SV",
        name: "Ştefan Vodă",
      },
    ],
  },
  {
    code: "MC",
    name: "Mónaco",
    states: [
      {
        code: "MC-FO",
        name: "Fontvieille",
      },
      {
        code: "MC-JE",
        name: "Jardin Exotique",
      },
      {
        code: "MC-CL",
        name: "La Colle",
      },
      {
        code: "MC-CO",
        name: "La Condamine",
      },
      {
        code: "MC-GA",
        name: "La Gare",
      },
      {
        code: "MC-SO",
        name: "La Source",
      },
      {
        code: "MC-LA",
        name: "Larvotto",
      },
      {
        code: "MC-MA",
        name: "Malbousquet",
      },
      {
        code: "MC-MO",
        name: "Monaco-Ville",
      },
      {
        code: "MC-MG",
        name: "Moneghetti",
      },
      {
        code: "MC-MC",
        name: "Monte-Carlo",
      },
      {
        code: "MC-MU",
        name: "Moulins",
      },
      {
        code: "MC-PH",
        name: "Port-Hercule",
      },
      {
        code: "MC-SR",
        name: "Saint-Roman",
      },
      {
        code: "MC-SD",
        name: "Sainte-Dévote",
      },
      {
        code: "MC-SP",
        name: "Spélugues",
      },
      {
        code: "MC-VR",
        name: "Vallon de la Rousse",
      },
    ],
  },
  {
    code: "MN",
    name: "Mongolia",
    states: [
      {
        code: "MN-073",
        name: "Arhangay",
      },
      {
        code: "MN-071",
        name: "Bayan-Ölgiy",
      },
      {
        code: "MN-069",
        name: "Bayanhongor",
      },
      {
        code: "MN-067",
        name: "Bulgan",
      },
      {
        code: "MN-037",
        name: "Darhan uul",
      },
      {
        code: "MN-061",
        name: "Dornod",
      },
      {
        code: "MN-063",
        name: "Dornogovĭ",
      },
      {
        code: "MN-059",
        name: "Dundgovĭ",
      },
      {
        code: "MN-057",
        name: "Dzavhan",
      },
      {
        code: "MN-065",
        name: "Govĭ-Altay",
      },
      {
        code: "MN-064",
        name: "Govĭ-Sümber",
      },
      {
        code: "MN-039",
        name: "Hentiy",
      },
      {
        code: "MN-043",
        name: "Hovd",
      },
      {
        code: "MN-041",
        name: "Hövsgöl",
      },
      {
        code: "MN-035",
        name: "Orhon",
      },
      {
        code: "MN-049",
        name: "Selenge",
      },
      {
        code: "MN-051",
        name: "Sühbaatar",
      },
      {
        code: "MN-047",
        name: "Töv",
      },
      {
        code: "MN-1",
        name: "Ulaanbaatar",
      },
      {
        code: "MN-046",
        name: "Uvs",
      },
      {
        code: "MN-053",
        name: "Ömnögovĭ",
      },
      {
        code: "MN-055",
        name: "Övörhangay",
      },
    ],
  },
  {
    code: "ME",
    name: "Montenegro",
    states: [
      {
        code: "ME-01",
        name: "Andrijevica",
      },
      {
        code: "ME-02",
        name: "Bar",
      },
      {
        code: "ME-03",
        name: "Berane",
      },
      {
        code: "ME-04",
        name: "Bijelo Polje",
      },
      {
        code: "ME-05",
        name: "Budva",
      },
      {
        code: "ME-06",
        name: "Cetinje",
      },
      {
        code: "ME-07",
        name: "Danilovgrad",
      },
      {
        code: "ME-22",
        name: "Gusinje",
      },
      {
        code: "ME-08",
        name: "Herceg-Novi",
      },
      {
        code: "ME-09",
        name: "Kolašin",
      },
      {
        code: "ME-10",
        name: "Kotor",
      },
      {
        code: "ME-11",
        name: "Mojkovac",
      },
      {
        code: "ME-12",
        name: "Nikšić",
      },
      {
        code: "ME-23",
        name: "Petnjica",
      },
      {
        code: "ME-13",
        name: "Plav",
      },
      {
        code: "ME-14",
        name: "Pljevlja",
      },
      {
        code: "ME-15",
        name: "Plužine",
      },
      {
        code: "ME-16",
        name: "Podgorica",
      },
      {
        code: "ME-17",
        name: "Rožaje",
      },
      {
        code: "ME-19",
        name: "Tivat",
      },
      {
        code: "ME-20",
        name: "Ulcinj",
      },
      {
        code: "ME-18",
        name: "Šavnik",
      },
      {
        code: "ME-21",
        name: "Žabljak",
      },
    ],
  },
  {
    code: "MA",
    name: "Marruecos",
    states: [
      {
        code: "MA-09",
        name: "Chaouia-Ouardigha",
      },
      {
        code: "MA-10",
        name: "Doukhala-Abda",
      },
      {
        code: "MA-05",
        name: "Fès-Boulemane",
      },
      {
        code: "MA-02",
        name: "Gharb-Chrarda-Beni Hssen",
      },
      {
        code: "MA-08",
        name: "Grand Casablanca",
      },
      {
        code: "MA-14",
        name: "Guelmim-Es Smara",
      },
      {
        code: "MA-04",
        name: "L'Oriental",
      },
      {
        code: "MA-15",
        name: "Laâyoune-Boujdour-Sakia el Hamra",
      },
      {
        code: "MA-11",
        name: "Marrakech-Tensift-Al Haouz",
      },
      {
        code: "MA-06",
        name: "Meknès-Tafilalet",
      },
      {
        code: "MA-16",
        name: "Oued ed Dahab-Lagouira",
      },
      {
        code: "MA-07",
        name: "Rabat-Salé-Zemmour-Zaer",
      },
      {
        code: "MA-13",
        name: "Souss-Massa-Drâa",
      },
      {
        code: "MA-12",
        name: "Tadla-Azilal",
      },
      {
        code: "MA-01",
        name: "Tanger-Tétouan",
      },
      {
        code: "MA-03",
        name: "Taza-Al Hoceima-Taounate",
      },
    ],
  },
  {
    code: "MZ",
    name: "Mozambique",
    states: [
      {
        code: "MZ-P",
        name: "Cabo Delgado",
      },
      {
        code: "MZ-G",
        name: "Gaza",
      },
      {
        code: "MZ-I",
        name: "Inhambane",
      },
      {
        code: "MZ-B",
        name: "Manica",
      },
      {
        code: "MZ-MPM",
        name: "Maputo",
      },
      {
        code: "MZ-L",
        name: "Maputo",
      },
      {
        code: "MZ-N",
        name: "Nampula",
      },
      {
        code: "MZ-A",
        name: "Niassa",
      },
      {
        code: "MZ-S",
        name: "Sofala",
      },
      {
        code: "MZ-T",
        name: "Tete",
      },
      {
        code: "MZ-Q",
        name: "Zambézia",
      },
    ],
  },
  {
    code: "MM",
    name: "Myanmar",
    states: [
      {
        code: "MM-07",
        name: "Ayeyarwady",
      },
      {
        code: "MM-02",
        name: "Bago",
      },
      {
        code: "MM-14",
        name: "Chin",
      },
      {
        code: "MM-11",
        name: "Kachin",
      },
      {
        code: "MM-12",
        name: "Kayah",
      },
      {
        code: "MM-13",
        name: "Kayin",
      },
      {
        code: "MM-03",
        name: "Magway",
      },
      {
        code: "MM-04",
        name: "Mandalay",
      },
      {
        code: "MM-15",
        name: "Mon",
      },
      {
        code: "MM-16",
        name: "Rakhine",
      },
      {
        code: "MM-01",
        name: "Sagaing",
      },
      {
        code: "MM-17",
        name: "Shan",
      },
      {
        code: "MM-05",
        name: "Tanintharyi",
      },
      {
        code: "MM-06",
        name: "Yangon",
      },
    ],
  },
  {
    code: "NA",
    name: "Namibia",
    states: [
      {
        code: "NA-ER",
        name: "Erongo",
      },
      {
        code: "NA-HA",
        name: "Hardap",
      },
      {
        code: "NA-KA",
        name: "Karas",
      },
      {
        code: "NA-KE",
        name: "Kavango East",
      },
      {
        code: "NA-KW",
        name: "Kavango West",
      },
      {
        code: "NA-KH",
        name: "Khomas",
      },
      {
        code: "NA-KU",
        name: "Kunene",
      },
      {
        code: "NA-OW",
        name: "Ohangwena",
      },
      {
        code: "NA-OH",
        name: "Omaheke",
      },
      {
        code: "NA-OS",
        name: "Omusati",
      },
      {
        code: "NA-ON",
        name: "Oshana",
      },
      {
        code: "NA-OT",
        name: "Oshikoto",
      },
      {
        code: "NA-OD",
        name: "Otjozondjupa",
      },
      {
        code: "NA-CA",
        name: "Zambezi",
      },
    ],
  },
  {
    code: "NR",
    name: "Nauru",
    states: [
      {
        code: "NR-01",
        name: "Aiwo",
      },
      {
        code: "NR-02",
        name: "Anabar",
      },
      {
        code: "NR-03",
        name: "Anetan",
      },
      {
        code: "NR-04",
        name: "Anibare",
      },
      {
        code: "NR-05",
        name: "Baiti",
      },
      {
        code: "NR-06",
        name: "Boe",
      },
      {
        code: "NR-07",
        name: "Buada",
      },
      {
        code: "NR-08",
        name: "Denigomodu",
      },
      {
        code: "NR-09",
        name: "Ewa",
      },
      {
        code: "NR-10",
        name: "Ijuw",
      },
      {
        code: "NR-11",
        name: "Meneng",
      },
      {
        code: "NR-12",
        name: "Nibok",
      },
      {
        code: "NR-13",
        name: "Uaboe",
      },
      {
        code: "NR-14",
        name: "Yaren",
      },
    ],
  },
  {
    code: "NP",
    name: "Nepal",
    states: [
      {
        code: "NP-2",
        name: "Madhya Pashchimanchal",
      },
      {
        code: "NP-1",
        name: "Madhyamanchal",
      },
      {
        code: "NP-3",
        name: "Pashchimanchal",
      },
      {
        code: "NP-4",
        name: "Purwanchal",
      },
      {
        code: "NP-5",
        name: "Sudur Pashchimanchal",
      },
    ],
  },
  {
    code: "NL",
    name: "Países Bajos",
    states: [
      {
        code: "NL-DR",
        name: "Drenthe",
      },
      {
        code: "NL-FL",
        name: "Flevoland",
      },
      {
        code: "NL-FR",
        name: "Fryslân",
      },
      {
        code: "NL-GE",
        name: "Gelderland",
      },
      {
        code: "NL-GR",
        name: "Groningen",
      },
      {
        code: "NL-LI",
        name: "Limburg",
      },
      {
        code: "NL-NB",
        name: "Noord-Brabant",
      },
      {
        code: "NL-NH",
        name: "Noord-Holland",
      },
      {
        code: "NL-OV",
        name: "Overijssel",
      },
      {
        code: "NL-UT",
        name: "Utrecht",
      },
      {
        code: "NL-ZE",
        name: "Zeeland",
      },
      {
        code: "NL-ZH",
        name: "Zuid-Holland",
      },
      {
        code: "NL-AW",
        name: "Aruba",
      },
      {
        code: "NL-CW",
        name: "Curaçao",
      },
      {
        code: "NL-SX",
        name: "Sint Maarten",
      },
      {
        code: "NL-BQ1",
        name: "Bonaire",
      },
      {
        code: "NL-BQ2",
        name: "Saba",
      },
      {
        code: "NL-BQ3",
        name: "Sint Eustatius",
      },
    ],
  },
  {
    code: "NZ",
    name: "Nueva Zelanda",
    states: [
      {
        code: "NZ-N",
        name: "North Island",
      },
      {
        code: "NZ-S",
        name: "South Island",
      },
      {
        code: "NZ-AUK",
        name: "Auckland",
      },
      {
        code: "NZ-BOP",
        name: "Bay of Plenty",
      },
      {
        code: "NZ-CAN",
        name: "Canterbury",
      },
      {
        code: "NZ-HKB",
        name: "Hawke's Bay",
      },
      {
        code: "NZ-MWT",
        name: "Manawatu-Wanganui",
      },
      {
        code: "NZ-NTL",
        name: "Northland",
      },
      {
        code: "NZ-OTA",
        name: "Otago",
      },
      {
        code: "NZ-STL",
        name: "Southland",
      },
      {
        code: "NZ-TKI",
        name: "Taranaki",
      },
      {
        code: "NZ-WKO",
        name: "Waikato",
      },
      {
        code: "NZ-WGN",
        name: "Wellington",
      },
      {
        code: "NZ-WTC",
        name: "West Coast",
      },
      {
        code: "NZ-CIT",
        name: "Chatham Islands Territory",
      },
      {
        code: "NZ-GIS",
        name: "Gisborne District",
      },
      {
        code: "NZ-MBH",
        name: "Marlborough District",
      },
      {
        code: "NZ-NSN",
        name: "Nelson City",
      },
      {
        code: "NZ-TAS",
        name: "Tasman District",
      },
    ],
  },
  {
    code: "NI",
    name: "Nicaragua",
    states: [
      {
        code: "NI-AN",
        name: "Atlántico Norte",
      },
      {
        code: "NI-AS",
        name: "Atlántico Sur",
      },
      {
        code: "NI-BO",
        name: "Boaco",
      },
      {
        code: "NI-CA",
        name: "Carazo",
      },
      {
        code: "NI-CI",
        name: "Chinandega",
      },
      {
        code: "NI-CO",
        name: "Chontales",
      },
      {
        code: "NI-ES",
        name: "Estelí",
      },
      {
        code: "NI-GR",
        name: "Granada",
      },
      {
        code: "NI-JI",
        name: "Jinotega",
      },
      {
        code: "NI-LE",
        name: "León",
      },
      {
        code: "NI-MD",
        name: "Madriz",
      },
      {
        code: "NI-MN",
        name: "Managua",
      },
      {
        code: "NI-MS",
        name: "Masaya",
      },
      {
        code: "NI-MT",
        name: "Matagalpa",
      },
      {
        code: "NI-NS",
        name: "Nueva Segovia",
      },
      {
        code: "NI-RI",
        name: "Rivas",
      },
      {
        code: "NI-SJ",
        name: "Río San Juan",
      },
    ],
  },
  {
    code: "NE",
    name: "Níger",
    states: [
      {
        code: "NE-1",
        name: "Agadez",
      },
      {
        code: "NE-2",
        name: "Diffa",
      },
      {
        code: "NE-3",
        name: "Dosso",
      },
      {
        code: "NE-4",
        name: "Maradi",
      },
      {
        code: "NE-8",
        name: "Niamey",
      },
      {
        code: "NE-5",
        name: "Tahoua",
      },
      {
        code: "NE-6",
        name: "Tillabéri",
      },
      {
        code: "NE-7",
        name: "Zinder",
      },
    ],
  },
  {
    code: "NG",
    name: "Nigeria",
    states: [
      {
        code: "NG-AB",
        name: "Abia",
      },
      {
        code: "NG-FC",
        name: "Abuja Federal Capital Territory",
      },
      {
        code: "NG-AD",
        name: "Adamawa",
      },
      {
        code: "NG-AK",
        name: "Akwa Ibom",
      },
      {
        code: "NG-AN",
        name: "Anambra",
      },
      {
        code: "NG-BA",
        name: "Bauchi",
      },
      {
        code: "NG-BY",
        name: "Bayelsa",
      },
      {
        code: "NG-BE",
        name: "Benue",
      },
      {
        code: "NG-BO",
        name: "Borno",
      },
      {
        code: "NG-CR",
        name: "Cross River",
      },
      {
        code: "NG-DE",
        name: "Delta",
      },
      {
        code: "NG-EB",
        name: "Ebonyi",
      },
      {
        code: "NG-ED",
        name: "Edo",
      },
      {
        code: "NG-EK",
        name: "Ekiti",
      },
      {
        code: "NG-EN",
        name: "Enugu",
      },
      {
        code: "NG-GO",
        name: "Gombe",
      },
      {
        code: "NG-IM",
        name: "Imo",
      },
      {
        code: "NG-JI",
        name: "Jigawa",
      },
      {
        code: "NG-KD",
        name: "Kaduna",
      },
      {
        code: "NG-KN",
        name: "Kano",
      },
      {
        code: "NG-KT",
        name: "Katsina",
      },
      {
        code: "NG-KE",
        name: "Kebbi",
      },
      {
        code: "NG-KO",
        name: "Kogi",
      },
      {
        code: "NG-KW",
        name: "Kwara",
      },
      {
        code: "NG-LA",
        name: "Lagos",
      },
      {
        code: "NG-NA",
        name: "Nassarawa",
      },
      {
        code: "NG-NI",
        name: "Niger",
      },
      {
        code: "NG-OG",
        name: "Ogun",
      },
      {
        code: "NG-ON",
        name: "Ondo",
      },
      {
        code: "NG-OS",
        name: "Osun",
      },
      {
        code: "NG-OY",
        name: "Oyo",
      },
      {
        code: "NG-PL",
        name: "Plateau",
      },
      {
        code: "NG-RI",
        name: "Rivers",
      },
      {
        code: "NG-SO",
        name: "Sokoto",
      },
      {
        code: "NG-TA",
        name: "Taraba",
      },
      {
        code: "NG-YO",
        name: "Yobe",
      },
      {
        code: "NG-ZA",
        name: "Zamfara",
      },
    ],
  },
  {
    code: "NO",
    name: "Noruega",
    states: [
      {
        code: "NO-02",
        name: "Akershus",
      },
      {
        code: "NO-09",
        name: "Aust-Agder",
      },
      {
        code: "NO-06",
        name: "Buskerud",
      },
      {
        code: "NO-20",
        name: "Finnmark",
      },
      {
        code: "NO-04",
        name: "Hedmark",
      },
      {
        code: "NO-12",
        name: "Hordaland",
      },
      {
        code: "NO-22",
        name: "Jan Mayen",
      },
      {
        code: "NO-15",
        name: "Møre og Romsdal",
      },
      {
        code: "NO-17",
        name: "Nord-Trøndelag",
      },
      {
        code: "NO-18",
        name: "Nordland",
      },
      {
        code: "NO-05",
        name: "Oppland",
      },
      {
        code: "NO-03",
        name: "Oslo",
      },
      {
        code: "NO-11",
        name: "Rogaland",
      },
      {
        code: "NO-14",
        name: "Sogn og Fjordane",
      },
      {
        code: "NO-21",
        name: "Svalbard",
      },
      {
        code: "NO-16",
        name: "Sør-Trøndelag",
      },
      {
        code: "NO-08",
        name: "Telemark",
      },
      {
        code: "NO-19",
        name: "Troms",
      },
      {
        code: "NO-10",
        name: "Vest-Agder",
      },
      {
        code: "NO-07",
        name: "Vestfold",
      },
      {
        code: "NO-01",
        name: "Østfold",
      },
    ],
  },
  {
    code: "OM",
    name: "Omán",
    states: [
      {
        code: "OM-DA",
        name: "Ad Dākhilīyah",
      },
      {
        code: "OM-BU",
        name: "Al Buraymī",
      },
      {
        code: "OM-BA",
        name: "Al Bāţinah",
      },
      {
        code: "OM-WU",
        name: "Al Wusţá",
      },
      {
        code: "OM-SH",
        name: "Ash Sharqīyah",
      },
      {
        code: "OM-ZA",
        name: "Az̧ Z̧āhirah",
      },
      {
        code: "OM-MA",
        name: "Masqaţ",
      },
      {
        code: "OM-MU",
        name: "Musandam",
      },
      {
        code: "OM-ZU",
        name: "Z̧ufār",
      },
    ],
  },
  {
    code: "PK",
    name: "Pakistán",
    states: [
      {
        code: "PK-JK",
        name: "Azad Kashmir",
      },
      {
        code: "PK-BA",
        name: "Balochistan",
      },
      {
        code: "PK-TA",
        name: "Federally Administered Tribal Areas",
      },
      {
        code: "PK-GB",
        name: "Gilgit-Baltistan",
      },
      {
        code: "PK-IS",
        name: "Islamabad",
      },
      {
        code: "PK-KP",
        name: "Khyber Pakhtunkhwa",
      },
      {
        code: "PK-PB",
        name: "Punjab",
      },
      {
        code: "PK-SD",
        name: "Sindh",
      },
    ],
  },
  {
    code: "PW",
    name: "Palaos",
    states: [
      {
        code: "PW-002",
        name: "Aimeliik",
      },
      {
        code: "PW-004",
        name: "Airai",
      },
      {
        code: "PW-010",
        name: "Angaur",
      },
      {
        code: "PW-050",
        name: "Hatobohei",
      },
      {
        code: "PW-100",
        name: "Kayangel",
      },
      {
        code: "PW-150",
        name: "Koror",
      },
      {
        code: "PW-212",
        name: "Melekeok",
      },
      {
        code: "PW-214",
        name: "Ngaraard",
      },
      {
        code: "PW-218",
        name: "Ngarchelong",
      },
      {
        code: "PW-222",
        name: "Ngardmau",
      },
      {
        code: "PW-224",
        name: "Ngatpang",
      },
      {
        code: "PW-226",
        name: "Ngchesar",
      },
      {
        code: "PW-227",
        name: "Ngeremlengui",
      },
      {
        code: "PW-228",
        name: "Ngiwal",
      },
      {
        code: "PW-350",
        name: "Peleliu",
      },
      {
        code: "PW-370",
        name: "Sonsorol",
      },
    ],
  },
  {
    code: "PS",
    name: "Palestina",
    states: [
      {
        code: "PS-BTH",
        name: "Bethlehem",
      },
      {
        code: "PS-DEB",
        name: "Deir El Balah",
      },
      {
        code: "PS-GZA",
        name: "Gaza",
      },
      {
        code: "PS-HBN",
        name: "Hebron",
      },
      {
        code: "PS-JEN",
        name: "Jenin",
      },
      {
        code: "PS-JRH",
        name: "Jericho – Al Aghwar",
      },
      {
        code: "PS-JEM",
        name: "Jerusalem",
      },
      {
        code: "PS-KYS",
        name: "Khan Yunis",
      },
      {
        code: "PS-NBS",
        name: "Nablus",
      },
      {
        code: "PS-NGZ",
        name: "North Gaza",
      },
      {
        code: "PS-QQA",
        name: "Qalqilya",
      },
      {
        code: "PS-RFH",
        name: "Rafah",
      },
      {
        code: "PS-RBH",
        name: "Ramallah",
      },
      {
        code: "PS-SLT",
        name: "Salfit",
      },
      {
        code: "PS-TBS",
        name: "Tubas",
      },
      {
        code: "PS-TKM",
        name: "Tulkarm",
      },
    ],
  },
  {
    code: "PA",
    name: "Panamá",
    states: [
      {
        code: "PA-1",
        name: "Bocas del Toro",
      },
      {
        code: "PA-4",
        name: "Chiriquí",
      },
      {
        code: "PA-2",
        name: "Coclé",
      },
      {
        code: "PA-3",
        name: "Colón",
      },
      {
        code: "PA-5",
        name: "Darién",
      },
      {
        code: "PA-EM",
        name: "Emberá",
      },
      {
        code: "PA-6",
        name: "Herrera",
      },
      {
        code: "PA-KY",
        name: "Kuna Yala",
      },
      {
        code: "PA-7",
        name: "Los Santos",
      },
      {
        code: "PA-NB",
        name: "Ngöbe-Buglé",
      },
      {
        code: "PA-8",
        name: "Panamá",
      },
      {
        code: "PA-10",
        name: "Panamá Oeste",
      },
      {
        code: "PA-9",
        name: "Veraguas",
      },
    ],
  },
  {
    code: "PG",
    name: "Papua Nueva Guinea",
    states: [
      {
        code: "PG-NSB",
        name: "Bougainville",
      },
      {
        code: "PG-CPM",
        name: "Central",
      },
      {
        code: "PG-CPK",
        name: "Chimbu",
      },
      {
        code: "PG-EBR",
        name: "East New Britain",
      },
      {
        code: "PG-ESW",
        name: "East Sepik",
      },
      {
        code: "PG-EHG",
        name: "Eastern Highlands",
      },
      {
        code: "PG-EPW",
        name: "Enga",
      },
      {
        code: "PG-GPK",
        name: "Gulf",
      },
      {
        code: "PG-MPM",
        name: "Madang",
      },
      {
        code: "PG-MRL",
        name: "Manus",
      },
      {
        code: "PG-MBA",
        name: "Milne Bay",
      },
      {
        code: "PG-MPL",
        name: "Morobe",
      },
      {
        code: "PG-NCD",
        name: "National Capital District",
      },
      {
        code: "PG-NIK",
        name: "New Ireland",
      },
      {
        code: "PG-NPP",
        name: "Northern",
      },
      {
        code: "PG-SAN",
        name: "Sandaun",
      },
      {
        code: "PG-SHM",
        name: "Southern Highlands",
      },
      {
        code: "PG-WBK",
        name: "West New Britain",
      },
      {
        code: "PG-WPD",
        name: "Western",
      },
      {
        code: "PG-WHM",
        name: "Western Highlands",
      },
    ],
  },
  {
    code: "PY",
    name: "Paraguay",
    states: [
      {
        code: "PY-16",
        name: "Alto Paraguay",
      },
      {
        code: "PY-10",
        name: "Alto Paraná",
      },
      {
        code: "PY-13",
        name: "Amambay",
      },
      {
        code: "PY-ASU",
        name: "Asunción",
      },
      {
        code: "PY-19",
        name: "Boquerón",
      },
      {
        code: "PY-5",
        name: "Caaguazú",
      },
      {
        code: "PY-6",
        name: "Caazapá",
      },
      {
        code: "PY-14",
        name: "Canindeyú",
      },
      {
        code: "PY-11",
        name: "Central",
      },
      {
        code: "PY-1",
        name: "Concepción",
      },
      {
        code: "PY-3",
        name: "Cordillera",
      },
      {
        code: "PY-4",
        name: "Guairá",
      },
      {
        code: "PY-7",
        name: "Itapúa",
      },
      {
        code: "PY-8",
        name: "Misiones",
      },
      {
        code: "PY-9",
        name: "Paraguarí",
      },
      {
        code: "PY-15",
        name: "Presidente Hayes",
      },
      {
        code: "PY-2",
        name: "San Pedro",
      },
      {
        code: "PY-12",
        name: "Ñeembucú",
      },
    ],
  },
  {
    code: "PE",
    name: "Perú",
    states: [
      {
        code: "PE-AMA",
        name: "Amazonas",
      },
      {
        code: "PE-ANC",
        name: "Ancash",
      },
      {
        code: "PE-APU",
        name: "Apurímac",
      },
      {
        code: "PE-ARE",
        name: "Arequipa",
      },
      {
        code: "PE-AYA",
        name: "Ayacucho",
      },
      {
        code: "PE-CAJ",
        name: "Cajamarca",
      },
      {
        code: "PE-CUS",
        name: "Cusco",
      },
      {
        code: "PE-CAL",
        name: "El Callao",
      },
      {
        code: "PE-HUV",
        name: "Huancavelica",
      },
      {
        code: "PE-HUC",
        name: "Huánuco",
      },
      {
        code: "PE-ICA",
        name: "Ica",
      },
      {
        code: "PE-JUN",
        name: "Junín",
      },
      {
        code: "PE-LAL",
        name: "La Libertad",
      },
      {
        code: "PE-LAM",
        name: "Lambayeque",
      },
      {
        code: "PE-LIM",
        name: "Lima",
      },
      {
        code: "PE-LOR",
        name: "Loreto",
      },
      {
        code: "PE-MDD",
        name: "Madre de Dios",
      },
      {
        code: "PE-MOQ",
        name: "Moquegua",
      },
      {
        code: "PE-LMA",
        name: "Municipalidad Metropolitana de Lima",
      },
      {
        code: "PE-PAS",
        name: "Pasco",
      },
      {
        code: "PE-PIU",
        name: "Piura",
      },
      {
        code: "PE-PUN",
        name: "Puno",
      },
      {
        code: "PE-SAM",
        name: "San Martín",
      },
      {
        code: "PE-TAC",
        name: "Tacna",
      },
      {
        code: "PE-TUM",
        name: "Tumbes",
      },
      {
        code: "PE-UCA",
        name: "Ucayali",
      },
    ],
  },
  {
    code: "PH",
    name: "Filipinas",
    states: [
      {
        code: "PH-14",
        name: "Autonomous Region in Muslim Mindanao",
      },
      {
        code: "PH-05",
        name: "Bicol",
      },
      {
        code: "PH-02",
        name: "Cagayan Valley",
      },
      {
        code: "PH-40",
        name: "Calabarzon",
      },
      {
        code: "PH-13",
        name: "Caraga",
      },
      {
        code: "PH-03",
        name: "Central Luzon",
      },
      {
        code: "PH-07",
        name: "Central Visayas",
      },
      {
        code: "PH-15",
        name: "Cordillera Administrative Region",
      },
      {
        code: "PH-11",
        name: "Davao",
      },
      {
        code: "PH-08",
        name: "Eastern Visayas",
      },
      {
        code: "PH-01",
        name: "Ilocos",
      },
      {
        code: "PH-41",
        name: "Mimaropa",
      },
      {
        code: "PH-00",
        name: "National Capital Region",
      },
      {
        code: "PH-10",
        name: "Northern Mindanao",
      },
      {
        code: "PH-12",
        name: "Soccsksargen",
      },
      {
        code: "PH-06",
        name: "Western Visayas",
      },
      {
        code: "PH-09",
        name: "Zamboanga Peninsula",
      },
    ],
  },
  {
    code: "PL",
    name: "Polonia",
    states: [
      {
        code: "PL-DS",
        name: "Dolnośląskie",
      },
      {
        code: "PL-KP",
        name: "Kujawsko-pomorskie",
      },
      {
        code: "PL-LU",
        name: "Lubelskie",
      },
      {
        code: "PL-LB",
        name: "Lubuskie",
      },
      {
        code: "PL-MZ",
        name: "Mazowieckie",
      },
      {
        code: "PL-MA",
        name: "Małopolskie",
      },
      {
        code: "PL-OP",
        name: "Opolskie",
      },
      {
        code: "PL-PK",
        name: "Podkarpackie",
      },
      {
        code: "PL-PD",
        name: "Podlaskie",
      },
      {
        code: "PL-PM",
        name: "Pomorskie",
      },
      {
        code: "PL-WN",
        name: "Warmińsko-mazurskie",
      },
      {
        code: "PL-WP",
        name: "Wielkopolskie",
      },
      {
        code: "PL-ZP",
        name: "Zachodniopomorskie",
      },
      {
        code: "PL-LD",
        name: "Łódzkie",
      },
      {
        code: "PL-SL",
        name: "Śląskie",
      },
      {
        code: "PL-SK",
        name: "Świętokrzyskie",
      },
    ],
  },
  {
    code: "PT",
    name: "Portugal",
    states: [
      {
        code: "PT-01",
        name: "Aveiro",
      },
      {
        code: "PT-02",
        name: "Beja",
      },
      {
        code: "PT-03",
        name: "Braga",
      },
      {
        code: "PT-04",
        name: "Bragança",
      },
      {
        code: "PT-05",
        name: "Castelo Branco",
      },
      {
        code: "PT-06",
        name: "Coimbra",
      },
      {
        code: "PT-08",
        name: "Faro",
      },
      {
        code: "PT-09",
        name: "Guarda",
      },
      {
        code: "PT-10",
        name: "Leiria",
      },
      {
        code: "PT-11",
        name: "Lisboa",
      },
      {
        code: "PT-12",
        name: "Portalegre",
      },
      {
        code: "PT-13",
        name: "Porto",
      },
      {
        code: "PT-30",
        name: "Região Autónoma da Madeira",
      },
      {
        code: "PT-20",
        name: "Região Autónoma dos Açores",
      },
      {
        code: "PT-14",
        name: "Santarém",
      },
      {
        code: "PT-15",
        name: "Setúbal",
      },
      {
        code: "PT-16",
        name: "Viana do Castelo",
      },
      {
        code: "PT-17",
        name: "Vila Real",
      },
      {
        code: "PT-18",
        name: "Viseu",
      },
      {
        code: "PT-07",
        name: "Évora",
      },
    ],
  },
  {
    code: "QA",
    name: "Qatar",
    states: [
      {
        code: "QA-DA",
        name: "Ad Dawḩah",
      },
      {
        code: "QA-KH",
        name: "Al Khawr wa adh Dhakhīrah",
      },
      {
        code: "QA-WA",
        name: "Al Wakrah",
      },
      {
        code: "QA-RA",
        name: "Ar Rayyān",
      },
      {
        code: "QA-MS",
        name: "Ash Shamāl",
      },
      {
        code: "QA-ZA",
        name: "Az̧ Za̧`āyin",
      },
      {
        code: "QA-US",
        name: "Umm Şalāl",
      },
    ],
  },
  {
    code: "RO",
    name: "Rumania",
    states: [
      {
        code: "RO-AB",
        name: "Alba",
      },
      {
        code: "RO-AR",
        name: "Arad",
      },
      {
        code: "RO-AG",
        name: "Argeș",
      },
      {
        code: "RO-BC",
        name: "Bacău",
      },
      {
        code: "RO-BH",
        name: "Bihor",
      },
      {
        code: "RO-BN",
        name: "Bistrița-Năsăud",
      },
      {
        code: "RO-BT",
        name: "Botoșani",
      },
      {
        code: "RO-BV",
        name: "Brașov",
      },
      {
        code: "RO-BR",
        name: "Brăila",
      },
      {
        code: "RO-B",
        name: "București",
      },
      {
        code: "RO-BZ",
        name: "Buzău",
      },
      {
        code: "RO-CS",
        name: "Caraș-Severin",
      },
      {
        code: "RO-CJ",
        name: "Cluj",
      },
      {
        code: "RO-CT",
        name: "Constanța",
      },
      {
        code: "RO-CV",
        name: "Covasna",
      },
      {
        code: "RO-CL",
        name: "Călărași",
      },
      {
        code: "RO-DJ",
        name: "Dolj",
      },
      {
        code: "RO-DB",
        name: "Dâmbovița",
      },
      {
        code: "RO-GL",
        name: "Galați",
      },
      {
        code: "RO-GR",
        name: "Giurgiu",
      },
      {
        code: "RO-GJ",
        name: "Gorj",
      },
      {
        code: "RO-HR",
        name: "Harghita",
      },
      {
        code: "RO-HD",
        name: "Hunedoara",
      },
      {
        code: "RO-IL",
        name: "Ialomița",
      },
      {
        code: "RO-IS",
        name: "Iași",
      },
      {
        code: "RO-IF",
        name: "Ilfov",
      },
      {
        code: "RO-MM",
        name: "Maramureș",
      },
      {
        code: "RO-MH",
        name: "Mehedinți",
      },
      {
        code: "RO-MS",
        name: "Mureș",
      },
      {
        code: "RO-NT",
        name: "Neamț",
      },
      {
        code: "RO-OT",
        name: "Olt",
      },
      {
        code: "RO-PH",
        name: "Prahova",
      },
      {
        code: "RO-SM",
        name: "Satu Mare",
      },
      {
        code: "RO-SB",
        name: "Sibiu",
      },
      {
        code: "RO-SV",
        name: "Suceava",
      },
      {
        code: "RO-SJ",
        name: "Sălaj",
      },
      {
        code: "RO-TR",
        name: "Teleorman",
      },
      {
        code: "RO-TM",
        name: "Timiș",
      },
      {
        code: "RO-TL",
        name: "Tulcea",
      },
      {
        code: "RO-VS",
        name: "Vaslui",
      },
      {
        code: "RO-VN",
        name: "Vrancea",
      },
      {
        code: "RO-VL",
        name: "Vâlcea",
      },
    ],
  },
  {
    code: "RU",
    name: "Federación Rusa",
    states: [
      {
        code: "RU-AMU",
        name: "Amurskaya oblast'",
      },
      {
        code: "RU-ARK",
        name: "Arkhangel'skaya oblast'",
      },
      {
        code: "RU-AST",
        name: "Astrakhanskaya oblast'",
      },
      {
        code: "RU-BEL",
        name: "Belgorodskaya oblast'",
      },
      {
        code: "RU-BRY",
        name: "Bryanskaya oblast'",
      },
      {
        code: "RU-CHE",
        name: "Chelyabinskaya oblast'",
      },
      {
        code: "RU-IRK",
        name: "Irkutskaya oblast'",
      },
      {
        code: "RU-IVA",
        name: "Ivanovskaya oblast'",
      },
      {
        code: "RU-KGD",
        name: "Kaliningradskaya oblast'",
      },
      {
        code: "RU-KLU",
        name: "Kaluzhskaya oblast'",
      },
      {
        code: "RU-KEM",
        name: "Kemerovskaya oblast'",
      },
      {
        code: "RU-KIR",
        name: "Kirovskaya oblast'",
      },
      {
        code: "RU-KOS",
        name: "Kostromskaya oblast'",
      },
      {
        code: "RU-KGN",
        name: "Kurganskaya oblast'",
      },
      {
        code: "RU-KRS",
        name: "Kurskaya oblast'",
      },
      {
        code: "RU-LEN",
        name: "Leningradskaya oblast'",
      },
      {
        code: "RU-LIP",
        name: "Lipetskaya oblast'",
      },
      {
        code: "RU-MAG",
        name: "Magadanskaya oblast'",
      },
      {
        code: "RU-MOS",
        name: "Moskovskaya oblast'",
      },
      {
        code: "RU-MUR",
        name: "Murmanskaya oblast'",
      },
      {
        code: "RU-NIZ",
        name: "Nizhegorodskaya oblast'",
      },
      {
        code: "RU-NGR",
        name: "Novgorodskaya oblast'",
      },
      {
        code: "RU-NVS",
        name: "Novosibirskaya oblast'",
      },
      {
        code: "RU-OMS",
        name: "Omskaya oblast'",
      },
      {
        code: "RU-ORE",
        name: "Orenburgskaya oblast'",
      },
      {
        code: "RU-ORL",
        name: "Orlovskaya oblast'",
      },
      {
        code: "RU-PNZ",
        name: "Penzenskaya oblast'",
      },
      {
        code: "RU-PSK",
        name: "Pskovskaya oblast'",
      },
      {
        code: "RU-ROS",
        name: "Rostovskaya oblast'",
      },
      {
        code: "RU-RYA",
        name: "Ryazanskaya oblast'",
      },
      {
        code: "RU-SAK",
        name: "Sakhalinskaya oblast'",
      },
      {
        code: "RU-SAM",
        name: "Samarskaya oblast'",
      },
      {
        code: "RU-SAR",
        name: "Saratovskaya oblast'",
      },
      {
        code: "RU-SMO",
        name: "Smolenskaya oblast'",
      },
      {
        code: "RU-SVE",
        name: "Sverdlovskaya oblast'",
      },
      {
        code: "RU-TAM",
        name: "Tambovskaya oblast'",
      },
      {
        code: "RU-TOM",
        name: "Tomskaya oblast'",
      },
      {
        code: "RU-TUL",
        name: "Tul'skaya oblast'",
      },
      {
        code: "RU-TVE",
        name: "Tverskaya oblast'",
      },
      {
        code: "RU-TYU",
        name: "Tyumenskaya oblast'",
      },
      {
        code: "RU-ULY",
        name: "Ul'yanovskaya oblast'",
      },
      {
        code: "RU-VLA",
        name: "Vladimirskaya oblast'",
      },
      {
        code: "RU-VGG",
        name: "Volgogradskaya oblast'",
      },
      {
        code: "RU-VLG",
        name: "Vologodskaya oblast'",
      },
      {
        code: "RU-VOR",
        name: "Voronezhskaya oblast'",
      },
      {
        code: "RU-YAR",
        name: "Yaroslavskaya oblast'",
      },
      {
        code: "RU-ALT",
        name: "Altayskiy kray",
      },
      {
        code: "RU-KAM",
        name: "Kamchatskiy kray",
      },
      {
        code: "RU-KHA",
        name: "Khabarovskiy kray",
      },
      {
        code: "RU-KDA",
        name: "Krasnodarskiy kray",
      },
      {
        code: "RU-KYA",
        name: "Krasnoyarskiy kray",
      },
      {
        code: "RU-PER",
        name: "Permskiy kray",
      },
      {
        code: "RU-PRI",
        name: "Primorskiy kray",
      },
      {
        code: "RU-STA",
        name: "Stavropol'skiy kray",
      },
      {
        code: "RU-ZAB",
        name: "Zabaykal'skiy kray",
      },
      {
        code: "RU-MOW",
        name: "Moskva",
      },
      {
        code: "RU-SPE",
        name: "Sankt-Peterburg",
      },
      {
        code: "RU-CHU",
        name: "Chukotskiy avtonomnyy okrug",
      },
      {
        code: "RU-KHM",
        name: "Khanty-Mansiyskiy avtonomnyy okrug-Yugra",
      },
      {
        code: "RU-NEN",
        name: "Nenetskiy avtonomnyy okrug",
      },
      {
        code: "RU-YAN",
        name: "Yamalo-Nenetskiy avtonomnyy okrug",
      },
      {
        code: "RU-YEV",
        name: "Yevreyskaya avtonomnaya oblast'",
      },
      {
        code: "RU-AD",
        name: "Adygeya, Respublika",
      },
      {
        code: "RU-AL",
        name: "Altay, Respublika",
      },
      {
        code: "RU-BA",
        name: "Bashkortostan, Respublika",
      },
      {
        code: "RU-BU",
        name: "Buryatiya, Respublika",
      },
      {
        code: "RU-CE",
        name: "Chechenskaya Respublika",
      },
      {
        code: "RU-CU",
        name: "Chuvashskaya Respublika",
      },
      {
        code: "RU-DA",
        name: "Dagestan, Respublika",
      },
      {
        code: "RU-IN",
        name: "Ingushetiya, Respublika",
      },
      {
        code: "RU-KB",
        name: "Kabardino-Balkarskaya Respublika",
      },
      {
        code: "RU-KL",
        name: "Kalmykiya, Respublika",
      },
      {
        code: "RU-KC",
        name: "Karachayevo-Cherkesskaya Respublika",
      },
      {
        code: "RU-KR",
        name: "Kareliya, Respublika",
      },
      {
        code: "RU-KK",
        name: "Khakasiya, Respublika",
      },
      {
        code: "RU-KO",
        name: "Komi, Respublika",
      },
      {
        code: "RU-ME",
        name: "Mariy El, Respublika",
      },
      {
        code: "RU-MO",
        name: "Mordoviya, Respublika",
      },
      {
        code: "RU-SA",
        name: "Sakha, Respublika",
      },
      {
        code: "RU-SE",
        name: "Severnaya Osetiya-Alaniya, Respublika",
      },
      {
        code: "RU-TA",
        name: "Tatarstan, Respublika",
      },
      {
        code: "RU-TY",
        name: "Tyva, Respublika",
      },
      {
        code: "RU-UD",
        name: "Udmurtskaya Respublika",
      },
    ],
  },
  {
    code: "RW",
    name: "Ruanda",
    states: [
      {
        code: "RW-02",
        name: "Est",
      },
      {
        code: "RW-03",
        name: "Nord",
      },
      {
        code: "RW-04",
        name: "Ouest",
      },
      {
        code: "RW-05",
        name: "Sud",
      },
      {
        code: "RW-01",
        name: "Ville de Kigali",
      },
    ],
  },
  {
    code: "SH",
    name: "Santa Elena, Ascensión y Tristán de Acuña",
    states: [
      {
        code: "SH-AC",
        name: "Ascension",
      },
      {
        code: "SH-HL",
        name: "Saint Helena",
      },
      {
        code: "SH-TA",
        name: "Tristan da Cunha",
      },
    ],
  },
  {
    code: "KN",
    name: "San Cristóbal y Nieves",
    states: [
      {
        code: "KN-N",
        name: "Nevis",
      },
      {
        code: "KN-K",
        name: "Saint Kitts",
      },
    ],
  },
  {
    code: "LC",
    name: "Santa Lucía",
    states: [
      {
        code: "LC-01",
        name: "Anse la Raye",
      },
      {
        code: "LC-02",
        name: "Castries",
      },
      {
        code: "LC-03",
        name: "Choiseul",
      },
      {
        code: "LC-04",
        name: "Dauphin",
      },
      {
        code: "LC-05",
        name: "Dennery",
      },
      {
        code: "LC-06",
        name: "Gros Islet",
      },
      {
        code: "LC-07",
        name: "Laborie",
      },
      {
        code: "LC-08",
        name: "Micoud",
      },
      {
        code: "LC-09",
        name: "Praslin",
      },
      {
        code: "LC-10",
        name: "Soufrière",
      },
      {
        code: "LC-11",
        name: "Vieux Fort",
      },
    ],
  },
  {
    code: "VC",
    name: "San Vicente y las Granadinas",
    states: [
      {
        code: "VC-01",
        name: "Charlotte",
      },
      {
        code: "VC-06",
        name: "Grenadines",
      },
      {
        code: "VC-02",
        name: "Saint Andrew",
      },
      {
        code: "VC-03",
        name: "Saint David",
      },
      {
        code: "VC-04",
        name: "Saint George",
      },
      {
        code: "VC-05",
        name: "Saint Patrick",
      },
    ],
  },
  {
    code: "WS",
    name: "Samoa",
    states: [
      {
        code: "WS-AA",
        name: "A'ana",
      },
      {
        code: "WS-AL",
        name: "Aiga-i-le-Tai",
      },
      {
        code: "WS-AT",
        name: "Atua",
      },
      {
        code: "WS-FA",
        name: "Fa'asaleleaga",
      },
      {
        code: "WS-GE",
        name: "Gaga'emauga",
      },
      {
        code: "WS-GI",
        name: "Gagaifomauga",
      },
      {
        code: "WS-PA",
        name: "Palauli",
      },
      {
        code: "WS-SA",
        name: "Satupa'itea",
      },
      {
        code: "WS-TU",
        name: "Tuamasaga",
      },
      {
        code: "WS-VF",
        name: "Va'a-o-Fonoti",
      },
      {
        code: "WS-VS",
        name: "Vaisigano",
      },
    ],
  },
  {
    code: "SM",
    name: "San Marino",
    states: [
      {
        code: "SM-01",
        name: "Acquaviva",
      },
      {
        code: "SM-06",
        name: "Borgo Maggiore",
      },
      {
        code: "SM-02",
        name: "Chiesanuova",
      },
      {
        code: "SM-03",
        name: "Domagnano",
      },
      {
        code: "SM-04",
        name: "Faetano",
      },
      {
        code: "SM-05",
        name: "Fiorentino",
      },
      {
        code: "SM-08",
        name: "Montegiardino",
      },
      {
        code: "SM-07",
        name: "San Marino",
      },
      {
        code: "SM-09",
        name: "Serravalle",
      },
    ],
  },
  {
    code: "ST",
    name: "Santo Tomé y Príncipe",
    states: [
      {
        code: "ST-P",
        name: "Príncipe",
      },
      {
        code: "ST-S",
        name: "São Tomé",
      },
    ],
  },
  {
    code: "SA",
    name: "Arabia Saudita",
    states: [
      {
        code: "SA-11",
        name: "Al Bāḩah",
      },
      {
        code: "SA-12",
        name: "Al Jawf",
      },
      {
        code: "SA-03",
        name: "Al Madīnah",
      },
      {
        code: "SA-05",
        name: "Al Qaşīm",
      },
      {
        code: "SA-08",
        name: "Al Ḩudūd ash Shamālīyah",
      },
      {
        code: "SA-01",
        name: "Ar Riyāḑ",
      },
      {
        code: "SA-04",
        name: "Ash Sharqīyah",
      },
      {
        code: "SA-09",
        name: "Jīzān",
      },
      {
        code: "SA-02",
        name: "Makkah",
      },
      {
        code: "SA-10",
        name: "Najrān",
      },
      {
        code: "SA-07",
        name: "Tabūk",
      },
      {
        code: "SA-14",
        name: "ٰĀsīr",
      },
      {
        code: "SA-06",
        name: "Ḩā'il",
      },
    ],
  },
  {
    code: "SN",
    name: "Senegal",
    states: [
      {
        code: "SN-DK",
        name: "Dakar",
      },
      {
        code: "SN-DB",
        name: "Diourbel",
      },
      {
        code: "SN-FK",
        name: "Fatick",
      },
      {
        code: "SN-KA",
        name: "Kaffrine",
      },
      {
        code: "SN-KL",
        name: "Kaolack",
      },
      {
        code: "SN-KD",
        name: "Kolda",
      },
      {
        code: "SN-KE",
        name: "Kédougou",
      },
      {
        code: "SN-LG",
        name: "Louga",
      },
      {
        code: "SN-MT",
        name: "Matam",
      },
      {
        code: "SN-SL",
        name: "Saint-Louis",
      },
      {
        code: "SN-SE",
        name: "Sédhiou",
      },
      {
        code: "SN-TC",
        name: "Tambacounda",
      },
      {
        code: "SN-TH",
        name: "Thiès",
      },
      {
        code: "SN-ZG",
        name: "Ziguinchor",
      },
    ],
  },
  {
    code: "RS",
    name: "Serbia",
    states: [
      {
        code: "RS-KM",
        name: "Kosovo-Metohija",
      },
      {
        code: "RS-VO",
        name: "Vojvodina",
      },
    ],
  },
  {
    code: "SC",
    name: "Seychelles",
    states: [
      {
        code: "SC-02",
        name: "Anse Boileau",
      },
      {
        code: "SC-03",
        name: "Anse Etoile",
      },
      {
        code: "SC-05",
        name: "Anse Royale",
      },
      {
        code: "SC-01",
        name: "Anse aux Pins",
      },
      {
        code: "SC-04",
        name: "Au Cap",
      },
      {
        code: "SC-06",
        name: "Baie Lazare",
      },
      {
        code: "SC-07",
        name: "Baie Sainte Anne",
      },
      {
        code: "SC-08",
        name: "Beau Vallon",
      },
      {
        code: "SC-09",
        name: "Bel Air",
      },
      {
        code: "SC-10",
        name: "Bel Ombre",
      },
      {
        code: "SC-11",
        name: "Cascade",
      },
      {
        code: "SC-16",
        name: "English River",
      },
      {
        code: "SC-12",
        name: "Glacis",
      },
      {
        code: "SC-13",
        name: "Grand Anse Mahe",
      },
      {
        code: "SC-14",
        name: "Grand Anse Praslin",
      },
      {
        code: "SC-15",
        name: "La Digue",
      },
      {
        code: "SC-24",
        name: "Les Mamelles",
      },
      {
        code: "SC-17",
        name: "Mont Buxton",
      },
      {
        code: "SC-18",
        name: "Mont Fleuri",
      },
      {
        code: "SC-19",
        name: "Plaisance",
      },
      {
        code: "SC-20",
        name: "Pointe Larue",
      },
      {
        code: "SC-21",
        name: "Port Glaud",
      },
      {
        code: "SC-25",
        name: "Roche Caiman",
      },
      {
        code: "SC-22",
        name: "Saint Louis",
      },
      {
        code: "SC-23",
        name: "Takamaka",
      },
    ],
  },
  {
    code: "SL",
    name: "Sierra Leona",
    states: [
      {
        code: "SL-E",
        name: "Eastern",
      },
      {
        code: "SL-N",
        name: "Northern",
      },
      {
        code: "SL-S",
        name: "Southern",
      },
      {
        code: "SL-W",
        name: "Western Area",
      },
    ],
  },
  {
    code: "SG",
    name: "Singapur",
    states: [
      {
        code: "SG-01",
        name: "Central Singapore",
      },
      {
        code: "SG-02",
        name: "North East",
      },
      {
        code: "SG-03",
        name: "North West",
      },
      {
        code: "SG-04",
        name: "South East",
      },
      {
        code: "SG-05",
        name: "South West",
      },
    ],
  },
  {
    code: "SK",
    name: "Eslovaquia",
    states: [
      {
        code: "SK-BC",
        name: "Banskobystrický kraj",
      },
      {
        code: "SK-BL",
        name: "Bratislavský kraj",
      },
      {
        code: "SK-KI",
        name: "Košický kraj",
      },
      {
        code: "SK-NI",
        name: "Nitriansky kraj",
      },
      {
        code: "SK-PV",
        name: "Prešovský kraj",
      },
      {
        code: "SK-TC",
        name: "Trenčiansky kraj",
      },
      {
        code: "SK-TA",
        name: "Trnavský kraj",
      },
      {
        code: "SK-ZI",
        name: "Žilinský kraj",
      },
    ],
  },
  {
    code: "SI",
    name: "Eslovenia",
    states: [
      {
        code: "SI-001",
        name: "Ajdovščina",
      },
      {
        code: "SI-195",
        name: "Apače",
      },
      {
        code: "SI-002",
        name: "Beltinci",
      },
      {
        code: "SI-148",
        name: "Benedikt",
      },
      {
        code: "SI-149",
        name: "Bistrica ob Sotli",
      },
      {
        code: "SI-003",
        name: "Bled",
      },
      {
        code: "SI-150",
        name: "Bloke",
      },
      {
        code: "SI-004",
        name: "Bohinj",
      },
      {
        code: "SI-005",
        name: "Borovnica",
      },
      {
        code: "SI-006",
        name: "Bovec",
      },
      {
        code: "SI-151",
        name: "Braslovče",
      },
      {
        code: "SI-007",
        name: "Brda",
      },
      {
        code: "SI-008",
        name: "Brezovica",
      },
      {
        code: "SI-009",
        name: "Brežice",
      },
      {
        code: "SI-152",
        name: "Cankova",
      },
      {
        code: "SI-011",
        name: "Celje",
      },
      {
        code: "SI-012",
        name: "Cerklje na Gorenjskem",
      },
      {
        code: "SI-013",
        name: "Cerknica",
      },
      {
        code: "SI-014",
        name: "Cerkno",
      },
      {
        code: "SI-153",
        name: "Cerkvenjak",
      },
      {
        code: "SI-196",
        name: "Cirkulane",
      },
      {
        code: "SI-018",
        name: "Destrnik",
      },
      {
        code: "SI-019",
        name: "Divača",
      },
      {
        code: "SI-154",
        name: "Dobje",
      },
      {
        code: "SI-020",
        name: "Dobrepolje",
      },
      {
        code: "SI-155",
        name: "Dobrna",
      },
      {
        code: "SI-021",
        name: "Dobrova–Polhov Gradec",
      },
      {
        code: "SI-156",
        name: "Dobrovnik",
      },
      {
        code: "SI-022",
        name: "Dol pri Ljubljani",
      },
      {
        code: "SI-157",
        name: "Dolenjske Toplice",
      },
      {
        code: "SI-023",
        name: "Domžale",
      },
      {
        code: "SI-024",
        name: "Dornava",
      },
      {
        code: "SI-025",
        name: "Dravograd",
      },
      {
        code: "SI-026",
        name: "Duplek",
      },
      {
        code: "SI-027",
        name: "Gorenja vas–Poljane",
      },
      {
        code: "SI-028",
        name: "Gorišnica",
      },
      {
        code: "SI-207",
        name: "Gorje",
      },
      {
        code: "SI-029",
        name: "Gornja Radgona",
      },
      {
        code: "SI-030",
        name: "Gornji Grad",
      },
      {
        code: "SI-031",
        name: "Gornji Petrovci",
      },
      {
        code: "SI-158",
        name: "Grad",
      },
      {
        code: "SI-032",
        name: "Grosuplje",
      },
      {
        code: "SI-159",
        name: "Hajdina",
      },
      {
        code: "SI-161",
        name: "Hodoš",
      },
      {
        code: "SI-162",
        name: "Horjul",
      },
      {
        code: "SI-160",
        name: "Hoče–Slivnica",
      },
      {
        code: "SI-034",
        name: "Hrastnik",
      },
      {
        code: "SI-035",
        name: "Hrpelje-Kozina",
      },
      {
        code: "SI-036",
        name: "Idrija",
      },
      {
        code: "SI-037",
        name: "Ig",
      },
      {
        code: "SI-038",
        name: "Ilirska Bistrica",
      },
      {
        code: "SI-039",
        name: "Ivančna Gorica",
      },
      {
        code: "SI-040",
        name: "Izola",
      },
      {
        code: "SI-041",
        name: "Jesenice",
      },
      {
        code: "SI-163",
        name: "Jezersko",
      },
      {
        code: "SI-042",
        name: "Juršinci",
      },
      {
        code: "SI-043",
        name: "Kamnik",
      },
      {
        code: "SI-044",
        name: "Kanal",
      },
      {
        code: "SI-045",
        name: "Kidričevo",
      },
      {
        code: "SI-046",
        name: "Kobarid",
      },
      {
        code: "SI-047",
        name: "Kobilje",
      },
      {
        code: "SI-049",
        name: "Komen",
      },
      {
        code: "SI-164",
        name: "Komenda",
      },
      {
        code: "SI-050",
        name: "Koper",
      },
      {
        code: "SI-197",
        name: "Kosanjevica na Krki",
      },
      {
        code: "SI-165",
        name: "Kostel",
      },
      {
        code: "SI-051",
        name: "Kozje",
      },
      {
        code: "SI-048",
        name: "Kočevje",
      },
      {
        code: "SI-052",
        name: "Kranj",
      },
      {
        code: "SI-053",
        name: "Kranjska Gora",
      },
      {
        code: "SI-166",
        name: "Križevci",
      },
      {
        code: "SI-054",
        name: "Krško",
      },
      {
        code: "SI-055",
        name: "Kungota",
      },
      {
        code: "SI-056",
        name: "Kuzma",
      },
      {
        code: "SI-057",
        name: "Laško",
      },
      {
        code: "SI-058",
        name: "Lenart",
      },
      {
        code: "SI-059",
        name: "Lendava",
      },
      {
        code: "SI-060",
        name: "Litija",
      },
      {
        code: "SI-061",
        name: "Ljubljana",
      },
      {
        code: "SI-062",
        name: "Ljubno",
      },
      {
        code: "SI-063",
        name: "Ljutomer",
      },
      {
        code: "SI-208",
        name: "Log-Dragomer",
      },
      {
        code: "SI-064",
        name: "Logatec",
      },
      {
        code: "SI-167",
        name: "Lovrenc na Pohorju",
      },
      {
        code: "SI-065",
        name: "Loška Dolina",
      },
      {
        code: "SI-066",
        name: "Loški Potok",
      },
      {
        code: "SI-068",
        name: "Lukovica",
      },
      {
        code: "SI-067",
        name: "Luče",
      },
      {
        code: "SI-069",
        name: "Majšperk",
      },
      {
        code: "SI-198",
        name: "Makole",
      },
      {
        code: "SI-070",
        name: "Maribor",
      },
      {
        code: "SI-168",
        name: "Markovci",
      },
      {
        code: "SI-071",
        name: "Medvode",
      },
      {
        code: "SI-072",
        name: "Mengeš",
      },
      {
        code: "SI-073",
        name: "Metlika",
      },
      {
        code: "SI-074",
        name: "Mežica",
      },
      {
        code: "SI-169",
        name: "Miklavž na Dravskem Polju",
      },
      {
        code: "SI-075",
        name: "Miren–Kostanjevica",
      },
      {
        code: "SI-170",
        name: "Mirna Peč",
      },
      {
        code: "SI-076",
        name: "Mislinja",
      },
      {
        code: "SI-199",
        name: "Mokronog–Trebelno",
      },
      {
        code: "SI-078",
        name: "Moravske Toplice",
      },
      {
        code: "SI-077",
        name: "Moravče",
      },
      {
        code: "SI-079",
        name: "Mozirje",
      },
      {
        code: "SI-080",
        name: "Murska Sobota",
      },
      {
        code: "SI-081",
        name: "Muta",
      },
      {
        code: "SI-082",
        name: "Naklo",
      },
      {
        code: "SI-083",
        name: "Nazarje",
      },
      {
        code: "SI-084",
        name: "Nova Gorica",
      },
      {
        code: "SI-085",
        name: "Novo Mesto",
      },
      {
        code: "SI-086",
        name: "Odranci",
      },
      {
        code: "SI-171",
        name: "Oplotnica",
      },
      {
        code: "SI-087",
        name: "Ormož",
      },
      {
        code: "SI-088",
        name: "Osilnica",
      },
      {
        code: "SI-089",
        name: "Pesnica",
      },
      {
        code: "SI-090",
        name: "Piran",
      },
      {
        code: "SI-091",
        name: "Pivka",
      },
      {
        code: "SI-172",
        name: "Podlehnik",
      },
      {
        code: "SI-093",
        name: "Podvelka",
      },
      {
        code: "SI-092",
        name: "Podčetrtek",
      },
      {
        code: "SI-200",
        name: "Poljčane",
      },
      {
        code: "SI-173",
        name: "Polzela",
      },
      {
        code: "SI-094",
        name: "Postojna",
      },
      {
        code: "SI-174",
        name: "Prebold",
      },
      {
        code: "SI-095",
        name: "Preddvor",
      },
      {
        code: "SI-175",
        name: "Prevalje",
      },
      {
        code: "SI-096",
        name: "Ptuj",
      },
      {
        code: "SI-097",
        name: "Puconci",
      },
      {
        code: "SI-100",
        name: "Radenci",
      },
      {
        code: "SI-099",
        name: "Radeče",
      },
      {
        code: "SI-101",
        name: "Radlje ob Dravi",
      },
      {
        code: "SI-102",
        name: "Radovljica",
      },
      {
        code: "SI-103",
        name: "Ravne na Koroškem",
      },
      {
        code: "SI-176",
        name: "Razkrižje",
      },
      {
        code: "SI-098",
        name: "Rače–Fram",
      },
      {
        code: "SI-201",
        name: "Renče-Vogrsko",
      },
      {
        code: "SI-209",
        name: "Rečica ob Savinji",
      },
      {
        code: "SI-104",
        name: "Ribnica",
      },
      {
        code: "SI-177",
        name: "Ribnica na Pohorju",
      },
      {
        code: "SI-107",
        name: "Rogatec",
      },
      {
        code: "SI-106",
        name: "Rogaška Slatina",
      },
      {
        code: "SI-105",
        name: "Rogašovci",
      },
      {
        code: "SI-108",
        name: "Ruše",
      },
      {
        code: "SI-178",
        name: "Selnica ob Dravi",
      },
      {
        code: "SI-109",
        name: "Semič",
      },
      {
        code: "SI-110",
        name: "Sevnica",
      },
      {
        code: "SI-111",
        name: "Sežana",
      },
      {
        code: "SI-112",
        name: "Slovenj Gradec",
      },
      {
        code: "SI-113",
        name: "Slovenska Bistrica",
      },
      {
        code: "SI-114",
        name: "Slovenske Konjice",
      },
      {
        code: "SI-179",
        name: "Sodražica",
      },
      {
        code: "SI-180",
        name: "Solčava",
      },
      {
        code: "SI-202",
        name: "Središče ob Dravi",
      },
      {
        code: "SI-115",
        name: "Starše",
      },
      {
        code: "SI-203",
        name: "Straža",
      },
      {
        code: "SI-181",
        name: "Sveta Ana",
      },
      {
        code: "SI-204",
        name: "Sveta Trojica v Slovenskih Goricah",
      },
      {
        code: "SI-182",
        name: "Sveti Andraž v Slovenskih Goricah",
      },
      {
        code: "SI-116",
        name: "Sveti Jurij",
      },
      {
        code: "SI-210",
        name: "Sveti Jurij v Slovenskih Goricah",
      },
      {
        code: "SI-205",
        name: "Sveti Tomaž",
      },
      {
        code: "SI-184",
        name: "Tabor",
      },
      {
        code: "SI-010",
        name: "Tišina",
      },
      {
        code: "SI-128",
        name: "Tolmin",
      },
      {
        code: "SI-129",
        name: "Trbovlje",
      },
      {
        code: "SI-130",
        name: "Trebnje",
      },
      {
        code: "SI-185",
        name: "Trnovska Vas",
      },
      {
        code: "SI-186",
        name: "Trzin",
      },
      {
        code: "SI-131",
        name: "Tržič",
      },
      {
        code: "SI-132",
        name: "Turnišče",
      },
      {
        code: "SI-133",
        name: "Velenje",
      },
      {
        code: "SI-187",
        name: "Velika Polana",
      },
      {
        code: "SI-134",
        name: "Velike Lašče",
      },
      {
        code: "SI-188",
        name: "Veržej",
      },
      {
        code: "SI-135",
        name: "Videm",
      },
      {
        code: "SI-136",
        name: "Vipava",
      },
      {
        code: "SI-137",
        name: "Vitanje",
      },
      {
        code: "SI-138",
        name: "Vodice",
      },
      {
        code: "SI-139",
        name: "Vojnik",
      },
      {
        code: "SI-189",
        name: "Vransko",
      },
      {
        code: "SI-140",
        name: "Vrhnika",
      },
      {
        code: "SI-141",
        name: "Vuzenica",
      },
      {
        code: "SI-142",
        name: "Zagorje ob Savi",
      },
      {
        code: "SI-143",
        name: "Zavrč",
      },
      {
        code: "SI-144",
        name: "Zreče",
      },
      {
        code: "SI-015",
        name: "Črenšovci",
      },
      {
        code: "SI-016",
        name: "Črna na Koroškem",
      },
      {
        code: "SI-017",
        name: "Črnomelj",
      },
      {
        code: "SI-033",
        name: "Šalovci",
      },
      {
        code: "SI-183",
        name: "Šempeter–Vrtojba",
      },
      {
        code: "SI-118",
        name: "Šentilj",
      },
      {
        code: "SI-119",
        name: "Šentjernej",
      },
      {
        code: "SI-120",
        name: "Šentjur",
      },
      {
        code: "SI-211",
        name: "Šentrupert",
      },
      {
        code: "SI-117",
        name: "Šenčur",
      },
      {
        code: "SI-121",
        name: "Škocjan",
      },
      {
        code: "SI-122",
        name: "Škofja Loka",
      },
      {
        code: "SI-123",
        name: "Škofljica",
      },
      {
        code: "SI-124",
        name: "Šmarje pri Jelšah",
      },
      {
        code: "SI-206",
        name: "Šmarješke Toplice",
      },
      {
        code: "SI-125",
        name: "Šmartno ob Paki",
      },
      {
        code: "SI-194",
        name: "Šmartno pri Litiji",
      },
      {
        code: "SI-126",
        name: "Šoštanj",
      },
      {
        code: "SI-127",
        name: "Štore",
      },
      {
        code: "SI-190",
        name: "Žalec",
      },
      {
        code: "SI-146",
        name: "Železniki",
      },
      {
        code: "SI-191",
        name: "Žetale",
      },
      {
        code: "SI-147",
        name: "Žiri",
      },
      {
        code: "SI-192",
        name: "Žirovnica",
      },
      {
        code: "SI-193",
        name: "Žužemberk",
      },
    ],
  },
  {
    code: "SB",
    name: "Islas Salomón",
    states: [
      {
        code: "SB-CT",
        name: "Capital Territory",
      },
      {
        code: "SB-CE",
        name: "Central",
      },
      {
        code: "SB-CH",
        name: "Choiseul",
      },
      {
        code: "SB-GU",
        name: "Guadalcanal",
      },
      {
        code: "SB-IS",
        name: "Isabel",
      },
      {
        code: "SB-MK",
        name: "Makira-Ulawa",
      },
      {
        code: "SB-ML",
        name: "Malaita",
      },
      {
        code: "SB-RB",
        name: "Rennell and Bellona",
      },
      {
        code: "SB-TE",
        name: "Temotu",
      },
      {
        code: "SB-WE",
        name: "Western",
      },
    ],
  },
  {
    code: "SO",
    name: "Somalia",
    states: [
      {
        code: "SO-AW",
        name: "Awdal",
      },
      {
        code: "SO-BK",
        name: "Bakool",
      },
      {
        code: "SO-BN",
        name: "Banaadir",
      },
      {
        code: "SO-BR",
        name: "Bari",
      },
      {
        code: "SO-BY",
        name: "Bay",
      },
      {
        code: "SO-GA",
        name: "Galguduud",
      },
      {
        code: "SO-GE",
        name: "Gedo",
      },
      {
        code: "SO-HI",
        name: "Hiiraan",
      },
      {
        code: "SO-JD",
        name: "Jubbada Dhexe",
      },
      {
        code: "SO-JH",
        name: "Jubbada Hoose",
      },
      {
        code: "SO-MU",
        name: "Mudug",
      },
      {
        code: "SO-NU",
        name: "Nugaal",
      },
      {
        code: "SO-SA",
        name: "Sanaag",
      },
      {
        code: "SO-SD",
        name: "Shabeellaha Dhexe",
      },
      {
        code: "SO-SH",
        name: "Shabeellaha Hoose",
      },
      {
        code: "SO-SO",
        name: "Sool",
      },
      {
        code: "SO-TO",
        name: "Togdheer",
      },
      {
        code: "SO-WO",
        name: "Woqooyi Galbeed",
      },
    ],
  },
  {
    code: "ZA",
    name: "Sudáfrica",
    states: [
      {
        code: "ZA-EC",
        name: "Eastern Cape",
      },
      {
        code: "ZA-FS",
        name: "Free State",
      },
      {
        code: "ZA-GT",
        name: "Gauteng",
      },
      {
        code: "ZA-NL",
        name: "KwaZulu-Natal",
      },
      {
        code: "ZA-LP",
        name: "Limpopo",
      },
      {
        code: "ZA-MP",
        name: "Mpumalanga",
      },
      {
        code: "ZA-NW",
        name: "North West",
      },
      {
        code: "ZA-NC",
        name: "Northern Cape",
      },
      {
        code: "ZA-WC",
        name: "Western Cape",
      },
    ],
  },
  {
    code: "SS",
    name: "Sudán del Sur",
    states: [
      {
        code: "SS-EC",
        name: "Central Equatoria",
      },
      {
        code: "SS-EE",
        name: "Eastern Equatoria",
      },
      {
        code: "SS-JG",
        name: "Jonglei",
      },
      {
        code: "SS-LK",
        name: "Lakes",
      },
      {
        code: "SS-BN",
        name: "Northern Bahr el Ghazal",
      },
      {
        code: "SS-UY",
        name: "Unity",
      },
      {
        code: "SS-NU",
        name: "Upper Nile",
      },
      {
        code: "SS-WR",
        name: "Warrap",
      },
      {
        code: "SS-BW",
        name: "Western Bahr el Ghazal",
      },
      {
        code: "SS-EW",
        name: "Western Equatoria",
      },
    ],
  },
  {
    code: "ES",
    name: "España",
    states: [
      {
        code: "ES-C",
        name: "A Coruña",
      },
      {
        code: "ES-AB",
        name: "Albacete",
      },
      {
        code: "ES-A",
        name: "Alicante",
      },
      {
        code: "ES-AL",
        name: "Almería",
      },
      {
        code: "ES-O",
        name: "Asturias",
      },
      {
        code: "ES-BA",
        name: "Badajoz",
      },
      {
        code: "ES-PM",
        name: "Balears",
      },
      {
        code: "ES-B",
        name: "Barcelona",
      },
      {
        code: "ES-BU",
        name: "Burgos",
      },
      {
        code: "ES-S",
        name: "Cantabria",
      },
      {
        code: "ES-CS",
        name: "Castellón",
      },
      {
        code: "ES-CR",
        name: "Ciudad Real",
      },
      {
        code: "ES-CU",
        name: "Cuenca",
      },
      {
        code: "ES-CC",
        name: "Cáceres",
      },
      {
        code: "ES-CA",
        name: "Cádiz",
      },
      {
        code: "ES-CO",
        name: "Córdoba",
      },
      {
        code: "ES-GI",
        name: "Girona",
      },
      {
        code: "ES-GR",
        name: "Granada",
      },
      {
        code: "ES-GU",
        name: "Guadalajara",
      },
      {
        code: "ES-SS",
        name: "Guipúzcoa",
      },
      {
        code: "ES-H",
        name: "Huelva",
      },
      {
        code: "ES-HU",
        name: "Huesca",
      },
      {
        code: "ES-J",
        name: "Jaén",
      },
      {
        code: "ES-LO",
        name: "La Rioja",
      },
      {
        code: "ES-GC",
        name: "Las Palmas",
      },
      {
        code: "ES-LE",
        name: "León",
      },
      {
        code: "ES-L",
        name: "Lleida",
      },
      {
        code: "ES-LU",
        name: "Lugo",
      },
      {
        code: "ES-M",
        name: "Madrid",
      },
      {
        code: "ES-MU",
        name: "Murcia",
      },
      {
        code: "ES-MA",
        name: "Málaga",
      },
      {
        code: "ES-NA",
        name: "Navarra",
      },
      {
        code: "ES-OR",
        name: "Ourense",
      },
      {
        code: "ES-P",
        name: "Palencia",
      },
      {
        code: "ES-PO",
        name: "Pontevedra",
      },
      {
        code: "ES-SA",
        name: "Salamanca",
      },
      {
        code: "ES-TF",
        name: "Santa Cruz de Tenerife",
      },
      {
        code: "ES-SG",
        name: "Segovia",
      },
      {
        code: "ES-SE",
        name: "Sevilla",
      },
      {
        code: "ES-SO",
        name: "Soria",
      },
      {
        code: "ES-T",
        name: "Tarragona",
      },
      {
        code: "ES-TE",
        name: "Teruel",
      },
      {
        code: "ES-TO",
        name: "Toledo",
      },
      {
        code: "ES-V",
        name: "Valencia",
      },
      {
        code: "ES-VA",
        name: "Valladolid",
      },
      {
        code: "ES-BI",
        name: "Vizcaya",
      },
      {
        code: "ES-ZA",
        name: "Zamora",
      },
      {
        code: "ES-Z",
        name: "Zaragoza",
      },
      {
        code: "ES-VI",
        name: "Álava",
      },
      {
        code: "ES-AV",
        name: "Ávila",
      },
      {
        code: "ES-CE",
        name: "Ceuta",
      },
      {
        code: "ES-ML",
        name: "Melilla",
      },
      {
        code: "ES-AN",
        name: "Andalucía",
      },
      {
        code: "ES-AR",
        name: "Aragón",
      },
      {
        code: "ES-AS",
        name: "Asturias, Principado de",
      },
      {
        code: "ES-CN",
        name: "Canarias",
      },
      {
        code: "ES-CB",
        name: "Cantabria",
      },
      {
        code: "ES-CL",
        name: "Castilla y León",
      },
      {
        code: "ES-CM",
        name: "Castilla-La Mancha",
      },
      {
        code: "ES-CT",
        name: "Catalunya",
      },
      {
        code: "ES-EX",
        name: "Extremadura",
      },
      {
        code: "ES-GA",
        name: "Galicia",
      },
      {
        code: "ES-IB",
        name: "Illes Balears",
      },
      {
        code: "ES-RI",
        name: "La Rioja",
      },
      {
        code: "ES-MD",
        name: "Madrid, Comunidad de",
      },
      {
        code: "ES-MC",
        name: "Murcia, Región de",
      },
      {
        code: "ES-NC",
        name: "Navarra, Comunidad Foral de",
      },
      {
        code: "ES-PV",
        name: "País Vasco",
      },
      {
        code: "ES-VC",
        name: "Valenciana, Comunidad",
      },
    ],
  },
  {
    code: "LK",
    name: "Sri Lanka",
    states: [
      {
        code: "LK-2",
        name: "Central Province",
      },
      {
        code: "LK-5",
        name: "Eastern Province",
      },
      {
        code: "LK-7",
        name: "North Central Province",
      },
      {
        code: "LK-6",
        name: "North Western Province",
      },
      {
        code: "LK-4",
        name: "Northern Province",
      },
      {
        code: "LK-9",
        name: "Sabaragamuwa Province",
      },
      {
        code: "LK-3",
        name: "Southern Province",
      },
      {
        code: "LK-8",
        name: "Uva Province",
      },
      {
        code: "LK-1",
        name: "Western Province",
      },
    ],
  },
  {
    code: "SD",
    name: "Sudán",
    states: [
      {
        code: "SD-RS",
        name: "Al Baḩr al Aḩmar",
      },
      {
        code: "SD-GZ",
        name: "Al Jazīrah",
      },
      {
        code: "SD-KH",
        name: "Al Kharţūm",
      },
      {
        code: "SD-GD",
        name: "Al Qaḑārif",
      },
      {
        code: "SD-NR",
        name: "An Nīl",
      },
      {
        code: "SD-NW",
        name: "An Nīl al Abyaḑ",
      },
      {
        code: "SD-NB",
        name: "An Nīl al Azraq",
      },
      {
        code: "SD-NO",
        name: "Ash Shamālīyah",
      },
      {
        code: "SD-DW",
        name: "Gharb Dārfūr",
      },
      {
        code: "SD-DS",
        name: "Janūb Dārfūr",
      },
      {
        code: "SD-KS",
        name: "Janūb Kurdufān",
      },
      {
        code: "SD-KA",
        name: "Kassalā",
      },
      {
        code: "SD-DN",
        name: "Shamāl Dārfūr",
      },
      {
        code: "SD-KN",
        name: "Shamāl Kurdufān",
      },
      {
        code: "SD-DE",
        name: "Sharq Dārfūr",
      },
      {
        code: "SD-SI",
        name: "Sinnār",
      },
      {
        code: "SD-DC",
        name: "Zalingei",
      },
    ],
  },
  {
    code: "SR",
    name: "Surinam",
    states: [
      {
        code: "SR-BR",
        name: "Brokopondo",
      },
      {
        code: "SR-CM",
        name: "Commewijne",
      },
      {
        code: "SR-CR",
        name: "Coronie",
      },
      {
        code: "SR-MA",
        name: "Marowijne",
      },
      {
        code: "SR-NI",
        name: "Nickerie",
      },
      {
        code: "SR-PR",
        name: "Para",
      },
      {
        code: "SR-PM",
        name: "Paramaribo",
      },
      {
        code: "SR-SA",
        name: "Saramacca",
      },
      {
        code: "SR-SI",
        name: "Sipaliwini",
      },
      {
        code: "SR-WA",
        name: "Wanica",
      },
    ],
  },
  {
    code: "SZ",
    name: "Suazilandia",
    states: [
      {
        code: "SZ-HH",
        name: "Hhohho",
      },
      {
        code: "SZ-LU",
        name: "Lubombo",
      },
      {
        code: "SZ-MA",
        name: "Manzini",
      },
      {
        code: "SZ-SH",
        name: "Shiselweni",
      },
    ],
  },
  {
    code: "SE",
    name: "Suecia",
    states: [
      {
        code: "SE-K",
        name: "Blekinge län",
      },
      {
        code: "SE-W",
        name: "Dalarnas län",
      },
      {
        code: "SE-I",
        name: "Gotlands län",
      },
      {
        code: "SE-X",
        name: "Gävleborgs län",
      },
      {
        code: "SE-N",
        name: "Hallands län",
      },
      {
        code: "SE-Z",
        name: "Jämtlands län",
      },
      {
        code: "SE-F",
        name: "Jönköpings län",
      },
      {
        code: "SE-H",
        name: "Kalmar län",
      },
      {
        code: "SE-G",
        name: "Kronobergs län",
      },
      {
        code: "SE-BD",
        name: "Norrbottens län",
      },
      {
        code: "SE-M",
        name: "Skåne län",
      },
      {
        code: "SE-AB",
        name: "Stockholms län",
      },
      {
        code: "SE-D",
        name: "Södermanlands län",
      },
      {
        code: "SE-C",
        name: "Uppsala län",
      },
      {
        code: "SE-S",
        name: "Värmlands län",
      },
      {
        code: "SE-AC",
        name: "Västerbottens län",
      },
      {
        code: "SE-Y",
        name: "Västernorrlands län",
      },
      {
        code: "SE-U",
        name: "Västmanlands län",
      },
      {
        code: "SE-O",
        name: "Västra Götalands län",
      },
      {
        code: "SE-T",
        name: "Örebro län",
      },
      {
        code: "SE-E",
        name: "Östergötlands län",
      },
    ],
  },
  {
    code: "CH",
    name: "Suiza",
    states: [
      {
        code: "CH-AG",
        name: "Aargau",
      },
      {
        code: "CH-AR",
        name: "Appenzell Ausserrhoden",
      },
      {
        code: "CH-AI",
        name: "Appenzell Innerrhoden",
      },
      {
        code: "CH-BL",
        name: "Basel-Landschaft",
      },
      {
        code: "CH-BS",
        name: "Basel-Stadt",
      },
      {
        code: "CH-BE",
        name: "Bern",
      },
      {
        code: "CH-FR",
        name: "Fribourg",
      },
      {
        code: "CH-GE",
        name: "Genève",
      },
      {
        code: "CH-GL",
        name: "Glarus",
      },
      {
        code: "CH-GR",
        name: "Graubünden",
      },
      {
        code: "CH-JU",
        name: "Jura",
      },
      {
        code: "CH-LU",
        name: "Luzern",
      },
      {
        code: "CH-NE",
        name: "Neuchâtel",
      },
      {
        code: "CH-NW",
        name: "Nidwalden",
      },
      {
        code: "CH-OW",
        name: "Obwalden",
      },
      {
        code: "CH-SG",
        name: "Sankt Gallen",
      },
      {
        code: "CH-SH",
        name: "Schaffhausen",
      },
      {
        code: "CH-SZ",
        name: "Schwyz",
      },
      {
        code: "CH-SO",
        name: "Solothurn",
      },
      {
        code: "CH-TG",
        name: "Thurgau",
      },
      {
        code: "CH-TI",
        name: "Ticino",
      },
      {
        code: "CH-UR",
        name: "Uri",
      },
      {
        code: "CH-VS",
        name: "Valais",
      },
      {
        code: "CH-VD",
        name: "Vaud",
      },
      {
        code: "CH-ZG",
        name: "Zug",
      },
      {
        code: "CH-ZH",
        name: "Zürich",
      },
    ],
  },
  {
    code: "SY",
    name: "Siria",
    states: [
      {
        code: "SY-LA",
        name: "Al Lādhiqīyah",
      },
      {
        code: "SY-QU",
        name: "Al Qunayţirah",
      },
      {
        code: "SY-HA",
        name: "Al Ḩasakah",
      },
      {
        code: "SY-RA",
        name: "Ar Raqqah",
      },
      {
        code: "SY-SU",
        name: "As Suwaydā'",
      },
      {
        code: "SY-DR",
        name: "Darٰā",
      },
      {
        code: "SY-DY",
        name: "Dayr az Zawr",
      },
      {
        code: "SY-DI",
        name: "Dimashq",
      },
      {
        code: "SY-ID",
        name: "Idlib",
      },
      {
        code: "SY-RD",
        name: "Rīf Dimashq",
      },
      {
        code: "SY-TA",
        name: "Ţarţūs",
      },
      {
        code: "SY-HL",
        name: "Ḩalab",
      },
      {
        code: "SY-HM",
        name: "Ḩamāh",
      },
      {
        code: "SY-HI",
        name: "Ḩimş",
      },
    ],
  },
  {
    code: "TW",
    name: "Taiwán",
    states: [
      {
        code: "TW-CHA",
        name: "Changhua",
      },
      {
        code: "TW-CYQ",
        name: "Chiayi",
      },
      {
        code: "TW-CYI",
        name: "Chiayi",
      },
      {
        code: "TW-HSZ",
        name: "Hsinchu",
      },
      {
        code: "TW-HSQ",
        name: "Hsinchu",
      },
      {
        code: "TW-HUA",
        name: "Hualien",
      },
      {
        code: "TW-ILA",
        name: "Ilan",
      },
      {
        code: "TW-KHQ",
        name: "Kaohsiung",
      },
      {
        code: "TW-KHH",
        name: "Kaohsiung",
      },
      {
        code: "TW-KEE",
        name: "Keelung",
      },
      {
        code: "TW-MIA",
        name: "Miaoli",
      },
      {
        code: "TW-NAN",
        name: "Nantou",
      },
      {
        code: "TW-PEN",
        name: "Penghu",
      },
      {
        code: "TW-PIF",
        name: "Pingtung",
      },
      {
        code: "TW-TXG",
        name: "Taichung",
      },
      {
        code: "TW-TXQ",
        name: "Taichung",
      },
      {
        code: "TW-TNN",
        name: "Tainan",
      },
      {
        code: "TW-TNQ",
        name: "Tainan",
      },
      {
        code: "TW-TPE",
        name: "Taipei",
      },
      {
        code: "TW-TPQ",
        name: "Taipei",
      },
      {
        code: "TW-TTT",
        name: "Taitung",
      },
      {
        code: "TW-TAO",
        name: "Taoyuan",
      },
      {
        code: "TW-YUN",
        name: "Yunlin",
      },
    ],
  },
  {
    code: "TJ",
    name: "Tayikistán",
    states: [
      {
        code: "TJ-DU",
        name: "Dushanbe",
      },
      {
        code: "TJ-KT",
        name: "Khatlon",
      },
      {
        code: "TJ-GB",
        name: "Kŭhistoni Badakhshon",
      },
      {
        code: "TJ-SU",
        name: "Sughd",
      },
    ],
  },
  {
    code: "TZ",
    name: "Tanzania",
    states: [
      {
        code: "TZ-01",
        name: "Arusha",
      },
      {
        code: "TZ-02",
        name: "Dar es Salaam",
      },
      {
        code: "TZ-03",
        name: "Dodoma",
      },
      {
        code: "TZ-04",
        name: "Iringa",
      },
      {
        code: "TZ-05",
        name: "Kagera",
      },
      {
        code: "TZ-06",
        name: "Kaskazini Pemba",
      },
      {
        code: "TZ-07",
        name: "Kaskazini Unguja",
      },
      {
        code: "TZ-08",
        name: "Kigoma",
      },
      {
        code: "TZ-09",
        name: "Kilimanjaro",
      },
      {
        code: "TZ-10",
        name: "Kusini Pemba",
      },
      {
        code: "TZ-11",
        name: "Kusini Unguja",
      },
      {
        code: "TZ-12",
        name: "Lindi",
      },
      {
        code: "TZ-26",
        name: "Manyara",
      },
      {
        code: "TZ-13",
        name: "Mara",
      },
      {
        code: "TZ-14",
        name: "Mbeya",
      },
      {
        code: "TZ-15",
        name: "Mjini Magharibi",
      },
      {
        code: "TZ-16",
        name: "Morogoro",
      },
      {
        code: "TZ-17",
        name: "Mtwara",
      },
      {
        code: "TZ-18",
        name: "Mwanza",
      },
      {
        code: "TZ-19",
        name: "Pwani",
      },
      {
        code: "TZ-20",
        name: "Rukwa",
      },
      {
        code: "TZ-21",
        name: "Ruvuma",
      },
      {
        code: "TZ-22",
        name: "Shinyanga",
      },
      {
        code: "TZ-23",
        name: "Singida",
      },
      {
        code: "TZ-24",
        name: "Tabora",
      },
      {
        code: "TZ-25",
        name: "Tanga",
      },
    ],
  },
  {
    code: "TH",
    name: "Tailandia",
    states: [
      {
        code: "TH-37",
        name: "Amnat Charoen",
      },
      {
        code: "TH-15",
        name: "Ang Thong",
      },
      {
        code: "TH-38",
        name: "Bueng Kan",
      },
      {
        code: "TH-31",
        name: "Buri Ram",
      },
      {
        code: "TH-24",
        name: "Chachoengsao",
      },
      {
        code: "TH-18",
        name: "Chai Nat",
      },
      {
        code: "TH-36",
        name: "Chaiyaphum",
      },
      {
        code: "TH-22",
        name: "Chanthaburi",
      },
      {
        code: "TH-50",
        name: "Chiang Mai",
      },
      {
        code: "TH-57",
        name: "Chiang Rai",
      },
      {
        code: "TH-20",
        name: "Chon Buri",
      },
      {
        code: "TH-86",
        name: "Chumphon",
      },
      {
        code: "TH-46",
        name: "Kalasin",
      },
      {
        code: "TH-62",
        name: "Kamphaeng Phet",
      },
      {
        code: "TH-71",
        name: "Kanchanaburi",
      },
      {
        code: "TH-40",
        name: "Khon Kaen",
      },
      {
        code: "TH-81",
        name: "Krabi",
      },
      {
        code: "TH-10",
        name: "Krung Thep Maha Nakhon",
      },
      {
        code: "TH-52",
        name: "Lampang",
      },
      {
        code: "TH-51",
        name: "Lamphun",
      },
      {
        code: "TH-42",
        name: "Loei",
      },
      {
        code: "TH-16",
        name: "Lop Buri",
      },
      {
        code: "TH-58",
        name: "Mae Hong Son",
      },
      {
        code: "TH-44",
        name: "Maha Sarakham",
      },
      {
        code: "TH-49",
        name: "Mukdahan",
      },
      {
        code: "TH-26",
        name: "Nakhon Nayok",
      },
      {
        code: "TH-73",
        name: "Nakhon Pathom",
      },
      {
        code: "TH-48",
        name: "Nakhon Phanom",
      },
      {
        code: "TH-30",
        name: "Nakhon Ratchasima",
      },
      {
        code: "TH-60",
        name: "Nakhon Sawan",
      },
      {
        code: "TH-80",
        name: "Nakhon Si Thammarat",
      },
      {
        code: "TH-55",
        name: "Nan",
      },
      {
        code: "TH-96",
        name: "Narathiwat",
      },
      {
        code: "TH-39",
        name: "Nong Bua Lam Phu",
      },
      {
        code: "TH-43",
        name: "Nong Khai",
      },
      {
        code: "TH-12",
        name: "Nonthaburi",
      },
      {
        code: "TH-13",
        name: "Pathum Thani",
      },
      {
        code: "TH-94",
        name: "Pattani",
      },
      {
        code: "TH-82",
        name: "Phangnga",
      },
      {
        code: "TH-93",
        name: "Phatthalung",
      },
      {
        code: "TH-S",
        name: "Phatthaya",
      },
      {
        code: "TH-56",
        name: "Phayao",
      },
      {
        code: "TH-67",
        name: "Phetchabun",
      },
      {
        code: "TH-76",
        name: "Phetchaburi",
      },
      {
        code: "TH-66",
        name: "Phichit",
      },
      {
        code: "TH-65",
        name: "Phitsanulok",
      },
      {
        code: "TH-14",
        name: "Phra Nakhon Si Ayutthaya",
      },
      {
        code: "TH-54",
        name: "Phrae",
      },
      {
        code: "TH-83",
        name: "Phuket",
      },
      {
        code: "TH-25",
        name: "Prachin Buri",
      },
      {
        code: "TH-77",
        name: "Prachuap Khiri Khan",
      },
      {
        code: "TH-85",
        name: "Ranong",
      },
      {
        code: "TH-70",
        name: "Ratchaburi",
      },
      {
        code: "TH-21",
        name: "Rayong",
      },
      {
        code: "TH-45",
        name: "Roi Et",
      },
      {
        code: "TH-27",
        name: "Sa Kaeo",
      },
      {
        code: "TH-47",
        name: "Sakon Nakhon",
      },
      {
        code: "TH-11",
        name: "Samut Prakan",
      },
      {
        code: "TH-74",
        name: "Samut Sakhon",
      },
      {
        code: "TH-75",
        name: "Samut Songkhram",
      },
      {
        code: "TH-19",
        name: "Saraburi",
      },
      {
        code: "TH-91",
        name: "Satun",
      },
      {
        code: "TH-33",
        name: "Si Sa Ket",
      },
      {
        code: "TH-17",
        name: "Sing Buri",
      },
      {
        code: "TH-90",
        name: "Songkhla",
      },
      {
        code: "TH-64",
        name: "Sukhothai",
      },
      {
        code: "TH-72",
        name: "Suphan Buri",
      },
      {
        code: "TH-84",
        name: "Surat Thani",
      },
      {
        code: "TH-32",
        name: "Surin",
      },
      {
        code: "TH-63",
        name: "Tak",
      },
      {
        code: "TH-92",
        name: "Trang",
      },
      {
        code: "TH-23",
        name: "Trat",
      },
      {
        code: "TH-34",
        name: "Ubon Ratchathani",
      },
      {
        code: "TH-41",
        name: "Udon Thani",
      },
      {
        code: "TH-61",
        name: "Uthai Thani",
      },
      {
        code: "TH-53",
        name: "Uttaradit",
      },
      {
        code: "TH-95",
        name: "Yala",
      },
      {
        code: "TH-35",
        name: "Yasothon",
      },
    ],
  },
  {
    code: "TL",
    name: "Timor Oriental",
    states: [
      {
        code: "TL-AL",
        name: "Aileu",
      },
      {
        code: "TL-AN",
        name: "Ainaro",
      },
      {
        code: "TL-BA",
        name: "Baucau",
      },
      {
        code: "TL-BO",
        name: "Bobonaro",
      },
      {
        code: "TL-CO",
        name: "Cova Lima",
      },
      {
        code: "TL-DI",
        name: "Díli",
      },
      {
        code: "TL-ER",
        name: "Ermera",
      },
      {
        code: "TL-LA",
        name: "Lautem",
      },
      {
        code: "TL-LI",
        name: "Liquiça",
      },
      {
        code: "TL-MT",
        name: "Manatuto",
      },
      {
        code: "TL-MF",
        name: "Manufahi",
      },
      {
        code: "TL-OE",
        name: "Oecussi",
      },
      {
        code: "TL-VI",
        name: "Viqueque",
      },
    ],
  },
  {
    code: "TG",
    name: "Togo",
    states: [
      {
        code: "TG-C",
        name: "Centre",
      },
      {
        code: "TG-K",
        name: "Kara",
      },
      {
        code: "TG-M",
        name: "Maritime",
      },
      {
        code: "TG-P",
        name: "Plateaux",
      },
      {
        code: "TG-S",
        name: "Savannes",
      },
    ],
  },
  {
    code: "TO",
    name: "Tonga",
    states: [
      {
        code: "TO-01",
        name: "'Eua",
      },
      {
        code: "TO-02",
        name: "Ha'apai",
      },
      {
        code: "TO-03",
        name: "Niuas",
      },
      {
        code: "TO-04",
        name: "Tongatapu",
      },
      {
        code: "TO-05",
        name: "Vava'u",
      },
    ],
  },
  {
    code: "TT",
    name: "Trinidad y Tobago",
    states: [
      {
        code: "TT-ARI",
        name: "Arima",
      },
      {
        code: "TT-CHA",
        name: "Chaguanas",
      },
      {
        code: "TT-CTT",
        name: "Couva-Tabaquite-Talparo",
      },
      {
        code: "TT-DMN",
        name: "Diego Martin",
      },
      {
        code: "TT-ETO",
        name: "Eastern Tobago",
      },
      {
        code: "TT-PED",
        name: "Penal-Debe",
      },
      {
        code: "TT-PTF",
        name: "Point Fortin",
      },
      {
        code: "TT-POS",
        name: "Port of Spain",
      },
      {
        code: "TT-PRT",
        name: "Princes Town",
      },
      {
        code: "TT-RCM",
        name: "Rio Claro-Mayaro",
      },
      {
        code: "TT-SFO",
        name: "San Fernando",
      },
      {
        code: "TT-SJL",
        name: "San Juan-Laventille",
      },
      {
        code: "TT-SGE",
        name: "Sangre Grande",
      },
      {
        code: "TT-SIP",
        name: "Siparia",
      },
      {
        code: "TT-TUP",
        name: "Tunapuna-Piarco",
      },
      {
        code: "TT-WTO",
        name: "Western Tobago",
      },
    ],
  },
  {
    code: "TN",
    name: "Túnez",
    states: [
      {
        code: "TN-12",
        name: "Ariana",
      },
      {
        code: "TN-13",
        name: "Ben Arous",
      },
      {
        code: "TN-23",
        name: "Bizerte",
      },
      {
        code: "TN-31",
        name: "Béja",
      },
      {
        code: "TN-81",
        name: "Gabès",
      },
      {
        code: "TN-71",
        name: "Gafsa",
      },
      {
        code: "TN-32",
        name: "Jendouba",
      },
      {
        code: "TN-41",
        name: "Kairouan",
      },
      {
        code: "TN-42",
        name: "Kasserine",
      },
      {
        code: "TN-73",
        name: "Kebili",
      },
      {
        code: "TN-14",
        name: "La Manouba",
      },
      {
        code: "TN-33",
        name: "Le Kef",
      },
      {
        code: "TN-53",
        name: "Mahdia",
      },
      {
        code: "TN-82",
        name: "Medenine",
      },
      {
        code: "TN-52",
        name: "Monastir",
      },
      {
        code: "TN-21",
        name: "Nabeul",
      },
      {
        code: "TN-61",
        name: "Sfax",
      },
      {
        code: "TN-43",
        name: "Sidi Bouzid",
      },
      {
        code: "TN-34",
        name: "Siliana",
      },
      {
        code: "TN-51",
        name: "Sousse",
      },
      {
        code: "TN-83",
        name: "Tataouine",
      },
      {
        code: "TN-72",
        name: "Tozeur",
      },
      {
        code: "TN-11",
        name: "Tunis",
      },
      {
        code: "TN-22",
        name: "Zaghouan",
      },
    ],
  },
  {
    code: "TR",
    name: "Turquía",
    states: [
      {
        code: "TR-01",
        name: "Adana",
      },
      {
        code: "TR-02",
        name: "Adıyaman",
      },
      {
        code: "TR-03",
        name: "Afyonkarahisar",
      },
      {
        code: "TR-68",
        name: "Aksaray",
      },
      {
        code: "TR-05",
        name: "Amasya",
      },
      {
        code: "TR-06",
        name: "Ankara",
      },
      {
        code: "TR-07",
        name: "Antalya",
      },
      {
        code: "TR-75",
        name: "Ardahan",
      },
      {
        code: "TR-08",
        name: "Artvin",
      },
      {
        code: "TR-09",
        name: "Aydın",
      },
      {
        code: "TR-04",
        name: "Ağrı",
      },
      {
        code: "TR-10",
        name: "Balıkesir",
      },
      {
        code: "TR-74",
        name: "Bartın",
      },
      {
        code: "TR-72",
        name: "Batman",
      },
      {
        code: "TR-69",
        name: "Bayburt",
      },
      {
        code: "TR-11",
        name: "Bilecik",
      },
      {
        code: "TR-12",
        name: "Bingöl",
      },
      {
        code: "TR-13",
        name: "Bitlis",
      },
      {
        code: "TR-14",
        name: "Bolu",
      },
      {
        code: "TR-15",
        name: "Burdur",
      },
      {
        code: "TR-16",
        name: "Bursa",
      },
      {
        code: "TR-20",
        name: "Denizli",
      },
      {
        code: "TR-21",
        name: "Diyarbakır",
      },
      {
        code: "TR-81",
        name: "Düzce",
      },
      {
        code: "TR-22",
        name: "Edirne",
      },
      {
        code: "TR-23",
        name: "Elazığ",
      },
      {
        code: "TR-24",
        name: "Erzincan",
      },
      {
        code: "TR-25",
        name: "Erzurum",
      },
      {
        code: "TR-26",
        name: "Eskişehir",
      },
      {
        code: "TR-27",
        name: "Gaziantep",
      },
      {
        code: "TR-28",
        name: "Giresun",
      },
      {
        code: "TR-29",
        name: "Gümüşhane",
      },
      {
        code: "TR-30",
        name: "Hakkâri",
      },
      {
        code: "TR-31",
        name: "Hatay",
      },
      {
        code: "TR-32",
        name: "Isparta",
      },
      {
        code: "TR-76",
        name: "Iğdır",
      },
      {
        code: "TR-46",
        name: "Kahramanmaraş",
      },
      {
        code: "TR-78",
        name: "Karabük",
      },
      {
        code: "TR-70",
        name: "Karaman",
      },
      {
        code: "TR-36",
        name: "Kars",
      },
      {
        code: "TR-37",
        name: "Kastamonu",
      },
      {
        code: "TR-38",
        name: "Kayseri",
      },
      {
        code: "TR-79",
        name: "Kilis",
      },
      {
        code: "TR-41",
        name: "Kocaeli",
      },
      {
        code: "TR-42",
        name: "Konya",
      },
      {
        code: "TR-43",
        name: "Kütahya",
      },
      {
        code: "TR-39",
        name: "Kırklareli",
      },
      {
        code: "TR-71",
        name: "Kırıkkale",
      },
      {
        code: "TR-40",
        name: "Kırşehir",
      },
      {
        code: "TR-44",
        name: "Malatya",
      },
      {
        code: "TR-45",
        name: "Manisa",
      },
      {
        code: "TR-47",
        name: "Mardin",
      },
      {
        code: "TR-33",
        name: "Mersin",
      },
      {
        code: "TR-48",
        name: "Muğla",
      },
      {
        code: "TR-49",
        name: "Muş",
      },
      {
        code: "TR-50",
        name: "Nevşehir",
      },
      {
        code: "TR-51",
        name: "Niğde",
      },
      {
        code: "TR-52",
        name: "Ordu",
      },
      {
        code: "TR-80",
        name: "Osmaniye",
      },
      {
        code: "TR-53",
        name: "Rize",
      },
      {
        code: "TR-54",
        name: "Sakarya",
      },
      {
        code: "TR-55",
        name: "Samsun",
      },
      {
        code: "TR-56",
        name: "Siirt",
      },
      {
        code: "TR-57",
        name: "Sinop",
      },
      {
        code: "TR-58",
        name: "Sivas",
      },
      {
        code: "TR-59",
        name: "Tekirdağ",
      },
      {
        code: "TR-60",
        name: "Tokat",
      },
      {
        code: "TR-61",
        name: "Trabzon",
      },
      {
        code: "TR-62",
        name: "Tunceli",
      },
      {
        code: "TR-64",
        name: "Uşak",
      },
      {
        code: "TR-65",
        name: "Van",
      },
      {
        code: "TR-77",
        name: "Yalova",
      },
      {
        code: "TR-66",
        name: "Yozgat",
      },
      {
        code: "TR-67",
        name: "Zonguldak",
      },
      {
        code: "TR-17",
        name: "Çanakkale",
      },
      {
        code: "TR-18",
        name: "Çankırı",
      },
      {
        code: "TR-19",
        name: "Çorum",
      },
      {
        code: "TR-34",
        name: "İstanbul",
      },
      {
        code: "TR-35",
        name: "İzmir",
      },
      {
        code: "TR-63",
        name: "Şanlıurfa",
      },
      {
        code: "TR-73",
        name: "Şırnak",
      },
    ],
  },
  {
    code: "TM",
    name: "Turkmenistán",
    states: [
      {
        code: "TM-A",
        name: "Ahal",
      },
      {
        code: "TM-S",
        name: "Aşgabat",
      },
      {
        code: "TM-B",
        name: "Balkan",
      },
      {
        code: "TM-D",
        name: "Daşoguz",
      },
      {
        code: "TM-L",
        name: "Lebap",
      },
      {
        code: "TM-M",
        name: "Mary",
      },
    ],
  },
  {
    code: "TV",
    name: "Tuvalu",
    states: [
      {
        code: "TV-FUN",
        name: "Funafuti",
      },
      {
        code: "TV-NMG",
        name: "Nanumanga",
      },
      {
        code: "TV-NMA",
        name: "Nanumea",
      },
      {
        code: "TV-NIT",
        name: "Niutao",
      },
      {
        code: "TV-NUI",
        name: "Nui",
      },
      {
        code: "TV-NKF",
        name: "Nukufetau",
      },
      {
        code: "TV-NKL",
        name: "Nukulaelae",
      },
      {
        code: "TV-VAI",
        name: "Vaitupu",
      },
    ],
  },
  {
    code: "UG",
    name: "Uganda",
    states: [
      {
        code: "UG-C",
        name: "Central",
      },
      {
        code: "UG-E",
        name: "Eastern",
      },
      {
        code: "UG-N",
        name: "Northern",
      },
      {
        code: "UG-W",
        name: "Western",
      },
    ],
  },
  {
    code: "UA",
    name: "Ucrania",
    states: [
      {
        code: "UA-43",
        name: "Avtonomna Respublika Krym",
      },
      {
        code: "UA-71",
        name: "Cherkas'ka Oblast'",
      },
      {
        code: "UA-74",
        name: "Chernihivs'ka Oblast'",
      },
      {
        code: "UA-77",
        name: "Chernivets'ka Oblast'",
      },
      {
        code: "UA-12",
        name: "Dnipropetrovs'ka Oblast'",
      },
      {
        code: "UA-14",
        name: "Donets'ka Oblast'",
      },
      {
        code: "UA-26",
        name: "Ivano-Frankivs'ka Oblast'",
      },
      {
        code: "UA-63",
        name: "Kharkivs'ka Oblast'",
      },
      {
        code: "UA-65",
        name: "Khersons'ka Oblast'",
      },
      {
        code: "UA-68",
        name: "Khmel'nyts'ka Oblast'",
      },
      {
        code: "UA-35",
        name: "Kirovohrads'ka Oblast'",
      },
      {
        code: "UA-30",
        name: "Kyïv",
      },
      {
        code: "UA-32",
        name: "Kyïvs'ka Oblast'",
      },
      {
        code: "UA-46",
        name: "L'vivs'ka Oblast'",
      },
      {
        code: "UA-09",
        name: "Luhans'ka Oblast'",
      },
      {
        code: "UA-48",
        name: "Mykolaïvs'ka Oblast'",
      },
      {
        code: "UA-51",
        name: "Odes'ka Oblast'",
      },
      {
        code: "UA-53",
        name: "Poltavs'ka Oblast'",
      },
      {
        code: "UA-56",
        name: "Rivnens'ka Oblast'",
      },
      {
        code: "UA-40",
        name: "Sevastopol'",
      },
      {
        code: "UA-59",
        name: "Sums'ka Oblast'",
      },
      {
        code: "UA-61",
        name: "Ternopil's'ka Oblast'",
      },
      {
        code: "UA-05",
        name: "Vinnyts'ka Oblast'",
      },
      {
        code: "UA-07",
        name: "Volyns'ka Oblast'",
      },
      {
        code: "UA-21",
        name: "Zakarpats'ka Oblast'",
      },
      {
        code: "UA-23",
        name: "Zaporiz'ka Oblast'",
      },
      {
        code: "UA-18",
        name: "Zhytomyrs'ka Oblast'",
      },
    ],
  },
  {
    code: "AE",
    name: "Emiratos Árabes Unidos",
    states: [
      {
        code: "AE-AJ",
        name: "'Ajmān",
      },
      {
        code: "AE-AZ",
        name: "Abū Z̧aby",
      },
      {
        code: "AE-FU",
        name: "Al Fujayrah",
      },
      {
        code: "AE-SH",
        name: "Ash Shāriqah",
      },
      {
        code: "AE-DU",
        name: "Dubayy",
      },
      {
        code: "AE-RK",
        name: "Ra's al Khaymah",
      },
      {
        code: "AE-UQ",
        name: "Umm al Qaywayn",
      },
    ],
  },
  {
    code: "GB",
    name: "Reino Unido",
    states: [
      {
        code: "GB-BDG",
        name: "Barking and Dagenham",
      },
      {
        code: "GB-BNE",
        name: "Barnet",
      },
      {
        code: "GB-BEX",
        name: "Bexley",
      },
      {
        code: "GB-BEN",
        name: "Brent",
      },
      {
        code: "GB-BRY",
        name: "Bromley",
      },
      {
        code: "GB-CMD",
        name: "Camden",
      },
      {
        code: "GB-CRY",
        name: "Croydon",
      },
      {
        code: "GB-EAL",
        name: "Ealing",
      },
      {
        code: "GB-ENF",
        name: "Enfield",
      },
      {
        code: "GB-GRE",
        name: "Greenwich",
      },
      {
        code: "GB-HCK",
        name: "Hackney",
      },
      {
        code: "GB-HMF",
        name: "Hammersmith and Fulham",
      },
      {
        code: "GB-HRY",
        name: "Haringey",
      },
      {
        code: "GB-HRW",
        name: "Harrow",
      },
      {
        code: "GB-HAV",
        name: "Havering",
      },
      {
        code: "GB-HIL",
        name: "Hillingdon",
      },
      {
        code: "GB-HNS",
        name: "Hounslow",
      },
      {
        code: "GB-ISL",
        name: "Islington",
      },
      {
        code: "GB-KEC",
        name: "Kensington and Chelsea",
      },
      {
        code: "GB-KTT",
        name: "Kingston upon Thames",
      },
      {
        code: "GB-LBH",
        name: "Lambeth",
      },
      {
        code: "GB-LEW",
        name: "Lewisham",
      },
      {
        code: "GB-MRT",
        name: "Merton",
      },
      {
        code: "GB-NWM",
        name: "Newham",
      },
      {
        code: "GB-RDB",
        name: "Redbridge",
      },
      {
        code: "GB-RIC",
        name: "Richmond upon Thames",
      },
      {
        code: "GB-SWK",
        name: "Southwark",
      },
      {
        code: "GB-STN",
        name: "Sutton",
      },
      {
        code: "GB-TWH",
        name: "Tower Hamlets",
      },
      {
        code: "GB-WFT",
        name: "Waltham Forest",
      },
      {
        code: "GB-WND",
        name: "Wandsworth",
      },
      {
        code: "GB-WSM",
        name: "Westminster",
      },
      {
        code: "GB-EAW",
        name: "England and Wales",
      },
      {
        code: "GB-GBN",
        name: "Great Britain",
      },
      {
        code: "GB-UKM",
        name: "United Kingdom",
      },
      {
        code: "GB-LND",
        name: "London, City of",
      },
      {
        code: "GB-ABE",
        name: "Aberdeen City",
      },
      {
        code: "GB-ABD",
        name: "Aberdeenshire",
      },
      {
        code: "GB-ANS",
        name: "Angus",
      },
      {
        code: "GB-AGB",
        name: "Argyll and Bute",
      },
      {
        code: "GB-CLK",
        name: "Clackmannanshire",
      },
      {
        code: "GB-DGY",
        name: "Dumfries and Galloway",
      },
      {
        code: "GB-DND",
        name: "Dundee City",
      },
      {
        code: "GB-EAY",
        name: "East Ayrshire",
      },
      {
        code: "GB-EDU",
        name: "East Dunbartonshire",
      },
      {
        code: "GB-ELN",
        name: "East Lothian",
      },
      {
        code: "GB-ERW",
        name: "East Renfrewshire",
      },
      {
        code: "GB-EDH",
        name: "Edinburgh, City of",
      },
      {
        code: "GB-ELS",
        name: "Eilean Siar",
      },
      {
        code: "GB-FAL",
        name: "Falkirk",
      },
      {
        code: "GB-FIF",
        name: "Fife",
      },
      {
        code: "GB-GLG",
        name: "Glasgow City",
      },
      {
        code: "GB-HLD",
        name: "Highland",
      },
      {
        code: "GB-IVC",
        name: "Inverclyde",
      },
      {
        code: "GB-MLN",
        name: "Midlothian",
      },
      {
        code: "GB-MRY",
        name: "Moray",
      },
      {
        code: "GB-NAY",
        name: "North Ayrshire",
      },
      {
        code: "GB-NLK",
        name: "North Lanarkshire",
      },
      {
        code: "GB-ORK",
        name: "Orkney Islands",
      },
      {
        code: "GB-PKN",
        name: "Perth and Kinross",
      },
      {
        code: "GB-RFW",
        name: "Renfrewshire",
      },
      {
        code: "GB-SCB",
        name: "Scottish Borders, The",
      },
      {
        code: "GB-ZET",
        name: "Shetland Islands",
      },
      {
        code: "GB-SAY",
        name: "South Ayrshire",
      },
      {
        code: "GB-SLK",
        name: "South Lanarkshire",
      },
      {
        code: "GB-STG",
        name: "Stirling",
      },
      {
        code: "GB-WDU",
        name: "West Dunbartonshire",
      },
      {
        code: "GB-WLN",
        name: "West Lothian",
      },
      {
        code: "GB-ENG",
        name: "England",
      },
      {
        code: "GB-SCT",
        name: "Scotland",
      },
      {
        code: "GB-WLS",
        name: "Wales",
      },
      {
        code: "GB-ANT",
        name: "Antrim",
      },
      {
        code: "GB-ARD",
        name: "Ards",
      },
      {
        code: "GB-ARM",
        name: "Armagh",
      },
      {
        code: "GB-BLA",
        name: "Ballymena",
      },
      {
        code: "GB-BLY",
        name: "Ballymoney",
      },
      {
        code: "GB-BNB",
        name: "Banbridge",
      },
      {
        code: "GB-BFS",
        name: "Belfast",
      },
      {
        code: "GB-CKF",
        name: "Carrickfergus",
      },
      {
        code: "GB-CSR",
        name: "Castlereagh",
      },
      {
        code: "GB-CLR",
        name: "Coleraine",
      },
      {
        code: "GB-CKT",
        name: "Cookstown",
      },
      {
        code: "GB-CGV",
        name: "Craigavon",
      },
      {
        code: "GB-DRY",
        name: "Derry",
      },
      {
        code: "GB-DOW",
        name: "Down",
      },
      {
        code: "GB-DGN",
        name: "Dungannon and South Tyrone",
      },
      {
        code: "GB-FER",
        name: "Fermanagh",
      },
      {
        code: "GB-LRN",
        name: "Larne",
      },
      {
        code: "GB-LMV",
        name: "Limavady",
      },
      {
        code: "GB-LSB",
        name: "Lisburn",
      },
      {
        code: "GB-MFT",
        name: "Magherafelt",
      },
      {
        code: "GB-MYL",
        name: "Moyle",
      },
      {
        code: "GB-NYM",
        name: "Newry and Mourne District",
      },
      {
        code: "GB-NTA",
        name: "Newtownabbey",
      },
      {
        code: "GB-NDN",
        name: "North Down",
      },
      {
        code: "GB-OMH",
        name: "Omagh",
      },
      {
        code: "GB-STB",
        name: "Strabane",
      },
      {
        code: "GB-BNS",
        name: "Barnsley",
      },
      {
        code: "GB-BIR",
        name: "Birmingham",
      },
      {
        code: "GB-BOL",
        name: "Bolton",
      },
      {
        code: "GB-BRD",
        name: "Bradford",
      },
      {
        code: "GB-BUR",
        name: "Bury",
      },
      {
        code: "GB-CLD",
        name: "Calderdale",
      },
      {
        code: "GB-COV",
        name: "Coventry",
      },
      {
        code: "GB-DNC",
        name: "Doncaster",
      },
      {
        code: "GB-DUD",
        name: "Dudley",
      },
      {
        code: "GB-GAT",
        name: "Gateshead",
      },
      {
        code: "GB-KIR",
        name: "Kirklees",
      },
      {
        code: "GB-KWL",
        name: "Knowsley",
      },
      {
        code: "GB-LDS",
        name: "Leeds",
      },
      {
        code: "GB-LIV",
        name: "Liverpool",
      },
      {
        code: "GB-MAN",
        name: "Manchester",
      },
      {
        code: "GB-NET",
        name: "Newcastle upon Tyne",
      },
      {
        code: "GB-NTY",
        name: "North Tyneside",
      },
      {
        code: "GB-OLD",
        name: "Oldham",
      },
      {
        code: "GB-RCH",
        name: "Rochdale",
      },
      {
        code: "GB-ROT",
        name: "Rotherham",
      },
      {
        code: "GB-SLF",
        name: "Salford",
      },
      {
        code: "GB-SAW",
        name: "Sandwell",
      },
      {
        code: "GB-SFT",
        name: "Sefton",
      },
      {
        code: "GB-SHF",
        name: "Sheffield",
      },
      {
        code: "GB-SOL",
        name: "Solihull",
      },
      {
        code: "GB-STY",
        name: "South Tyneside",
      },
      {
        code: "GB-SHN",
        name: "St. Helens",
      },
      {
        code: "GB-SKP",
        name: "Stockport",
      },
      {
        code: "GB-SND",
        name: "Sunderland",
      },
      {
        code: "GB-TAM",
        name: "Tameside",
      },
      {
        code: "GB-TRF",
        name: "Trafford",
      },
      {
        code: "GB-WKF",
        name: "Wakefield",
      },
      {
        code: "GB-WLL",
        name: "Walsall",
      },
      {
        code: "GB-WGN",
        name: "Wigan",
      },
      {
        code: "GB-WRL",
        name: "Wirral",
      },
      {
        code: "GB-WLV",
        name: "Wolverhampton",
      },
      {
        code: "GB-NIR",
        name: "Northern Ireland",
      },
      {
        code: "GB-BKM",
        name: "Buckinghamshire",
      },
      {
        code: "GB-CAM",
        name: "Cambridgeshire",
      },
      {
        code: "GB-CMA",
        name: "Cumbria",
      },
      {
        code: "GB-DBY",
        name: "Derbyshire",
      },
      {
        code: "GB-DEV",
        name: "Devon",
      },
      {
        code: "GB-DOR",
        name: "Dorset",
      },
      {
        code: "GB-ESX",
        name: "East Sussex",
      },
      {
        code: "GB-ESS",
        name: "Essex",
      },
      {
        code: "GB-GLS",
        name: "Gloucestershire",
      },
      {
        code: "GB-HAM",
        name: "Hampshire",
      },
      {
        code: "GB-HRT",
        name: "Hertfordshire",
      },
      {
        code: "GB-KEN",
        name: "Kent",
      },
      {
        code: "GB-LAN",
        name: "Lancashire",
      },
      {
        code: "GB-LEC",
        name: "Leicestershire",
      },
      {
        code: "GB-LIN",
        name: "Lincolnshire",
      },
      {
        code: "GB-NFK",
        name: "Norfolk",
      },
      {
        code: "GB-NYK",
        name: "North Yorkshire",
      },
      {
        code: "GB-NTH",
        name: "Northamptonshire",
      },
      {
        code: "GB-NTT",
        name: "Nottinghamshire",
      },
      {
        code: "GB-OXF",
        name: "Oxfordshire",
      },
      {
        code: "GB-SOM",
        name: "Somerset",
      },
      {
        code: "GB-STS",
        name: "Staffordshire",
      },
      {
        code: "GB-SFK",
        name: "Suffolk",
      },
      {
        code: "GB-SRY",
        name: "Surrey",
      },
      {
        code: "GB-WAR",
        name: "Warwickshire",
      },
      {
        code: "GB-WSX",
        name: "West Sussex",
      },
      {
        code: "GB-WOR",
        name: "Worcestershire",
      },
      {
        code: "GB-BAS",
        name: "Bath and North East Somerset",
      },
      {
        code: "GB-BDF",
        name: "Bedford",
      },
      {
        code: "GB-BBD",
        name: "Blackburn with Darwen",
      },
      {
        code: "GB-BPL",
        name: "Blackpool",
      },
      {
        code: "GB-BGW",
        name: "Blaenau Gwent",
      },
      {
        code: "GB-BMH",
        name: "Bournemouth",
      },
      {
        code: "GB-BRC",
        name: "Bracknell Forest",
      },
      {
        code: "GB-BGE",
        name: "Bridgend",
      },
      {
        code: "GB-BNH",
        name: "Brighton and Hove",
      },
      {
        code: "GB-BST",
        name: "Bristol, City of",
      },
      {
        code: "GB-CAY",
        name: "Caerphilly",
      },
      {
        code: "GB-CRF",
        name: "Cardiff",
      },
      {
        code: "GB-CMN",
        name: "Carmarthenshire",
      },
      {
        code: "GB-CBF",
        name: "Central Bedfordshire",
      },
      {
        code: "GB-CGN",
        name: "Ceredigion",
      },
      {
        code: "GB-CHE",
        name: "Cheshire East",
      },
      {
        code: "GB-CHW",
        name: "Cheshire West and Chester",
      },
      {
        code: "GB-CWY",
        name: "Conwy",
      },
      {
        code: "GB-CON",
        name: "Cornwall",
      },
      {
        code: "GB-DAL",
        name: "Darlington",
      },
      {
        code: "GB-DEN",
        name: "Denbighshire",
      },
      {
        code: "GB-DER",
        name: "Derby",
      },
      {
        code: "GB-DUR",
        name: "Durham, County",
      },
      {
        code: "GB-ERY",
        name: "East Riding of Yorkshire",
      },
      {
        code: "GB-FLN",
        name: "Flintshire",
      },
      {
        code: "GB-GWN",
        name: "Gwynedd",
      },
      {
        code: "GB-HAL",
        name: "Halton",
      },
      {
        code: "GB-HPL",
        name: "Hartlepool",
      },
      {
        code: "GB-HEF",
        name: "Herefordshire",
      },
      {
        code: "GB-AGY",
        name: "Isle of Anglesey",
      },
      {
        code: "GB-IOW",
        name: "Isle of Wight",
      },
      {
        code: "GB-IOS",
        name: "Isles of Scilly",
      },
      {
        code: "GB-KHL",
        name: "Kingston upon Hull",
      },
      {
        code: "GB-LCE",
        name: "Leicester",
      },
      {
        code: "GB-LUT",
        name: "Luton",
      },
      {
        code: "GB-MDW",
        name: "Medway",
      },
      {
        code: "GB-MTY",
        name: "Merthyr Tydfil",
      },
      {
        code: "GB-MDB",
        name: "Middlesbrough",
      },
      {
        code: "GB-MIK",
        name: "Milton Keynes",
      },
      {
        code: "GB-MON",
        name: "Monmouthshire",
      },
      {
        code: "GB-NTL",
        name: "Neath Port Talbot",
      },
      {
        code: "GB-NWP",
        name: "Newport",
      },
      {
        code: "GB-NEL",
        name: "North East Lincolnshire",
      },
      {
        code: "GB-NLN",
        name: "North Lincolnshire",
      },
      {
        code: "GB-NSM",
        name: "North Somerset",
      },
      {
        code: "GB-NBL",
        name: "Northumberland",
      },
      {
        code: "GB-NGM",
        name: "Nottingham",
      },
      {
        code: "GB-PEM",
        name: "Pembrokeshire",
      },
      {
        code: "GB-PTE",
        name: "Peterborough",
      },
      {
        code: "GB-PLY",
        name: "Plymouth",
      },
      {
        code: "GB-POL",
        name: "Poole",
      },
      {
        code: "GB-POR",
        name: "Portsmouth",
      },
      {
        code: "GB-POW",
        name: "Powys",
      },
      {
        code: "GB-RDG",
        name: "Reading",
      },
      {
        code: "GB-RCC",
        name: "Redcar and Cleveland",
      },
      {
        code: "GB-RCT",
        name: "Rhondda, Cynon, Taff",
      },
      {
        code: "GB-RUT",
        name: "Rutland",
      },
      {
        code: "GB-SHR",
        name: "Shropshire",
      },
      {
        code: "GB-SLG",
        name: "Slough",
      },
      {
        code: "GB-SGC",
        name: "South Gloucestershire",
      },
      {
        code: "GB-STH",
        name: "Southampton",
      },
      {
        code: "GB-SOS",
        name: "Southend-on-Sea",
      },
      {
        code: "GB-STT",
        name: "Stockton-on-Tees",
      },
      {
        code: "GB-STE",
        name: "Stoke-on-Trent",
      },
      {
        code: "GB-SWA",
        name: "Swansea",
      },
      {
        code: "GB-SWD",
        name: "Swindon",
      },
      {
        code: "GB-TFW",
        name: "Telford and Wrekin",
      },
      {
        code: "GB-THR",
        name: "Thurrock",
      },
      {
        code: "GB-TOB",
        name: "Torbay",
      },
      {
        code: "GB-TOF",
        name: "Torfaen",
      },
      {
        code: "GB-VGL",
        name: "Vale of Glamorgan, The",
      },
      {
        code: "GB-WRT",
        name: "Warrington",
      },
      {
        code: "GB-WBK",
        name: "West Berkshire",
      },
      {
        code: "GB-WIL",
        name: "Wiltshire",
      },
      {
        code: "GB-WNM",
        name: "Windsor and Maidenhead",
      },
      {
        code: "GB-WOK",
        name: "Wokingham",
      },
      {
        code: "GB-WRX",
        name: "Wrexham",
      },
      {
        code: "GB-YOR",
        name: "York",
      },
    ],
  },
  {
    code: "UM",
    name: "Islas ultramarinas menores de los Estados Unidos",
    states: [
      {
        code: "UM-81",
        name: "Baker Island",
      },
      {
        code: "UM-84",
        name: "Howland Island",
      },
      {
        code: "UM-86",
        name: "Jarvis Island",
      },
      {
        code: "UM-67",
        name: "Johnston Atoll",
      },
      {
        code: "UM-89",
        name: "Kingman Reef",
      },
      {
        code: "UM-71",
        name: "Midway Islands",
      },
      {
        code: "UM-76",
        name: "Navassa Island",
      },
      {
        code: "UM-95",
        name: "Palmyra Atoll",
      },
      {
        code: "UM-79",
        name: "Wake Island",
      },
    ],
  },
  {
    code: "US",
    name: "Estados Unidos",
    states: [
      {
        code: "US-DC",
        name: "District of Columbia",
      },
      {
        code: "US-AS",
        name: "American Samoa",
      },
      {
        code: "US-GU",
        name: "Guam",
      },
      {
        code: "US-MP",
        name: "Northern Mariana Islands",
      },
      {
        code: "US-PR",
        name: "Puerto Rico",
      },
      {
        code: "US-UM",
        name: "United States Minor Outlying Islands",
      },
      {
        code: "US-VI",
        name: "Virgin Islands, U.S.",
      },
      {
        code: "US-AL",
        name: "Alabama",
      },
      {
        code: "US-AK",
        name: "Alaska",
      },
      {
        code: "US-AZ",
        name: "Arizona",
      },
      {
        code: "US-AR",
        name: "Arkansas",
      },
      {
        code: "US-CA",
        name: "California",
      },
      {
        code: "US-CO",
        name: "Colorado",
      },
      {
        code: "US-CT",
        name: "Connecticut",
      },
      {
        code: "US-DE",
        name: "Delaware",
      },
      {
        code: "US-FL",
        name: "Florida",
      },
      {
        code: "US-GA",
        name: "Georgia",
      },
      {
        code: "US-HI",
        name: "Hawaii",
      },
      {
        code: "US-ID",
        name: "Idaho",
      },
      {
        code: "US-IL",
        name: "Illinois",
      },
      {
        code: "US-IN",
        name: "Indiana",
      },
      {
        code: "US-IA",
        name: "Iowa",
      },
      {
        code: "US-KS",
        name: "Kansas",
      },
      {
        code: "US-KY",
        name: "Kentucky",
      },
      {
        code: "US-LA",
        name: "Louisiana",
      },
      {
        code: "US-ME",
        name: "Maine",
      },
      {
        code: "US-MD",
        name: "Maryland",
      },
      {
        code: "US-MA",
        name: "Massachusetts",
      },
      {
        code: "US-MI",
        name: "Michigan",
      },
      {
        code: "US-MN",
        name: "Minnesota",
      },
      {
        code: "US-MS",
        name: "Mississippi",
      },
      {
        code: "US-MO",
        name: "Missouri",
      },
      {
        code: "US-MT",
        name: "Montana",
      },
      {
        code: "US-NE",
        name: "Nebraska",
      },
      {
        code: "US-NV",
        name: "Nevada",
      },
      {
        code: "US-NH",
        name: "New Hampshire",
      },
      {
        code: "US-NJ",
        name: "New Jersey",
      },
      {
        code: "US-NM",
        name: "New Mexico",
      },
      {
        code: "US-NY",
        name: "New York",
      },
      {
        code: "US-NC",
        name: "North Carolina",
      },
      {
        code: "US-ND",
        name: "North Dakota",
      },
      {
        code: "US-OH",
        name: "Ohio",
      },
      {
        code: "US-OK",
        name: "Oklahoma",
      },
      {
        code: "US-OR",
        name: "Oregon",
      },
      {
        code: "US-PA",
        name: "Pennsylvania",
      },
      {
        code: "US-RI",
        name: "Rhode Island",
      },
      {
        code: "US-SC",
        name: "South Carolina",
      },
      {
        code: "US-SD",
        name: "South Dakota",
      },
      {
        code: "US-TN",
        name: "Tennessee",
      },
      {
        code: "US-TX",
        name: "Texas",
      },
      {
        code: "US-UT",
        name: "Utah",
      },
      {
        code: "US-VT",
        name: "Vermont",
      },
      {
        code: "US-VA",
        name: "Virginia",
      },
      {
        code: "US-WA",
        name: "Washington",
      },
      {
        code: "US-WV",
        name: "West Virginia",
      },
      {
        code: "US-WI",
        name: "Wisconsin",
      },
      {
        code: "US-WY",
        name: "Wyoming",
      },
    ],
  },
  {
    code: "UY",
    name: "Uruguay",
    states: [
      {
        code: "UY-AR",
        name: "Artigas",
      },
      {
        code: "UY-CA",
        name: "Canelones",
      },
      {
        code: "UY-CL",
        name: "Cerro Largo",
      },
      {
        code: "UY-CO",
        name: "Colonia",
      },
      {
        code: "UY-DU",
        name: "Durazno",
      },
      {
        code: "UY-FS",
        name: "Flores",
      },
      {
        code: "UY-FD",
        name: "Florida",
      },
      {
        code: "UY-LA",
        name: "Lavalleja",
      },
      {
        code: "UY-MA",
        name: "Maldonado",
      },
      {
        code: "UY-MO",
        name: "Montevideo",
      },
      {
        code: "UY-PA",
        name: "Paysandú",
      },
      {
        code: "UY-RV",
        name: "Rivera",
      },
      {
        code: "UY-RO",
        name: "Rocha",
      },
      {
        code: "UY-RN",
        name: "Río Negro",
      },
      {
        code: "UY-SA",
        name: "Salto",
      },
      {
        code: "UY-SJ",
        name: "San José",
      },
      {
        code: "UY-SO",
        name: "Soriano",
      },
      {
        code: "UY-TA",
        name: "Tacuarembó",
      },
      {
        code: "UY-TT",
        name: "Treinta y Tres",
      },
    ],
  },
  {
    code: "UZ",
    name: "Uzbekistán",
    states: [
      {
        code: "UZ-AN",
        name: "Andijon",
      },
      {
        code: "UZ-BU",
        name: "Buxoro",
      },
      {
        code: "UZ-FA",
        name: "Farg‘ona",
      },
      {
        code: "UZ-JI",
        name: "Jizzax",
      },
      {
        code: "UZ-NG",
        name: "Namangan",
      },
      {
        code: "UZ-NW",
        name: "Navoiy",
      },
      {
        code: "UZ-QA",
        name: "Qashqadaryo",
      },
      {
        code: "UZ-QR",
        name: "Qoraqalpog‘iston Respublikasi",
      },
      {
        code: "UZ-SA",
        name: "Samarqand",
      },
      {
        code: "UZ-SI",
        name: "Sirdaryo",
      },
      {
        code: "UZ-SU",
        name: "Surxondaryo",
      },
      {
        code: "UZ-TO",
        name: "Toshkent",
      },
      {
        code: "UZ-TK",
        name: "Toshkent",
      },
      {
        code: "UZ-XO",
        name: "Xorazm",
      },
    ],
  },
  {
    code: "VU",
    name: "Vanuatu",
    states: [
      {
        code: "VU-MAP",
        name: "Malampa",
      },
      {
        code: "VU-PAM",
        name: "Pénama",
      },
      {
        code: "VU-SAM",
        name: "Sanma",
      },
      {
        code: "VU-SEE",
        name: "Shéfa",
      },
      {
        code: "VU-TAE",
        name: "Taféa",
      },
      {
        code: "VU-TOB",
        name: "Torba",
      },
    ],
  },
  {
    code: "VE",
    name: "Venezuela",
    states: [
      {
        code: "VE-Z",
        name: "Amazonas",
      },
      {
        code: "VE-B",
        name: "Anzoátegui",
      },
      {
        code: "VE-C",
        name: "Apure",
      },
      {
        code: "VE-D",
        name: "Aragua",
      },
      {
        code: "VE-E",
        name: "Barinas",
      },
      {
        code: "VE-F",
        name: "Bolívar",
      },
      {
        code: "VE-G",
        name: "Carabobo",
      },
      {
        code: "VE-H",
        name: "Cojedes",
      },
      {
        code: "VE-Y",
        name: "Delta Amacuro",
      },
      {
        code: "VE-W",
        name: "Dependencias Federales",
      },
      {
        code: "VE-A",
        name: "Distrito Capital",
      },
      {
        code: "VE-I",
        name: "Falcón",
      },
      {
        code: "VE-J",
        name: "Guárico",
      },
      {
        code: "VE-K",
        name: "Lara",
      },
      {
        code: "VE-M",
        name: "Miranda",
      },
      {
        code: "VE-N",
        name: "Monagas",
      },
      {
        code: "VE-L",
        name: "Mérida",
      },
      {
        code: "VE-O",
        name: "Nueva Esparta",
      },
      {
        code: "VE-P",
        name: "Portuguesa",
      },
      {
        code: "VE-R",
        name: "Sucre",
      },
      {
        code: "VE-T",
        name: "Trujillo",
      },
      {
        code: "VE-S",
        name: "Táchira",
      },
      {
        code: "VE-X",
        name: "Vargas",
      },
      {
        code: "VE-U",
        name: "Yaracuy",
      },
      {
        code: "VE-V",
        name: "Zulia",
      },
    ],
  },
  {
    code: "VN",
    name: "Vietnam",
    states: [
      {
        code: "VN-44",
        name: "An Giang",
      },
      {
        code: "VN-43",
        name: "Bà Rịa–Vũng Tàu",
      },
      {
        code: "VN-57",
        name: "Bình Dương",
      },
      {
        code: "VN-58",
        name: "Bình Phước",
      },
      {
        code: "VN-40",
        name: "Bình Thuận",
      },
      {
        code: "VN-31",
        name: "Bình Định",
      },
      {
        code: "VN-55",
        name: "Bạc Liêu",
      },
      {
        code: "VN-54",
        name: "Bắc Giang",
      },
      {
        code: "VN-53",
        name: "Bắc Kạn",
      },
      {
        code: "VN-56",
        name: "Bắc Ninh",
      },
      {
        code: "VN-50",
        name: "Bến Tre",
      },
      {
        code: "VN-04",
        name: "Cao Bằng",
      },
      {
        code: "VN-59",
        name: "Cà Mau",
      },
      {
        code: "VN-CT",
        name: "Cần Thơ",
      },
      {
        code: "VN-30",
        name: "Gia Lai",
      },
      {
        code: "VN-03",
        name: "Hà Giang",
      },
      {
        code: "VN-63",
        name: "Hà Nam",
      },
      {
        code: "VN-HN",
        name: "Hà Nội",
      },
      {
        code: "VN-15",
        name: "Hà Tây",
      },
      {
        code: "VN-23",
        name: "Hà Tĩnh",
      },
      {
        code: "VN-14",
        name: "Hòa Bình",
      },
      {
        code: "VN-66",
        name: "Hưng Yên",
      },
      {
        code: "VN-61",
        name: "Hải Dương",
      },
      {
        code: "VN-HP",
        name: "Hải Phòng",
      },
      {
        code: "VN-73",
        name: "Hậu Giang",
      },
      {
        code: "VN-SG",
        name: "Hồ Chí Minh",
      },
      {
        code: "VN-34",
        name: "Khánh Hòa",
      },
      {
        code: "VN-47",
        name: "Kiên Giang",
      },
      {
        code: "VN-28",
        name: "Kon Tum",
      },
      {
        code: "VN-01",
        name: "Lai Châu",
      },
      {
        code: "VN-41",
        name: "Long An",
      },
      {
        code: "VN-02",
        name: "Lào Cai",
      },
      {
        code: "VN-35",
        name: "Lâm Đồng",
      },
      {
        code: "VN-09",
        name: "Lạng Sơn",
      },
      {
        code: "VN-67",
        name: "Nam Định",
      },
      {
        code: "VN-22",
        name: "Nghệ An",
      },
      {
        code: "VN-18",
        name: "Ninh Bình",
      },
      {
        code: "VN-36",
        name: "Ninh Thuận",
      },
      {
        code: "VN-68",
        name: "Phú Thọ",
      },
      {
        code: "VN-32",
        name: "Phú Yên",
      },
      {
        code: "VN-24",
        name: "Quảng Bình",
      },
      {
        code: "VN-27",
        name: "Quảng Nam",
      },
      {
        code: "VN-29",
        name: "Quảng Ngãi",
      },
      {
        code: "VN-13",
        name: "Quảng Ninh",
      },
      {
        code: "VN-25",
        name: "Quảng Trị",
      },
      {
        code: "VN-52",
        name: "Sóc Trăng",
      },
      {
        code: "VN-05",
        name: "Sơn La",
      },
      {
        code: "VN-21",
        name: "Thanh Hóa",
      },
      {
        code: "VN-20",
        name: "Thái Bình",
      },
      {
        code: "VN-69",
        name: "Thái Nguyên",
      },
      {
        code: "VN-26",
        name: "Thừa Thiên–Huế",
      },
      {
        code: "VN-46",
        name: "Tiền Giang",
      },
      {
        code: "VN-51",
        name: "Trà Vinh",
      },
      {
        code: "VN-07",
        name: "Tuyên Quang",
      },
      {
        code: "VN-37",
        name: "Tây Ninh",
      },
      {
        code: "VN-49",
        name: "Vĩnh Long",
      },
      {
        code: "VN-70",
        name: "Vĩnh Phúc",
      },
      {
        code: "VN-06",
        name: "Yên Bái",
      },
      {
        code: "VN-71",
        name: "Điện Biên",
      },
      {
        code: "VN-DN",
        name: "Đà Nẵng",
      },
      {
        code: "VN-33",
        name: "Đắk Lắk",
      },
      {
        code: "VN-72",
        name: "Đắk Nông",
      },
      {
        code: "VN-39",
        name: "Đồng Nai",
      },
      {
        code: "VN-45",
        name: "Đồng Tháp",
      },
    ],
  },
  {
    code: "YE",
    name: "Yemen",
    states: [
      {
        code: "YE-AD",
        name: "'Adan",
      },
      {
        code: "YE-AM",
        name: "'Amrān",
      },
      {
        code: "YE-AB",
        name: "Abyān",
      },
      {
        code: "YE-BA",
        name: "Al Bayḑā'",
      },
      {
        code: "YE-JA",
        name: "Al Jawf",
      },
      {
        code: "YE-MR",
        name: "Al Mahrah",
      },
      {
        code: "YE-MW",
        name: "Al Maḩwīt",
      },
      {
        code: "YE-HU",
        name: "Al Ḩudaydah",
      },
      {
        code: "YE-DA",
        name: "Aḑ Ḑāli'",
      },
      {
        code: "YE-DH",
        name: "Dhamār",
      },
      {
        code: "YE-IB",
        name: "Ibb",
      },
      {
        code: "YE-LA",
        name: "Laḩij",
      },
      {
        code: "YE-MA",
        name: "Ma'rib",
      },
      {
        code: "YE-RA",
        name: "Raymah",
      },
      {
        code: "YE-SH",
        name: "Shabwah",
      },
      {
        code: "YE-TA",
        name: "Tā‘izz",
      },
      {
        code: "YE-SA",
        name: "Şan‘ā'",
      },
      {
        code: "YE-SN",
        name: "Şan‘ā'",
      },
      {
        code: "YE-SD",
        name: "Şā‘dah",
      },
      {
        code: "YE-HJ",
        name: "Ḩajjah",
      },
      {
        code: "YE-HD",
        name: "Ḩaḑramawt",
      },
    ],
  },
  {
    code: "ZM",
    name: "Zambia",
    states: [
      {
        code: "ZM-02",
        name: "Central",
      },
      {
        code: "ZM-08",
        name: "Copperbelt",
      },
      {
        code: "ZM-03",
        name: "Eastern",
      },
      {
        code: "ZM-04",
        name: "Luapula",
      },
      {
        code: "ZM-09",
        name: "Lusaka",
      },
      {
        code: "ZM-06",
        name: "North-Western",
      },
      {
        code: "ZM-05",
        name: "Northern",
      },
      {
        code: "ZM-07",
        name: "Southern",
      },
      {
        code: "ZM-01",
        name: "Western",
      },
    ],
  },
  {
    code: "ZW",
    name: "Zimbabue",
    states: [
      {
        code: "ZW-BU",
        name: "Bulawayo",
      },
      {
        code: "ZW-HA",
        name: "Harare",
      },
      {
        code: "ZW-MA",
        name: "Manicaland",
      },
      {
        code: "ZW-MC",
        name: "Mashonaland Central",
      },
      {
        code: "ZW-ME",
        name: "Mashonaland East",
      },
      {
        code: "ZW-MW",
        name: "Mashonaland West",
      },
      {
        code: "ZW-MV",
        name: "Masvingo",
      },
      {
        code: "ZW-MN",
        name: "Matabeleland North",
      },
      {
        code: "ZW-MS",
        name: "Matabeleland South",
      },
      {
        code: "ZW-MI",
        name: "Midlands",
      },
    ],
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    const [results] = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM "States"'
    );
    if (results[0].count > 0) {
      console.log("La tabla States ya tiene datos. No se insertará datos.");
      return;
    }

    const transaction = await queryInterface.sequelize.transaction();
    try {
      for (const country of ALL_COUNTRIES_WITH_STATES_SEEDER) {
        // 1) Obtener countryId
        const result = await queryInterface.sequelize.query(
          `SELECT id FROM "Countries" WHERE code = :code LIMIT 1`,
          {
            replacements: { code: country.code },
            type: Sequelize.QueryTypes.SELECT,
            transaction,
          }
        );

        const countryRecord = result[0];

        if (!countryRecord) {
          console.warn(
            `País con código ${country.code} no encontrado. Saltando...`
          );
          continue;
        }

        const countryId = countryRecord.id;

        // 2) Eliminar estados anteriores
        await queryInterface.bulkDelete(
          "States",
          { fk_country_id: countryId },
          { transaction }
        );

        // 3) Crear registros de estados
        const timestamp = new Date();
        const stateRecords = country.states.map((s) => ({
          id: uuidv4(),
          fk_country_id: countryId,
          code: s.code,
          name: s.name,
          createdAt: timestamp,
          updatedAt: timestamp,
        }));

        // 4) Insertar nuevos estados
        if (stateRecords.length > 0) {
          await queryInterface.bulkInsert("States", stateRecords, {
            transaction,
          });
        }
      }

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      console.error("Error en seeder:", error);
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("States", null, {});
  },
};
