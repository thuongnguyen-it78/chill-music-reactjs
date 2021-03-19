import React from 'react';

import './SecurityLayout.scss'
import Header from '../components/Header'
import PlayMusic from '../features/PlayMusic'
import Sidebar from '../components/Sidebar'

function SecurityLayout({ children }) {
	return (
		<div className="security-layout">
            	<div className="wrapper-main">
				<div className="wrapper-sidebar">
					<Sidebar />
				</div>

				<div
					className="wrapper-content"
					style={{ backgroundColor: '#121212' }}
				>
					<Header/>

					
                    { children }
				</div>
			</div>

			<PlayMusic />
      	</div>  
	);
}

export default SecurityLayout;
