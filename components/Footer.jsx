import Link from 'next/link';
import { useLocale } from '../contexts/LocaleContext';

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">{t('nav.brand')}</h3>
            <p className="text-sm text-base-content/70 mb-4">{t('footer.brandDesc')}</p>
            <div className="flex justify-center md:justify-start gap-2">
              <a
                href="https://t.me/lienquanhub"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                📱 Telegram
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t('footer.content')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="link link-hover">
                  {t('nav.video')}
                </Link>
              </li>
              <li>
                <Link href="/news" className="link link-hover">
                  {t('nav.news')}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="link link-hover">
                  {t('footer.blogGuide')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="link link-hover">
                  {t('footer.about')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t('footer.support')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="link link-hover">
                  {t('footer.contact')}
                </Link>
              </li>
              <li>
                <a href="mailto:contact@lienquanhub.xyz" className="link link-hover">
                  {t('footer.email')}
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/lienquanhub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-hover"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="link link-hover">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="link link-hover">
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="link link-hover">
                  {t('footer.disclaimer')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-base-content/60">
            © {new Date().getFullYear()} Liên Quân Hub. {t('footer.copyright')}
          </div>
          <div className="text-sm text-base-content/60">{t('footer.garena')}</div>
        </div>
      </div>
    </footer>
  );
}
