import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  data = {
    name: "Aladeojebi opeyemi",
    jobtitle: "Product Designer",
    describe: "I've helped business owners create exceptional experiences for users of Android, iOS and the Web."
  }
  toogle: boolean = false;
  showmenu() {
    this.toogle = !this.toogle
  }
}
