var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=')

    if (sParameterName[0] === sParam) {
      return typeof sParameterName[1] === undefined
        ? true
        : decodeURIComponent(sParameterName[1])
    }
  }
  return false
}
var portfolioID = getUrlParameter('id')
$.ajax({
  url: 'https://renoasahi-cms.herokuapp.com/projects/' + portfolioID,
  type: 'GET',
  success: function (data) {
    console.log(data)
    var detailContainer = $('#project-detail-wrap')
    var galleryImgs = data.Gallery.map(
      (img) => `
      <div class="detail-gallery-item">
        <a data-fancybox="gallery" href="${img.url}"><img src="${img.url}"></a>
      </div>
    `
    )
    detailContainer.append(`
        <br>
        <br>
        <h1>${data.ProjectName}</h1>
        <br />
        <p>装修工期: ${data.time || '暂无'} </p>
        <p>工程描述: ${data.description || '暂无'}</p>
        <p>工程报价: ${data.price || '暂无'}</p>
        <hr />
        <br />
        <div class="detail-gallery-grid">
        ${galleryImgs.join('')}
        </div>
        <br>
        <br>
    `)
    // data.forEach((item) => {
    //   indexGalleryContainer.append(`
    //     <p>${item.ProjectName}</p>
    //   `)
    // })
  },
})
