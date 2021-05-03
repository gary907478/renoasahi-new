// $.ajax({
//   url: 'https://renoasahi-cms.herokuapp.com/projects?_sort=created_at:DESC',
//   type: 'GET',
//   success: function (data) {
//     console.log(data)
//     var indexGalleryContainer = $('#masonry')
//     data.forEach((item) => {
//       indexGalleryContainer.append(`
//       <li data-category="${item.categories.cate}" class="card-container col-lg-3 col-md-4 col-sm-6 p-lr0 abstract wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
//       <div class="dlab-media dlab-img-overlay1 dlab-img-effect portbox1">
//         <img src="${item.FeatureImage.url}" alt=""/>
//         <div class="overlay-bx">
//           <div class="portinner">
//             <span>July 3, 2016 in Travelling</span>
//             <h3 class="port-title"><a href="project-detail-1.html">Design is where science</a></h3>
//             <a href="project-detail-1.html?id=${item._id}" class="btn btn-primary m-t15">View Project</a>
//           </div>
//         </div>
//       </div>
//     </li>
//       `)
//     })
//   },
// })
$.ajax({
  url: 'https://renoasahi-cms.herokuapp.com/projects?_sort=created_at:DESC',
  type: 'GET',
  success: function (data) {
    console.log(data)
    var indexGalleryContainer = $('#masonry')
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
  $('#masonry .filtermark').each(function () {
    var el = $(this)
    if (el.attr('data-category') === category || category === 'All') {
      el.show()
    } else {
      el.hide()
    }
  })
}
