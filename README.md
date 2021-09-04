# use-width

`NPM package to use width of screen size dynamically for responsive design`

## Import

```
import useWidth from 'use-width';
```

## Usage

```
const [width] = useWidth();
```

```
const component = width > 600 ? <DestopComponent> : <PhoneComponent>;

or

<div style={{ fontSize: width > 600 ? "2rem" : "1rem" }}/>
```

`Width is in pixels.`
