import { AfterViewInit, Directive, ElementRef, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

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

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        this.show(element);
        this.observer?.unobserve(element);
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
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
