// Tipos resumidos para modelos frecuentemente referenciados en relaciones

export interface IGenderSummary {
    id: string;
    name: string;
    code?: string; // Si existe en GenderModel
}

export interface ICountrySummary {
    id: string;
    name: string;
    isoCode: string; // o 'code', dependiendo del modelo CountriesModel
    phoneCode?: string;
}

export interface IDocumentTypeSummary {
    id: string;
    name: string;
    code?: string; // Si existe
}

export interface IDestinationSummary {
    id: string;
    name: string;
    code: string; // IATA code, por ejemplo
    // fk_country_id?: string; // Podríamos incluir el ID del país
    // country?: ICountrySummary; // O el objeto país resumido
}

export interface IBookingStatusSummary {
    id: string;
    name: string;
    code: string;
}

export interface IUserSummary { // Para createdBy, updatedBy
    id: string;
    username?: string; // Opcional, puede que solo se necesite el id
    email?: string; // Opcional
}

export interface IClientSummary { // Para el cliente que hace la reserva
    id: string;
    // Podríamos incluir un resumen del usuario asociado si es relevante
    user?: IUserSummary; 
    // Otros campos relevantes del ClientModel que sean necesarios en el resumen
    firstName?: string; 
    lastName?: string;
}

// Podrías tener también tipos "Details" más completos si los "Summary" no son suficientes
// pero sin llegar a ser el modelo completo de Sequelize con todos sus métodos.
// Ejemplo:
// export interface IDestinationDetails extends IDestinationSummary {
//     visaRequired: boolean;
//     country: ICountrySummary;
// }
