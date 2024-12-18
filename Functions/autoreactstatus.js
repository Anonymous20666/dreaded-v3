const { getSettings } = require("../Mongodb/Settingsdb");

const reactToStatus = async (client, m) => {
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

  if (settings.autolikestatus && m.key && m.key.remoteJid === "status@broadcast") {
    const mokayas = await client.decodeJid(client.user.id);

    if (m.status) return;

    await client.sendMessage(m.key.remoteJid, { react: { key: m.key, text: emoji }}, { statusJidList: [m.key.participant, mokayas], broadcast: true });
  }
};

module.exports = reactToStatus;