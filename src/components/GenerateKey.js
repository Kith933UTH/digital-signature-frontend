import React, { useState } from 'react';
import { Button, Typography } from '@material-tailwind/react';
import axios from 'axios';
import PrivateKeyArea from './PrivateKeyArea';
import PublicKeyArea from './PublicKeyArea';
import Loading from './Loading';

const GenerateKey = () => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const handleGetKey = async () => {
		setLoading(true);
		try {
			const res = await axios.get(
				'https://new-express-project-tau-five.vercel.app/generate-key-pair'
			);
			setData(res.data);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
		setLoading(false);
	};

	return (
		<div className="flex flex-col mb-12">
			<Typography
				variant="h3"
				className="text-admin text-2xl desktop:text-3xl font-bold"
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
						className="bg-admin relative"
						size="md"
						onClick={handleGetKey}
						disabled={loading}
					>
						<span className={loading ? 'opacity-0' : ''}>
							Generate key pair
						</span>
						{loading && (
							<Loading
								customStyle={
									'!min-h-full absolute top-0 left-0'
								}
								sizeStyle={'h-6 w-6'}
							/>
						)}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default GenerateKey;
