import {Directive, ElementRef, HostListener} from '@angular/core';


@Directive({
  selector: '[appAnimationHoverEffect]'
})
export class AnimationHoverEffectDirective {

  constructor( private el: ElementRef) {
    this.el.nativeElement.style.cursor = 'pointer'
    this.el.nativeElement.style.transition = 'box-shadow 0.1s, transform 0.1s)'
    // /* Add listener for mouseout event, remove the rotation */
    // this.el.nativeElement.addEventListener('mouseout', () => {
    //   this.el.nativeElement.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
    // })
    //
    // /* Add listener for mousedown event, to simulate click */
    // this.el.nativeElement.addEventListener('mousedown', () => {
    //   this.el.nativeElement.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
    // })
    //
    // /* Add listener for mouseup, simulate release of mouse click */
    // this.el.nativeElement.addEventListener('mouseup', () => {
    //   this.el.nativeElement.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
    // })

    /* Add listener for mouseout event, remove the rotation */
    this.el.nativeElement.addEventListener('mouseout', () => {
      this.el.nativeElement.style.transform = ' perspective(500px) scale(1) rotateX(0) rotateY(0) ';
      this.el.nativeElement.style.transition = 'all 3s ease-out';
    })

    /* Add listener for mouseover event, to simulate click */
    this.el.nativeElement.addEventListener('mouseover', () => {
      this.el.nativeElement.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)';
      this.el.nativeElement.style.transition = 'all 0s ease-out'
    })

    /* Add listener for hover, simulate release of mouse click */
    this.el.nativeElement.addEventListener('hover', () => {
      this.el.nativeElement.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)';
      this.el.nativeElement.style.transition = 'all 0s ease-out';
    });
  }

  /*
  * Add a listener for mousemove event
  * Which will trigger function 'handleMove'
  * On mousemove
  */
  @HostListener('mousemove', ['$event'])
  onMousemove(event: any) {

    /* Get the height and width of the element */
    const height = this.el.nativeElement.clientHeight
    const width = this.el.nativeElement.clientWidth

    /*
   * Get position of mouse cursor
   * With respect to the element
   * On mouseover
   */
    /* Store the x position */
    const xVal = event.layerX
    /* Store the y position */
    const yVal = event.layerY

    /*
      * Calculate rotation valuee along the Y-axis
      * Here the multiplier 20 is to
      * Control the rotation
      * You can change the value and see the results
      */
    const yRotation = 20 * ((xVal - width / 2) / width)

    /* Calculate the rotation along the X-axis */
    const xRotation = -20 * ((yVal - height / 2) / height)

    /* Generate string for CSS transform property */
    const string = 'perspective(500px) scale(1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
    // const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'

    /* Apply the calculated transformation */
    this.el.nativeElement.style.transform = string
  }
}
