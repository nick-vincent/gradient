import { Component, Host, h, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'gradient-button',
  styleUrl: 'gradient-button.css',
  shadow: true,
})
export class GradientButton {
  @Event() gradientButtonClick: EventEmitter;

  @Prop({ reflect: true }) readonly color: string = 'blueviolet';

  onClick = () => {
    this.gradientButtonClick.emit();
  };

  onMouseMove = e => {
    const { target, clientX, clientY } = e;
    target.style.setProperty('--gradient-x', `${clientX}px`);
    target.style.setProperty('--gradient-y', `${clientY}px`);
  };

  render() {
    return (
      <Host>
        <button style={{ '--color': this.color }} type="button" onClick={this.onClick} onMouseMove={e => this.onMouseMove(e)}>
          <span>
            <slot></slot>
          </span>
        </button>
      </Host>
    );
  }
}
