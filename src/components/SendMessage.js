import { Button, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';
import axios from 'axios';

const SendMessage = ({ submit }) => {
	const [data, setData] = useState({
		message: '',
		privateKey: '',
		signature: '',
	});

	const handleSignSignature = async () => {
		try {
			const res = await axios.post(
				'https://new-express-project-44a0ct8wt-kiths-projects.vercel.app/sign',
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

				<div className="col-span-2 flex justify-center py-2 mb-[9px]">
					<Button
						className="bg-admin"
						size="md"
						onClick={handleSignSignature}
						disabled={data.message === '' || data.privateKey === ''}
					>
						Compute Signature
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
