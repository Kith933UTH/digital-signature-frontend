import React from 'react';
import GenerateKey from './GenerateKey';
import VerifyMessage from './VerifyMessage';
import Header from './Header';
import Footer from './Footer';

function Home() {
	return (
		<div className="max-w-screen min-h-screen overflow-hidden">
			{/* header  */}
			<Header />
			{/* <hr className="mb-4 border-blue-gray-600" /> */}
			{/* body */}
			<div className="max-w-[1200px] mx-auto h-full flex flex-col pb-16 px-4 desktop:px-0">
				{/* generate key pair */}
				<GenerateKey />
				{/* <hr className="my-4 border-blue-gray-600" /> */}

				{/* Verify message */}
				<VerifyMessage />
			</div>
			<Footer />
		</div>
	);
}

export default Home;
