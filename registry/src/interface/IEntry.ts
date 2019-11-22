export interface IEntryInput {
  name: string;
  email: string;
  phone: string;
  address: string;
  archive?: boolean;
  checkin?: Date;
  checkout?: Date;
  host: string;
}

export interface IEntryUpdate {
  name?: string;
  email?: string;
  address?: string;
  phone?: string;
  archive?: boolean;
  checkout?: Date;
  host?: string;
}

export interface IEntryResponse {
  _id?: string;
  name?: string;
  email?: string;
  address?: string;
  archive?: boolean;
  phone?: string;
  checkout?: Date;
  host?: string;
}

export interface IEntryCondition {
  archive?: boolean;
}
