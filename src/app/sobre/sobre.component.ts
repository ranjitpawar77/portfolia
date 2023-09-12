import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent {
  data = {
    name: "Aladeojebi opeyemi",
    jobtitle: "Product Designer",
    phoneNumber: "+244 930 690 710",
    gmail: 'samuelfreitas.ao@gmail.com',
    location: 'Luanda, Angola',
    description: "Formado em engenharia informática, com larga de experiência em desenvolvimento web e mobile, sou dedicado em conhecer melhor as tecnologias a fim de dar respostas e soluções que geram excelentes resultados nos negócios e transformar a vida das pessoas."
  }
  kan: number[] = [1, 2, 3, 4, 5, 6];
  ser: number[] = [1, 2, 3];
}
