export const EditorPanel = connect(
    (state: Immutable<AppState>): Object => ( {
        edditorState: (state.editors[state.activeTab]),
        macroSettingsOpen: state.macroSettingsOpen,
    }),
    (dispatch: Dispatch): Object => ({
        onchange(next: EditorSDtate): void { dispatch(actions) }
    })
)