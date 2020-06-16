"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
const config_1 = require("@nestjs/config");
exports.configuration = config_1.registerAs('alphabet', () => ({
    port: parseInt(process.env.ALPHABET_PORT, 10) || 12000,
    database: {
        connection: process.env.ALPHABET_DATABASE_CONNECTION || null
    }
}));
//# sourceMappingURL=app.config.js.map