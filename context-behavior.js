import loadScript from './chart-js-import';

const ContextBehavior = {

  _measure: function (cb) {
    function measure() {
      if (this.offsetHeight) {
        cb(true);
      } else {
        cb(false);
      }
    }
    requestAnimationFrame(measure.bind(this));
  },

  _queue: function () {
    if (this.hasData) {
      this._measure(function (hasHeight) {
        if (hasHeight) {
          this.updateChart();
        }
      }.bind(this));
    }
  },

  updateChart: async function () {
    if (!window.Chart) {
      await loadScript();
    }

    this.async(function () {

      if (this.chart) {

        this.chart.stop();
        this.mixin(this.chart.data, this.data);
        this.chart.update();

      } else {

        this.async(function () {
          if (this.hasData) {
            this.chart = new Chart(this.ctx, {
              type: this.type,
              data: this.data,
              options: this.options
            });
          }
        }, null, 0);

      }

    }, null, 0);

  },

  attached: function () {
    this.ctx = this.$.canvas.getContext('2d');
    this._queue();
  }

};

export { ContextBehavior as default };