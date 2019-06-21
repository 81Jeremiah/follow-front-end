import React, {Component} from 'react'

export default class Settings extends Component {
  render() {
    return(
      <form>
        <div className="form-row">
          <div className="col">
            <input type="text" className="form-control" placeholder="Instagram Name"/>
          </div>
          <div class="col">
            <input type="password" className="form-control" placeholder="Instagram Password"/>
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <input type="text" className="form-control" placeholder="likes per day"/>
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

    
    //     "like_per_day": 709,
    //     "comments_per_day": 31,
    //     "max_like_for_one_tag": 36,
    //     "follow_per_day": 260,
    //     "follow_time": 36000,
    //     "unfollow_per_day": 247,
    //     "unfollow_break_min": 3,
    //     "unfollow_break_max": 17,
    //     "log_mod": 0,
    //     "proxy": "",
    //     "unfollow_selebgram": "False",
    //     "unfollow_probably_fake": "True",
    //     "unfollow_inactive": "True",
    //     "unfollow_recent_feed": "False",
    // }
