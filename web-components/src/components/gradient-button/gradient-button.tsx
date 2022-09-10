import { Component, Host, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'gradient-button',
  styleUrl: 'gradient-button.css',
  shadow: true,
})
export class GradientButton {
  @Event() gradientButtonClick: EventEmitter;

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
        <button type="button" onClick={this.onClick} onMouseMove={e => this.onMouseMove(e)}>
          <span>
            <slot></slot>
          </span>
        </button>
      </Host>
    );
  }
}
