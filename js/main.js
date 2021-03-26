let indexGalleryUrl =
  'https://renoasahi-cms.herokuapp.com/projects?_sort=created_at:DESC'
console.log(indexGalleryUrl)

// Index Page Gallery Display
$.getJSON(indexGalleryUrl, function (indexGallery) {
  let galleryImgs = document.querySelectorAll('.index-gallery-imgs')
  let galleryImgsLB = document.querySelectorAll('.index-gallery-imgs-lb')

  for (i = 0; i < 8; i++) {
    galleryImgs[i].src = indexGallery[i].FeatureImage.url
    galleryImgsLB[i].setAttribute('data-src', indexGallery[i].FeatureImage.url)
    galleryImgsLB[i].setAttribute(
      'data-exthumbimage',
      indexGallery[i].FeatureImage.url
    )
    galleryImgsLB[i].setAttribute('title', indexGallery[i].ProjectName)
  }
})
