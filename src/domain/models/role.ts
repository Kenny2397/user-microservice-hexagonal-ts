export interface Role {
  id: number;
  name: string;
  description: Text;
  createdAt: Date;
}
export interface CreateRole {
  name: string;
  description: Text;
}
