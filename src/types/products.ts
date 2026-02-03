export interface ProductBO {
  id: number;
  product_name: string;
  amount: number;
  image: string;
}

export interface GetAllProuctBO {
  products: ProductBO[];
}

export interface GenericResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: GetAllProuctBO;
  timestamp: string;
}
