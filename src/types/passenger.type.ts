import { ICountrySummary, IDocumentTypeSummary, IGenderSummary } from "./shared.type";

export type PassengerType = 'adult' | 'child' | 'infant';

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
}

export interface IPassengerDetails extends IPassengerDataBase { // Para respuestas detalladas
    id: string;
    deleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    
    // IDs de las relaciones (útil tenerlos directamente)
    fk_gender_id: string;
    fk_nationality_country_id: string;
    fk_doc_type_id: string;
    associatedAdultId?: string | null;

    // Relaciones pobladas con tipos resumidos
    gender?: IGenderSummary;
    nationality?: ICountrySummary;
    documentType?: IDocumentTypeSummary;
    associatedAdult?: IPassengerDetails; // Podría ser un IPassengerSummary si se crea
}

// Tipo para cuando el pasajero es parte de una lista o un resumen de reserva
export interface IPassengerSummary extends IPassengerDataBase {
    id: string;
    // No incluiríamos fechas de auditoría o relaciones complejas aquí
    // Solo la información más pertinente para un resumen.
    gender?: IGenderSummary; // O solo el nombre del género
    // passengerType ya está en IPassengerDataBase
}
