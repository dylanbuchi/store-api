export type CompanyProductType = "ikea" | "horne" | "amara" | "terrain";

export interface IProduct {
  name: string;
  price: number;
  company: CompanyProductType;

  rating?: number;
  featured?: boolean;
  createdAt?: Date;
}
