new new Proxy(function fn() {
    console.log(this.constructor.name);
}, {});