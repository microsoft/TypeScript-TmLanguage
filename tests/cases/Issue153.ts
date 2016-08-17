import {Vector3, Vector} from 'vectors';

/**
 * A simple 3x3 matrix structure.
 * 
 * @export
 * @class Matrix3x3
 */
class Matrix {
    public M11 : number;
    public M12 : number;
    public M13 : number;
    public M21 : number;
    public M22 : number;
    public M23 : number;
    public M31 : number;
    public M32 : number;
    public M33 : number;


    /**
     * Gets a column as a new vector.
     * 
     * @param {number} index The index of the column (0 .. 2).
     * @returns {Vector3} A vector representing the column.
     */
    public getColumn_Breaks(index : number) : Vector3 {
        if (index == 0) {
            return new Vector3(this.M11, this.M21, this.M31);
        } else if (index == 1) {
            return new Vector3(this.M12, this.M22, this.M32);
        } else if (index == 2) {
            return new Vector3(this.M13, this.M23, this.M33);
        } else {
            throw new RangeError('Invalid matrix 3x3 column index: ' + index);
        }
    }

    /**
     * Gets a column as a new vector.
     * 
     * @param {number} index The index of the column (0 .. 2).
     * @returns {Vector3} A vector representing the column.
     */
    public getColumn_Works(index : number) : Vector {
        if (index == 0) {
            return new Vector(this.M11, this.M21, this.M31);
        } else if (index == 1) {
            return new Vector(this.M12, this.M22, this.M32);
        } else if (index == 2) {
            return new Vector(this.M13, this.M23, this.M33);
        } else {
            throw new RangeError('Invalid matrix 3x3 column index: ' + index);
        }
    }

}