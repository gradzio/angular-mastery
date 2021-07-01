
export interface HasDataCollection<T> {
  data: {
    id: number;
    type: string;
    attributes: T;
  }[]
}

export interface ProductAttributes {
  name: string;
  imageUrl: string;
  price: string;
}
