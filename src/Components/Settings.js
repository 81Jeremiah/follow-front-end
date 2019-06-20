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
        </div>
      </form>
    );
  }
}

    //     username
    //     "password": "req",
    //     "like_per_day": "opt",
    //     "comments_per_day": "opt",
    //     "max_like_for_one_tag": "opt",
    //     "follow_per_day": "opt",
    //     "follow_time": "opt",
    //     "unfollow_per_day": "opt",
    //     "tag_list": "opt",
    //     "unfollow_selebgram": "opt",
    //     "unfollow_probably_fake": "opt",
    //     "unfollow_inactive": "opt",
    //     "unfollow_recent_feed": "opt",
    //
    //
    //
    //     "username": "none",
    //     "password": "none",
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
