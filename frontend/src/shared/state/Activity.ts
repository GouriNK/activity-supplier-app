// Activity Model

import { Supplier } from './Supplier';
 
export interface Activity {
    id: number;
    title: string;
    price: number;
    currency: string;
    rating: number;
    specialOffer: boolean;
    supplierId?: string;
    supplier: Supplier
  }
  