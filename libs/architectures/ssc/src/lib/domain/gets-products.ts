import { Observable } from 'rxjs';
import { Product } from './product';
import { InjectionToken } from '@angular/core';

export interface GetsProducts {
  getAll(): Observable<Product[]>;
}

export const GETS_PRODUCTS = new InjectionToken<GetsProducts>('GET_PRODUCTS');

















