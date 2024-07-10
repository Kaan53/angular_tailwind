import { LocationUpgradeModule } from '@angular/common/upgrade';
import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  cards = [
    {
      imageUrl: 'https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150755.jpg?t=st=1720647319~exp=1720650919~hmac=32f0e3eba371878e6302b959edc3d9f692a2c58f8e093022e2950681b4426157&w=996',
      title: 'Card 1',
      Text: 'when you land on a sample web page or open an email template and see content beginning with "lorem ipsum," the page creator placed that apparent gibberish there on purpose.',
    },
    {
      imageUrl: 'https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150755.jpg?t=st=1720647319~exp=1720650919~hmac=32f0e3eba371878e6302b959edc3d9f692a2c58f8e093022e2950681b4426157&w=996',
      title: 'Card 2',
      Text: 'when you land on a sample web page or open an email template and see content beginning with "lorem ipsum," the page creator placed that apparent gibberish there on purpose.',
    },
    {
      imageUrl: 'https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150755.jpg?t=st=1720647319~exp=1720650919~hmac=32f0e3eba371878e6302b959edc3d9f692a2c58f8e093022e2950681b4426157&w=996',
      title: 'Card 3',
      Text: 'when you land on a sample web page or open an email template and see content beginning with "lorem ipsum," the page creator placed that apparent gibberish there on purpose.',
    },
    {
      imageUrl: 'https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150755.jpg?t=st=1720647319~exp=1720650919~hmac=32f0e3eba371878e6302b959edc3d9f692a2c58f8e093022e2950681b4426157&w=996',
      title: 'Card 4',
      Text: 'when you land on a sample web page or open an email template and see content beginning with "lorem ipsum," the page creator placed that apparent gibberish there on purpose.',
    },
    {
      imageUrl: 'https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150755.jpg?t=st=1720647319~exp=1720650919~hmac=32f0e3eba371878e6302b959edc3d9f692a2c58f8e093022e2950681b4426157&w=996',
      title: 'Card 5',
      Text: 'when you land on a sample web page or open an email template and see content beginning with "lorem ipsum," the page creator placed that apparent gibberish there on purpose.',
    },
  ]
}
