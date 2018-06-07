// @onlyOwnGrammar - As this has jsx 
bar => (
    [
        <Baz key={`bar-${bar.id}`} />,
        <Qux />
    ]
)