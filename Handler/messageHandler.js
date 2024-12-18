const { getSettings } = require("../Mongodb/Settingsdb");
const { smsg } = require("./smsg");
const dreadedHandler = require("../dreaded");
const spamCheck = require('../Functions/antispamm');
const linkCheck = require('../Functions/antilink');
const tagCheck = require('../Functions/antitag');
const presenceCheck = require('../Functions/gcpresence');
const userCheck = require('../Functions/checkUser');
const viewonceCheck = require('../Functions/antionce');
const delCheck = require('../Functions/antidelete');
const dndCheck = require('../Functions/dnd')
const setPresence = require('../Functions/presence');

const handleMessage = async (client, chatUpdate, store) => {
  try {
    const mek = chatUpdate.messages[0];
    if (!mek.message) return;

    const Myself = await client.decodeJid(client.user.id);
   

    const settings = await getSettings();

    let emoji; 
    if (settings && settings.reactEmoji === 'random') {

const emojis = [
  '😀', '😁', '😂', '😅', '😎', '😜', '😊', '😍', '😋', '😄', '😃', 
  '🥰', '😆', '😇', '🤩', '😛', '😝', '🤗', '😌', '😏', '😙', '😚',
  '🥳', '😃', '😓', '🥲', '😻', '😼', '😽', '😋', '🥴', '🤪', '😜',
  '🤤', '😜', '🤠', '😎', '🤙', '🥰', '😈', '👻', '😷', '😥', '😢',
  '🙃', '🤔', '😜', '🤑', '😆', '🫣', '😧', '😲', '😯', '😳', '😔',
  '😶', '🥺', '🫶', '🤯', '🥱', '😴', '😪', '🤪', '🤤', '🤫', '😶‍🌫️',
  '😵', '🫠', '💀', '🫣', '🤧', '😷', '🤒', '🤕', '🤧', '😫', '🤤',
  '😬', '😐', '😑', '😒', '🥶', '😶‍🌫️', '🥴', '😳', '🤯', '😵‍💫',
  '🥵', '🥶', '🥸', '🤭', '🤫', '🤦‍♀️', '🤦‍♂️', '🧐', '🤨', '🤡',
  '🥸', '🤠', '🤓', '👩‍🎤', '👨‍🎤', '🧑‍🎤', '🎭', '🧑‍🎨', '👩‍🎨',
  '👨‍🎨', '🤹‍♂️', '🤹‍♀️', '🧗‍♂️', '🧗‍♀️', '⛹️‍♂️', '⛹️‍♀️', '🤾‍♂️', '🤾‍♀️',
  '🧘‍♂️', '🧘‍♀️', '🤽‍♂️', '🤽‍♀️', '🚴‍♂️', '🚴‍♀️', '🤾‍♂️', '🤾‍♀️',
  '❤️', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💖', '💗', 
  '💓', '💞', '💕', '💌', '💋', '💘', '💝', '💟', '💕', '🥰', 
  '😘', '💏', '💑', '👩‍❤️‍👩', '👨‍❤️‍👨', '👩‍❤️‍👨', '🤵‍❤️‍👰', '💍', 
  '💍', '💋', '💓', '💜', '💖', '❣️', '❤️‍🔥', '❤️‍🩹', '💋', '❤️‍🔥'
];
      
      emoji = emojis[Math.floor(Math.random() * emojis.length)];
    } else if (settings && settings.reactEmoji) {
      emoji = settings.reactEmoji;
    }

    

    if (settings && settings.autoread && mek.key && mek.key.remoteJid.endsWith("@s.whatsapp.net")) {
      await client.readMessages([mek.key]);
    }

if (settings && settings.autoviewstatus && mek.key && mek.key.remoteJid === "status@broadcast") {
await client.readMessages([mek.key]);

}


    if (settings && settings.autoviewstatus && settings.autolikestatus && mek.key && mek.key.remoteJid === "status@broadcast") {




      
      const mokayas = await client.decodeJid(client.user.id);


      if (mek.status) return;

      await client.sendMessage(mek.key.remoteJid, { react: { key: mek.key, text: emoji }}, { statusJidList: [mek.key.participant, mokayas], broadcast: true});
    }

      const m = smsg(client, mek, store);
    await spamCheck(client, m);

await tagCheck(client, m);
await linkCheck(client, m);
await presenceCheck(client, m);
await viewonceCheck(client, m);
await delCheck(client, m);
await dndCheck(client, m);
await setPresence(client, m);
const proceed = await userCheck(client, m);
if (!proceed) {
    return;
}

    dreadedHandler(client, m, chatUpdate, store);

  } catch (err) {
    console.error(err);
  }
};

module.exports = handleMessage;