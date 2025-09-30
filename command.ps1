npm install protobufjs protobufjs-cli

npx pbjs `
--target static-module `
--wrap commonjs `
--keep-case `
--out ./gtfsrtpbf.js `
./gtfs-realtime.proto