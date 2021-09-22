# highlightjs-dafny

[Dafny](https://github.com/dafny-lang/dafny) language grammar definition for [highlight.js](https://highlightjs.org/).

## Usage
Adapted from the ["Usage" section of highlightjs-cypher](https://github.com/highlightjs/highlightjs-cypher#usage).


Simply include the Highlight.js library in your webpage or Node app, then load this module.

### Static website or simple usage

Simply load the module after loading Highlight.js. You'll use the minified version found in the `dist` directory. This module is just a CDN build of the language, so it will register itself as the Javascript is loaded.

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" charset="UTF-8"
  src="/path/to/highlightjs-dfny/dist/dafny.min.js"></script>
<script type="text/javascript">
  hljs.initHighlightingOnLoad();
</script>
```

### Using jsDelivr CDN

```html
<script type="text/javascript"
  src="https://cdn.jsdelivr.net/gh/ConsenSys/highlightjs-dafny/dist/dafny.min.js"></script>
```

<!-- - More info: <https://unpkg.com>

### With Node or another build system

If you're using Node / Webpack / Rollup / Browserify, etc, simply require the language module, then register it with Highlight.js.

```javascript
var hljs = require('highlightjs');
var hljsDafny = require('highlightjs-dafny');

hljs.registerLanguage("dafny", hljsDafny);
hljs.initHighlightingOnLoad();
``` -->

### React

You need to import both Highlight.js and third-party language like Cypher:

```js
import React, {Component} from 'react'
import 'highlight.js/scss/darcula.scss' # your favourite theme
import dafny from './dafny'
import hljs from 'highlight.js'
hljs.registerLanguage('dafny', dafny);

class Highlighter extends Component
{
  constructor(props)
  {
    super(props);
    hljs.initHighlightingOnLoad();
  }

  render()
  {
    let {children} = this.props;
    return
    {
      <pre ref={(node) => this.node = node}>
        <code className="dafny">
          {children}
        </code>
      </pre>
    }
  }
}

export default Highlighter;
```

## License

Highlight.js is released under the CC0 1.0 License. See [LICENSE][1] file
for details.

### Author

Roberto Saltini

### Maintainer

Roberto Saltini

## Links

- The official site for the Highlight.js library is <https://highlightjs.org/>.
- The Highlight.js GitHub project: <https://github.com/highlightjs/highlight.js>
- Dafny GitHub repo: <https://github.com/dafny-lang/dafny>

[1]: https://github.com/highlightjs/highlightjs-cypher/blob/master/LICENSE