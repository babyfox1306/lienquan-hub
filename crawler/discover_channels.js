const fs = require('fs');
const path = require('path');
const ytsr = require('ytsr');

const ROOT = path.join(__dirname, '..');
const FEEDS_PATH = path.join(ROOT, 'public', 'feeds.json');

async function searchChannels(keywords, limit = 20) {
  const channels = new Map();
  for (const kw of keywords) {
    const res = await ytsr(kw, { hl: 'vi', gl: 'VN' });
    for (const i of res.items) {
      if (i.type !== 'channel') continue;
      const cid = i.channelID || (i.author && i.author.channelID) || null;
      const name = i.name || (i.author && i.author.name) || i.title || cid;
      if (!cid) continue;
      if (!channels.has(cid)) channels.set(cid, { name, type: 'channel', id: cid });
      if (channels.size >= limit) break;
    }
    if (channels.size >= limit) break;
  }
  return Array.from(channels.values()).slice(0, limit);
}

async function updateFeeds(found) {
  let feeds = { channels: [], manual_videos: [] };
  if (fs.existsSync(FEEDS_PATH)) {
    feeds = JSON.parse(fs.readFileSync(FEEDS_PATH, 'utf8'));
  }
  feeds.channels = found;
  fs.writeFileSync(FEEDS_PATH, JSON.stringify(feeds, null, 2), 'utf8');
  console.log('Updated', FEEDS_PATH, 'with', found.length, 'channels');
}

async function main() {
  const limit = Number(process.argv[2] || 20);
  const keywords = ['Liên Quân Mobile', 'Arena of Valor', 'AOV', 'Liên Quân Highlight'];
  const chans = await searchChannels(keywords, limit);
  if (!chans.length) {
    console.error('No channels found');
    process.exit(1);
  }
  await updateFeeds(chans);
}

main().catch(e => { console.error(e); process.exit(1); });


