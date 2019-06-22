import React, {Component} from 'react'

export default class Settings extends Component {

  state = {
    instaname: "",
    password: "",
    likes: 709,
    comments: 31,
    max_like_tag: 36,
    follow_per_day: 260,
    follow_time: 36000,
    unfollow_per_day: 247,
    unfollow_break_min: 3,
    unfollow_break_max: 17,
    avoid_celeb: true,
    avoid_fake: true,
    avoid_inactive: true,
    avoid_feed: true

  }



  onChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return(
      <form>
        <div className="form-row">
          <div className="col">
            <input type="text" className="form-control" placeholder="Instagram Name" name="instaname" value={this.state.instaname} onChange={this.handleChange}/>
          </div>
          <div class="col">
            <input type="password" className="form-control" placeholder="Instagram Password" name="password" value={this.state.password} onChange={this.handleChange}/>
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <input type="text" className="form-control" placeholder="likes per day" name="likes" value={this.state.likes} onChange={this.handleChange}/>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="comments per day"/>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="max like per tag"/>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="follow per day"/>
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <input type="text" className="form-control" placeholder="unfollow per day"/>
          </div>
          <div class="col">
            <input type="password" className="form-control" placeholder="follow time"/>
          </div>
          <div class="col">
            <input type="password" className="form-control" placeholder="tag list"/>
          </div>
          <div class="col">
            <input type="password" className="form-control" placeholder="unfollow prop celeb"/>
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <input type="text" className="form-control" placeholder="unfollow fakes"/>
          </div>
          <div class="col">
            <input type="password" className="form-control" placeholder="avoid inactive"/>
          </div>
          <div class="col">
            <input type="password" className="form-control" placeholder="avoid recent feed"/>
          </div>
          <div class="col">
            <input type="password" className="form-control" placeholder="comment generator"/>
          </div>
        </div>


      </form>
    );
  }
}
