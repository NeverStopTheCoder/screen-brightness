
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

/**
 * Custom blocks
 */
//% weight=100 color=#FF4B33 icon=""
//%block="Screen Brightness"
namespace custom {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block="set Screen Brightness to $n"
    export function foo(n: number): void {
        screen.setBrightness(n)
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block="Screen Brightness"
    export function fib(): number {
        return screen.brightness()
    }
}
