/* Example definition of a simple mode that understands a subset of
 * JavaScript:
 */

CodeMirror.defineSimpleMode("appl-alg-mode", {
  // The start state contains the rules that are intially used
  start: [
    {regex: "if|then|else|endif", token: "keyword"},
    {regex: "true|false", token: "atom"},
    {regex: "#.*", token: "comment"},
    {regex: "{()[]{},}", token:"punctuation"},
    {regex: "'.*?'", token: "string"},
    {regex: "[a-zA-Z_][a-zA-Z_0-9]*", token:"variable-2"}
  ]
});