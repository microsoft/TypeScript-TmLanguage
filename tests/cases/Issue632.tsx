// @onlyOwnGrammar - As this has jsx
<Bar>
  {({ name }) => (
   <HelloWorld<Foo>
      name={name}
      variants={['TEST']}
    />
  )}
</Bar>

<Bar>
  {({ name }) => (
    <HelloWorld<
      Foo>
      name={name}
    />
  )}
</Bar>

<Bar>
  {({ name }) => (
    <HelloWorld<
      Foo>
      name={name}
      variants={['TEST']}
    />
  )}
</Bar>