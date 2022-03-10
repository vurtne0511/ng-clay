
## 代码演示

<div class="grid-x grid-margin-x">
   <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-select-single></example-select-single>
      </nc-example-showcase>
      <nc-example-legend title="单选">
      单选下拉菜单，通过设置
      </nc-example-legend>
      <nc-example-code [code]="singleCode"></nc-example-code>
    </nc-example>
  </div>
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-select-multiple></example-select-multiple>
      </nc-example-showcase>
      <nc-example-legend title="单选">多选下拉菜单。</nc-example-legend>
      <nc-example-code [code]="multipleCode"></nc-example-code>
    </nc-example>
  </div>
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-select-disabled></example-select-disabled>
      </nc-example-showcase>
      <nc-example-legend title="单选">设置禁用下拉菜单</nc-example-legend>
      <nc-example-code [code]="disabledCode"></nc-example-code>
    </nc-example>
  </div>
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-select-required></example-select-required>
      </nc-example-showcase>
      <nc-example-legend title="单选">设置必填下拉菜单</nc-example-legend>
      <nc-example-code [code]="requiredCode"></nc-example-code>
    </nc-example>
  </div>
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-select-compare-with></example-select-compare-with>
      </nc-example-showcase>
      <nc-example-legend title="compareWith">
        当所选取的值也是一个对象，可使用compareWith 来设置匹配方法.
      </nc-example-legend>
      <nc-example-code [code]="compareWithCode"></nc-example-code>
    </nc-example>
  </div>
   <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-select-filter></example-select-filter>
      </nc-example-showcase>
      <nc-example-legend title="filter">设置可筛选的下拉框</nc-example-legend>
      <nc-example-code [code]="filterCode"></nc-example-code>
    </nc-example>
  </div>
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-select-placeholder></example-select-placeholder>
      </nc-example-showcase>
      <nc-example-legend title="placeholder">自定义placeholder</nc-example-legend>
      <nc-example-code [code]="placeholderCode"></nc-example-code>
    </nc-example>
  </div>
   <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-select-event></example-select-event>
      </nc-example-showcase>
      <nc-example-legend title="单选">相关事件监听使用</nc-example-legend>
      <nc-example-code [code]="eventCode"></nc-example-code>
    </nc-example>
  </div>
   <div class="medium-12 large-12 cell">
    <nc-example>
      <nc-example-showcase>
        <example-select-coordinat></example-select-coordinat>
      </nc-example-showcase>
      <nc-example-legend title="联动">下拉联动选择</nc-example-legend>
      <nc-example-code [code]="coordinatCode"></nc-example-code>
    </nc-example>
  </div>
</div>

<div>
  <nc-markdown [data]="api"></nc-markdown>
</div>
