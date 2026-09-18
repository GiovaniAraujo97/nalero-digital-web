import { AfterViewInit, Directive, ElementRef, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  private static observer?: IntersectionObserver;
  private static readonly directives = new Map<HTMLElement, RevealDirective>();

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;
    this.renderer.addClass(element, 'reveal');
    this.setStaggerDelay(element);

    if (typeof IntersectionObserver === 'undefined') {
      this.show(element);
      return;
    }

    RevealDirective.directives.set(element, this);
    RevealDirective.observer ??= new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          const directive = RevealDirective.directives.get(entry.target as HTMLElement);
          directive?.show(entry.target as HTMLElement);
          RevealDirective.observer?.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    RevealDirective.observer.observe(element);
  }

  ngOnDestroy(): void {
    const element = this.elementRef.nativeElement;
    RevealDirective.observer?.unobserve(element);
    RevealDirective.directives.delete(element);

    if (RevealDirective.directives.size === 0) {
      RevealDirective.observer?.disconnect();
      RevealDirective.observer = undefined;
    }
  }

  private show(element: HTMLElement): void {
    this.renderer.addClass(element, 'is-visible');
  }

  private setStaggerDelay(element: HTMLElement): void {
    const siblings = Array.from(element.parentElement?.children ?? [])
      .filter((sibling): sibling is HTMLElement => sibling instanceof HTMLElement && sibling.hasAttribute('appReveal'));
    const siblingIndex = siblings.indexOf(element);

    if (siblingIndex > 0) {
      this.renderer.setStyle(element, '--reveal-delay', `${Math.min(siblingIndex * 45, 900)}ms`);
    }
  }
}
