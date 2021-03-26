let galleryPageUrl =
  'https://renoasahi-cms.herokuapp.com/projects?_sort=created_at:DESC'
console.log(galleryPageUrl)
// Projects Page Gallery Display
$.getJSON(galleryPageUrl, function (gallery) {
  console.log(gallery)
  document.getElementById('masonry').innerHTML = `
  ${gallery
    .map(function (projects) {
      return `
      <li
        data-category="${projects.categories.cate}"
        class="card-container col-lg-3 col-md-4 col-sm-6 p-lr0 doorwindow wow fadeIn"
        data-wow-duration="2s"
        data-wow-delay="0.2s">
        <div class="dlab-media dlab-img-overlay1 dlab-img-effect portbox1">
          <img src="${projects.FeatureImage.url}" alt="" class="index-gallery-imgs"/>
          <div class="overlay-bx">
            <div class="portinner">
              <h3 class="port-title">
                <a href="project-detail-1.html"
                  >${projects.ProjectName}</a
                >
              </h3>
              <a
                href="project-detail-1.html"
                class="btn btn-primary m-t15"
                >查看项目</a
              >
            </div>
          </div>
        </div>
      </li>
      `
    })
    .join(' ')}
  `
})
// function galleryTemplate()
// for (i = 0; i < gallery.length; i++) {
//   document.getElementById('masonry').innerHTML = `
// <li
//   data-category="doorwindow"
//   class="card-container col-lg-3 col-md-4 col-sm-6 p-lr0 doorwindow wow fadeIn"
//   data-wow-duration="2s"
//   data-wow-delay="0.2s"
// >
// <h1>${gallery[0].ProjectName}</h1>
//   <div
//     class="dlab-media dlab-img-overlay1 dlab-img-effect portbox1"
//   >
//     <img src="imgs/index/about-slider1.jpeg" alt="" />
//     <div class="overlay-bx">
//       <div class="portinner">
//         <span>July 3, 2016 in Travelling</span>
//         <h3 class="port-title">
//           <a href="project-detail-1.html"
//             >Design is where science</a
//           >
//         </h3>
//         <a
//           href="project-detail-1.html"
//           class="btn btn-primary m-t15"
//           >View Project</a
//         >
//       </div>
//     </div>
//   </div>
// </li>
// `
// }
