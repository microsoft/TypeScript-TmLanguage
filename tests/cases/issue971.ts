let a: number
for (let i = 0; i < 10; i++) {}

let x: string
if (false) {
}


class Test {
  a() {
    let x: string
    if (false) {
    }
  }

  b(): Promise<string> {
    let y: string
    if (false) {
      ;[y] = ['']
    } else {
      if (true) {
        let z = `:` // everything after this is colored as string
      }
    }
  }

  c() {}
}

let x: number
try {
} catch (err) {}
