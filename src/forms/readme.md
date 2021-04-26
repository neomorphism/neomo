# Forms

## Checkbox Information

> Checkbox usage

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <link rel="stylesheet" type="text/css" href="../src/neomo.css" />
  </head>
  <body>
    <div>
      <input class="checkbox-input" type="checkbox" value="" id="check1" />
      <label class="checkbox-label" for="check1">This is checkbox.</label>
    </div>
  </body>
</html>
```

## File Information

> Simple File usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="../src/neomo.css" />
  </head>
  <body class="p-2">
    <div class="file">
      <label for="ex-file" class="outset-gray">Choose a file...</label>
      <input type="file" id="ex-file" />
    </div>
  </body>
</html>
```

> Simple Filename usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="../src/neomo.css" />
  </head>
  <body class="p-2">
    <div class="file">
      <input class="file-name" value="Choose a file..." disabled="disabled" />
      <label for="ex-filename" class="outset-gray">Choose a file...</label>
      <input
        type="file"
        id="ex-filename"
        class="file-hidden"
        onclick="FileUpload()"
      />
    </div>

    <script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
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

## Radio Information

> Radio usage

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <link rel="stylesheet" type="text/css" href="../src/neomo.css" />
  </head>
  <body>
    <div>
      <input
        class="radio-input"
        type="radio"
        name="exam-radio"
        value=""
        id="radio1"
      />
      <label class="radio-label" for="radio1">this is radio. 'option1'</label>
    </div>
    <div>
      <input
        class="radio-input"
        type="radio"
        name="exam-radio"
        value=""
        id="radio2"
      />
      <label class="radio-label" for="radio2">this is radio. 'option2'</label>
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
