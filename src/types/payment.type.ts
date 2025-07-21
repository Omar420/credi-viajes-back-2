import { IDatePickerControl } from "@src/types";

export type IPaymentTableFilters = {
  search: string;
  currency: string;
  statusCode: string;
  officeId: string;
  paymentMethodId: string;
  startDate: IDatePickerControl;
  endDate: IDatePickerControl;
  minAmount: string;
  maxAmount: string;
  typeValidationsId: string;
  searchZelle: string;
  alliedTradeId: string;
  integrationId: string;
};

export type IPaymentItem = {
  id: string;
  reference: string;
  amount: string;
  description: string;
  movementDate: string;
  movementTime: string;
  document: string;
  currency: string;
  rate: string;
  createdAt: string;
  updatedAt: string;
  businessId: string;
  integrationId: string;
  officeId: string;
  validationId: string;
  validationDate: string;
  mpDetail: IMpDetail;
  paymentMethod: IPaymentMethodItem;
  status: IPaymentStatusItem;
  office: IOfficeItem;
  user: IUserItem;
  zelleDetail: IZelleDetail;
  validated: IValidatedItem;
  instantCreditDetail: IInstantCreditDetail;
  leadId: string;
  lead: ILeadChat;
  isExternalLink: boolean;
  paymentLinkDetail: IPaymentLinkDetail;
  serviceValidation: boolean;
  histories: History[];
  allied: IAlliedItem;
  totalAmount: string;
};

export type History = {
  id: string;
  paymentId: string;
  date: string;
  userId: string | null;
  description: string;
  createdAt: string;
  user: IUserItem | null;
};

export type IInstantCreditDetail = {
  id: string;
  phoneNumber: string;
  originAccount: string;
  originClientId: string;
  originBank: string;
  destinationAccount: string;
  createdAt: string;
  updatedAt: string;
};

export type IZelleDetail = {
  id: string;
  bank: string;
  user: string;
  createdAt: string;
  updatedAt: string;
};

export type IMpDetail = {
  id: string;
  origin: string;
  originBankCode: string;
  originReference: string;
  originClient: string;
  originPhoneNumber: string;
  destinationReference: string;
  destinationBankCode: string;
  destinationClient: string;
  destinationPhoneNumber: string;
  createdAt: string;
  updatedAt: string;
};

export type IValidatedItem = {
  id: string;
  description: string;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  businessId: string;
  typeId: string;
  user: IUserItem;
  userId: string;
  type: IValidateTypeItem;
};

export type IPaymentMethodItem = {
  id: string;
  name: string;
  code: string;
};

export type IPaymentStatusItem = {
  id: string;
  name: string;
  code: string;
  count?: number;
};

export type ICurrencyItem = {
  id: string;
  name: string;
};

export type IValidationItem = {
  id: string;
  name: string;
  code: string;
  blocked: boolean;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  businessId: string;
  serviceId: string;
};

export type IClientMikrowisp = {
  success: boolean;
  message: string;
  invoice: {
    IDFactura: number;
    detalle: string;
    valor: string;
  }[];
  client: {
    id: number;
    nombre: string;
    estado: string;
    correo: string;
    telefono: string;
    movil: string;
    cedula: string;
    pasarela: string;
    codigo: string;
    direccion_principal: string;
    mantenimiento: boolean;
    fecha_suspendido: string;
  };
};

export type IPaymentLinkDetail = {
  id: string;
  phoneNumber: string;
  name: string;
  surname: string;
  email: string;
  document: string;
};

export type IValidateTypeItem = {
  id: string;
  name: string;
  code: string;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
};

export type IPaymentMethodSearch = {
  id: string;
  name: string;
  code: string;
  services: IService[];
};

// Dummy interfaces to avoid errors
export interface IDatePickerControl {}
export interface IOfficeItem {}
export interface IUserItem {}
export interface ILeadChat {}
export interface IAlliedItem {}
export interface IService {}
