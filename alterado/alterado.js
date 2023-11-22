/*
cp /home/wp-api-nodejs/node_modules/@whiskeysockets/baileys/lib/Signal/libsignal.js api:/home/node/app/node_modules/@whiskeysockets/baileys/lib/Signal/libsignal.js
function convertObjectToArray(obj) {
    const data = obj['0'];
    return [ data ];
}

loadSenderKey: async (keyId) => {
    const { [keyId]: key } = await keys.get('sender-key', [keyId]);
    if (key) {
        if (typeof key === 'object') {
            let testkey4 = convertObjectToArray(key)
            let record = new WASignalGroup_1.SenderKeyRecord(testkey4)
            return record;
        } else {
            let record = new WASignalGroup_1.SenderKeyRecord(key)
            return record;
        }
    }
},


@whiskeysockets/baileys/lib/Signal/libsignal.js
// original
loadSenderKey: async (keyId) => {
    const { [keyId]: key } = await keys.get('sender-key', [keyId]);
    if (key) {
        return new WASignalGroup_1.SenderKeyRecord(key);
    }
},

"@whiskeysockets/baileys": "^6.5.0",
*/