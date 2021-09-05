# use-width

`NPM package to use the width of screen size dynamically for responsive design`

## Import

```
import useWidth from 'use-width';
```

## Usage

```
const [width] = useWidth();
```

```
const component = width > 600 ? <DesktopComponent> : <PhoneComponent>;

or

<div style={{ fontSize: width > 600 ? "2rem" : "1rem" }}/>
```

`Width is in pixels.`
