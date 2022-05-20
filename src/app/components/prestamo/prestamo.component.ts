import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.component.html',
  styleUrls: ['./prestamo.component.css']
})
export class PrestamoComponent implements OnInit {
  cliente:any={
    id:'',
    name:'',
    email:'',
    celular:''
  }

  libros:any[]=[{
    id:'1',
    titulo:'La niña de mis ojos',
    autor_id:1,
    lote:12313,
    description:'Descripcion del libro xd'
  }];

  displayedColumns: string[] = ['#', 'titulo', 'autor_id', 'lote', 'description', 'actions'];
  dataSource: MatTableDataSource<any>;
  
  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.libros);
   }

  ngOnInit(): void {

  }

  regCliente(data:any){

  }

  selCliente(){

  }

}
