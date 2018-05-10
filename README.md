# styled-framework
Build your own dynamic CSS rules for both react and react native. By defining your own variables and your own custom css attributes no need for unnecessary components or properties. It's fun, easy, extendable and powered by styled components.

[![npm version](https://img.shields.io/npm/v/styled-framework.svg?style=flat-square)](https://www.npmjs.com/package/styled-framework)
[![npm downloads](https://img.shields.io/npm/dt/styled-framework.svg?style=flat-square)](https://www.npmjs.com/package/styled-framework)

 
## Why?
Inline styles in react are very powerful and easy to use but at the sametime we all know it has many limitations, such as:

**1- No global variables !!!**
```javascript
<div style={{
    backgroundColor: "red"
}}>
</div>
```

**2- You need css classes to avoid repetitive style !!!**
```javascript
<div className="container center-content">
</div>
```

**3- Sometimes developer mix styling properties with behavior properties !!!**
```javascript
<CustomComponent backgroundColor="red" active={true} />
```

**4- Not cross platform by default !!!**
```javascript
<div style={{
    animationDuration:"0.5s",
    msAnimationDuration:"0.5s",
    WebkitAnimationDuration:"0.5s",
    MozAnimationDuration:"0.5s",
    OAnimationDuration:"0.5s"
}}>
</div>
```
**5- Many unnecessary components!!!**
```javascript
<Button />
<SpecialButton />
```

### But what if not only we fix all these issues but even we add more features to the inline styles and make it more dynamic and fun to use?
Say Hi to the  Styled Framework :)
 
## Features
**- Global Variables**
```javascript
 <Div styled={{
      width: "100px",
      height: "100px",
      padding: "SPACING_S",
      backgroundColor: "COLOR_BACKGROUND"
    }}>
</Div>
```  

**- Custom CSS attributes (functions)**
```javascript
<H1 styled={{
  scale: 0.5, 
  separator: "line"
}}>
  Custom CSS attributes
</H1>
```

**- Custom CSS attributes with multiple parameters**
```javascript
<Div styled={{
  container: {isDark: true, isTab: false}
}}>
    Custom CSS attributes with multiple parameters
</Div>
```

**- Easy to override**
```javascript
<Div styled={{
  title: {},
  color: "red"
}}>
  Easy to override styles
</Div>
```

**- Easy to merge**
```javascript
<Div styled={{
  container: {},
  centerContent: {},
  padding: 0
}}>
  Easy to merge styles
</Div>
```

**- Cross Platform (React, React Native and Browsers Auto Prefixing)**
```javascript
import styled from "styled-framework"
const {Div} = styled; // react web
const {View} = styled; // react native
```

**- Any component can be styled**
```javascript
  import {createStyledComponent} from "styled-framework"
  const AnyComponentStyled = createStyledComponent(AnyComponent); // any custom component
  <AnyComponentStyled styled={{...}} />
```

**- Accessing component properties from css**
```javascript
<Button disabled={true} styled={{
  button: {isPrimary: true} // no need to pass disabled property to use it inside you custom property 'button' 
}}>
  Accessing component properties from css
</Button>
```

## Install

```bash
npm i styled-framework --save
```

## Getting Started
**1- Create your theme** 

create a javascript file for example `theme.js` and write the following code inside:
```javascript
// theme.js
import {createTheme} from "styled-framework";

export default createTheme({
  // here you can define any variables you want to use in your application, for example: 
  // spacing
  SPACING_XXS: "4px",
  SPACING_XS: "8px",
  SPACING_S: "16px",
  SPACING_M: "32px",
  SPACING_L: "64px",
  SPACING_XL: "128px",
  SPACING_XXL: "256px",
  // colors
  COLOR_PRIMARY: "#382256",
  COLOR_ACCENT: "#533380",
  COLOR_ACCENT_2: "#8E3973",
  COLOR_ACCENT_3: "#D92B59",
  COLOR_ERROR: "#DB4437",
  COLOR_BACKGROUND: "#F2F2F2",
  COLOR_ACCENT_DISABLED: "rgba(83,51,128,0.6)",
  // font size
  FONT_FAMILY: "Damascus",
},{
// here you can define any custom css attributes (functions) you want to use in your application, for example:
  scale: value => ({
    transform: `scale(${value})`
  }),
  centerContent: () => ({
    justifyContent: "center",
    alignItems: "center"
  }),
 container: ({isDark, isTab}) => ({
    flex: 1,
    display: "flex",
    boxShadow: "SHADOW_DEFAULT",
    padding: "SPACING_M",
    width: "400px",
    height: "100px",
    backgroundColor: isDark ? "COLOR_ACCENT" : "#F2F2F2",
    color: isDark ? "#F2F2F2" : "COLOR_ACCENT",
    ...(isTab ? {
      backgroundColor: isDark ? "COLOR_ACCENT_2" : "#F2F2F2",
      color: isDark ? "#FFF" : "COLOR_ACCENT_2",
    } : null)
  })
})

```

**2- Wrap your react application with a `ThemeProvider` and pass your theme**
```javascript
// app.js
import React, {Component} from "react";
import PropTypes from "prop-types";
import theme from "./theme";
export class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
          // your app components 
      </ThemeProvider>
    );
  }
}
```


**3- You are ready to go, just use styled components and styled attribute**
```javascript
import styled from "styled-framework";
<styled.Div styled={{
  padding: "10px", normal css 
  backgroundColor: "COLOR_PRIMARY" // variable from the theme,
  scale: 0.5, // attribute from the theme
}}>
</styled.Div>
```
 or 
```javascript
import styled from "styled-framework";
const {Div} = styled; 
<Div styled={{
  padding: "10px", normal css 
  backgroundColor: "COLOR_PRIMARY" // variable from the theme,
  scale: 0.5, // attribute from the theme
}}>
</Div>
``` 

# Example # 
You can find complete example code in the [`example`](https://github.com/digital-flowers/styled-framework/blob/master/example),  
to run the example project use:
```bash
npm run start:example
``` 

# Notes: #
**1-** This library is just a wrapper for the famous library [`styled-compoents`](https://www.styled-components.com/), 
so all generated components are actually styled components :), 
this means you can extend them and use many amazing features this library provide

**2-** Since this library is generating styled components it's better to check styled-components [documentation](https://www.styled-components.com/docs) for 
advance topics like "server side rendering", "extending components", etc ...   

**3-** I have choosen to capitlize components names rather than keeping them lower case like styled-components library, 
and the reason behind this is when you use `styled.div` from the `styled-components` library you are actually refering to a component class generator function
and not a component class but when you use `styled.Div` from `styled-framework` library you are refering to a component class and the standard is using capatilize for classes names.

**4-** I have choosen to make the property name `styled` and not `style` to not confuse it with the limited `style` property

### If you liked the idea i will be so happy if you help in testing or developing this project :)
