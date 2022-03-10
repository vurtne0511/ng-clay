
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NcButtonModule } from '@ng-clay/components/button';
import { NcCheckboxModule } from '@ng-clay/components/checkbox';
import { NcInputModule } from '@ng-clay/components/input';
import { NcScrimModule } from '@ng-clay/components/scrim';
import { NcTableModule } from '@ng-clay/components/table';
import { NcTooltipModule } from '@ng-clay/components/tooltip';
import { NcExampleModule } from '@ng-clay/example';
import { NcMarkdownModule } from '@ng-clay/markdown';

import { ExampleTableAlternateComponent } from './examples/alternate';
import { ExampleTableBasicComponent } from './examples/basic';
import { ExampleTableColumnVisibilityComponent } from './examples/column-visibility';
import { ExampleTableDataComponent } from './examples/data';
import { ObservableDataService } from './examples/data.service';
import { ExampleTableObservableDataComponent } from './examples/observable-data';
import { ExampleTableSelectableComponent } from './examples/selectable';
import { ExampleTableSortComponent } from './examples/sort';
import { TableDocumentComponent } from './table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NcButtonModule,
    NcCheckboxModule,
    NcExampleModule,
    NcTooltipModule,
    NcTableModule,
    NcScrimModule,
    NcMarkdownModule,
    NcCheckboxModule,
    NcInputModule,
    RouterModule.forChild([
      { path: '', component: TableDocumentComponent }
    ])],
  providers: [ObservableDataService],
  declarations: [
    TableDocumentComponent,
    ExampleTableBasicComponent,
    ExampleTableAlternateComponent,
    ExampleTableSortComponent,
    ExampleTableColumnVisibilityComponent,
    ExampleTableSelectableComponent,
    ExampleTableDataComponent,
    ExampleTableObservableDataComponent
  ],
})
export class TableDocumentModule { }
