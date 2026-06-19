const PUBLIC_ASSETS_URL = '/rs-school-bootcamp-2026/2-shelter/assets';

const replace = (str) =>
  str.replaceAll('/assets/spritemap', `${PUBLIC_ASSETS_URL}/spritemap`);

export default {
  name: 'spritemap-fix',
  apply: 'build',

  transformIndexHtml(html) {
    return replace(html);
  },

  generateBundle(_, bundle) {
    for (const file of Object.values(bundle)) {
      const content = file.source ?? file.code;
      if (typeof content !== 'string') continue;
      if (!content.includes('spritemap')) continue;

      const updated = replace(content);

      if (file.type === 'asset') file.source = updated;
      if (file.type === 'chunk') file.code = updated;
    }
  },
};
