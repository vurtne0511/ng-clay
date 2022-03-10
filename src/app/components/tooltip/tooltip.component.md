
## 代码演示

<div class="grid-x grid-margin-x">
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-tooltip-basic></example-tooltip-basic>
      </nc-example-showcase>
      <nc-example-legend title="基本">最简单的用法。</nc-example-legend>
      <nc-example-code [code]="basicCode"></nc-example-code>
    </nc-example>
    <nc-example>
      <nc-example-showcase>
        <example-tooltip-position></example-tooltip-position>
      </nc-example-showcase>
      <nc-example-legend title="位置">位置有十二个方向。通过 `position` 设置</nc-example-legend>
      <nc-example-code [code]="positionCode"></nc-example-code>
    </nc-example>
  </div>
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-tooltip-change></example-tooltip-change>
      </nc-example-showcase>
      <nc-example-legend title="弹出层事件">可用 `afterOpen`、`afterClosed`、`beforeOpen`、`beforeClosed` 监听确认框显示前后、消失前后事件。</nc-example-legend>
      <nc-example-code [code]="changeCode"></nc-example-code>
    </nc-example>
  </div>
</div>

<div>
  <nc-markdown [data]="api"></nc-markdown>
</div> 
