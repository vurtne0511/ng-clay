
图片上传控件

## 何时使用

将图片上传到远程服务器的时候使用。

## 代码演示

<div class="grid-x grid-margin-x">
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-picture-basic></example-picture-basic>
      </nc-example-showcase>
      <nc-example-legend title="基本">上传图片。</nc-example-legend>
      <nc-example-code [code]="basicCode"></nc-example-code>
    </nc-example>
    <nc-example>
      <nc-example-showcase>
        <example-picture-accept></example-picture-accept>
      </nc-example-showcase>
      <nc-example-legend title="控制上传图片格式">通过属性accept控制上传图片为jpeg格式或gif格式。</nc-example-legend>
      <nc-example-code [code]="acceptCode"></nc-example-code>
    </nc-example>
  </div>
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-picture-event></example-picture-event>
      </nc-example-showcase>
      <nc-example-legend title="错误处理">当图片过大时进行提示。例：图片超过0.5MB时提示。</nc-example-legend>
      <nc-example-code [code]="eventCode"></nc-example-code>
    </nc-example>
  </div>
</div>

<div>
  <nc-markdown [data]="api"></nc-markdown>
</div>
