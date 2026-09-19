import { computed, Injectable, signal } from '@angular/core';

export type SiteLanguage = 'pt-BR' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly language = signal<SiteLanguage>('pt-BR');
  readonly isEnglish = computed(() => this.language() === 'en');

  setLanguage(language: SiteLanguage | null | undefined): void {
    const normalized = language === 'en' ? 'en' : 'pt-BR';
    this.language.set(normalized);
  }
}
