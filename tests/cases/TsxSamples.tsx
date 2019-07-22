// @onlyOwnGrammar - As this has jsx
class MyComponent extends React.Component<Props, State>{
    render() {
        return <div onClick={this.stop}>
            This is a test: {this.state.count}
        </div>
    }
}

// JSX in Depth
// http://facebook.github.io/react/docs/jsx-in-depth.html
var App =
    <Form>
        <FormRow>
            <FormLabel data="1" />
            <FormInput data="2" />
        </FormRow>
    </Form>

var App2 = (
    <Form>
        <FormRow>
            <FormLabel data='1' />
            <FormInput data='2' />
        </FormRow>
      </Form>
)

var content = (
    <Nav>
        {/* child comment, put {} around */}
        <Person name={window.isLoggedIn ? window.name : ''}
        />
    </Nav>
);

// JSX Spread Attributes
// http://facebook.github.io/react/docs/jsx-spread.html
var props = {};
props.foo = x;
props.bar = y;
var component = <Component {...props} />;

var props2 = { foo: 'default' }
var component2 = <Component {...props} foo={'override'} />

// JSX Gotchas
// http://facebook.github.io/react/docs/jsx-gotchas.html
var a = <div>{'First \u00b7 Second'}</div>
var b = <div>{'First ' + String.fromCharCode(183) + ' Second'}</div>
var c = <div>{['First ', <span>&middot;</span>, ' Second']}</div>
var d = <div dangerouslySetInnerHTML={{__html: 'First &middot; Second'}} />
var e = <div data-custom-attribute="foo" />
