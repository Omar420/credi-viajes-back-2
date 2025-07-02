import { GenderModel, CountriesModel, DocumentTypesModel } from "@src/models"; // Asumiendo que estos modelos se pueden importar para tipos

export type PassengerType = 'adult' | 'child' | 'infant';

export interface IPassengerData {
    id?: string; // Para actualizaciones o si ya existe
    firstName: string;
    firstSurname: string;
    middleName?: string;
    secondSurname?: string; // Opcional, como en el modelo
    fk_gender_id: string; // UUID
    dateOfBirth: string; // Formato YYYY-MM-DD
    fk_nationality_country_id: string; // UUID
    fk_doc_type_id: string; // UUID
    documentNumber: string;
    passengerType: PassengerType;
    associatedAdultId?: string | null; // UUID del adulto asociado, solo para infantes

    // Para respuestas, podríamos querer los objetos completos:
    gender?: GenderModel;
    nationality?: CountriesModel;
    documentType?: DocumentTypesModel;
}

// Podríamos tener una interfaz más detallada para cuando se recupera un pasajero
export interface IPassengerDetails extends IPassengerData {
    id: string;
    deleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    // incluir las relaciones pobladas si es necesario
}
