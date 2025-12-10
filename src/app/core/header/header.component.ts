import { AfterViewInit, Component } from '@angular/core';
declare function mobilemenu():any
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    mobilemenu();
  }

}
