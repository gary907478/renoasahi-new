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
var productID = getUrlParameter('id')
$.ajax({
  url: 'https://renoasahi-cms.herokuapp.com/products/' + productID,
  type: 'GET',
  success: function (productData) {
    console.log(productData)
    var detailContainer = $('#product-detail-wrap')
    var productImgs = productData.galleryImage.map(
      (img) => `
     
      <div class="swiper-slide">
      <a data-fancybox="gallery"  href="${img.url}">
      <img src="${img.url}" alt="" />
      </a>
      </div>
    `
    )
    detailContainer.append(`
        <div class="product-slider">
          <!-- Slider main container -->
          <div class="swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
              <!-- Slides -->
              ${productImgs.join('')}
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
        <div class="product-detail">
          <h3>产品<span>详情</span></h3>
          <ul>
            <li><i class="fas fa-caret-right"></i> 名称: ${
              productData.name || 'N/A'
            }</li>
            <li><i class="fas fa-caret-right"></i> 价格: ${
              productData.price || 'N/A'
            }</li>
            <li><i class="fas fa-caret-right"></i> 种类: ${
              productData.type || 'N/A'
            }</li>
            <li><i class="fas fa-caret-right"></i> 暂定: ${
              productData.temp1 || 'N/A'
            }</li>
            <li><i class="fas fa-caret-right"></i> 暂定2: ${
              productData.temp2 || 'N/A'
            }</li>
          </ul>
        </div>
        <div class="product-description">
          <h3>产品<span>简介</span></h3>
          <p>
           ${productData.description}
          </p>
        </div>
        <br>
        <br>
    `)
    // data.forEach((item) => {
    //   indexGalleryContainer.append(`
    //     <p>${item.ProjectName}</p>
    //   `)
    // })
    const swiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })
  },
})
