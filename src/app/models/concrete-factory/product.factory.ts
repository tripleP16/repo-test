import { AbstractFactory } from "../abstract-factory/abstractFactory";
import { Products } from "../views/products";

export class ProductsFactory implements AbstractFactory<Products> {
    createModel(response: any): Products {
        const newRol = new Products(
            response.id,
            response.name,
            response.price,
            response.description,
            
        );
        return newRol;
    }

}