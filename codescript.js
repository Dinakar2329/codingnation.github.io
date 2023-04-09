const tagDefinitions = {
  //html definitions
  html: {
    definition: "The root element of an HTML document.",
    syntax:
      "<!DOCTYPE html>\n<html>\n  <head>\n    <title>Page Title</title>\n  </head>\n  <body>\n    <h1>This is a heading</h1>\n    <p>This is a paragraph.</p>\n  </body>\n</html>",
  },
  head: {
    definition: "Contains metadata/information for the document.",
    syntax: "<head>\n  <title>Page Title</title>\n</head>",
  },
  title: {
    definition: "Defines a title for the document.",
    syntax: "<title>Page Title</title>",
  },
  body: {
    definition: "Defines the document's body.",
    syntax:
      "<body>\n  <h1>This is a heading</h1>\n  <p>This is a paragraph.</p>\n</body>",
  },
  // Meta Tags
  meta: {
    definition: "The meta tag provides metadata about an HTML document.",
    syntax: "<meta name='name' content='content'>",
  },
  base: {
    definition:
      "The base tag specifies the base URL/target for all relative URLs in a document.",
    syntax: "<base href='URL' target='_blank'>",
  },
  h1: {
    definition:
      "The h1 element is used to define a heading. It is the most important heading on the page.",
    syntax: "<h1>Heading text</h1>",
  },
  h2: {
    definition:
      "The h2 element is used to define a heading. It is the second most important heading on the page.",
    syntax: "<h2>Heading text</h2>",
  },
  h3: {
    definition:
      "The <h3> tag is used to define a heading on a webpage, with level 3 importance.",
    syntax: "<h3>Heading</h3>",
  },
  h4: {
    definition:
      "The <h4> tag is used to define a heading on a webpage, with level 4 importance.",
    syntax: "<h4>Heading</h4>",
  },
  h5: {
    definition:
      "The <h5> tag is used to define a heading on a webpage, with level 5 importance.",
    syntax: "<h5>Heading</h5>",
  },
  h6: {
    definition:
      "The h6 element is used to define a heading. It is the smallest and last most important heading on the page.",
    syntax: "<h6>Heading text</h6>",
  },
  p: {
    definition: "The p element is used to define a paragraph.",
    syntax: "<p>Paragraph text</p>",
  },
  br: {
    definition:
      "The <br> tag is used to insert a line break or carriage-return within a text block.",
    syntax: "This is the first line.<br>This is the second line.",
  },
  hr: {
    definition: "The hr tag is used to insert a horizontal line on a webpage.",
    syntax: "<hr>",
  },
  a: {
    definition: "The a element is used to create a hyperlink.",
    syntax: '<a href="URL">Link text</a>',
  },
  img: {
    definition: "The img element is used to embed an image in an HTML page.",
    syntax: '<img src="image.jpg" alt="Image description">',
  },
  ul: {
    definition: "The ul element is used to create an unordered list.",
    syntax: "<ul>\n  <li>List item 1</li>\n  <li>List item 2</li>\n</ul>",
  },
  ol: {
    definition: "The ol element is used to create an ordered list.",
    syntax: "<ol>\n  <li>List item 1</li>\n  <li>List item 2</li>\n</ol>",
  },
  li: {
    definition:
      "The li element is used to define a list item. It should be contained within a ul or ol element.",
    syntax: "<ul>\n <li>List item 1</li>\n  <li>List item 2</li>\n</ul>",
  },
  div: {
    definition:
      "The div element is used to group other elements together and apply styles to them.",
    syntax: "<div>\n  <p>Paragraph 1</p>\n  <p>Paragraph 2</p>\n</div>",
  },
  span: {
    definition:
      "The span element is used to apply styles to a specific section of text.",
    syntax:
      "<p>This is some text with a <span style=&quot;color: red;&quot;>red</span> word.</p>",
  },
  form: {
    definition: "The form element is used to create a form for user input.",
    syntax:
      '<form action="form-handler.php" method="post">\n  <input type="text" name="username" placeholder="Enter your username">\n  <input type="password" name="password" placeholder="Enter your password">\n  <input type="submit" value="Submit">\n</form>',
  },
  input: {
    definition:
      "The input element represents a typed data field that allows a user to enter data. The value of the input element is usually interpreted as text, but can be interpreted as other types (e.g., numbers) depending on the value of the type attribute. This example is for an input tag with type= '\text'. You can change the type attribute to specify different types of input fields, such as email, password, checkbox, radio, and more.",
    syntax:
      '<input type="text" name="username" id="username" value="" placeholder="Enter your username">',
  },
  table: {
    definition:
      "The table tag defines an HTML table. Tables are used to display data in rows and columns.",
    syntax:
      "<table>\n <tr> \n <th>Header 1</th>\n   <th>Header 2</th>\n  </tr>\n <tr>   \n<td>Data 1</td>\n    <td>Data 2</td>\n  </tr>\n</table>",
  },
  tr: {
    definition: "The tr tag defines a row in an HTML table.",
    syntax:
      "<table>\n <tr> \n <th>Header 1</th>\n   <th>Header 2</th>\n  </tr>\n <tr>  \n <td>Data 1</td>\n    <td>Data 2</td>\n  </tr>\n</table>",
  },
  th: {
    definition: "The th tag defines a header cell in an HTML table.",
    syntax:
      "<table>\n <tr>\n  <th>Header 1</th>\n   <th>Header 2</th>\n  </tr>\n <tr>  \n <td>Data 1</td>\n    <td>Data 2</td>\n  </tr>\n</table>",
  },
  td: {
    definition: "The td tag defines a standard data cell in an HTML table.",
    syntax:
      "<table>\n <tr> \n <th>Header 1</th>\n   <th>Header 2</th>\n  </tr>\n <tr>   \n<td>Data 1</td>\n    <td>Data 2</td>\n  </tr>\n</table>",
  },
  caption: {
    definition: "The caption tag defines a table caption.",
    syntax:
      "<table>\n  <caption>Table Caption</caption>\n <tr>  <th>Header 1</th>\n   <th>Header 2</th>\n  </tr>\n <tr>  \n <td>Data 1</td>\n    <td>Data 2</td>\n  </tr>\n</table>",
  },
  // Text-level semantics
  b: {
    definition:
      "The b element represents a span of text to which attention is being drawn for utilitarian purposes without conveying any extra importance.",
    syntax: "<b>bold text</b>",
  },
  i: {
    definition:
      "The i element represents a span of text that is offset from the normal prose in some manner, such as through stylistic changes or attention of the user agent.",
    syntax: "<i>italicized text</i>",
  },
  u: {
    definition:
      "The u element represents a span of text with an unarticulated, though explicitly rendered, non-textual annotation, such as labeling the text as being a proper name in Chinese text (a Chinese proper name mark), or labeling the text as being misspelt.",
    syntax: "<u>underlined text</u>",
  },
  small: {
    definition:
      "The small element represents small print and similar fine print, such as legal disclaimers and caveats.",
    syntax: "<small>small print</small>",
  },
  strong: {
    definition:
      "The strong element represents strong importance, seriousness, or urgency for its contents.",
    syntax: "<strong>strongly emphasized text</strong>",
  },
  em: {
    definition: "The em element represents stress emphasis of its contents.",
    syntax: "<em>emphasized text</em>",
  },
  mark: {
    definition:
      "The mark element represents a run of text in one document marked or highlighted for reference purposes, due to its relevance in another context.",
    syntax: "<mark>highlighted text</mark>",
  },

  // Edits
  ins: {
    definition: "The ins element represents an addition to the document.",
    syntax: "<ins>added text</ins>",
  },
  del: {
    definition: "The del element represents a removal from the document.",
    syntax: "<del>deleted text</del>",
  },
  textarea: {
    definition:
      "The textarea element is used to create a multi-line text input field. It is typically used when you want the user to enter a large amount of text, such as a comment or message.",
    syntax:
      "<textarea name='message' rows='4' cols='50'>Enter your message here</textarea>",
  },
  select: {
    definition:
      "The select element creates a drop-down list of options for the user to choose from. The option elements within the select element specify the available options.",
    syntax: `<select>\n
    <option value="volvo">Volvo</option>\n
 <option value="saab">Saab</option>\n
 <option value="mercedes">Mercedes</option>\n
 <option value="audi">Audi</option>\n
 </select>`,
  },
  option: {
    definition:
      "The option element is used within a select element to specify an option that the user can choose. The value attribute specifies the value that will be submitted when the form is submitted.",
    syntax: "<option value='volvo'>Volvo</option>",
  },
  label: {
    definition:
      "The label element is used to associate a text label with a form control, such as an input or select element. This allows the user to click on the label to activate the form control.",
    syntax:
      "<label for='firstname'>First name:</label>\n <input type='text' id='firstname' name='firstname' />",
  },
  video: {
    syntax:
      '<video src="video-url.mp4" width="640" height="360" controls></video>',
    definition:
      "The video tag is used to embed videos into a web page. The required src attribute specifies the URL of the video, while the optional width and height attributes specify the dimensions of the video. The controls attribute adds video playback controls to the video player.",
  },
  audio: {
    syntax: '<audio src="audio-url.mp3" controls></audio>',
    definition:
      "The audio tag is used to embed audio files into a web page. The required src attribute specifies the URL of the audio file, while the controls attribute adds audio playback controls to the audio player.",
  },
  iframe: {
    syntax:
      '<iframe src="https://www.example.com" width="640" height="360"></iframe>',
    definition:
      "The iframe tag is used to embed another web page within the current web page. The required src attribute specifies the URL of the web page to be embedded, while the optional width and height attributes specify the dimensions of the embedded web page.",
  },
  figure: {
    definition:
      "The figure element represents a self-contained composition in a document, page, application, or site and that is intended to be independently distributable or reusable.",
    syntax:
      "<figure>\n<img src='image.png' alt='alternative text'>\n<figcaption>caption text</figcaption>\n</figure>",
  },
  figcaption: {
    definition:
      "The figcaption element represents a caption or legend for the rest of the contents of the figure element.",
    syntax:
      "<figure>\n<img src='image.png' alt='alternative text'>\n<figcaption>caption text</figcaption>\n</figure>",
  },
  nav: {
    definition:
      "The nav element represents a section of a page that links to other pages or to parts within the page.",
    syntax:
      "<nav>\n<ul>\n<li>\n<a href='/about'>About</a></li>\n<li><a href='/contact'>Contact</a></li>\n</ul>\n</nav>",
  },
  link: {
    definition:
      "The link element specifies relationships between the current document and an external resource.",
    syntax: "<link rel='stylesheet' href='styles.css'>",
  },
  script: {
    definition:
      "The <strong>script</strong> tag is used to define a client-side script, such as a JavaScript. The script tag is used in HTML to define embedded scripts that are executed when the document is loaded in a web browser.",
    syntax: "<script>Write your script here </script>",
  },
  noscript: {
    definition:
      "The <strong>noscript</strong> tag defines an alternate content for users that have disabled scripts in their browser or have a browser that doesn't support client-side scripting.",
    syntax: "<noscript>Define alternate content here </noscript>",
  },
  blockquote: {
    definition:
      "The blockquote element is used to indicate a section of quoted text.",
    syntax: "<blockquote><p>This is a section of quoted text.</p></blockquote>",
  },

  q: {
    definition: "The q element is used to indicate a short inline quotation.",
    syntax: "<p><q>This is a short quotation.</q></p>",
  },

  cite: {
    definition:
      "The cite element is used to indicate the title of a work, such as a book or movie.",
    syntax: "<p><cite>The Catcher in the Rye</cite> by J.D. Salinger</p>",
  },
  source: {
    definition:
      "The source tag specifies multiple media resources for media elements like audio, video, and picture.",
    syntax: "<source src='media_file.mp4' type='video/mp4'>",
  },
  track: {
    definition:
      "The track tag is used to add timed text tracks (captions or subtitles) to media elements like audio or video.",
    syntax:
      "<track src='subtitles.vtt' kind='subtitles' srclang='en' label='English' default>",
  },
  picture: {
    definition:
      "The picture tag is used to provide multiple sources of an image based on screen size and resolution.",
    syntax:
      "<picture><source media='(min-width: 650px)' srcset='large_image.jpg'><img src='small_image.jpg'></picture>",
  },
  button: {
    definition:
      "The button tag defines a clickable button. It can be used to submit a form or trigger a JavaScript function.",
    syntax: "<button>Click me</button>",
  },
  fieldset: {
    definition:
      "The fieldset tag groups related elements in a form. It can also contain a <legend> element to provide a caption for the fieldset.",
    syntax:
      "<fieldset>\n<legend>Personal information:</legend>\n  <!-- Input fields -->\n</fieldset>",
  },
  legend: {
    definition: "The legend tag defines a caption for the fieldset element.",
    syntax: "<legend>Personal information:</legend>",
  },
  datalist: {
    definition:
      "The datalist tag specifies a list of pre-defined options for an input element. The user can select an option from the list, or enter their own value.",
    syntax:
      "<input list='fruits'>\n<datalist id='fruits'>\n  <option value='Apple'>\n  <option value='Banana'>\n  <option value='Orange'>\n</datalist>",
  },
  optgroup: {
    definition:
      "The optgroup tag groups related options in a select element. It can contain multiple option elements.",
    syntax:
      "<select>\n  <optgroup label='Group 1'>\n    <option value='option1'>Option 1</option>\n  </optgroup>\n  <optgroup label='Group 2'>\n    <option value='option2'>Option 2</option>\n  </optgroup>\n</select>",
  },
  article: {
    definition:
      "The article tag specifies independent, self-contained content.",
    syntax: "<article>\n  <!-- article content -->\n</article>",
  },
  aside: {
    definition:
      "The aside tag defines some content aside from the content it is placed in.",
    syntax: "<aside>\n  <!-- aside content -->\n</aside>",
  },
  details: {
    definition:
      "The details tag specifies additional details that the user can open and close on demand.",
    syntax:
      "<details>\n  <summary>Summary text</summary>\n  <!-- details content -->\n</details>",
  },
  footer: {
    definition: "The footer tag defines a footer for a document or section.",
    syntax: "<footer>\n  <!-- footer content -->\n</footer>",
  },
  header: {
    definition: "The header tag specifies a header for a document or section.",
    syntax: "<header>\n  <!-- header content -->\n</header>",
  },
  main: {
    definition: "The main tag specifies the main content of a document.",
    syntax: "<main>\n  <!-- main content -->\n</main>",
  },
  section: {
    definition: "The section tag defines a section in a document.",
    syntax: "<section>\n  <!-- section content -->\n</section>",
  },
  summary: {
    definition:
      "The summary tag defines a visible heading for the details element.",
    syntax:
      "<details>\n  <summary>Summary text</summary>\n  <!-- details content -->\n</details>",
  },
  style: {
    definition:
      "The style tag is used to define style information for an HTML document.",
    syntax: "<style> body {background-color: white;} </style>",
  },

  //css definitions
  width: {
    definition: "Specifies the width of an element's content area.",
    syntax: "width: value;",
  },

  height: {
    definition: "Specifies the height of an element's content area.",
    syntax: "height: value;",
  },

  padding: {
    definition:
      "Specifies the space between an element's content and its border.",
    syntax: "padding: value;",
  },

  border: {
    definition: "Specifies the style, width, and color of an element's border.",
    syntax: "border: width style color;",
  },

  margin: {
    definition:
      "Specifies the space between an element's border and adjacent elements.",
    syntax: "margin: value;",
  },

  boxsizing: {
    definition:
      "Specifies how an element's width and height are calculated, including or excluding padding and border.",
    syntax: "box-sizing: content-box | border-box;",
  },
  fontfamily: {
    definition: "Specifies the font family for an element's text.",
    syntax: "font-family: family-name | generic-family;",
  },

  fontsize: {
    definition: "Specifies the size of an element's text.",
    syntax: "font-size: value;",
  },

  fontweight: {
    definition: "Specifies the weight or thickness of an element's text.",
    syntax: "font-weight: normal | bold | bolder | lighter | 100-900;",
  },

  fontstyle: {
    definition:
      "Specifies whether an element's text is italic, oblique, or normal.",
    syntax: "font-style: normal | italic | oblique;",
  },

  textalign: {
    definition: "Specifies the horizontal alignment of an element's text.",
    syntax: "text-align: left | right | center | justify;",
  },

  color: {
    definition: "Specifies the color of an element's text.",
    syntax: "color: color-value;",
  },

  lineheight: {
    definition: "Specifies the height of each line of text within an element.",
    syntax: "line-height: value;",
  },

  textdecoration: {
    definition:
      "Specifies whether an element's text is underlined, overlined, line-through, or none.",
    syntax: "text-decoration: none | underline | overline | line-through;",
  },

  texttransform: {
    definition:
      "Specifies how an element's text is capitalized or transformed.",
    syntax: "text-transform: none | capitalize | uppercase | lowercase;",
  },
  backgroundcolor: {
    definition: "Specifies the background color of an element.",
    syntax: "background-color: color-value;",
  },

  backgroundimage: {
    definition: "Specifies the background image of an element.",
    syntax: "background-image: url('image-url');",
  },

  backgroundrepeat: {
    definition:
      "Specifies how an element's background image should be repeated.",
    syntax: "background-repeat: repeat | repeat-x | repeat-y | no-repeat;",
  },

  borderstyle: {
    definition: "Specifies the style of an element's border.",
    syntax:
      "border-style: none | dotted | dashed | solid | double | groove | ridge | inset | outset;",
  },

  borderwidth: {
    definition: "Specifies the width of an element's border.",
    syntax: "border-width: value;",
  },

  bordercolor: {
    definition: "Specifies the color of an element's border.",
    syntax: "border-color: color-value;",
  },

  borderradius: {
    definition: "Specifies the roundedness of an element's corners.",
    syntax: "border-radius: value;",
  },

  boxshadow: {
    definition: "Specifies the shadow of an element's box.",
    syntax: "box-shadow: h-shadow v-shadow blur spread color;",
  },
  position: {
    definition: "Specifies the positioning method of an element.",
    syntax: "position: static | relative | absolute | fixed | sticky;",
  },
  bottom: {
    definition: "Specifies the bottom position of an element when positioned.",
    syntax: "bottom: value;",
  },
  left: {
    definition: "Specifies the left position of an element when positioned.",
    syntax: "left: value;",
  },
  right: {
    definition: "Specifies the right position of an element when positioned.",
    syntax: "right: value;",
  },
  zindex: {
    definition: "Specifies the stack order of an element.",
    syntax: "z-index: value;",
  },
  display: {
    definition: "Specifies the display behavior of an element.",
    syntax:
      "display: inline | block | inline-block | flex | inline-flex | grid | inline-grid | table | table-cell | table-row | none;",
  },
  visibility: {
    definition: "Specifies whether an element is visible or hidden.",
    syntax: "visibility: visible | hidden;",
  },

  outline: {
    definition: "Sets all the outline properties in one declaration.",
    syntax: "outline: width style color;",
  },

  overflow: {
    definition: "Specifies what happens if content overflows an element's box.",
    syntax: "overflow: visible | hidden | scroll | auto;",
  },
  flex: {
    definition:
      "Specifies the length of the item, relative to the rest of the flexible items inside the same container.",
    syntax: "flex: flex-grow flex-shrink flex-basis;",
  },
  aligncontent: {
    definition:
      "Aligns a flex container's lines within the flex container when there is extra space in the cross-axis.",
    syntax:
      "align-content: flex-start | flex-end | center | space-between | space-around | stretch;",
  },
  alignitems: {
    definition: "Aligns flex items along the cross-axis.",
    syntax: "align-items: flex-start | flex-end | center | baseline | stretch;",
  },
  alignself: {
    definition: "Aligns an individual flex item along the cross-axis.",
    syntax:
      "align-self: auto | flex-start | flex-end | center | baseline | stretch;",
  },
  justifycontent: {
    definition: "Aligns flex items along the main-axis.",
    syntax:
      "justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;",
  },
  order: {
    definition:
      "Sets the order of a flexible item relative to the other items in the container.",
    syntax: "order: integer;",
  },

  gridtemplaterows: {
    definition: "Defines the rows of the grid container.",
    syntax:
      "grid-template-rows: length | min-content | max-content | auto | fit-content();",
  },
  gridtemplatecolumns: {
    definition: "Defines the columns of the grid container.",
    syntax:
      "grid-template-columns: length | min-content | max-content | auto | fit-content();",
  },
  gridrowgap: {
    definition: "Sets the size of the gap between the rows in a grid layout.",
    syntax: "grid-row-gap: value;",
  },
  gridcolumngap: {
    definition:
      "Sets the size of the gap between the columns in a grid layout.",
    syntax: "grid-column-gap: value;",
  },
  gridarea: {
    definition:
      "Gives an item a name, which is then used to specify its location in the grid layout.",
    syntax:
      "grid-area: name | row-start / column-start / row-end / column-end;",
  },
  animation: {
    definition:
      "Specifies the keyframe-based animations to apply to an element.",
    syntax:
      "animation-name | animation-duration | animation-timing-function | animation-delay | animation-iteration-count | animation-direction | animation-fill-mode | animation-play-state;",
  },
  animationname: {
    definition:
      "Specifies one or more comma-separated names of the keyframe-based animations to apply to an element.",
    syntax: "animation-name: none | keyframe-name | inherit;",
  },
  animationduration: {
    definition:
      "Specifies the duration of the animation in seconds or milliseconds.",
    syntax: "animation-duration: time | inherit;",
  },
  animationtimingfunction: {
    definition: "Specifies the speed curve of the animation.",
    syntax:
      "animation-timing-function: linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier(n,n,n,n) | step-start | step-end;",
  },
  animationdelay: {
    definition: "Specifies a delay before the animation starts.",
    syntax: "animation-delay: time | inherit;",
  },
  animationiterationcount: {
    definition: "Specifies the number of times an animation should be played.",
    syntax: "animation-iteration-count: number | infinite | inherit;",
  },
  animationdirection: {
    definition:
      "Specifies whether an animation should be played forwards, backwards, or in alternate cycles.",
    syntax:
      "animation-direction: normal | reverse | alternate | alternate-reverse | inherit;",
  },
  animationfillmode: {
    definition:
      "Specifies how a CSS animation should apply styles to its target before and after it is executing.",
    syntax:
      "animation-fill-mode: none | forwards | backwards | both | inherit;",
  },
  animationplaystate: {
    definition: "Specifies whether the animation is running or paused.",
    syntax: "animation-play-state: running | paused | inherit;",
  },
  transition: {
    definition:
      "Specifies the CSS properties to transition and the duration over which the transition occurs.",
    syntax: "transition: property duration timing-function delay;",
  },
  transitionproperty: {
    definition:
      "Specifies the name or names of the CSS properties to which the transition effect applies.",
    syntax: "transition- none | all | property-name | inherit;",
  },
  transitionduration: {
    definition:
      "Specifies the length of time over which the transition occurs.",
    syntax: "transition-duration: time | inherit;",
  },
  transitiontimingfunction: {
    definition: "Specifies the speed curve of the transition effect.",
    syntax:
      "transition-timing-function: linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier(n,n,n,n) | step-start | step-end;",
  },
  transitiondelay: {
    definition: "Specifies a delay before the transition effect starts.",
    syntax: "transition-delay: time | inherit;",
  },

  filter: {
    definition:
      "Applies graphical effects like blur or color shifting to an element.",
    syntax:
      "filter: none | blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | url();",
  },
  userselect: {
    definition: "Controls whether or not the user can select text.",
    syntax: "user-select: auto | none | text | contain | all | inherit;",
  },
  content: {
    definition: "Inserts generated content into the document.",
    syntax:
      "content: normal | none | counter | attr | url | open-quote | close-quote | no-open-quote | no-close-quote | inherit;",
  },
  counterreset: {
    definition: "Creates or resets one or more counters.",
    syntax: "counter-reset: none | counter-name | inherit;",
  },
  counterincrement: {
    definition: "Increments one or more counters.",
    syntax: "counter-increment: none | counter-name | inherit;",
  },
  resize: {
    definition:
      "Specifies whether or not an element can be resized by the user.",
    syntax:
      "resize: none | both | horizontal | vertical | block | inline | inherit;",
  },
  objectfit: {
    definition: "Specifies how an element should fit inside its content box.",
    syntax: "object-fit: fill | contain | cover | none | scale-down;",
  },
  objectposition: {
    definition:
      "Specifies the alignment of the replaced element inside its content box.",
    syntax: "object-position: x-offset y-offset;",
  },
  perspective: {
    definition:
      "Specifies the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.",
    syntax: "perspective: length | none | inherit;",
  },
  perspectiveorigin: {
    definition:
      "Specifies the position at which the viewer is looking at the 3D-positioned element.",
    syntax: "perspective-origin: x-position y-position | initial | inherit;",
  },
  backfacevisibility: {
    definition:
      "Specifies whether or not the back face of a 3D-positioned element should be visible when facing the viewer.",
    syntax: "backface-visibility: visible | hidden;",
  },
  willchange: {
    definition:
      "Informs the browser of changes in a CSS property that might require it to allocate additional resources or perform costly rendering operations.",
    syntax:
      "will-change: auto | scroll-position | contents | transform | opacity | left | top | right | bottom | width | height | color | background-color;",
  },
  unicodebidi: {
    definition:
      "Specifies the level of embedding with respect to the bidirectional algorithm.",
    syntax:
      "unicode-bidi: normal | embed | bidi-override | isolate | isolate-override | plaintext | inherit;",
  },
  direction: {
    definition:
      "Specifies the text direction/writing direction within a block-level element.",
    syntax: "direction: ltr | rtl | inherit;",
  },
  tabsize: {
    definition: "Specifies the width of a tab character.",
    syntax: "tab-size: number | length;",
  },
  touchaction: {
    definition:
      "Specifies whether touch input may trigger default browser behavior.",
    syntax:
      "touch-action: auto | none | pan-x | pan-y | pan-left | pan-right | pan-up | pan-down | manipulation;",
  },
  appearance: {
    definition:
      "Specifies how an element should appear, with respect to platform-specific styling.",
    syntax:
      "appearance: auto | none | checkbox | radio | push-button | listbox | menulist | meter | progress-bar | slider-horizontal | slider-vertical | slider-thumb-horizontal | slider-thumb-vertical | caret | searchfield | searchfield-decoration | searchfield-results-decoration | searchfield-results-button | searchfield-cancel-button | default.",
  },
  imagerendering: {
    definition:
      "Specifies how the browser should render an image if the image is scaled up or down from its original size.",
    syntax: "image-rendering: auto | crisp-edges | pixelated;",
  },
  userselect: {
    definition: "Specifies the level of user-selectability on an element.",
    syntax: "user-select: auto | none | text | contain | all;",
  },
  cursor: {
    definition:
      "Specifies the type of cursor to be displayed when pointing over an element.",
    syntax: "cursor: value;",
  },
  isolation: {
    definition:
      "Specifies whether an element must create a new stacking context.",
    syntax: "isolation: auto | isolate;",
  },
  mixblendmode: {
    definition:
      "Specifies how an element's content should blend with its background.",
    syntax:
      "mix-blend-mode: normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity;",
  },
  perspectiveoriginx: {
    definition:
      "Specifies the position at which the viewer is looking at the 3D-positioned element, along the x-axis.",
    syntax:
      "perspective-origin-x: length | left | center | right | initial | inherit;",
  },
  perspectiveoriginy: {
    definition:
      "Specifies the position at which the viewer is looking at the 3D-positioned element, along the y-axis.",
    syntax:
      "perspective-origin-y: length | top | center | bottom | initial | inherit;",
  },
  scrollbehavior: {
    definition: "Specifies the scrolling behavior for a scrolling box.",
    syntax: "scroll-behavior: auto | smooth;",
  },
  scrollsnaptype: {
    definition:
      "Specifies how to snap an element to a snap point when scrolling.",
    syntax:
      "scroll-snap-type: none | x | y | block | inline | both | mandatory | proximity;",
  },
  scrollsnapalign: {
    definition: "Specifies the alignment of a snap point when scrolling.",
    syntax:
      "scroll-snap-align: none | start | end | center | none | [x-start | x-end | y-start | y-end];",
  },
  scrollsnapstop: {
    definition:
      "Specifies whether or not scrolling should stop on snap points.",
    syntax: "scroll-snap-stop: normal | always;",
  },
  scrollpadding: {
    definition: "Adds padding to the scroll snap container.",
    syntax: "scroll-padding: auto | length | initial | inherit;",
  },
  scrollpaddingtop: {
    definition: "Adds padding to the top of the scroll snap container.",
    syntax: "scroll-padding-top: length | initial | inherit;",
  },
  scrollpaddingright: {
    definition: "Adds padding to the right of the scroll snap container.",
    syntax: "scroll-padding-right: length | initial | inherit;",
  },
  scrollpaddingbottom: {
    definition: "Adds padding to the bottom of the scroll snap container.",
    syntax: "scroll-padding-bottom: length | initial | inherit;",
  },
  scrollpaddingleft: {
    definition: "Adds padding to the left of the scroll snap container.",
    syntax: "scroll-padding-left: length | initial | inherit;",
  },
  scrollbarcolor: {
    definition: "Sets the color of the scrollbar thumb and track.",
    syntax: "scrollbar-color: auto | dark | light | <color>;",
  },
  scrollbarwidth: {
    definition: "Specifies the width of the scrollbar.",
    syntax: "scrollbar-width: auto | thin | none;",
  },
  textcombineupright: {
    definition:
      "Specifies the combination of multiple characters into a single glyph.",
    syntax:
      "text-combine-upright: none | all | digits [ <integer>? ] | <integer>;",
  },
  textdecorationcolor: {
    definition: "Specifies the color of text decorations.",
    syntax: "text-decoration-color: currentcolor | <color>;",
  },
  textdecorationline: {
    definition: "Specifies the type of text decoration to be applied.",
    syntax:
      "text-decoration-line: none | underline | overline | line-through | blink;",
  },
  textdecorationstyle: {
    definition: "Specifies the style of the text decoration to be applied.",
    syntax: "text-decoration-style: solid | double | dotted | dashed | wavy;",
  },
  textemphasiscolor: {
    definition: "Specifies the color of text emphasis marks.",
    syntax: "text-emphasis-color: currentcolor | <color>;",
  },
  textemphasisstyle: {
    definition: "Specifies the style of the text emphasis marks.",
    syntax:
      "text-emphasis-style: none | accent | dot | circle | disc | underline | sesame | filled | open;",
  },
  textemphasisposition: {
    definition: "Specifies the position of the text emphasis marks.",
    syntax: "text-emphasis-position: over | under;",
  },
  textorientation: {
    definition: "Specifies the orientation of the text in a line.",
    syntax: "text-orientation: mixed | upright | sideways;",
  },
  textoverflow: {
    definition:
      "Specifies how the text should be displayed when it overflows the content area.",
    syntax: "text-overflow: clip | ellipsis | <string>;",
  },
  textshadow: {
    definition: "Adds a shadow effect to text.",
    syntax: "text-shadow: none | <shadow> [, <shadow>]*;",
  },
  texttransform: {
    definition: "Specifies how to capitalize an element's text.",
    syntax:
      "text-transform: none | capitalize | uppercase | lowercase | initial | inherit;",
  },
  transformoriginx: {
    definition:
      "Sets the origin for an element's transformations, along the x-axis.",
    syntax:
      "transform-origin-x: length | left | center | right | initial | inherit;",
  },
  transformoriginy: {
    definition:
      "Sets the origin for an element's transformations, along the y-axis.",
    syntax:
      "transform-origin-y: length | top | center | bottom | initial | inherit;",
  },
  transformoriginz: {
    definition:
      "Sets the origin for an element's transformations, along the z-axis.",
    syntax: "transform-origin-z: length | initial | inherit;",
  },
  unicodebidi: {
    definition:
      "Specifies the level of embedding with respect to the bidirectional algorithm.",
    syntax:
      "unicode-bidi: normal | embed | isolate | bidi-override | isolate-override | plaintext | inherit;",
  },
  userselect: {
    definition: "Specifies whether or not the user can select text.",
    syntax: "user-select: none | auto | text | contain | all;",
  },
  willchange: {
    definition:
      "Informs the browser of potential changes to an element's layout or style.",
    syntax:
      "will-change: auto | scroll-position | contents | <custom-ident> | <animateable-feature>[, <animateable-feature>]*;",
  },
  wordbreak: {
    definition: "Specifies how to break lines within words.",
    syntax: "word-break: normal | break-all | keep-all | break-word;",
  },
  wordspacing: {
    definition: "Specifies the space between words.",
    syntax: "word-spacing: normal | length | initial | inherit;",
  },
  wordwrap: {
    definition: "Specifies how to break lines within words.",
    syntax: "word-wrap: normal | break-word | anywhere;",
  },
  writingmode: {
    definition:
      "Specifies the direction and orientation of the writing system.",
    syntax:
      "writing-mode: horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr;",
  },
  zindex: {
    definition: "Specifies the stack order of an element.",
    syntax: "z-index: auto | <integer> | initial | inherit;",
  },
  zoom: {
    definition: "Sets the magnification scale of an element.",
    syntax: "zoom: normal | reset | <number>%;",
  },
  mozappearance: {
    definition:
      "Allows web developers to modify the appearance of native controls in Firefox.",
    syntax:
      "-moz-appearance: none | button | button-arrow-down | button-arrow-next | button-arrow-previous | button-arrow-up | button-bevel | button-focus | caret | checkbox | checkbox-container | checkbox-label | checkmenuitem | dublicate | groupbox | listbox | listitem | menuarrow | menubar | menucheckbox | menuimage | menuitem | menuitemtext | menulist | menulist-button | menulist-text | menulist-textfield | menupopup | menuradio | menuseparator | meterbar | meterchunk | none | progressbar | progressbar-vertical | progresschunk | progresschunk-vertical | radio | radio-container | radio-label | radiomenuitem | resizer | scale-horizontal | scale-vertical | scalethumbend | scalethumb-horizontal | scalethumbstart | scalethumb-vertical | scalethumb-vertical | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | separator | sheet | spinner | splitter | statusbar | statusbarpanel | tab | tab-scroll-arrow-back | tab-scroll-arrow-forward | textarea | textfield | toolbar | toolbarbutton | toolbarbutton-dropdown | toolbargripper | toolbox | tooltip | treeheader | treeheadercell | treeheadersortarrow | treeitem | treeline | treetwisty | treetwistyopen | unset;",
  },
  mozosxfontsmoothing: {
    definition: "Sets the font smoothing style for Mac OS X.",
    syntax: "-moz-osx-font-smoothing: auto | grayscale | default;",
  },
  mozwindowshadow: {
    definition:
      "Specifies whether or not to display a shadow beneath the window.",
    syntax: "-moz-window-shadow: none | default;",
  },
  webkitappearance: {
    definition:
      "Allows web developers to modify the appearance of native controls in WebKit-based browsers.",
    syntax:
      "-webkit-appearance: none | auto | button | button-bevel | caret | checkbox | default-button | listbox | listitem | media-fullscreen-button | media-mute-button | media-play-button | media-seek-back-button | media-seek-forward-button | media-slider | media-sliderthumb | menulist | menulist-button | menulist-text | menulist-textfield | none | push-button | radio | searchfield | searchfield-cancel-button | searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | square-button | textarea | textfield;",
  },
  webkitbackdropfilter: {
    definition:
      "Applies a filter effect to the backdrop of an element, which is the area behind the element.",
    syntax:
      "-webkit-backdrop-filter: none | blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | url();",
  },
  webkitborderhorizontalspacing: {
    definition: "Specifies the horizontal spacing between adjacent borders.",
    syntax: "-webkit-border-horizontal-spacing: <length>;",
  },
  webkitborderimage: {
    definition:
      "Specifies how to slice an image to create nine-patch images, which are used for border images.",
    syntax:
      "-webkit-border-image: source || slice || width || outset || repeat;",
  },
  webkitborderverticalspacing: {
    definition: "Specifies the vertical spacing between adjacent borders.",
    syntax: "-webkit-border-vertical-spacing: <length>;",
  },
  webkitboxalign: {
    definition:
      "Specifies how a flexbox aligns its items along the cross axis.",
    syntax: "-webkit-box-align: start | end | center | baseline | stretch;",
  },
  webkitboxdecorationbreak: {
    definition:
      "Specifies how box decorations are drawn when they overlap a line break.",
    syntax: "-webkit-box-decoration-break: slice | clone;",
  },
  webkitboxdirection: {
    definition:
      "Specifies whether a flexbox lays out its items in horizontal rows or vertical columns.",
    syntax: "-webkit-box-direction: normal | reverse;",
  },
  webkitboxflex: {
    definition:
      "Specifies how much a flexbox item can grow or shrink relative to its siblings.",
    syntax: "-webkit-box-flex: <number>;",
  },
  webkitboxflexgroup: {
    definition:
      "Specifies which flexbox items are considered siblings for the purpose of determining growth and shrinkage.",
    syntax: "-webkit-box-flex-group: <integer>;",
  },
  webkitboxlines: {
    definition:
      "Specifies how flexbox items wrap across multiple lines when the available space is insufficient.",
    syntax: "-webkit-box-lines: single | multiple;",
  },
  webkitboxordinalgroup: {
    definition: "Specifies the order in which flexbox items are displayed.",
    syntax: "-webkit-box-ordinal-group: <integer>;",
  },
  webkitboxorient: {
    definition: "Specifies the orientation of a flexbox.",
    syntax:
      "-webkit-box-orient: horizontal | vertical | inline-axis | block-axis | inherit;",
  },
  webkitboxpack: {
    definition: "Specifies how a flexbox aligns its items along the main axis.",
    syntax: "-webkit-box-pack: start | end | center | justify;",
  },
  webkitboxshadow: {
    definition: "Adds a shadow to an element.",
    syntax: "-webkit-box-shadow: none | <shadow>;",
  },
  webkitboxsizing: {
    definition: "Specifies how an element's width and height are calculated.",
    syntax: "-webkit-box-sizing: content-box | border-box | padding-box;",
  },
  webkitclippath: {
    definition: "Clips an element to a specified shape.",
    syntax:
      "-webkit-clip-path: none | <url> | <basic-shape> | <geometry-box> | <fill-box> | <clip-box>;",
  },
  webkitcolumnbreakafter: {
    definition: "Specifies the page-break behavior after an element.",
    syntax:
      "-webkit-column-break-after: auto | always | avoid | left | right | page | column | avoid-page | avoid-column;",
  },
  webkitcolumnbreakbefore: {
    definition: "Specifies the page-break behavior before an element.",
    syntax:
      "-webkit-column-break-before: auto | always | avoid | left | right | page | column | avoid-page | avoid-column;",
  },
  webkitcolumnbreakinside: {
    definition: "Specifies the page-break behavior inside an element.",
    syntax:
      "-webkit-column-break-inside: auto | avoid | avoid-page | avoid-column;",
  },

  //c definitions
  printf: {
    definition:
      "printf is a standard library function in C used for formatted output. It allows you to print formatted text to the standard output (usually the console) or to a file.",
    syntax: '<code>printf("Hello, %s!", name);</code>',
  },

  scanf: {
    definition:
      "scanf is a standard library function in C used for formatted input. It allows you to read input from the standard input (usually the keyboard) and store it in variables.",
    syntax: '<code>scanf("%d", &num);</code>',
  },

  getchar: {
    definition:
      "getchar is a standard library function in C used for reading a single character from the standard input. It returns the ASCII value of the character as an integer.",
    syntax: "<code>char ch = getchar();</code>",
  },

  strcpy: {
    definition:
      "strcpy is a standard library function in C used for copying a string from one location to another. It copies characters from a source string to a destination string until a null terminator is encountered.",
    syntax:
      '<code>char src[] = "Hello"; char dest[10]; strcpy(dest, src);</code>',
  },

  strlen: {
    definition:
      "strlen is a standard library function in C used for finding the length of a string. It counts the number of characters in a string until a null terminator is encountered.",
    syntax: '<code>char str[] = "Hello"; int len = strlen(str);</code>',
  },
  fflush: {
    definition:
      "fflush is a standard library function in C used for flushing the output buffer of a stream. It ensures that any buffered data in the output stream is written to the actual output device, such as the console or a file.",
    syntax: "<code>fflush(FILE *stream);</code>",
  },
  assignmentoperator: {
    definition:
      "Assigns a value to a variable. The right-hand side of the operator is evaluated first, and the resulting value is stored in the left-hand side variable.",
    syntax: "x = 42;",
  },
  arithmeticoperators: {
    definition:
      "Perform basic arithmetic operations, such as addition (+), subtraction (-), multiplication (*), and division (/). The operands can be integers or floating-point numbers.",
    syntax: "x + y, x - y, x * y, x / y",
  },
  incrementanddecrementoperators: {
    definition:
      "Add or subtract one from a variable's value. The operator can be placed before (prefix) or after (postfix) the variable name, and the position affects when the value is modified. The postfix operator returns the value before the increment or decrement, while the prefix operator returns the value after the increment or decrement.",
    syntax: "x++, ++x, x--, --x",
  },
  relationaloperators: {
    definition:
      "Compare two values and return a Boolean value indicating whether the comparison is true or false. The operands can be integers, floating-point numbers, or characters.",
    syntax: "x < y, x > y, x <= y, x >= y, x == y, x != y",
  },
  logicaloperators: {
    definition:
      "Combine multiple conditions and return a Boolean value indicating whether the combination is true or false. The operands can be expressions that evaluate to a Boolean value.",
    syntax: "x && y (logical AND), x || y (logical OR), !x (logical NOT)",
  },
  bitwiseoperators: {
    definition:
      "Perform bitwise operations, such as AND (&), OR (|), XOR (^), and NOT (~), on integer values. The operands are treated as binary values and the operation is performed on each bit of the values.",
    syntax:
      "x & y (bitwise AND), x | y (bitwise OR), x ^ y (bitwise XOR), ~x (bitwise NOT)",
  },
  conditionaloperator: {
    definition:
      "A shorthand way to write an if-else statement. The operator evaluates the condition and returns the first expression if the condition is true, or the second expression if the condition is false.",
    syntax: "x > y ? x : y",
  },
  commaoperator: {
    definition:
      "Evaluates two expressions and returns the value of the second expression. The comma operator can be used to separate expressions in a statement or a function argument list.",
    syntax: "x = 42, y = 24;",
  },
  pointeroperator: {
    definition:
      "Returns the memory address of a variable. The operator is used with the address-of operator (&) to obtain the address of a variable.",
  },
  addressofoperator: {
    definition:
      "Returns the memory address of a variable. The operator is used with the pointer operator (*) to access the value stored at the address.",
    syntax: "*p",
  },
  sizeofoperator: {
    definition:
      "Returns the size, in bytes, of a variable or data type. The operator can be used with any data type, including arrays and structures.",
    syntax: "sizeof(int), sizeof(x)",
  },
  castoperator: {
    definition:
      "Converts a value from one data type to another. The operator specifies the target data type in parentheses before the value to be converted.",
    syntax: "(float)x, (int)y",
  },
  conditionalcompilationoperator: {
    definition:
      "Conditionally includes or excludes parts of the code during compilation based on a preprocessor directive. The operator is used with the #ifdef, #ifndef, #else, and #endif directives.",
    syntax: "#ifdef DEBUG, #ifndef NDEBUG, #else, #endif",
  },
  integer: {
    definition:
      "A whole number that can be either positive, negative, or zero. In C, integers are represented using the 'int' data type, which typically takes up 2 or 4 bytes of memory.",
    syntax: "int x = 42;",
  },
  float: {
    definition:
      "A number with a fractional part. In C, floating-point numbers are represented using the 'float' data type, which typically takes up 4 bytes of memory.",
    syntax: "float pi = 3.14159;",
  },
  double: {
    definition:
      "A double-precision floating-point number, which has more precision than a float. In C, double-precision numbers are represented using the 'double' data type, which typically takes up 8 bytes of memory.",
    syntax: "double pi = 3.14159265358979323846;",
  },
  character: {
    definition:
      "A single character, such as a letter, number, or symbol. In C, characters are represented using the 'char' data type, which typically takes up 1 byte of memory.",
    syntax: "char c = 'a';",
  },
  string: {
    definition:
      "A sequence of characters. In C, strings are represented as arrays of characters, with a null terminator ('\0') at the end of the string.",
    syntax: "char str[] = 'Hello, world!';",
  },
  boolean: {
    definition:
      "A value that can be either true or false. In C, booleans are not a built-in data type, but are often represented using the 'int' data type, where 0 is false and any other value is true.",
    syntax: "int b = 1;",
  },
  auto: {
    definition:
      "A storage class specifier used to define local variables with automatic storage duration, meaning they are created when the program enters the block in which they are defined, and are destroyed when the block is exited.",
    syntax: "auto int x = 42;",
  },
  switch: {
    definition:
      "A keyword used to specify a multi-way decision statement that tests whether an expression matches one of several constant integer values.",
    syntax:
      "switch (expression) { case constant1: code to be executed if expression matches constant1; break; case constant2: code to be executed if expression matches constant2; break; default: code to be executed if expression does not match any constant; }",
  },
  break: {
    definition: "A keyword used to break out of a loop or switch statement.",
    syntax: "while (true) { if (x == 42) break; }",
  },
  case: {
    definition:
      "A keyword used in a switch statement to specify a case that matches a particular value.",
    syntax: "switch (x) { case 42: printf('Answer found!'); break; }",
  },
  char: {
    definition: "A data type used to represent a single character.",
    syntax: "char c = 'a';",
  },
  const: {
    definition:
      "A keyword used to specify that a variable's value cannot be modified after it is initialized.",
    syntax: "const int x = 42;",
  },
  continue: {
    definition: "A keyword used to skip to the next iteration of a loop.",
    syntax: "while (true) { if (x == 42) continue; }",
  },
  default: {
    definition:
      "A keyword used in a switch statement to specify the default case that is executed when none of the other cases match.",
    syntax:
      "switch (x) { case 42: printf('Answer found!'); break; default: printf('No answer found.'); }",
  },
  do: {
    definition:
      "A keyword used to specify a do-while loop, which executes the loop body at least once and then checks the loop condition.",
    syntax: "do { printf('Hello, world!'); } while (x == 42);",
  },
  double: {
    definition:
      "A data type used to represent a double-precision floating-point number.",
    syntax: "double pi = 3.14159265358979323846;",
  },
  else: {
    definition:
      "A keyword used to specify the code block that is executed when an if statement's condition is false.",
    syntax:
      "if (x == 42) { printf('Answer found!'); } else { printf('No answer found.'); }",
  },
  enum: {
    definition:
      "A keyword used to define an enumeration, which is a list of named values.",
    syntax: "enum day { MON, TUE, WED, THU, FRI, SAT, SUN };",
  },
  extern: {
    definition:
      "A storage class specifier used to declare a variable that is defined in another file.",
    syntax: "extern int x;",
  },
  float: {
    definition:
      "A data type used to represent a single-precision floating-point number.",
    syntax: "float pi = 3.14159;",
  },

  goto: {
    definition: "A keyword used to transfer control to a labeled statement.",
    syntax: "goto error;",
  },

  if: {
    definition:
      "A keyword used to specify a conditional statement that executes a block of code if the condition is true.",
    syntax: "if (x == 42) { printf('Answer found!'); }",
  },

  int: {
    definition: "A data type used to represent a whole number.",
    syntax: "int x = 42;",
  },

  long: {
    definition: "A data type used to represent a large whole number.",
    syntax: "long x = 1234567890L;",
  },

  register: {
    definition:
      "A storage class specifier used to suggest that a variable be stored in a CPU register for faster access.",
    syntax: "register int x;",
  },

  return: {
    definition: "A keyword used to exit a function and return a value.",
    syntax: "return 42;",
  },

  short: {
    definition: "A data type used to represent a small whole number.",
    syntax: "short x = 42;",
  },

  signed: {
    definition: "A data type modifier used to specify a signed integer.",
    syntax: "signed int x = -42;",
  },

  sizeof: {
    definition:
      "A keyword used to determine the size of a variable or data type in bytes.",
    syntax: "size_t size = sizeof(int);",
  },

  static: {
    definition:
      "A storage class specifier used to declare a variable with static storage duration, meaning it is created when the program starts and is destroyed when the program ends.",
    syntax: "static int x = 42;",
  },

  struct: {
    definition:
      "A keyword used to define a structure, which is a collection of related data items.",
    syntax: "struct person { char name[100]; int age; };",
  },

  typedef: {
    definition: "A keyword used to define a new type.",
    syntax: "typedef int myint;",
  },

  union: {
    definition:
      "A keyword used to define a union, which is a data type that can hold one of several types of data but only one at a time.",
    syntax: "union myunion { int i; char c; };",
  },

  unsigned: {
    definition: "A data type modifier used to specify an unsigned integer.",
    syntax: "unsigned int x = 42;",
  },

  void: {
    definition:
      "A data type used to represent nothing or an empty set of values.",
    syntax: "void func(void);",
  },
  volatile: {
    definition:
      "A type qualifier used to indicate that a variable's value may be changed outside of the program's control.",
    syntax: "volatile int *ptr;",
  },
  while: {
    definition:
      "A keyword used to specify a while loop, which executes a block of code repeatedly as long as a condition is true.",
    syntax: "while (x < 42) { printf('Still searching...'); }",
  },
  for: {
    definition:
      "A keyword used to specify a for loop, which executes a block of code repeatedly with a specified increment or decrement until a condition is met.",
    syntax:
      "for (initialization; condition; increment/decrement) { code to be executed; }",
  },
  function: {
    definition:
      "A group of statements that perform a specific task. It has a name, a return type, and a parameter list.",
    syntax:
      "return_type function_name(parameter1, parameter2, ... parameterN) { code to be executed; return value; }",
  },
  return: {
    definition: "A keyword used to return a value from a function.",
    syntax: "return value;",
  },
  stdioh: {
    definition:
      "A library that provides input/output operations such as printing output to the screen or reading input from the user.",
    syntax: "#include &lt;stdio.h&gt;",
  },

  stdlibh: {
    definition:
      "A library that provides functions for dynamic memory allocation, random number generation, sorting, and other useful functions.",
    syntax: "#include &lt;stdlib.h&gt;",
  },

  stringh: {
    definition:
      "A library that provides functions for manipulating strings, such as copying, concatenating, and comparing strings.",
    syntax: "#include &lt;string.h&gt;",
  },

  mathh: {
    definition:
      "A library that provides mathematical functions such as trigonometric functions, logarithms, and exponentials.",
    syntax: "#include &lt;math.h&gt;",
  },

  timeh: {
    definition:
      "A library that provides functions for working with time, such as getting the current time, setting timers, and converting between time formats.",
    syntax: "#include &lt;time.h&gt;",
  },

  ctypeh: {
    definition:
      "A library that provides functions for testing and converting characters, such as testing whether a character is a digit or a letter, and converting characters to uppercase or lowercase.",
    syntax: "#include &lt;ctype.h&gt;",
  },
  asserth: {
    definition:
      "A library that provides the assert macro, which is used for debugging and testing purposes to verify assumptions made by the program.",
    syntax: "#include &lt;assert.h&gt;",
  },

  errnoh: {
    definition:
      "A library that defines the integer variable errno, which is set by certain functions to indicate an error condition.",
    syntax: "#include &lt;errno.h&gt;",
  },

  fcntlh: {
    definition:
      "A library that provides functions for manipulating file descriptors, such as opening and closing files, and setting file status flags.",
    syntax: "#include &lt;fcntl.h&gt;",
  },

  signalh: {
    definition:
      "A library that provides functions for working with signals, which are asynchronous notifications sent to a process to indicate an event or error condition.",
    syntax: "#include &lt;signal.h&gt;",
  },

  unistdh: {
    definition:
      "A library that provides functions for interacting with the operating system, such as getting the process ID, setting the process user ID, and sleeping for a specified amount of time.",
    syntax: "#include &lt;unistd.h&gt;",
  },

  pthreadh: {
    definition:
      "A library that provides support for multi-threaded programming, allowing programs to run multiple threads of execution concurrently.",
    syntax: "#include &lt;pthread.h&gt;",
  },
  pointers: {
    definition:
      "A variable that stores the memory address of another variable. Pointers are used extensively in C for dynamic memory allocation and passing values between functions.",
    syntax: "int *ptr;",
  },

  structures: {
    definition:
      "A user-defined data type that groups together variables of different types under a single name. Structures allow programmers to create complex data structures and organize related data in a meaningful way.",
    syntax: "struct student { char name[20]; int age; float gpa; };",
  },

  fileio: {
    definition:
      "Input/output operations on files, including reading and writing data to files. In C, file I/O is handled through the use of file streams, which are represented by file pointers.",
    syntax: 'FILE *fp = fopen("file.txt", "r");',
  },

  dynamicmemoryallocation: {
    definition:
      "The process of allocating memory at run-time, as opposed to compile-time. In C, dynamic memory allocation is performed using the functions malloc, calloc, and realloc.",
    syntax: "int *ptr = (int *) malloc(sizeof(int));",
  },

  recursion: {
    definition:
      "A function calling itself, either directly or indirectly. Recursion is a powerful technique in C programming, and is used to solve many complex problems.",
    syntax:
      "void recursive_function(int n) { if (n > 0) recursive_function(n - 1); }",
  },
  pointersarithmetic: {
    definition:
      "Pointer arithmetic is the arithmetic performed on pointer variables. It is used to calculate the address of the next or previous memory location of a variable.",
    syntax: "int arr[5]; int *ptr = arr; ptr++;",
  },

  bitmanipulation: {
    definition:
      "Bit manipulation is the manipulation of individual bits in a data item. It is used in C to perform various operations such as bit masking, bit shifting, and bit testing.",
    syntax: "int x = 0b1010; x &= ~(1 << 2);",
  },

  preprocessordirectives: {
    definition:
      "Preprocessor directives are instructions that are executed before the compilation of the code. They are used to include header files, define constants, and conditionally compile code.",
    syntax:
      '#include <stdio.h>\n#define PI 3.14159\n#ifdef DEBUG\nprintf("Debug mode enabled");\n#endif',
  },

  typecasting: {
    definition:
      "Typecasting is the process of converting a variable from one data type to another. It is used in C to convert between different types of data and to perform arithmetic operations on mixed data types.",
    syntax: "int x = 5; float y = (float) x / 2;",
  },

  pointerstofunctions: {
    definition:
      "A pointer to a function is a variable that stores the memory address of a function. Pointers to functions are used in C to pass functions as arguments to other functions and to dynamically select which function to call.",
    syntax: "int (*fp)(int, int) = &add; int result = (*fp)(2, 3);",
  },

  multidimensionalarrays: {
    definition:
      "A multidimensional array is an array of arrays. It is used in C to represent matrices and other complex data structures that require more than one index to access individual elements.",
    syntax: "int matrix[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};",
  },

  //javasript defintions
  primitivevariables: {
    definition:
      "Variables that store a single, simple value. Examples include numbers, strings, booleans, null, and undefined.",
    syntax:
      'let myNumber = 42; // Number\nlet myString = "Hello"; // String\nlet myBoolean = true; // Boolean\nlet myNull = null; // Null\nlet myUndefined = undefined; // Undefined',
  },

  objectvariables: {
    definition:
      "Variables that store complex, structured data. Examples include objects, arrays, and functions.",
    syntax:
      'let myObject = {key1: "value1", key2: "value2"}; // Object\nlet myArray = [1, 2, 3]; // Array\nfunction myFunction() {console.log("Hello, world!");} // Function',
  },

  numbers: {
    definition:
      "Numeric data types, which can be integers or floating-point values.",
    syntax:
      "let myInteger = 42; // Integer\nlet myFloat = 3.14; // Floating-point",
  },

  strings: {
    definition:
      "Text data types, which can contain any combination of letters, numbers, and symbols.",
    syntax: 'let myString = "Hello, world!";',
  },

  boolean: {
    definition: "Logical data types, which can be either true or false.",
    syntax: "let myBoolean = true;",
  },

  null: {
    definition: "A special data type that represents a null or empty value.",
    syntax: "let myNull = null;",
  },

  undefined: {
    definition:
      "A special data type that represents an undefined or non-existent value.",
    syntax: "let myUndefined;",
  },

  objects: {
    definition:
      "Structured data types that can contain properties and methods.",
    syntax: 'let myObject = {key1: "value1", key2: "value2"};',
  },

  array: {
    definition: "Specialized objects that store collections of data.",
    syntax: "let myArray = [1, 2, 3];",
  },

  functions: {
    definition:
      "Objects that can be called and executed to perform a specific task.",
    syntax: 'function myFunction() {console.log("Hello, world!");}',
  },

  conditionalstatements: {
    definition:
      'Conditional statements are used to execute different code based on different conditions. The most common conditional statements in JavaScript are "if", "else if", and "else".',
    syntax:
      "if (condition1) {\n  // Code to execute if condition1 is true\n} else if (condition2) {\n  // Code to execute if condition2 is true\n} else {\n  // Code to execute if no conditions are true\n}",
  },

  loops: {
    definition:
      'Loops are used to execute code repeatedly while a condition is true. The most common loops in JavaScript are "for", "while", and "do while".',
    syntax:
      "for (initialization; condition; iteration) {\n  // Code to execute on each iteration\n}\n\nwhile (condition) {\n  // Code to execute while condition is true\n}\n\n// The do while loop is similar to the while loop, but it always executes the code at least once\n\ndo {\n  // Code to execute on each iteration\n} while (condition);",
  },

  switch: {
    definition:
      "Switch statements are used to execute different code based on different values. They are similar to if/else statements, but are often more concise and easier to read.",
    syntax:
      "switch (expression) {\n  case value1:\n    // Code to execute if expression equals value1\n    break;\n  case value2:\n    // Code to execute if expression equals value2\n    break;\n  default:\n    // Code to execute if no cases match\n}",
  },
  functiondeclaration: {
    definition:
      'A function declaration defines a named function that can be called later in your code. It consists of the "function" keyword, followed by the function name, a list of parameters (in parentheses), and the function body (in curly braces).',
    syntax:
      "function myFunction(parameter1, parameter2) {\n  // Function body\n}",
  },

  functionexpression: {
    definition:
      'A function expression defines an unnamed function that is assigned to a variable. It consists of the "function" keyword, a list of parameters (in parentheses), and the function body (in curly braces), all inside a variable assignment.',
    syntax:
      "const myFunction = function(parameter1, parameter2) {\n  // Function body\n};",
  },

  arrowfunction: {
    definition:
      "An arrow function is a shorthand for creating a function expression. It consists of the parameter list (in parentheses), an arrow (=>), and the function body (which may or may not be enclosed in curly braces).",
    syntax:
      "const myFunction = (parameter1, parameter2) => {\n  // Function body\n};",
  },

  callbackfunction: {
    definition:
      "A callback function is a function that is passed as an argument to another function and is called when the original function completes. It is often used for asynchronous operations, such as handling events or making API requests.",
    syntax:
      "function myFunction(callback) {\n  // Function body\n  callback();\n}",
  },
  objectliteral: {
    definition:
      "An object literal is a way of creating a new object with properties and values. It consists of a pair of curly braces, with zero or more key-value pairs inside, separated by commas. Each key is a string, and each value can be any valid JavaScript expression.",
    syntax:
      "const myObject = {\n  key1: value1,\n  key2: value2,\n  key3: value3\n};",
  },

  objectconstructor: {
    definition:
      'An object constructor is a function that creates a new object. It is defined using the "function" keyword and the name of the constructor (usually capitalized). Properties and methods can be added to the constructor function using the "this" keyword.',
    syntax:
      "function MyObject(key1, key2, key3) {\n  this.key1 = key1;\n  this.key2 = key2;\n  this.key3 = key3;\n}\n\nconst myObject = new MyObject(value1, value2, value3);",
  },

  objectmethod: {
    definition:
      'An object method is a function that is a property of an object. It can be called using the dot notation, and has access to the object\'s properties using the "this" keyword.',
    syntax:
      "const myObject = {\n  key1: value1,\n  key2: value2,\n  myMethod: function() {\n    // Function body\n    console.log(this.key1);\n  }\n};\n\nmyObject.myMethod();",
  },

  prototype: {
    definition:
      'The prototype is an object that is shared among all instances of an object constructor. Properties and methods can be added to the prototype using the "prototype" keyword. This allows you to add functionality to all instances of an object without duplicating code.',
    syntax:
      "function MyObject(key1, key2, key3) {\n  this.key1 = key1;\n  this.key2 = key2;\n}\n\nMyObject.prototype.key3 = value3;\n\nconst myObject = new MyObject(value1, value2);\nconsole.log(myObject.key3);",
  },
  arrayliteral: {
    definition:
      "An array literal is a way of creating a new array with values. It consists of a pair of square brackets, with zero or more values inside, separated by commas.",
    syntax: "const myArray = [value1, value2, value3];",
  },

  arrayconstructor: {
    definition:
      'An array constructor is a function that creates a new array. It is defined using the "Array" keyword and can take zero or more arguments, each of which becomes an element in the new array. Alternatively, you can use the "new" keyword to create an empty array of a specific length.',
    syntax:
      "const myArray = new Array(value1, value2, value3);\nconst emptyArray = new Array(length);",
  },

  arraymethod: {
    definition:
      'An array method is a function that is a property of an array. It can be called using the dot notation and can modify the array in various ways (e.g. adding, removing, or modifying elements). Some common array methods include "push", "pop", "shift", "unshift", "splice", and "slice".',
    syntax:
      "const myArray = [value1, value2, value3];\n\nmyArray.push(value4);\nmyArray.pop();\nmyArray.splice(1, 1, newValue);",
  },

  arrayiteration: {
    definition:
      'Array iteration refers to the process of iterating over an array and performing some action on each element. There are several ways to iterate over an array in JavaScript, including "for" loops, "forEach" method, "map" method, "filter" method, "reduce" method, and more.',
    syntax:
      "const myArray = [value1, value2, value3];\n\nfor (let i = 0; i < myArray.length; i++) {\n  console.log(myArray[i]);\n}\n\nmyArray.forEach(function(value) {\n  console.log(value);\n});\n\nconst newArray = myArray.map(function(value) {\n  return value * 2;\n});",
  },

  classdefinition: {
    definition:
      'A class definition is a block of code that defines a new class in JavaScript. It consists of the "class" keyword followed by the name of the class, and a set of curly braces that enclose the properties and methods of the class.',
    syntax:
      "class MyClass {\n  constructor(arg1, arg2) {\n    // constructor code\n  }\n  method1() {\n    // method code\n  }\n  method2() {\n    // method code\n  }\n}",
  },

  constructormethod: {
    definition:
      'The constructor method is a special method that is called when a new instance of a class is created. It is defined using the "constructor" keyword and can take any number of arguments. The constructor is used to initialize the properties of the class.',
    syntax:
      "class MyClass {\n  constructor(arg1, arg2) {\n    this.property1 = arg1;\n    this.property2 = arg2;\n  }\n}",
  },

  staticmethod: {
    definition:
      'A static method is a method that is called on the class itself, rather than on an instance of the class. It is defined using the "static" keyword and can be used for tasks that do not require an instance of the class to be created.',
    syntax:
      "class MyClass {\n  static staticMethod() {\n    // static method code\n  }\n}",
  },

  inheritance: {
    definition:
      'Inheritance is the process by which one class can inherit properties and methods from another class. In JavaScript, inheritance is achieved using the "extends" keyword. The subclass (the class that inherits from another class) can override properties and methods of the superclass (the class being inherited from).',
    syntax: "class MyClass extends SuperClass {\n  // class code\n}",
  },
  promise: {
    definition:
      "A Promise is an object representing the eventual completion or failure of an asynchronous operation, and its resulting value. Promises provide a simpler alternative to callbacks, for handling asynchronous operations.",
    syntax: `new Promise(function(resolve, reject) {
                          // async code
                          if (/* success */) {
                            resolve(result);
                          } else {
                            reject(error);
                          }
                        });`,
  },

  resolve: {
    definition:
      'The "resolve" function is used to fulfill a promise with a given value. It is typically called when the asynchronous operation has completed successfully.',
    syntax: `new Promise(function(resolve, reject) {
                          // async code
                          if (/* success */) {
                            resolve(result);
                          } else {
                            reject(error);
                          }
                        });`,
  },

  reject: {
    definition:
      'The "reject" function is used to reject a promise with a given reason (i.e. an error). It is typically called when the asynchronous operation has failed.',
    syntax: `new Promise(function(resolve, reject) {
                          // async code
                          if (/* success */) {
                            resolve(result);
                          } else {
                            reject(error);
                          }
                        });`,
  },

  then: {
    definition:
      'The "then" method is used to register callbacks to be called when the promise is fulfilled. It takes two arguments: a callback function to be called on success, and a callback function to be called on failure.',
    syntax: `myPromise.then(
                          function(result) {
                            // success callback
                          },
                          function(error) {
                            // failure callback
                          }
                        );`,
  },

  catch: {
    definition:
      'The "catch" method is used to register a callback to be called when the promise is rejected. It takes a single argument: a callback function to be called on failure.',
    syntax: `myPromise.catch(
                          function(error) {
                            // failure callback
                          }
                        );`,
  },
  callbackfunction: {
    definition:
      "A callback function is a function passed as an argument to another function, which is then invoked inside the outer function to complete some kind of action. Callbacks are often used in asynchronous programming to handle events that occur at a later time.",
    syntax: `function outerFunction(callback) {
                    // do some work
                    callback();
                  }

                  function callback() {
                    // do something else
                  }

                  outerFunction(callback);`,
  },

  asynchronouscallback: {
    definition:
      "An asynchronous callback is a callback function that is executed at some later time, after the initial function has completed its work. Asynchronous callbacks are commonly used in event-driven programming.",
    syntax: `function asyncFunction(callback) {
                    setTimeout(callback, 1000);
                  }

                  function callback() {
                    // do something after 1 second
                  }

                  asyncFunction(callback);`,
  },

  errorfirstcallback: {
    definition:
      "An error-first callback is a callback function that takes an error object as its first argument, followed by any additional arguments. This convention is commonly used in Node.js and other JavaScript libraries to handle errors in asynchronous operations.",
    syntax: `function errorFirstCallback(err, result) {
                    if (err) {
                      // handle error
                    } else {
                      // handle success
                    }
                  }`,
  },

  higherorderfunction: {
    definition:
      "A higher-order function is a function that takes one or more functions as arguments, and/or returns a function as its result. Higher-order functions are commonly used to implement callbacks and other functional programming patterns in JavaScript.",
    syntax: `function higherOrderFunction(callback) {
                    // do some work
                    callback();
                  }

                  function callback() {
                    // do something else
                  }

                  higherOrderFunction(callback);`,
  },

  anonymousfunction: {
    definition:
      "An anonymous function is a function that does not have a name. Anonymous functions are commonly used as callback functions, and as arguments to higher-order functions.",
    syntax: `setTimeout(function() {
                    // do something after 1 second
                  }, 1000);`,
  },

  node: {
    definition:
      "A node is a basic unit of the Document Object Model (DOM). Each node represents an element, attribute, text, comment, or other type of item in an HTML, XHTML, or XML document.",
    syntax: `// get the parent node of an element
                  const parentNode = element.parentNode;

                  // get the child nodes of an element
                  const childNodes = element.childNodes;`,
  },

  element: {
    definition:
      "An element is a specific type of node in the Document Object Model (DOM) that represents an HTML or XML element. Elements have properties and methods that allow you to manipulate their attributes, styles, and content.",
    syntax: `// get an element by its ID
                  const element = document.getElementById('my-element');

                  // change the text content of an element
                  element.textContent = 'New content';

                  // add a CSS class to an element
                  element.classList.add('my-class');`,
  },

  event: {
    definition:
      "An event is a signal that something has happened on a web page, such as a user clicking a button or an element loading. Event handling is the process of responding to these signals by executing code in response to the event.",
    syntax: `// add an event listener to an element
                  element.addEventListener('click', function(event) {
                    // handle the click event
                  });`,
  },

  attribute: {
    definition:
      "An attribute is a property of an HTML or XML element that describes its characteristics or behavior. Attributes can be used to set the size, color, position, and other properties of an element.",
    syntax: `// get an element's attribute
                  const attribute = element.getAttribute('data-attribute');

                  // set an element's attribute
                  element.setAttribute('data-attribute', 'new value');`,
  },
  api: {
    definition:
      "An API, or Application Programming Interface, is a set of rules and protocols that allow different software applications to communicate with each other. APIs are used to build software and web applications, and they allow developers to access data and functionality provided by other applications or services.",
    syntax: `// example API call using fetch()
            fetch('https://api.example.com/data')
              .then(response => response.json())
              .then(data => console.log(data));`,
  },

  restfulapi: {
    definition:
      "A RESTful API is a type of API that follows the principles of Representational State Transfer (REST). RESTful APIs use HTTP requests to retrieve or modify data, and they typically return data in a JSON or XML format. RESTful APIs are commonly used in web applications and mobile apps.",
    syntax: `// example RESTful API call using fetch()
            fetch('https://api.example.com/data')
              .then(response => response.json())
              .then(data => console.log(data));`,
  },

  soapapi: {
    definition:
      "A SOAP API is a type of API that uses the Simple Object Access Protocol (SOAP) to exchange data between applications. SOAP APIs use XML to represent data, and they typically require more bandwidth and processing power than RESTful APIs. SOAP APIs are commonly used in enterprise applications and web services.",
    syntax: `// example SOAP API call using an XMLHttpRequest object
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://api.example.com/soap');
            xhr.setRequestHeader('Content-Type', 'text/xml');
            xhr.onreadystatechange = function() {
              if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(xhr.responseXML);
              }
            };
            const requestBody = '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.w3.org/2003/05/soap-envelope/ http://www.w3.org/2003/05/soap-envelope.xsd"><soap:Header/><soap:Body><m:GetStockPrice xmlns:m="http://www.example.com/stocks"><m:StockName>IBM</m:StockName></m:GetStockPrice></soap:Body></soap:Envelope>';
            xhr.send(requestBody);`,
  },

  oauth: {
    definition:
      "OAuth is a standard protocol for authorization, often used by APIs to allow third-party applications to access user data without requiring the user to share their login credentials. OAuth uses access tokens to grant access to specific resources or data, and it allows users to control which applications can access their data.",
    syntax: `// example OAuth flow for a web application
            // 1. Redirect the user to the OAuth provider's authorization page
            window.location.href = 'https://oauth.provider.com/authorize?client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&response_type=code';

            // 2. After the user approves the authorization request, the OAuth provider redirects back to the redirect URI with an authorization code

            // 3. Exchange the authorization code for an access token
            fetch('https://oauth.provider.com/token', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              body: 'client_id=CLIENT_ID&client_secret=CLIENT_SECRET&code=AUTHORIZATION_CODE&redirect_uri=REDIRECT_URI&grant_type=authorization_code'
            })
            // 4. Use the access token to make API requests
      fetch('https://api.example.com/data', {
      headers: {
      'Authorization': 'Bearer ACCESS_TOKEN'
      }
      })
      .then(response => response.json())
      .then(data => console.log(data)); }, { term: 'GraphQL', definition: 'GraphQL is a query language for APIs that allows clients to request only the data they need, and it provides a single endpoint for all data queries. Unlike RESTful APIs, which often require multiple requests to retrieve related data, GraphQL allows developers to specify exactly what data they want to retrieve in a single request.', syntax:// example GraphQL query using fetch()
      fetch('https://api.example.com/graphql', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ACCESS_TOKEN'
      },
      body: JSON.stringify({ query })
      })
      .then(response => response.json())
      .then(data => console.log(data));`,
  },

  // java definition
  class: {
    definition: "Defines a class in Java",
    syntax: "public class MyClass { // class body }",
  },
  method: {
    definition: "Defines a method in a Java class",
    syntax: "public void myMethod() { // method body }",
  },
  variable: {
    definition: "Declares a variable in Java",
    syntax: "int myInt = 42;",
  },
  if: {
    definition: "Conditional statement in Java",
    syntax: "if (condition) { // code to execute if condition is true }",
  },
  for: {
    definition: "Loop statement in Java",
    syntax: "for (initialization; condition; update) { // code to execute }",
  },

  variable: {
    definition:
      "A container for storing a value in Java. It has a name, a data type, and a value (optional)",
    syntax: "int myInt = 42;",
  },

  primitivetype: {
    definition:
      "A basic data type in Java that represents a single value. It is not an object and has no methods",
    syntax: "int myInt = 42; // int is a primitive type",
  },

  referencetype: {
    definition:
      "A data type in Java that refers to an object. It has methods and can be used to access an object's properties and behavior",
    syntax: 'String myString = "Hello, World!"; // String is a reference type',
  },
  class: {
    definition:
      "A blueprint for creating objects that define the data and behavior of those objects",
    syntax: "public class MyClass { // class body }",
  },
  object: {
    definition: "An instance of a class that has its own state and behavior",
    syntax: "MyClass myObject = new MyClass();",
  },
  constructor: {
    definition:
      "A special method that is used to initialize objects of a class",
    syntax: "public MyClass() { // constructor body }",
  },
  inheritance: {
    definition:
      "A mechanism by which one class can inherit the properties and methods of another class",
    syntax: "public class SubClass extends SuperClass { // subclass body }",
  },
  polymorphism: {
    definition: "The ability of an object to take on multiple forms",
    syntax:
      "public class MyClass { public void myMethod() { // method body } } public class SubClass extends MyClass { public void myMethod() { // method body } }",
  },
  encapsulation: {
    definition:
      "The practice of hiding the implementation details of a class from the outside world",
    syntax:
      "public class MyClass { private int myVariable; public int getMyVariable() { return myVariable; } public void setMyVariable(int newValue) { myVariable = newValue; } }",
  },
  abstraction: {
    definition:
      "The practice of reducing complexity by hiding unnecessary details while showing only the essential features of an object",
    syntax:
      "public abstract class MyAbstractClass { public abstract void myAbstractMethod(); }",
  },
  interface: {
    definition:
      "A collection of abstract methods that define a set of requirements for classes that implement the interface",
    syntax:
      "public interface MyInterface { public void myMethod(); } public class MyClass implements MyInterface { public void myMethod() { // method body } }",
  },
  package: {
    definition:
      "A group of related classes and interfaces that are used together and stored in the same directory",
    syntax:
      "package com.mycompany.mypackage; public class MyClass { // class body }",
  },
  try: {
    definition: "The block of code that may throw an exception",
    syntax: "try { // code that may throw an exception }",
  },
  catch: {
    definition:
      "The block of code that is executed when an exception is thrown in the try block",
    syntax: "catch (Exception e) { // code to handle the exception }",
  },
  finally: {
    definition:
      "The block of code that is always executed, whether or not an exception is thrown",
    syntax: "finally { // code that is always executed }",
  },
  throw: {
    definition: "The keyword used to throw an exception in a block of code",
    syntax: "if (myVariable == null) { throw new NullPointerException(); }",
  },
  throws: {
    definition:
      "The keyword used in a method signature to indicate that the method may throw a certain type of exception",
    syntax: "public void myMethod() throws IOException { // method body }",
  },

  exception: {
    definition:
      "An event that occurs during the execution of a program that disrupts the normal flow of instructions",
    syntax:
      "try { // code that may throw an exception } catch (Exception e) { // code to handle the exception } finally { // code that is always executed }",
  },
  trywithresources: {
    definition:
      "A try block that declares one or more resources to be used in the try block, and ensures that those resources are closed when the block is finished",
    syntax:
      "try (BufferedReader br = new BufferedReader(new FileReader(file))) { // code that uses the BufferedReader }",
  },

  inputstream: {
    definition:
      "An abstract class that represents a stream of bytes for reading",
    syntax: 'InputStream input = new FileInputStream("file.txt");',
  },

  outputstream: {
    definition:
      "An abstract class that represents a stream of bytes for writing",
    syntax: 'OutputStream output = new FileOutputStream("file.txt");',
  },

  reader: {
    definition:
      "An abstract class that represents a stream of characters for reading",
    syntax: 'Reader reader = new FileReader("file.txt");',
  },

  writer: {
    definition:
      "An abstract class that represents a stream of characters for writing",
    syntax: 'Writer writer = new FileWriter("file.txt");',
  },

  bufferedinputstream: {
    definition: "A class that provides buffering for an input stream",
    syntax:
      'InputStream input = new BufferedInputStream(new FileInputStream("file.txt"));',
  },

  bufferedoutputstream: {
    definition: "A class that provides buffering for an output stream",
    syntax:
      'OutputStream output = new BufferedOutputStream(new FileOutputStream("file.txt"));',
  },

  bufferedreader: {
    definition:
      "A class that reads text from a character stream and buffers characters for efficient reading",
    syntax:
      'BufferedReader reader = new BufferedReader(new FileReader("file.txt"));',
  },

  bufferedwriter: {
    definition:
      "A class that writes text to a character stream and buffers characters for efficient writing",
    syntax:
      'BufferedWriter writer = new BufferedWriter(new FileWriter("file.txt"));',
  },

  scanner: {
    definition:
      "A class that provides methods for parsing primitive types and strings from a stream",
    syntax: 'Scanner scanner = new Scanner(new File("file.txt"));',
  },

  systemin: {
    definition:
      "An InputStream object that represents the standard input stream",
    syntax: "InputStream input = System.in;",
  },

  systemout: {
    definition:
      "An OutputStream object that represents the standard output stream",
    syntax: "OutputStream output = System.out;",
  },

  generics: {
    definition:
      "Generics allow types (classes and interfaces) to be parameters when defining classes, interfaces and methods. This provides a way to re-use the same code with different inputs. It also enables compile-time type checking, which is safer than run-time type checking.",
    syntax:
      "public class MyGenericClass<T> {\n\tprivate T myVar;\n\tpublic T getMyVar() {\n\t\treturn myVar;\n\t}\n\tpublic void setMyVar(T myVar) {\n\t\tthis.myVar = myVar;\n\t}\n}",
  },

  typeparameter: {
    definition:
      "A type parameter is a placeholder for a type that will be specified when an instance of a generic class or method is created.",
    syntax: "public class MyClass<T> { ... }",
  },

  genericmethod: {
    definition:
      "A method that uses a type parameter to define the type of one or more of its parameters or its return type.",
    syntax: "public <T> T myGenericMethod(T arg) { ... }",
  },

  wildcard: {
    definition:
      "A special type argument that can be used as a substitute for any other type.",
    syntax: "public void myMethod(List<? extends Number> list) { ... }",
  },

  boundedtypeparameter: {
    definition:
      "A type parameter that specifies a bound on the type argument that can be used with a generic class or method.",
    syntax: "public class MyClass<T extends SomeClass> { ... }",
  },

  typeerasure: {
    definition:
      "The process by which the Java compiler removes all information related to type parameters and type arguments during the compilation process.",
    syntax:
      "public class MyClass<T> {\n\tprivate T myVar;\n\tpublic T getMyVar() {\n\t\treturn myVar;\n\t}\n\tpublic void setMyVar(T myVar) {\n\t\tthis.myVar = myVar;\n\t}\n}\n\nMyClass<Integer> myObj = new MyClass<>();",
  },
  thread: {
    definition:
      "A thread is a single sequential flow of execution within a program. In Java, a thread is created by instantiating an object of the Thread class and invoking its start() method.",
    syntax: "Thread myThread = new Thread();\nmyThread.start();",
  },

  runnable: {
    definition:
      "A Runnable is an interface that defines a single method run() that must be implemented by any class whose instances are intended to be executed by a thread.",
    syntax:
      'public class MyRunnable implements Runnable {\n\tpublic void run() {\n\t\tSystem.out.println("MyRunnable running");\n\t}\n}\n\nMyRunnable myRunnable = new MyRunnable();\nThread myThread = new Thread(myRunnable);\nmyThread.start();',
  },

  threadStates: {
    definition:
      "A thread can be in one of several states: NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, or TERMINATED. The state of a thread is determined by its current activity and any blocking operations it may be performing.",
    syntax: "",
  },

  synchronization: {
    definition:
      "Synchronization is a mechanism that ensures that only one thread at a time executes a critical section of code. In Java, synchronization can be achieved by using the synchronized keyword on a method or a block of code.",
    syntax:
      "public synchronized void myMethod() {\n\t// critical section of code\n}",
  },

  lock: {
    definition:
      "A lock is a mechanism that provides exclusive access to a shared resource. In Java, a lock can be obtained by calling the lock() method on a Lock object, and released by calling the unlock() method.",
    syntax:
      "Lock myLock = new ReentrantLock();\nmyLock.lock();\ntry {\n\t// critical section of code\n} finally {\n\tmyLock.unlock();\n}",
  },

  semaphore: {
    definition:
      "A semaphore is a synchronization primitive that controls access to a shared resource through a counter. In Java, a semaphore can be obtained by calling the acquire() method on a Semaphore object, and released by calling the release() method.",
    syntax:
      "Semaphore mySemaphore = new Semaphore(1);\nmySemaphore.acquire();\ntry {\n\t// critical section of code\n} finally {\n\tmySemaphore.release();\n}",
  },

  concurrentcollection: {
    definition:
      "A collection class that is designed to be safely used by multiple threads concurrently.",
    syntax:
      'ConcurrentHashMap<String, Integer> myMap = new ConcurrentHashMap<>();\nmyMap.put("key", 1);\nint value = myMap.get("key");',
  },

  threadPool: {
    definition:
      "A thread pool is a group of pre-initialized threads that are created to perform a set of tasks. In Java, a thread pool can be created by instantiating an object of the ThreadPoolExecutor class.",
    syntax:
      "ExecutorService myThreadPool = Executors.newFixedThreadPool(10);\nmyThreadPool.submit(myTask);\nmyThreadPool.shutdown();",
  },

  socket: {
    definition:
      "A socket is an endpoint of a two-way communication link between two programs running on a network. In Java, a socket can be created by instantiating an object of the Socket class.",
    syntax: 'Socket socket = new Socket("localhost", 8080);',
  },

  serversocket: {
    definition:
      "A ServerSocket is a socket that listens for incoming connections from clients. In Java, a ServerSocket can be created by instantiating an object of the ServerSocket class.",
    syntax:
      "ServerSocket serverSocket = new ServerSocket(8080);\nSocket clientSocket = serverSocket.accept();",
  },

  url: {
    definition:
      "A URL is a uniform resource locator that identifies a resource on the Internet. In Java, a URL can be created by instantiating an object of the URL class.",
    syntax:
      'URL url = new URL("http://www.example.com/");\nInputStream inputStream = url.openStream();',
  },

  urlconnection: {
    definition:
      "A URLConnection represents a connection to a URL. In Java, a URLConnection can be obtained by calling the openConnection() method on a URL object.",
    syntax:
      'URL url = new URL("http://www.example.com/");\nURLConnection connection = url.openConnection();\nInputStream inputStream = connection.getInputStream();',
  },

  datagramsocket: {
    definition:
      "A DatagramSocket is a socket that sends and receives datagrams, which are packets of information that are sent over a network. In Java, a DatagramSocket can be created by instantiating an object of the DatagramSocket class.",
    syntax:
      "DatagramSocket socket = new DatagramSocket();\nbyte[] buffer = new byte[1024];\nDatagramPacket packet = new DatagramPacket(buffer, buffer.length);\nsocket.receive(packet);",
  },

  datagrampacket: {
    definition:
      "A DatagramPacket represents a packet of information that is sent or received by a DatagramSocket. In Java, a DatagramPacket can be created by instantiating an object of the DatagramPacket class.",
    syntax:
      "DatagramSocket socket = new DatagramSocket();\nbyte[] buffer = new byte[1024];\nDatagramPacket packet = new DatagramPacket(buffer, buffer.length);\nsocket.receive(packet);",
  },

  inetaddress: {
    definition:
      "An InetAddress represents an Internet Protocol (IP) address. In Java, an InetAddress can be obtained by calling the getByName() method on the InetAddress class.",
    syntax:
      'InetAddress address = InetAddress.getByName("www.example.com");\nbyte[] buffer = new byte[1024];\nDatagramPacket packet = new DatagramPacket(buffer, buffer.length, address, 8080);\nsocket.send(packet);',
  },

  httpurlconnection: {
    definition:
      "An HTTPURLConnection represents a connection to an HTTP URL. In Java, an HTTPURLConnection can be obtained by calling the openConnection() method on a URL object and casting the result to an HTTPURLConnection.",
    syntax:
      'URL url = new URL("http://www.example.com/");\nHttpURLConnection connection = (HttpURLConnection) url.openConnection();\nInputStream inputStream = connection.getInputStream();',
  },
  stringbuffer: {
    definition:
      "The StringBuffer class represents a mutable sequence of characters. In Java, you can modify a StringBuffer object by appending, inserting, deleting, or replacing characters.",
    syntax:
      'StringBuffer sb = new StringBuffer();\nsb.append("Hello, ");\nsb.append("world!");',
  },

  length: {
    definition:
      "The length() method returns the length of a string or StringBuffer object, which is the number of characters in the sequence.",
    syntax: 'String str = "Hello, world!";\nint length = str.length();',
  },

  charAt: {
    definition:
      "The charAt() method returns the character at the specified index in a string or StringBuffer object.",
    syntax: 'String str = "Hello, world!";\nchar ch = str.charAt(0);',
  },

  substring: {
    definition:
      "The substring() method returns a new string that is a substring of a specified string or StringBuffer object.",
    syntax: 'String str = "Hello, world!";\nString sub = str.substring(0, 5);',
  },

  indexOf: {
    definition:
      "The indexOf() method returns the index of the first occurrence of a specified substring in a string or StringBuffer object.",
    syntax: 'String str = "Hello, world!";\nint index = str.indexOf("world");',
  },

  append: {
    definition:
      "The append() method appends a specified string or character sequence to the end of a StringBuffer object.",
    syntax:
      'StringBuffer sb = new StringBuffer();\nsb.append("Hello, ");\nsb.append("world!");',
  },

  insert: {
    definition:
      "The insert() method inserts a specified string or character sequence at a specified index in a StringBuffer object.",
    syntax:
      'StringBuffer sb = new StringBuffer();\nsb.append("Hello, ");\nsb.insert(7, "world!");',
  },

  delete: {
    definition:
      "The delete() method deletes a substring from a StringBuffer object.",
    syntax:
      'StringBuffer sb = new StringBuffer();\nsb.append("Hello, world!");\nsb.delete(7, 13);',
  },

  replace: {
    definition:
      "The replace() method replaces a substring in a StringBuffer object with another substring.",
    syntax:
      'StringBuffer sb = new StringBuffer();\nsb.append("Hello, world!");\nsb.replace(7, 12, "there");',
  },

  abstract: {
    definition:
      "An abstract class is a class that cannot be instantiated. It can only be subclassed. An abstract class can contain abstract methods, which are methods without a body. Abstract methods must be implemented in a subclass.",
    syntax:
      "public abstract class Shape {\n  public abstract double area();\n  public abstract double perimeter();\n}",
  },

  extends: {
    definition:
      "The extends keyword is used in a class declaration to specify the superclass of the class. A subclass inherits all the members (fields, methods, and nested classes) of its superclass.",
    syntax:
      "public class Circle extends Shape {\n  private double radius;\n  public double area() {\n    return Math.PI * radius * radius;\n  }\n  public double perimeter() {\n    return 2 * Math.PI * radius;\n  }\n}",
  },

  implements: {
    definition:
      "The implements keyword is used in a class declaration to specify the interfaces that the class implements. A class can implement multiple interfaces.",
    syntax:
      "public class MyClass implements MyInterface1, MyInterface2 {\n  // class body\n}",
  },

  abstractmethod: {
    definition:
      "An abstract method is a method without a body. It is declared in an abstract class or interface and must be implemented in a subclass or implementing class.",
    syntax: "public abstract double area();",
  },

  override: {
    definition:
      "The override annotation is used to indicate that a method in a subclass is intended to override a method in its superclass or interface. If the method does not override a method in its superclass or interface, a compilation error occurs.",
    syntax: "@Override\npublic void myMethod() {\n  // method body\n}",
  },

  super: {
    definition:
      "The super keyword is used to refer to the superclass of the current object. It can be used to access the fields and methods of the superclass.",
    syntax:
      "public double area() {\n  return Math.PI * super.radius * super.radius;\n}",
  },

  overloading: {
    definition:
      "Method overloading is a feature of the Java language that allows a class to have multiple methods with the same name but different parameters. The method signature (name and parameter types) must be different for each method.",
    syntax:
      "public class MyClass {\n  public void myMethod(int x) {\n    // method body\n  }\n  public void myMethod(String s) {\n    // method body\n  }\n}",
  },

  methodsignature: {
    definition:
      "The method signature consists of the method name and the types of its parameters. Method overloading requires that each overloaded method have a different method signature.",
    syntax:
      "public void myMethod(int x) {\n  // method body\n}\npublic void myMethod(String s) {\n  // method body\n}",
  },

  compiletime: {
    definition:
      "Method overloading is resolved at compile-time based on the number and types of arguments passed to the method. The correct method to call is determined at compile-time and the appropriate method is invoked at runtime.",
    syntax:
      '// The following code will call the first method:\nmyObject.myMethod(5);\n// The following code will call the second method:\nmyObject.myMethod("Hello World");',
  },

  returntype: {
    definition:
      "The return type of a method is not part of the method signature and does not affect method overloading. Two methods with the same name and parameter types but different return types cannot coexist in the same class.",
    syntax:
      "public int myMethod(int x) {\n  // method body\n}\n// This code will cause a compilation error:\npublic String myMethod(int x) {\n  // method body\n}",
  },
  multithreading: {
    definition:
      "Multithreading is a concept in Java that allows concurrent execution of multiple threads within a single process. Threads are lightweight processes that can execute independently, allowing for concurrent processing and improved performance in certain scenarios.",
    syntax:
      "// Creating a new thread in Java\nMyThread myThread = new MyThread();\nmyThread.start();\n\n// Implementing Runnable interface\nclass MyRunnable implements Runnable {\n  public void run() {\n    // code to be executed in the thread\n  }\n}\n\n// Creating a new thread using Runnable\nThread thread = new Thread(new MyRunnable());\nthread.start();",
  },
  interthreadcommunication: {
    definition:
      "Inter-thread communication is the mechanism that allows threads to communicate with each other in Java. This can be achieved using methods like wait(), notify(), and notifyAll(), which are provided by the Object class.",
    syntax:
      "// Example of wait() and notify() methods\n// Thread 1\nsynchronized (sharedObject) {\n  while (!condition) {\n    sharedObject.wait();\n  }\n  // code to be executed after condition is met\n}\n\n// Thread 2\nsynchronized (sharedObject) {\n  // code to modify the condition\n  sharedObject.notify();\n}",
  },
  // thread: {
  //   definition:
  //     "A thread is a separate sequence of instructions that can run concurrently with other threads in the same process. Java threads are managed by the Java Virtual Machine (JVM) and are used to achieve concurrent processing in Java programs.",
  //   syntax:
  //     "// Creating a new thread in Java\nMyThread myThread = new MyThread();\nmyThread.start();\n\n// Implementing Runnable interface\nclass MyRunnable implements Runnable {\n  public void run() {\n    // code to be executed in the thread\n  }\n}\n\n// Creating a new thread using Runnable\nThread thread = new Thread(new MyRunnable());\nthread.start();",
  // },

  applet: {
    definition:
      "An applet is a special type of Java program that runs on a web browser. It can be embedded within an HTML page and is executed on the client-side, providing dynamic content and interactivity. Applets are typically used for creating interactive web-based applications, games, and multimedia content.",
    syntax:
      '<applet code="MyApplet.class" width="300" height="200">\n  <!-- HTML content for browsers that do not support applets -->\n  Your browser does not support Java applets.\n</applet>',
  },

  appletlifecycle: {
    definition:
      "The applet lifecycle refers to the sequence of events that an applet goes through from its initialization to its termination. The applet lifecycle includes methods that are automatically called at different stages of an applet's execution, such as init(), start(), stop(), and destroy().",
    syntax:
      "// Example of applet lifecycle methods\npublic class MyApplet extends Applet {\n  public void init() {\n    // code to initialize the applet\n  }\n\n  public void start() {\n    // code to start the applet\n  }\n\n  public void stop() {\n    // code to stop the applet\n  }\n\n  public void destroy() {\n    // code to clean up before the applet is terminated\n  }\n\n  // other methods for rendering and handling events\n}",
  },

  appletmethods: {
    definition:
      "Applet methods are special methods that can be overridden in an applet class to customize the applet's behavior. Some commonly used applet methods include init(), start(), stop(), and destroy() for applet lifecycle management, as well as paint() and update() for rendering graphics on the applet's canvas.",
    syntax:
      "// Example of applet methods\npublic class MyApplet extends Applet {\n  public void init() {\n    // code to initialize the applet\n  }\n\n  public void start() {\n    // code to start the applet\n  }\n\n  public void stop() {\n    // code to stop the applet\n  }\n\n  public void destroy() {\n    // code to clean up before the applet is terminated\n  }\n\n  public void paint(Graphics g) {\n    // code to render graphics on the applet's canvas\n  }\n\n  // other methods for handling events, user interactions, etc.\n}",
  },
  multithreadinglifecycle: {
    definition:
      "The multithreading lifecycle refers to the different states that a thread can go through during its lifetime. The multithreading lifecycle includes states such as new, runnable, blocked, waiting, timed waiting, and terminated. Threads can transition between these states based on their execution status and interactions with other threads or synchronization constructs.",
    syntax:
      "// Example of thread lifecycle states\npublic class MyThread extends Thread {\n  public void run() {\n    // code to be executed in this thread\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    MyThread t1 = new MyThread();\n    t1.start(); // Thread enters the runnable state\n    // Thread can transition to blocked, waiting, timed waiting, or terminated state based on execution\n  }\n}",
  },

  multithreadingmethods: {
    definition:
      "Java provides several built-in methods that can be used to manage threads, including start(), run(), sleep(), yield(), join(), interrupt(), and isAlive(). These methods are used for starting threads, controlling thread execution, managing thread synchronization, and handling thread interruptions.",
    syntax:
      "// Example of thread methods\npublic class MyThread extends Thread {\n  public void run() {\n    // code to be executed in this thread\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    MyThread t1 = new MyThread();\n    t1.start(); // Start the thread\n    // Other methods like sleep(), yield(), join(), interrupt(), isAlive() can be used to manage the thread\n  }\n}",
  },
  servlet: {
    definition:
      "A servlet is a Java-based web component that runs on a web server and handles client requests and generates dynamic responses. Servlets are used to build server-side web applications in Java and are part of the Java Enterprise Edition (Java EE) platform. Servlets extend the functionality of web servers to handle HTTP requests, process data, and generate dynamic content that can be sent back to the client.",
    syntax:
      "// Example of a servlet\nimport javax.servlet.*;\nimport javax.servlet.http.*;\nimport java.io.*;\n\npublic class MyServlet extends HttpServlet {\n  public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {\n    // code to handle HTTP GET request\n  }\n\n  public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {\n    // code to handle HTTP POST request\n  }\n}",
  },

  servletlifecycle: {
    definition:
      "The servlet lifecycle refers to the different stages that a servlet goes through during its lifetime. The servlet lifecycle includes states such as initialization, service, and destruction. Servlets are initialized when they are first loaded or when the web container is started, and then they can handle service requests from clients. Servlets can be destroyed when the web container is stopped or when they are explicitly removed from the web application. During the service phase, servlets can handle multiple requests concurrently.",
    syntax:
      "// Example of servlet lifecycle methods\nimport javax.servlet.*;\nimport javax.servlet.http.*;\nimport java.io.*;\n\npublic class MyServlet extends HttpServlet {\n  public void init() throws ServletException {\n    // code for servlet initialization\n  }\n\n  public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {\n    // code to handle HTTP GET request\n  }\n\n  public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {\n    // code to handle HTTP POST request\n  }\n\n  public void destroy() {\n    // code for servlet destruction\n  }\n}",
  },

  servletmethods: {
    definition:
      "Java servlets provide several built-in methods that can be overridden to handle different stages of the servlet lifecycle, including init(), doGet(), doPost(), and destroy(). These methods are used for servlet initialization, handling HTTP requests, processing client data, generating dynamic responses, and cleaning up resources during servlet destruction. Servlets can also use other methods and classes from the Java Servlet API to interact with the request and response objects, manage session and application scope data, and perform other web-related tasks.",
    syntax:
      "// Example of servlet methods\nimport javax.servlet.*;\nimport javax.servlet.http.*;\nimport java.io.*;\n\npublic class MyServlet extends HttpServlet {\n  public void init() throws ServletException {\n    // code for servlet initialization\n  }\n\n  public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {\n    // code to handle HTTP GET request\n  }\n\n  public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {\n    // code to handle HTTP POST request\n  }\n\n  public void destroy() {\n    // code for servlet destruction\n  }\n}",
  },
  jdbc: {
    definition:
      "JDBC (Java Database Connectivity) is a Java API that provides a standard interface for connecting Java applications to relational databases. JDBC allows Java programs to interact with databases, perform various database operations such as querying, inserting, updating, and deleting data, and manage database connections.",
  },

  driverManager: {
    definition:
      "DriverManager is a class in JDBC that provides methods for managing JDBC drivers. It is used to establish a connection to a database by loading the appropriate JDBC driver class and obtaining a database connection.",
    syntax:
      "Connection connection = DriverManager.getConnection(url, username, password);",
  },

  connection: {
    definition:
      "Connection is an interface in JDBC that represents a connection to a specific database. It is used to establish a session with a database and provides methods for performing database operations such as creating statements, executing queries, and managing transactions.",
    syntax:
      "Connection connection = DriverManager.getConnection(url, username, password);",
  },
  systemoutprintln: {
    definition:
      "System.out.println is a standard Java method used for printing output to the console. It is commonly used for displaying text or values during program execution.",
    syntax: "<code>System.out.println(<em>message</em>);</code>",
  },

  statement: {
    definition:
      "Statement is an interface in JDBC that represents a SQL statement that can be executed against a database. It is used to create and execute SQL statements, such as queries, updates, and deletions, and retrieve results from the database.",
    syntax: "Statement statement = connection.createStatement();",
  },

  resultSet: {
    definition:
      "ResultSet is an interface in JDBC that represents the result of a database query. It is used to retrieve data from a database after executing a query and provides methods for navigating and manipulating the query result.",
    syntax: "ResultSet resultSet = statement.executeQuery(sql);",
  },

  preparedstatement: {
    definition:
      "PreparedStatement is an interface in JDBC that extends Statement and provides a more efficient way to execute parameterized SQL queries. It allows precompilation of SQL statements with placeholders for parameters, which can be set dynamically at runtime.",
    syntax:
      "PreparedStatement preparedStatement = connection.prepareStatement(sql);",
  },

  transaction: {
    definition:
      "Transaction is a concept in JDBC that represents a sequence of one or more database operations that are executed as a single unit of work. JDBC provides methods to begin, commit, and rollback transactions, which can be used to ensure data integrity and consistency in a database.",
    syntax:
      "connection.setAutoCommit(false);\n// Execute multiple database operations\nconnection.commit();\n// or\nconnection.rollback();",
  },
};
const chatBox = document.getElementById("chat-box");
const codeBox = document.getElementById("code-box");

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const userInput = document
    .querySelector(".user-input")
    .value.toLowerCase()
    .replace(/[\s.-]+/g, "");
  if (userInput in tagDefinitions) {
    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    showTyping();
    setTimeout(() => {
      hideTyping();
      showTagDefinition(userInput);
    }, 1500);
  } else if (userInput === "hello") {
    // if the user says "hello", respond with a greeting
    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    chatBox.innerHTML += `<p><strong>CodeBot:</strong> Hi there!</p>`;
  } else if (userInput === "howareyou?") {
    // if the user asks how the bot is doing, respond with a message
    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    chatBox.innerHTML += `<p><strong>CodeBot:</strong> I'm doing well, thank you for asking!</p>`;
  } else if (userInput === "hi") {
    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p><p><strong>CodeBot:</strong> Hi there! How can I help you today?</p>`;
  } else if (userInput === "help") {
    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p><p><strong>CodeBot:</strong> You can ask me for definitions of HTML tags, css properties, javascript words ,c words, java words . Just type in the  name and I'll give you the syntax and description. Try typing anything you want to learn from codingnation.</p>`;
  } else if (userInput === "thanks" || userInput === "thankyou") {
    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p><p><strong>CodeBot:</strong> You're welcome!</p>`;
  } else {
    // if the user input doesn't match a tag definition or a command, respond with a generic message
    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p><p><strong>CodeBot:</strong> Sorry, I didn't understand that.</p>`;
  }
  document.querySelector(".user-input").value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
});
function showTyping() {
  const typingEl = document.createElement("span");
  typingEl.classList.add("typing");
  typingEl.innerHTML = "&nbsp;typing&hellip;";
  chatBox.lastChild.appendChild(typingEl);
}

function hideTyping() {
  const typingEl = document.querySelector(".typing");
  if (typingEl) {
    typingEl.parentNode.removeChild(typingEl);
  }
}
let latestDefinition = "";

function showTagDefinition(tag) {
  const tagDefinition = tagDefinitions[tag];
  chatBox.innerHTML += `<p><strong>CodeBot:</strong> ${tagDefinition.definition}</p>`;
  latestDefinition = tagDefinition.definition; // Store latest definition
  chatBox.scrollTop = chatBox.scrollHeight;
  const codeBoxEl = document.getElementById("code-box");
  codeBoxEl.textContent = "";
  codeBoxEl.style.display = "block";
  let index = 0;

  let ignoreNextChar = false;
  const intervalId = setInterval(() => {
    if (!ignoreNextChar) {
      codeBoxEl.textContent += tagDefinition.syntax[index];
    }
    ignoreNextChar = false;
    index++;
    if (index >= tagDefinition.syntax.length) {
      clearInterval(intervalId);
      codeBoxEl.textContent = codeBoxEl.textContent.replace(/undefined/g, "");
      // Add voice icon to the chat box

      const voiceIcon = document.getElementById("voice-icon");
      chatBox.scrollTop = chatBox.scrollHeight;
    }
    // Ignore the next character if it is part of an HTML tag
    if (tagDefinition.syntax[index - 1] === "<") {
      ignoreNextChar = true;
      while (tagDefinition.syntax[index] !== ">") {
        ignoreNextChar = true;
        codeBoxEl.textContent += tagDefinition.syntax[index];
        index++;
      }
      codeBoxEl.textContent += tagDefinition.syntax[index];
      ignoreNextChar = false;
      index++;
    }
    codeBoxEl.scrollTop = codeBoxEl.scrollHeight;
  }, 50);
}

function readLatestDefinition() {
  const msg = new SpeechSynthesisUtterance(latestDefinition);
  window.speechSynthesis.speak(msg);
}