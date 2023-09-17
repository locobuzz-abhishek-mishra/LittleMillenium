import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss']
})
export class LineGraphComponent implements OnInit {
 

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
        this.createLineChart();
    },500)
  }
  
  createLineChart() {
      new Chart('line-graph', {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
                    datasets: [{
                        backgroundColor: 'rgba(92, 107, 192, 0.36)',
                        borderColor: 'rgba(92, 107, 192,.5)',
                        data: [0, 120, 260, 320, 180, 250, 295, 360, 240, 140, 260, 90],
                        label: 'Dataset',
                        fill: 'start',
                        lineTension: 0.4,
                        pointRadius: 0 
                    }]
                },
                options: {
                    elements : {
                        line: {
                            tension: 0.4,
                        }
                    },
                    scales:{
                        xAxes:[{
                            type: 'category',
                            labels: ['Jan', 'Feb', 'Mar', 'Apr','May', 'June', 'July', 'Aug', 'Sept','Oct', 'Nov', 'Dec'],
                        }],

                        yAxes:[{
                           ticks:{
                            max: 400,
                            stepSize:100
                           }
                        }]
                    },
                    legend: {
                        display: false
                    },
                    
                    maintainAspectRatio: false,
                    plugins: {
                        filler: {
                            propagate: false
                        }
                    },
                    title: {
                        display: true,// Optional: Adjust font style
                        padding: 25,
                    }
                }
        })
  }

}
