/**
 * @name CograAgeBypass
 * @version 1.0.0
 * @description Sets ageVerificationStatus to 3 (bypass NSFW gate)
 * @author Cogra23
 */

module.exports = class AgeBypass {
    start() {
        try {
            const wpRequire = window.webpackChunkdiscord_app.push([
                [Symbol()],
                {},
                r => r
            ]);
            const module = Object.values(wpRequire.c).find(
                x => x?.exports?.default?.__proto__?.getCurrentUser
            );
            if (module) {
                const user = module.exports.default.getCurrentUser();
                user.ageVerificationStatus = 3;
                console.log("[AgeBypass] Set ageVerificationStatus = 3");
            } else {
                console.warn("[AgeBypass] Failed to find user module");
            }
        } catch (err) {
            console.error("[AgeBypass] Error:", err);
        }
    }

    stop() {
        console.log("[AgeBypass] Plugin stopped.");
    }
}
