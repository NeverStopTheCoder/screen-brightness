
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
    let fadeSteps = 0
    let palette = Buffer.create(48);
    image.setPalette(palette);
setDefaultPalette()
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block="set Screen Brightness to $n"
    //%group="for Hardware"
    export function foo(n: number): void {
        screen.setBrightness(n)
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block="Screen Brightness"
    //%group="for Hardware"
    export function fib(): number {
        return screen.brightness()
    }

    //% block="set Screen fade steps $n"
    //%group="for Simulator"
    export function foo2(n: number): void {
        fadeSteps = n
    }

    //% block="set Simulator Screen Brightness to $n (Simulator)"
    //%group="for Simulator"
    export function foo3(n: number): void {
        fadeScreenToWhite(n)
    }
    //% block="reset color pallete"
    //%group="for Simulator"
    export function foo4(): void {
        setDefaultPalette()
    }

    function setDefaultPalette() {
        let defaultColors = hex`__palette`
        for (let i = 0; i <= 47; i++) {
            palette.setUint8(i, defaultColors[i]);
        }
        image.setPalette(palette);
    }

    function fadeScreenToWhite(steps: number) {  
        for (let k = 0; k <= fadeSteps; k++) {
            // Controls fade speed
            pause(100)
            for (let index = 0; index <= 15; index++) {
                let t = palette.getUint8(index * 3);
                let l = palette.getUint8(index * 3 + 1);
                let d = palette.getUint8(index * 3 + 2);
                // Move each color closer to white (255, 255, 255)
                t = Math.floor(t + (0 - t) * k / steps)
                l = Math.floor(l + (0 - l) * k / steps)
                d = Math.floor(d + (0 - d) * k / steps)
                palette.setUint8(index * 3, t);
                palette.setUint8(index * 3 + 1, l);
                palette.setUint8(index * 3 + 2, d);
            }
            image.setPalette(palette);
        }
    }
    
    
}
