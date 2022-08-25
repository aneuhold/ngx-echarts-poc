import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './components/chart/chart.component';

// Import the core module
import * as echarts from 'echarts/core';

// The different things needed below can be found in the TS example for the
// chosen chart in the Apache ECharts example site: https://echarts.apache.org/examples/en/index.html

// Import the components needed
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
} from 'echarts/components';
// Import the charts needed
import { ScatterChart } from 'echarts/charts';
// Import any transitions if wanted (makes it have nice animations)
import { UniversalTransition } from 'echarts/features';
// Import the desired renderer
import { SVGRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
  GridComponent,
  LegendComponent,
  ScatterChart,
  SVGRenderer,
  UniversalTransition,
]);

@NgModule({
  declarations: [AppComponent, ChartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({ echarts }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
