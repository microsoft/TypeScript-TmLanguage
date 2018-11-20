const x = {
  success: (state, { payload }): IState =>
    R.compose<typeof payload, IState, IState>(
      R.merge<IState>(state),
      R.reduce(
        (acc, channel) =>
          setChannel(channel.id)(
            {
              data: omitStoreEntities(channel),
              status: Status.LOADED,
              error: null,
            },
            acc
          ),
        R.clone(initialState)
      )
    )(payload),
};