export interface IEntryInput {
  name: string;
  email: string;
  phone: string;
  address: string;
  checkin?: Date;
  checkout?: Date;
  host: IHostInput;
}

export interface IEntryUpdate {
  name?: string;
  email?: string;
  address?: string;
  phone?: string;
  checkout?: Date;
}

export interface IEntryResponse {
  _id?: string;
  name?: string;
  email?: string;
  address?: string;
  phone?: string;
  checkout?: Date;
  host: IHostResponse;
}

export interface IHostResponse {
  _id: string;
  name?: string;
  email?: string;
  phone?: string;
}
export interface IHostInput {
  name: string;
  email: string;
  phone: string;
}
