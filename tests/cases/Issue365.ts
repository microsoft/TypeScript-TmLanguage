class Renamer {
  constructor (private readonly srcName: string, private readonly target: string, readonly copy: boolean = false) {}
}