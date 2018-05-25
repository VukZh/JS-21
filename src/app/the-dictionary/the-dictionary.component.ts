import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-the-dictionary',
  templateUrl: './the-dictionary.component.html',
  styleUrls: ['./the-dictionary.component.css']
})
export class TheDictionaryComponent implements OnInit {

  dictionary = [
    {
      word: 'education',
      translation: 'образование',
    },
    {
      word: 'book',
      translation: 'книга',
    },
    {
      word: 'programming',
      translation: 'программирование',
    },
    {
      word: 'what',
      translation: 'что',
    },
    {
      word: 'around',
      translation: 'вокруг',
    },
    {
      word: 'animals',
      translation: 'животные'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
