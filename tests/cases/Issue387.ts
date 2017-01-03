//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

//
// --- IMPORTS --------------------------------------------------------------------
//

    import * as readline from 'readline';

//
// --- READLINE -------------------------------------------------------------------
//

    /**
     * Reads a string from the command line
     * ```
     * async function main ( ) {
     *    let name = await kary.terminal.input('Your name: ')
     *    console.log(`Hello, ${ name }!`)
     * }
     * ```
     */
    export async function input ( message = '' ) {
        const readlineInterface = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        })
        return new Promise<string> ( resolve => {
            readlineInterface.question ( message , answer => {
                readlineInterface.close( );
                resolve( answer );
            });
        });
    }

// --------------------------------------------------------------------------------