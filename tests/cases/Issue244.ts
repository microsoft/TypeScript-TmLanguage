a.withLatestFrom(axis === 'x' ? initialX : initialY)
 .map(x => undefined)
 .switch()
 .publish().refCount();

const targetX = targetSideObs('x');
const targetY = targetSideObs('y');