import React from 'react';
import clsx from 'clsx';

export function Inline({children, spacing = 'medium'}) {
	let childrenCount = React.Children.count(children);

	return (
		<div className="flex flex-row">
			{React.Children.map(children, (child, index) => {
				if (child == null) {
					return null;
				}

				let isLastChild = index === childrenCount - 1;

				let className = clsx(
					!isLastChild && {
						'mr-2': spacing === 'small',
						'mr-4': spacing === 'medium',
						'mr-6': spacing === 'large',
					},
				);

				return <div className={className}>{child}</div>;
			})}
		</div>
	);
}
