export interface Car {
  id: number;
  mark_id: string;
  folder_id: string;
  price: number;
  images: { image: string[] };
  year?: number;
  drive?: string;
  modification_id?: string;
  color?: string;
  run?: number;
  state?: string;
  vin: string;
}

export type SortingType = '' | 'asc' | 'desc';
