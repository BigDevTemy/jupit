import crypto from 'crypto'


// const payload = JSON.stringify(req.body) + APISECRET
// const buff = Buffer.from(crypto.createHash('sha256').update(payload).digest());
// const checksumVerf = buff.toString('base64').replace(/\+/g, "-").replace(/\//g, "_");
// const checksum = req.get('X-CHECKSUM');
// if (checksum !== checksumVerf) {
//      res.status(400).send('Bad checksum');
// }




/v1/sofa/wallets/WALLET_ID/receiver/notifications/txid/TX_ID/VOUT_INDEX
