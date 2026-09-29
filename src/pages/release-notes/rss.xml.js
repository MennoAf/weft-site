import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const notes = (await getCollection('release-notes')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: 'Weft release notes',
    description:
      'What changed in Weft, when, and why. Weft saves what you tell it to save — shared persistent memory for you and your agents.',
    site: context.site ?? 'https://weft.pages.dev',
    items: notes.map((note) => ({
      title: `Weft ${note.data.version}`,
      pubDate: note.data.date,
      description: note.body.split('\n').find((line) => line.trim().length > 0 && !line.startsWith('---')) ?? '',
      link: `/release-notes/#v${note.data.version}`,
      categories: [...note.data.tags],
    })),
    customData: '<language>en-us</language>',
  });
}
