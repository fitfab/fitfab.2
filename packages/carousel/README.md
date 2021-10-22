# `@fitfab/carousel`

The default Carousel render at **100% width** and **height at 320px**.

You can change the height and width by setting the `height` & `width` prop.

## Carousel Usage

```jsx
import { Carousel } from "@/fitfab/Carousel";

<Carouse>
  <div>some content here</div>
</Carouse>;
```

| Name       | Type                          | Default              | Description |
| ---------- | ----------------------------- | -------------------- | ----------- |
| `children` | `React.ReactNode` or `string` | 'Place content here' | content     |
| `width`    | `string`                      | '100%'               | width       |
| `height`   | `string`                      | '320px'              | heigth      |
