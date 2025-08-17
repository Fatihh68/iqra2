import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, AfterViewInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-hizmetlerimiz',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hizmetlerimiz.component.html',
  styleUrls: ['./hizmetlerimiz.component.css']
})
export class HizmetlerimizComponent implements AfterViewInit, OnDestroy {
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  sections = [
    { id: 'intro',    label: 'Giriş' },
    { id: 'services', label: 'Kurslar' },
    { id: 'how',      label: 'Süreç' },
    { id: 'why',      label: 'Neden ikra?' },
  ];
  activeIndex = 0;

  private spy?: IntersectionObserver;
  private onScrollFallback?: () => void;

  // keep ratios for ALL sections, not just the ones in the current callback
  private ratios = new Map<string, number>();

  iletisimeGec() { this.router.navigate(['/iletisim']); }
  scrollTo(id: string) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    const hasIO = 'IntersectionObserver' in (globalThis as any);

    if (hasIO) {
      const options: IntersectionObserverInit = {
        root: null,
        // focus around the viewport center so the active state “dwells” on a section
        rootMargin: '-40% 0px -50% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
      };

      this.spy = new IntersectionObserver((entries) => {
        // update stored ratios for the entries that changed
        for (const e of entries) {
          const id = (e.target as HTMLElement).id;
          this.ratios.set(id, e.isIntersecting ? e.intersectionRatio : 0);
        }
        // choose the section with the highest current ratio overall
        let bestId = this.sections[0].id;
        let best = -1;
        for (const s of this.sections) {
          const r = this.ratios.get(s.id) ?? 0;
          if (r > best) { best = r; bestId = s.id; }
        }
        const idx = this.sections.findIndex(s => s.id === bestId);
        if (idx !== -1) this.activeIndex = idx;
      }, options);

      // start observing every section
      for (const s of this.sections) {
        const el = document.getElementById(s.id);
        if (el) {
          this.ratios.set(s.id, 0);
          this.spy.observe(el);
        }
      }

    } else {
      // Fallback: pick section nearest to viewport center
      const handler = () => {
        const center = window.innerHeight / 2;
        let bestIdx = 0, bestDist = Infinity;
        for (let i = 0; i < this.sections.length; i++) {
          const el = document.getElementById(this.sections[i].id);
          if (!el) continue;
          const dist = Math.abs(el.getBoundingClientRect().top - center);
          if (dist < bestDist) { bestDist = dist; bestIdx = i; }
        }
        this.activeIndex = bestIdx;
      };
      this.onScrollFallback = handler;
      window.addEventListener('scroll', handler, { passive: true });
      window.addEventListener('resize', handler, { passive: true });
      handler();
    }
  }

  ngOnDestroy(): void {
    this.spy?.disconnect();
    if (this.onScrollFallback) {
      window.removeEventListener('scroll', this.onScrollFallback);
      window.removeEventListener('resize', this.onScrollFallback);
    }
  }
}
