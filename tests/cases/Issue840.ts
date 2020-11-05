type Union<A,B> = A|B;

const fn = (
// newline here
): Array<Union<Array<number>, string>>=>{
    try {
        return [[1]]
    } catch (e){
        return [[1]]
    }
}