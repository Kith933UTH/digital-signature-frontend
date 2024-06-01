import React from 'react';
import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
	Typography,
} from '@material-tailwind/react';

export function ErrorDialog({ open, handler }) {
	return (
		<Dialog open={open} size="sm" handler={handler}>
			<DialogHeader className="justify-center">
				<Typography className="text-center font-bold text-red-600 text-2xl">
					Not verified.
				</Typography>
			</DialogHeader>
			<DialogBody className="py-0">
				<Typography className="text-center font-medium text-xl">
					The received message may not be from a trustworthy source or
					may have been modified.
				</Typography>
			</DialogBody>
			<DialogFooter>
				<Button className="bg-red-600" onClick={handler}>
					<span>Confirm</span>
				</Button>
			</DialogFooter>
		</Dialog>
	);
}
