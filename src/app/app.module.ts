import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule, MatFormFieldModule, MatTableModule,
  MatPaginatorModule, MatSortModule} from '@angular/material';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';


// components
import { AppComponent } from './app.component';
import { AdvsMenuComponent } from './components/advs-menu/advs-menu.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { TableComponent } from './components/table/table.component';
import { SmallBoxComponent } from './components/small-box/small-box.component';
import { AreaChartComponent } from './components/area-chart/area-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { PeiChartComponent } from './components/pei-chart/pei-chart.component';


// pipes
import { AdvFilterPipe } from './pipes/adv-filter.pipe';
import { RemoveUnderscorePipe } from './pipes/remove-underscore.pipe';

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
    PeiChartComponent,
    AdvFilterPipe
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
    ChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
