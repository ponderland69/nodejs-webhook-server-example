declare module "http" {
  interface IncomingMessage {
    rawBody: true;
  }
}
