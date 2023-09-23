import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  contactForm!: FormGroup;
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
  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      message: ['']
    });
  }
  submitForm() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
    else {

    }
  }
}
