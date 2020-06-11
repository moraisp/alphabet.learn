import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class ConfigService {
  log(message: string, context?: string) {

    
  }
}