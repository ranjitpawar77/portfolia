import { Component } from '@angular/core';

@Component({
  selector: 'app-com',
  templateUrl: './com.component.html',
  styleUrls: ['./com.component.css']
})
export class ComComponent {
  data = {
    name: "Aladeojebi opeyemi",
    jobtitle: "Product Designer",
    email: "aladeojebi@gmail.com",
    location: 'Luanda, Angola',
    number: '+244 930 690 710',
    describe: "I've helped business owners create exceptional experiences for users of Android, iOS and the Web.I've helped business owners create exceptional experiences for users of Android, iOS and the Web."
  }
}
