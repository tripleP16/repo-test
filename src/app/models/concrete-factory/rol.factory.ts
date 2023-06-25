import {AbstractFactory} from '../abstract-factory/abstractFactory'
import { BaseModel } from '../views/core/baseModel';
import { Rol } from '../views/rol';

export class RolFactory implements AbstractFactory<Rol> {
    createModel(response: any): Rol {
        const newRol = new  Rol(
            response.id,
            response.name,
        );
        return newRol;
    }

}