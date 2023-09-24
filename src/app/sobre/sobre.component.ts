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
    profileImage: "../../assets/images/image.png",
    description: "Formado em engenharia informática, com larga de experiência em desenvolvimento web e mobile, sou dedicado em conhecer melhor as tecnologias a fim de dar respostas e soluções que geram excelentes resultados nos negócios e transformar a vida das pessoas."
  }
  skillsArray = [
    {
      header: 'Programming Languages', skills: [
        { name: 'JavaScript', rating: 4 },
        { name: 'Python', rating: 3 },
        { name: 'Java', rating: 1 },
        { name: 'JavaScript', rating: 4 },
        { name: 'Python', rating: 3 },
        { name: 'Java', rating: 4 },
        { name: 'JavaScript', rating: 4 },
        { name: 'Python', rating: 3 },
        { name: 'Java', rating: 4 }
      ]
    },
    {
      header: 'Frontend Frameworks', skills: [
        { name: 'Angular', rating: 5 },
        { name: 'React', rating: 4 },
        { name: 'Vue.js', rating: 3 }
      ]
    },
    {
      header: 'Backend Frameworks', skills: [
        { name: 'Node.js', rating: 4 },
        { name: 'Django', rating: 4 },
        { name: 'Spring Boot', rating: 3 }
      ]
    },
  ];
  reviews = [{
    profileimg: './../../assets/images/image.png',
    profilename: 'Peterson Augusto',
    position: 'CEO & Founder',
    describe: 'O Samuel é um desenvolvedor incrível, super dedicado e comprometido em entregar projetos de alta qualidade. Trabalhar com ele foi uma experiência única e enriquecedora'
  },
  {
    profileimg: './../../assets/images/image.png',
    profilename: 'Peterson Augusto',
    position: 'CEO & Founder',
    describe: 'O Samuel é um desenvolvedor incrível, super dedicado e comprometido em entregar projetos de alta qualidade. Trabalhar com ele foi uma experiência única e enriquecedora'
  },
  {
    profileimg: './../../assets/images/image.png',
    profilename: 'Peterson Augusto',
    position: 'CEO & Founder',
    describe: 'O Samuel é um desenvolvedor incrível, super dedicado e comprometido em entregar projetos de alta qualidade. Trabalhar com ele foi uma experiência única e enriquecedora'
  }]
}
