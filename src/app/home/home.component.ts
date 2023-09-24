import { Component } from '@angular/core';
import { DataService } from '../shared/servies/dataservies/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: any
  constructor(private mainDataService: DataService) {
    this.data = this.mainDataService.getData()
  }

  socialMedia = [{ logo: "./../../assets/logo/linkedin.svg", link: "http://link.com" },
  { logo: "./../../assets/logo/facebook.svg", link: "http://link.com" },
  { logo: "./../../assets/logo/whatsapp.svg", link: "http://link.com" },
  { logo: "./../../assets/logo/github.svg", link: "http://link.com" }
  ]

}
