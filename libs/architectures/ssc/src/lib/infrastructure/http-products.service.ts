import { Injectable } from '@angular/core';
import { GetsProducts } from '../domain/gets-products';
import { HttpClient } from '@angular/common/http';
import { Product } from '../domain/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HasDataCollection, ProductAttributes } from './product.attributes';

@Injectable()
export class HttpProductsService implements GetsProducts {

  constructor(private client: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.client.get<HasDataCollection<ProductAttributes>>(`/v1/products`)
      .pipe(
        map(response => response.data.map( product => ({
          id: product.id,
          name: product.attributes.name,
          imageUrl: product.attributes.imageUrl,
          price: product.attributes.priceInCents / 100,
        })))
      );
  }
}
