import { Component } from '@angular/core';
interface CardItem {
  imageUrl: string;
  text: string;
}

interface CardData {
  [category: string]: CardItem[];
}
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  cardData: CardData = {
    app: [
      {
        imageUrl: './../../assets/project-management-software-in-mother-tongue-1130x750.png',
        text: 'app'
      },
      {
        imageUrl: './../../assets/project-management-software-in-mother-tongue-1130x750.png',
        text: 'app'
      },
    ],
    web: [
      {
        imageUrl: './../../assets/project-management-software-in-mother-tongue-1130x750.png',
        text: 'web'
      },
      {
        imageUrl: './../../assets/project-management-software-in-mother-tongue-1130x750.png',
        text: 'web'
      },
    ],
    design: [
      {
        imageUrl: './../../assets/project-management-software-in-mother-tongue-1130x750.png',
        text: 'design'
      },
      {
        imageUrl: './../../assets/project-management-software-in-mother-tongue-1130x750.png',
        text: 'design'
      },
    ]
  };
  displayedData: CardItem[] = [];
  ngOnInit() {
    this.displayedData = this.getAllData()
  }
  showAllData() {
    this.displayedData = this.getAllData()
  }
  getAllCategories(): string[] {
    return Object.keys(this.cardData);
  }
  showCategoryData(value: string) {
    this.displayedData = this.cardData[value];
  }
  getAllData(): CardItem[] {
    return Object.values(this.cardData).reduce((acc, val) => acc.concat(val), []);
  }
}
