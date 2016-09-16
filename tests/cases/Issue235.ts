class A {
    @Route.GET('/*')
    get(q: Request, s: Response): void {
        s.sendFile();
    }
}