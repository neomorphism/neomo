# Forms

## Checkbox Information

> Checkbox usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title></title>
    <link rel="stylesheet" type="text/css" href="../src/neomo.css" />
  </head>
  <body class="neomo">
    <input
      class="checkbox-input outset-neomo"
      type="checkbox"
      value=""
      id="check1"
    />
    <label class="checkbox-label" for="check1">This is checkbox.</label>
  </body>
</html>
```

## File Information

> File usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="../src/neomo.css" />
  </head>
  <body class="container neomo">
    <div class="file">
      <input class="file-name" value="Choose a file..." disabled="disabled" />
      <label for="file-label">Upload</label>
      <input type="file" id="file-label" class="file-hidden" />
    </div>

    <script type="text/javascript" src="../src/neomo.js"></script>
  </body>
</html>
```

## Input Information

> Input usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="../src/neomo.css" />
    <script
      src="https://kit.fontawesome.com/6ad71d6444.js"
      crossorigin="anonymous"
    ></script>
  </head>

  <body>
    <div class="container bg-gray">
      <br />
      <input
        class="input outset-gray"
        type="text"
        disabled
        placeholder="Disabled"
      />
      <input
        class="input square outset-gray"
        type="text"
        placeholder="Square Input"
      />
      <input
        class="input rounded outset-gray"
        type="text"
        placeholder="Rounded Input"
      />
      <br />
    </div>
    <div class="container bg-dark">
      <br />
      <input
        class="input outset-dark small"
        type="text"
        placeholder="Small Input"
      />
      <br />
      <input class="input outset-dark" type="text" placeholder="Normal Input" />
      <br />
      <input
        class="input outset-dark medium"
        type="text"
        placeholder="Medium Input"
      />
      <br />
      <input
        class="input outset-dark large"
        type="text"
        placeholder="Large Input"
      />
      <br />
    </div>
    <div class="container bg-blue">
      <br />
      <span class="left-icon">
        <i class="far fa-envelope fa-lg icon"></i>
        <input class="input outset-blue" type="email" placeholder="email" />
      </span>
      <br />
      <span class="right-icon">
        <i class="fas fa-lock fa-lg icon"></i>
        <input
          class="input outset-blue"
          type="password"
          placeholder="password"
        />
      </span>
    </div>
  </body>
</html>
```

> Input Group usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="../src/neomo.css" />
  </head>

  <body>
    <div class="container p-5">
      <br />
      <div class="input-group">
        <span class="input-group-left text-center">@</span>
        <input type="text" class="input-group-right" placeholder="Username" />
      </div>
      <br />
    </div>
    <br />
    <div class="container neomo p-5">
      <br />
      <div class="input-group neomo">
        <span class="input-group-left text-center">@</span>
        <input
          type="text"
          class="input-group-right outset-neomo"
          placeholder="Username"
        />
      </div>
      <br />
    </div>
    <br />
    <div class="container gray p-5">
      <br />
      <div class="input-group outset-gray">
        <input
          type="text"
          class="input-group-left outset-gray"
          placeholder="Username"
        />
        <span class="input-group-right text-center">@</span>
      </div>
      <br />
    </div>
    <br />
    <div class="container dark p-5">
      <br />
      <div class="input-group outset-dark">
        <input
          type="text"
          class="input-group-left outset-dark"
          placeholder="Username"
        />
        <span class="input-group-right text-center">@</span>
      </div>
      <br />
    </div>
  </body>
</html>
```

## Radio Information

> Radio usage

```html
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <link rel="stylesheet" type="text/css" href="../src/neomo.css" />
  </head>
  <body class="neomo">
    <div>
      <div>
        <input
          class="radio-input outset-neomo"
          type="radio"
          name="exam-radio2"
          value=""
          id="radio3"
        />
        <label class="radio-label" for="radio3">this is radio. 'option1'</label>
      </div>
      <div>
        <input
          class="radio-input outset-neomo"
          type="radio"
          name="exam-radio2"
          value=""
          id="radio4"
        />
        <label class="radio-label" for="radio4">this is radio. 'option2'</label>
      </div>
    </div>
  </body>
</html>
```

## Range Information

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <link rel="stylesheet" type="text/css" href="../src/neomo.css" />
  </head>
  <body>
    <div>example</div>
    <input type="range" min="1" max="100" class="range-round" id="myRange" />
    <p>Value: <span id="demo"></span></p>
  </body>
</html>
```

## Label Information

> Floating label usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <link rel="stylesheet" type="text/css" href="..src/neomo.css" />
  </head>
  <body>
    <form action="">
      <div class="floatinglabel-field">
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Your Name"
          class="floatinglabel-input"
        />
        <label for="fullname" class="floatinglabel-label">Name</label>
      </div>
    </form>
  </body>
</html>
```

## Switches Information

> Switches usage

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <link rel="stylesheet" type="text/css" href="../src/neomo.css" />
  </head>
  <body>
    <div class="container column size-2 p-2">
      <h1>Default Switch</h1>
      <label class="switch-label">
        <input type="checkbox" />
        <span class="switch"></span>
      </label>
    </div>
    <br />
    <div class="container neomo column size-2 p-2">
      <h1>Neomo Switch</h1>
      <label class="switch-label">
        <input type="checkbox" />
        <span class="switch outset-neomo"></span>
      </label>
    </div>
    <br />
    <div class="container gray column size-2 p-2">
      <h1>Gray Switch</h1>
      <label class="switch-label">
        <input type="checkbox" />
        <span class="switch outset-gray"></span>
      </label>
    </div>
    <br />
    <div class="container dark column size-2 p-2">
      <h1>Dark Switch</h1>
      <label class="switch-label">
        <input type="checkbox" />
        <span class="switch outset-dark"></span>
      </label>
    </div>
  </body>
</html>
```
