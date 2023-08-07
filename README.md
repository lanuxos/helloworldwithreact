# helloworldwithreact
# สวัสดีชาวโลกด้วย React

# Introduction
- Babel
- ReactDOM.render(element, container[, callback]);
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello React</title>
    <script src="./react.min.js"></script>
    <script src="./react-dom.min.js"></script>
    <script src="./babel.min.js"></script>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel">
        let lib = {
            name: 'React',
            version: '18.2.0'
        };
        const element = <h1>Hello, world. This is {lib.name} library, version {lib.version}. </h1>;
        ReactDOM.render(element, document.getElementById("root"));
    </script>
</body>
</html>
```
- environment
```
npx create-react-app my-app
cd my-app
npm start
```
- component
- class component
- render condition

# 