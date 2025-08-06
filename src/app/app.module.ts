import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AchievementBlockContainer } from './achievement-block-container/achievement-block-container';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AchievementBlockContainer],
  templateUrl: './app.component.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('achievements-hub');
}
