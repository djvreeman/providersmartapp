import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Color, BaseChartDirective, Label} from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import {DataService} from '../services/data.service';
import {MatPaginator} from '@angular/material/paginator';
import {EgfrTableData} from '../datamodel/egfr';
import {formatEgfrResult} from '../../utility-functions';

@Component({
  selector: 'app-e-gfr',
  templateUrl: './e-gfr.component.html',
  styleUrls: ['./e-gfr.component.css']
})
export class EGFRComponent implements OnInit, AfterViewInit {

  egfrDataSource = this.dataservice.egfrDataSource;
  egfrRowMax = 7;

  lineChartData: ChartDataSets[] = [
    {
      data: [
        {
          x: new Date('2016-12-12T00:00:00Z'),
          y: 64
        },
        {
          x: new Date('2017-01-10T00:00:00Z'),
          y: 59
        },
        {
          x: new Date('2017-02-11T00:00:00Z'),
          y: 58
        },
        {
          x: new Date('2017-03-11T00:00:00Z'),
          y: 57
        },
        {
          x: new Date('2017-04-23T00:00:00Z'),
          y: 53
        },
        {
          x: new Date('2017-05-21T00:00:00Z'),
          y: 14
        }],
      label: 'eGFR', fill: false
    },

  ];

  /* public lineChartLabels: Label[] = ['12/12/16', '1/10/17', '02/11/17', '03/11/17', '04/23/17', '05/21/17'];
  */
  /* public lineChartLabels: Label[] = [];
  */

  lineChartLabels: Label[] = ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'];

  // public lineChartOptions = {
  //   responsive: false,
  //   maintainAspectRatio: true,
  //   scales: {
  //     yAxes: {
  //       id: 'y-axis-0',
  //       type: 'linear',
  //       ticks: {
  //         suggestedMax: 100,
  //         suggestedMin: 0
  //       }
  //     },
  //     xAxes: {
  //       id: 'x-axis-0',
  //       type: 'time',
  //       ticks: {
  //         suggestedMin:  new Date('2016-11-30'),
  //         suggestedMax: new Date( '2017-06-01')
  //       },
  //       time: {
  //         unit: 'day',
  //         displayFormats: {
  //           day: 'MMM D'
  //         },
  //         tooltipFormat: 'll D MMM'
  //       }
  //     }
  //   },
  //   annotation: {
  //     annotations: [
  //       {
  //         drawTime: 'beforeDatasetsDraw',
  //         type: 'box',
  //         id: 'egfr-critical',
  //         xScaleID: 'x-axis-0',
  //         yScaleID: 'y-axis-0',
  //         borderWidth: 0,
  //         yMin: 0,
  //         yMax: 15,
  //         backgroundColor: 'rgba(227, 127, 104,0.3)'
  //       },
  //       {
  //         drawTime: 'beforeDatasetsDraw',
  //         type: 'box',
  //         id: 'egfr-warning',
  //         xScaleID: 'x-axis-0',
  //         yScaleID: 'y-axis-0',
  //         borderWidth: 0,
  //         yMin: 15,
  //         yMax: 60,
  //         backgroundColor: 'rgba(247, 245, 116,0.3)'
  //       },
  //       {
  //         drawTime: 'beforeDatasetsDraw',
  //         type: 'box',
  //         id: 'egfr-ok',
  //         xScaleID: 'x-axis-0',
  //         yScaleID: 'y-axis-0',
  //         borderWidth: 0,
  //         yMin: 60,
  //         yMax: 100,
  //         backgroundColor: 'rgba(128, 204, 113,0.3)'
  //       }
  //     ]
  //   }
  // };

  lineChartOptions = {
    responsive: false,
    maintainAspectRatio: true,
    scales: {
      yAxes: {
        id: 'y-axis-0',
        type: 'linear',
        ticks: {
          suggestedMax: 100,
          suggestedMin: 0
        }
      },
      xAxes: {
        id: 'x-axis-0',
        type: 'time',
        ticks: {
          suggestedMin: new Date('2016-11-30'),
          suggestedMax: new Date('2017-06-01')
        },
        time: {
          unit: 'day',
          displayFormats: {
            day: 'MMM D'
          },
          tooltipFormat: 'll D MMM'
        }
      }
    },
  };
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
    },
  ];
  lineChartLegend = false;
  // lineChartPlugins =  [pluginAnnotations];
  lineChartPlugins = [
    {
      annotation: {
        annotations: [
          {
            drawTime: 'beforeDatasetsDraw',
            type: 'box',
            id: 'egfr-critical',
            xScaleID: 'x-axis-0',
            yScaleID: 'y-axis-0',
            borderWidth: 0,
            yMin: 0,
            yMax: 15,
            backgroundColor: 'rgba(227, 127, 104,0.3)'
          },
          {
            drawTime: 'beforeDatasetsDraw',
            type: 'box',
            id: 'egfr-warning',
            xScaleID: 'x-axis-0',
            yScaleID: 'y-axis-0',
            borderWidth: 0,
            yMin: 15,
            yMax: 60,
            backgroundColor: 'rgba(247, 245, 116,0.3)'
          },
          {
            drawTime: 'beforeDatasetsDraw',
            type: 'box',
            id: 'egfr-ok',
            xScaleID: 'x-axis-0',
            yScaleID: 'y-axis-0',
            borderWidth: 0,
            yMin: 60,
            yMax: 100,
            backgroundColor: 'rgba(128, 204, 113,0.3)'
          }
        ]
      }
    }];
  lineChartType = 'line';

  constructor(public dataservice: DataService) {
  }

  displayedColumns = ['date', 'result'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // todo: fix below, paginator doesn't work when assigned, shows all rows, doesn't limit to max, paging doesn't work
    if (this.egfrDataSource.data.length > this.egfrRowMax) {
      this.egfrDataSource.paginator = this.paginator;
    }
  }

  EgfrResult(egfr: EgfrTableData): string {
    return formatEgfrResult(egfr.egfr, egfr.unit);
  }


}
