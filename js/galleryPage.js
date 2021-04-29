$.ajax({
  url: 'https://renoasahi-cms.herokuapp.com/projects?_sort=created_at:DESC',
  type: 'GET',
  success: function (data) {
    console.log(data)
    var indexGalleryContainer = $('#masonry')
    data.forEach((item) => {
      indexGalleryContainer.append(`
      <li data-category="${item.categories.cate}" class="card-container col-lg-3 col-md-4 col-sm-6 p-lr0 abstract wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
      <div class="dlab-media dlab-img-overlay1 dlab-img-effect portbox1">
        <img src="${item.FeatureImage.url}" alt=""/>
        <div class="overlay-bx">
          <div class="portinner">
            <span>July 3, 2016 in Travelling</span>
            <h3 class="port-title"><a href="project-detail-1.html">Design is where science</a></h3>
            <a href="project-detail-1.html" class="btn btn-primary m-t15">View Project</a>
          </div>
        </div>
      </div>
    </li>
      `)
    })
  },
})
