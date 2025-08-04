import {
    BookingModel,
    BookingStatusModel,
    AirItineraryInformationModel,
    BookingsPassengersModel
} from './booking';

import {
    ClientModel,
    AddressesModel,
    ClientsAddressModel,
    PassengersModel
} from './clients';

import {
    DocumentTypesModel,
    DocumentModel
} from './documents';

import {
    CreditPurchaseModel,
    InstallmentPlanModel,
    InstallmentModel,
    PaymentModel
} from './payment';

import {
    CategoryModel,
    PackagesModel,
    ProductsModel,
    PackagesProductsModel
} from './products';

import {
    CountriesModel,
    DestinationsModel,
    GenderModel,
    RolesModel,
    StatesModel
} from './shared';

import {
    AuthModel,
    UserModel
} from './users';

export const setupAssociations = () => {
    // Booking Associations
    BookingModel.belongsTo(BookingStatusModel, { foreignKey: 'fk_status_id', as: 'status' });
    BookingStatusModel.hasMany(BookingModel, { foreignKey: 'fk_status_id', as: 'bookings' });

    BookingModel.belongsTo(DestinationsModel, { foreignKey: 'fk_origin_id', as: 'origin' });
    BookingModel.belongsTo(DestinationsModel, { foreignKey: 'fk_destination_id', as: 'destination' });

    BookingModel.belongsTo(AuthModel, { foreignKey: 'fk_auth_id', as: 'auth' });
    AuthModel.hasMany(BookingModel, { foreignKey: 'fk_auth_id', as: 'bookings' });

    BookingModel.belongsTo(CountriesModel, { foreignKey: 'fk_contact_country_id', as: 'contactCountry' });

    BookingModel.belongsTo(UserModel, { foreignKey: 'fk_created_by_id', as: 'createdBy' });
    UserModel.hasMany(BookingModel, { foreignKey: 'fk_created_by_id', as: 'createdBookings' });

    BookingModel.belongsTo(UserModel, { foreignKey: 'fk_updated_by_id', as: 'updatedBy' });
    UserModel.hasMany(BookingModel, { foreignKey: 'fk_updated_by_id', as: 'updatedBookings' });

    BookingModel.hasMany(AirItineraryInformationModel, { foreignKey: 'fk_booking_id', as: 'airItineraryInformation' });
    AirItineraryInformationModel.belongsTo(BookingModel, { foreignKey: 'fk_booking_id', as: 'booking' });

    // Passenger Associations
    PassengersModel.belongsTo(GenderModel, { foreignKey: 'fk_gender_id', as: 'gender' });
    PassengersModel.belongsTo(DocumentTypesModel, { foreignKey: 'fk_doc_type_id', as: 'documentType' });
    PassengersModel.belongsTo(CountriesModel, { foreignKey: 'fk_nationality_country_id', as: 'nationality' });
    PassengersModel.belongsTo(CountriesModel, { foreignKey: 'fk_issue_country_id', as: 'issueCountry' });
    PassengersModel.belongsTo(PassengersModel, { foreignKey: 'associatedAdultId', as: 'associatedAdult', constraints: false });

    // Booking <-> Passenger (Many-to-Many)
    BookingModel.belongsToMany(PassengersModel, { through: BookingsPassengersModel, foreignKey: 'fk_booking_id', otherKey: 'fk_passenger_id', as: 'passengers' });
    PassengersModel.belongsToMany(BookingModel, { through: BookingsPassengersModel, foreignKey: 'fk_passenger_id', otherKey: 'fk_booking_id', as: 'bookings' });

    // Payment Associations
    InstallmentModel.belongsTo(BookingModel, { foreignKey: 'fk_booking_id', as: 'booking' });
    BookingModel.hasMany(InstallmentModel, { foreignKey: 'fk_booking_id', as: 'installments' });

    InstallmentModel.belongsTo(CreditPurchaseModel, { foreignKey: 'credit_purchase_id', as: 'creditPurchase' });
    CreditPurchaseModel.hasMany(InstallmentModel, { foreignKey: 'credit_purchase_id', as: 'installments' });

    CreditPurchaseModel.belongsTo(BookingModel, { foreignKey: 'reservation_id', as: 'booking' });
    CreditPurchaseModel.belongsTo(InstallmentPlanModel, { foreignKey: 'installment_plan_id', as: 'installmentPlan' });

    PaymentModel.belongsTo(InstallmentModel, { foreignKey: 'installment_id', as: 'installment' });
    InstallmentModel.hasMany(PaymentModel, { foreignKey: 'installment_id', as: 'payments' });

    // Other existing associations from the project that should be centralized
    AuthModel.belongsTo(UserModel, { foreignKey: 'fk_user_id' });
    UserModel.hasOne(AuthModel, { foreignKey: 'fk_user_id' });

    AuthModel.belongsTo(ClientModel, { foreignKey: 'fk_client_id' });
    ClientModel.hasOne(AuthModel, { foreignKey: 'fk_client_id' });

    console.log("Sequelize associations have been set up.");
};
