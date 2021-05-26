# Components

## Alert Information

> Alert usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>
  <body class="neomo">
    <div class="alert outset-neomo" role="alert">This is alert!</div>
  </body>
</html>
```

> Alert inset usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>
  <body class="neomo">
    <div class="alert inset-neomo" role="alert">This is alert!</div>
  </body>
</html>
```

> Alert colors

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>
  <body class="neomo">
    <div class="alert outset-neomo info" role="alert">This color is info!</div>
    <div class="alert outset-neomo success" role="alert">
      This color is success!
    </div>
    <div class="alert outset-neomo danger" role="alert">
      This color is danger!
    </div>
    <div class="alert outset-neomo warning" role="alert">
      This color is warning!
    </div>
  </body>
</html>
```

> Alert dismissing

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>
  <body class="neomo">
    <div class="outset-neomo alert" role="alert">
      <span
        ><strong>Well done!</strong> You successfully read this important alert
        message.</span
      >
      <span class="alt-close">X</span>
    </div>
    <script type="text/javascript" src="/js/neomo.js"></script>
  </body>
</html>
```

## Badge Information

> Badge usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>
  <body class="neomo">
    <span class="badge outset-neomo">NEOMO</span>
    <span class="badge inset-neomo">NEOMO</span>
  </body>
</html>
```

> Badge colors

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>
  <body class="neomo">
    <span class="badge outset-neomo info">NEOMO</span>
    <span class="badge outset-neomo success">NEOMO</span>
    <span class="badge outset-neomo danger">NEOMO</span>
    <span class="badge outset-neomo warning">NEOMO</span>
  </body>
</html>
```

> Badge size

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>
  <body class="neomo">
    <span class="badge outset-neomo badge-sm">NEOMO</span>
    <span class="badge outset-neomo badge-md">NEOMO</span>
    <span class="badge outset-neomo badge-rg">NEOMO</span>
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
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>

  <body>
    <div class="container">
      <br />
      <button class="button m-10">Default Button</button>
      <br />
      <button class="button square m-10">Square Button</button>
      <br />
    </div>
    <br />
    <div class="container gray">
      <br />
      <button class="button outset-gray m-10">Default Button</button>
      <br />
      <button class="button outset-gray square m-10">Square Button</button>
      <br />
    </div>
    <br />
    <div class="container dark">
      <br />
      <button class="button outset-dark small m-10">small</button>
      <button class="button outset-dark normal m-10">normal</button>
      <button class="button outset-dark medium m-10">medium</button>
      <button class="button outset-dark large m-10">large</button>
      <br />
    </div>
    <br />
    <div class="container neomo">
      <br />
      <button class="button outset-neomo m-10">Blue Button</button>
      <br />
      <button class="button outset-neomo square blue m-10">
        Blue Square Button
      </button>
      <br />
    </div>
  </body>
</html>
```

## Select Information

> Select usage

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>
  <body class="neomo">
    <select class="outset-neomo">
      <option selected>This is select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <select class="inset-neomo">
      <option selected>This is select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </body>
</html>
```

> Select colors

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>
  <body class="neomo">
    <select class="outset-neomo info">
      <option selected>This is select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <select class="outset-neomo success">
      <option selected>This is select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <select class="outset-neomo danger">
      <option selected>This is select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <select class="outset-neomo warning">
      <option selected>This is select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </body>
</html>
```

> multiple select example

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>
  <body class="neomo">
    <select multiple class="outset-neomo">
      <option selected>This is select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </body>
</html>
```

## Spinners Information

> Simple Spinners usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>

  <body>
    <div class="container gray">
      <br />
      <button class="button outset-gray m-10">
        <div class="loader border-white point-purple"></div>
      </button>
      <br />
    </div>
    <br />
    <div class="container dark">
      <br />
      <button class="button outset-dark small m-10">
        small&nbsp;
        <div class="loader border-white point-gray"></div>
      </button>
      <button class="button outset-dark normal m-10">
        normal&nbsp;
        <div class="loader border-white point-gray"></div>
      </button>
      <button class="button outset-dark medium m-10">
        medium&nbsp;
        <div class="loader border-white point-gray"></div>
      </button>
      <button class="button outset-dark large m-10">
        large&nbsp;
        <div class="loader border-white point-gray"></div>
      </button>
      <br />
    </div>
    <br />
    <div class="container neomo">
      <br />
      <button class="button outset-neomo m-10">
        <div class="loader border-gray point-blue"></div>
      </button>
      <br />
    </div>
  </body>
</html>
```

## Navigation Information

> Naviagtion usage 1

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" href="/css/neomo.css" />
  </head>
  <body>
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
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

> Naviagtion usage 2

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" href="/css/neomo.css" />
  </head>
  <body>
    <ul class="nav">
      <a class="nav-link" href="#">Link</a>

      <a class="nav-link" href="#">Link</a>

      <a class="nav-link" href="#">Link</a>

      <a class="nav-link disabled">Disabled</a>
    </ul>
  </body>
</html>
```

> Naviagtion animation usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" href="/css/neomo.css" />
  </head>
  <body>
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link--animation" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link--animation" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link--animation" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link--animation disabled">Disabled</a>
      </li>
    </ul>
  </body>
</html>
```

> Naviagtion vertical usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" href="/css/neomo.css" />
  </head>

  <body>
    <ul class="nav-column">
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
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
    <meta charset="utf-8" />
    <title>test.html</title>
    <link rel="stylesheet" type="text/css" href="src/neomo.css" />
  </head>
  <body>
    <div class="card" style="width: 18rem;">
      <header class="card-header">
        <p class="card-header-title">Component</p>
      </header>
      <div class="card-image">
        <img
          src="https://bulma.io/images/placeholders/1280x960.png"
          alt="Placeholder image"
        />
      </div>
      <div class="card-content">
        <div>
          <div>
            <img
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder image"
            />
          </div>
          <div>
            <p>WOJCIECH SZCZĘSNY</p>
            <p>@SZCZĘSNY</p>
          </div>
        </div>

        <div>
          Blessed with outstanding agility and athleticism, Wojciech Szczesny’s
          charisma and class also makes him one of the game’s great
          personalities. <a>@seasons</a>. <a href="#">#css</a>
          <a href="#">#responsive</a>
          <br />
          <time datetime="1990-4-18"
            >saw him concede just nine goals in 21 appearances across all
            competitions, 2017/18</time
          >
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Save</a>
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </body>
</html>
```

## Dropdown Information

> Dropdown usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
      rel="stylesheet"
    />
  </head>
  <body class="neomo">
    <div class="dropdown">
      <button class="dropdown-button outset-neomo">
        Dropdown
        <i class="fa fa-caret-down"></i>
      </button>
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

> Dropdown Content usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
      rel="stylesheet"
    />
  </head>
  <body class="neomo">
    <div class="dropdown">
      <button class="dropdown-button outset-neomo">
        Dropdown Content
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <div class="dropdown-content--item">
          <p>
            You can insert any type of content with dropdown-content--item
            class.
          </p>
        </div>
        <a href="#">HTML</a>
        <a href="#">CSS</a>
        <a href="#">JAVA</a>
      </div>
    </div>
  </body>
</html>
```

> Dropdown Toggle usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
      rel="stylesheet"
    />
  </head>
  <body class="neomo">
    <div class="dropdown-toggle">
      <button
        data-dropdown-id="dropdown"
        class="dropdown-toggle--button outset-neomo"
      >
        Toggle
        <i class="fa fa-caret-down"></i>
      </button>
      <div data-dropdown-id="dropdown" class="dropdown-toggle--content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>

    <script type="text/javascript" src="/js/neomo.js"></script>
  </body>
</html>
```

## Pagination Information

> Pagination usage

```html
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
      rel="stylesheet"
    />
  </head>
  <body class="container p-2 neomo">
    <ul class="pagination">
      <li><a href="#">Previous</a></li>
      <li><a href="#">1</a></li>
      <li><a href="#" class="active">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">4</a></li>
      <li><a href="#">5</a></li>
      <li><a href="#">6</a></li>
      <li><a href="#">Next</a></li>
    </ul>
  </body>
</html>
```

> Pagination disabled usage

```html
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
      rel="stylesheet"
    />
  </head>
  <body class="container neomo">
    <ul class="pagination">
      <li><a href="#" class="disabled">Previous</a></li>
      <li><a href="#">1</a></li>
      <li><a href="#" class="active">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">4</a></li>
      <li><a href="#">5</a></li>
      <li><a href="#">6</a></li>
      <li><a href="#">Next</a></li>
    </ul>
  </body>
</html>
```

> Pagination with Icon usage

```html
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
      rel="stylesheet"
    />
  </head>
  <body class="container neomo">
    <ul class="pagination">
      <li>
        <a href="#"><span class="fas fa-angle-double-left"></span></a>
      </li>
      <li><a href="#">1</a></li>
      <li><a href="#" class="active">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">4</a></li>
      <li><a href="#">5</a></li>
      <li><a href="#">6</a></li>
      <li>
        <a href="#"><span class="fas fa-angle-double-right"></span></a>
      </li>
    </ul>
  </body>
</html>
```

> Round Pagination usage

```html
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
      rel="stylesheet"
    />
  </head>
  <body class="container neomo">
    <ul class="pagination-round">
      <li>
        <a href="#"><span class="fas fa-angle-double-left"></span></a>
      </li>
      <li><a href="#">1</a></li>
      <li><a href="#" class="active">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">4</a></li>
      <li><a href="#">5</a></li>
      <li><a href="#">6</a></li>
      <li>
        <a href="#"><span class="fas fa-angle-double-right"></span></a>
      </li>
    </ul>
  </body>
</html>
```

## Modal Information

> Ouset Modal usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>
  <body class="neomo">
    <div class="columns just-center">
      <div class="column size-10">
        <button data-modal-id="modal" class="modal-button outset-neomo">
          MODAL Button
        </button>
      </div>
      <div data-modal-id="modal" class="modal">
        <div class="modal-content--md outset-neomo">
          <span class="modal-close">&times;</span>
          <p>You can insert any type of content with this modal class.</p>
        </div>
      </div>
    </div>

    <script type="text/javascript" src="/js/neomo.js"></script>
  </body>
</html>
```

> Inset Modal usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>
  <body class="neomo">
    <div class="columns just-center">
      <div class="column size-10">
        <button data-modal-id="modal2" class="modal-button outset-neomo">
          MODAL Button
        </button>
      </div>
      <div data-modal-id="modal2" class="modal">
        <div class="modal-content--md inset-neomo">
          <span class="modal-close">&times;</span>
          <p>You can insert any type of content with this modal class.</p>
        </div>
      </div>
    </div>

    <script type="text/javascript" src="/js/neomo.js"></script>
  </body>
</html>
```

> Middle Card Modal usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>
  <body class="neomo">
    <button data-modal-id="modal3" class="modal-button outset-neomo">
      Middle Card MODAL
    </button>
    <div data-modal-id="modal3" class="modal">
      <div class="modal-content--md outset-neomo">
        <span class="modal-close">&times;</span>
        <header class="card-header">
          <p class="card-header-title">Modal Card</p>
        </header>
        <div class="column size-10 text-center ml-10" style="margin: 0 auto">
          <div class="card-image">
            <img
              src="https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
              alt="Placeholder image"
              style="border-radius: 0"
            />
          </div>
          <div class="card-content">
            <p class="font-size-4 profile-link text-left m-0">
              <img
                class="img-profile p-0"
                src="https://images.unsplash.com/profile-1609856653329-a9e174ff28b6image?auto=format&amp;fit=crop&amp;w=32&amp;h=32&amp;q=60&amp;crop=faces&amp;bg=fff"
                width="32"
                height="32"
                role="presentation"
                alt="Go to Julian Steenbergen's profile"
              />

              Julian Steenbergen
            </p>
            <p class="text-left">
              I'm actually a musician, but photography is just too fun. It
              brings me joy, inspiration and peace. Happy to support the
              community here with my work! ✨
            </p>
            <p class="text-left">
              <i class="fas fa-calendar-week"></i>
              Published on May 9, 2021
            </p>
            <p class="text-left">
              <i class="fas fa-shield-alt"></i>
              Free to use under the Unsplash License
            </p>
          </div>
        </div>
      </div>
    </div>

    <script type="text/javascript" src="/js/neomo.js"></script>
  </body>
</html>
```

> Small Card Modal usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>
  <body class="neomo">
    <button data-modal-id="modal4" class="modal-button outset-neomo">
      Small Card MODAL
    </button>
    <div data-modal-id="modal4" class="modal">
      <div class="modal-content--sm outset-neomo">
        <span class="modal-close">&times;</span>
        <header class="card-header">
          <p class="card-header-title">Modal Card</p>
        </header>
        <div class="column size-10 text-center ml-10" style="margin: 0 auto">
          <div class="card-image">
            <img
              src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Placeholder image"
              style="border-radius: 0"
            />
          </div>
          <div class="card-content">
            <p class="font-size-4 profile-link text-left m-0">
              <img
                class="img-profile p-0"
                src="https://images.unsplash.com/profile-1609856653329-a9e174ff28b6image?auto=format&amp;fit=crop&amp;w=32&amp;h=32&amp;q=60&amp;crop=faces&amp;bg=fff"
                width="32"
                height="32"
                role="presentation"
                alt="Go to Julian Steenbergen's profile"
              />

              Julian Steenbergen
            </p>
            <p class="text-left">
              I'm actually a musician, but photography is just too fun. It
              brings me joy, inspiration and peace. Happy to support the
              community here with my work! ✨
            </p>
            <p class="text-left">
              <i class="fas fa-calendar-week"></i>
              Published on May 9, 2021
            </p>
            <p class="text-left">
              <i class="fas fa-shield-alt"></i>
              Free to use under the Unsplash License
            </p>
          </div>
        </div>
      </div>
    </div>

    <script type="text/javascript" src="/js/neomo.js"></script>
  </body>
</html>
```

## Progress Bar Information

> Progress Bar usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>
  <body class="p-2">
    <div class="columns">
      <div class="column size-3">
        <h2>Choose your color</h2>
        <span>success</span>
        <div class="progress">
          <div class="progress-bar success" style="width: 60%;"></div>
        </div>
        <span>info</span>
        <div class="progress">
          <div class="progress-bar info" style="width: 60%;"></div>
        </div>
        <span>danger</span>
        <div class="progress">
          <div class="progress-bar danger" style="width: 60%;"></div>
        </div>
        <span>dark</span>
        <div class="progress">
          <div class="progress-bar dark" style="width: 60%;"></div>
        </div>
        <span>gray</span>
        <div class="progress">
          <div class="progress-bar gray" style="width: 60%;"></div>
        </div>
      </div>
    </div>
  </body>
</html>
```

## Icon Information

> icon usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" href="../neomo.css" />
  </head>

  <body>
    <div class="icon">
      <i class="fas fa-home"></i>
    </div>
  </body>
</html>
```

> icon small usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" href="../neomo.css" />
  </head>

  <body>
    <div class="icon-sm">
      <i class="fas fa-home"></i>
    </div>
  </body>
</html>
```

> icon large usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" href="../neomo.css" />
  </head>

  <body>
    <div class="icon-lg">
      <i class="fas fa-home"></i>
    </div>
  </body>
</html>
```

> circle icon usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" href="../neomo.css" />
  </head>

  <body>
    <div class="icon-circle">
      <i class="fas fa-home"></i>
    </div>
  </body>
</html>
```

## Tab Information

> Outset Tab usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>

  <body class="container neomo">
    <div class="tab">
      <ul class="tab-list">
        <li><a class="current" id="tab-1">tab1</a></li>
        <li><a id="tab-2">tab2</a></li>
        <li><a id="tab-3">tab3</a></li>
      </ul>
      <div class="columns">
        <div class="column size-8">
          <ul class="tab-content outset-neomo">
            <li id="content-1" class="tab-content--list">
              <div class="tab-content--title">title1</div>
              <div class="tab-content--text">
                You can insert any type of content with this tab class.
              </div>
            </li>
            <li id="content-2" class="tab-content--list">
              <div class="tab-content--title">title2</div>
              <div class="tab-content--text">
                You can insert any type of content with this tab class.
              </div>
            </li>
            <li id="content-3" class="tab-content--list">
              <div class="tab-content--title">title3</div>
              <div class="tab-content--text">
                You can insert any type of content with this tab class.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <script type="text/javascript" src="/js/neomo.js"></script>
  </body>
</html>
```

> Inset Tab usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>

  <body class="container neomo">
    <div class="tab">
      <ul class="tab-list">
        <li><a class="current" id="tab-4">tab4</a></li>
        <li><a id="tab-5">tab5</a></li>
        <li><a id="tab-6">tab6</a></li>
      </ul>
      <div class="columns">
        <div class="column size-8">
          <ul class="tab-content inset-neomo">
            <li id="content-4" class="tab-content--list">
              <div class="tab-content--title">title4</div>
              <div class="tab-content--text">
                You can insert any type of content with this tab class.
              </div>
            </li>
            <li id="content-5" class="tab-content--list">
              <div class="tab-content--title">title5</div>
              <div class="tab-content--text">
                You can insert any type of content with this tab class.
              </div>
            </li>
            <li id="content-6" class="tab-content--list">
              <div class="tab-content--title">title6</div>
              <div class="tab-content--text">
                You can insert any type of content with this tab class.
            </li>
          </ul>
        </div>
      </div>
    </div>

    <script type="text/javascript" src="/js/neomo.js"></script>
  </body>
</html>
```

> Vertical Tab usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>

  <body class="container neomo">
    <div class="tab vertical">
      <div class="columns">
        <div class="column size-2">
          <ul class="tab-list">
            <li><a class="current" id="tab-7">tab7</a></li>
            <li><a id="tab-8">tab8</a></li>
            <li><a id="tab-9">tab9</a></li>
          </ul>
        </div>
        <div class="column size-4">
          <ul class="tab-content inset-neomo">
            <li id="content-7" class="tab-content--list">
              <div class="tab-content--title">title7</div>
              <div class="tab-content--text">
                You can insert any type of content with this tab class.
              </div>
            </li>
            <li id="content-8" class="tab-content--list">
              <div class="tab-content--title">title8</div>
              <div class="tab-content--text">
                You can insert any type of content with this tab class.
              </div>
            </li>
            <li id="content-9" class="tab-content--list">
              <div class="tab-content--title">title9</div>
              <div class="tab-content--text">
                You can insert any type of content with this tab class.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <script type="text/javascript" src="/js/neomo.js"></script>
  </body>
</html>
```

## Navbar Information

> navbar usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" href="/css/neomo.css" />
  </head>

  <body class="neomo">
    <div class="navbar" style="margin: 0 auto">
      <div>
        <button class="toggle-button">List1</button>
        <div class="toggle-content">
          <a href="#">Link1</a>
          <a href="#">Link2</a>
          <a href="#">Link3</a>
        </div>
      </div>
      <div>
        <button class="toggle-button">List2</button>
        <div class="toggle-content">
          <a href="#">Link1</a>
          <a href="#">Link2</a>
          <a href="#">Link3</a>
        </div>
      </div>
      <div>
        <button class="toggle-button">List3</button>
        <div class="toggle-content">
          <a href="#">Link1</a>
          <a href="#">Link2</a>
          <a href="#">Link3</a>
        </div>
      </div>
    </div>

    <script type="text/javascript" src="/js/neomo.js"></script>
  </body>
</html>
```

## Toast Information

> toast Outset usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" href="/css/neomo.css" />
  </head>

  <body class="neomo">
    <div class="toast show outset-neomo">
      <div class="toast-header">
        <strong class="font-size-5">Neomo</strong>
        <small class="mr-2 ml-auto">12 mins ago</small>
        <span class="toast-close">X</span>
      </div>
      <div class="toast-body text-center">
        Hello, world! This is a toast message.
      </div>
    </div>

    <script type="text/javascript" src="/js/neomo.js"></script>
  </body>
</html>
```

> toast Inset usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" href="/css/neomo.css" />
  </head>

  <body class="neomo">
    <div class="toast show inset-neomo">
      <div class="toast-header">
        <strong class="font-size-5">Neomo</strong>
        <small class="mr-2 ml-auto">12 mins ago</small>
        <span class="toast-close">X</span>
      </div>
      <div class="toast-body text-center">
        Hello, world! This is a toast message.
      </div>
    </div>

    <script type="text/javascript" src="/js/neomo.js"></script>
  </body>
</html>
```

## Tooltips Information

> tooltips usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>

  <body>
    <div class="container neomo">
      <h1>Tooltip Example</h1>
      <br />
      <br />
      <br />
      <div class="tooltip neomo">
        Hover here!
        <span class="tooltip-content top outset-neomo"> tooltip! </span>
      </div>
      <br />
      <br />
      <br />
      <div class="tooltip neomo">
        Hover here!
        <span class="tooltip-content outset-neomo right"> tooltip! </span>
      </div>
      <br />
      <br />
      <br />
      <div class="tooltip neomo">
        Hover here!
        <span class="tooltip-content top outset-neomo"> tooltip! </span>
      </div>
      <br />
      <br />
      <br />
      <div class="tooltip neomo">
        Hover here!
        <span class="tooltip-content left outset-neomo"> tooltip! </span>
      </div>
      <br />
      <br />
      <br />
      <div class="tooltip neomo">
        Hover here!
        <span class="tooltip-content right outset-neomo"> tooltip! </span>
      </div>
    </div>
  </body>
</html>
```

## Breadcrumb Information

> Breadcrumb-basic usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>
  <body>
    <div class="container">
      <div class="columns">
        <div class="column size-6">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <a href="#">
                  <span>Neomo</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Documentation</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Components</span>
                </a>
              </li>
              <li class="is-active">
                <a href="#" aria-current="page">
                  <span>Breadcrumb</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </body>
</html>
```

> Breadcrumb-centered usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>
  <body>
    <div class="container">
      <div class="columns">
        <div class="column size-6">
          <nav class="breadcrumb centered" aria-label="breadcrumbs">
            <ul>
              <li>
                <a href="#">
                  <div class="icon-circle icon-sm">
                    <i class="fas fa-home fa-sm"></i>
                  </div>
                  <span>Neomo</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="icon-circle icon-sm">
                    <i class="fas fa-file-alt fa-sm"></i>
                  </div>
                  <span>Documentation</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="icon-circle icon-sm">
                    <i class="fas fa-database fa-sm"></i>
                  </div>
                  <span>Components</span>
                </a>
              </li>
              <li class="is-active">
                <a href="#" aria-current="page">
                  <div class="icon-circle icon-sm">
                    <i class="fas fa-bread-slice fa-sm"></i>
                  </div>
                  <span>Breadcrumb</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </body>
</html>
```

> Breadcrumb-right usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>
  <body>
    <div class="container">
      <div class="columns">
        <div class="column size-6">
          <nav class="breadcrumb right" aria-label="breadcrumbs">
            <ul>
              <li>
                <a href="#">
                  <div class="icon-circle icon-sm">
                    <i class="fas fa-home fa-sm"></i>
                  </div>
                  <span>Neomo</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="icon-circle icon-sm">
                    <i class="fas fa-file-alt fa-sm"></i>
                  </div>
                  <span>Documentation</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="icon-circle icon-sm">
                    <i class="fas fa-database fa-sm"></i>
                  </div>
                  <span>Components</span>
                </a>
              </li>
              <li class="is-active">
                <a href="#" aria-current="page">
                  <div class="icon-circle icon-sm">
                    <i class="fas fa-bread-slice fa-sm"></i>
                  </div>
                  <span>Breadcrumb</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </body>
</html>
```

> Breadcrumb-arrow usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>
  <body>
    <div class="container">
      <div class="columns">
        <div class="column size-6">
          <nav class="breadcrumb centered arrow" aria-label="breadcrumbs">
            <ul>
              <li>
                <a href="#">
                  <div class="icon-circle icon-sm">
                    <i class="fas fa-home fa-sm"></i>
                  </div>
                  <span>Neomo</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="icon-circle icon-sm">
                    <i class="fas fa-file-alt fa-sm"></i>
                  </div>
                  <span>Documentation</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="icon-circle icon-sm">
                    <i class="fas fa-database fa-sm"></i>
                  </div>
                  <span>Components</span>
                </a>
              </li>
              <li class="is-active">
                <a href="#" aria-current="page">
                  <div class="icon-circle icon-sm">
                    <i class="fas fa-bread-slice fa-sm"></i>
                  </div>
                  <span>Breadcrumb</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </body>
</html>
```

> Breadcrumb-direction usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="/css/neomo.css" />
  </head>
  <body>
    <div class="container">
      <div class="columns">
        <div class="column size-6">
          <nav class="breadcrumb centered direction" aria-label="breadcrumbs">
            <ul>
              <li>
                <a href="#">
                  <div class="icon-circle icon-sm">
                    <i class="fas fa-home fa-sm"></i>
                  </div>
                  <span>Neomo</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="icon-circle icon-sm">
                    <i class="fas fa-file-alt fa-sm"></i>
                  </div>
                  <span>Documentation</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="icon-circle icon-sm">
                    <i class="fas fa-database fa-sm"></i>
                  </div>
                  <span>Components</span>
                </a>
              </li>
              <li class="is-active">
                <a href="#" aria-current="page">
                  <div class="icon-circle icon-sm">
                    <i class="fas fa-bread-slice fa-sm"></i>
                  </div>
                  <span>Breadcrumb</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </body>
</html>
```
