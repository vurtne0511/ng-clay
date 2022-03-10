
文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。

## 代码演示
<div>
  <nc-example>
    <nc-example-showcase>
      <example-tree-flat></example-tree-flat>
    </nc-example-showcase>
    <nc-example-legend title="扁平结构的树">
      扁平化的DOM结构树，配合 `ntTreeNodePadding` 和 `ntTreeNodePaddingIndent` 指令可以控制缩紧距离。
    </nc-example-legend>
    <nc-example-code-tabs>
      <nc-example-code-tabs-panel lang="ts" [code]="flatCode"></nc-example-code-tabs-panel>
      <nc-example-code-tabs-panel lang="ts" [code]="dataCode" title="Data"></nc-example-code-tabs-panel>
      <nc-example-code-tabs-panel lang="html" [code]="flatTemplate"></nc-example-code-tabs-panel>
      <nc-example-code-tabs-panel lang="scss" [code]="flatStyle"></nc-example-code-tabs-panel>
    </nc-example-code-tabs>
  </nc-example>
  <nc-example>  
    <nc-example-showcase>
      <example-tree-nested></example-tree-nested>
    </nc-example-showcase>
    <nc-example-legend title="嵌套结构的树">
      嵌套的DOM结构树<!-- ，与**扁平结构树**不同，这种方式用样式来实现缩进效果。 -->
    </nc-example-legend>
    <nc-example-code-tabs>
      <nc-example-code-tabs-panel lang="ts" [code]="nestedCode"></nc-example-code-tabs-panel>
      <nc-example-code-tabs-panel lang="html" [code]="nestedTemplate"></nc-example-code-tabs-panel>
      <nc-example-code-tabs-panel lang="scss" [code]="nestedStyle"></nc-example-code-tabs-panel>
    </nc-example-code-tabs>
  </nc-example>
  <nc-example>
    <nc-example-showcase>
      <example-tree-table></example-tree-table>
    </nc-example-showcase>
    <nc-example-legend title="表格形式的树">
      tree 也可以跟 table 结合使用。
    </nc-example-legend>
    <nc-example-code-tabs>
      <nc-example-code-tabs-panel lang="ts" [code]="tableCode"></nc-example-code-tabs-panel>
      <nc-example-code-tabs-panel lang="html" [code]="tableTemplate"></nc-example-code-tabs-panel>
      <nc-example-code-tabs-panel lang="scss" [code]="tableStyle"></nc-example-code-tabs-panel>
    </nc-example-code-tabs>
  </nc-example>
  <nc-example>
    <nc-example-showcase>
      <example-tree-async></example-tree-async>
    </nc-example-showcase>
    <nc-example-legend title="异步数据源">
      加载异步数据。
    </nc-example-legend>
    <nc-example-code-tabs>
      <nc-example-code-tabs-panel lang="ts" [code]="asyncCode"></nc-example-code-tabs-panel>
      <nc-example-code-tabs-panel lang="html" [code]="asyncTemplate"></nc-example-code-tabs-panel>
      <nc-example-code-tabs-panel lang="scss" [code]="asyncStyle"></nc-example-code-tabs-panel>
    </nc-example-code-tabs>
  </nc-example>
  <nc-example>
    <nc-example-showcase>
      <example-tree-checkbox></example-tree-checkbox>
    </nc-example-showcase>
    <nc-example-legend title="Checkbox 选择">
      树结构的选择框。
    </nc-example-legend>
    <nc-example-code-tabs>
      <nc-example-code-tabs-panel lang="ts" [code]="checkboxCode"></nc-example-code-tabs-panel>
      <nc-example-code-tabs-panel lang="html" [code]="checkboxTemplate"></nc-example-code-tabs-panel>
      <nc-example-code-tabs-panel lang="scss" [code]="checkboxStyle"></nc-example-code-tabs-panel>
    </nc-example-code-tabs>
  </nc-example>
</div>
<div>
  <nc-markdown [data]="api"></nc-markdown>
</div>
