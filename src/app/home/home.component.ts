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
    phoneNumber: "+244 930 690 710",
    gmail: 'samuelfreitas.ao@gmail.com',
    location: 'Luanda, Angola',
    profileImage: "../../assets/images/image.png",
    description: "Formado em engenharia informática, com larga de experiência em desenvolvimento web e mobile, sou dedicado em conhecer melhor as tecnologias a fim de dar respostas e soluções que geram excelentes resultados nos negócios e transformar a vida das pessoas."
  }

  socialMedia = [{ logo: "./../../assets/logo/linkedin.svg", link: "http://link.com" },
  { logo: "./../../assets/logo/facebook.svg", link: "http://link.com" },
  { logo: "./../../assets/logo/whatsapp.svg", link: "http://link.com" },
  { logo: "./../../assets/logo/github.svg", link: "http://link.com" }
  ]

}
