import { registerAs } from '@nestjs/config';

  
export const configuration = registerAs('alphabet', () => ({
    port: parseInt(process.env.ALPHABET_PORT, 10) || 12000,
    database: {
      connection: process.env.ALPHABET_DATABASE_CONNECTION || null
    }
  }));