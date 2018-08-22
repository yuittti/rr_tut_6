import React, { Component } from 'react';
import { connect } from 'react-redux';
import authedUser from '../reducers/authedUser'
import polls from '../reducers/polls'
import users from '../reducers/users'

class Dashboard extends Component {
    state = {
        showAnswered: false
    }

    showUnanswered = () => {
        this.setState(() => ({
            showAnswered: false
        }))
    }

    showAnswered = () => {
        this.setState(() => ({
            showAnswered: true
        }))
    }

    render() { 
        const { showAnswered } = this.state;
        const { answered, unanswered } = this.props;
        const list = showAnswered === true
            ? answered
            : unanswered;

        return (
            <div>
                <div className="dashboard-toggle">
                    <button 
                      style={{textDecoration: showAnswered === false ? 'underline' : null}}
                      onClick={this.showUnanswered}>
                        Unanswered
                    </button>
                    <span> | </span>
                    <button 
                      style={{textDecoration: showAnswered === true ? 'underline' : null}}
                      onClick={this.showAnswered}>
                        Answered
                    </button>
                </div>
                <ul className="dashboard-list">
                    {list.map((poll) => (
                        <li key={poll.id}>
                            {poll.question}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ authedUser, polls, users }) {
    const answers = users[authedUser].answers;
    const answered = answers.map((id) => polls[id])
        .sort((a, b) => b.timstamp - a.timestamp);
    const unanswered = Object.keys(polls)
        .filter((id) => !answers.includes(id))
        .map((id) => polls[id])
        .sort((a,b) => b.timestamp - a.timestamp);
    
    return {
        answered,
        unanswered
    }
}
 
export default connect(mapStateToProps)(Dashboard);