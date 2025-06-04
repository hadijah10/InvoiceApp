import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  isLight: boolean = true
 toggleTheme(){
  console.log(this.isLight)
  document.body.classList.toggle('dark-theme')
  this.isLight = !this.isLight
 }
}