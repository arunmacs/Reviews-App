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

  renderUserReview = reviewItem => {
    const {username, companyName, description} = reviewItem

    return (
      <div className="user-review-div">
        <img
          src={reviewItem.imgUrl}
          alt={`${username}-avatar`}
          className="user-image"
        />
        <p className="user-name">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="review">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsData} = this.props
    const {reviewIndex} = this.state
    const reviewItem = reviewsData[reviewIndex]
    return (
      <div className="bg-container">
        <div className="carousel-div">
          <h1 className="heading">Reviews</h1>
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
            {this.renderUserReview(reviewItem)}
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
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
