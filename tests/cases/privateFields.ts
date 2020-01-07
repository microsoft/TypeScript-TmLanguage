class Greeter {
    #name1: string;
    #NAME2: string;
    #NAMEabc: string;

    #name2 = "hello";
    #name3: string = "hello";
    #name4;

    #name11: () => string;
    #NAME21: () => string;
    #NAME1abc: () => string;

    #name12 =  () => "hello";
    #NAME22 =  () => "hello";
    #NAME2abc =  () => "hello";

    prop1 = x.#name1;
    prop2 = x.#NAME2;
    prop3 = x.#NAMEabc;

    prop4 = x.#name1.abc;
    prop5 = x.#NAME2.abc;
    prop6 = x.#NAMEabc.abc;

    prop7 = x.#name1.#abc;
    prop8 = x.#NAME2.#abc;
    prop9 = x.#NAMEabc.#abc;

    propA = x.#name1.#NAME;
    propB = x.#NAME2.#NAME;
    propC = x.#NAMEabc.#NAME;

    propD = x.#name1.#NAMEabc;
    propE = x.#NAME2.#NAMEabc;
    propF = x.#NAMEabc.#NAMEabc;
    
    prop11 = this.#name1;
    prop21 = this.#NAME2;
    prop31 = this.#NAMEabc;

    prop41 = this.#name1.abc;
    prop51 = this.#NAME2.abc;
    prop61 = this.#NAMEabc.abc;

    prop71 = this.#name1.#abc;
    prop81 = this.#NAME2.#abc;
    prop91 = this.#NAMEabc.#abc;

    propA1 = this.#name1.#NAME;
    propB1 = this.#NAME2.#NAME;
    propC1 = this.#NAMEabc.#NAME;

    propD1 = this.#name1.#NAMEabc;
    propE1 = this.#NAME2.#NAMEabc;
    propF1 = this.#NAMEabc.#NAMEabc;

    prop12 = x.#name1();
    prop22 = x.#NAME2();
    prop32 = x.#NAMEabc();

    prop42 = x.#name1().abc;
    prop52 = x.#NAME2().abc;
    prop62 = x.#NAMEabc().abc;
    prop422 = x.#name1().#abc;
    prop522 = x.#NAME2().#abc;
    prop622 = x.#NAMEabc().#abc;
    prop423 = x.#name1().#NAME;
    prop523 = x.#NAME2().#NAME;
    prop623 = x.#NAMEabc().#NAME;
    prop424 = x.#name1().#NAMEabc;
    prop524 = x.#NAME2().#NAMEabc;
    prop624 = x.#NAMEabc().#NAMEabc;

    prop72 = x.#name1().#abc();
    prop82 = x.#NAME2().#abc();
    prop92 = x.#NAMEabc().#abc();
    prop721 = x.#name1.#abc();
    prop821 = x.#NAME2.#abc();
    prop921 = x.#NAMEabc.#abc();

    propA2 = x.#name1().#NAME();
    propB2 = x.#NAME2().#NAME();
    propC2 = x.#NAMEabc().#NAME();
    propA21 = x.#name1.#NAME();
    propB21 = x.#NAME2.#NAME();
    propC21 = x.#NAMEabc.#NAME();

    propD2 = x.#name1().#NAMEabc();
    propE2 = x.#NAME2().#NAMEabc();
    propF2 = x.#NAMEabc().#NAMEabc();
    propD21 = x.#name1.#NAMEabc();
    propE21 = x.#NAME2.#NAMEabc();
    propF21 = x.#NAMEabc.#NAMEabc();


    prop13 = this.#name1();
    prop23 = this.#NAME2();
    prop33 = this.#NAMEabc();

    prop43 = this.#name1().abc;
    prop53 = this.#NAME2().abc;
    prop63 = this.#NAMEabc().abc;
    prop432 = this.#name1().#abc;
    prop532 = this.#NAME2().#abc;
    prop632 = this.#NAMEabc().#abc;
    prop433 = this.#name1().#NAME;
    prop533 = this.#NAME2().#NAME;
    prop633 = this.#NAMEabc().#NAME;
    prop434 = this.#name1().#NAMEabc;
    prop534 = this.#NAME2().#NAMEabc;
    prop634 = this.#NAMEabc().#NAMEabc;

    prop73 = this.#name1().#abc();
    prop83 = this.#NAME2().#abc();
    prop93 = this.#NAMEabc().#abc();
    prop731 = this.#name1.#abc();
    prop831 = this.#NAME2.#abc();
    prop931 = this.#NAMEabc.#abc();

    propA3 = this.#name1().#NAME();
    propB3 = this.#NAME2().#NAME();
    propC3 = this.#NAMEabc().#NAME();
    propA31 = this.#name1.#NAME();
    propB31 = this.#NAME2.#NAME();
    propC31 = this.#NAMEabc.#NAME();

    propD3 = this.#name1().#NAMEabc();
    propE3 = this.#NAME2().#NAMEabc();
    propF3 = this.#NAMEabc().#NAMEabc();
    propD31 = this.#name1.#NAMEabc();
    propE31 = this.#NAME2.#NAMEabc();
    propF31 = this.#NAMEabc.#NAMEabc();

    
    method() {
      const prop1 = x.#name1;
      const prop2 = x.#NAME2;
      const prop3 = x.#NAMEabc;

      const prop4 = x.#name1.abc;
      const prop5 = x.#NAME2.abc;
      const prop6 = x.#NAMEabc.abc;

      const prop7 = x.#name1.#abc;
      const prop8 = x.#NAME2.#abc;
      const prop9 = x.#NAMEabc.#abc;

      const propA = x.#name1.#NAME;
      const propB = x.#NAME2.#NAME;
      const propC = x.#NAMEabc.#NAME;

      const propD = x.#name1.#NAMEabc;
      const propE = x.#NAME2.#NAMEabc;
      const propF = x.#NAMEabc.#NAMEabc;
      
      const prop11 = this.#name1;
      const prop21 = this.#NAME2;
      const prop31 = this.#NAMEabc;

      const prop41 = this.#name1.abc;
      const prop51 = this.#NAME2.abc;
      const prop61 = this.#NAMEabc.abc;

      const prop71 = this.#name1.#abc;
      const prop81 = this.#NAME2.#abc;
      const prop91 = this.#NAMEabc.#abc;

      const propA1 = this.#name1.#NAME;
      const propB1 = this.#NAME2.#NAME;
      const propC1 = this.#NAMEabc.#NAME;

      const propD1 = this.#name1.#NAMEabc;
      const propE1 = this.#NAME2.#NAMEabc;
      const propF1 = this.#NAMEabc.#NAMEabc;

      const prop12 = this.#name1();
      const prop22 = this.#NAME2();
      const prop32 = this.#NAMEabc();

      const prop42 = this.#name1().abc;
      const prop52 = this.#NAME2().abc;
      const prop62 = this.#NAMEabc().abc;

      const prop72 = this.#name1().#abc();
      const prop82 = this.#NAME2().#abc();
      const prop92 = this.#NAMEabc().#abc();

      const propA2 = this.#name1().#NAME();
      const propB2 = this.#NAME2().#NAME();
      const propC2 = this.#NAMEabc().#NAME();

      const propD2 = this.#name1().#NAMEabc();
      const propE2 = this.#NAME2().#NAMEabc();
      const propF2 = this.#NAMEabc().#NAMEabc();

      const prop12 = x.#name1();
      const prop22 = x.#NAME2();
      const prop32 = x.#NAMEabc();

      const prop42 = x.#name1().abc;
      const prop52 = x.#NAME2().abc;
      const prop62 = x.#NAMEabc().abc;
      const prop422 = x.#name1().#abc;
      const prop522 = x.#NAME2().#abc;
      const prop622 = x.#NAMEabc().#abc;
      const prop423 = x.#name1().#NAME;
      const prop523 = x.#NAME2().#NAME;
      const prop623 = x.#NAMEabc().#NAME;
      const prop424 = x.#name1().#NAMEabc;
      const prop524 = x.#NAME2().#NAMEabc;
      const prop624 = x.#NAMEabc().#NAMEabc;

      const prop72 = x.#name1().#abc();
      const prop82 = x.#NAME2().#abc();
      const prop92 = x.#NAMEabc().#abc();
      const prop721 = x.#name1.#abc();
      const prop821 = x.#NAME2.#abc();
      const prop921 = x.#NAMEabc.#abc();

      const propA2 = x.#name1().#NAME();
      const propB2 = x.#NAME2().#NAME();
      const propC2 = x.#NAMEabc().#NAME();
      const propA21 = x.#name1.#NAME();
      const propB21 = x.#NAME2.#NAME();
      const propC21 = x.#NAMEabc.#NAME();

      const propD2 = x.#name1().#NAMEabc();
      const propE2 = x.#NAME2().#NAMEabc();
      const propF2 = x.#NAMEabc().#NAMEabc();
      const propD21 = x.#name1.#NAMEabc();
      const propE21 = x.#NAME2.#NAMEabc();
      const propF21 = x.#NAMEabc.#NAMEabc();


      const prop13 = this.#name1();
      const prop23 = this.#NAME2();
      const prop33 = this.#NAMEabc();

      const prop43 = this.#name1().abc;
      const prop53 = this.#NAME2().abc;
      const prop63 = this.#NAMEabc().abc;
      const prop432 = this.#name1().#abc;
      const prop532 = this.#NAME2().#abc;
      const prop632 = this.#NAMEabc().#abc;
      const prop433 = this.#name1().#NAME;
      const prop533 = this.#NAME2().#NAME;
      const prop633 = this.#NAMEabc().#NAME;
      const prop434 = this.#name1().#NAMEabc;
      const prop534 = this.#NAME2().#NAMEabc;
      const prop634 = this.#NAMEabc().#NAMEabc;

      const prop73 = this.#name1().#abc();
      const prop83 = this.#NAME2().#abc();
      const prop93 = this.#NAMEabc().#abc();
      const prop731 = this.#name1.#abc();
      const prop831 = this.#NAME2.#abc();
      const prop931 = this.#NAMEabc.#abc();

      const propA3 = this.#name1().#NAME();
      const propB3 = this.#NAME2().#NAME();
      const propC3 = this.#NAMEabc().#NAME();
      const propA31 = this.#name1.#NAME();
      const propB31 = this.#NAME2.#NAME();
      const propC31 = this.#NAMEabc.#NAME();

      const propD3 = this.#name1().#NAMEabc();
      const propE3 = this.#NAME2().#NAMEabc();
      const propF3 = this.#NAMEabc().#NAMEabc();
      const propD31 = this.#name1.#NAMEabc();
      const propE31 = this.#NAME2.#NAMEabc();
      const propF31 = this.#NAMEabc.#NAMEabc();
    }
}

