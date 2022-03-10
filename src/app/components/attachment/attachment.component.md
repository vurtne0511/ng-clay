文件上传控件

## 何时使用

将文件、图片、音频等上传到远程服务器的时候使用。

## 代码演示

<div class="grid-x grid-margin-x">
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-attachment-basic></example-attachment-basic>
      </nc-example-showcase>
      <nc-example-legend title="基本">上传文件。</nc-example-legend>
      <nc-example-code [code]="basicCode"></nc-example-code>
    </nc-example>
    <nc-example>
      <nc-example-showcase>
        <example-attachment-accept></example-attachment-accept>
      </nc-example-showcase>
      <nc-example-legend title="控制上传文件类型">通过属性accept控制上传文件为png格式图片或css文件。</nc-example-legend>
      <nc-example-code [code]="acceptCode"></nc-example-code>
    </nc-example>
  </div>
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-attachment-event></example-attachment-event>
      </nc-example-showcase>
      <nc-example-legend title="错误处理">当文件过大时进行提示。例：文件超过0.5MB时提示。</nc-example-legend>
      <nc-example-code [code]="eventCode"></nc-example-code>
    </nc-example>
  </div>
</div>

<div>
  <nc-markdown [data]="api"></nc-markdown>
</div>
