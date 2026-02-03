import { httpClient, HttpClient, ServiceResult } from '../helpers/http-helper';
import { GenericResponse, GetAllProuctBO } from '../types/products';

export class ProductService {
  public static getAllProducts = async () => {
    try {
      const response = await httpClient.get<GenericResponse<GetAllProuctBO>>(
        '/api/interview-demo',
      );

      return response;
    } catch (error: any) {
      return ServiceResult.failed(
        null,
        error?.message || 'Something went wrong',
      );
    }
  };
}
