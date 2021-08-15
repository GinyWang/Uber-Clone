// https://prettier.io/docs/en/options.html
// DEFAULT VALUE VERSION: v2.0.5
module.exports = {
  // 一行的字數長度，預設為 80
  // 另外，官網說明: For readability we recommend against using more than 80 characters.
  printWidth: 100,

  // 一個 tab 的 space 長度，預設為 2
  // tabWidth: 2,

  // 是否使用 tab 作為縮排，預設為 false
  // useTabs: false,

  // 是否在句尾加入分號，預設為 true
  // semi: true,

  // 是否使用單引號 (不包含 JSX)，預設為 false
  singleQuote: true,

  // 物件中的 key 對單/雙引號的處理方式，預設為 'as-needed'
  // 有三個選項可用
  // 1. as-needed: 有需要才加
  // 2. consistent: 一旦有個 key 使用引號，則所有 key 皆須使用
  // 3. preserve: 不特別處理
  // quoteProps: 'as-needed',
  // JSX 是否使用單引號，預設為 false
  // jsxSingleQuote: false,

  // 多行時，結尾的逗號處理方式，預設為 'es5'
  // 1. none: 消除結尾逗號
  // 2. es5: 僅針對 ES5 有效的部分做處理 (如物件、陣列)
  // 3. all: 只要可以，就加上結尾逗號
  trailingComma: 'all',

  // 物件字面值 (直接宣告變數為 `{}`)，前後是否加上 space，預設為 true
  // bracketSpacing: true,

  // 多行的 JSX 時，將 `>` 符號放在最後一行的後方，而不是單獨放在下一行 (不會作用於自閉合的 JSX)，預設為 false
  // jsxBracketSameLine: false,

  // 箭頭函式對參數是否加上括號的處理方式，預設為 'always'
  // 1. avoid: 單一參數不加上括號，多參數則加上
  // 2. always: 總是加上括號
  arrowParens: 'always',

  // 格式化範圍，從第幾行開始，預設為 0
  // rangeStart: 0,

  // 格式化範圍，到第幾行結束，預設為 Infinity
  // rangeEnd: Infinity,

  // 指定解析器，預設為 None (非字串)
  // 詳見: https://prettier.io/docs/en/options.html#parser
  // parser: null,

  // 指定一個檔案路徑，Prettier 會根據該檔案的類型，推測出你想使用的解析器，預設為 None (非字串)
  // filepath: null,

  // 是否需要在檔案最上方加入指定的 pragma 才格式化文件 (使用於現有大型或未經格式化的專案，加入整合 Prettier 時)，預設為 false
  // requirePragma: false,
  // 是否要在檔案最上方自動加入指定的 pragma，告知 Prettier 該檔案已經被格式化過 (與 requirePragma 一起使用)，預設為 false
  // insertPragma: false,

  // 對 markdown 的處理方式，預設為 'preserve'
  // 1. always: 如果字數長度超過設定的 printWidth，就斷行
  // 2. never: 不斷行
  // 3. preserve: 不特別處理
  // proseWrap: 'preserve',

  // HTML 的空格敏感度處理方式，預設為 'css'
  // 詳見: https://prettier.io/blog/2018/11/07/1.15.0.html#whitespace-sensitive-formatting
  // 1. css: 根據 CSS `display` 屬性的預設值，決定敏感度
  // 2. strict: 對空格敏感
  // 3. ignore: 對空格不敏感
  // htmlWhitespaceSensitivity: 'css',

  // 是否要在 vue 檔案的 <script> 及 <style> 標籤中縮排，預設為 false
  // vueIndentScriptAndStyle: false,

  // 使用的斷行字元，預設為 'lf'
  // 詳見: https://prettier.io/docs/en/options.html#end-of-line
  // 1. auto: 根據檔案的第一行的斷行字元，統一整個檔案的斷行字元
  // 2. lf: 只使用 \n，通常用於 macOS 及 Linux
  // 3. crlf: 只使用 \r\n，通常用於 Windows
  // 4. cr: 只使用 \r，很少使用
  endOfLine: 'auto',
};
