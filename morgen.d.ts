declare module "morgen" {
  export interface MorgenExtensionAPI {
    LoggingService: LoggingService;
  }

  // Services
  type LoggingService = {
    log: (message: string) => void;
  };

}

export {}
