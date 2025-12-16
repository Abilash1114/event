import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  showLoader = true;

  private imagesLoaded = false;
  private minTimeDone = false;

  ngAfterViewInit() {
    this.waitForImages();
    this.minimumDelay();
  }

  private minimumDelay() {
    setTimeout(() => {
      this.minTimeDone = true;
      this.checkAndHide();
    }, 1000); // ⏱ 5 seconds
  }

  private waitForImages() {
    const images = Array.from(document.images);
    let loaded = 0;
    const total = images.length;

    if (total === 0) {
      this.imagesLoaded = true;
      this.checkAndHide();
      return;
    }

    const increment = () => {
      loaded++;
      if (loaded === total) {
        this.imagesLoaded = true;
        this.checkAndHide();
      }
    };

    images.forEach(img => {
      if (img.complete) {
        increment();
      } else {
        img.addEventListener('load', increment);
        img.addEventListener('error', increment);
      }
    });
  }

  private checkAndHide() {
    if (this.imagesLoaded && this.minTimeDone) {
      this.showLoader = false;
    }
  }
}
