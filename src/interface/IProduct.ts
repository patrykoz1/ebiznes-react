type Dispatch<A> = (value: A) => void;

export interface IProduct {
    id: number;
    title: string;
    category: number;
}

export type IShopContextState = {
    products: IProduct[];
}