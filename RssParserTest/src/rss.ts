import Parser from 'rss-parser';

type CustomItem = {description: string};

// const parser = new Parser();
const parser: Parser<CustomItem> = new Parser({
  customFields: {
    item: ['description']
  }
});

(async () => {
  const feed = await parser.parseURL('https://note.com/kamimi01/rss');
  console.log(feed.title);

  feed.items.forEach(item => {
    console.log(item.title);
    console.log(item.link);

    console.log(item.description);
  });
})();