/**
 * renders pdf attachment on to the chat screen
 * @param {Object} pdf_data json object
 */
function openPdf(pdf_url) {
window.open(pdf_url, '_blank');
}

function renderPdfAttachment(pdf_data) {
    const { url: pdf_url } = pdf_data.custom;
    const { title: pdf_title } = pdf_data.custom;
    const pdf_attachment = `<div class="pdf_attachment"><div class="row"><div class="col s3 pdf_icon">
<i class="fa fa-file-pdf-o" aria-hidden="true"></i></div><div class="col s9 pdf_link"><a href="#" onClick="window.open('${pdf_url}', '_blank',
'fullscreen=yes'); return false;">${pdf_title}</a>
 </div></div></div>`;
console.log(pdf_url);

    $(".chats").append(pdf_attachment);
    scrollToBottomOfResults();
}

