import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../../services/data.service';
import {IMAGES} from '../../models/imges';


@Component({
  selector: 'ngbd-carousel-navigation',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  sliderArray: object[];
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor( private config: NgbCarouselConfig, private data:DataService) {

    this.sliderArray = [];
    config.wrap = true;
    config.keyboard = true;
   }

  ngOnInit() {
    this.data.getData().subscribe((result: IMAGES) => {
      this.sliderArray = result.sliderArray;
    });
  }

}
