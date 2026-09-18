import { computed, Injectable, signal } from '@angular/core';

export type SiteLanguage = 'pt-BR' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly language = signal<SiteLanguage>('pt-BR');
  readonly isEnglish = computed(() => this.language() === 'en');

  setLanguage(language: SiteLanguage): void {
    this.language.set(language);
  }
}
