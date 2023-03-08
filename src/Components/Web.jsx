import React from 'react'

function Web() {
  return (<>
    <div className='web-body'>
        <div className="web-wrap">

        <div className="web-nav">
            <nav>
                <ul>
                    <a><li>Vector</li></a>
                    <a><li>Illustrations</li></a>
                    <a><li id="img">Images</li></a>
                    <a><li>Icons</li></a>
                </ul>
            </nav>
        </div>

        <div className="web-search">
            <div className="search-bar">
                <input type="search" placeholder='search' />
                <img src="..\images\search-icon.png"/>
            </div>
            <button className="upload-btn">Upload</button>
        </div>

<div className="image-gallery">
    <div>
        <img src="..\images\pic-1.avif" alt="" />
        <div className="info-bar">
        <p><span>Sky High</span>
            245 likes . 35 shares
        </p>
        <img src="../images/bookmark-blue.jpg" width="40px" alt=""/>
    </div>
    </div>

    <div><img src="..\images\pic-2.avif" alt="" /></div>
    <div><img src="..\images\pic-3.avif" alt="" /></div>
    <div><img src="..\images\pic-4.avif" alt="" /></div>
    <div><img src="..\images\pic-5.avif" alt="" /></div>
    <div><img src="..\images\pic-6.avif" alt="" /></div>
</div>

        </div>
    </div>
<br></br>
<div className='border-solid border-4 pt-6 pl-16 pb-12 pr-12 max-w-xl'>
        <div className="">

        <div className="">
            <nav>
                <ul>
                    <a><li>Vector</li></a>
                    <a><li>Illustrations</li></a>
                    <a><li id="img">Images</li></a>
                    <a><li>Icons</li></a>
                </ul>
            </nav>
        </div>

        <div className="">
            <div className="">
                <input type="search" placeholder='search' />
                <img src="..\images\search-icon.png"/>
            </div>
            <button className="">Upload</button>
        </div>

<div className="image-gallery">
    <div>
        <img src="..\images\pic-1.avif" alt="" />
        <div className="">
        <p><span>Sky High</span>
            245 likes . 35 shares
        </p>
        <img src="../images/bookmark-blue.jpg" width="40px" alt=""/>
    </div>
    </div>

    <div><img src="..\images\pic-2.avif" alt="" /></div>
    <div><img src="..\images\pic-3.avif" alt="" /></div>
    <div><img src="..\images\pic-4.avif" alt="" /></div>
    <div><img src="..\images\pic-5.avif" alt="" /></div>
    <div><img src="..\images\pic-6.avif" alt="" /></div>
</div>

        </div>
    </div>

</>
  )
}

export default Web
