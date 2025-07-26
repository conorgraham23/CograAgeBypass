# CograAgeBypass

A simple BetterDiscord plugin that bypasses Discord’s NSFW age verification by setting your account's `ageVerificationStatus` to `3`.

> ⚠️ This is a client-side modification and may violate Discord’s Terms of Service. Use at your own risk.

---

## 🛠 How It Works

This plugin runs the following on Discord startup:

```js
Object.values(webpackChunkdiscord_app.push([[Symbol()], {}, r => r.c]))
  .find(x => x?.exports?.default?.__proto__?.getCurrentUser)
  .exports.default.getCurrentUser().ageVerificationStatus = 3;


Installation

    Download the plugin file

    Move the file to your BetterDiscord plugin folder:

        On Windows:
        %AppData%\BetterDiscord\plugins

    Restart Discord (or press Ctrl+R to reload)

    Enable CograAgeBypass in Settings > BetterDiscord > Plugins
