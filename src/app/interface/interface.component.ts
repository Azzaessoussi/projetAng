import { Component,ViewChild, OnInit } from '@angular/core';
import { RegionNbMalade } from '../model/region-nb-malade';
import { ServiceService } from '../services/service.service';




import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid
} from "ng-apexcharts";

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export interface ChartOptions  {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};




@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent {
  @ViewChild("chart") chart!: ChartComponent;
 
  public chartOptions: ChartOptions  ;
  

  a:number=0

  liste:RegionNbMalade[]=[];

  noms:String[]=[];
  nb:number[]=[2,1];

  constructor(private service:ServiceService) {


    
    this.chartOptions = {
      series: [
        {
          name: "distibuted",
          data: []
        }
      ],
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function(chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: [
        "#008FFB",
        "#00E396",
        "#FEB019",
        "#FF4560",
        "#775DD0",
        "#546E7A",
        "#26a69a",
        "#D10CE8"
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      yaxis:{
      },
      xaxis: {
        categories: ["Tunis","Sousse","Gafsa","Mahdia","Touzer","Gabes","Nabeul","Sfax"],
        labels: {
          style: {
            colors: [
              "#008FFB",
              "#00E396",
              "#FEB019",
              "#FF4560",
              "#775DD0",
              "#546E7A",
              "#26a69a",
              "#D10CE8"
            ],
            fontSize: "12px"
          }
        }
      }
    };



    this.service.getList().subscribe(
      data=>{this.liste=data;
       
   this.liste.forEach( e  => { this.noms.push(e.region)  ;
      this.nb.push(e.nbMalade);
       
     });

     this.chartOptions.series[0].data=this.nb;
    // this.chartOptions.xaxis.categories=this.noms;
     console.log( this.chartOptions.series[0].data);
     
     console.log( this.chartOptions.xaxis.categories);

      }
    )

    
  }
}

 