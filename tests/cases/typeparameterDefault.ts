interface PromiseLike<T> { 
    /** 
      * Attaches callbacks for the resolution and/or rejection of the Promise. 
      * @param onfulfilled The callback to execute when the Promise is resolved. 
      * @param onrejected The callback to execute when the Promise is rejected.  
      * @returns A Promise for the completion of which ever callback is executed.  
      */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): PromiseLike<TResult1 | TResult2>;  
}  
