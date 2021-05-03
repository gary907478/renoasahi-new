$.ajax({
  url: 'https://renoasahi-cms.herokuapp.com/projects?_sort=created_at:DESC',
  type: 'GET',
  success: function (data) {
    console.log(data)
    var indexGalleryContainer = $('#imasonry')
    data.forEach((item) => {
      indexGalleryContainer.append(`
      <li 
      data-category="${item.categories.cate}"
      class="index-gallery-item2 filtermark"
            data-wow-delay="0.2s" data-wow-duration="2s">
            <a href="portfolio-detail.html?id=${item._id}"
              class="index-gallery-item2 img-zoom-wrap ig-filter ig-doorwindow">
              <div class="index-gallery-zoom">
                <i class="fas fa-search-plus"></i>
              </div>
              <img src="${item.FeatureImage.url}" alt="" class="img-zoom">
              <div class="index-gallery-fixed-title">${item.ProjectName}</div>
              <div class="index-gallery-title">
                <p>${item.ProjectName}</p>
              </div>
            </a>
          </li>
      `)
    })
    openTab('All')
  },
})
function openTab(category) {
  var limit = 8
  $('#imasonry .filtermark').each(function () {
    var el = $(this)
    if (
      (el.attr('data-category') === category || category === 'All') &&
      limit > 0
    ) {
      el.show()
      limit--
    } else {
      el.hide()
    }
  })
}
