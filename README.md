# use-width

## Import

```
import useWidth from 'use-width';
```

## Usage

`Width will be in pixels. `

```
const [width] = useWidth();
```

```
const component = width > 600 ? <DestopComponent> : <PhoneComponent>;

or

<div style={{ fontSize: width > 600 ? "2rem" : "1rem" }}/>
```
