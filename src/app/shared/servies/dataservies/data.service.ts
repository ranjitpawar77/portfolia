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
    phoneNumber: "+2348130658183",
    gmail: 'samuelfreitas.ao@gmail.com',
    location: 'Luanda, Angola',
    profileImage: "../../assets/images/image.png",
    description: "Formado em engenharia informática, com larga de experiência em desenvolvimento web e mobile, sou dedicado em conhecer melhor as tecnologias a fim de dar respostas e soluções que geram excelentes resultados nos negócios e transformar a vida das pessoas."
  }
  socialMedia = [{ logo: "./../../assets/logo/linkedin.svg", link: "https://www.linkedin.com/in/aladeojebi-opeyemi/" },
  { logo: "./../../assets/logo/facebook.svg", link: "https://Facebook.com/aladeojebi.opeyemi" },
  { logo: "./../../assets/logo/whatsapp.svg", link: "https://twitter.com/micorpy" },
  { logo: "./../../assets/logo/github.svg", link: "https://github.com/Micorpy" }
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
      educationName: 'Bachelor of Science in Fisheries and Aquaculture Technology School',
      statingDate: 'Ago 2013',
      endingDate: 'Ago 2018',
      edcationschool: 'Federal University of Technology Akure'
    }]
  experiance = [
    {
      experianceName: 'Designer de produto',
      statingDate: 'Janeiro de 2023',
      endingDate: 'Presente',
      experianceCompany: 'Enkiconnect',
      companylocation: 'Nova Gales do Sul, Austrália'
    },
    {
      experianceName: 'Designer de produto',
      statingDate: 'Maio de 2022',
      endingDate: 'Dezembro de 2022',
      experianceCompany: 'Múltiplos empreendimentos',
      companylocation: 'São Francisco, Califórnia, Estados Unidos'
    },
    {
      experianceName: 'Designer de produto',
      statingDate: 'Novembro de 2021',
      endingDate: 'Abril de 2022',
      experianceCompany: 'BrilloConnetz Limited',
      companylocation: 'Lagos, Nigéria'
    },
    {
      experianceName: 'Designer de experiência do usuário',
      statingDate: 'Maio de 2019',
      endingDate: 'Junho de 2020',
      experianceCompany: 'Sede da Aitechma',
      companylocation: 'Lagos, Nigéria'
    },
    {
      experianceName: 'Designer de experiência do usuário',
      statingDate: 'Agosto de 2018',
      endingDate: 'Maio de 2019',
      experianceCompany: 'HNG',
      companylocation: 'Lagos, Nigéria'
    }]
  skillsArray = [
    {
      header: 'Frontend Frameworks', skills: [
        { name: 'Html', rating: 4 },
        { name: 'Css', rating: 4 },
        { name: 'Javascript', rating: 4 }
      ]
    }, {
      header: 'Design', skills: [
        { name: 'Figma', rating: 4 },
        { name: 'Photoshop', rating: 4 }
      ]
    }
  ];
  reviews = [
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
    },
    {
      profileimg: './../../assets/images/image.png',
      profilename: 'Peterson Augusto',
      position: 'CEO & Founder',
      describe: 'O Samuel é um desenvolvedor incrível, super dedicado e comprometido em entregar projetos de alta qualidade. Trabalhar com ele foi uma experiência única e enriquecedora'
    }
  ]
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
