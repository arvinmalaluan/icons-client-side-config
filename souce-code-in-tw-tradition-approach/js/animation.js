let easing = helpers.easingEffects.easeOutQuad;
let restart = false;
const totalDuration = 5000;
const duration = (ctx) =>
  (easing(ctx.index / data.length) * totalDuration) / data.length;
const delay = (ctx) => easing(ctx.index / data.length) * totalDuration;
const previousY = (ctx) =>
  ctx.index === 0
    ? ctx.chart.scales.y.getPixelForValue(100)
    : ctx.chart
        .getDatasetMeta(ctx.datasetIndex)
        .data[ctx.index - 1].getProps(["y"], true).y;

const progressiveLineWithEasing = {
  x: {
    type: "number",
    easing: "linear",
    duration: duration,
    from: NaN, // the point is initially skipped
    delay(ctx) {
      if (ctx.type !== "data" || ctx.xStarted) {
        return 0;
      }
      ctx.xStarted = true;
      return delay(ctx);
    },
  },
  y: {
    type: "number",
    easing: "linear",
    duration: duration,
    from: previousY,
    delay(ctx) {
      if (ctx.type !== "data" || ctx.yStarted) {
        return 0;
      }
      ctx.yStarted = true;
      return delay(ctx);
    },
  },
};
