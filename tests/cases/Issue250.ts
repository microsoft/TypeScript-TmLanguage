/** Meta-part that defins a Form */
export class FormType extends Type {

  /** @internal Original FormType instance */
  static Original = function () {
    let type = new FormType;

    // define embed field
    type.defineField(DesignID.Embed, new BooleanAtom(false));

    // define plan choice
    type.defineField(DesignID.Plan, PlanChoice.Original);

    // define fields list
    let fields =
      type.defineField(DesignID.Fields, new Ordering(new FieldDesign));
    // embed field list
    fields.embed = true;

    return type;
  } ();
}