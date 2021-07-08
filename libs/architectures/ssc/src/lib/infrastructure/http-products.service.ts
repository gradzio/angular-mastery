import { Injectable } from '@angular/core';
import { GetsProducts } from '../domain/gets-products';
import { Product } from '../domain/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HasDataCollection } from './response';
import { ProductAttributes } from './product.attributes';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpProductsService implements GetsProducts {

  constructor(private client: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.client.get<HasDataCollection<ProductAttributes>>(`/assets/v1/products/products.json`)
      .pipe(
        map((response: HasDataCollection<ProductAttributes>) => response.data.map(data => ({
          id: data.id,
          name: data.attributes.name,
          imageUrl: data.attributes.imageUrl,
          price: data.attributes.price
        }))
        )
      );
  }
}














