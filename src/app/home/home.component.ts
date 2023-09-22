import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data = {
    name: "Aladeojebi opeyemi",
    jobtitle: "Product Designer",
    describe: "I've helped business owners create exceptional experiences for users of Android, iOS and the Web."
  }
  socialMedia = [{ logo: "./../../assets/logo/linkedin.svg", link: "http://link.com" },
  { logo: "./../../assets/logo/facebook.svg", link: "http://link.com" },
  { logo: "./../../assets/logo/whatsapp.svg", link: "http://link.com" },
  { logo: "./../../assets/logo/github.svg", link: "http://link.com" }
  ]
  toogle: boolean = false;
  showmenu() {
    this.toogle = !this.toogle
  }

}
