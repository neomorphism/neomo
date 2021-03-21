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


> Simple Button usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="../src/neomo.css" />
  </head>
  <body>
    <div class="container">
        <button class="neo-button mt-10">마우스를 가져와보세요</button>
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
              src="http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg" alt="Card image cap"
            >
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                here is an card contents 
                write some texts
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
  </body>
</html>
```

> Simple Dropdown usage

````html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="../src/neomo.css" />
  </head>
  <body class="p-2">
    <div class="dropdown">
      <button class="dropdown-button">Dropdown</button>
      <div class="dropdown-content">
        <a href="#">HTML</a>
        <a href="#">CSS</a>
        <a href="#">JAVA</a>
        <a href="#">C++</a>
      </div>
    </div>
  </body>
</html>

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
````
