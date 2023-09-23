import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  cardData = [
    { imageUrl: './../../assets/project-management-software-in-mother-tongue-1130x750.png', text: 'dkfjsdklfj' },
    { imageUrl: './../../assets/project-management-software-in-mother-tongue-1130x750.png', text: 'dkfjsdklfj' },
    { imageUrl: './../../assets/project-management-software-in-mother-tongue-1130x750.png', text: 'dkfjsdklfj' },
    { imageUrl: './../../assets/project-management-software-in-mother-tongue-1130x750.png', text: 'dkfjsdklfj' }
  ];
}
