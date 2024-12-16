const { getGroupSettings } = require('../../Mongodb/Settingsdb');
const ownerMiddleware = require('../../Middleware/ownerMiddleware');

module.exports = async (context) => {
    await ownerMiddleware(context, async () => {
        const { m, args, mycode } = context;
        const value = args[0]?.toLowerCase();
        const jid = m.chat;

        if (!jid.endsWith('@g.us')) {
            return await m.reply('❌ This command can only be used in groups.');
        }

        let groupSettings = await getGroupSettings(jid);

        if (!groupSettings) {
            const GroupSettings = require('../../Mongodb/Schemas/groupSettingsSchema');
            groupSettings = new GroupSettings({ jid });
            await groupSettings.save();
        }

const Myself = await client.decodeJid(client.user.id);

        let groupMetadata = await client.groupMetadata(m.chat);
        let userAdmins = groupMetadata.participants.filter(p => p.admin !== null).map(p => p.id);

        const isBotAdmin = userAdmins.includes(Myself);

        if (value === 'on' && !isBotAdmin) {
            return await m.reply('I need admin privileges to handle antiforeign feature.');
        }

        if (value === 'on' || value === 'off') {
            const action = value === 'on' ? true : false;
            const actionText = value === 'on' ? 'ON' : 'OFF';
            const actionMsg = value === 'on' ? 'turned ON' : 'turned OFF';

            if (groupSettings.antiforeign === action) {
                return await m.reply(`✅ Antiforeign was already ${actionText}.`);
            }

            groupSettings.antiforeign = action;
            await groupSettings.save();

            if (value === 'on') {
                await m.reply(`✅ Antiforeign has been ${actionMsg} for this group. Bot will now automatically remove non-${mycode} numbers joining!`);
            } else {
                await m.reply(`❌ Antiforeign has been ${actionMsg} for this group.`);
            }
        } else {
            await m.reply(`📄 Current antiforeign setting for this group: ${groupSettings.antiforeign ? 'ON' : 'OFF'}\n\n Use "antiforeign on" or "antiforeign off".`);
        }
    });
};