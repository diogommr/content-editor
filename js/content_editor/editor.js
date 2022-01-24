class Editor {
  init(selector) {
    // console.log(this.textareaEl);
    const textareaEl = document.querySelector(selector);
    // console.log(textareaEl);

    // 0. Set defaults
    let defaultTextContent = `<p><br></p>`;
    let defaultCodeContent = ``;
    let defaultImageSource = "https://images.unsplash.com/photo-1517055729445-fa7d27394b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFyZHVpbm98ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60";
    let defaultVideoSource = "https://www.youtube.com/watch?v=D4D1WhA_mi8";
    let defaultGalleryItems = ["https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"];
    let defaultHtmlContent = `<p style="color: powderblue;">Custom HTML</p>`;

    // 1. Hide <teextarea>
    textareaEl.setAttribute('class', 'block-editor-output');

    // 2. Create editor UI

    // Editor Container
    const editorEl = document.createElement('DIV');
    editorEl.setAttribute('class', 'block-editor');
    textareaEl.parentNode.insertBefore(editorEl, textareaEl);

    // ---------- Editor Toolbar ---------- //
    const editorToolbarEl = document.createElement('DIV');
    editorToolbarEl.setAttribute('class', 'toolbar');

    // ----- Row Options
    const sectionRowOptionsEl = document.createElement('SECTION');
    sectionRowOptionsEl.setAttribute('class', 'block-options row-options');
    editorToolbarEl.appendChild(sectionRowOptionsEl);

    // Select Inner Block Button
    const selectInnerBlockBtn = document.createElement('BUTTON');
    selectInnerBlockBtn.setAttribute('class', 'select-inner-block-btn toolbar-btn');
    selectInnerBlockBtn.innerHTML = `
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor"
          d="M9,9H15V15H9M7,17H17V7H7M15,5H17V3H15M15,21H17V19H15M19,17H21V15H19M19,9H21V7H19M19,21A2,2 0 0,0 21,19H19M19,13H21V11H19M11,21H13V19H11M9,3H7V5H9M3,17H5V15H3M5,21V19H3A2,2 0 0,0 5,21M19,3V5H21A2,2 0 0,0 19,3M13,3H11V5H13M3,9H5V7H3M7,21H9V19H7M3,13H5V11H3M3,5H5V3A2,2 0 0,0 3,5Z" />
      </svg>
    `;
    selectInnerBlockBtn.addEventListener('click', function(){
      selectInnerBlock();
    });
    sectionRowOptionsEl.appendChild(selectInnerBlockBtn);

    // Delete Row Button
    const deleteRowBtn = document.createElement('BUTTON');
    deleteRowBtn.setAttribute('class', 'delete-row-btn toolbar-btn');
    deleteRowBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
        <path
          d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z">
        </path>
      </svg>
    `;
    deleteRowBtn.addEventListener('click', function () {
      deleteRow();
    });
    sectionRowOptionsEl.appendChild(deleteRowBtn);


    // .......... Block Styling .......... //

    const sectionHeadingsEl = document.createElement('SECTION');
    sectionHeadingsEl.setAttribute('class', 'block-options block-text-options block-formatting');
    editorToolbarEl.appendChild(sectionHeadingsEl);


    // ..... H1 ..... //

    const makeH1Btn = document.createElement('BUTTON');
    makeH1Btn.setAttribute('class', 'h1-btn toolbar-btn');
    makeH1Btn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path
          d="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M14,18V16H16V6.31L13.5,7.75V5.44L16,4H18V16H20V18H14Z" />
      </svg>
    `;
    makeH1Btn.addEventListener('click', function () {
      makeH1();
    });
    sectionHeadingsEl.appendChild(makeH1Btn);


    // ..... H2 ..... //

    const makeH2Btn = document.createElement('BUTTON');
    makeH2Btn.setAttribute('class', 'h2-btn toolbar-btn');
    makeH2Btn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path
          d="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M21,18H15A2,2 0 0,1 13,16C13,15.47 13.2,15 13.54,14.64L18.41,9.41C18.78,9.05 19,8.55 19,8A2,2 0 0,0 17,6A2,2 0 0,0 15,8H13A4,4 0 0,1 17,4A4,4 0 0,1 21,8C21,9.1 20.55,10.1 19.83,10.83L15,16H21V18Z" />
      </svg>
    `;
    makeH2Btn.addEventListener('click', function () {
      makeH2();
    });
    sectionHeadingsEl.appendChild(makeH2Btn);


    // ..... H3 ..... //

    const makeH3Btn = document.createElement('BUTTON');
    makeH3Btn.setAttribute('class', 'h3-btn toolbar-btn');
    makeH3Btn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path
          d="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H19A2,2 0 0,1 21,6V16A2,2 0 0,1 19,18H15A2,2 0 0,1 13,16V15H15V16H19V12H15V10H19V6H15V7H13V6A2,2 0 0,1 15,4Z" />
      </svg>
    `;
    makeH3Btn.addEventListener('click', function () {
      makeH3();
    });
    sectionHeadingsEl.appendChild(makeH3Btn);
    

    // ..... P ..... //
    
    const makePBtn = document.createElement('BUTTON');
    makePBtn.setAttribute('class', 'p-btn toolbar-btn');
    makePBtn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path
          d="M13,4A4,4 0 0,1 17,8A4,4 0 0,1 13,12H11V18H9V4H13M13,10A2,2 0 0,0 15,8A2,2 0 0,0 13,6H11V10H13Z" />
      </svg>
    `;
    makePBtn.addEventListener('click', function () {
      makeP();
    });
    sectionHeadingsEl.appendChild(makePBtn);


    // .......... Inline Styling .......... //

    const sectionInlineFormattingEl = document.createElement('SECTION');
    sectionInlineFormattingEl.setAttribute('class', 'block-options block-text-options inline-formatting');
    editorToolbarEl.appendChild(sectionInlineFormattingEl);

    // ..... Bold ..... //
    const makeBoldBtn = document.createElement('BUTTON');
    makeBoldBtn.setAttribute('class', 'bold-btn toolbar-btn');
    makeBoldBtn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path
          d="M13.5,15.5H10V12.5H13.5A1.5,1.5 0 0,1 15,14A1.5,1.5 0 0,1 13.5,15.5M10,6.5H13A1.5,1.5 0 0,1 14.5,8A1.5,1.5 0 0,1 13,9.5H10M15.6,10.79C16.57,10.11 17.25,9 17.25,8C17.25,5.74 15.5,4 13.25,4H7V18H14.04C16.14,18 17.75,16.3 17.75,14.21C17.75,12.69 16.89,11.39 15.6,10.79Z" />
      </svg>
    `;
    makeBoldBtn.addEventListener('click', function () {
      makeBold();
    });
    sectionInlineFormattingEl.appendChild(makeBoldBtn);

    // ..... Italic ..... //
    const makeItalicBtn = document.createElement('BUTTON');
    makeItalicBtn.setAttribute('class', 'italic-btn toolbar-btn');
    makeItalicBtn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path d="M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z" />
      </svg>
    `;
    makeItalicBtn.addEventListener('click', function () {
      makeItalic();
    });
    sectionInlineFormattingEl.appendChild(makeItalicBtn);

    // ..... Underline ..... //
    const makeUnderlineBtn = document.createElement('BUTTON');
    makeUnderlineBtn.setAttribute('class', 'underline-btn toolbar-btn');
    makeUnderlineBtn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path
          d="M5,21H19V19H5V21M12,17A6,6 0 0,0 18,11V3H15.5V11A3.5,3.5 0 0,1 12,14.5A3.5,3.5 0 0,1 8.5,11V3H6V11A6,6 0 0,0 12,17Z" />
      </svg>
    `;
    makeUnderlineBtn.addEventListener('click', function () {
      makeUnderline();
    });
    sectionInlineFormattingEl.appendChild(makeUnderlineBtn);

    // ..... Strikethrough ..... //
    const makeStrikethroughBtn = document.createElement('BUTTON');
    makeStrikethroughBtn.setAttribute('class', 'underline-btn toolbar-btn');
    makeStrikethroughBtn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path
          d="M23,12V14H18.61C19.61,16.14 19.56,22 12.38,22C4.05,22.05 4.37,15.5 4.37,15.5L8.34,15.55C8.37,18.92 11.5,18.92 12.12,18.88C12.76,18.83 15.15,18.84 15.34,16.5C15.42,15.41 14.32,14.58 13.12,14H1V12H23M19.41,7.89L15.43,7.86C15.43,7.86 15.6,5.09 12.15,5.08C8.7,5.06 9,7.28 9,7.56C9.04,7.84 9.34,9.22 12,9.88H5.71C5.71,9.88 2.22,3.15 10.74,2C19.45,0.8 19.43,7.91 19.41,7.89Z" />
      </svg>
    `;
    makeStrikethroughBtn.addEventListener('click', function () {
      makeStrikethrough();
    });
    sectionInlineFormattingEl.appendChild(makeStrikethroughBtn);

    // ..... Anchor ..... //
    const openAnchorOptionsBtn = document.createElement('BUTTON');
    openAnchorOptionsBtn.setAttribute('class', 'anchor-btn toolbar-btn');
    openAnchorOptionsBtn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path
          d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z" />
      </svg>
    `;
    openAnchorOptionsBtn.addEventListener('click', function () {
      openAnchorOptionsModal();
    });
    sectionInlineFormattingEl.appendChild(openAnchorOptionsBtn);

    const removeAnchorBtn = document.createElement('BUTTON');
    removeAnchorBtn.setAttribute('class', 'anchor-btn toolbar-btn');
    removeAnchorBtn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path
          d="M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.43 19.12,14.63 17.79,15L19.25,16.44C20.88,15.61 22,13.95 22,12A5,5 0 0,0 17,7M16,11H13.81L15.81,13H16V11M2,4.27L5.11,7.38C3.29,8.12 2,9.91 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12C3.9,10.41 5.11,9.1 6.66,8.93L8.73,11H8V13H10.73L13,15.27V17H14.73L18.74,21L20,19.74L3.27,3L2,4.27Z" />
      </svg>
    `;
    removeAnchorBtn.addEventListener('click', function () {
      removeAnchor();
    });
    sectionInlineFormattingEl.appendChild(removeAnchorBtn);


    // ..... Superscript ..... //

    const makeSuperscriptBtn = document.createElement('BUTTON');
    makeSuperscriptBtn.setAttribute('class', 'superscript-btn toolbar-btn');
    makeSuperscriptBtn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path
          d="M16,7.41L11.41,12L16,16.59L14.59,18L10,13.41L5.41,18L4,16.59L8.59,12L4,7.41L5.41,6L10,10.59L14.59,6L16,7.41M21.85,9H16.97V8L17.86,7.18C18.62,6.54 19.18,6 19.56,5.55C19.93,5.11 20.12,4.7 20.13,4.32C20.14,4.04 20.05,3.8 19.86,3.62C19.68,3.43 19.39,3.34 19,3.33C18.69,3.34 18.42,3.4 18.16,3.5L17.5,3.89L17.05,2.72C17.32,2.5 17.64,2.33 18.03,2.19C18.42,2.05 18.85,2 19.32,2C20.1,2 20.7,2.2 21.1,2.61C21.5,3 21.72,3.54 21.72,4.18C21.71,4.74 21.53,5.26 21.18,5.73C20.84,6.21 20.42,6.66 19.91,7.09L19.27,7.61V7.63H21.85V9Z" />
      </svg>
    `;
    makeSuperscriptBtn.addEventListener('click', function () {
      makeSuperscript();
    });
    sectionInlineFormattingEl.appendChild(makeSuperscriptBtn);


    // ..... Subscript ..... //

    const makeSubscriptBtn = document.createElement('BUTTON');
    makeSubscriptBtn.setAttribute('class', 'subscript-btn toolbar-btn');
    makeSubscriptBtn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path
          d="M16,7.41L11.41,12L16,16.59L14.59,18L10,13.41L5.41,18L4,16.59L8.59,12L4,7.41L5.41,6L10,10.59L14.59,6L16,7.41M21.85,21.03H16.97V20.03L17.86,19.23C18.62,18.58 19.18,18.04 19.56,17.6C19.93,17.16 20.12,16.75 20.13,16.36C20.14,16.08 20.05,15.85 19.86,15.66C19.68,15.5 19.39,15.38 19,15.38C18.69,15.38 18.42,15.44 18.16,15.56L17.5,15.94L17.05,14.77C17.32,14.56 17.64,14.38 18.03,14.24C18.42,14.1 18.85,14 19.32,14C20.1,14.04 20.7,14.25 21.1,14.66C21.5,15.07 21.72,15.59 21.72,16.23C21.71,16.79 21.53,17.31 21.18,17.78C20.84,18.25 20.42,18.7 19.91,19.14L19.27,19.66V19.68H21.85V21.03Z" />
      </svg>
    `;
    makeSubscriptBtn.addEventListener('click', function () {
      makeSubscript();
    });
    sectionInlineFormattingEl.appendChild(makeSubscriptBtn);


    // ..... Inline Code ..... //

    const makeInlineCodeBtn = document.createElement('BUTTON');
    makeInlineCodeBtn.setAttribute('class', 'inline-code-btn toolbar-btn');
    makeInlineCodeBtn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path
          d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z" />
      </svg>
    `;
    makeInlineCodeBtn.addEventListener('click', function () {
      makeInlineCode();
    });
    sectionInlineFormattingEl.appendChild(makeInlineCodeBtn);


    // ..... UL ..... //

    const makeUlBtn = document.createElement('BUTTON');
    makeUlBtn.setAttribute('class', 'ul-btn toolbar-btn');
    makeUlBtn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path
          d="M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z" />
      </svg>
    `;
    makeUlBtn.addEventListener('click', function () {
      makeUL();
    });
    sectionInlineFormattingEl.appendChild(makeUlBtn);


    // ..... OL ..... //

    const makeOlBtn = document.createElement('BUTTON');
    makeOlBtn.setAttribute('class', 'ol-btn toolbar-btn');
    makeOlBtn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path
          d="M7,13V11H21V13H7M7,19V17H21V19H7M7,7V5H21V7H7M3,8V5H2V4H4V8H3M2,17V16H5V20H2V19H4V18.5H3V17.5H4V17H2M4.25,10A0.75,0.75 0 0,1 5,10.75C5,10.95 4.92,11.14 4.79,11.27L3.12,13H5V14H2V13.08L4,11H2V10H4.25Z" />
      </svg>
    `;
    makeOlBtn.addEventListener('click', function () {
      makeOL();
    });
    sectionInlineFormattingEl.appendChild(makeOlBtn);


    // ..... Remove Formatting ..... //

    const removeFormattingBtn = document.createElement('BUTTON');
    removeFormattingBtn.setAttribute('class', 'remove-formatting-btn toolbar-btn');
    removeFormattingBtn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path
          d="M6,5V5.18L8.82,8H11.22L10.5,9.68L12.6,11.78L14.21,8H20V5H6M3.27,5L2,6.27L8.97,13.24L6.5,19H9.5L11.07,15.34L16.73,21L18,19.73L3.55,5.27L3.27,5Z" />
      </svg>
    `;
    removeFormattingBtn.addEventListener('click', function () {
      removeFormatting();
    });
    sectionInlineFormattingEl.appendChild(removeFormattingBtn);


    // .......... Code Options .......... //

    const sectionCodeOptionsEl = document.createElement('SECTION');
    sectionCodeOptionsEl.setAttribute('class', 'block-options block-code-options');
    editorToolbarEl.appendChild(sectionCodeOptionsEl);


    // ..... Edit ..... //

    const editCodeBlockBtn = document.createElement('BUTTON');
    editCodeBlockBtn.setAttribute('class', 'edit-block-btn toolbar-btn');
    editCodeBlockBtn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path
          d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
      </svg>
    `;
    editCodeBlockBtn.addEventListener('click', function () {
      openCodeOptionsModal();
    });
    sectionCodeOptionsEl.appendChild(editCodeBlockBtn);


    // .......... Image Options .......... //

    const sectionImageOptionsEl = document.createElement('SECTION');
    sectionImageOptionsEl.setAttribute('class', 'block-options block-image-options');
    editorToolbarEl.appendChild(sectionImageOptionsEl);


    // ..... Edit ..... //

    const editImageBlockBtn = document.createElement('BUTTON');
    editImageBlockBtn.setAttribute('class', 'edit-block-btn toolbar-btn');
    editImageBlockBtn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path
          d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
      </svg>
    `;
    editImageBlockBtn.addEventListener('click', function () {
      openImageOptionsModal();
    });
    sectionImageOptionsEl.appendChild(editImageBlockBtn);


    // .......... Video Options .......... //

    const sectionVideoOptionsEl = document.createElement('SECTION');
    sectionVideoOptionsEl.setAttribute('class', 'block-options block-video-options');
    editorToolbarEl.appendChild(sectionVideoOptionsEl);


    // ..... Edit ..... //

    const editVideoBlockBtn = document.createElement('BUTTON');
    editVideoBlockBtn.setAttribute('class', 'edit-block-btn toolbar-btn');
    editVideoBlockBtn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path
          d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
      </svg>
    `;
    editVideoBlockBtn.addEventListener('click', function () {
      openVideoOptionsModal();
    });
    sectionVideoOptionsEl.appendChild(editVideoBlockBtn);


    // .......... Gallery Options .......... //

    const sectionGalleryOptionsEl = document.createElement('SECTION');
    sectionGalleryOptionsEl.setAttribute('class', 'block-options block-gallery-options');
    editorToolbarEl.appendChild(sectionGalleryOptionsEl);


    // ..... Edit ..... //

    const editGalleryBlockBtn = document.createElement('BUTTON');
    editGalleryBlockBtn.setAttribute('class', 'edit-block-btn toolbar-btn');
    editGalleryBlockBtn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path
          d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
      </svg>
    `;
    editGalleryBlockBtn.addEventListener('click', function () {
      openGalleryOptionsModal();
    });
    sectionGalleryOptionsEl.appendChild(editGalleryBlockBtn);


    // .......... HTML Options .......... //

    const sectionHtmlOptionsEl = document.createElement('SECTION');
    sectionHtmlOptionsEl.setAttribute('class', 'block-options block-html-options');
    editorToolbarEl.appendChild(sectionHtmlOptionsEl);


    // ..... Edit ..... //

    const editHtmlBlockBtn = document.createElement('BUTTON');
    editHtmlBlockBtn.setAttribute('class', 'edit-block-btn toolbar-btn');
    editHtmlBlockBtn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path
          d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
      </svg>
    `;
    editHtmlBlockBtn.addEventListener('click', function () {
      openHtmlOptionsModal();
    });
    sectionHtmlOptionsEl.appendChild(editHtmlBlockBtn);


    // ↓↓↓↓↓↓↓↓↓↓ DEBUG ↓↓↓↓↓↓↓↓↓↓ //
    let temp = `
      <!-- Row Options -->
      <section class="block-options row-options">
        <button class="select-inner-block-btn toolbar-btn" onclick="selectInnerBlock()">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M9,9H15V15H9M7,17H17V7H7M15,5H17V3H15M15,21H17V19H15M19,17H21V15H19M19,9H21V7H19M19,21A2,2 0 0,0 21,19H19M19,13H21V11H19M11,21H13V19H11M9,3H7V5H9M3,17H5V15H3M5,21V19H3A2,2 0 0,0 5,21M19,3V5H21A2,2 0 0,0 19,3M13,3H11V5H13M3,9H5V7H3M7,21H9V19H7M3,13H5V11H3M3,5H5V3A2,2 0 0,0 3,5Z" />
          </svg>
        </button>
        <button class="delete-row-btn toolbar-btn" onclick="deleteRow()">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
            <path
              d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z">
            </path>
          </svg>
        </button>
      </section>

      <!-- Headings (block) -->
      <section class="block-options block-text-options block-formatting">
        <button class="h1-btn toolbar-btn" onclick="makeH1()">
          <svg viewBox="0 0 24 24">
            <path
              d="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M14,18V16H16V6.31L13.5,7.75V5.44L16,4H18V16H20V18H14Z" />
          </svg>
        </button>
        <button class="h2-btn toolbar-btn" onclick="makeH2()">
          <svg viewBox="0 0 24 24">
            <path
              d="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M21,18H15A2,2 0 0,1 13,16C13,15.47 13.2,15 13.54,14.64L18.41,9.41C18.78,9.05 19,8.55 19,8A2,2 0 0,0 17,6A2,2 0 0,0 15,8H13A4,4 0 0,1 17,4A4,4 0 0,1 21,8C21,9.1 20.55,10.1 19.83,10.83L15,16H21V18Z" />
          </svg>
        </button>
        <button class="h3-btn toolbar-btn" onclick="makeH3()">
          <svg viewBox="0 0 24 24">
            <path
              d="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H19A2,2 0 0,1 21,6V16A2,2 0 0,1 19,18H15A2,2 0 0,1 13,16V15H15V16H19V12H15V10H19V6H15V7H13V6A2,2 0 0,1 15,4Z" />
          </svg>
        </button>
        <button class="p-btn toolbar-btn" onclick="makeP()">
          <svg viewBox="0 0 24 24">
            <path
              d="M13,4A4,4 0 0,1 17,8A4,4 0 0,1 13,12H11V18H9V4H13M13,10A2,2 0 0,0 15,8A2,2 0 0,0 13,6H11V10H13Z" />
          </svg>
        </button>
      </section>
      
      <!-- Styling (inline) -->
      <section class="block-options block-text-options inline-formatting">
        <button class="bold-btn toolbar-btn" onclick="makeBold()">
          <svg viewBox="0 0 24 24">
            <path
              d="M13.5,15.5H10V12.5H13.5A1.5,1.5 0 0,1 15,14A1.5,1.5 0 0,1 13.5,15.5M10,6.5H13A1.5,1.5 0 0,1 14.5,8A1.5,1.5 0 0,1 13,9.5H10M15.6,10.79C16.57,10.11 17.25,9 17.25,8C17.25,5.74 15.5,4 13.25,4H7V18H14.04C16.14,18 17.75,16.3 17.75,14.21C17.75,12.69 16.89,11.39 15.6,10.79Z" />
          </svg>
        </button>
        <button class="italic-btn toolbar-btn" onclick="makeItalic()">
          <svg viewBox="0 0 24 24">
            <path d="M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z" />
          </svg>
        </button>
        <button class="underline-btn toolbar-btn" onclick="makeUnderline()">
          <svg viewBox="0 0 24 24">
            <path
              d="M5,21H19V19H5V21M12,17A6,6 0 0,0 18,11V3H15.5V11A3.5,3.5 0 0,1 12,14.5A3.5,3.5 0 0,1 8.5,11V3H6V11A6,6 0 0,0 12,17Z" />
          </svg>
        </button>
        <button class="strikethrough-btn toolbar-btn" onclick="makeStrikethrough()">
          <svg viewBox="0 0 24 24">
            <path
              d="M23,12V14H18.61C19.61,16.14 19.56,22 12.38,22C4.05,22.05 4.37,15.5 4.37,15.5L8.34,15.55C8.37,18.92 11.5,18.92 12.12,18.88C12.76,18.83 15.15,18.84 15.34,16.5C15.42,15.41 14.32,14.58 13.12,14H1V12H23M19.41,7.89L15.43,7.86C15.43,7.86 15.6,5.09 12.15,5.08C8.7,5.06 9,7.28 9,7.56C9.04,7.84 9.34,9.22 12,9.88H5.71C5.71,9.88 2.22,3.15 10.74,2C19.45,0.8 19.43,7.91 19.41,7.89Z" />
          </svg>
        </button>
        <button class="anchor-btn toolbar-btn" onclick="openAnchorOptionsModal()">
          <svg viewBox="0 0 24 24">
            <path
              d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z" />
          </svg>
        </button>
        <button class="anchor-btn toolbar-btn" onclick="removeAnchor()">
          <svg viewBox="0 0 24 24">
            <path
              d="M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.43 19.12,14.63 17.79,15L19.25,16.44C20.88,15.61 22,13.95 22,12A5,5 0 0,0 17,7M16,11H13.81L15.81,13H16V11M2,4.27L5.11,7.38C3.29,8.12 2,9.91 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12C3.9,10.41 5.11,9.1 6.66,8.93L8.73,11H8V13H10.73L13,15.27V17H14.73L18.74,21L20,19.74L3.27,3L2,4.27Z" />
          </svg>
        </button>
        <button class="superscript-btn toolbar-btn" onclick="makeSuperscript()">
          <svg viewBox="0 0 24 24">
            <path
              d="M16,7.41L11.41,12L16,16.59L14.59,18L10,13.41L5.41,18L4,16.59L8.59,12L4,7.41L5.41,6L10,10.59L14.59,6L16,7.41M21.85,9H16.97V8L17.86,7.18C18.62,6.54 19.18,6 19.56,5.55C19.93,5.11 20.12,4.7 20.13,4.32C20.14,4.04 20.05,3.8 19.86,3.62C19.68,3.43 19.39,3.34 19,3.33C18.69,3.34 18.42,3.4 18.16,3.5L17.5,3.89L17.05,2.72C17.32,2.5 17.64,2.33 18.03,2.19C18.42,2.05 18.85,2 19.32,2C20.1,2 20.7,2.2 21.1,2.61C21.5,3 21.72,3.54 21.72,4.18C21.71,4.74 21.53,5.26 21.18,5.73C20.84,6.21 20.42,6.66 19.91,7.09L19.27,7.61V7.63H21.85V9Z" />
          </svg>
        </button>
        <button class="subscript-btn toolbar-btn" onclick="makeSubscript()">
          <svg viewBox="0 0 24 24">
            <path
              d="M16,7.41L11.41,12L16,16.59L14.59,18L10,13.41L5.41,18L4,16.59L8.59,12L4,7.41L5.41,6L10,10.59L14.59,6L16,7.41M21.85,21.03H16.97V20.03L17.86,19.23C18.62,18.58 19.18,18.04 19.56,17.6C19.93,17.16 20.12,16.75 20.13,16.36C20.14,16.08 20.05,15.85 19.86,15.66C19.68,15.5 19.39,15.38 19,15.38C18.69,15.38 18.42,15.44 18.16,15.56L17.5,15.94L17.05,14.77C17.32,14.56 17.64,14.38 18.03,14.24C18.42,14.1 18.85,14 19.32,14C20.1,14.04 20.7,14.25 21.1,14.66C21.5,15.07 21.72,15.59 21.72,16.23C21.71,16.79 21.53,17.31 21.18,17.78C20.84,18.25 20.42,18.7 19.91,19.14L19.27,19.66V19.68H21.85V21.03Z" />
          </svg>
        </button>
        <button class="inline-code-btn toolbar-btn" onclick="makeInlineCode()">
          <svg viewBox="0 0 24 24">
            <path
              d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z" />
          </svg>
        </button>
        <button class="ul-btn toolbar-btn" onclick="makeUL()">
          <svg viewBox="0 0 24 24">
            <path
              d="M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z" />
          </svg>
        </button>
        <button class="ol-btn toolbar-btn" onclick="makeOL()">
          <svg viewBox="0 0 24 24">
            <path
              d="M7,13V11H21V13H7M7,19V17H21V19H7M7,7V5H21V7H7M3,8V5H2V4H4V8H3M2,17V16H5V20H2V19H4V18.5H3V17.5H4V17H2M4.25,10A0.75,0.75 0 0,1 5,10.75C5,10.95 4.92,11.14 4.79,11.27L3.12,13H5V14H2V13.08L4,11H2V10H4.25Z" />
          </svg>
        </button>
        <button class="inline-img-btn toolbar-btn" onclick="addInlineImg()">
          <svg viewBox="0 0 24 24">
            <path
              d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z" />
          </svg>
        </button>
        <button class="remove-formatting-btn toolbar-btn" onclick="removeFormatting()">
          <svg viewBox="0 0 24 24">
            <path
              d="M6,5V5.18L8.82,8H11.22L10.5,9.68L12.6,11.78L14.21,8H20V5H6M3.27,5L2,6.27L8.97,13.24L6.5,19H9.5L11.07,15.34L16.73,21L18,19.73L3.55,5.27L3.27,5Z" />
          </svg>
        </button>
      </section>

      <!-- Code Options -->
      <section class="block-options block-code-options">
        <button class="edit-block-btn toolbar-btn" onclick="openCodeOptionsModal()">
          <svg viewBox="0 0 24 24">
            <path
              d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
          </svg>
        </button>
      </section>

      <!-- Image Options -->
      <section class="block-options block-image-options">
        <button class="remove-formatting-btn toolbar-btn" onclick="openImageOptionsModal()">
          <svg viewBox="0 0 24 24">
            <path
              d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
          </svg>
        </button>
      </section>

      <!-- Video Options -->
      <section class="block-options block-video-options">
        <button class="remove-formatting-btn toolbar-btn" onclick="openVideoOptionsModal()">
          <svg viewBox="0 0 24 24">
            <path
              d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
          </svg>
        </button>
      </section>

      <!-- Gallery Options -->
      <section class="block-options block-gallery-options">
        <button class="edit-block-btn toolbar-btn" onclick="openGalleryOptionsModal()">
          <svg viewBox="0 0 24 24">
            <path
              d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
          </svg>
        </button>
      </section>

      <!-- HTML Options -->
      <section class="block-options block-html-options">
        <button class="edit-block-btn toolbar-btn" onclick="openHtmlOptionsModal()">
          <svg viewBox="0 0 24 24">
            <path
              d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
          </svg>
        </button>
      </section>
    `;
    // ↑↑↑↑↑↑↑↑↑↑ DEBUG ↑↑↑↑↑↑↑↑↑↑ //


    editorEl.appendChild(editorToolbarEl);

    // Editor Content
    const editorContentEl = document.createElement('DIV');
    editorContentEl.setAttribute('class', 'editor-content');
    editorEl.appendChild(editorContentEl);

    // Editor Blocks List
    const blocksListEl = document.createElement('DIV');
    blocksListEl.setAttribute('class', 'blocks-list');
    blocksListEl.innerHTML = `
      <div class="add-block-text">
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path
            d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
        </svg>
      </div>
      <div class="add-block-code">
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path
            d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z" />
        </svg>
      </div>
      <div class="add-block-image">
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path
            d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z" />
        </svg>
      </div>
      <div class="add-block-video">
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path
            d="M15,8V16H5V8H15M16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5V7A1,1 0 0,0 16,6Z" />
        </svg>
      </div>
      <div class="add-block-gallery">
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path
            d="M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M3,5H1V21A2,2 0 0,0 3,23H19V21H3M15.96,10.29L13.21,13.83L11.25,11.47L8.5,15H19.5L15.96,10.29Z" />
        </svg>
      </div>
      <div class="add-block-html">
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path
            d="M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z" />
        </svg>
      </div>
    `;
    editorEl.appendChild(blocksListEl);


    /* **************************************** */


    let selectedRow = null;
    let selectedBlock = null;

    /* ****************************************
     **************** Set-Up ****************
    **************************************** */
    document.execCommand("defaultParagraphSeparator", false, "p");

    let blocksListSortable = new Sortable(blocksListEl, {
      group: {
        name: 'blocks-editor',
        pull: 'clone',
        put: false
      },
      sort: false,
      animation: 100,
    });

    // ========== Add Blocks ========== //

    // ---------- Templates ---------- //

    function wrapBlockWithRow(block){
      // Create row
      const newBlockRow = document.createElement('DIV');
      newBlockRow.setAttribute('class', 'row');
      newBlockRow.innerHTML = `
        <div class="handle row-handle">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z" />
          </svg>
        </div>							
      `;

      const rowContentEl = document.createElement('DIV');
      rowContentEl.setAttribute('class', 'row-content');

      // Append Block
      rowContentEl.appendChild(block);

      // Populate row
      newBlockRow.appendChild(rowContentEl);

      // Row events
      newBlockRow.addEventListener('dblclick', function(event) {
        if (event.target.classList.contains('row')) {
          selectInnerBlock();
        }        
      });

      return newBlockRow;

    }

    function createBlock(type){

      let newBlock = null;

      switch (type) {
        // ---------- Text ---------- //
        case "text":
          newBlock = document.createElement('DIV');
          newBlock.setAttribute('class', 'block block-text');
          newBlock.setAttribute('contenteditable', true);
          newBlock.setAttribute('data-type', 'text');
          newBlock.innerHTML = defaultTextContent;
          break;

        // ---------- Code ---------- //
        case "code":
          newBlock = document.createElement('DIV');
          newBlock.setAttribute('class', 'block block-code');
          newBlock.setAttribute('data-type', 'code');
          const preEl = document.createElement('PRE');
          const codeEl = document.createElement('CODE');
          codeEl.setAttribute('contenteditable', true);
          codeEl.innerHTML = defaultCodeContent;
          preEl.appendChild(codeEl);
          newBlock.appendChild(preEl);
          break;

        // ---------- Image ---------- //
        case "image":
          // Create block
          newBlock = document.createElement('FIGURE');
          newBlock.setAttribute('class', 'block block-image');
          newBlock.setAttribute('data-type', 'image');
          // Create image
          const newImageBlockImageEl = document.createElement('IMG');
          newImageBlockImageEl.setAttribute('src', defaultImageSource);
          // Append Block
          newBlock.appendChild(newImageBlockImageEl);
          break;

        // ---------- Video ---------- //
        case "video":
          // Create block
          newBlock = document.createElement('DIV');
          newBlock.setAttribute('class', 'block block-video');
          newBlock.setAttribute('data-type', 'video');
          const newVideoEl = generateVideoBlockFromUrl(defaultVideoSource);
          newBlock.appendChild(newVideoEl);
          break;

        // ---------- Gallery ---------- //
        case "gallery":
          newBlock = document.createElement('DIV');
          newBlock.setAttribute('class', 'block block-gallery gallery-carousel');
          newBlock.setAttribute('data-type', 'gallery');

          const galleryPrevBtn = document.createElement('BUTTON');
          galleryPrevBtn.setAttribute('class', 'gallery-prev');
          galleryPrevBtn.innerHTML = `
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
            </svg>
          `;
          galleryPrevBtn.addEventListener('click', function (event) {
            galleryPrev(event);
          });
          newBlock.appendChild(galleryPrevBtn);

          const galleryNextBtn = document.createElement('BUTTON');
          galleryNextBtn.setAttribute('class', 'gallery-next');
          galleryNextBtn.innerHTML = `
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
            </svg>
          `;
          galleryNextBtn.addEventListener('click', function (event) {
            galleryNext(event);
          });
          newBlock.appendChild(galleryNextBtn);

          const galleryItemsEl = document.createElement('DIV');
          galleryItemsEl.setAttribute('class', 'gallery-items');

          for (let i = 0; i < defaultGalleryItems.length; i++) {
            const itemSource = defaultGalleryItems[i];
            const imageItemEl = document.createElement('FIGURE');
            imageItemEl.setAttribute('class', 'gallery-item gallery-img');
            const imageItemImgEl = document.createElement('IMG');
            imageItemImgEl.setAttribute('src', itemSource);
            imageItemEl.appendChild(imageItemImgEl);
            galleryItemsEl.appendChild(imageItemEl);
          }
          // galleryItemsEl.innerHTML = `
          //   <figure class="">
          //     <img
          //       src="https://images.unsplash.com/photo-1630694093867-4b947d812bf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60">
          //     <figcaption class="block-caption">Look at this cute devboard 🤗!<br>Another line.</figcaption>
          //   </figure>
          //   <figure class="gallery-item gallery-img">
          //     <img
          //       src="https://images.unsplash.com/photo-1630839437035-dac17da580d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80"
          //       alt="BBC Microbit">
          //     <figcaption class="block-caption">Look at this cute devboard.</figcaption>
          //   </figure>
          //   <figure class="gallery-item gallery-img">
          //     <img
          //       src="https://images.unsplash.com/photo-1545156521-77bd85671d30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
          //       alt="BBC Microbit">
          //   </figure>
          //   <figure class="gallery-item gallery-img">
          //     <img
          //       src="https://images.unsplash.com/photo-1639973549229-c43df558ad0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60">
          //   </figure>
          //   <figure class="gallery-item gallery-img">
          //     <img
          //       src="https://images.unsplash.com/photo-1560507074-b9eb43faab00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGxhbmV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60">
          //   </figure>
          // `;
          newBlock.appendChild(galleryItemsEl);
          break;
      
        // ---------- HTML ---------- //
        case "html":
          newBlock = document.createElement('DIV');
          newBlock.setAttribute('class', 'block block-html');
          newBlock.setAttribute('data-type', 'html');

          newBlock.innerHTML += defaultHtmlContent;
          break;

        default:
          break;
      }

      // Block events
      newBlock.addEventListener('input', function () {
        save();
      });

      // Return created block
      return newBlock;

    }


    // ---------- Add from <textarea> ---------- //

    function stringToHTML(str) {
      var parser = new DOMParser();
      var doc = parser.parseFromString(str, 'text/html');
      return doc.body.children;
    };

    // Parse DB content
    if (textareaEl.value) {
      let blocksList = [];
      const blocks = stringToHTML(textareaEl.value);

      for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];

        // Add block attributes
        if (block.classList.contains('block-text')) {
          block.setAttribute('contenteditable', true);
        }

        // Add block events
        block.addEventListener('input', function () {
          save();
        });

        if (block.classList.contains('block-gallery')) {
          const galleryPrevBtn = block.querySelector('.gallery-prev');
          galleryPrevBtn.addEventListener('click', function (event) {
            galleryPrev(event);
          });
          const galleryNextBtn = block.querySelector('.gallery-next');
          galleryNextBtn.addEventListener('click', function (event) {
            galleryNext(event);
          });
        }

        // Save block
        blocksList.push(block);
      }

      blocksList.forEach(block => {
        const newBlockRow = wrapBlockWithRow(block);
        editorContentEl.appendChild(newBlockRow);
      });
    } 
    // else {
    //   // console.log("Empty textarea");
    // }


    // ---------- Add by Dragging ---------- //

    let sortable = Sortable.create(editorContentEl, {
      group: 'blocks-editor',
      handle: ".handle",
      animation: 100,
      onAdd: function (event) {

        let droppedEl = event.item;
        let newBlock = null;

        /* ---------- Text ---------- */
        if (droppedEl.classList.contains('add-block-text')) {
          newBlock = createBlock("text");
        }
        /* ---------- Code ---------- */
        else if (droppedEl.classList.contains('add-block-code')) {
          newBlock = createBlock("code");
        }
        /* ---------- Image ---------- */
        else if (droppedEl.classList.contains('add-block-image')) {
          newBlock = createBlock("image");
        }
        /* ---------- Video ---------- */
        else if (droppedEl.classList.contains('add-block-video')) {
          newBlock = createBlock("video");
        }
        /* ---------- Gallery ---------- */
        else if (droppedEl.classList.contains('add-block-gallery')) {
          newBlock = createBlock("gallery");
        }
        /* ---------- HTML ---------- */
        else if (droppedEl.classList.contains('add-block-html')) {
          newBlock = createBlock("html");
        }

        const newBlockRow = wrapBlockWithRow(newBlock);

        // Add to DOM
        event.item.replaceWith(newBlockRow);
        const block = selectInnerBlock(newBlockRow);
        if (droppedEl.classList.contains('add-block-text')) {
          block.focus();
        }
        if (droppedEl.classList.contains('add-block-code')) {
          block.querySelector('code').focus();
        }

      } // end of onAdd()
    });


    /* ****************************************
     ************* Global Events *************
    **************************************** */

    document.onselectionchange = () => {
      // console.log(document.getSelection());
    };

    // Event Handling
    window.addEventListener('paste', function (event) {
      // console.log(event);
      let clipboardData = (event.clipboardData || window.clipboardData).getData('text');
      // console.log(clipboardData);
      // const imagePattern = /(http(s ?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
      // const isImage = imagePattern.test(clipboardData);
      const urlPattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
      const isURL = urlPattern.test(clipboardData);
      if (isURL) {
        if (selectedBlock) {
          // Check that paste only triggers when modal is closed so not to interfeer with the modal functionality (pasting on modal fields)
          const modalOpen = document.querySelector('.editor-modal');

          if (!modalOpen) {

            // Image block selected
            if (selectedBlock.classList.contains('block-image')) {
              const imageEl = selectedBlock.querySelector('img');
              imageEl.src = clipboardData;
            }
            // Video block selected
            if (selectedBlock.classList.contains('block-video')) {
              changeVideoSource(clipboardData);
            }

          } // end of if(!modalOpen)

          // ----- Paste on Modal
          if (modalOpen) {
            const modalEl = document.querySelector('.editor-modal');
            let focusedInput = false;
            const modalInputs = modalEl.querySelectorAll('input');
            for (let i = 0; i < modalInputs.length; i++) {
              const inputEl = modalInputs[i];
              if (inputEl.onfocus) {
                focusedInput = true;
                break;
              }
            }
            // Paste new item in gallery modal
            if (!focusedInput && document.querySelector('.modal-gallery-items')) {
              const modalGalleryItemsEl = modalEl.querySelector('.modal-gallery-items');
              const newGalleryItem = new BlockGalleryModalItem().add(clipboardData, "", "");
              modalGalleryItemsEl.appendChild(newGalleryItem);
            }
          }
        }
      }

    });


    /* ****************************************
     *************** Functions ***************
    **************************************** */

    // ========== Utilities ========== //

    const insideEditorBlock = function (child) {
      let node = child.parentNode;
      while (node) {
        // console.log(node);
        try {
          if (node.classList.contains('block-text')) {
            return true;
          }
        } catch (error) {
          break;
        }
        // Traverse up to the parent
        node = node.parentNode;
      }

      // Go up until the root but couldn't find the `parent`
      return false;
    };

    const insideBlock = function (child) {
      let node = child.parentNode;
      let blockEl = null;
      let rowEl = null;
      let outputObj = {};
      while (node) {
        // console.log(node);
        try {
          if (child.classList.contains('block')) {
            blockEl = child;
          } else if (node.classList.contains('block')) {
            blockEl = node;
          }
          if (node.classList.contains('row')) {
            rowEl = node;
            if (!blockEl || !rowEl) {
              break;
            }
            outputObj['blockEl'] = blockEl;
            outputObj['rowEl'] = rowEl;
            return outputObj;            
          }
        } catch (error) {
          break;
        }
        // Traverse up to the parent
        node = node.parentNode;
      }

      // Go up until the root but couldn't find the `parent`
      return false;
    };

    const insideToolbar = function (child) {
      let node = child.parentNode;
      while (node) {
        try {
          if (child.classList.contains('toolbar')) {
            return child;
          } else if (node.classList.contains('toolbar')) {
            return node;
          }
        } catch (error) {
          break;
        }
        // Traverse up to the parent
        node = node.parentNode;
      }

      // Go up until the root but couldn't find the `parent`
      return false;
    };

    const insideOptionsModal = function (child) {
      let node = child.parentNode;
      while (node) {
        try {
          if (child.classList.contains('editor-modal')) {
            return child;
          } else if (node.classList.contains('editor-modal')) {
            return node;
          }
        } catch (error) {
          break;
        }
        // Traverse up to the parent
        node = node.parentNode;
      }

      // Go up until the root but couldn't find the `parent`
      return false;
    }

    const insideRowHandle = function (child) {
      let node = child.parentNode;
      while (node) {
        try {
          if (child.classList.contains('row-handle')) {
            return child;
          } else if (node.classList.contains('row-handle')) {
            return node;
          }
        } catch (error) {
          break;
        }
        // Traverse up to the parent
        node = node.parentNode;
      }

      // Go up until the root but couldn't find the `parent`
      return false;
    }

    const getParent = function (child, selector) {
      let node = child.parentNode;
      let target = child.closest(selector);
      while (node) {
        try {
          if (node === target) {
            return node;
          }
        } catch (error) {
          break;
        }
        // Traverse up to the parent
        node = node.parentNode;
      }

      // Go up until the root but couldn't find the `parent`
      return false;
    }

    // ========== Block Functionality ========== //
    function deselectAll() {
      const rows = document.getElementsByClassName('row');
      const blocks = document.getElementsByClassName('block');
      selectedRow = null;
      selectedBlock = null;

      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        row.classList.remove('selected');
      }
      for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        block.classList.remove('selected');
      }

      hideAllOptions();
    }

    function selectBlock(block) {
      selectedRow = null;
      selectedBlock = block;
      block.classList.add('selected');
      showOptions(block);
    }

    function showOptions(block) {
      // console.log(`showOptions(${block.classList})`);
      hideAllOptions();
      // Text
      if (block.classList.contains('block-text')) {
        // console.log("Text Options");
        const textOptions = editorEl.querySelectorAll('.block-text-options');
        textOptions.forEach(function (section) {
          section.classList.add('visible');
        });
      }
      // Code
      if (block.classList.contains('block-code')) {
        // console.log("Text Options");
        const textOptions = editorEl.querySelectorAll('.block-code-options');
        textOptions.forEach(function (section) {
          section.classList.add('visible');
        });
      }
      // Image
      else if (block.classList.contains('block-image')) {
        // console.log("Image Options");
        const imageOptions = editorEl.querySelector('.block-image-options');
        imageOptions.classList.add('visible');
      }
      // Video
      else if (block.classList.contains('block-video')) {
        const videoOptions = editorEl.querySelector('.block-video-options');
        videoOptions.classList.add('visible');
      }
      // Gallery
      else if (block.classList.contains('block-gallery')) {
        const galleryOptions = editorEl.querySelector('.block-gallery-options');
        galleryOptions.classList.add('visible');
      }
      // HTML
      else if (block.classList.contains('block-html')) {
        const galleryOptions = editorEl.querySelector('.block-html-options');
        galleryOptions.classList.add('visible');
      }
    }

    function showRowOptions() {
      hideAllOptions();
      const rowOptions = editorEl.querySelector('.row-options');
      rowOptions.classList.add('visible');
    }

    function hideAllOptions() {
      const blockOptions = editorEl.querySelectorAll('.block-options');
      blockOptions.forEach(function (section) {
        // console.log(section);
        section.classList.remove('visible');
      });
    }


    // ----- Row Options
    function selectInnerBlock(row = null) {
      row = row || selectedRow;
      const innerBlockEl = row.querySelector('.block');
      deselectAll();
      selectBlock(innerBlockEl);
      return innerBlockEl;
    }

    function deleteRow() {
      selectedRow.remove();
      hideAllOptions();
    }


    // ----- Code Options

    // Create Modal
    class BlockCodeOptionsModal {
      constructor(block) {
        this.block = block;
      }
      close() {
        const modal = document.getElementsByClassName('editor-modal')[0];
        modal.remove();
      }
      open() {

        // Get existing block code
        const codeEl = this.block.querySelector('code');
        const currentCode = codeEl.innerText;
        console.log(currentCode);

        // Create and populate modal
        const modal = this;
        const modalEl = document.createElement('DIV');
        modalEl.setAttribute('class', 'editor-modal');

        // Modal Content
        const modalContentEl = document.createElement('DIV');
        modalContentEl.setAttribute('class', 'modal-content html-options-modal');

        // ----- Modal form elements

        // Editor Language - Label
        const editorLanguageLabelEl = document.createElement('LABEL');
        editorLanguageLabelEl.innerText = "Language";
        // Editor Language - Input
        const editorLanguageSelectEl = document.createElement('SELECT');
        editorLanguageSelectEl.innerHTML = `
          <option value="csharp">C#</option>
          <option value="cpp">C++</option>
          <option value="css">CSS</option>
          <option value="html">HTML</option>
          <option value="http">HTTP</option>
          <option value="js">Javascript</option>
          <option value="lua">Lua</option>
          <option value="md">Markdown</option>
          <option value="powershell">PowerShell</option>
          <option value="py">Python</option>
          <option value="rb">Ruby</option>
          <option value="shell">Shell</option>
          <option value="sql">SQL</option>
          <option value="">Other</option>
        `;

        editorLanguageSelectEl.addEventListener('change', function (event) {
          const selectedOption = event.target;
          select(selectedOption);
        });

        // Code - Label
        const codeILabelEl = document.createElement('LABEL');
        codeILabelEl.innerText = "Code";
        // Code - Input
        const codeInputEl = document.createElement('TEXTAREA');
        codeInputEl.value = currentCode;

        // ----- Populate modal form

        // Editor language
        modalContentEl.appendChild(editorLanguageLabelEl);
        modalContentEl.appendChild(editorLanguageSelectEl);

        // get existing language value if any, otherwise, set to "Other"
        const codeLanguageClass = codeEl.classList.value;
        const re = /language-(\w+)/;
        let match = null;
        if (codeLanguageClass != "") {
          match = codeLanguageClass.match(re);          
        }
        if (match) {
          editorLanguageSelectEl.value = match[1];
        } else {
          editorLanguageSelectEl.value = "";
        }
        

        // Code
        modalContentEl.appendChild(codeILabelEl);
        modalContentEl.appendChild(codeInputEl);

        // ----- Submit functionality
        function submitForm() {
          // Save editor's code to original textarea
          editor.save();
          const html = editor.getTextArea().value;

          // Replace previous code
          codeEl.innerText = html;
          if (editorLanguageSelectEl.value) {
            codeEl.setAttribute('class', `language-${editorLanguageSelectEl.value}`);
          } else {
            codeEl.setAttribute('class', ``);
          }
          

          // Close modal
          modal.close();
        }

        // ----- Submit buttons
        // Close button
        const closeBtn = document.createElement('BUTTON');
        closeBtn.innerText = "Cancel";
        closeBtn.addEventListener('click', function () {
          modal.close();
        });
        // Submit button
        const submitBtn = document.createElement('BUTTON');
        submitBtn.innerHTML = `
		Ok 
		<svg style="width:1em; height:1em" viewBox="0 0 24 24">
			<path fill="currentColor" d="M19,7V11H5.83L9.41,7.41L8,6L2,12L8,18L9.41,16.58L5.83,13H21V7H19Z" />
		</svg>
		`;
        submitBtn.addEventListener('click', function () {
          submitForm();
        });
        const submitBtnsEl = document.createElement('P');
        submitBtnsEl.setAttribute('class', 'modal-content-submit-btns');
        submitBtnsEl.appendChild(closeBtn);
        submitBtnsEl.appendChild(submitBtn);
        modalContentEl.appendChild(submitBtnsEl);

        // ----- Append complete form
        modalEl.appendChild(modalContentEl);

        // ----- Append complete modal
        editorEl.appendChild(modalEl);


        let editor = {};

        function select(x) {
          let optionText = x.options[x.selectedIndex].value;
          let modes = {
            'csharp': 'text/x-csharp',
            'cpp': 'text/x-c++src',
            'css': 'text/css',
            'html': 'htmlmixed',
            'http': 'message/http',
            'js': 'text/javascript',
            'lua': 'text/x-lua',
            'md': 'text/x-markdown',
            'powershell': 'application/x-powershell',
            'py': 'text/x-python',
            'rb': 'text/x-ruby',
            'shell': 'text/x-sh',
            'sql': 'text/x-sql',
            '': ''
          };

          editor.setOption('mode', modes[optionText]);
        }

        editor = CodeMirror.fromTextArea(codeInputEl, {
          lineNumbers: true,
          mode: "text/x-csharp",
          autofocus: true,
          autoCloseTags: true,
          matchTags: true,
          matchBrackets: true,
          autoCloseBrackets: true,
          value: codeInputEl.value
        });

        // require([
        // 	// Base
        // 	"codemirror/lib/codemirror",
        // 	// Modes (Languages)
        // 	"codemirror/mode/clike/clike",
        // 	"codemirror/mode/css/css",
        // 	"codemirror/mode/http/http",
        // 	"codemirror/mode/htmlmixed/htmlmixed",
        // 	"codemirror/mode/javascript/javascript",
        // 	"codemirror/mode/lua/lua",
        // 	"codemirror/mode/markdown/markdown",
        // 	"codemirror/mode/powershell/powershell",
        // 	"codemirror/mode/python/python",
        // 	"codemirror/mode/ruby/ruby",
        // 	"codemirror/mode/shell/shell",
        // 	"codemirror/mode/sql/sql",
        // 	// Addons
        // 	"codemirror/addon/fold/xml-fold",
        // 	"codemirror/addon/edit/closetag",
        // 	"codemirror/addon/edit/matchtags",
        // 	"codemirror/addon/edit/matchbrackets",
        // 	"codemirror/addon/edit/closebrackets"
        // ], function (CodeMirror) {
        // 	editor = CodeMirror.fromTextArea(codeInputEl, {
        // 		lineNumbers: true,
        // 		mode: "text/x-csharp",
        // 		autofocus: true,
        // 		autoCloseTags: true,
        // 		matchTags: true,
        // 		matchBrackets: true,
        // 		autoCloseBrackets: true,
        // 		value: codeInputEl.value
        // 	});
        // });

        // codeInputEl.focus();
      }
    }

    // Code Options Modal
    function openCodeOptionsModal() {
      let modal = new BlockCodeOptionsModal(selectedBlock);
      modal.open();
    }


    // ----- Image Options

    // Create Modal
    class BlockImageOptionsModal {
      constructor(block) {
        this.block = block;
        this.source = "";
        this.title = "";
        this.caption = "";
        this.link = "";
        this.openNewWindow = false;
        this.openLightbox = false;
      }
      close() {
        const modal = document.getElementsByClassName('editor-modal')[0];
        modal.remove();
      }
      open() {
        // Get image block data
        const imageEl = this.block.querySelector('img');
        let captionEl = this.block.querySelector('figcaption');
        let linkEl = this.block.querySelector('a');

        console.log(imageEl);
        console.log(captionEl);

        // Populate instance fields
        this.source = imageEl.src;
        this.title = imageEl.alt;
        if (captionEl) {
          this.caption = captionEl.innerHTML;
        }
        if (linkEl) {
          // this.link = linkEl.href;
          console.log(linkEl);
        }

        // Create and populate modal
        const modal = this;
        const modalEl = document.createElement('DIV');
        modalEl.setAttribute('class', 'editor-modal');

        // Modal Content
        const modalContentEl = document.createElement('DIV');
        modalContentEl.setAttribute('class', 'modal-content image-options-modal');

        // ----- Modal form elements
        // Source - Label
        const imageSourceLabelEl = document.createElement('LABEL');
        imageSourceLabelEl.setAttribute('for', 'image-block-source');
        imageSourceLabelEl.innerText = "Source:";
        // Source - Input
        const imageSourceInputEl = document.createElement('INPUT');
        imageSourceInputEl.setAttribute('id', 'image-block-source');
        imageSourceInputEl.setAttribute('type', 'url');
        imageSourceInputEl.setAttribute('value', this.source);

        // Title - Label
        const imageTitleLabelEl = document.createElement('LABEL');
        imageTitleLabelEl.setAttribute('for', 'image-block-title');
        imageTitleLabelEl.innerText = "Title:";
        // Title - Input
        const imageTitleInputEl = document.createElement('INPUT');
        imageTitleInputEl.setAttribute('id', 'image-block-title');
        imageTitleInputEl.setAttribute('type', 'text');
        imageTitleInputEl.setAttribute('value', this.title);

        // Caption - Label
        const imageCaptionLabelEl = document.createElement('LABEL');
        imageCaptionLabelEl.setAttribute('for', 'image-block-caption');
        imageCaptionLabelEl.innerText = "Caption:";
        // Caption - Input
        const imageCaptionInputEl = document.createElement('INPUT');
        imageCaptionInputEl.setAttribute('id', 'image-block-caption');
        imageCaptionInputEl.setAttribute('type', 'text');
        imageCaptionInputEl.setAttribute('value', this.caption);

        // ----- Populate modal form
        // Source
        modalContentEl.appendChild(imageSourceLabelEl);
        modalContentEl.appendChild(imageSourceInputEl);
        // Title
        modalContentEl.appendChild(imageTitleLabelEl);
        modalContentEl.appendChild(imageTitleInputEl);
        // Caption
        modalContentEl.appendChild(imageCaptionLabelEl);
        modalContentEl.appendChild(imageCaptionInputEl);

        // ----- Submit functionality
        function submitForm() {
          imageEl.src = imageSourceInputEl.value;
          imageEl.alt = imageTitleInputEl.value;
          if (imageCaptionInputEl.value) {
            // Check if image block has figcaption
            if (!captionEl) {
              // Create new figcaption
              captionEl = document.createElement('FIGCAPTION');
              captionEl.setAttribute('class', 'block-caption')
              captionEl.innerHTML = imageCaptionInputEl.value;
              modal.block.appendChild(captionEl);
            } else {
              captionEl.innerHTML = imageCaptionInputEl.value;
            }
          } else {
            if (captionEl) {
              captionEl.remove();
            }
          }
          // modal.link = "";
          // modal.openNewWindow = false;
          // modal.openLightbox = false;
          modal.close();
        }

        // ----- Submit buttons
        // Close button
        const closeBtn = document.createElement('BUTTON');
        closeBtn.innerText = "Cancel";
        closeBtn.addEventListener('click', function () {
          modal.close();
        });
        // Submit button
        const submitBtn = document.createElement('BUTTON');
        submitBtn.innerHTML = `
		Ok 
		<svg style="width:1em; height:1em" viewBox="0 0 24 24">
			<path fill="currentColor" d="M19,7V11H5.83L9.41,7.41L8,6L2,12L8,18L9.41,16.58L5.83,13H21V7H19Z" />
		</svg>
		`;
        submitBtn.addEventListener('click', function () {
          submitForm();
        });
        const submitBtnsEl = document.createElement('P');
        submitBtnsEl.setAttribute('class', 'modal-content-submit-btns');
        submitBtnsEl.appendChild(closeBtn);
        submitBtnsEl.appendChild(submitBtn);
        modalContentEl.appendChild(submitBtnsEl);

        // ----- Append complete form
        modalEl.appendChild(modalContentEl);

        // ----- Modal Events
        modalEl.addEventListener('keyup', function (event) {
          // console.log(event);
          const pressedKey = event.key;
          if (pressedKey === "Enter") {
            submitForm();
          }
        });

        // ----- Append complete modal
        editorEl.appendChild(modalEl);

        imageSourceInputEl.focus();
      }
    }

    // Image Options Modal
    function openImageOptionsModal() {
      let modal = new BlockImageOptionsModal(selectedBlock);
      modal.open();
    }


    // ----- Video Options

    function generateVideoBlockFromUrl(sourceURL){
      const mp4VideoPattern = /.mp4$/g;
      const isMp4Video = mp4VideoPattern.test(sourceURL);

      let newVideoEl = null;

      // MP4
      if (isMp4Video) {
        newVideoEl = document.createElement('VIDEO');
        newVideoEl.setAttribute('class', 'embeded-video');
        newVideoEl.setAttribute('controls', true);
        const newVideoSourceEl = document.createElement('SOURCE');
        newVideoSourceEl.setAttribute('src', sourceURL);
        newVideoSourceEl.setAttribute('type', 'video/mp4');
        newVideoEl.appendChild(newVideoSourceEl);       
      }
      // Embeded iframe
      else {

        // Process URL
        const videoProviderPatterns =
          [
            {
              provider: "youtube",
              pattern: /(?: https ?: \/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/g
            },
            {
              provider: "vimeo",
              pattern: /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?/i
            }
          ];

        let processedVideoURL = sourceURL;
        let videoId = null;

        for (let i = 0; i < videoProviderPatterns.length; i++) {
          const providerObj = videoProviderPatterns[i];
          let result = providerObj['pattern'].exec(sourceURL);
          if (result) {
            if (providerObj['provider'] === "youtube") {
              videoId = result[1];
              processedVideoURL = `https://www.youtube.com/embed/${videoId}?feature=oembed`;
            }
            if (providerObj['provider'] === "vimeo") {
              videoId = result[1];
              processedVideoURL = `https://player.vimeo.com/video/${videoId}`;
            }
            break;
          }
        }

        newVideoEl = document.createElement('IFRAME');
        newVideoEl.setAttribute('class', 'embeded-video');
        newVideoEl.setAttribute('src', processedVideoURL);
      }

      return newVideoEl;
    }

    function changeVideoSource(sourceURL) {
      const mp4VideoPattern = /.mp4$/g;
      const isMp4Video = mp4VideoPattern.test(sourceURL);

      const videoEl = selectedBlock.querySelector('.embeded-video');

      // MP4
      if (isMp4Video) {
        // console.log("Is .mp4 video");
        // <video> tag exists
        if (videoEl.tagName === "VIDEO") {
          // console.log("video tag exists");
          const videoSourceEl = videoEl.querySelector('source');
          videoSourceEl.src = sourceURL;
        }
        // <video> tag doesn't exist
        else {
          // console.log("video tag doesn't exist");
          const newVideoEl = document.createElement('VIDEO');
          newVideoEl.setAttribute('class', 'embeded-video');
          newVideoEl.setAttribute('controls', true);
          const newVideoSourceEl = document.createElement('SOURCE');
          newVideoSourceEl.setAttribute('src', sourceURL);
          newVideoSourceEl.setAttribute('type', 'video/mp4');
          newVideoEl.appendChild(newVideoSourceEl);
          // Replace iframe for video
          videoEl.remove();
          selectedBlock.appendChild(newVideoEl);
        }
      }
      // Embeded iframe
      else {
        // console.log("Is embeded video");

        // Process URL
        const videoProviderPatterns =
          [
            {
              provider: "youtube",
              pattern: /(?: https ?: \/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/g
            },
            {
              provider: "vimeo",
              pattern: /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?/i
            }
          ];

        let processedVideoURL = sourceURL;
        let videoId = null;

        for (let i = 0; i < videoProviderPatterns.length; i++) {
          const providerObj = videoProviderPatterns[i];
          let result = providerObj['pattern'].exec(sourceURL);
          // console.log(providerObj['provider']);
          // console.log(result);
          if (result) {
            if (providerObj['provider'] === "youtube") {
              videoId = result[1];
              processedVideoURL = `https://www.youtube.com/embed/${videoId}?feature=oembed`;
            }
            if (providerObj['provider'] === "vimeo") {
              videoId = result[1];
              processedVideoURL = `https://player.vimeo.com/video/${videoId}`;
            }
            break;
          }
        }

        // <iframe> tag exists
        if (videoEl.tagName === "IFRAME") {
          // console.log("iframe tag exists");
          videoEl.src = processedVideoURL;
        }
        // <iframe> tag doesn't exist
        else {
          // console.log("iframe tag doesn't exist");
          const newVideoEl = document.createElement('IFRAME');
          newVideoEl.setAttribute('class', 'embeded-video');
          newVideoEl.setAttribute('src', processedVideoURL);
          // Replace iframe for video
          videoEl.remove();
          selectedBlock.appendChild(newVideoEl);
        }
      }
    }

    // Create Modal
    class BlockVideoOptionsModal {
      constructor(block) {
        this.block = block;
        this.source = "";
        this.caption = "";
      }
      close() {
        const modal = document.getElementsByClassName('editor-modal')[0];
        modal.remove();
      }
      open() {
        // Get image block data
        const videoEl = this.block.querySelector('iframe') || this.block.querySelector('video');
        let captionEl = this.block.querySelector('figcaption');

        // console.log(videoEl);
        // console.log(captionEl);

        // Populate instance fields
        if (videoEl.tagName === "IFRAME") {
          this.source = videoEl.src;
        } else {
          const videoSourceEl = videoEl.querySelector('source');
          this.source = videoSourceEl.src;
        }
        if (captionEl) {
          this.caption = captionEl.innerText;
        }

        // Create and populate modal
        const modal = this;
        const modalEl = document.createElement('DIV');
        modalEl.setAttribute('class', 'editor-modal');

        // Modal Content
        const modalContentEl = document.createElement('DIV');
        modalContentEl.setAttribute('class', 'modal-content video-options-modal');

        // ----- Modal form elements
        // Source - Label
        const videoSourceLabelEl = document.createElement('LABEL');
        videoSourceLabelEl.setAttribute('for', 'video-block-source');
        videoSourceLabelEl.innerText = "Source:";
        // Source - Input
        const videoSourceInputEl = document.createElement('INPUT');
        videoSourceInputEl.setAttribute('id', 'video-block-source');
        videoSourceInputEl.setAttribute('type', 'url');
        videoSourceInputEl.setAttribute('value', this.source);

        // Caption - Label
        const videoCaptionLabelEl = document.createElement('LABEL');
        videoCaptionLabelEl.setAttribute('for', 'video-block-caption');
        videoCaptionLabelEl.innerText = "Caption:";
        // Caption - Input
        const videoCaptionInputEl = document.createElement('INPUT');
        videoCaptionInputEl.setAttribute('id', 'video-block-caption');
        videoCaptionInputEl.setAttribute('type', 'text');
        videoCaptionInputEl.setAttribute('value', this.caption);



        // ----- Populate modal form
        // Source
        modalContentEl.appendChild(videoSourceLabelEl);
        modalContentEl.appendChild(videoSourceInputEl);
        // Caption
        modalContentEl.appendChild(videoCaptionLabelEl);
        modalContentEl.appendChild(videoCaptionInputEl);

        // ----- Submit functionality
        function submitForm() {

          changeVideoSource(videoSourceInputEl.value);

          if (videoCaptionInputEl.value) {
            // Check if video block has figcaption
            if (!captionEl) {
              // Create new figcaption
              captionEl = document.createElement('FIGCAPTION');
              captionEl.setAttribute('class', 'block-caption')
              captionEl.innerText = videoCaptionInputEl.value;
              modal.block.appendChild(captionEl);
            } else {
              captionEl.innerText = videoCaptionInputEl.value;
            }
          } else {
            if (captionEl) {
              captionEl.remove();
            }
          }
          modal.close();
        }

        // ----- Submit buttons
        // Close button
        const closeBtn = document.createElement('BUTTON');
        closeBtn.innerText = "Cancel";
        closeBtn.addEventListener('click', function () {
          modal.close();
        });
        // Submit button
        const submitBtn = document.createElement('BUTTON');
        submitBtn.innerHTML = `
		Ok 
		<svg style="width:1em; height:1em" viewBox="0 0 24 24">
			<path fill="currentColor" d="M19,7V11H5.83L9.41,7.41L8,6L2,12L8,18L9.41,16.58L5.83,13H21V7H19Z" />
		</svg>
		`;
        submitBtn.addEventListener('click', function () {
          submitForm();
        });
        const submitBtnsEl = document.createElement('P');
        submitBtnsEl.setAttribute('class', 'modal-content-submit-btns');
        submitBtnsEl.appendChild(closeBtn);
        submitBtnsEl.appendChild(submitBtn);
        modalContentEl.appendChild(submitBtnsEl);

        // ----- Append complete form
        modalEl.appendChild(modalContentEl);

        // ----- Modal Events
        modalEl.addEventListener('keyup', function (event) {
          // console.log(event);
          const pressedKey = event.key;
          if (pressedKey === "Enter") {
            submitForm();
          }
        });

        // ----- Append complete modal
        editorEl.appendChild(modalEl);

        videoSourceInputEl.focus();
      }
    }

    // Video Options Modal
    function openVideoOptionsModal() {
      let modal = new BlockVideoOptionsModal(selectedBlock);
      modal.open();
    }


    // ----- Gallery Options

    class BlockGalleryItem {
      constructor(source = "", title = "", caption = "") {
        this.source = source;
        this.title = title;
        this.caption = caption;
      }
      add(src, title = "", caption = "") {
        // Gallery Item
        const itemEl = document.createElement('FIGURE');
        // Image
        const itemImageEl = document.createElement('IMG');
        itemEl.setAttribute('class', 'gallery-item gallery-img');
        itemImageEl.setAttribute('src', src);
        itemImageEl.setAttribute('alt', title);
        itemEl.appendChild(itemImageEl);
        // Caption
        if (caption) {
          const itemCaptionEl = document.createElement('FIGCAPTION');
          itemCaptionEl.setAttribute('class', 'block-caption');
          itemCaptionEl.innerHTML = caption;
          itemEl.appendChild(itemCaptionEl);
        }
        // Complete item
        return itemEl;
      }
    }

    class BlockGalleryModalItem {
      constructor(source = "", title = "", caption = "") {
        this.source = source;
        this.title = title;
        this.caption = caption;
      }
      add(src, title, caption) {
        const itemEl = document.createElement('FIGURE');
        const itemImageEl = document.createElement('IMG');
        const itemTitleEl = document.createElement('INPUT');
        const itemCaptionEl = document.createElement('INPUT');
        const itemDeleteBtnEl = document.createElement('BUTTON');

        itemEl.setAttribute('class', 'gallery-modal-item')
        itemImageEl.setAttribute('src', src);
        itemImageEl.setAttribute('class', 'handle');
        itemImageEl.setAttribute('alt', title || '');
        itemTitleEl.setAttribute('type', 'text');
        itemTitleEl.value = title || "";
        itemTitleEl.placeholder = "title";
        itemTitleEl.setAttribute('class', 'item-title-input');
        itemCaptionEl.setAttribute('type', 'text');
        itemCaptionEl.value = caption || "";
        itemCaptionEl.placeholder = "caption";
        itemCaptionEl.setAttribute('class', 'item-caption-input');
        itemDeleteBtnEl.setAttribute('class', 'gallery-item-delete-btn');
        itemDeleteBtnEl.setAttribute('tabindex', '-1');
        itemDeleteBtnEl.innerHTML = `
			<svg style="width:24px;height:24px" viewBox="0 0 24 24">
				<path fill="currentColor" d="M19,3H16.3H7.7H5A2,2 0 0,0 3,5V7.7V16.4V19A2,2 0 0,0 5,21H7.7H16.4H19A2,2 0 0,0 21,19V16.3V7.7V5A2,2 0 0,0 19,3M15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4L13.4,12L17,15.6L15.6,17Z" />
			</svg>
		`;
        itemDeleteBtnEl.addEventListener('click', (event) => {
          this.delete(itemEl);
        });
        itemEl.appendChild(itemImageEl);
        itemEl.appendChild(itemTitleEl);
        itemEl.appendChild(itemCaptionEl);
        itemEl.appendChild(itemDeleteBtnEl);
        return itemEl;
      }
      delete(itemEl) {
        itemEl.remove();
      }
    }

    class BlockGalleryOptionsModal {
      constructor(block) {
        this.block = block;
        this.type = "carousel";
        this.items = [];
        this.pasteEnable = true;
      }
      close() {
        const modal = document.getElementsByClassName('editor-modal')[0];
        modal.remove();
      }
      open() {

        const galleryBlockEl = this.block;

        // Get gallery block data
        let galleryType = "carousel";
        if (this.block.classList.contains('gallery-grid')) {
          galleryType = "grid";
        }
        if (this.block.classList.contains('gallery-masonry')) {
          galleryType = "masonry";
        }
        const itemsEl = this.block.querySelector('.gallery-items');

        // Populate instance fields
        const galleryItems = itemsEl.querySelectorAll('.gallery-item');

        if (itemsEl) {
          for (let i = 0; i < galleryItems.length; i++) {
            const item = galleryItems[i];
            let itemObj = {};
            const itemImg = item.querySelector('img');
            const itemCaption = item.querySelector('figcaption');
            if (itemImg) {
              itemObj['src'] = itemImg.src;
              itemObj['title'] = itemImg.alt;
            }
            if (itemCaption) {
              itemObj['caption'] = itemCaption.innerHTML;
            }
            this.items.push(itemObj);
          }
        }

        // console.log(this.items);

        // Create and populate modal
        const modal = this;
        const modalEl = document.createElement('DIV');
        modalEl.setAttribute('class', 'editor-modal');

        // Modal Content
        const modalContentEl = document.createElement('DIV');
        modalContentEl.setAttribute('class', 'modal-content gallery-options-modal');

        const galleryItemsLabelEl = document.createElement('LABEL');
        galleryItemsLabelEl.innerText = "Gallery Items";

        const galleryItemsEl = document.createElement('DIV');
        galleryItemsEl.setAttribute('class', 'modal-gallery-items');

        const addItemBtn = document.createElement('DIV');
        addItemBtn.setAttribute('class', 'gallery-modal-add-item-btn')
        addItemBtn.innerHTML = `
			<svg style="width:24px;height:24px" viewBox="0 0 24 24">
				<path fill="currentColor" d="M19,20H5V4H7V7H17V4H19M12,2A1,1 0 0,1 13,3A1,1 0 0,1 12,4A1,1 0 0,1 11,3A1,1 0 0,1 12,2M19,2H14.82C14.4,0.84 13.3,0 12,0C10.7,0 9.6,0.84 9.18,2H5A2,2 0 0,0 3,4V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V4A2,2 0 0,0 19,2Z" />
			</svg>
			<p class="gallery-modal-add-item-tooltip">Paste the URL from the clipboard</p>
		`;


        let galleryItemsList = Sortable.create(galleryItemsEl, {
          group: 'gallery-items',
          handle: ".handle",
          animation: 100
        });


        for (let i = 0; i < this.items.length; i++) {
          const itemObj = this.items[i];
          // console.log(itemObj);
          const newGalleryItem = new BlockGalleryModalItem().add(itemObj.src, itemObj.title, itemObj.caption);

          galleryItemsEl.appendChild(newGalleryItem);
        }

        galleryItemsEl.appendChild(addItemBtn);

        // ----- Populate modal form
        modalContentEl.appendChild(galleryItemsLabelEl);
        modalContentEl.appendChild(galleryItemsEl);

        // ----- Submit functionality
        function submitForm() {
          // Cache galleryEl
          const galleryBlockItemsEl = galleryBlockEl.querySelector('.gallery-items');

          // Get modal gallery items
          let galleryModalItems = galleryItemsList.el.querySelectorAll('.gallery-modal-item');

          // Remove gallery block items
          galleryBlockItemsEl.innerHTML = ``;

          // Add updated items
          for (let i = 0; i < galleryModalItems.length; i++) {
            // Create item obj
            const itemEl = galleryModalItems[i];
            // console.log(itemEl);

            const itemSrc = itemEl.querySelector('img').src;
            const itemTitle = itemEl.querySelector('.item-title-input').value;
            const itemCaption = itemEl.querySelector('.item-caption-input').value;

            // Create new item
            const newGalleryItem = new BlockGalleryItem().add(itemSrc, itemTitle, itemCaption);
            // console.log(newGalleryItem);

            // Add item to gallery
            galleryBlockItemsEl.appendChild(newGalleryItem);
          }

          modal.close();
        }

        // ----- Submit buttons
        // Close button
        const closeBtn = document.createElement('BUTTON');
        closeBtn.innerText = "Cancel";
        closeBtn.addEventListener('click', function () {
          modal.close();
        });
        // Submit button
        const submitBtn = document.createElement('BUTTON');
        submitBtn.innerHTML = `
		Ok 
		<svg style="width:1em; height:1em" viewBox="0 0 24 24">
			<path fill="currentColor" d="M19,7V11H5.83L9.41,7.41L8,6L2,12L8,18L9.41,16.58L5.83,13H21V7H19Z" />
		</svg>
		`;
        submitBtn.addEventListener('click', function () {
          submitForm();
        });
        const submitBtnsEl = document.createElement('P');
        submitBtnsEl.setAttribute('class', 'modal-content-submit-btns');
        submitBtnsEl.appendChild(closeBtn);
        submitBtnsEl.appendChild(submitBtn);
        modalContentEl.appendChild(submitBtnsEl);

        // ----- Append complete form
        modalEl.appendChild(modalContentEl);

        // ----- Modal Events
        modalEl.addEventListener('keyup', function (event) {
          // console.log(event);
          const pressedKey = event.key;
          if (pressedKey === "Enter") {
            submitForm();
          }
        });

        // ----- Append complete modal
        editorEl.appendChild(modalEl);

        // ----- Focus on first input
        modalEl.querySelector('input').focus();
      }
    }

    // Gallery Options Modal
    function openGalleryOptionsModal() {
      let modal = new BlockGalleryOptionsModal(selectedBlock);
      modal.open();
    }

    // Gallery Functionality

    function galleryPrev(event) {
      const galleryWrapper = event.currentTarget.parentElement;
      const gallery = galleryWrapper.getElementsByClassName("gallery-items")[0];
      const galleryItems = gallery.getElementsByClassName("gallery-item");
      const scrollIncrement = gallery.scrollWidth / galleryItems.length;
      gallery.scrollLeft === 0 ? gallery.scrollLeft = gallery.scrollWidth - scrollIncrement : gallery.scrollLeft -= scrollIncrement;
    }

    function galleryNext(event) {
      const galleryWrapper = event.currentTarget.parentElement;
      const gallery = galleryWrapper.getElementsByClassName("gallery-items")[0];
      const galleryItems = gallery.getElementsByClassName("gallery-item");
      const scrollIncrement = gallery.scrollWidth / galleryItems.length;
      gallery.scrollLeft === gallery.scrollWidth - Math.round(scrollIncrement) ? gallery.scrollLeft = 0 :
        gallery.scrollLeft += scrollIncrement;
    }


    // ----- HTML Options

    // Create Modal
    class BlockHtmlOptionsModal {
      constructor(block) {
        this.block = block;
        this.code = "";
      }
      close() {
        const modal = document.getElementsByClassName('editor-modal')[0];
        modal.remove();
      }
      open() {
        // Get code


        // Create and populate modal
        const modal = this;
        const modalEl = document.createElement('DIV');
        modalEl.setAttribute('class', 'editor-modal');

        // Modal Content
        const modalContentEl = document.createElement('DIV');
        modalContentEl.setAttribute('class', 'modal-content html-options-modal');

        // ----- Modal form elements
        // Code - Input
        const codeInputEl = document.createElement('TEXTAREA');
        codeInputEl.value = modal.block.innerHTML.toString();

        // ----- Populate modal form
        modalContentEl.appendChild(codeInputEl);

        // ----- Submit functionality
        function submitForm() {
          // Save editor's code to original textarea
          htmlEditor.save();
          const html = htmlEditor.getTextArea().value;

          // Remove previous code
          modal.block.innerHTML = "";

          // Close modal
          modal.close();

          // Add new code and run any JS
          const scriptEl = document.createRange().createContextualFragment(html);
          modal.block.append(scriptEl);
        }

        // ----- Submit buttons
        // Close button
        const closeBtn = document.createElement('BUTTON');
        closeBtn.innerText = "Cancel";
        closeBtn.addEventListener('click', function () {
          modal.close();
        });
        // Submit button
        const submitBtn = document.createElement('BUTTON');
        submitBtn.innerHTML = `
		Ok 
		<svg style="width:1em; height:1em" viewBox="0 0 24 24">
			<path fill="currentColor" d="M19,7V11H5.83L9.41,7.41L8,6L2,12L8,18L9.41,16.58L5.83,13H21V7H19Z" />
		</svg>
		`;
        submitBtn.addEventListener('click', function () {
          submitForm();
        });
        const submitBtnsEl = document.createElement('P');
        submitBtnsEl.setAttribute('class', 'modal-content-submit-btns');
        submitBtnsEl.appendChild(closeBtn);
        submitBtnsEl.appendChild(submitBtn);
        modalContentEl.appendChild(submitBtnsEl);

        // ----- Append complete form
        modalEl.appendChild(modalContentEl);

        // ----- Append complete modal
        editorEl.appendChild(modalEl);


        let htmlEditor = {};

        htmlEditor = CodeMirror.fromTextArea(codeInputEl, {
          lineNumbers: true,
          mode: "htmlmixed",
          autofocus: true,
          autoCloseTags: true,
          matchTags: true,
          matchBrackets: true,
          autoCloseBrackets: true,
          value: codeInputEl.value
        });

        // require([
        // 	// Base
        // 	"codemirror/lib/codemirror",
        // 	"codemirror/mode/htmlmixed/htmlmixed", 
        // 	// Addons
        // 	"codemirror/addon/fold/xml-fold",
        // 	"codemirror/addon/edit/closetag",
        // 	"codemirror/addon/edit/matchtags",
        // 	"codemirror/addon/edit/matchbrackets",
        // 	"codemirror/addon/edit/closebrackets"
        // ], function (CodeMirror) {
        // 	htmlEditor = CodeMirror.fromTextArea(codeInputEl, {
        // 		lineNumbers: true,
        // 		mode: "htmlmixed",
        // 		autofocus: true,
        // 		autoCloseTags: true,
        // 		matchTags: true,
        // 		matchBrackets: true,
        // 		autoCloseBrackets: true,
        // 		value: codeInputEl.value
        // 	});
        // });

        // codeInputEl.focus();
      }
    }

    // HTML Options Modal
    function openHtmlOptionsModal() {
      let modal = new BlockHtmlOptionsModal(selectedBlock);
      modal.open();
    }



    // ========== Window Events ========== //

    window.addEventListener('click', function (event) {
      const clickedEl = event.target;
      const modalOpen = document.querySelector('.editor-modal');

      // console.log(`Modal Open → ${modalOpen}`);

      const allRows = document.querySelectorAll('.row');
      // const allBlocks = document.querySelectorAll('.block');
      const clickedRow = clickedEl.classList.contains('row') ? clickedEl : false;
      const clickedRowHandle = insideRowHandle(event.target);
      const clickedBlock = insideBlock(event.target);
      const clickedToolbar = insideToolbar(event.target);
      const clickedOptionsModal = insideOptionsModal(event.target);

      // console.log(clickedOptionsModal);

      // Clear selected rows
      allRows.forEach(function (row) {
        row.classList.remove('selected');
      });

      // Clear selected blocks
      if (!clickedToolbar && !modalOpen) {
        // console.log("Clicked outside Toolbar or Options Modal");
        deselectAll();
      }


      if (clickedRow || clickedRowHandle || clickedBlock || clickedToolbar || modalOpen) {
        // console.log(clickedBlock);
        // console.log(event.target);
        if (clickedRow) {
          clickedEl.classList.add('selected');
          // Hide block options
          hideAllOptions();
          // Show row options
          showRowOptions();
          selectedRow = clickedRow;
          selectedBlock = null;
        }
        if (clickedRowHandle) {
          clickedRowHandle.parentElement.classList.add('selected');
          // Hide block options
          hideAllOptions();
          // Show row options
          showRowOptions();
          selectedRow = clickedRowHandle.parentElement;
          selectedBlock = null;
        }
        if (clickedBlock) {
          selectBlock(clickedBlock['blockEl']);
        }

      } else {
        // console.log("Click outside of block");
        // const selection = window.getSelection();
        // const selectedNode = selection.anchorNode;
        // console.log(selectedNode);
        hideAllOptions();
        selectedBlock = null;
        selectedRow = null;
      }
    });

    window.addEventListener('keyup', function (event) {
      const pressedKey = event.key;
      if (selectedRow && pressedKey === "Delete") {
        deleteRow();
      }
    });


    // ========== Formatting ========== //

    // ---------- Block styling ---------- //

    function makeH1() {
      document.execCommand('formatBlock', false, '<H1>');
    }
    function makeH2() {
      document.execCommand('formatBlock', false, '<H2>');
    }
    function makeH3() {
      document.execCommand('formatBlock', false, '<H3>');
    }
    function makeP() {
      document.execCommand('formatBlock', false, '<P>');
    }

    // ---------- Inline styling ---------- //

    function format(selection, tagName, attributes) {

      console.log("format()");
      console.log(selection.toString());
      /* tagName → 'CODE', 'STRONG', 'EM', ... */

      // const selection = window.getSelection();
      const selectedText = selection.toString();
      const selectedNode = selection.anchorNode;
      const selectionAnchorNode = selection.anchorNode;
      const selectionFocusNode = selection.focusNode;
      const selectionAnchorNodeParent = selectionAnchorNode.parentNode;
      const selectionFocusNodeParent = selectionFocusNode.parentNode;

      let newEl = document.createElement(tagName);
      if (attributes) {
        for (let i = 0; i < attributes.length; i++) {
          const attribute = attributes[i];
          newEl.setAttribute(attribute[0], attribute[1]);
        }
      }

      const range = selection.getRangeAt(0);

      console.log(`Carret Selection → ${selection.isCollapsed}`);
      console.log(`anchorOffset → ${selection.anchorOffset}`);
      console.log(selectedText);
      console.log(`focusOffset → ${selection.focusOffset}`);

      // Set contents of new element
      newEl.textContent = selectedText;

      // Remove selection
      range.deleteContents();

      // Add new element wrapped in tag
      range.insertNode(newEl);



      // Only apply formatting to the editor blocks
      if (insideEditorBlock(selectedNode)) {
        console.log("insideEditorBlock()");

        /*
                                ↓⫼⫼⫼⫼⫼⫼⫼⫼⫼⫼⫼⫼⫼↓
        In an effort to encour[23]ge children t[37] get more involved some_name = "name" in technology, let some_name = "name" not just as consumers, but as creators, and building on the legacy of the BBC Micro, BBC's Make It Digital campaign announced the Micro Bit (stylized to micro:bit) on March 12 2015 to be delivered to 1 million year 7 (11 and 12 year old) UK students.
      	
        */

        console.log(`Carret Selection → ${selection.isCollapsed}`);
        console.log(`anchorOffset → ${selection.anchorOffset}`);
        console.log(selectedText);
        console.log(`focusOffset → ${selection.focusOffset}`);

        // Set contents of new element
        newEl.textContent = selectedText;

        // Remove selection
        range.deleteContents();

        // Add new element wrapped in tag
        range.insertNode(newEl);

        // Local variavles
        // 	let anchorIntersection = "";
        // 	let focusIntersection = "";
        // 	let paragraphIntersection = "";
        // 	let outputText = "";

        // 	// Check if selection is already formatted
        // 	console.log(selection);

        // 	// Check if selection includes a <code> tag
        // 	if (selectionAnchorNodeParent.tagName === tagName || selectionFocusNodeParent.tagName === tagName) {

        // 		// Anchor is <code>
        // 		if (selectionAnchorNodeParent.tagName === tagName && selectionFocusNodeParent.tagName !== tagName) {
        // 			console.log(`Anchor is <${tagName}>`);

        // 			// Get output text
        // 			// <code> → OUT
        // 			if (selectionDirection == "leftToRight") {
        // 				focusIntersection = selectionFocusNode.data.slice(0, selection.focusOffset);
        // 				outputText = selectionAnchorNode.data + focusIntersection;
        // 			}
        // 			// OUT ← <code>
        // 			else if (selectionDirection == "rightToLeft") {
        // 				focusIntersection = selectionFocusNode.data.slice(selection.focusOffset);
        // 				outputText = focusIntersection + selectionAnchorNode.data;
        // 			}

        // 			// Remove selection and formatted text
        // 			range.deleteContents();
        // 			selectionAnchorNodeParent.remove();
        // 			// Add new element wrapped in tag
        // 			newEl.innerText = outputText;
        // 			range.insertNode(newEl);
        // 		}

        // 		// Focus is <code>
        // 		else if (selectionAnchorNodeParent.tagName !== tagName && selectionFocusNodeParent.tagName === tagName) {
        // 			console.log(`Focus is <${tagName}>`);

        // 			// Get output text
        // 			// IN → <code>
        // 			if (selectionDirection == "leftToRight") {
        // 				anchorIntersection = selectionAnchorNode.data.slice(selection.anchorOffset);
        // 				outputText = anchorIntersection + selectionFocusNode.data;
        // 			}
        // 			// <code> ← IN
        // 			else if (selectionDirection == "rightToLeft") {
        // 				anchorIntersection = selectionAnchorNode.data.slice(0, selection.anchorOffset);
        // 				outputText = selectionFocusNode.data + anchorIntersection;
        // 			}

        // 			// Remove selection and formatted text
        // 			range.deleteContents();
        // 			selectionFocusNodeParent.remove();
        // 			// Add new element wrapped in tag
        // 			newEl.innerText = outputText;
        // 			range.insertNode(newEl);
        // 		}

        // 		// Both Anchor and Focus are <code>
        // 		else if (selectionAnchorNodeParent.tagName === tagName && selectionFocusNodeParent.tagName === tagName) {

        // 			console.log(`Both are <${tagName}>`);

        // 			// Check if both are inside the same <code> tag
        // 			const differentTags = selectionAnchorNodeParent != selectionFocusNodeParent && selectionAnchorNodeParent.parentNode == selectionFocusNodeParent.parentNode;

        // 			if (differentTags) {

        // 				// Get output text
        // 				if (selectionDirection == "leftToRight") {

        // 					// Anchor Intersection
        // 					anchorIntersection = selectionAnchorNode.data.slice(selection.anchorOffset);
        // 					// Focus Intersection
        // 					focusIntersection = selectionFocusNode.data.slice(0, selection.focusOffset);
        // 					// Paragraph Intersection
        // 					paragraphIntersection = selectedText.slice(
        // 						anchorIntersection.length,
        // 						selectedText.length - focusIntersection.length
        // 					);
        // 					// Output Text
        // 					outputText = selectionAnchorNode.data + paragraphIntersection + selectionFocusNode.data;

        // 				} else if (selectionDirection == "rightToLeft") {

        // 					// Anchor Intersection
        // 					anchorIntersection = selectionAnchorNode.data.slice(0, selection.anchorOffset);
        // 					// Focus Intersection
        // 					focusIntersection = selectionFocusNode.data.slice(selection.focusOffset);
        // 					// Paragraph Intersection
        // 					paragraphIntersection = selectedText.slice(
        // 						focusIntersection.length,
        // 						selectedText.length - anchorIntersection.length
        // 					);
        // 					// Output Text
        // 					outputText = selectionFocusNode.data + paragraphIntersection + selectionAnchorNode.data;

        // 				}

        // 				console.log(selectionAnchorNode.data);
        // 				console.log(`${anchorIntersection.length} → ${anchorIntersection}`);
        // 				console.log(paragraphIntersection);
        // 				console.log(`${focusIntersection.length} → ${focusIntersection}`);
        // 				console.log(selectionFocusNode.data);
        // 				console.log(outputText);

        // 				// Remove selection and formatted text
        // 				range.deleteContents();
        // 				selectionAnchorNodeParent.remove();
        // 				selectionFocusNodeParent.remove();
        // 				// Add new element wrapped in tag
        // 				newEl.innerText = outputText;
        // 				range.insertNode(newEl);
        // 			}
        // 		}
        // 	}
        // 	// Neither Anchor nor Focus are <code>
        // 	else {
        // 		console.log(`Neither is <${tagName}>`);
        // 		// Create <code> element
        // 		newEl.textContent = selectedText;

        // 		// Remove selection
        // 		range.deleteContents();

        // 		// Add new element wrapped in tag
        // 		range.insertNode(newEl);
        // 	}

      } // end of insideEditorBlock()
    }

    function makeBold() {
      document.execCommand('bold');
    }
    function makeItalic() {
      document.execCommand('italic');
    }
    function makeUnderline() {
      document.execCommand('underline');
    }
    function makeStrikethrough() {
      document.execCommand('strikeThrough');
    }

    /* ---------- Anchor ---------- */

    // Create Modal
    class AnchorOptionsModal {
      constructor(block) {
        this.block = block;
      }
      close() {
        const modal = document.getElementsByClassName('editor-modal')[0];
        modal.remove();
      }
      open(range) {
        // Process range

        // const fragment = range.cloneContents();

        // console.log(range);
        // console.log(fragment);

        const container = range.startContainer.parentElement;
        const existingAnchor = container.tagName === 'A';

        // console.log(container);

        let anchorText = null;
        let anchorLink = null;
        let openNewWindow = false;
        // const selectedNode = range.anchorNode;


        if (existingAnchor) {
          console.log("A!");
          // Get anchor text
          anchorText = container.innerText;
          // Get anchor link
          anchorLink = container.href;
          // Get anchor target
          openNewWindow = container.target === "_blank" ? true : false;
        } else {
          console.log("Not A!");
          // Define anchor text
          if (!range.collapsed) {
            console.log("Not Collapsed");
            anchorText = range.toString();
            console.log(anchorText);
          }

        }

        console.log(anchorText);


        // Create and populate modal
        const modal = this;
        const modalEl = document.createElement('DIV');
        modalEl.setAttribute('class', 'editor-modal');

        // Modal Content
        const modalContentEl = document.createElement('DIV');
        modalContentEl.setAttribute('class', 'modal-content html-options-modal');

        // ----- Modal form elements
        // Link - Label
        const linkLabelEl = document.createElement('LABEL');
        linkLabelEl.innerText = "Link";
        // Link - Input
        const linkInputEl = document.createElement('INPUT');
        linkInputEl.setAttribute('type', 'text');
        linkInputEl.setAttribute('value', anchorLink || '');

        // Target - Label
        const targetLabelEl = document.createElement('LABEL');
        targetLabelEl.innerText = "Open in new window";
        targetLabelEl.setAttribute('for', 'anchor-target');
        // Target - Input
        const newWindowInputEl = document.createElement('INPUT');
        newWindowInputEl.setAttribute('type', 'checkbox');
        newWindowInputEl.setAttribute('id', 'anchor-target');
        if (openNewWindow) {
          newWindowInputEl.setAttribute('checked', true);
        }


        // ----- Populate modal form
        modalContentEl.appendChild(linkLabelEl);
        modalContentEl.appendChild(linkInputEl);
        // Target
        targetLabelEl.prepend(newWindowInputEl);
        modalContentEl.appendChild(targetLabelEl);

        // ----- Submit functionality
        function submitForm() {
          // Build anchor node
          const newAnchorEl = document.createElement('A');
          newAnchorEl.innerText = anchorText;
          newAnchorEl.setAttribute('href', linkInputEl.value);
          if (newWindowInputEl.checked) {
            newAnchorEl.setAttribute('target', '_blank');
          }

          // console.log(anchorText);

          // Remove selection
          window.getSelection().removeAllRanges();
          window.getSelection().addRange(range);
          if (existingAnchor) {
            console.log("existing anchor");
            console.log(newAnchorEl);
            container.outerHTML = newAnchorEl.outerHTML;
          } else {
            console.log("new anchor");
            range.deleteContents();
            range.insertNode(newAnchorEl);
          }


          console.log(newAnchorEl);

          // Close modal
          modal.close();
        }

        // ----- Submit buttons
        // Close button
        const closeBtn = document.createElement('BUTTON');
        closeBtn.innerText = "Cancel";
        closeBtn.addEventListener('click', function () {
          modal.close();
        });
        // Submit button
        const submitBtn = document.createElement('BUTTON');
        submitBtn.innerHTML = `
		Ok 
		<svg style="width:1em; height:1em" viewBox="0 0 24 24">
			<path fill="currentColor" d="M19,7V11H5.83L9.41,7.41L8,6L2,12L8,18L9.41,16.58L5.83,13H21V7H19Z" />
		</svg>
		`;
        if (!anchorText) {
          submitBtn.setAttribute('disabled', true);
          submitBtn.innerHTML = `⚠ No text selected!`;
        }
        submitBtn.addEventListener('click', () => {
          submitForm();
        });
        const submitBtnsEl = document.createElement('P');
        submitBtnsEl.setAttribute('class', 'modal-content-submit-btns');
        submitBtnsEl.appendChild(closeBtn);
        submitBtnsEl.appendChild(submitBtn);
        modalContentEl.appendChild(submitBtnsEl);

        // ----- Append complete form
        modalEl.appendChild(modalContentEl);

        // ----- Append complete modal
        editorEl.appendChild(modalEl);

        // ----- Modal Events
        modalEl.addEventListener('keyup', function (event) {
          const pressedKey = event.key;
          if (pressedKey === "Enter") {
            submitForm();
          }
        });

        linkInputEl.focus();
      }
    }

    // Anchor Options Modal
    function openAnchorOptionsModal() {
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const fragment = range.cloneContents();
      // console.log(range);
      // console.log(fragment);
      let modal = new AnchorOptionsModal(selectedBlock);
      modal.open(range);
    }

    function removeAnchor() {
      console.log("Warup!");
      document.execCommand('unlink');
    }

    /* ---------- Sub/Superscript ---------- */

    function makeSubscript() {
      document.execCommand('subscript');
    }
    function makeSuperscript() {
      document.execCommand('superscript');
    }

    /* ---------- Inline Code ---------- */

    function makeInlineCode() {
      const selection = window.getSelection();
      const selectedText = selection.toString();
      const selectedNode = selection.anchorNode;
      const selectionParent = selection.anchorNode.parentNode;
      const selectionAnchorNode = selection.anchorNode;
      const selectionFocusNode = selection.focusNode;
      const selectionAnchorNodeParent = selectionAnchorNode.parentNode;
      const selectionFocusNodeParent = selectionFocusNode.parentNode;

      let codeEl = document.createElement('CODE');
      // codeEl.setAttribute('class', 'language-py');

      const range = selection.getRangeAt(0);

      // Only apply formatting to the editor blocks
      if (insideEditorBlock(selectedNode)) {

        // Detect direction of selection
        let selectionDirection = null;
        if (selection.anchorOffset > selection.focusOffset) {
          // console.log("→ Left to Right");
          selectionDirection = "leftToRight";
        } else if (selection.anchorOffset < selection.focusOffset) {
          // console.log("← Right to left");
          selectionDirection = "rightToLeft";
        }

        // Local variavles
        let anchorIntersection = "";
        let focusIntersection = "";
        let paragraphIntersection = "";
        let outputText = "";

        // Check if selection is already formatted
        // console.log(selection);
        // console.log(selectionAnchorNode);
        // console.log(selectionFocusNode);
        // console.log(selectionAnchorNodeParent.tagName === "CODE" || selectionFocusNodeParent === "CODE");
        // console.log(selectedText);

        // Check if selection includes a <code> tag
        if (selectionAnchorNodeParent.tagName === "CODE" || selectionFocusNodeParent.tagName === "CODE") {

          // Anchor is <code>
          if (selectionAnchorNodeParent.tagName === "CODE" && selectionFocusNodeParent.tagName !== "CODE") {
            // console.log("Anchor is <code>");

            // Get output text
            // <code> → OUT
            if (selectionDirection == "leftToRight") {
              focusIntersection = selectionFocusNode.data.slice(0, selection.focusOffset);
              outputText = selectionAnchorNode.data + focusIntersection;
            }
            // OUT ← <code>
            else if (selectionDirection == "rightToLeft") {
              focusIntersection = selectionFocusNode.data.slice(selection.focusOffset);
              outputText = focusIntersection + selectionAnchorNode.data;
            }

            // Remove selection and formatted text
            range.deleteContents();
            selectionAnchorNodeParent.remove();
            // Add new element wrapped in tag
            codeEl.innerText = outputText;
            range.insertNode(codeEl);
          }

          // Focus is <code>
          else if (selectionAnchorNodeParent.tagName !== "CODE" && selectionFocusNodeParent.tagName === "CODE") {
            // console.log("Focus is <code>");

            // Get output text
            // IN → <code>
            if (selectionDirection == "leftToRight") {
              anchorIntersection = selectionAnchorNode.data.slice(selection.anchorOffset);
              outputText = anchorIntersection + selectionFocusNode.data;
            }
            // <code> ← IN
            else if (selectionDirection == "rightToLeft") {
              anchorIntersection = selectionAnchorNode.data.slice(0, selection.anchorOffset);
              outputText = selectionFocusNode.data + anchorIntersection;
            }

            // Remove selection and formatted text
            range.deleteContents();
            selectionFocusNodeParent.remove();
            // Add new element wrapped in tag
            codeEl.innerText = outputText;
            range.insertNode(codeEl);
          }

          // Both Anchor and Focus are <code>
          else if (selectionAnchorNodeParent.tagName === "CODE" && selectionFocusNodeParent.tagName === "CODE") {

            // Check if both are inside the same <code> tag
            const differentTags = selectionAnchorNodeParent != selectionFocusNodeParent && selectionAnchorNodeParent.parentNode == selectionFocusNodeParent.parentNode;

            if (differentTags) {

              // Get output text
              if (selectionDirection == "leftToRight") {

                // Anchor Intersection
                anchorIntersection = selectionAnchorNode.data.slice(selection.anchorOffset);
                // Focus Intersection
                focusIntersection = selectionFocusNode.data.slice(0, selection.focusOffset);
                // Paragraph Intersection
                paragraphIntersection = selectedText.slice(
                  anchorIntersection.length,
                  selectedText.length - focusIntersection.length
                );
                // Output Text
                outputText = selectionAnchorNode.data + paragraphIntersection + selectionFocusNode.data;

              } else if (selectionDirection == "rightToLeft") {

                // Anchor Intersection
                anchorIntersection = selectionAnchorNode.data.slice(0, selection.anchorOffset);
                // Focus Intersection
                focusIntersection = selectionFocusNode.data.slice(selection.focusOffset);
                // Paragraph Intersection
                paragraphIntersection = selectedText.slice(
                  focusIntersection.length,
                  selectedText.length - anchorIntersection.length
                );
                // Output Text
                outputText = selectionFocusNode.data + paragraphIntersection + selectionAnchorNode.data;

              }

              // console.log(selectionAnchorNode.data);
              // console.log(`${anchorIntersection.length} → ${anchorIntersection}`);
              // console.log(paragraphIntersection);
              // console.log(`${focusIntersection.length} → ${focusIntersection}`);
              // console.log(selectionFocusNode.data);
              // console.log(outputText);

              // Remove selection and formatted text
              range.deleteContents();
              selectionAnchorNodeParent.remove();
              selectionFocusNodeParent.remove();
              // Add new element wrapped in tag
              codeEl.innerText = outputText;
              range.insertNode(codeEl);
            }
          }
        }
        // Neither Anchor nor Focus are <code>
        else {
          // console.log("Neither is <code>");
          // Create <code> element
          // let codeEl = document.createElement('CODE');
          // codeEl.setAttribute('class', 'language-py');
          codeEl.textContent = selectedText;

          // Remove selection
          range.deleteContents();

          // Add new element wrapped in tag
          range.insertNode(codeEl);
          // range.surroundContents(codeEl);
        }


        // range.surroundContents(codeEl);

        // if (selectionParent.tagName === "CODE") {
        // 	// if true → remove formatting
        // 	const codeText = selectionParent.innerText;
        // 	selectionParent.remove();
        // 	document.execCommand('insertText', false, codeText);
        // } else {
        // 	// else → apply formatting
        // 	let codeEl = document.createElement('CODE');
        // 	codeEl.setAttribute('class', 'language-py');
        // 	codeEl.textContent = selectedText;

        // 	let range = selection.getRangeAt(0);
        // 	// range.deleteContents();
        // 	// range.insertNode(codeEl);
        // 	range.surroundContents(codeEl);
        // }

      } // end of insideEditorBlock()

    }

    /* ---------- Lists ---------- */

    function makeUL() {
      document.execCommand('insertUnorderedList');
    }
    function makeOL() {
      document.execCommand('insertOrderedList');
    }

    /* ---------- Inline Image ---------- */

    function addInlineImg() {
      document.execCommand('insertImage', false, '');
    }

    /* ---------- Remove Formatting ---------- */

    function removeFormatting() {
      document.execCommand('removeFormat');
    }



    /* ======================================== */
    /* ================== SAVE ================ */
    /* ======================================== */

    function save() {
      const blocks = editorEl.querySelectorAll('.block');
      let outputHTML = "";

      for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        // Copy block in order to remove contenteditable without affecting original
        const blockClone = block.cloneNode(true);
        if (blockClone.hasAttribute('contenteditable')) {
          blockClone.removeAttribute('contenteditable');
        }
        if (blockClone.classList.contains('selected')) {
          blockClone.classList.remove('selected');
        }
        const blockHTML = blockClone.outerHTML.trim().replace(/\s+/g, " ");        
        outputHTML += `${blockHTML}\n`;
      }

      textareaEl.value = outputHTML;
    }

    // Select the node that will be observed for mutations
    const targetNode = editorContentEl;

    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    const callback = function (mutationsList, observer) {
      // Use traditional 'for loops' for IE 11
      // for (const mutation of mutationsList) {
      // 	if (mutation.type === 'childList') {
      // 		console.log('A child node has been added or removed.');
      // 	}
      // 	else if (mutation.type === 'attributes') {
      // 		console.log('The ' + mutation.attributeName + ' attribute was modified.');
      // 	}
      // }
      console.log("Saved changes");
      save();
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);

  }
}



