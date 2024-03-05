import React from 'react'
import './Article.css'
import image1 from '../../assets/images/article1.png'
import image2 from '../../assets/images/article2.png'
import image3 from '../../assets/images/article3.png'
import image4 from '../../assets/images/article4.png'
import image5 from '../../assets/images/article5.png'
import image6 from '../../assets/images/article6.png'
import image7 from '../../assets/images/article7.png'
import image8 from '../../assets/images/article8.png'
import image9 from '../../assets/images/article9.png'
import image10 from '../../assets/images/article10.png'
import image11 from '../../assets/images/article11.png'
import image12 from '../../assets/images/article12.png'
import leftarrow from '../../assets/svg/left-arrow.svg'
import rightarrow from '../../assets/svg/right-arrow.svg'

const Article = () => {
    return (
        <>
            <div className='article-container'>
                <div className='article-inner-container'>
                    <div className='article'>
                        <span>DEC 20, 18</span>
                        <img className='article-image' src={image1} alt='article-1' />
                        <p>Etiam porta sem malesuada magna mollis euismod.</p>
                    </div>
                    <div className='article'>
                        <span>DEC 20, 18</span>
                        <img className='article-image' src={image2} alt='article-2' />
                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus.</p>
                    </div>
                    <div className='article'>
                        <span>DEC 20, 18</span>
                        <img className='article-image' src={image3} alt='article-3' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='article'>
                        <span>DEC 20, 18</span>
                        <img className='article-image' src={image4} alt='article-4' />
                        <p>Etiam porta sem malesuada magna mollis euismod.</p>
                    </div>
                    <div className='article'>
                        <span>DEC 20, 18</span>
                        <img className='article-image' src={image5} alt='article-5' />
                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus.</p>
                    </div>
                    <div className='article'>
                        <span>DEC 20, 18</span>
                        <img className='article-image' src={image6} alt='article-6' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='article'>
                        <span>DEC 20, 18</span>
                        <img className='article-image' src={image7} alt='article-7' />
                        <p>Etiam porta sem malesuada magna mollis euismod.</p>
                    </div>
                    <div className='article'>
                        <span>DEC 20, 18</span>
                        <img className='article-image' src={image8} alt='article-8' />
                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus.</p>
                    </div>
                    <div className='article'>
                        <span>DEC 20, 18</span>
                        <img className='article-image' src={image9} alt='article-9' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='article'>
                        <span>DEC 20, 18</span>
                        <img className='article-image' src={image10} alt='article-10' />
                        <p>Etiam porta sem malesuada magna mollis euismod.</p>
                    </div>
                    <div className='article'>
                        <span>DEC 20, 18</span>
                        <img className='article-image' src={image11} alt='article-11' />
                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus.</p>
                    </div>
                    <div className='article'>
                        <span>DEC 20, 18</span>
                        <img className='article-image' src={image12} alt='article-12' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
            <div className='navigation-container'>
                <img src={leftarrow} alt='left-arrow' />
                <div className='pages-container'>
                    <a className='selected'>01</a>
                    <a>02</a>
                    <a>03</a>
                    <a>04</a>
                </div>
                <img src={rightarrow} alt='right-arrow' />
            </div>
        </>

    )
}

export default Article