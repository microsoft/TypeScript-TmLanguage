interface SomeInterface {
  onStart(callback: Function): void;
  onError(callback: (obj: { videoPath: string }) => void): void;
}