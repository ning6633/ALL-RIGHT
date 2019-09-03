# ES6中的继承

```javascript
class Animal{
    constructor(){
        this.eye=2;
    }
    
}
```

关键字：sxtends  继承关键字
				super();调用父类构造函数



将函数写在构造函数外：1、避免函数臃肿、2、实例化对象时效率更高

## 链式继承

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script type="text/javascript">
    class Color{
        constructor(){
            this.color="pink";
        }
    }
    class Animal extends Color{
        constructor(){
            super();
            this.eye=2;
            this.leg=4;
        }
        fly(){
            console.log("NO");
        }
    }
    class Cat extends Animal{
        constructor(){
            super();
            this.eat="fish";
        }
    }
        function main(){
            console.log(new Cat());
        }
        window.onload=main;
    </script>
</head>
<body>
    
</body>
</html>
```

