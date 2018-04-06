// @onlyOwnGrammar - As this has type parameters that would be jsx in tsx files
const method1 = <T>(
    param1: T,
    param2: T
): Promise<T> => {
    return param1;
};
const method2 = async <T>(
    param1: T,
    param2: T
): Promise<T> => {
    return param1;
};