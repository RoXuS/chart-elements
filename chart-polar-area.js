/**
Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value.

This type of chart is often useful when we want to show a comparison data similar to a pie chart, but also show a scale of values for context.

##### Example

    <chart-polar-area data="{{data}}"></chart-polar-area>

    ...

    this.data = {
      datasets: [{
        data: [
          11,
          16,
          7,
        ],
        backgroundColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
        ],
        label: 'My dataset' // for legend
      }],
      labels: [
        "Red",
        "Green",
        "Yellow"
      ]
    };

@group Chart Elements
@element chart-polar-area
@demo demo/chart-polar-area.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import '@polymer/iron-resizable-behavior/iron-resizable-behavior.js';
import './chart-js-import.js';
import './chart-property-behavior.js';
import './context-behavior.js';
import './resize-behavior.js';
import './chart-styles.js';
Polymer({
  _template: Polymer.html`
    <style include="chart-styles"></style>

    <div>
      <canvas id="canvas"></canvas>
    </div>
`,

  is: 'chart-polar-area',

  behaviors: [
    Polymer.IronResizableBehavior,
    ChartBehaviors.ChartPropertyBehavior,
    ChartBehaviors.ContextBehavior,
    ChartBehaviors.ResizeBehavior
  ],

  ready: function() {
    this._setType('polarArea');
  }
});
