import {
  AfterViewInit,
  Component,
  Input,
  Output,
  SimpleChange,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { LoaderService } from 'src/app/services/loader.service';
import { TABLEDataSource, TABLEItem } from './table-datasource';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TABLEComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TABLEItem>;
  dataSource: TABLEDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'id',
    'first_name',
    'last_name',
    'email',
    'gender',
    'age',
    'actions',
  ];

  constructor(private loader_service: LoaderService) {
    this.dataSource = new TABLEDataSource();    
  }
  @Input() users: any = [];
  @Output() showUserDetails = new EventEmitter<{}>();
  @Output() onDeleteUser = new EventEmitter<number>();

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    this.table.dataSource = this.users;
  }

  ngOnChanges(changes: SimpleChange) {
    setTimeout(() => {      
      this.dataSource.data = this.users
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
      this.loader_service.hideSectionLoader();
    });
  }

  selectUser(id: number, name: string) {
    this.showUserDetails.emit({ id, name });
  }

  deleteUser(id: number) {
    this.loader_service.showSectionLoader(document.querySelector('table')!)
    this.onDeleteUser.emit(id);
  }
}
