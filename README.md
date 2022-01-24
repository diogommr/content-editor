# Vanilla JS WYSIWYG Content Editor (Alpha)

This project aims to create a fully open source Vanilla JS WYSIWYG content editor for CMS' that is easy to customize and use.

It's a hybrid between a drag-and-drop block editor and a rich text editor. This allows for opportunities to grow the editor to include markdown support, for example.

A basic code editor based on CodeMirror is already integrated for the Code Block and the HTML Block. It features syntax highlighting, auto-close tags, matching tag highlighting, and more.

It's fully modular in order to make it easy to extend and customize.

Implemented blocks:
- Text (supports H1, H2, H3, P, basic inline formatting including inline code)
- Code
- Image
- Video (supports .mp4, Youtube and Video embeds)
- Gallery (only images at the moment, with support for video planned)
- HTML (including embedded JS)

More documentation coming in the future.


&nbsp;&nbsp;


## Important consideration

While this editor can be used as a standalone editor in any HTML project, it is intended for a CMS. More specifically, it is designed as a replacement for the simple textarea field for a page or blog article content and it saves its contents on said textarea element.

This way, and since all content changes are saved in real-time, when submitting the page or blog article form all the HTML visible on the editor is then saved to the textarea value for easy retrieval by the frontend.

Note that at the moment there is no code sanitation. You are literally saving the HTML that you are seeing to the DB (with the exception of editor-specific HTML, such as editing buttons, among others), so bear in mind some security considerations are to be taken when accepting input from untrusted users. This can be easily solved, however, by scraping the parts of the editor that accept raw HTML as input, namely, the HTML Block.


&nbsp;&nbsp;


## How it works

1. Import dependencies

```html
<!-- Sortable JS -->
<script src="js/content_editor/Sortable.min.js"></script>

<!-- Code Mirror -->
<script src="js/content_editor/codemirror/lib/codemirror.js"></script>
<!-- Modes (Languages) -->
<script src="js/content_editor/codemirror/mode/clike/clike.js"></script>
<script src="js/content_editor/codemirror/mode/css/css.js"></script>
<script src="js/content_editor/codemirror/mode/http/http.js"></script>
<script src="js/content_editor/codemirror/mode/xml/xml.js"></script>
<script src="js/content_editor/codemirror/mode/htmlmixed/htmlmixed.js"></script>
<script src="js/content_editor/codemirror/mode/javascript/javascript.js"></script>
<script src="js/content_editor/codemirror/mode/lua/lua.js"></script>
<script src="js/content_editor/codemirror/mode/markdown/markdown.js"></script>
<script src="js/content_editor/codemirror/mode/powershell/powershell.js"></script>
<script src="js/content_editor/codemirror/mode/python/python.js"></script>
<script src="js/content_editor/codemirror/mode/ruby/ruby.js"></script>
<script src="js/content_editor/codemirror/mode/shell/shell.js"></script>
<script src="js/content_editor/codemirror/mode/sql/sql.js"></script>
<!-- Addons -->
<script src="js/content_editor/codemirror/addon/fold/xml-fold.js"></script>
<script src="js/content_editor/codemirror/addon/edit/closetag.js"></script>
<script src="js/content_editor/codemirror/addon/edit/matchtags.js"></script>
<script src="js/content_editor/codemirror/addon/edit/matchbrackets.js"></script>
<script src="js/content_editor/codemirror/addon/edit/closebrackets.js"></script>

<!-- Content Editor -->
<script src="js/content_editor/editor.js"></script>

<!-- App -->
<script src="js/script.js"></script>
```

&nbsp;&nbsp;

2. Make sure to have a textarea element present. This is where the editor will save the contents (in HTML);
```html
<textarea id="content-field"></textarea>
```

&nbsp;&nbsp;

3. Initialize the editor from the previously mentioned textarea in your app's JS file (just make sure you load this file after all dependencies). 
In `js/script.js`:

```js
let editor = new Editor().init('#content-field');
```
