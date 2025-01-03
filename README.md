# Thokk

[![Thokk Banner](./static/thokk-banner.svg)](https://github.com/aekasitt/blob/master/static/thokk.svg)

## Getting started

Use it in your code as such:

```typescript
import { randomBytes } from 'crypto'
import { thokk } from 'thokk'

type Person = {
  id: string
  name: string
  age: number 
}

let kid: Person = {
  id: randomBytes(64).toString(),
  name: thokk(),
  age: Math.floor(Math.random() * (18 + 1))
}

let adult: Person = {
  id: randomBytes(64).toString(),
  name: thokk(),
  age: Math.floor(Math.random() * (80 - 18 + 1) + 18)
}
```

## Acknowledgements

1. [Þökk](https://picryl.com/media/am-738-4to-41v-bw-thokk-cacb3c) - [Wikimedia Commons](https://commons.wikimedia.org), Public Domain Marked.
2. [SOV กลับบ้าน](https://www.f0nt.com/release/sov-klabban) typeface by [Worawut Thanawatanawich](https://facebook.com/worawut.thanawatanawanich)
3. [![@iprg/docker-name-generator](https://img.shields.io/badge/@iprg\/docker--name--generator-CC3534.svg?logo=npm)](https://www.npmjs.com/package/@iprg/docker-name-generator) by [@rajabzadehm43](https://github.com/rajabzadehm43)

## License

This project is licensed under the terms of the MIT license.
