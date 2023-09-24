import { Injectable } from '@angular/core';
interface CardItem {
  imageUrl: string;
  text: string;
}

interface CardData {
  [category: string]: CardItem[];
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
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
  constructor() { }
  getData() {
    return this.data
  }
  getSocialMedia() {
    return this.socialMedia
  }
  getProjectData() {
    return this.cardData
  }
  getEdcationsData() {
    return this.education
  }
  getExperiencesData() {
    return this.experiance
  }
  getSkillsData() {
    return this.skillsArray
  }
  getReviesData() {
    return this.reviews
  }
}
