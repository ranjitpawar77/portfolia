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

}
