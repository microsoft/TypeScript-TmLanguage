interface Test^^<^^T> {
    test: T;
}

interface Props {
    prop: ^^Test^^<^^T>;
}

^^class ^^Whatever {
}

interface DispatchProps {
	^^dispatch: ^^Dispatch<^^any>^^;
	^^onMouseMove: ^^(event: ^^Leaf) => ^^void;
	^^onInspectState: ^^(event: ^^Leaf) => ^^void;
}