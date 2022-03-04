import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'price', 'createdAt','updatedAt'];
  dataSource = this.prodService.data;
  
  constructor(private prodService: ProductService) { }

  ngOnInit(): void {
  this.prodService.getProducts().subscribe(response => {
    console.log(response)
  });
  }

}
