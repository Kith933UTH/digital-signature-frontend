import React, { useState } from 'react';
import { Button, Typography } from '@material-tailwind/react';
import axios from 'axios';
import PrivateKeyArea from './PrivateKeyArea';
import PublicKeyArea from './PublicKeyArea';

const GenerateKey = () => {
	const [data, setData] = useState(null);
	const handleGetKey = async () => {
		try {
			const res = await axios.get(
				'https://new-express-project-tau-five.vercel.app/generate-key-pair'
			);
			setData(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex flex-col mb-12">
			<Typography
				variant="h3"
				className="text-admin text-2xl desktop:text-3xl"
			>
				RSA Key Generator
			</Typography>
			<Typography variant="paragraph" className="text-base font-normal">
				You may generate an RSA private key with the help of this tool.
				Additionally, it will display the public key of a generated or
				pasted private key.
			</Typography>
			<div className="w-full mt-4 grid grid-cols-1 desktop:grid-cols-2 border-[2px] border-solid border-blue-gray-600 rounded-lg overflow-hidden">
				<PrivateKeyArea
					data={data?.privateKey ? data.privateKey : ''}
				/>
				<PublicKeyArea data={data?.publicKey ? data.publicKey : ''} />
				<div className="desktop:col-span-2 flex justify-center py-2">
					<Button
						className="bg-admin"
						size="md"
						onClick={handleGetKey}
					>
						Generate key pair
					</Button>
				</div>
			</div>
		</div>
	);
};

export default GenerateKey;
