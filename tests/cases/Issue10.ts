enum Hello {
    A,
    B
}

class World {
    normal() {
        let x = 5;
        console.log("hello");
    }

    [Hello.A]() {
        let x = 5;
        console.log("hello");
    }
}