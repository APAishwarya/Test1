import React from 'react'

const Menu = () => {
  return (
    <>
    <div className="container mt-4">
     <h1>Menu</h1>
     <br></br>

     <div className="row">
       <div className="col-md-4">
        <img src='data:image/jpeg;base64,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' alt='loading'/>
        <h2>₹ 500</h2>
    </div>
    <div className="col-md-4">
        <img src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.usatoday.com%2Fgcdn%2Fmedia%2F2019%2F08%2F05%2FUSATODAY%2Fusatsports%2F247WallSt.com-247WS-565444-fast-food.jpg%3Fcrop%3D1365%2C768%2Cx0%2Cy0%26width%3D660%26height%3D372%26format%3Dpjpg%26auto%3Dwebp&tbnid=efw0IAwW-r66dM&vet=12ahUKEwivmPDD7oOAAxXdnWMGHdrjBfAQMygbegUIARCkAg..i&imgrefurl=https%3A%2F%2Fwww.usatoday.com%2Fstory%2Fmoney%2F2019%2F08%2F06%2Fmost-iconic-items-america-biggest-fast-food-chains%2F39885515%2F&docid=-mBR4WGtd-W8yM&w=660&h=372&q=food%20items&ved=2ahUKEwivmPDD7oOAAxXdnWMGHdrjBfAQMygbegUIARCkAg' alt='loading'/>
        <h2>₹ 500</h2>
    </div>
    <div className="col-md-4">
        <img src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.herzindagi.info%2Fimage%2F2021%2FSep%2Fchaii-samosa.jpg&tbnid=JeIWUL7uTlbCCM&vet=12ahUKEwivmPDD7oOAAxXdnWMGHdrjBfAQMygMegUIARD_AQ..i&imgrefurl=https%3A%2F%2Fwww.herzindagi.com%2Fdiary%2Flist-of-non-indian-food-items-article-184455&docid=pDkdL9arkJ_-IM&w=660&h=535&q=food%20items&ved=2ahUKEwivmPDD7oOAAxXdnWMGHdrjBfAQMygMegUIARD_AQ' alt='loading'/>
        <h2>₹ 500</h2>
    </div>
    <div className="col-md-4">
        <img src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.eatthis.com%2Fwp-content%2Fuploads%2Fsites%2F4%2F2022%2F06%2Ffast-food-assortment-soda.jpg%3Fquality%3D82%26strip%3D1&tbnid=TthbKTMVvUeaoM&vet=12ahUKEwivmPDD7oOAAxXdnWMGHdrjBfAQMygCegUIARDpAQ..i&imgrefurl=https%3A%2F%2Fwww.eatthis.com%2Ffast-food-dishes-define-america%2F&docid=2znWvKDUR-rruM&w=1200&h=879&q=food%20items&ved=2ahUKEwivmPDD7oOAAxXdnWMGHdrjBfAQMygCegUIARDpAQ' alt='loading'/>
        <h2>₹ 500</h2>
    </div>
    <div className="col-md-4">
        <img src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.herzindagi.info%2Fimage%2F2021%2FSep%2Fchaii-samosa.jpg&tbnid=JeIWUL7uTlbCCM&vet=12ahUKEwivmPDD7oOAAxXdnWMGHdrjBfAQMygMegUIARD_AQ..i&imgrefurl=https%3A%2F%2Fwww.herzindagi.com%2Fdiary%2Flist-of-non-indian-food-items-article-184455&docid=pDkdL9arkJ_-IM&w=660&h=535&q=food%20items&ved=2ahUKEwivmPDD7oOAAxXdnWMGHdrjBfAQMygMegUIARD_AQ' alt='loading'/>
        <h2>₹ 500</h2>
    </div>
    <div className="col-md-4">
        <img src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.eatthis.com%2Fwp-content%2Fuploads%2Fsites%2F4%2F2022%2F06%2Ffast-food-assortment-soda.jpg%3Fquality%3D82%26strip%3D1&tbnid=TthbKTMVvUeaoM&vet=12ahUKEwivmPDD7oOAAxXdnWMGHdrjBfAQMygCegUIARDpAQ..i&imgrefurl=https%3A%2F%2Fwww.eatthis.com%2Ffast-food-dishes-define-america%2F&docid=2znWvKDUR-rruM&w=1200&h=879&q=food%20items&ved=2ahUKEwivmPDD7oOAAxXdnWMGHdrjBfAQMygCegUIARDpAQ' alt='loading'/>
        <h2>₹ 500</h2>
    </div>
    

       
     </div>

     

     
   </div>
   </>
  )
}

export default Menu