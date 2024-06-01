import React, { useState } from 'react';
import { Typography } from '@material-tailwind/react';
import SendMessage from './SendMessage';
import ReceiveMessage from './ReceiveMessage';

const VerifyMessage = () => {
	const [receiveData, setReceiveData] = useState(null);
	const handleSendMessage = (data) => {
		setReceiveData(data);
	};

	return (
		<div className="flex flex-col">
			<Typography
				variant="h3"
				className="text-admin text-2xl desktop:text-3xl"
			>
				Verify Message
			</Typography>

			<div className="w-full mt-4 grid desktop:grid-cols-2 border-[2px] border-solid border-blue-gray-600 rounded-lg overflow-hidden">
				<SendMessage submit={handleSendMessage} />
				<hr className="my-4 border-blue-gray-600 desktop:hidden" />
				<ReceiveMessage receiveData={receiveData} />
			</div>
		</div>
	);
};

export default VerifyMessage;
