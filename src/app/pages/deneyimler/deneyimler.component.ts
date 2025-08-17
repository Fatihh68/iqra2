import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;           // 1..5
  tags: string[];           // for simple filter
};

@Component({
    selector: 'app-deneyimler',
    imports: [CommonModule, RouterLink],
    templateUrl: './deneyimler.component.html',
    styleUrls: ['./deneyimler.component.css']
})
export class DeneyimlerComponent {
  private router = inject(Router);

  // simple category filter
  filters = ['Tümü', 'Çocuklar', 'Yetişkinler', 'Tecvid', 'Hıfz'];
  activeFilter = 'Tümü';

  // star helper for template
  readonly stars = [1, 2, 3, 4, 5];

  testimonials: Testimonial[] = [
    {
      name: 'Ali',
      role: 'Öğretmen',
      quote: 'Kuranogren-ikra sayesinde işten sonra camiye gitmeden evden düzenli çalışabildim.',
      avatar: 'assets/anonym-3.png',
      rating: 5,
      tags: ['Yetişkinler', 'Tecvid']
    },
    {
      name: 'Zeynep',
      role: 'Üniversite Öğrencisi',
      quote: 'Ders saatleri esnek, hocalar çok ilgili. Kısa sürede harfleri doğru çıkarmaya başladım.',
      avatar: 'assets/anonym-1.png',
      rating: 5,
      tags: ['Yetişkinler', 'Tecvid']
    },
    {
      name: 'Mehmet',
      role: 'Lise Öğrencisi',
      quote: 'Hıfz programındaki planlama ve motivasyon desteği beni çok rahatlattı.',
      avatar: 'assets/anonym-2.png',
      rating: 4,
      tags: ['Hıfz', 'Yetişkinler']
    },
    {
      name: 'Ayşe',
      role: 'Veli',
      quote: 'Kızım oyunlaştırılmış içeriklerle Kur’an okumayı sevdi. İlerlemeyi görmek çok güzel.',
      avatar: 'assets/anonym-1.png',
      rating: 5,
      tags: ['Çocuklar']
    },
    {
      name: 'Yusuf',
      role: 'Mühendis',
      quote: 'Kişisel plana göre ders almak verimi ciddi şekilde artırdı.',
      avatar: 'assets/anonym-2.png',
      rating: 5,
      tags: ['Yetişkinler']
    },
    {
      name: 'Elif',
      role: 'Lise Öğrencisi',
      quote: 'Elifba’dan başlayıp kısa sürede akıcı okumaya geçtim. Materyaller çok kaliteli.',
      avatar: 'assets/anonym-3.png',
      rating: 5,
      tags: ['Çocuklar', 'Tecvid']
    },
    {
      name: 'Hamza',
      role: 'Üniversite Öğrencisi',
      quote: 'Grup dersleri motive ediyor. Uygun fiyat, güçlü içerik.',
      avatar: 'assets/anonym-1.png',
      rating: 4,
      tags: ['Yetişkinler']
    },
    {
      name: 'Fatma',
      role: 'Veli',
      quote: 'Hocalar çocuklara sabır ve sevgiyle yaklaşıyor. Program esnek.',
      avatar: 'assets/anonym-2.png',
      rating: 5,
      tags: ['Çocuklar']
    }
  ];

  get filteredTestimonials(): Testimonial[] {
    if (this.activeFilter === 'Tümü') return this.testimonials;
    return this.testimonials.filter(t => t.tags.includes(this.activeFilter));
  }

  setFilter(f: string) { this.activeFilter = f; }

  iletisimeGec() { this.router.navigate(['/iletisim']); }
  fiyatlariGor() { this.router.navigate(['/fiyatlar']); }

  // fallback if some avatar missing
  onImgError(ev: Event) {
    (ev.target as HTMLImageElement).src = 'assets/anonym-3.png';
  }
}
