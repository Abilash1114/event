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

  // ⏱ Minimum 5 seconds loader
  private minimumDelay() {
    setTimeout(() => {
      this.minTimeDone = true;
      this.checkAndHideLoader();
    }, 5000);
  }

  private waitForImages() {
    const images = Array.from(document.images);
    let loadedCount = 0;
    const totalImages = images.length;

    if (totalImages === 0) {
      this.imagesLoaded = true;
      this.checkAndHideLoader();
      return;
    }

    const increment = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        this.imagesLoaded = true;
        this.checkAndHideLoader();
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        increment();
      } else {
        img.addEventListener('load', increment);
        img.addEventListener('error', increment);
      }
    });
  }

  private checkAndHideLoader() {
    if (this.imagesLoaded && this.minTimeDone) {
      this.showLoader = false;
    }
  }
}
