import { Button, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';
import axios from 'axios';
import Loading from './Loading';

const SendMessage = ({ submit }) => {
	const [data, setData] = useState({
		message: '',
		privateKey: '',
		signature: '',
	});
	const [loading, setLoading] = useState(false);

	const handleSignSignature = async () => {
		setLoading(true);
		try {
			const res = await axios.post(
				'https://new-express-project-tau-five.vercel.app/sign',
				{
					data: data.message,
					privateKey: data.privateKey,
				}
			);

			setData({
				...data,
				message: res.data.data,
				signature: res.data.signature,
			});
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	};

	return (
		<div className="flex flex-col desktop:border-r-[1px] border-solid border-blue-gray-600">
			<div className="w-full p-4">
				<Typography className="text-base font-semibold">
					Message
				</Typography>
				<textarea
					rows={2}
					spellCheck={false}
					className="w-full border-[1px] rounded-md border-solid border-blue-gray-600 p-2 font-medium"
					onChange={(e) =>
						setData({ ...data, message: e.target.value })
					}
					value={data.message}
				></textarea>

				<Typography className="text-base font-semibold mt-1">
					Private Key
				</Typography>
				<textarea
					rows={4}
					spellCheck={false}
					className="w-full border-[1px] rounded-md border-solid border-blue-gray-600 p-2 text-sm font-medium"
					onChange={(e) =>
						setData({ ...data, privateKey: e.target.value })
					}
					value={data.privateKey}
				></textarea>

				<div className="col-span-2 flex justify-center py-2 mb-[8px]">
					<Button
						className="bg-admin relative"
						size="md"
						onClick={handleSignSignature}
						disabled={
							data.message === '' ||
							data.privateKey === '' ||
							loading
						}
					>
						<span className={loading ? 'opacity-0' : ''}>
							Compute Signature
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

				<Typography className="text-base font-semibold mt-1">
					Signature
				</Typography>
				<textarea
					rows={6}
					spellCheck={false}
					className="w-full border-[1px] rounded-md border-solid border-blue-gray-600 p-2 text-sm font-medium"
					onChange={(e) =>
						setData({ ...data, signature: e.target.value })
					}
					value={data.signature}
				></textarea>
				<div className="col-span-2 flex justify-center py-2">
					<Button
						className="bg-admin"
						size="md"
						onClick={() =>
							submit({
								data: data.message,
								signature: data.signature,
							})
						}
						disabled={data.message === '' || data.signature === ''}
					>
						Send Message
					</Button>
				</div>
			</div>
		</div>
	);
};

export default SendMessage;
