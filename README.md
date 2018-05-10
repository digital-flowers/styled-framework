# styled-framework
Build your own dynamic CSS language for both react and react native. By defining your own variables and your own custom css attributes no need for unnecessary components or properties. It's fun, easy, extendable and powered by styled components.

### Why?
```javascript
<div style={{
    backgroundColor:"red" // very limited !!!
}}>
</div>
<div className="container center-content"> // you need css classes to avoid repetitive style !!!
</div>
<CustomComponent backgroundColor="red" active={true} /> // styling properties mixed with behavior properties !!!
``