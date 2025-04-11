//Execution Context: contains JS code and environment info to execute the code
//1)Global Context -> Top tier Execution Context - always created when executing JS code. (Windows Object or global in node.js)
//2)Function Context -> created every time a function is executed.


/** Memoery Heap and Call Stack (Execution Context Stack)
 * stack means first in first out. (FIFO)
 * 
 * Creation Phase: creation of Global Objects(Windows, global) / arguemnts in fucntion / bind 'this' to global 
 * / assign variable and function to Memory Heap & set dafault as undefined.
 *
 * Execution Phase
 * Execute codes. Create new Execution Context if necessary.
 */

