import React from 'react';
import axios from 'axios';

function PostList({ posts }) {
    return (
        <>
            <h5>Blog Posts</h5>

            {posts.map(({ body, title, id, userId }) => (
                <div key={id}>
                    <h6>
                        <span>
                             {id}
                        </span> {' '}
                        {title} by {userId}
                    </h6>
                    <p>{body}</p>
                </div>
            ))}
        </>
    );
}

class FetchFromWeb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            error: '',
        };
    }

    componentDidMount() {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.data)
            .then((data) => {
                this.setState(() => ({ posts: data }));
            })
            .catch((error) => {
                this.setState(
                    () => ({ error: 'Unable to fetch data...' }),
                    () => {
                        console.log(error);
                    }
                );
            });
    }

    render() {
        return (
            <>
                <p>HTTP Requests.</p>
                <br />
                {this.state.posts.length > 0 ? (
                    <PostList posts={this.state.posts} />
                ) : null}

                {this.state.error ? <p>{this.state.error}</p> : null}
            </>
        );
    }
}

export function DisplayC05S01() {
    return (
        <>
            <p>DisplayC05S01</p>
            <br />
            <FetchFromWeb />
        </>
    );
}
