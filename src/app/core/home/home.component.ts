import { AfterViewInit, Component, OnInit } from '@angular/core';
declare function swipe():any
declare function counter():any
declare function testimonial():any
declare function slider():any
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit,OnInit {
    days: any = '00';
  hours: any = '00';
  minutes: any = '00';
  seconds: any = '00';

  ngOnInit(): void {
    this.startCountdown();
  }
  ngAfterViewInit(): void {
    swipe();
    counter();
    testimonial();
    slider();
  }


    startCountdown() {
    // Set your target date
   const target = new Date('2026-01-01T00:00:00').getTime();


    setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) return;

      this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((diff % (1000 * 60)) / 1000);

    }, 1000);
  }

}
