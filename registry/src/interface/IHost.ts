export interface IHostInput {
  name: string;
  email: string;
  phone: string;
}

export interface IHostUpdate {
  name?: string;
  email?: string;
  phone?: string;
}

export interface IHostResponse {
  _id?: string;
  name?: string;
  email?: string;
  phone?: string;
}
