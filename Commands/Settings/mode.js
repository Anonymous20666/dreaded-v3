const { getSettings } = require('../../Mongodb/Settingsdb');
const ownerMiddleware = require('../../Middleware/ownerMiddleware');

module.exports = async (context) => {
    await ownerMiddleware(context, async () => {
        const { m, args } = context;
        const value = args[0]?.toLowerCase();

        let settings = await getSettings();

        if (!settings) {
            const Settings = require('../../Mongodb/Schemas/settingsSchema');
            settings = new Settings();
            await settings.save();
        }

        if (value === 'public' || value === 'private') {
            if (settings.mode === value) {
                return await m.reply(`✅ Bot is already in ${value} mode.`);
            }
            settings.mode = value;
            await settings.save();
            await m.reply(`✅ Bot is now: ${value}`);
        } else {
            await m.reply(`📄 Current mode setting: ${settings.mode || 'undefined'}\n\n Use "mode public" or "mode private".`);
        }
    });
};