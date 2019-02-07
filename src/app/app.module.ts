import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule, MatFormFieldModule, MatTableModule,
  MatPaginatorModule, MatSortModule} from '@angular/material';
import { ChartsModule } from 'ng2-charts';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdvsMenuComponent } from './components/advs-menu/advs-menu.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { TableComponent } from './components/table/table.component';
import { SmallBoxComponent } from './components/small-box/small-box.component';
import { AreaChartComponent } from './components/area-chart/area-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { RemoveUnderscorePipe } from './pipes/remove-underscore.pipe';
import { PeiChartComponent } from './components/pei-chart/pei-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvsMenuComponent,
    MainContentComponent,
    TableComponent,
    SmallBoxComponent,
    AreaChartComponent,
    BarChartComponent,
    TimelineComponent,
    RemoveUnderscorePipe,
    PeiChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
