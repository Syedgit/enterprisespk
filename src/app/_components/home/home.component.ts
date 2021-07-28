import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  colors=  ["#339E42",
  "#039BE5",
  "#EF6C00",
  "#A1887F",
  "#607D8B",
  "#039BE5",
  "#009688",
  "#536DFE",
  "#AB47BC",
  "#E53935",
  "#3F51B5"];
  randomItem: string;
  clientsArray: any = [];
  bgColor = "#339E42";

  constructor(config: NgbCarouselConfig, private adminService: AdminService) {
    // 
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    this.adminService
      .getClients()
      .subscribe(
        posts => {
          console.log('GET all Data works', posts);
          this.clientsArray = posts;
        });
        this.getRandomInt();
  }
  getRandomInt() {
    // if (!this.randomItem) {
    //     this.randomItem = this.colors[Math.floor(Math.random()*this.colors.length)];
    //     console.log('s',this.randomItem);
    // }
    // return this.randomItem;
    this.bgColor = this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}
