const decorder = require('./gtfsrtpbf.js');
const fs = require("fs");

async function main() {
  const response = await fetch('https://api-public.odpt.org/api/v4/gtfs/realtime/toei_odpt_train_vehicle');
  const arrayBuffer = await response.arrayBuffer();
  const uint8Array = new Uint8Array(arrayBuffer);
  const feed = decorder.transit_realtime.FeedMessage.decode(uint8Array);
  const str = JSON.stringify(feed, null, 2);
  fs.writeFileSync("gtfsrt.json", str);
}

main();

// mvtでもやってみよう
// const response = await fetch('https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap/14/14567/6427.pbf');