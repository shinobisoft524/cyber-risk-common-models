import { Organisation, User } from './build';

export interface IStandardReq<T> {
  reqUser?: User;
  reqOrg?: Organisation;
  reqType?: 'list' | 'detail' | 'create' | 'update' | 'delete';
  info?: T;
}

export interface IOrganisationDetailReq {
  id: number;
}

export interface IOrganisationCreateReq {
  name: string;
  Owner: {
    name: string;
    email: string;
  };
}
