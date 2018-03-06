// @onlyOwnGrammar - As this has jsx
const valid1 = <standard-tag standard-attribute="foo" />;

const valid2 = <namespaced:tag namespaced:boolean-attr>foo</namespaced:tag>;

const valid3 = <namespaced:Klass.comp.onent namespaced:attr="foo" />;

const invalid1 = <too:much:Namespace />;

const invalid2 = <namespaced-:Klass.Component too:much:namespace-attribute>foo</namespaced-:Klass.Component>;