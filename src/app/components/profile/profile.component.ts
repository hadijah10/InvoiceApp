import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  isLight: boolean = true
 toggleTheme(){
  document.body.classList.toggle('dark-theme')
  this.isLight = !this.isLight
 }
}