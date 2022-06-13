import { Component, OnInit } from '@angular/core';
declare var anime: any;

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml1 .letters');
    textWrapper!.innerHTML = textWrapper!.textContent!.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: true })
      .add({
        targets: '.ml1 .letter',
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: 'easeOutExpo',
        duration: 1800,
        delay: (el: any, i: number) => 70 * (i + 1),
      })
      .add({
        targets: '.ml1 .line',
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: 'easeOutExpo',
        duration: 1800,
        offset: '-=875',
        delay: (el: any, i: number, l: number) => 80 * (l - i),
      })
      .add({
        targets: '.ml1',
        opacity: 0,
        duration: 2200,
        easing: 'easeOutExpo',
        delay: 7500,
      });
  }
}
