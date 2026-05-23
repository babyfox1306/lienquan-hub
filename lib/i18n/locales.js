/** Asian market locales for Arena of Valor / Liên Quân Hub */
export const LOCALES = [
  { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳', lang: 'vi', region: 'Vietnam' },
  { code: 'th', label: 'ไทย', flag: '🇹🇭', lang: 'th', region: 'Thailand' },
  { code: 'id', label: 'Bahasa Indonesia', flag: '🇮🇩', lang: 'id', region: 'Indonesia' },
  { code: 'zh', label: '繁體中文', flag: '🇹🇼', lang: 'zh-Hant', region: 'Taiwan' },
  { code: 'en', label: 'English', flag: '🇸🇬', lang: 'en', region: 'SEA' },
  { code: 'ms', label: 'Bahasa Melayu', flag: '🇲🇾', lang: 'ms', region: 'Malaysia' },
  { code: 'fil', label: 'Filipino', flag: '🇵🇭', lang: 'fil', region: 'Philippines' },
  { code: 'ja', label: '日本語', flag: '🇯🇵', lang: 'ja', region: 'Japan' },
  { code: 'ko', label: '한국어', flag: '🇰🇷', lang: 'ko', region: 'Korea' },
];

export const DEFAULT_LOCALE = 'vi';

export function getLocaleConfig(code) {
  return LOCALES.find((l) => l.code === code) || LOCALES[0];
}
