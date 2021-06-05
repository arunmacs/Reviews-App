import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewIndex: 0}

  leftClick = () => {
    const {reviewIndex} = this.state
    if (reviewIndex > 0) {
      this.setState(prevIndex => ({
        reviewIndex: prevIndex.reviewIndex - 1,
      }))
    }
  }

  rightClick = () => {
    const {reviewIndex} = this.state
    const {reviewsData} = this.props
    const lengthOfData = reviewsData.length
    if (reviewIndex < lengthOfData - 1) {
      this.setState(prevIndex => ({
        reviewIndex: prevIndex.reviewIndex + 1,
      }))
    }
  }

  render() {
    const {reviewsData} = this.props
    const {reviewIndex} = this.state
    const reviewItem = reviewsData[reviewIndex]
    return (
      <div className="bg-container">
        <div className="carousel-div">
          <h1 className="heading">Reviews</h1>
          <img
            src={reviewItem.imgUrl}
            alt={`${reviewItem.username}-avatar`}
            className="user-image"
          />
          <div className="arrows-div">
            <button
              onClick={this.leftClick}
              testid="leftArrow"
              className="arrow"
              type="button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="leftArrow"
              />
            </button>
            <p className="user-name">{reviewItem.username}</p>
            <button
              onClick={this.rightClick}
              testid="rightArrow"
              className="arrow"
              type="button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right-arrow"
              />
            </button>
          </div>
          <p className="company-name">{reviewItem.companyName}</p>
          <p className="review">{reviewItem.description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
