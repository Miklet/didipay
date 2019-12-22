import React from 'react';
import {useMiniRouter} from './MiniRouter';
import clsx from 'clsx';

export function Link({children, to, className, style}) {
	const {push} = useMiniRouter();

	return (
		<a
			href={to}
			onClick={e => {
				e.preventDefault();
				push(to);
			}}
			className={clsx('inline-block', className)}
			style={style}
		>
			{children}
		</a>
	);
}
