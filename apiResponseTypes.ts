export interface IOrganisationDetailRes {
  id: number;
  name: string;
  Owner?: { id: number; name: string; email: string };
}
