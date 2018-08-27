import React, { Component } from "react";

import Selector from './Selector';

class SelectorWrapper extends Component {
  render() {
    const svg = {
      checked: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg>',
      notChecked: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12,0A12,12 0 0,1 24,12A12,12 0 0,1 12,24A12,12 0 0,1 0,12A12,12 0 0,1 12,0M12,2A10,10 0 0,0 2,12C2,14.4 2.85,16.6 4.26,18.33L18.33,4.26C16.6,2.85 14.4,2 12,2M12,22A10,10 0 0,0 22,12C22,9.6 21.15,7.4 19.74,5.67L5.67,19.74C7.4,21.15 9.6,22 12,22Z"></path></svg>'
    };

    return (
      <div>
        <h1>Selector</h1>
        <p>Replaces browser default radio buttons and checboxes with custom svg. Uses <code>input type="checkbox"</code>, <code>input type="radio"</code>, <code>label</code> and no javascript under the hood to make sure all accessibility features work like they're supposed to.</p>

        <h3>Radio buttons</h3>
        <Selector
          name="moi"
          id="l1"
          label="Label1"
          ySvg={svg.checked}
          nSvg={svg.notChecked}
          type="radio"
        />
        <Selector
          name="moi"
          label="Label2"
          id="l2"
          ySvg={svg.checked}
          nSvg={svg.notChecked}
          type="radio"
        />
        <Selector
          name="moi"
          label="Label3"
          id="l3"
          ySvg={svg.checked}
          nSvg={svg.notChecked}
          type="radio"
        />
        <h3>Checkboxes</h3>
        <Selector
          name="1"
          label="Label"
          ySvg={svg.checked}
          nSvg={svg.notChecked}
          type="checkbox"
        />
        <Selector
          name="2"
          label="Label"
          ySvg={svg.checked}
          nSvg={svg.notChecked}
          type="checkbox"
        />
        <Selector
          name="3"
          label="Label"
          ySvg={svg.checked}
          nSvg={svg.notChecked}
          type="checkbox"
        />
      </div>
    );
  }
}

export default SelectorWrapper;
