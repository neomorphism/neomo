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

> Column basic usage
```html
<html>
  <head>
    <meta charset="utf-8" />
    <title>test.html</title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>
  <body>
    <div class="container">
      <div class="columns">
        <div class="column">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">
            First column
          </p>
        </div>
        <div class="column">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">
            Second column
          </p>
        </div>
        <div class="column">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">
            Third column
          </p>
        </div>
        <div class="column">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">
            Fourth column
          </p>
        </div>
      </div>
    </div>
  </body>
</html>
```

> Column size usage
```html
<html>
  <head>
    <meta charset="utf-8" />
    <title>test.html</title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>
  <body>
    <div class="container">

      <div class="columns">
        <div class="column size-1">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">size1</p>
        </div>
        <div class="column size-2">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">size2</p>
        </div>
        <div class="column size-3">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">size3</p>
        </div>
        <div class="column size-4">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">size4</p>
        </div>
      </div>

      <div class="columns">
        <div class="column size-5">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">size5</p>
        </div>
        <div class="column size-6">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">size6</p>
        </div>
      </div>

      <div class="columns">
        <div class="column size-7">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">size7</p>
        </div>
      </div>

      <div class="columns">
        <div class="column size-8">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">size8</p>
        </div>
      </div>

      <div class="columns">
        <div class="column size-9">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">size9</p>
        </div>
      </div>

      <div class="columns">
        <div class="column size-10">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">size10</p>
        </div>
      </div>

      <div class="columns">
        <div class="column size-11">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">size11</p>
        </div>
      </div>

      <div class="columns">
        <div class="column size-12">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">size12</p>
        </div>
      </div>

    </div>
  </body>
</html>
```

> Column order usage
```html
<html>
  <head>
    <meta charset="utf-8" />
    <title>test.html</title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>
  <body>
    <div class="container">
      <div class="columns">
        <div class="column size-1 order-12">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">ord12</p>
        </div>
        <div class="column size-1 order-11">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">ord11</p>
        </div>
        <div class="column size-1 order-10">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">ord10</p>
        </div>
        <div class="column size-1 order-9">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">ord9</p>
        </div>
        <div class="column size-1 order-8">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">ord8</p>
        </div>
        <div class="column size-1 order-7">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">ord7</p>
        </div>
        <div class="column size-1 order-1">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">ord1</p>
        </div>
        <div class="column size-1 order-2">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">ord2</p>
        </div>
        <div class="column size-1 order-3">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">ord3</p>
        </div>
        <div class="column size-1 order-4">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">ord4</p>
        </div>
        <div class="column size-1 order-5">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">ord5</p>
        </div>
        <div class="column size-1 order-6">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">ord6</p>
        </div>
      </div>
    </div>
  </body>
</html>
```

> Column just usage
```html
<html>
  <head>
    <meta charset="utf-8" />
    <title>test.html</title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>
  <body>
    <div class="container">
      <div class="columns just-left">
        <div class="column size-3">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">Left1</p>
        </div>
        <div class="column size-3">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">Left2</p>
        </div>
        <div class="column size-3">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">Left3</p>
        </div>
      </div>

      <div class="columns just-center">
        <div class="column size-3 order-12">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">Center1</p>
        </div>
        <div class="column size-3 order-11">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">Center2</p>
        </div>
        <div class="column size-3 order-10">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">Center3</p>
        </div>
      </div>

      <div class="columns just-right">
        <div class="column size-3 order-12">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">Right1</p>
        </div>
        <div class="column size-3 order-11">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">Right2</p>
        </div>
        <div class="column size-3 order-10">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">Right3</p>
        </div>
      </div>
    </div>
  </body>
</html>
```

> Column align usage
```html
<html>
  <head>
    <meta charset="utf-8" />
    <title>test.html</title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>
  <body>
    <div class="container">
      <div class="columns align-top" style="border:gray 1px solid; min-height: 10rem;">
        <div class="column size-4">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">Top1</p>
        </div>
        <div class="column size-4">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">Top2</p>
        </div>
        <div class="column size-4">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">Top3</p>
        </div>
      </div>

      <div class="columns align-mid " style="border:gray 1px solid; min-height: 10rem;" >
        <div class="column size-4 order-12">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">Mid1</p>
        </div>
        <div class="column size-4 order-11">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">Mid2</p>
        </div>
        <div class="column size-4 order-10">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">Mid3</p>
        </div>
      </div>

      <div class="columns align-bottom " style="border:gray 1px solid; min-height: 10rem;" >
        <div class="column size-4 order-12">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">Bottom1</p>
        </div>
        <div class="column size-4 order-11">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">Bottom2</p>
        </div>
        <div class="column size-4 order-10">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">Bottom3</p>
        </div>
      </div>
    </div>
  </body>
</html>
```

> Column interval usage
```html
<html>
  <head>
    <meta charset="utf-8" />
    <title>test.html</title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>
  <body>
    <div class="container">
      <div class="columns interval-1">
        <div class="column size-4">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">interval1</p>
        </div>
        <div class="column size-4">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">interval1</p>
        </div>
        <div class="column size-4">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">interval1</p>
        </div>
      </div>

      <div class="columns  interval-2" >
        <div class="column size-4 order-12">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">interval2</p>
        </div>
        <div class="column size-4 order-11">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">interval2</p>
        </div>
        <div class="column size-4 order-10">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">interval2</p>
        </div>
      </div>

      <div class="columns  interval-3" >
        <div class="column size-4 order-12">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">interval3</p>
        </div>
        <div class="column size-4 order-11">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">interval3</p>
        </div>
        <div class="column size-4 order-10">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">interval3</p>
        </div>
      </div>
    </div>
  </body>
</html>
```

> Column static(non-responsive) usage
```html
<html>
  <head>
    <meta charset="utf-8" />
    <title>test.html</title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>
  <body>
    <div class="container">
      <div class="columns">
        <div class="column size-4">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">responsive</p>
        </div>
        <div class="column size-4">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">responsive</p>
        </div>
        <div class="column size-4">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">responsive</p>
        </div>
      </div>

      <div class="columns  static" >
        <div class="column size-4 order-12">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">non responsive</p>
        </div>
        <div class="column size-4 order-11">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">non responsive</p>
        </div>
        <div class="column size-4 order-10">
          <p class="outset-neomo m-1 p-2" style="text-align:center;">non responsive</p>
        </div>
      </div>

    </div>
  </body>
</html>
```