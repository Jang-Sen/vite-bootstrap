export interface ProductItem {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  name: string;
  price: number;
  description: string;
  category: string;
  productImg: string[];
}
