"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WEBHOOKS = exports.URL_SNIPER_SELF_TOKEN = exports.SNIPER_SELF_TOKEN = exports.SNIPER_GUILD_ID = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
exports.SNIPER_GUILD_ID = "1127968910965231676";
exports.SNIPER_SELF_TOKEN = "MTExMDU5MDUzNjE5MDAyMTY0Mw.GHZ0oN.h6pnXLmpvobUNIGFL6Xz6F7psEtOD48_C-vZQM";
exports.URL_SNIPER_SELF_TOKEN = `MTEzMTczNzIyMDU1NDk0ODY0OQ.GVPs2s.9cK3MyuzB03mC_V7ULQu7R5DvxQyIEVek3aURA`;
exports.WEBHOOKS = {
    SUCCESS: async (content) => {
        await (0, node_fetch_1.default)(`https://discord.com/api/webhooks/1126980427027071147/0MnJjVmtJcClM8hWZYRO4kj2CxsApPun3pOwrC4iiuNw1EUz7bV-0M6bpb3iAdCIQzyH`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content,
                username: "Blandy",
            }),
        });
    },
    INFO: async (content) => {
        await (0, node_fetch_1.default)(`https://discord.com/api/webhooks/1126980427027071147/0MnJjVmtJcClM8hWZYRO4kj2CxsApPun3pOwrC4iiuNw1EUz7bV-0M6bpb3iAdCIQzyH`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content,
                username: "Blandy",
            }),
        });
    },
    FAIL: async (content) => {
        await (0, node_fetch_1.default)(`https://discord.com/api/webhooks/1126980427027071147/0MnJjVmtJcClM8hWZYRO4kj2CxsApPun3pOwrC4iiuNw1EUz7bV-0M6bpb3iAdCIQzyH`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content,
                username: "Blandy",
            }),
        });
    },
};