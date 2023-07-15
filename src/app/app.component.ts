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
    private readonly testService: TestService,
  ){
  }

  ngOnInit(){
    // this.testService.get().subscribe((roles: Rol[])=>{
    //   console.log(roles);
    // })

    // this.productService.get().subscribe((product:Products[])=>{
    //   console.log(product)
    // })



  }
}
