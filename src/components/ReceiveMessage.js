import { Button, Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SuccessDialog } from './SuccessDialog';
import { ErrorDialog } from './ErrorDialog';
import Loading from './Loading';

const ReceiveMessage = ({ receiveData }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(!open);
	const [openError, setOpenError] = useState(false);
	const handleOpenError = () => setOpenError(!openError);
	const [loading, setLoading] = useState(false);

	const [data, setData] = useState({
		data: '',
		publicKey: '',
		signature: '',
	});

	useEffect(() => {
		if (receiveData) {
			setData((prev) => {
				return {
					...prev,
					data: receiveData.data,
					signature: receiveData.signature,
				};
			});
		}
	}, [receiveData]);

	const handleVerifySignature = async () => {
		setLoading(true);
		try {
			const res = await axios.post(
				'https://new-express-project-tau-five.vercel.app/verify',
				{
					data: data.data,
					publicKey: data.publicKey,
					signature: data.signature,
				}
			);

			if (res.data.verify) {
				handleOpen();
			} else {
				handleOpenError();
			}
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	};

	return (
		<div className="flex flex-col ">
			<div className="w-full p-4">
				<Typography className="text-base font-semibold">
					Received Message
				</Typography>
				<textarea
					rows={2}
					spellCheck={false}
					className="w-full border-[1px] rounded-md border-solid border-blue-gray-600 p-2 font-medium"
					onChange={(e) => setData({ ...data, data: e.target.value })}
					value={data.data}
				></textarea>

				<Typography className="text-base font-semibold mt-1">
					Public Key
				</Typography>
				<textarea
					rows={7}
					spellCheck={false}
					className="w-full border-[1px] rounded-md border-solid border-blue-gray-600 p-2 text-sm font-medium"
					onChange={(e) =>
						setData({ ...data, publicKey: e.target.value })
					}
					value={data.publicKey}
				></textarea>

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
						className="bg-admin relative"
						size="md"
						onClick={handleVerifySignature}
						disabled={
							data.data === '' ||
							data.publicKey === '' ||
							data.signature === '' ||
							loading
						}
					>
						<span className={loading ? 'opacity-0' : ''}>
							Verify
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
			<SuccessDialog open={open} handler={handleOpen} />
			<ErrorDialog open={openError} handler={handleOpenError} />
		</div>
	);
};

export default ReceiveMessage;
