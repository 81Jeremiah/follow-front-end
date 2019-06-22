import React, {Component} from 'react'

export default class Settings extends Component {

  state = {
    instaname: "",
    password: "",
    likes: 709,
    comments: 31,
    maxLikeTag: 36,
    followPerDay: 260,
    followTime: 36000,
    unfollowPerDay: 247,
    tagList: [],
    unfollowBreakMin: 3,
    unfollowBreakMax: 17,
    avoidCeleb: true,
    avoidFake: true,
    avoidInactive: true,
    avoidFeed: true

  }



  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return(
      <form onSubmit={this.hangleSubmit}>
        <div className="form-row">
          <div className="col">
            <input type="text" className="form-control" placeholder="Instagram Name" name="instaname"  value={this.state.instaname} onChange={this.handleChange} />
          </div>
          <div className="col">
            <input type="password" className="form-control" placeholder="Instagram Password" name="password" value={this.state.password} onChange={this.handleChange}/>
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            {/* new accounts accounts 250 */}
            <input type="number" max="1200" className="form-control" placeholder="likes per day" name="likes" value={this.state.likes} onChange={this.handleChange}/>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="comments per day" name="comments" value={this.state.comments} onChange={this.handleChange}/>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="max like per tag" name="maxLikeTag" value={this.state.maxLikeTag} onChange={this.handleChange}/>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="follow per day" name="followPerDay" value={this.state.followPerDay} onChange={this.handleChange}/>
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <input type="text" className="form-control" placeholder="unfollow per day" name="unfollowPerDay" value={this.state.unfollowPerDay} onChange={this.handleChange}/>
          </div>
          <div className="col">
            <input type="password" className="form-control" placeholder="follow time" name="followTime" value={this.state.followTime} onChange={this.handleChange}/>
          </div>
          <div className="col">
            <input type="password" className="form-control" placeholder="tag list" name="tagList" value={this.state.tagList} onChange={this.handleChange}/>
          </div>
          <div className="col">
            <input type="password" className="form-control" placeholder="avoid celeb" name="avoidCeleb" value={this.state.avoidCeleb} onChange={this.handleChange}/>
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <input type="text" className="form-control" placeholder="avoid fakes" name="avoidFake" value={this.state.avoidFake} onChange={this.handleChange}/>
          </div>
          <div className="col">
            <input type="password" className="form-control" placeholder="avoid inactive" name="avoidInactive" value={this.state.avoidInactive} onChange={this.handleChange}/>
          </div>
          <div className="col">
            <input type="password" className="form-control" placeholder="avoid recent feed" name="avoidFeed" value={this.state.avoidFeed} onChange={this.handleChange}/>
          </div>
          <div className="col">
            <input type="password" className="form-control" placeholder="comment generator"/>
          </div>
        </div>
        <button type="submt">Change Settings</button>

      </form>
    );
  }
}
