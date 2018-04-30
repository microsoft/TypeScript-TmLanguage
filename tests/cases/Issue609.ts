const size = import.meta.scriptElement.dataset.size || 300;
export function Date(...args) {
  if (new.target) {
    // [[Construct]] branch
    initializeDate(this, ...args);
  } else {
    // [[Call]] branch
    return ToDateString(clockGetTime());
  }
}