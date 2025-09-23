import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

type Faq = { q: string; a: string | string[] };

@Component({
  selector: 'app-sss',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sss.component.html',
  styleUrls: ['./sss.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SssComponent {
  faqs: Faq[] = [
    { q: 'Dersler nasıl yapılıyor?', a: 'Tüm dersler çevrim içi olarak Zoom üzerinden yapılır. Katılım için internet bağlantısı ve akıllı cihaz yeterlidir.' },
    { q: 'Haftada kaç ders almalıyım?', a: 'Öğrenciler haftalık ders sayısını kendileri belirler. Tavsiyemiz: haftada 2 veya 3 ders ile düzenli ve etkili bir ilerleme.' },
    { q: 'Ders süreleri ne kadar?', a: ['30 dakika: Sadece Kur’an-ı Kerim dersi için uygundur.', '50 dakika: Tecvidli Kur’an Eğitimi + Temel Dini Bilgiler içerir.'] },
    { q: 'Kur\'an okumaya başlamam ne kadar sürer?', a: 'Öğrencinin yaşı, önceki düzeyi ve haftalık ders sayısına göre değişir. Haftada 2–3 ders alan öğrenci kısa sürede elifba’yı tamamlayıp kelime birleştirmeye geçebilir. Süreç bire bir ilgi ve düzenli takiple ilerler.' },
    { q: 'Temel Dini Bilgiler dersinde neler öğretiliyor?', a: 'İtikad, İbadet, Siyer, Ahlak, Değerler Eğitimi ve İlmihal Bilgileri dönüşümlü işlenir. Her derste bir konuya odaklanılır.' },
    { q: 'Grup derslerinde kaç kişi oluyor?', a: 'En fazla 5 kişilik küçük gruplar. Bu sayede bireysel ilgi korunur.' },
    { q: 'Grup derslerinde indirim var mı?', a: 'Evet. Kardeş ve aile üyeleri için özel indirimler uygulanır.' },
    { q: 'Ödeme nasıl yapılır?', a: 'Ödemeler aylık ve ders başlangıcından önce alınır. Avrupa ülkeleri arasında IBAN ödemeleri ücretsizdir. IBAN veya PayPal ile güvenli ödeme yapabilirsiniz.' },
    { q: 'Ders saatleri sabit mi?', a: 'Hayır. Ders saatleri öğrencinin müsaitliğine göre esnek planlanır.' },
    { q: 'Başka sorularınız mı var?', a: 'Bizimle iletişime geçin, size en kısa sürede yardımcı olalım.' }
  ];

  /** new control-flow helper */
  isArray(v: unknown): v is string[] { return Array.isArray(v); }

  /** accordion state (multi-open) */
  private _open = new Set<number>();
  isOpen(i: number) { return this._open.has(i); }
  toggle(i: number) {
    const next = new Set(this._open);
    next.has(i) ? next.delete(i) : next.add(i);
    this._open = next;  // OnPush-friendly
  }
}
