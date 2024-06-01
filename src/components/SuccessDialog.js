import React from 'react';
import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
	Typography,
} from '@material-tailwind/react';

export function SuccessDialog({ open, handler }) {
	return (
		<Dialog open={open} size="sm" handler={handler}>
			<DialogHeader className="justify-center">
				<Typography className="text-center font-bold text-admin text-2xl">
					Verified.
				</Typography>
			</DialogHeader>
			<DialogBody className="py-0">
				<Typography className="text-center font-medium text-xl">
					The received message has been authenticated and its content
					has not been altered during transmission.
				</Typography>
			</DialogBody>
			<DialogFooter>
				<Button className="bg-admin" onClick={handler}>
					<span>Confirm</span>
				</Button>
			</DialogFooter>
		</Dialog>
	);
}
