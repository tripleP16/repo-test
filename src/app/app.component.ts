import { Component } from '@angular/core';
import { TestService } from './services/test.service';
import { Rol } from './models/views/rol';
import { RolFactory } from './models/concrete-factory/rol.factory';
import { Products } from './models/views/products';
import { ProductsFactory } from './models/concrete-factory/product.factory';
import { Pagination } from './models/views/core/paginationModel';
import { PaginationFactory } from './models/concrete-factory/core/pagination-factory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test';
  constructor(
    private readonly testService: TestService<Rol>,
    private readonly productService: TestService<Products>,
    private readonly paginatedService: TestService<Pagination<Products>>
  ){
    this.testService.factory = new RolFactory();
    this.testService.path = 'roles'

    this.productService.factory = new ProductsFactory();
    this.productService.path = 'products';


    this.paginatedService.factory = new PaginationFactory<Products>(new ProductsFactory());
    this.paginatedService.path = 'products';

  }

  ngOnInit(){
    // this.testService.get().subscribe((roles: Rol[])=>{
    //   console.log(roles);
    // })

    // this.productService.get().subscribe((product:Products[])=>{
    //   console.log(product)
    // })


    this.paginatedService.getPaginated().subscribe((product: Pagination<Products>)=>{
      console.log(product.meta.limit)
      console.log(product.data);
    })

  }
}
