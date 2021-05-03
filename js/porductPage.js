$.ajax({
  url: 'https://renoasahi-cms.herokuapp.com/products?_sort=created_at:DESC',
  type: 'GET',
  success: function (data) {
    console.log(data)
    var productGallery = $('#productMasonry')
    data.forEach((item) => {
      productGallery.append(`
      <li class="product-item">
      <a href="product-detail.html?id=${item._id}" >
          <img src="${item.featureImage.url}" alt="" />
          <h4>${item.name || 'N/A'}</h4>
          <p>价格:${item.price || 'N/A'}</p>
          <p>种类:${item.type || 'N/A'}</p>
          <a
            href="product-detail.html?id=${item._id}" 
            class="btn btn-primary btnhover13 btn-product"
            >查看更多</a
          >
      </a>
    </li>
      `)
    })
    // openTab('All')
  },
})
