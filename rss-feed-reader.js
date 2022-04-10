let Parser = require('rss-parser');
let parser = new Parser();

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter RSS Feed Link: ', link => {
    (async () => {

        // let feed = await parser.parseURL('https://www.reddit.com/.rss');
        let feed = await parser.parseURL(link);
        console.log(feed.title);
    
        feed.items.forEach(item => {
            console.log(item.title + ", " + item.description  + ", " + item.link)
        });
    
    })();

    readline.close();
});

