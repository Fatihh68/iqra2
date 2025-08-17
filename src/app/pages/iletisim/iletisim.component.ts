import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Contact = {
  label: string;
  desc: string;
  href: string;
  icon: string;      // Font Awesome class
  theme: 'phone' | 'wa' | 'ig' | 'fb';
};

@Component({
    selector: 'app-iletisim',
    imports: [CommonModule],
    standalone: true,
    templateUrl: './iletisim.component.html',
    styleUrls: ['./iletisim.component.css']
})
export class IletisimComponent {
  // Updated values
  tel = '+436704053959';
  whatsapp = 'https://wa.me/436704053959';
  instagramUrl = 'https://www.instagram.com/ikra.educationline?igsh=bDJybmpvZHhnbXli';
  facebookUrl  = 'https://www.facebook.com/share/1bRTFtCAWg/?mibextid=wwXIfr';
  address = 'Wiener Neustadt, Österreich';

  readonly telHref = `tel:${this.tel.replace(/\s+/g, '')}`;

  contacts: Contact[] = [
    { label: 'Telefon',   desc: this.tel,               href: this.telHref,     icon: 'fas fa-phone',        theme: 'phone' },
    { label: 'WhatsApp',  desc: 'Hızlıca yazın',        href: this.whatsapp,    icon: 'fab fa-whatsapp',     theme: 'wa'    },
    { label: 'Instagram', desc: 'ikra resmi sayfası',   href: this.instagramUrl,icon: 'fab fa-instagram',    theme: 'ig'    },
    { label: 'Facebook',  desc: 'ikra resmi sayfası',   href: this.facebookUrl, icon: 'fab fa-facebook-f',   theme: 'fb'    },
  ];

  isExternal(url: string): boolean {
    return /^https?:\/\//i.test(url);
  }
}
