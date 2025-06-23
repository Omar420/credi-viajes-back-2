export interface IEmitParams {
  type: string;
  data: any;
  userIds?: string[];
}

export interface IGroupEmitParams {
  payload: IEmitParams;
  isAdmin?: boolean;
}
