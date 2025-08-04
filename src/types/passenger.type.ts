import { IClientSummary, ICountrySummary, IDocumentTypeSummary, IGenderSummary } from "./shared.type";

export type PassengerType = 'adult' | 'child' | 'infant';

export interface ISmartBookingPassenger {
    surname: string;
    name: string;
    fk_gender_id: string;
    foid_type: string;
    document_type: string;
    foid_id: string;
    date_of_birth: string;
    passenger_type_code: string;
    fk_nationality_country_id: string;
    fk_issue_country_id: string;
    expiration_date: string;
    representative?: string;
}

export interface IPassengerDataBase { // Campos base comunes
    firstName: string;
    firstSurname: string;
    middleName?: string;
    secondSurname?: string; 
    dateOfBirth: string; // Formato YYYY-MM-DD
    documentNumber: string;
    passengerType: PassengerType;
}

export interface IPassengerDataInput extends IPassengerDataBase { // Para creación/entrada
    fk_gender_id: string; // UUID
    fk_nationality_country_id: string; // UUID
    fk_doc_type_id: string; // UUID
    associatedAdultId?: string | null; // UUID del adulto asociado, solo para infantes
    fk_client_id?: string | null; // Optional: if passenger can be linked to a client profile
}

// Renamed from IPassengerDetails to IPassengerAttributes
export interface IPassengerAttributes extends IPassengerDataBase { 
    id: string;
    deleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    
    // IDs de las relaciones (útil tenerlos directamente)
    fk_gender_id: string;
    fk_nationality_country_id: string;
    fk_doc_type_id: string;
    associatedAdultId?: string | null;
    fk_client_id?: string | null; // Added

    // Relaciones pobladas con tipos resumidos/específicos
    gender?: IGenderSummary;
    nationality?: ICountrySummary;
    documentType?: IDocumentTypeSummary;
    associatedAdult?: IPassengerAttributes; // Self-reference
    client?: IClientSummary; // Assuming IClientSummary from shared.type or client.type
}

// Renamed from IPassengerDataInput to IPassengerCreationAttributes
export type IPassengerCreationAttributes = Omit<IPassengerAttributes,
    'id' |
    'deleted' |
    'createdAt' |
    'updatedAt' |
    'gender' |
    'nationality' |
    'documentType' |
    'associatedAdult' |
    'client'
>;

// Payload for controller requests (was IPassengerData originally in controller)
export interface IPassengerPayload extends IPassengerDataBase {
    fk_gender_id: string;
    fk_nationality_country_id: string;
    fk_doc_type_id: string;
    associatedAdultId?: string | null;
    fk_client_id?: string | null; // Client might send this to associate passenger
}


// Tipo para cuando el pasajero es parte de una lista o un resumen de reserva
export interface IPassengerSummary extends IPassengerDataBase {
    id: string;
    // No incluiríamos fechas de auditoría o relaciones complejas aquí
    // Solo la información más pertinente para un resumen.
    gender?: IGenderSummary; // O solo el nombre del género
    // passengerType ya está en IPassengerDataBase
    // fk_client_id might be useful here too if listing "my saved passengers"
    fk_client_id?: string | null;
}
