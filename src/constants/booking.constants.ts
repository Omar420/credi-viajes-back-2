export const PASSENGER_TYPE = {
  ADULT: 'ADT',
  CHILD: 'CHD',
  INFANT: 'INFT',
};

export const FOID_TYPES_KIU = {
  NI: 'NI', // NATIONAL IDENTITY NUMBER – NÚMERO DE IDENTIFICACIÓN NACIONAL
  ID: 'ID', //  LOCALLY DEFINED ID NUMBER – NÚMERO DE IDENTIFICACIÓN LOCAL
  PP: 'PP', // PASSPORT NUMBER – NÚMERO DE PASAPORTE
};

export const DOC_TYPES_KIU = {
  ID: 'I', //  ID NUMBER – NÚMERO DE IDENTIFICACIÓN LOCAL
  P: 'P', // PASSPORT NUMBER – NÚMERO DE PASAPORTE
};

export const DOCUMENTS_TYPE = {
  V: 'V', //Venezolano
  E: 'E', // extranjero
  P: 'P', // Pasaporte
};

export const BOOKING = {
  MAX_PASSENGERS: 9,
  FLIGHT_TYPES: {
    ONE_WAY: 'one-way',
    ROUND_TRIP: 'round-trip',
  },
  ORIGIN: {
    FROM_IZZICHECK: 'IZZICHEK',
    FROM_BOT: 'BOT,',
  },
};
