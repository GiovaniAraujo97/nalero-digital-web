import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RevealDirective } from './shared/directives/reveal.directive';
import { LanguageService } from './shared/services/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RevealDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('nalero-digital');
  protected readonly languageService = inject(LanguageService);

  protected setLanguage(language: 'pt-BR' | 'en'): void {
    this.languageService.setLanguage(language);
  }
}
