export interface HasDataCollection<T> {
  data: {
    id: number;
    type: string;
    attributes: T;
  }[]
}
