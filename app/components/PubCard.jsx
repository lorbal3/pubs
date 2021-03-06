import React from 'react';
import {Link} from 'react-router-dom';

class PubCard extends React.Component {
	
    render() {
    	var {pubs} = this.props;

        return (
        	<div>
        	{
	        	pubs.map((pub, key) => {
					return(
						<div className="col s6 m4 singlePub" key={pub.id}>
							<Link to={`/${pub.url}`}>
								<div className="card-panel grey-text center">
									<h5>{pub.name}</h5>
								    <p>{pub.address}</p>
								</div>
							</Link>
						</div>
					)
	        	})
        	}
        	</div>
            
        )
    }
};

export default PubCard;