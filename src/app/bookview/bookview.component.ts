import { Component } from '@angular/core';

@Component({
  selector: 'app-bookview',
  templateUrl: './bookview.component.html',
  styleUrls: ['./bookview.component.css']
})
export class BookviewComponent {
  book:any=[
    {
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgD2FzGKfNGGoTYkvWRzEstrG5mwIQFG5yyA&usqp=CAU",
      "title":"Python",
      "price":500
    },
    { 
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLs4qSfHAy3e4cU-vW6PATNrcbWOsAAxkfBQ&usqp=CAU",
      "title":"Elements Of Programming",
      "price":700
    },
    {
      "image":"https://hh-certificates.sgp1.digitaloceanspaces.com/blog/wp-content/uploads/2022/06/27051802/dummies-book.jpg",
      "title":"Medical bill & coding",
      "price":890
    },
    {
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRLh11_hj-OQCEJVyNWveZaengQSz2m8qOMw&usqp=CAU",
      "title":"Cracking coding interview",
      "price":800
    },
    {
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiPegoNhtsncFzRnOcCI2X4UD5TNt-CIj_yg&usqp=CAU",
      "title":"Rapid Development",
      "price":600
    },
    {
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4iVdAottvKrCLCtA1hWtX1X9a857YjDEsg&usqp=CAU",
      "title":"Graphics",
      "price":400
    },
    {
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjpxDaFLUxym5HvZNRlCYa8ma6ZAVtLeZObA&usqp=CAU",
      "title":"Javascript ",
      "price":590
    },
    {
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMmZQ5Y6f6a7NmZugZfDmgL7mMYFXIYjIlMg&usqp=CAU",
      "title":"Secure Coding",
      "price":600
    },
    {
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrvtbQDRkxGG43bHsrCkr_Yb5AEbXLBXTauG9S3lKrJjd4emeh8luuunryvKYoDCKwJPo&usqp=CAU",
      "title":"Machine Learning",
      "price":350
    },
    {
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd8avSuz1K_sYzLjWyHpzRH8I_8PKH694NjA&usqp=CAU",
      "title":"Computer fundamentals",
      "price":600
    }

  ]

}
