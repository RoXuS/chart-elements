/**
Pie and doughnut charts are probably the most commonly used chart there are. They are divided into segments, the arc of each segment shows a the proportional value of each piece of data.

They are excellent at showing the relational proportions between data.

Pie and doughnut charts in are effectively the same class in Chart.js, but have one different default value - their percentageInnerCutout. This equates what percentage of the inner should be cut out. This defaults to 0 for pie charts, and 50 for doughnuts.

They are also registered under two aliases in the Chart core. Other than their different default value, and different alias, they are exactly the same.

##### Example

    <chart-pie data="[[data]]"></chart-pie>

    ...

    this.data = {
      labels: [
        "Red",
        "Green",
        "Yellow"
      ],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };

@group Chart Elements
@element chart-pie
@demo demo/chart-pie.html
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

  is: 'chart-pie',

  behaviors: [
    Polymer.IronResizableBehavior,
    ChartBehaviors.ChartPropertyBehavior,
    ChartBehaviors.ContextBehavior,
    ChartBehaviors.ResizeBehavior
  ],

  ready: function() {
    this._setType('pie');
  }
});
