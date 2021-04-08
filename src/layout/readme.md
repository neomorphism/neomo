# Layout

## Container Information

> container is blocking Contents area

|                  | Extra Small |   Small | Medium  | Large | X-Large | XX-Large |
| ---------------- | :---------: | ------: | ------- | ----- | ------- | -------- |
|                  |   <567px    | >=576px | >=768px | >=992 | >=120px | >=1400px |
| .container       |    100%     |   540px | 720px   | 960px | 1140px  | 1320px   |
| .container-fluid |    100%     |    100% | 100%    | 100%  | 100%    | 100%     |

### Example

```html
<div class="container">Some code</div>
```


## Column Information
> Column usage

```html
<html>
  <head>
    <meta charset="utf-8" />
    <title>test.html</title>
    <link rel="stylesheet" type="text/css" href="src/neomo.css" />
  </head>
  <body>
    <div class="container">
      <div class="columns">
        <div class="column">
          <p class="neomo-inset m-1 p-2" style="text-align:center;">
            First column
          </p>
        </div>
        <div class="column">
          <p class="neomo-inset m-1 p-2" style="text-align:center;">
            Second column
          </p>
        </div>
        <div class="column">
          <p class="neomo-inset m-1 p-2" style="text-align:center;">
            Third column
          </p>
        </div>
        <div class="column">
          <p class="neomo-inset m-1 p-2" style="text-align:center;">
            Fourth column
          </p>
        </div>
      </div>

      <div class="columns">
        <div class="column size-1">
          <p class="neomo-outset m-1 p-2" style="text-align:center;">size1</p>
        </div>
        <div class="column size-2">
          <p class="neomo-outset m-1 p-2" style="text-align:center;">size2</p>
        </div>
        <div class="column size-3">
          <p class="neomo-outset m-1 p-2" style="text-align:center;">size3</p>
        </div>
        <div class="column size-4">
          <p class="neomo-outset m-1 p-2" style="text-align:center;">size4</p>
        </div>
      </div>

      <div class="columns">
        <div class="column size-5">
          <p class="neomo-outset m-1 p-2" style="text-align:center;">size5</p>
        </div>
        <div class="column size-6">
          <p class="neomo-outset m-1 p-2" style="text-align:center;">size6</p>
        </div>
      </div>

      <div class="columns">
        <div class="column size-7">
          <p class="neomo-outset m-1 p-2" style="text-align:center;">size7</p>
        </div>
      </div>
      <div class="columns">
        <div class="column size-8">
          <p class="neomo-outset m-1 p-2" style="text-align:center;">size8</p>
        </div>
      </div>
      <div class="columns">
        <div class="column size-9">
          <p class="neomo-outset m-1 p-2" style="text-align:center;">size9</p>
        </div>
      </div>
      <div class="columns">
        <div class="column size-10">
          <p class="neomo-outset m-1 p-2" style="text-align:center;">size10</p>
        </div>
      </div>
      <div class="columns">
        <div class="column size-11">
          <p class="neomo-outset m-1 p-2" style="text-align:center;">size11</p>
        </div>
      </div>
      <div class="columns">
        <div class="column size-12">
          <p class="neomo-outset m-1 p-2" style="text-align:center;">size12</p>
        </div>
      </div>
    </div>
  </body>
</html>
```
