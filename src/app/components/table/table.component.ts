import { Component, OnInit, Input, SimpleChanges, ViewChild, Output, EventEmitter, OnChanges } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Camp } from '../../objects/camp';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
  @Output() rowSelected: EventEmitter<any> = new EventEmitter();
  @Output() actionSelected: EventEmitter<any> = new EventEmitter();

  @Input() dispalyData: any[];
  @Input() displayedColumns: String[];
  @Input() action: String;
  @Input() select: Boolean;
  constructor() { }
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    if (this.action) {
      this.displayedColumns.push('Actions');
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.dispalyData);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onRowClicked(row) {
    this.rowSelected.emit(row);
  }
  onActionClicked(row) {
    this.actionSelected.emit(row);
  }
}
