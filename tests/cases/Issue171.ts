class c {
    constructor 
    (
        private parameters: {
            stringContent: string;
            minLength: number;
            maxLength: number,
            validationErrorMessage: string
        }) {

    }
    private x: number = Date.now() // TODO: momentjs?
    private link_visits_counter: number = 0;
}

function foo() {
  new c
  ({
      stringContent: "something",
      minLength: 1,
      maxLength: 5,
      validationErrorMessage: "something else"
  });
}