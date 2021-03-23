# Components

## Table Information

> Simple Table usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="../src/neomo.css" />
  </head>
  <body>
    <div class="container">
      <table class="table mt-10">
        <thead>
          <tr>
            <th>Head 1</th>
            <th>Head 2</th>
            <th>Head 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>row 1</td>
            <td>row 2</td>
            <td>row 3</td>
          </tr>
          <tr>
            <td>row 1</td>
            <td>row 2</td>
            <td>row 3</td>
          </tr>
          <tr>
            <td>row 1</td>
            <td>row 2</td>
            <td>row 3</td>
          </tr>
          <tr>
            <td>row 1</td>
            <td>row 2</td>
            <td>row 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>
```

## Button Information

> Simple Button usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="../src/neomo.css" />
  </head>

  <body>
    <div class="container bg-gray">
      <button class="button gray m-10">기본 버튼</button>
      <br />
      <button class="button gray square m-10">사각형 버튼</button>
      <br />
    </div>
    <br />
    <div class="container bg-dark">
      <button class="button dark small m-10">small</button>
      <button class="button dark normal m-10">normal</button>
      <button class="button dark medium m-10">medium</button>
      <button class="button dark large m-10">large</button>
      <br />
    </div>
    <br />
    <div class="container bg-blue">
      <button class="button blue m-10">파란색 기본 버튼</button>
      <br />
      <button class="button blue square blue m-10">파란색 사각형 버튼</button>
      <br />
    </div>
  </body>
</html>
```

## Navigation Information

> Naviagtion usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" href="../src/components/navigation.css" />
  </head>
  <body>
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
  </body>
</html>
```

> Naviagtion column usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" href="../src/components/navigation.css" />
  </head>

  <body>
    <ul class="nav-cloumn">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
  </body>
</html>
```

## Card Information

> Simple card usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" href="../src/components/navigation.css" />
  </head>
  <body>
    <div class="container">
      <div class="card" style="width: 18rem;">
        <img
          class="card-img-top"
          src="http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">here is an card contents write some texts</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </body>
</html>
```

## Dropdown Information

> Simple Dropdown usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="../src/neomo.css" />
  </head>
  <body class="p-2">
    <div class="dropdown">
      <button class="dropdown-button gray">Dropdown</button>
      <div class="dropdown-content">
        <a href="#">HTML</a>
        <a href="#">CSS</a>
        <a href="#">JAVA</a>
        <a href="#">C++</a>
      </div>
    </div>
  </body>
</html>
```

## Pagination Information

> Simple Pagination usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="../src/neomo.css" />
  </head>
  <body class="p-2">
    <div class="pagination">
      <ul class="pagination-list">
        <li><a href="#">Previous</a></li>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">6</a></li>
        <li><a href="#">7</a></li>
        <li><a href="#">8</a></li>
        <li><a href="#">Next</a></li>
      </ul>
    </div>
  </body>
</html>
```

## Modal Information

> Simple Modal usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="../src/neomo.css" />
  </head>
  <body class="p-2">
    <!-- Open example modal-->
    <button id="ModalBtn" class="button gray">Open example modal</button>
    <div id="Modal" class="modal">
      <div class="modal-content gray">
        <span class="modal-close">&times;</span>
        <p>Any other element you want</p>
      </div>
    </div>

    <script type="text/javascript" src="../src/neomo.js"></script>
  </body>
</html>
```

> Simple Pressed Modal usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="../src/neomo.css" />
  </head>
  <body class="p-2">
    <!-- Open pressed modal-->
    <button id="ModalBtn2" class="button gray">Open pressed modal</button>
    <div id="Modal2" class="modal">
      <div class="modal-content gray-pressed">
        <span class="modal-close">&times;</span>
        <p>Any other element you want</p>
      </div>
    </div>

    <script type="text/javascript" src="../src/neomo.js"></script>
  </body>
</html>
```

> Image Modal usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="../src/neomo.css" />
  </head>
  <body class="p-2">
    <!-- Open image modal-->
    <button id="ModalBtn3" class="button gray">Open image modal</button>
    <div id="Modal3" class="modal">
      <div class="modal-content gray">
        <span class="modal-close">&times;</span>
        <p class="image">
          <img
            src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </p>
      </div>
    </div>

    <script type="text/javascript" src="../src/neomo.js"></script>
  </body>
</html>
```

> Card Modal usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="../src/neomo.css" />
  </head>
  <body class="p-2">
    <button id="ModalBtn4" class="button gray">Open card modal</button>
    <div id="Modal4" class="modal">
      <div class="modal-card-sm gray">
        <span class="modal-close">&times;</span>
        <img
          class="card-img-top"
          src="http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">here is an card contents write some texts</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>

    <script type="text/javascript" src="../src/neomo.js"></script>
  </body>
</html>
```

<!-- 아래는 color.css 적용해본 테스트 코드 -->

<!-- <!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="../src/neomo.css" />
  </head>
  <body class="p-2">
    <div class="pagination gray">
      <ul class="pagination-list">
        <li class="gray"><a href="#">Previous</a></li>
        <li class="gray"><a href="#">1</a></li>
        <li class="gray"><a href="#">2</a></li>
        <li class="gray"><a href="#">3</a></li>
        <li class="gray"><a href="#">4</a></li>
        <li class="gray"><a href="#">5</a></li>
        <li class="gray"><a href="#">6</a></li>
        <li class="gray"><a href="#">7</a></li>
        <li class="gray"><a href="#">8</a></li>
        <li class="gray"><a href="#">Next</a></li>
      </ul>
    </div>
  </body>
</html> -->

```

```
