import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  showLoader = true;

  ngAfterViewInit() {
    const images = Array.from(document.images);
    let loadedCount = 0;
    const totalImages = images.length;

    // ✅ Define first
    const increment = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        this.showLoader = false;
      }
    };

    if (totalImages === 0) {
      this.showLoader = false;
      return;
    }

    images.forEach((img) => {
      if (img.complete) {
        increment();
      } else {
        img.addEventListener('load', increment);
        img.addEventListener('error', increment);
      }
    });
  }
}
