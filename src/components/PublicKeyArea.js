import { IconButton, Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { useCopyToClipboard } from 'usehooks-ts';
import { CheckIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';

const PublicKeyArea = ({ data }) => {
	const [value, copy] = useCopyToClipboard();
	const [copied, setCopied] = useState(false);
	const [areaData, setAreaData] = useState('');

	useEffect(() => setAreaData(data), [data]);

	const handleCopy = () => {
		copy(data)
			.then(() => {
				console.log('Copied!', { value });
			})
			.catch((error) => {
				console.error('Failed to copy!', error);
			});
		setCopied(true);
	};

	return (
		<div className="flex flex-col border-b-[1px] border-solid border-blue-gray-600">
			<div className="bg-gray-300 border-b-[1px] border-solid border-blue-gray-600 relative">
				<Typography className="text-lg p-3 text-center font-semibold">
					Public Key
				</Typography>
				{areaData !== '' && (
					<div className="flex items-center gap-x-4 absolute right-2 h-full top-0">
						<IconButton
							onMouseLeave={() => setCopied(false)}
							onClick={handleCopy}
							className="bg-admin"
						>
							{copied ? (
								<CheckIcon className="h-5 w-5 text-white " />
							) : (
								<DocumentDuplicateIcon className="h-5 w-5 text-white" />
							)}
						</IconButton>
					</div>
				)}
			</div>
			<div className="w-full p-2 -mb-2">
				<textarea
					rows={10}
					spellCheck={false}
					className="w-full border-[1px] rounded-md border-solid border-blue-gray-600 p-2 text-sm font-medium"
					onChange={(e) => setAreaData(e.target.value)}
					value={areaData}
				></textarea>
			</div>
		</div>
	);
};

export default PublicKeyArea;
