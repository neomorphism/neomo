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

## Input Information

> Input usage

```html
<!DOCTYPE html>
<html charset="utf-8">
  <head>
    <title>test</title>
    <link rel="stylesheet" type="text/css" href="../src/neomo.css" />
    <script src="https://kit.fontawesome.com/6ad71d6444.js" crossorigin="anonymous"></script>
  </head>

  <body>
    <div class="container bg-gray">
      <br />
      <input class="input outset-gray" type="text" disabled placeholder="Disabled">
      <input class="input square outset-gray" type="text" placeholder="Square Input">
      <input class="input rounded outset-gray" type="text" placeholder="Rounded Input">
      <br />
    </div>
    <div class="container bg-dark">
      <br />
      <input class="input outset-dark small" type="text" placeholder="Small Input">
      <br />
      <input class="input outset-dark" type="text" placeholder="Normal Input">
      <br />
      <input class="input outset-dark medium" type="text" placeholder="Medium Input">
      <br />
      <input class="input outset-dark large" type="text" placeholder="Large Input">
      <br />
    </div>
    <div class="container bg-blue">
      <br />
      <span class="left-icon">
        <i class="far fa-envelope fa-lg icon"></i>
        <input class="input outset-blue" type="email" placeholder="email">
      </span>  
      <br />
      <span class="right-icon">
        <i class="fas fa-lock fa-lg icon"></i>
        <input class="input outset-blue" type="password" placeholder="password">
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
