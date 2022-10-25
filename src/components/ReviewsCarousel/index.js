import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeItemIndex: 0,
  }

  onLeftButtonClick = () => {
    const {activeItemIndex} = this.state
    const {reviewsList} = this.props

    if (activeItemIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeItemIndex: prevState.activeItemIndex + 1,
      }))
    }
  }

  renderTheReviewItem = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="reviewContainer">
        <img src={imgUrl} alt={username} />
        <p>{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

  onRightButtonClick = () => {
    const {activeItemIndex} = this.state

    if (activeItemIndex > 0) {
      this.setState(prevState => ({
        activeItemIndex: prevState.activeItemIndex - 1,
      }))
    }
  }

  render() {
    const {activeItemIndex} = this.state
    const {reviewsList} = this.props
    const cardToBeDisplayed = reviewsList[activeItemIndex]

    return (
      <div className="mainContainer">
        <h1 className="heading">Reviews</h1>
        <div className="peopleContainer">
          <button
            type="button"
            className="buttonStyle"
            onClick={this.onLeftButtonClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderTheReviewItem(cardToBeDisplayed)}
          <button
            type="button"
            onClick={this.onRightButtonClick}
            className="buttonStyle"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
