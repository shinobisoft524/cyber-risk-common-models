export interface IAdminUser {
  name: string;
  id: number;
  email: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  UserRole: {
    id: number;
    isActive: boolean;
    Role: { name: string; id: number };
  }[];
}
