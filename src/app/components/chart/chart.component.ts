import { Component } from '@angular/core';
import { option } from './data';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.less'],
})
export class ChartComponent {
  /**
   * The actual data for the chart to display
   */
  chartOption: any = option;
  initOptions = {
    renderer: 'svg',
  };
}
