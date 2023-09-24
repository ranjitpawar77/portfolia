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
    phoneNumber: "+244 930 690 710",
    gmail: 'samuelfreitas.ao@gmail.com',
    location: 'Luanda, Angola',
    profileImage: "../../assets/images/image.png",
    description: "Formado em engenharia informática, com larga de experiência em desenvolvimento web e mobile, sou dedicado em conhecer melhor as tecnologias a fim de dar respostas e soluções que geram excelentes resultados nos negócios e transformar a vida das pessoas."
  }
  education = [
    {
      educationName: 'Hacker Ético e contramedidas',
      statingDate: 'Ago 2022',
      endingDate: 'Presente',
      edcationschool: 'SoftVET Cyber Segurança'
    },
    {
      educationName: 'Formação Pedagógica Inicial de Formadores',
      statingDate: 'Mar 2012',
      endingDate: 'Dez 2015',
      edcationschool: 'Instituto Superior Politécnico Internacional de Angola (ISIA)'
    },
    {
      educationName: 'Formação Pedagógica Inicial de Formadores',
      statingDate: 'Mar 2012',
      endingDate: 'Dez 2015',
      edcationschool: 'Instituto Superior Politécnico Internacional de Angola (ISIA)'
    }]

  experiance = [
    {
      experianceName: 'DESENVOLVEDOR MOBILE',
      statingDate: 'Abr de 2023',
      endingDate: 'Presente',
      experianceCompany: 'RCS ANGOLA',
      companylocation: 'Rua Comandante Arguelles, nº 103. Prenda - Luanda, Angola'
    },
    {
      experianceName: 'DESENVOLVEDOR FRONTEND',
      statingDate: 'Abr de 2018',
      endingDate: 'Dez de 2021',
      experianceCompany: 'QUALITY CONTACT CENTERS',
      companylocation: 'Rua Comandante Arguelles, nº 103. Prenda - Luanda, Angola'
    },
    {
      experianceName: 'DESENVOLVEDOR MOBILE',
      statingDate: 'Abr de 2023',
      endingDate: 'Presente',
      experianceCompany: 'RCS ANGOLA',
      companylocation: 'Rua Comandante Arguelles, nº 103. Prenda - Luanda, Angola'
    },
    {
      experianceName: 'DESENVOLVEDOR FRONTEND',
      statingDate: 'Abr de 2018',
      endingDate: 'Dez de 2021',
      experianceCompany: 'QUALITY CONTACT CENTERS',
      companylocation: 'Rua Comandante Arguelles, nº 103. Prenda - Luanda, Angola'
    }]
}
