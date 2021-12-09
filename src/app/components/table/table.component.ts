import { AfterViewInit, Component, Input, SimpleChange, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TABLEDataSource, TABLEItem } from './table-datasource';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TABLEComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TABLEItem>;
  dataSource: TABLEDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'first_name', 'last_name', 'email', 'gender', 'age'];

  constructor() {
    this.dataSource = new TABLEDataSource();
  }
  @Input() users: any = [];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  ngOnChanges(changes: SimpleChange) {
    console.log(changes);
    
    this.dataSource.data = this.users;
    // this.table.renderRows();
  }
}
