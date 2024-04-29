import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../shared/service/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  standalone: true
})
export class ProductoComponent implements OnInit {

  productos: any[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(productosObs => {
      console.log(productosObs);
      this.productos = productosObs;
    });
  }
}
