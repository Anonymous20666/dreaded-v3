const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicURneENUdE9pRDkrMVRKb3MrK2dMWm40OWROTHpIdytOeWY3bDBCUTNsWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTGZaZWZ4SE9NblkxaGtlRnlGMVoxRzNxbnhMVGFCYS9QZVF6S3FpeE1GTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5Q1JoNzJEWUFTbWEycVZNZXhxNitZRDFJSmJOK0NxR0lLSkZLclhrejM4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlYW40ajhBcGJFeGlxNEZmaVA3VmVBZ2t1cGxKSUVFTTJ6c3ZmQ2hpd0RFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitHS2lMbjVCdDVUMVVsYVhrcmVLTXpGWmNqbUxvMTU2NFZUS0Ntd0ttMEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdXTkV3Z0NraWhsWnJBZUkzSm00Y3VNa0tnbDhIdkNTU3JHaWQ1ckxwVFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0lMZldvVllyOVJpdnJBRFNFcStpWGZydENiZWdEeSs5d29FTUVYOE5GQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYkpMSzRGZnQvZ0JNMjFuWEYyYy9kc0lVV2Z6S2pJMHVVT1lleFI0eGtoTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBBVW8zcmVOTUFRMitPNHJqK3RtS0wxeVVocmRyKzJ5YW03ZUVlSUg4ZUpzYVZCUlZZZVVpMjM2K1h4blk1YkI4ejViSjFERDNtQzJBMlFwcXVFemdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU5LCJhZHZTZWNyZXRLZXkiOiJkcnAwT2JMMjZKZmswaGczZU9WYjJkV3FMekh2UHBFdzQvWjBHUElpRmhJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNTc1NzQ0MTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiODA1OTg1Q0ZCOTcyQTk0MUQ0MEE4MkVERDU3QUZGRTQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNjU5MTg2Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA1NzU3NDQxOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0QjRDQ0ZFQTEyNDlENUIzQkRCNUM4MDE5OEMwQ0EyNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM2NTkxODY4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ3MDU3NTc0NDE5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjUyNTA3MDc0RTdFNzdGMEJBRUUzQjRFRjMwOTE5QTYyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzY1OTE4NzR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNTc1NzQ0MTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0Y0MUM0RDc5QTcwQzhBQkIwRDJCQTc3NUMzRTdBRTAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNjU5MTg3NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiQThuU2RzVGtSUnl2RWZsc3YtY1VLUSIsInBob25lSWQiOiIwODFhMmFlMC02NTk1LTRkYzMtOGE2Ny0xMjgwN2I4MjIzYzUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2d5OVZLT1JJWmVjS0xtdU93U1JUR2cwM05RPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlBTWpwbUNEczA5enN0K0VFL0pRL2VOWi92RT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI0WjhLVDU2QyIsIm1lIjp7ImlkIjoiMjM0NzA1NzU3NDQxOTozNkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLigIwgIOKAjCAgICDigIwgICDwk4KAIPCTgoAuIFxu4oCMICDigIwgICAg4oCMICAg8JOCgCDwk4KALiBcbuKAjCAg4oCMICAgIOKAjCAgIPCTgoAg8JOCgC4gXG7igIwgIOKAjCAgICDigIwgICDwk4KAIPCTgoAuIFxu4oCM4oCMIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLRFp3Y0VERU9hVGlid0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXRk5tZzBtTEF6T2hmRmhvaDZsSC9BSW9zMjROSmIwWFpFWmdvU2JjS0JFPSIsImFjY291bnRTaWduYXR1cmUiOiJjT1dZZEpuanZzK1BjMXo1RjBKOEVWSWNsMnI3dTZIZ1FWSUpMc3hjYkNONTNFY09CUlRPM3dFSFVXUWR5VlFnWWIzYUlKV20vWFNVTTZvY0J1YXFBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSXhuOUY2dDQzSEFoZ1pZUlRmNHMzbE8vVWxaWGlOWCtLczlQRTZlNVA5QjVtK3JrSUZacFBidjcwdTIwZm5Pb3dRRHh3OG1YVFM2T3hxVjJxTUJiaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDU3NTc0NDE5OjM2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZoVFpvTkppd016b1h4WWFJZXBSL3dDS0xOdURTVzlGMlJHWUtFbTNDZ1IifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzY1OTE4NjAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR2RBIn0=';
const mongoURI = process.env.MONGO_URI || '';
const mycode = process.env.CODE || '254';
const botname = process.env.BOTNAME || 'DREADED';

module.exports = {
  session,
  mongoURI,
  mycode,
  botname
}; 
