

## 何时使用

* 当加载/渲染所有数据将花费很多时间时；
* 可切换页码浏览数据。

## 代码演示

<div class="grid-x grid-margin-x">
  <div class="medium-6 large-6 cell">
    <nc-example>
      <nc-example-showcase>
        <example-pagination-basic></example-pagination-basic>
      </nc-example-showcase>
      <nc-example-legend title="基本">基础分页</nc-example-legend>
      <nc-example-code [code]="basicCode"></nc-example-code>
    </nc-example>
  </div>
  <div class="medium-6 large-6 cell">
      <nc-example>
        <nc-example-showcase>
          <example-pagination-more></example-pagination-more>
        </nc-example-showcase>
        <nc-example-legend title="更多">更多分页</nc-example-legend>
        <nc-example-code [code]="moreCode"></nc-example-code>
      </nc-example>
    </div>
</div>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| total | 数据总数 | `number` | - |
| pageIndex | 当前页数，可双向绑定 | `number` | 1 |
| pageSize | 每页条数 ，可双向绑定 | `number` | 10 |

## 方法  

| 参数 | 说明 | 默认值 |
| --- | --- | --- | --- |
| pageChange | 当前页数改变时回调 | - |
