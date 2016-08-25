export class StatusSelector {
  @Output() select = new EventEmitter()
  statuses = ["started", "completed"]
}

export class StatusSelector2 {
  @Output() select = new EventEmitter();
  statuses = ["started", "completed"]
}