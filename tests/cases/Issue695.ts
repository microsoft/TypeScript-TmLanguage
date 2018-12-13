export type bindActionsToPayloadReturns = <A, M extends ActionCreatorsMapObject<A>>(
  actionCreators: M,
  dispatch: Dispatch
) => ActionsWithPromises<M>;

export const bindActions = bindActionCreators as bindActionsToPayloadReturns;