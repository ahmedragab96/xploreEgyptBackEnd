import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  links = [];

  constructor(
    public router: Router,
  ) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
];

public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90];
public pieChartType = 'pie';

public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
public radarChartData = [
  {data: [120, 130, 180, 70], label: '2017'},
  {data: [90, 150, 200, 45], label: '2018'}
];
public radarChartType = 'radar';

public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [120, 150, 180, 90];
public doughnutChartType = 'doughnut';



  ngOnInit() {
    this.links.push(
      { name: 'Dashboard', link: '/admin', icon: 'book' },
      { name: 'Charts', link: '/admin/charts', icon: 'bar_chart' },
      { name: 'Statistics', link: 'statistics', icon: 'trending_up' },
      // { name: 'Database', link: '/admin/database/hotels', icon: 'storage' },
    );
  }

  navigateTo(link) {
    console.log(link);
    this.router.navigate([link]);
  }

}
